import React, { useEffect, useState } from 'react'
interface PerformanceMetrics { loadTime: number;

  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;