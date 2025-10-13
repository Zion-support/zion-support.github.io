<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
interface PerformanceDashboardProps;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

interface PerformanceDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceDashboard({ className = '', children }: PerformanceDashboardProps) {
  return (
    <div className={`${className}`}>
      {children}
  </div>
  );
}
=======
import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, TrendingUp, AlertCircle, X, RefreshCw } from 'lucide-react';
import logger from '../../utils/logger';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memory?: number;
  connection?: string;
}

interface PerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const measurePerformance = () => {
      const newMetrics: Partial<PerformanceMetrics> = {};

      // Get Core Web Vitals
      if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint') {
              if (entry.name === 'first-contentful-paint') {
                newMetrics.fcp = entry.startTime;
              }
            }
            
            if (entry.entryType === 'largest-contentful-paint') {
              newMetrics.lcp = entry.startTime;
            }
            
            if (entry.entryType === 'first-input') {
              newMetrics.fid = (entry as any).processingStart - entry.startTime;
            }
            
            if (entry.entryType === 'layout-shift') {
              if (!(entry as any).hadRecentInput) {
                newMetrics.cls = (newMetrics.cls || 0) + (entry as any).value;
              }
            }
          }
        });

        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

        // Get TTFB
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          newMetrics.ttfb = navigation.responseStart - navigation.requestStart;
        }

        // Get memory usage
        if ('memory' in performance) {
          newMetrics.memory = (performance as any).memory.usedJSHeapSize / 1024 / 1024; // MB
        }

        // Get connection info
        if ('connection' in navigator) {
          const connection = (navigator as any).connection;
          newMetrics.connection = `${connection.effectiveType} (${connection.downlink}Mbps)`;
        }

        setMetrics(newMetrics as PerformanceMetrics);
        setIsMonitoring(true);
      }
    };

    measurePerformance();

    return () => {
      setIsMonitoring(false);
    };
  }, [isVisible]);

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return <TrendingUp className="w-4 h-4" />;
    if (value <= thresholds.needsImprovement) return <AlertCircle className="w-4 h-4" />;
    return <AlertCircle className="w-4 h-4" />;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Performance Dashboard</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Status */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`}></div>
            <span className="text-gray-300">
              {isMonitoring ? 'Monitoring active' : 'Monitoring inactive'}
            </span>
          </div>
        </div>

        {/* Metrics Grid */}
        {metrics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* FCP */}
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">First Contentful Paint</h3>
                <div className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
                  {getScoreIcon(metrics.fcp, { good: 1800, needsImprovement: 3000 })}
                </div>
              </div>
              <p className="text-2xl font-bold text-cyan-400">{metrics.fcp.toFixed(0)}ms</p>
              <p className="text-sm text-gray-400">Time to first content</p>
            </div>

            {/* LCP */}
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">Largest Contentful Paint</h3>
                <div className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
                  {getScoreIcon(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
                </div>
              </div>
              <p className="text-2xl font-bold text-cyan-400">{metrics.lcp.toFixed(0)}ms</p>
              <p className="text-sm text-gray-400">Time to largest content</p>
            </div>

            {/* FID */}
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">First Input Delay</h3>
                <div className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
                  {getScoreIcon(metrics.fid, { good: 100, needsImprovement: 300 })}
                </div>
              </div>
              <p className="text-2xl font-bold text-cyan-400">{metrics.fid.toFixed(0)}ms</p>
              <p className="text-sm text-gray-400">Time to first interaction</p>
            </div>

            {/* CLS */}
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">Cumulative Layout Shift</h3>
                <div className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
                  {getScoreIcon(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}
                </div>
              </div>
              <p className="text-2xl font-bold text-cyan-400">{metrics.cls.toFixed(3)}</p>
              <p className="text-sm text-gray-400">Visual stability</p>
            </div>

            {/* TTFB */}
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">Time to First Byte</h3>
                <div className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
                  {getScoreIcon(metrics.ttfb, { good: 800, needsImprovement: 1800 })}
                </div>
              </div>
              <p className="text-2xl font-bold text-cyan-400">{metrics.ttfb.toFixed(0)}ms</p>
              <p className="text-sm text-gray-400">Server response time</p>
            </div>

            {/* Memory */}
            {metrics.memory && (
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">Memory Usage</h3>
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-2xl font-bold text-cyan-400">{metrics.memory.toFixed(1)}MB</p>
                <p className="text-sm text-gray-400">JavaScript heap size</p>
              </div>
            )}

            {/* Connection */}
            {metrics.connection && (
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">Connection</h3>
                  <Clock className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-lg font-bold text-cyan-400">{metrics.connection}</p>
                <p className="text-sm text-gray-400">Network type</p>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh Page
          </button>
          <button
            onClick={() => {
              logger.debug('Performance metrics:', metrics);
              console.log('Performance metrics:', metrics);
            }}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            <Activity className="w-4 h-4" />
            Log Metrics
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
