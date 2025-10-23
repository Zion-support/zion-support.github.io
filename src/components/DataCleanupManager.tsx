'use client';
/**
 * Data Cleanup Manager Component
 * Provides UI for managing data cleanup operations
 */
import React, { useState, useEffect } from 'react';
import { dataCleanup, CleanupConfig, CleanupStats } from '../utils/dataCleanup';
import { scheduledCleanup, ScheduleStats } from '../utils/scheduledCleanup';

interface DataCleanupManagerProps {
  className?: string;
  showAdvanced?: boolean;
}

const DataCleanupManager: React.FC<DataCleanupManagerProps> = ({ 
  className = ''
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cleanupStats, setCleanupStats] = useState<CleanupStats | null>(null);
  const [scheduleStats, setScheduleStats] = useState<ScheduleStats | null>(null);
  const [storageStats, setStorageStats] = useState<any>(null);
  const [config, setConfig] = useState<CleanupConfig>({
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    storageTypes: ['localStorage', 'sessionStorage'],
    dryRun: false,
    batchSize: 100
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Load initial data
  useEffect(() => {
    loadStats();
    loadScheduleStats();
  }, []);

  const loadStats = async () => {
    try {
      const stats = await dataCleanup.getStorageStats();
      setStorageStats(stats);
    } catch (err) {
      console.error('Failed to load storage stats:', err);
    }
  };

  const loadScheduleStats = () => {
    const stats = scheduledCleanup.getStats();
    setScheduleStats(stats);
  };

  const handleCleanup = async (dryRun = false) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const cleanupConfig = { ...config, dryRun };
      const stats = await dataCleanup.cleanup(cleanupConfig);
      setCleanupStats(stats);
      
      if (dryRun) {
        setSuccess(`Dry run completed. Would delete ${stats.deletedRecords} records.`);
      } else {
        setSuccess(`Cleanup completed. Deleted ${stats.deletedRecords} records.`);
      }
      
      // Reload stats
      await loadStats();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Cleanup failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleScheduleToggle = () => {
    if (scheduledCleanup.getStats().isRunning) {
      scheduledCleanup.stop();
    } else {
      scheduledCleanup.start();
    }
    loadScheduleStats();
  };

  const handleRunNow = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const stats = await scheduledCleanup.runNow();
      setCleanupStats(stats);
      setSuccess(`Immediate cleanup completed. Deleted ${stats.deletedRecords} records.`);
      await loadStats();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Immediate cleanup failed');
    } finally {
      setIsLoading(false);
    }
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ${hours % 24}h`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Data Cleanup Manager</h2>
        <p className="text-gray-600">
          Manage and clean up old data records from various storage mechanisms.
        </p>
      </div>

      {/* Error/Success Messages */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800">{success}</p>
        </div>
      )}

      {/* Storage Statistics */}
      {storageStats && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Storage Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900">Local Storage</h4>
              <p className="text-blue-700">
                {storageStats.localStorage.records} records
              </p>
              <p className="text-sm text-blue-600">
                {formatBytes(storageStats.localStorage.size)}
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-900">Session Storage</h4>
              <p className="text-green-700">
                {storageStats.sessionStorage.records} records
              </p>
              <p className="text-sm text-green-600">
                {formatBytes(storageStats.sessionStorage.size)}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium text-purple-900">Memory</h4>
              <p className="text-purple-700">
                {storageStats.memory.records} records
              </p>
              <p className="text-sm text-purple-600">
                {formatBytes(storageStats.memory.size)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Cleanup Configuration */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Cleanup Configuration</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maximum Age (days)
            </label>
            <input
              type="number"
              value={Math.floor(config.maxAge! / (24 * 60 * 60 * 1000))}
              onChange={(e) => setConfig({
                ...config,
                maxAge: parseInt(e.target.value) * 24 * 60 * 60 * 1000
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="1"
              max="365"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Storage Types
            </label>
            <div className="space-y-2">
              {['localStorage', 'sessionStorage', 'memory'].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={config.storageTypes?.includes(type as any) || false}
                    onChange={(e) => {
                      const types = config.storageTypes || [];
                      if (e.target.checked) {
                        setConfig({ ...config, storageTypes: [...types, type as any] });
                      } else {
                        setConfig({ 
                          ...config, 
                          storageTypes: types.filter(t => t !== type) 
                        });
                      }
                    }}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700 capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.dryRun || false}
                onChange={(e) => setConfig({ ...config, dryRun: e.target.checked })}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Dry Run (preview only)</span>
            </label>
          </div>
        </div>
      </div>

      {/* Cleanup Actions */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Cleanup Actions</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleCleanup(true)}
            disabled={isLoading}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Running...' : 'Preview Cleanup'}
          </button>
          <button
            onClick={() => handleCleanup(false)}
            disabled={isLoading}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Running...' : 'Run Cleanup'}
          </button>
          <button
            onClick={handleRunNow}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Running...' : 'Run Now'}
          </button>
        </div>
      </div>

      {/* Scheduled Cleanup */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Scheduled Cleanup</h3>
        {scheduleStats && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Status:</span>
              <span className={`px-2 py-1 rounded text-xs ${
                scheduleStats.isRunning ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {scheduleStats.isRunning ? 'Running' : 'Stopped'}
              </span>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Total Runs: {scheduleStats.totalRuns}</p>
              <p>Successful: {scheduleStats.successfulRuns}</p>
              <p>Failed: {scheduleStats.failedRuns}</p>
              {scheduleStats.nextRun && (
                <p>Next Run: {new Date(scheduleStats.nextRun).toLocaleString()}</p>
              )}
            </div>
            <button
              onClick={handleScheduleToggle}
              className="mt-3 px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              {scheduleStats.isRunning ? 'Stop' : 'Start'} Schedule
            </button>
          </div>
        )}
      </div>

      {/* Cleanup Results */}
      {cleanupStats && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Last Cleanup Results</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-700">Total Records</p>
                <p className="text-gray-600">{cleanupStats.totalRecords}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Deleted</p>
                <p className="text-red-600">{cleanupStats.deletedRecords}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Preserved</p>
                <p className="text-green-600">{cleanupStats.preservedRecords}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Execution Time</p>
                <p className="text-gray-600">{formatTime(cleanupStats.executionTime)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataCleanupManager;