import React from 'react'

const PerformanceMonitor: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-xs text-gray-300">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <span>Performance Monitor</span>
      </div>
    </div>
  )
}

export default PerformanceMonitor
