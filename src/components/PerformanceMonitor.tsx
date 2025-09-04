

import React, { useState, useEffect } from 'react'

  useEffect(() => {

  return (
    <div className={`performance-monitor ${className}`}>
      <div className="metrics">
        <div>Load Time: {metrics.loadTime}ms</div>
        <div>Memory: {metrics.memory}MB</div>
        <div>FPS: {metrics.fps}</div>
      </div>
    </div>
  )
}

