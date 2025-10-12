  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  [key: string]: number;
}
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
      }
      // Measure FPS (simplified)
      let fps = 0;
        let lastTime = performance.now();
        let frameCount = 0;
        
          frameCount++;
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
          }
          requestAnimationFrame(measureFPS);
        };
        requestAnimationFrame(measureFPS);
      }
        fps;
      });
    };
    updateMetrics();
    // Update metrics every 5 seconds;
    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, []);
      
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors" >
        Show Performance;
      </button>
    );
  }
    <>div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto" ></div><div className="flex justify-between items-center mb-4" ></div></>
        <h3 className="text-lg font-semibold text-gray-800" >Performance Dashboard</h3>
        
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700" >
          ×
        </button>
      </div>
      <>div className="space-y-3" ></div><div className="flex justify-between" ></div></>
          <span className="text-sm text-gray-600" >Load Time:</span>
          <span className="text-sm font-mono" ></span>
            {metrics.loadTime.toFixed(2)}ms;
          </span>
        </div>
        <>div className="flex justify-between" ></div>
          <span className="text-sm text-gray-600" >Render Time:</span>
          <span className="text-sm font-mono" ></span>
            {metrics.renderTime.toFixed(2)}ms;
          </span>
        </div><div className="flex justify-between" ></div></>
          <span className="text-sm text-gray-600" >Memory Usage:</span>
          <span className="text-sm font-mono" ></span>
            {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB;
          </span>
        </div>
        <>div className="flex justify-between" ></div>
          <span className="text-sm text-gray-600" >FPS:</span>
          <span className="text-sm font-mono" >{metrics.fps}</span>
        </div><div className="pt-2 border-t border-gray-200" ></div></>
          <div className="text-xs text-gray-500" ></div>
            Last updated: {new Date().toLocaleTimeString()}
          </div>
    </div>
  );
};
export default PerformanceDashboard;

  </div></div>