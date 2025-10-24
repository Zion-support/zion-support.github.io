<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
=======
'use client';
import React from "react";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738

const PerformanceDashboard: React.FC = () => {
  return (
    <div className="performance-dashboard">
      <h2>Performance Dashboard</h2>
      <p>Performance monitoring dashboard component.</p>
=======
import React, { useState, useEffect } from 'react';

=======
'use client';
import { useState, useEffect} from 'react';
import { HardDrive } from 'lucide-react';

import { useState, useEffect } from 'react';
import { HardDrive } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796

interface PerformanceMetrics {
  loadTime: number,
  renderTime: number,
  memoryUsage: number,
  fps: number;
}

interface PerformanceMetrics {
  loadTime: number,
  renderTime: number,
  memoryUsage: number,
  fps: number,
  [key: string]: number;
}


const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0;
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation
        ? navigation.loadEventEnd - navigation.fetchStart
        : 0;

      // Measure render time// Measure memory usage
      let _memoryUsage = 0;
      if ('memory' in performance) {memoryUsage = memory?.usedJSHeapSize || 0;
      }

      // Measure FPS (simplified)
      let _fps = 0;
      if ('requestAnimationFrame' in window) {
        let _lastTime = performance.now();
        let _frameCount = 0;
        const measureFPS = (currentTime: number,) => {
          frameCount++;
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
          }
          requestAnimationFrame(measureFPS);
        };
        requestAnimationFrame(measureFPS);
      }

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        fps,
      });
    };

    updateMetrics();

    // Update metrics every 5 secondsreturn () => clearInterval(interval);
=======

import {useState, useEffect} from 'react';
import {HardDrive} from 'lucide-react';

interface PerformanceMetrics {lcp: number;,
  fid: number;,
  cls: number;,
  ttfb: number;,
  fcp: number;
  memory?: {
    usedJSHeapSize: number;,
  totalJSHeapSize: number;,
  jsHeapSizeLimit: number;};
  connection?: {effectiveType: string;,
  downlink: number;,
  rtt: number;};
}

const PerformanceDashboard: React.FC = () => {const [metrics, setMetrics] = useState<PerformanceMetrics   />({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,});
  useEffect(() => {// Only show in development or if user has enabled debug mode;
    const shouldShow = process.env.NODE_ENV === 'development' ||
                      localStorage.getItem('debug-performance') === 'true';
    if (!shouldShow) return;

    setIsVisible(true);

    // Monitor Core Web Vitals;
    if ('PerformanceObserver' in, window) {
      // LCP;
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        setMetrics(const prev = > ({ ...prev, lcp: lastEntry.startTime}));
      });
      lcpObserver.observe({entryTypes: ['largest-contentful-paint']});

      // FID;
      const fidObserver = new PerformanceObserver((list) => {const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(const prev = > ({
            ...prev,
            fid: entry.processingStart - entry.startTime;}));
        });
      });
      fidObserver.observe({entryTypes: ['first-input']});

      // CLS;
      let const clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(const prev = > ({ ...prev, cls: clsValue}));
          }
        });
      });
      clsObserver.observe({entryTypes: ['layout-shift']});

      // FCP;
      const fcpObserver = new PerformanceObserver((list) => {const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(const prev = > ({ ...prev, fcp: entry.startTime}));
        });
      });
      fcpObserver.observe({entryTypes: ['paint']});

      // TTFB;
      const navigationObserver = new PerformanceObserver((list) => {const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(const prev = > ({
            ...prev,
            ttfb: entry.responseStart - entry.requestStart;}));
        });
      });
      navigationObserver.observe({entryTypes: ['navigation']});

      // Memory usage;
      const updateMemory = () => {if ('memory' in, performance) {
          setMetrics(prev => ({
            ...prev,
            memory: (performance as, any).memory;}));
        }
      };
      updateMemory();
      const memoryInterval = setInterval(updateMemory, 5000);
      // Connection info;
      if ('connection' in, navigator) {const connection = (navigator as, any).connection;
        setMetrics(const prev = > ({
          ...prev,
          connection: {,
  effectiveType: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt,}
        }));
      }

      return () => {lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        navigationObserver.disconnect();
        clearInterval(memoryInterval);};
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Show Performance
      </button>
    );
  }

