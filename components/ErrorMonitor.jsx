import React from 'react';
import { useErrorCapture } from '../automation/useErrorCapture';

export default function ErrorMonitor() {
  const {
    errors,
    isCapturing,
    generateCursorChatReport,
    sendReport,
    clearErrors,
    getErrorCount
  } = useErrorCapture({
    maxErrors: 100,
    autoReport: true,
    reportEndpoint: '/api/error-capture',
    onError: (error) => console.log('🚨 New error captured:', error),
    onReport: (report, success) => console.log('📊 Report sent:', success ? 'Success' : 'Failed')
  });

  const handleGenerateReport = () => {
    const report = generateCursorChatReport();
    console.log('📝 Generated report:', report);
    
    // Copy to clipboard if possible
    if (navigator.clipboard) {
      navigator.clipboard.writeText(report);
      alert('Report copied to clipboard!');
    }
  };

  const handleSendReport = async () => {
    const success = await sendReport();
    if (success) {
      alert('Report sent successfully!');
    } else {
      alert('Failed to send report. Check console for details.');
    }
  };

  if (!isCapturing) {
    return <div>Loading error monitor...</div>;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm">
      <h3 className="text-lg font-semibold mb-2">🐛 Error Monitor</h3>
      
      <div className="space-y-2 mb-4">
        <p className="text-sm">
          <span className="font-medium">Status:</span> 
          <span className={`ml-2 px-2 py-1 rounded text-xs ${isCapturing ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {isCapturing ? 'Active' : 'Inactive'}
          </span>
        </p>
        
        <p className="text-sm">
          <span className="font-medium">Errors:</span> 
          <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
            {getErrorCount()}
          </span>
        </p>
      </div>

      <div className="space-y-2">
        <button
          onClick={handleGenerateReport}
          className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          📝 Generate Report
        </button>
        
        <button
          onClick={sendReport}
          className="w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
        >
          📤 Send Report
        </button>
        
        <button
          onClick={clearErrors}
          className="w-full px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
        >
          🧹 Clear Errors
        </button>
      </div>

      {errors.length > 0 && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
          <p className="text-xs text-red-700">
            Latest error: {errors[errors.length - 1]?.message?.substring(0, 50)}...
          </p>
        </div>
      )}
    </div>
  );
}