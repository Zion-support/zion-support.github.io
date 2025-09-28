import React, { useState, useEffect } from 'react';
import { useErrorRecovery, ErrorReport, RecoveryAction } from '../utils/comprehensiveErrorRecovery';

/**
 * Error Recovery Dashboard
 * Comprehensive error monitoring and recovery management
 */
export const ErrorRecoveryDashboard: React.FC = () => {
  const { errorReports, executeRecoveryAction, clearResolvedReports } = useErrorRecovery();
  const [selectedReport, setSelectedReport] = useState<ErrorReport | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const getStatusColor = (status: ErrorReport['status']) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'recovering': return 'text-blue-600 bg-blue-100';
      case 'recovered': return 'text-green-600 bg-green-100';
      case 'failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityColor = (severity: ErrorReport['context']['severity']) => {
    switch (severity) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-orange-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getSeverityIcon = (severity: ErrorReport['context']['severity']) => {
    switch (severity) {
      case 'low': return '🟢';
      case 'medium': return '🟡';
      case 'high': return '🟠';
      case 'critical': return '🔴';
      default: return '⚪';
    }
  };

  const getCategoryIcon = (category: ErrorReport['context']['category']) => {
    switch (category) {
      case 'network': return '🌐';
      case 'component': return '🧩';
      case 'api': return '🔌';
      case 'validation': return '✅';
      case 'system': return '⚙️';
      default: return '❓';
    }
  };

  const handleExecuteAction = async (reportId: string, action: RecoveryAction) => {
    const success = await executeRecoveryAction(reportId, action.id);
    if (success) {
      console.log(`Recovery action executed successfully: ${action.name}`);
    } else {
      console.error(`Recovery action failed: ${action.name}`);
    }
  };

  const groupedReports = errorReports.reduce((groups: Record<string, ErrorReport[]>, report: ErrorReport) => {
    const key = report.context.category;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(report);
    return groups;
  }, {} as Record<string, ErrorReport[]>);

  const totalErrors = errorReports.length;
  const pendingErrors = errorReports.filter((r: ErrorReport) => r.status === 'pending').length;
  const recoveredErrors = errorReports.filter((r: ErrorReport) => r.status === 'recovered').length;
  const failedErrors = errorReports.filter((r: ErrorReport) => r.status === 'failed').length;

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className={`fixed bottom-24 right-4 z-40 p-3 rounded-full shadow-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
          totalErrors > 0 
            ? 'bg-red-600 hover:bg-red-700 text-white focus-visible:ring-red-500' 
            : 'bg-gray-600 hover:bg-gray-700 text-white focus-visible:ring-gray-500'
        }`}
        title="Open Error Recovery Dashboard"
        aria-label={`Open Error Recovery Dashboard (${totalErrors} errors)`}
      >
        🚨 {totalErrors > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{totalErrors}</span>}
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-white rounded-lg shadow-xl border border-gray-200 w-96 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Error Recovery</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>Total: {totalErrors}</span>
            <span className="text-yellow-600">Pending: {pendingErrors}</span>
            <span className="text-green-600">Recovered: {recoveredErrors}</span>
            <span className="text-red-600">Failed: {failedErrors}</span>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
          aria-label="Close Error Recovery Dashboard"
        >
          ✕
        </button>
      </div>

      <div className="p-4 space-y-4">
        {totalErrors === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <div className="text-4xl mb-2">✅</div>
            <p>No errors detected</p>
            <p className="text-sm">System is running smoothly</p>
          </div>
        ) : (
          <>
            {/* Error Categories */}
            <div className="space-y-3">
              {Object.entries(groupedReports).map(([category, reports]) => (
                <div key={category} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="mr-2">{getCategoryIcon(category as any)}</span>
                      <span className="font-medium capitalize">{category}</span>
                    </div>
                    <span className="text-sm text-gray-500">{(reports as ErrorReport[]).length} errors</span>
                  </div>
                  
                  <div className="space-y-2">
                    {(reports as ErrorReport[]).slice(0, 3).map((report: ErrorReport) => (
                      <div
                        key={report.id}
                        className={`p-2 rounded cursor-pointer transition-colors ${
                          selectedReport?.id === report.id ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedReport(selectedReport?.id === report.id ? null : report)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="mr-2">{getSeverityIcon(report.context.severity)}</span>
                            <span className="text-sm font-medium truncate">{report.error.message}</span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                            {report.status}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {report.context.timestamp.toLocaleTimeString()} • {report.context.severity}
                        </div>
                      </div>
                    ))}
                    
                    {(reports as ErrorReport[]).length > 3 && (
                      <div className="text-xs text-gray-500 text-center">
                        +{(reports as ErrorReport[]).length - 3} more errors
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Error Details */}
            {selectedReport && (
              <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                <h4 className="font-medium text-gray-800 mb-2">Error Details</h4>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Message:</span>
                    <p className="text-gray-600">{selectedReport.error.message}</p>
                  </div>
                  
                  <div>
                    <span className="font-medium">Component:</span>
                    <span className="text-gray-600 ml-1">{selectedReport.context.component || 'Unknown'}</span>
                  </div>
                  
                  <div>
                    <span className="font-medium">Severity:</span>
                    <span className={`ml-1 ${getSeverityColor(selectedReport.context.severity)}`}>
                      {selectedReport.context.severity}
                    </span>
                  </div>
                  
                  <div>
                    <span className="font-medium">Attempts:</span>
                    <span className="text-gray-600 ml-1">{selectedReport.attempts}/{selectedReport.maxAttempts}</span>
                  </div>
                  
                  <div>
                    <span className="font-medium">Created:</span>
                    <span className="text-gray-600 ml-1">
                      {selectedReport.createdAt.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Recovery Actions */}
                {selectedReport.recoveryActions.length > 0 && (
                  <div className="mt-3">
                    <h5 className="font-medium text-gray-800 mb-2">Recovery Actions</h5>
                    <div className="space-y-2">
                      {selectedReport.recoveryActions.map((action) => (
                        <div key={action.id} className="flex items-center justify-between p-2 bg-white rounded border">
                          <div>
                            <div className="font-medium text-sm">{action.name}</div>
                            <div className="text-xs text-gray-500">{action.description}</div>
                          </div>
                          <button
                            onClick={() => handleExecuteAction(selectedReport.id, action)}
                            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded disabled:opacity-50"
                            disabled={selectedReport.status === 'recovering'}
                          >
                            Execute
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex space-x-2">
              <button
                onClick={clearResolvedReports}
                className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded"
              >
                Clear Resolved
              </button>
              <button
                onClick={() => {
                  // Refresh error reports
                  window.location.reload();
                }}
                className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
              >
                Refresh
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ErrorRecoveryDashboard;