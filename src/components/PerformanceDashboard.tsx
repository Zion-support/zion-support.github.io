export default PerformanceDashboard;
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  [key: string]: number;
    fps: 0;
  });
  const [isVisible, setIsVisible] = useState(false);
    
      )[0] as PerformanceNavigationTiming;
      
        : 0;
      // Measure render time;
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;
      // Measure memory usage;
      let memoryUsage = 0;
        const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
        memoryUsage = memory?.usedJSHeapSize || 0;
      // Measure FPS (simplified)
      let fps = 0;
        let lastTime = performance.now();
        let frameCount = 0;
        
          frameCount++;
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
          requestAnimationFrame(measureFPS);
        };
        requestAnimationFrame(measureFPS);
        fps;
      });
    };
    updateMetrics();
    // Update metrics every 5 seconds;
    const interval = setInterval(updateMetrics, 5000);
 clearInterval(interval);
  }, []);
      
 setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        Show Performance;
    );
        <h3 className="text-lg font-semibold text-gray-800"></h>Performance Dashboard</h3>
 setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
          ×
          <span className="text-sm text-gray-600"></spa>Load Time:</span>
            {metrics.loadTime.toFixed(2)} ms;
          <span className="text-sm text-gray-600"></spa>Render Time:</span>
            {metrics.renderTime.toFixed(2)} ms;
          <span className="text-sm text-gray-600"></spa>Memory Usage:</span>
            {(metrics.memoryUsage / 1024 / 1024).toFixed(2)} MB;
          <span className="text-sm text-gray-600"></spa>FPS:</span>
          <span className="text-sm font-mono"></spa>{metrics.fps}</span>
            Last updated: {new Date().toLocaleTimeString()} );
};
