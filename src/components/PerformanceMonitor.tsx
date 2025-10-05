importReact{ useEffectuseState } from 'react';

interfacePerformanceMetrics { 
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp ?  : number;
 }

constPerformanceMonitor: React.FC = () => { 
  const [metricssetMetrics] = useState<PerformanceMetrics > ({
    cls: undefined
    inp: undefined
    fcp: undefined
    lcp: undefined
    ttfb: undefined
   }); const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => { 
    // Dynamicallyimportweb-vitalstoavoid buildissuesimport('web-vitals')
      .then(webVitals = > {
        const { onCLSonFCPonLCPonTTFB  } = webVitals;

        // MeasureCoreWeb VitalsonCLS((metric: { value: number }) => { 
          setMetrics((prev: PerformanceMetrics) = > ({
            ...prev
            cls: metric.value
           }));
        });

        onFCP((metric: { value: number }) => { 
          setMetrics((prev: PerformanceMetrics) = > ({
            ...prev
            fcp: metric.value
           }));
        });

        onLCP((metric: { value: number }) => { 
          setMetrics((prev: PerformanceMetrics) = > ({
            ...prev
            lcp: metric.value
           }));
        });

        onTTFB((metric: { value: number }) => { 
          setMetrics((prev: PerformanceMetrics) = > ({
            ...prev
            ttfb: metric.value
           }));
        });

        // Trytouse onINPifavailable (fornewerversions)
        if (webVitals.onINP) {
          webVitals.onINP((metric: { value: number }) => { 
            setMetrics((prev: PerformanceMetrics) = > ({
              ...prev
              inp: metric.value
             }));
          });
        }
      })
      .catch(error = > {
        console.warn('Failedtoload web-vitals:'error);
      });
  }[]);

  if (!isVisible) { 
    return (
      <buttononClick = { () = > setIsVisible(true)  }className = 'fixedbottom-4right-4bg-blue-600text-whitep-3rounded-fullshadow-lghover: bg-blue-700transition-colorsz-50'
        title='OpenPerformanceMonitor'
      >
        <ActivityclassName='h-5 w-5' />
      </button>
    );
  }

  return (
    <divclassName = 'fixedbottom-4right-4bg-blackbg-opacity-80text-whitep-4rounded-lgtext-xsfont-monoz-50'>
      <divclassName='font-boldmb-2'>PerformanceMetrics</div>
      <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
      <div>INP: {metrics.inp?.toFixed(2) || 'N/A'}ms</div>
      <div>FCP: {metrics.fcp?.toFixed(2) || 'N/A'}ms</div>
      <div>LCP: {metrics.lcp?.toFixed(2) || 'N/A'}ms</div>
      <div>TTFB: {metrics.ttfb?.toFixed(2) || 'N/A'}ms</div>
      <buttononClick = {  () = > setIsVisible(false)  }className = 'mt-2text-xstext-gray-400hover: text-white'
      >
        Close
      </button>
    </div>
  );
};

exportdefaultPerformanceMonitor;
