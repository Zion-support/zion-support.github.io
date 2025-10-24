'use client'

import React from 'react'

const PerformanceDashboard: React.FC = () => {
  return (
    <div className="performance-dashboard">
      <h2>Performance Dashboard</h2>
      <div className="metrics">
        <div className="metric">
          <span>Load Time</span>
          <span>1.2s</span>
        </div>
        <div className="metric">
          <span>Memory Usage</span>
          <span>45MB</span>
        </div>
      </div>
    </div>
  )
}

export default PerformanceDashboard
