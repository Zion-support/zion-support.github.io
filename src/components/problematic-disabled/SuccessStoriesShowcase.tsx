import React from 'react';
import { Link } from 'react-router-dom';
constSuccessStoriesShowcase: React.FC = () => { 
  conststories = [
    {
      company: "TechCorpInternational"
      industry: "Technology"
      icon: '🚀'
      icon: <TrendingUpclassName = "w-8 h-8" / > 
      result: "300% RevenueGrowth"
      description: "ImplementedmultimodalAI achievingunprecedentedcustomer engagementandconversion rates.""
      metrics: [
        "98% predictionaccuracy"
        "60% costreduction"
        "2Musersimpacted"
      ]"
      color: "from-blue-500to-cyan-500"
     }
    { "
      company: "GlobalManufacturingInc"
      industry: "Manufacturing"
      icon: '🚀'
      icon: <TargetclassName = "w-8 h-8" / > 
      result: "85% DowntimeReduction"
      description: "AIpredictivemaintenance transformedoperationseliminatingunplanneddowntime andreducingcosts.""
      metrics: [
        "$2Mannualsavings"
        "40% lowermaintenancecosts"
        "99.9% uptimeachieved"
      ]"
      color: "from-green-500to-emerald-500"
     }
    { "
      company: "FinanceFirstBank"
      industry: "FinancialServices"
      icon: '🚀'
      icon: <UsersclassName = "w-8 h-8" / > 
      result: "99.95% FraudDetection"
      description: "AIfraudprevention systemachievedindustry-leadingaccuracywhile reducingfalsepositives by95%.""
      metrics: [
        "$5Mfraudprevented"
        "Sub-100msdetection"
        "95% fewerfalsepositives"
      ]"
      color: "from-purple-500to-pink-500"
     }
  ]; return (
    <sectionclassName = "py-20bg-gradient-to-brfrom-gray-50to-blue-50">
      <divclassName="containermx-autopx-6">
        <divclassName="text-centermb-16">
          <h2className="text-4xlfont-boldtext-gray-900mb-4">
            SuccessStories
          </h2>
          <pclassName="text-xltext-gray-600max-w-3xlmx-auto">
            Seehowleading companiesaretransforming theiroperationswith ourAIsolutions
          </p>
        </div>
        <divclassName="gridmd: grid-cols-3gap-8max-w-7xlmx-automb-12">
          { stories.map((storyindex) = > (
            <divkey = { index  }className = "bg-whiterounded-2xlshadow-xloverflow-hiddenhover: scale-105transition-allduration-300"
            >
              <divclassName = { `bg-gradient-to-r ${story.color }text-whitep-6`}>
                <divclassName = "flexitems-centergap-3mb-4">
                  {story.icon}
                  <div>
                    <h3className="font-boldtext-xl">{story.company}</h3>
                    <pclassName="text-smopacity-90">{story.industry}</p>
                  </div>
                </div>
                <divclassName="text-3xlfont-bold">{story.result}</div>
              </div>
              <divclassName="p-6">
                <pclassName="text-gray-600mb-6">{story.description}</p>
                <divclassName="space-y-2mb-6">
                  { story.metrics.map((metricidx) = > (
                    <divkey = { idx  }className = "flexitems-centergap-2">
                      <divclassName="w-2 h-2bg-green-500rounded-full" />
                      <spanclassName="text-smtext-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
                <Linkto = "/case-studies"
                  className="text-indigo-600font-semiboldhover: text-indigo-800flexitems-centergap-2"
                >
                  ReadFullStory
                  <ArrowRight,className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <divclassName = "text-center">
          <Linkto="/case-studies"
            className="inline-flexitems-centergap-2bg-indigo-600text-whitepx-8py-4rounded-xlfont-boldtext-lghover: bg-indigo-700transition-allhover:scale-105shadow-lg"
          >
            ViewAllSuccess Stories
            <ArrowRight,className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};
exportdefaultSuccessStoriesShowcase;