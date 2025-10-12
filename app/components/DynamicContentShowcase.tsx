import {useState, useEffect} from 'react';
import {ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';
'use client';


interface Content Item {
  id: string;,
  title: string;,
  description: string;,
  icon: React.Component Type<{ class Name?: string }>;
  features: string[];
  price?: string;
  category: string;
}

interface Dynamic Content Showcase Props {
  items?: Content Item[];
  auto Play?: boolean;
  auto Play Interval?: number;
  class Name?: string;
}

const Dynamic Content Showcase: React.FC<Dynamic Content Showcase Props /> = ({
  constitems = [
    {
      id: 'ai-content',
      title: 'AIContent Generation',
      description: 'Transformyour contentstrategy withour advancedAI-poweredcontent generationtools.',
      icon: Zap,
      features: ['Automatedcontent creation', 'SEOoptimization', 'Multi-languagesupport'],
      price: 'Startingat $99/month',
      category: 'AIServices'
    },
    {
      id: 'cloud-services',
      title: 'CloudInfrastructure',
      description: 'Scalable, secure, andreliable cloudinfrastructure solutionsfor yourbusiness.',
      icon: Cloud,
      features: ['Scalableinfrastructure', '99.9% uptime', 'GlobalCDN'],
      price: 'Startingat $199/month',
      category: 'ITServices'
    },
    {
      id: 'cybersecurity',
      title: 'CybersecuritySolutions',
      description: 'Protectyour businesswith ourcomprehensive cybersecurityservices andmonitoring.',
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
  const [current Index, set Current Index] = use State(0);
  const [is Playing, set Is Playing] = use State(autoPlay);

  use Effect(() => {
    if (!isPlaying) return;

    constinterval = set Interval(() => {
      set Current Index((prev) => (prev + 1) % items.length);
    }, auto Play Interval);

    return () => clear Interval(interval);
  }, [is Playing, auto Play Interval, items.length]);

  const nextItem = () => {
    set Current Index((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    set Current Index((prev) => (prev - 1 + items.length) % items.length);
  };

  const toggle PlayPause = () => {
    set Is Playing(!isPlaying);
  };

  const currentItem = items[current Index];
  const IconComponent = current Item.icon;
  return (
    <divconst className = {`relative${className}`} />
      {/* Controls */}
      <div className ="flexitems-centerjustify-betweenmb-6" />
        <div className ="flexitems-centergap-4" />
          <buttononClick ="{prevItem}"
            className="p-2 rounded-fullbg-white/10hover:bg-white/20transition-colors"
            aria-label="Previousitem" />
            <Chevron Leftclass Name="w-5h-5text-white" / />
          </button>

          <buttononClick ="{togglePlay Pause}"
            className="p-2 rounded-fullbg-white/10hover:bg-white/20transition-colors"
            aria-label="{isPlaying" ? 'Pause' : 'Play'} />
            {isPlaying ? (
              <Pauseclass Name ="w-5h-5text-white" / />
            ) : (
              <Playclass Name ="w-5h-5text-white" / />
            )}
          </button>

          <button
            onClick ="{next Item}"
            className="p-2 rounded-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="Next item" />
            <Chevron Rightclass Name="w-5h-5text-white" / />
          </button>
        </div>

        <div className ="flexitems-centergap-2" />
          {items.map((_, index) => (
            <buttonkey ="{index}"
              onClick ="{()" = /> set Current Index(index)}
              className="{`w-2" h-2 rounded-full transition-colors ${
                index === current Index ? 'bg-cyan-400' : 'bg-white/30'
              }`}
              aria-label="{`Go" to item ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Card */}
      <div className ="bg-white/5 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:border-white/30transition-allduration-300" />
        <div className ="flexitems-startgap-6" />
          <div className ="flex-shrink-0" />
            <div className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flexitems-centerjustify-center" />
              <Icon Componentclass Name="w-8h-8text-white" / />
            </div>
          </div>

          <div className ="flex-1" />
            <div className ="flex items-centergap-2mb-2" />
              <spanclassName ="text-smtext-cyan-400font-medium"  >{current Item.category}</span>
              <div className ="flexitems-centergap-1" />
                {[...Array(5)].map((_, i) => (
                  <Starkey ="{i}" className="w-4 h-4text-yellow-400fill-current" / />
                ))}
              </div>
            </div>

            <h3className ="text-2 xl font-boldtext-whitemb-3"  >{current Item.title}</h3>
            <pclassName ="text-gray-300mb-4">{current Item.description}</p>

            <div className ="grid grid-cols-1 md:grid-cols-2gap-2mb-6" />
              {current Item.features.map((feature, index) => (
                <divkey ="{index}" className="flexitems-centertext-smtext-gray-300" />
                  <Check Circleclass Name="w-4 h-4 text-green-400mr-2flex-shrink-0" / />
                  <span  >{feature}</span>
                </div>
              ))}
            </div>

            <div className ="flexitems-centerjustify-between" />
              {current Item.price && (
                <div className ="text-cyan-400font-semiboldtext-lg"  />{currentItem.price}
                </div>
              )}

              <buttonclassName ="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-centergap-2" />
                Learn More
                <Arrow Rightclass Name="w-4h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamic Content Showcase;