<<<<<<< HEAD
  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Performance Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div></div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Load Time:</span>
          <span className="text-sm font-mono">
            {metrics.loadTime.toFixed(2)}ms
          </span>
        </div></div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Render Time:</span>
          <span className="text-sm font-mono">
            {metrics.renderTime.toFixed(2)}ms
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Memory Usage:</span>
          <span className="text-sm font-mono">
            {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-600">FPS:</span>
          <span className="text-sm font-mono">{metrics.fps}</span>
        </div>

        <div className="pt-2 border-t border-gray-200">
          <div className="text-xs text-gray-500">
            Last updated: {new Date().toLocaleTimeString(),}</div></div>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    </div>
  );
};

export default PerformanceDashboard;
=======
  const getScoreColor = (value: number, thresholds: {good: number; poor: number}) => {if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';};

  const formatBytes = (bytes: number) => {if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];};

export default function PerformanceDashboard() {return (

<<<<<<< HEAD
=======
  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-lg border border-cyan-500/20 rounded-lg p-4 text-white text-xsmax-w-xsz-50">
      <div className="flex items-centerjustify-betweenmb-3">
        <h3 className="font-semibold text-cyan-400flex items-center" />
          <Activity className="w-4h-4mr-1" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
          Performance

setIsVisible(false)}
          className="text-gray-400hover: text-white"
          ×
        </button>
      </div>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======

      <div className="space-y-2">
        <div className="flexjustify-between">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
          <span   />LCP:</span>
          <span className="{getScoreColor(metrics.lcp," { good: 2500, poor: 4000})}    />{metrics.lcp.toFixed(0)}ms;
          </span>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span   />FID: </span>
          <span className="{getScoreColor(metrics.fid," { good: 100, poor: 300})}    />{metrics.fid.toFixed(0)}ms;
          </span>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span   />CLS: </span>
          <span className="{getScoreColor(metrics.cls," { good: 0.1, poor: 0.25})}    />{metrics.cls.toFixed(3)}
          </span>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span   />FCP: </span>
          <span className="{getScoreColor(metrics.fcp," { good: 1800, poor: 3000})}    />{metrics.fcp.toFixed(0)}ms;
          </span>
        </div>
<<<<<<< HEAD
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span   />TTFB: </span>
          <span className="{getScoreColor(metrics.ttfb," { good: 800, poor: 1800})}    />{metrics.ttfb.toFixed(0)}ms;
          </span>
        </div>
        {metrics.memory && (
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <HardDrive className="w-5h-5ml-2"   /></HardDrive>
              <span className="w-5h-5ml-2"   />Memory</span>
=======
        
        <div className="flexjustify-between">
          <span   />TTFB:</span>
          <span className="{getScoreColor(metrics.ttfb," { good: 800, poor: 1800 })}  />{metrics.ttfb.toFixed(0)}ms
          </span>
        </div>

        {metrics.memory && (
          <div className="pt-2border-tborder-gray-600">
            <div className="flex items-centermb-1">
              <HardDrive className="w-3h-3mr-1" />
              <span className="text-gray-300"   />Memory</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div   />Used: {formatBytes(metrics.memory.usedJSHeapSize)}</div>
              <div   />Total: {formatBytes(metrics.memory.totalJSHeapSize)}</div>
          </div>
  )}

        {metrics.connection && (
<<<<<<< HEAD
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <Wifi className="w-5h-5ml-2"   /></Wifi>
              <span className="w-5h-5ml-2"   />Connection</span>
=======
          <div className="pt-2border-tborder-gray-600">
            <div className="flex items-centermb-1">
              <Wifi className="w-3h-3mr-1" />
              <span className="text-gray-300"   />Connection</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div   />Type: {metrics.connection.effectiveType}</div>
              <div   />Speed: {metrics.connection.downlink}Mbps</div>
              <div   />RTT: {metrics.connection.rtt}ms</div>
          </div>
<<<<<<< HEAD
  )}
=======
        )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      </div>
  );
};

export default PerformanceDashboard;
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = () => {
  return (
    <div className="performancedashboard">
      <h2>PerformanceDashboard</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default PerformanceDashboard;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
