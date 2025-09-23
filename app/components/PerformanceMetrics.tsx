"use client";

import React from 'react';

export default function PerformanceMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-xl p-4 shadow">
        <div className="text-sm text-gray-600">Uptime</div>
        <div className="text-2xl font-bold">99.9%</div>
      </div>
      <div className="bg-white rounded-xl p-4 shadow">
        <div className="text-sm text-gray-600">Latency</div>
        <div className="text-2xl font-bold">120ms</div>
      </div>
      <div className="bg-white rounded-xl p-4 shadow">
        <div className="text-sm text-gray-600">Throughput</div>
        <div className="text-2xl font-bold">15k rps</div>
      </div>
      <div className="bg-white rounded-xl p-4 shadow">
        <div className="text-sm text-gray-600">Cost / 1k</div>
        <div className="text-2xl font-bold">$0.07</div>
      </div>
    </div>
  );
}

