'useclient';
importReact, { useEffect, useState } from 'react';
import { ArrowRight, Zap   } from 'lucide-react';

interfacePerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

constPerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    // PreloadcriticalresourcesconstpreloadCriticalResources = () => {
      constcriticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalResources.forEach(resource => {
        constlink = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // OptimizeimagesconstoptimizeImages = () => {
      constimages = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    // InitializeoptimizationspreloadCriticalResources();
    optimizeImages();
  }, []);

  constfeatures = [
    {
      title: "ImageOptimization",
      description: "Automaticimagecompressionandlazyloading"
    },
    {
      title: "ResourcePreloading",
      description: "Criticalresourcepreloadingforfasterinitialload"
    },
    {
      title: "CodeSplitting",
      description: "Automaticcodesplittingforoptimalbundlesizes"
    },
    {
      title: "CachingStrategy",
      description: "Intelligentcachingforimprovedperformance"
    }
  ];

  return (
    <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
      {/* HeroSection */}
      <sectionclassName="r e lativepy-20 px-4 sm:px-6 lg:px-8">
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="t e xt-center">
            <h1 className="t e xt-4xlmd:text-6xlfont-boldtext-whitemb-6">
              <spanclassName="b g-gradient-to-rfrom-purple-400 to-blue-400 bg-clip-texttext-transparent">
                PerformanceOptimizer
              </span>
            </h1>
            <pclassName="t e xt-xltext-gray-300 mb-8 max-w-3xlmx-auto">Optimizeyourapplication'sperformancewithouradvancedoptimizationtoolsandtechniques.</p>
            <divclassName="f l exflex-colsm:flex-rowgap-4 justify-center">
              <buttonclassName="b g-gradient-to-rfrom-purple-500 to-blue-600 text-whitepx-8 py-3 rounded-lgfont-semiboldhover:from-purple-600 hover:to-blue-700 transition-allduration-300 flexitems-center">
                GetStarted
                <ArrowRightclassName="m l-2 h-5 w-5" />
              </button>
              <buttonclassName="b o rderborder-whitetext-whitepx-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900 transition-allduration-300">
                LearnMore
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* FeaturesSection */}
      <sectionclassName="p y-20 px-4 sm:px-6 lg:px-8">
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-3xlmd:text-4xlfont-boldtext-whitemb-4">
              OurFeatures
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Discoverthepowerfulfeaturesthatmakeourperformanceoptimizersolutionsstandout.</p>
          </div>
          <divclassName="g r idgrid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <divkey={index} className="b g-gray-800/50 backdrop-blur-xlrounded-xlp-6 borderborder-gray-700 hover:border-purple-500 transition-allduration-300">
                <divclassName="f l exitems-centerjustify-centerw-12 h-12 bg-gradient-to-rfrom-purple-500 to-blue-600 rounded-lgmb-4">
                  <ZapclassName="h-6 w-6 t e xt-white" />
                </div>
                <h3 className="t e xt-xlfont-boldtext-whitemb-2">{feature.title}</h3>
                <pclassName="t e xt-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

exportdefaultPerformanceOptimizer;
      cleanupScroll()
    }
  }, [])

  // LogperformancemetricsindevelopmentuseEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.values(metrics).some(val => val !== null)) {
      console.log('PerformanceMetrics:', metrics)
    }
  }, [metrics])

  returnnull
}

exportdefaultPerformanceOptimizer
