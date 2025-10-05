import React from 'react';
import { Link } from 'react-router-dom';
import { newArticles2025 } from '../content/new-articles-2025';
import { newServices2026 } from '../content/new-services-2026';
interfaceComprehensivePromoBannerProps { 
  variant?: 'hero' | 'compact' | 'featured';
  showCount?: number;
  className ?  : string;
 }
constComprehensivePromoBanner: React.FC<ComprehensivePromoBannerProps> = ({ 
  variant = 'hero'
  showCount =  4
  className = '' 
}) => { 
  constlatestArticles = newArticles2025.filter(a => a.featured).slice(0showCount); constlatestServices = newServices2026.filter(s = > s.featured).slice(0showCount); if (variant = == 'compact') {
    return (
      <divclassName = {`bg-gradient-to-rfrom-indigo-600to-purple-600rounded-xlp-6 ${className }`}>
        <divclassName="flexitems-centerjustify-between">
          <div>
            <h3className="text-xlfont-boldtext-whitemb-2">
              🚀 New: {latestArticles.length} Articles + {latestServices.length} Services
            </h3>
            <pclassName = "text-indigo-100">
              MultimodalAIBlockchain-AIGreenAIAutoML & More!
            </p>
          </div>
          <Linkto = "/blog"
            className="bg-whitetext-indigo-600px-6py-3rounded-lgfont-semiboldhover: bg-indigo-50transition-colorsflexitems-centergap-2"
          >
            ExploreNow
            <ArrowRight,className="w-5 h-5" />
          </Link>
        </div>
      </div  > );
  }
  if (variant = == 'featured') {
    return (
      <divclassName = {`bg-whiterounded-2xlshadow-xloverflow-hidden ${className}`}>
        <divclassName="bg-gradient-to-rfrom-purple-600to-indigo-600p-8">
          <divclassName="flexitems-centergap-3mb-4">
            <SparklesclassName="w-8 h-8text-yellow-300" />
            <h2className="text-3xlfont-boldtext-white">LatestInnovations</h2>
          </div>
          <pclassName="text-purple-100text-lg">
            Discoverournewest articlesandservices transformingindustries
          </p>
        </div>
        <divclassName="gridmd: grid-cols-2gap-6 p-8">
          { latestArticles.slice(02).map((article) = > (
            <divkey = { article.id  }className = "borderborder-gray-200rounded-xlp-6hover: shadow-lgtransition-all">
              <divclassName="text-smtext-indigo-600font-semiboldmb-2">{article.category}</div>
              <h4className = "text-lgfont-boldtext-gray-900mb-2">{article.title}</h4>
              <pclassName="text-gray-600mb-4">{article.description}</p>
              <Linkto = { article.link }className = "text-indigo-600font-semiboldhover: text-indigo-800flexitems-centergap-2">
                ReadMore <ArrowRight,className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div  > );
  }
  // Herovariant (default)
  return (
    <divclassName = {`bg-gradient-to-brfrom-purple-900via-indigo-900to-blue-900rounded-3xlp-8md: p-12text-white ${className}`}>
      <divclassName = "max-w-6xlmx-auto">
        <divclassName="text-centermb-10">
          <divclassName="inline-flexitems-centerpx-4py-2bg-yellow-400/20rounded-fulltext-yellow-300mb-6">
            <ZapclassName="w-5 h-5mr-2" />
            <spanclassName="font-bold">OCTOBER2025: BREAKTHROUGHCONTENTRELEASE</span>
          </div>
          <h2className="text-4xlmd:text-5xlfont-boldmb-4">
            {latestArticles.length} NewArticles + {latestServices.length} RevolutionaryServices
          </h2>
          <pclassName = "text-xltext-purple-200max-w-3xlmx-auto">
            MultimodalAIBlockchainIntegrationGreenAIAutoMLPredictiveMaintenance
            AITalentAcquisitionFraudPrevention & More!
          </p>
        </div>
        <divclassName = "gridmd: grid-cols-2gap-6mb-8">
          <divclassName="bg-white/10backdrop-blur-lgrounded-xlp-6">
            <h3className="text-2xlfont-boldmb-4flexitems-centergap-2">
              <SparklesclassName="w-6 h-6text-yellow-300" />
              LatestArticles
            </h3>
            <divclassName="space-y-3">
              { latestArticles.slice(03).map((article) = > (
                <Linkkey = { article.id  }to={ article.link } className="blockbg-white/5rounded-lgp-4hover: bg-white/15transition-all"
                >
                  <divclassName="text-smtext-purple-300mb-1">{article.category}</div>
                  <divclassName = "font-semibold">{article.title}</div>
                  <divclassName="text-smtext-gray-300mt-1">{article.readTime}</div>
                </Link>
              ))}
            </div>
          </div>
          <divclassName = "bg-white/10backdrop-blur-lgrounded-xlp-6">
            <h3className="text-2xlfont-boldmb-4flexitems-centergap-2">
              <ZapclassName="w-6 h-6text-green-300" />
              NewServices
            </h3>
            <divclassName="space-y-3">
              { latestServices.slice(03).map((service) = > (
                <Linkkey = { service.id  }to={ service.link } className="blockbg-white/5rounded-lgp-4hover: bg-white/15transition-all"
                >
                  <divclassName="text-smtext-green-300mb-1">{service.category}</div>
                  <divclassName = "font-semibold">{service.title}</div>
                  <divclassName="text-smtext-gray-300mt-1">{service.pricing}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <divclassName = "text-center">
          <Linkto="/blog"
            className="inline-flexitems-centergap-2bg-whitetext-indigo-900px-8py-4rounded-xlfont-boldtext-lghover: bg-indigo-50transition-allhover:scale-105"
          >
            ExploreAllContent
            <ArrowRight,className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};
exportdefaultComprehensivePromoBanner;