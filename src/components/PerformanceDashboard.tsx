  load Time: number;
  render Time: number;
  memory Usage: number;
  fps: number;
}
  load Time: number;
  render Time: number;
  memory Usage: number;
  fps: number;
  [key: string]: number;
}
    fps: 0
  });
  const [is Visible, set Is Visible] = use State(false);
    
      )[0] as Performance Navigation Timing;
      
        : 0;
      // Measure render time
      const render Start = performance.now();
      const render Time = performance.now() - render Start;
      // Measure memory usage
      let memory Usage = 0;
        const memory = (performance as { memory?: { used JS Heap Size: number } }).memory;
        memory Usage = memory?.used JS Heap Size || 0;
      }
      // Measure F PS (simplified)
      let fps = 0;
        let last Time = performance.now();
        let frame Count = 0;
        
          frame Count++;
            fps = Math.round((frame Count * 1000) / (current Time - last Time));
            frame Count = 0;
            last Time = current Time;
          }
          request Animation Frame(measure FP S);
        };
        request Animation Frame(measure FP S);
      }
        fps
      });
    };
    update Metrics();
    // Update metrics every 5 seconds
    const interval = set Interval(update Metrics, 5000);
    return () => clear Interval(interval);
  }, []);
      
        on Click={() => set Is Visible(true)}
        class Name="f ixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Show Performance
      </b utton>
    );
  }
    <d iv class Name="f ixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
      <d iv class Name="f lex justify-between items-center mb-4">
        <h3 c lass Name="t ext-lg font-semibold text-gray-800">Performance Dashboard</h3>
        
          on Click={() => set Is Visible(false)}
          class Name="t ext-gray-500 hover:text-gray-700"
        >
          ×
        </b utton>
      </d iv>
      <d iv class Name="s pace-y-3">
        <d iv class Name="f lex justify-between">
          <s pan class Name="t ext-sm text-gray-600">Load Time:</s pan>
          <s pan class Name="t ext-sm font-mono">
            {metrics.load Time.to Fixed(2)}ms
          </s pan>
        </d iv>
        <d iv class Name="f lex justify-between">
          <s pan class Name="t ext-sm text-gray-600">Render Time:</s pan>
          <s pan class Name="t ext-sm font-mono">
            {metrics.render Time.to Fixed(2)}ms
          </s pan>
        </d iv>
        <d iv class Name="f lex justify-between">
          <s pan class Name="t ext-sm text-gray-600">Memory Usage:</s pan>
          <s pan class Name="t ext-sm font-mono">
            {(metrics.memory Usage / 1024 / 1024).to Fixed(2)}M B
          </s pan>
        </d iv>
        <d iv class Name="f lex justify-between">
          <s pan class Name="t ext-sm text-gray-600">F PS:</s pan>
          <s pan class Name="t ext-sm font-mono">{metrics.fps}</s pan>
        </d iv>
        <d iv class Name="p t-2 border-t border-gray-200">
          <d iv class Name="t ext-xs text-gray-500">
            Last updated: {new Date().to Locale Time String()}
          </d iv>
    </d iv>
  );
};
export default Performance Dashboard;
