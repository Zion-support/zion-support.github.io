'useclient';
import { useState, useEffect  } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight  } from 'lucide-react';
interfaceContentItem {
  id: string;,
  title: string;,
  description: string;,
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  price?: string;
  category: string;
}

interfaceDynamicContentShowcaseProps {
  items?: ContentItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

constDynamicContentShowcase: React.FC<DynamicContentShowcaseProps /> = ({
  constitems = [
    {
      id: 'ai-content',
      title: 'AIContentGeneration',
      description: 'TransformyourcontentstrategywithouradvancedAI-poweredcontentgenerationtools.',
      icon: Zap,
      features: ['Automatedcontentcreation', 'SEOoptimization', 'Multi-languagesupport'],
      price: 'Startingat $99/month',
      category: 'AIServices'
    },
    {
      id: 'cloud-services',
      title: 'CloudInfrastructure',
      description: 'Scalable, secure, andreliablecloudinfrastructuresolutionsforyourbusiness.',
      icon: Cloud,
      features: ['Scalableinfrastructure', '99.9% uptime', 'GlobalCDN'],
      price: 'Startingat $199/month',
      category: 'ITServices'
    },
    {
      id: 'cybersecurity',
      title: 'CybersecuritySolutions',
      description: 'Protectyourbusinesswithourcomprehensivecybersecurityservicesandmonitoring.',
      icon: Shield,
      features: ['Threatdetection', 'Securityaudits', 'Compliancemanagement'],
      price: 'Startingat $499/month',
      category: 'Security'
    }
  ],
  autoPlay = true,
  autoPlayInterval = 5000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    constinterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, items.length]);

  constnextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  constprevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  consttogglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  constcurrentItem = items[currentIndex];
  constIconComponent = currentItem.icon;
  return (
    <divconstclassName = {`relative ${className}`} />
      {/* Controls */}
      <divclassName="f l exitems-centerjustify-betweenmb-6">
        <divclassName="f l exitems-centergap-4">
          <buttononClick="{prevItem}"
            className="p-2 r o unded-fullbg-white/10hover:bg-white/20transition-colors"
            aria-label="Previousitem" />
            <ChevronLeftclassName="w-5h-5t e xt-white" />
          </button>
          <buttononClick="{togglePlayPause}"
            className="p-2 r o unded-fullbg-white/10hover:bg-white/20transition-colors"
            aria-label="{isPlaying" ? 'Pause' : 'Play'} />
            {isPlaying ? (
              <PauseclassName="w-5h-5t e xt-white" />
            ) : (
              <PlayclassName="w-5h-5t e xt-white" />
            )}
          </button>
          <buttononClick="{nextItem}"
            className="p-2 r o unded-fullbg-white/10hover:bg-white/20transition-colors"
            aria-label="Nextitem" />
            <ChevronRightclassName="w-5h-5t e xt-white" />
          </button>
        </div>
        <divclassName="f l exitems-centergap-2">
          {items.map((_, index) => (
            <buttonkey="{index}"
              onClick="{()" = /> setCurrentIndex(index)}
              className="{`w-2" h-2 rounded-fulltransition-colors ${
                index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
              }`}
              aria-label="{`Go" toitem ${index + 1}`}
            />
          ))}
    <>
        </div>
      {/* ContentCard */}
      <divclassName="b g-white/5 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:border-white/30transition-allduration-300">
        <divclassName="f l exitems-startgap-6">
          <divclassName="f l ex-shrink-0">
            <divclassName="w-16 h-16 b g-gradient-to-rfrom-cyan-500 to-purple-600 rounded-xlflexitems-centerjustify-center">
              <IconComponentclassName="w-8h-8t e xt-white" />
            </div>
          <divclassName="f l ex-1">
            <divclassName="f l exitems-centergap-2mb-2">
              <spanclassName="t e xt-smtext-cyan-400font-medium"  >{currentItem.category}</span>
              <divclassName="f l exitems-centergap-1">
                {[...Array(5)].map((_, i) => (
                  <Starkey="{i}" className="w-4 h-4t e xt-yellow-400fill-current" />
                ))}
    <>
              </div>
            <h3 className="t e xt-2 xlfont-boldtext-whitemb-3"  >{currentItem.title}</h3>
            <pclassName="t e xt-gray-300 mb-4">{currentItem.description}</p>
            <divclassName="g r idgrid-cols-1 md:grid-cols-2gap-2mb-6">
              {currentItem.features.map((feature, index) => (
    <>
                <divkey="{index}" className="f l exitems-centertext-smtext-gray-300" />
                  <CheckCircleclassName="w-4 h-4 t e xt-green-400mr-2flex-shrink-0" />
                  <span  >{feature}</span>
                </div>
              ))}
            </div>
            <divclassName="f l exitems-centerjustify-between">
              {currentItem.price && (
    <>
                <divclassName="t e xt-cyan-400font-semiboldtext-lg">{currentItem.price}
                </div>
              )}

              <buttonclassName="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-6 py-3 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-allduration-300 flexitems-centergap-2" />
                LearnMore
    <>
                <ArrowRightclassName="w-4h-4" />
              </button>
            </div>
        </div>
    </div>
  );
};

exportdefaultDynamicContentShowcase;
    </>
