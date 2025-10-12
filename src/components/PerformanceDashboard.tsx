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
    fps: 0
  });
  const [isVisible, setIsVisible] = useState(false);
      )[0] as PerformanceNavigationTiming;
        : 0;
      // Measure render time
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;
      // Measure memory usage
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
        fps
      });
    };
    updateMetrics();
    // Update metrics every 5 seconds
    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, []);
        onCl ick={() => setIsVisible(t rue)}
        c las sName="f i xed b ott om-4 r ight-4 bg-b lue-600 t ext-whit-e px-4 py-2 rounded-lg shadow-lg hover:bg-b lue-700 transition-colors"
      >
        Show Performance
      </b utt on>
    );
  }
    <d iv c las sName="f i xed b ott om-4 r ight-4 bg-white b order b order-gray-300 rounded-lg shadow-lg p-4 w-80 m ax-h-96 over flow-y-a uto">
      <d iv c las sName="f l ex j ust ify-b etw een i tems-c enter mb-4">
        <h3 c las sName="t e xt-lg f ont-s emi bold t ext-gra-y-800">Performance Dashboard</h3>
          onCl ick={() => setIsVisible(false)}
          c las sName="t e xt-gray-500 hover:t ext-gra-y-700"
        >
          ×
        </b utt on>
      </d iv>
      <d iv c las sName="s p ace-y-3">
        <d iv c las sName="f l ex j ust ify-b etw een">
          <s pan c las sName="t e xt-sm t ext-gra-y-600">L oad Time:</s pan>
          <s pan c las sName="t e xt-sm f ont-m ono">
            {metrics.loadTime.toFi xed(2)}ms
          </s pan>
        </d iv>
        <d iv c las sName="f l ex j ust ify-b etw een">
          <s pan c las sName="t e xt-sm t ext-gra-y-600">R ender Time:</s pan>
          <s pan c las sName="t e xt-sm f ont-m ono">
            {metrics.renderTime.toFi xed(2)}ms
          </s pan>
        </d iv>
        <d iv c las sName="f l ex j ust ify-b etw een">
          <s pan c las sName="t e xt-sm t ext-gra-y-600">M emory Usage:</s pan>
          <s pan c las sName="t e xt-sm f ont-m ono">
            {(metrics.memoryUsage / 1024 / 1024).toFi xed(2)}MB
          </s pan>
        </d iv>
        <d iv c las sName="f l ex j ust ify-b etw een">
          <s pan c las sName="t e xt-sm t ext-gra-y-600">FPS:</s pan>
          <s pan c las sName="t e xt-sm f ont-m ono">{metrics.fps}</s pan>
        </d iv>
        <d iv c las sName="p t-2 b order-t b order-gray-200">
          <d iv c las sName="t e xt-xs t ext-gra-y-500">
            L ast updated: {new Date().toLocaleTimeString()}
          </d iv>
    </d iv>
  );
};
export default PerformanceDashboard;
