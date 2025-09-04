

import React, { useState, useEffect } from 'react'

  useEffect(() => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">"      <div className="bg-white p-4 rounded-lg shadow">"        <h3 className="font-semibold">Load Time</h3>"        <p className="text-2xl font-bold text-blue-600">{metrics.loadTime.toFixed(2)}ms</p>
      </div>"      <div className="bg-white p-4 rounded-lg shadow">"        <h3 className="font-semibold">Memory Usage</h3>"        <p className="text-2xl font-bold text-orange-600">{metrics.memoryUsage.toFixed(1)}%</p>
      </div>"      <div className="bg-white p-4 rounded-lg shadow">"        <h3 className="font-semibold">CPU Usage</h3>"        <p className="text-2xl font-bold text-purple-600">{metrics.cpuUsage.toFixed(1)}%</p>
      </div>
    </div>
  )
}
"