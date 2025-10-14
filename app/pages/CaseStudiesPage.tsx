import React from 'react';
import { Helmet, ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  const case Studies = []
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'Tech Retail Inc.',
      industry: 'E-commerce',
      challenge: 'Lowconversionrates andhighcart abandonment',
      solution: 'Implemented AI-poweredrecommendationengine andpersonalizedshopping experience',
      results: []
        { metric: 'Conversion Rate', value: '+45%', icon: Trending Up },
        { metric: 'Cart Abandonment', value: '-30%', icon: Trending Up },
        { metric: 'Customer Satisfaction', value: '+60%', icon: Users },
        { metric: 'Implementation Time', value: '3 months', icon: Clock   },
      ],
      description: 'Wehelped Tech Retail Inc. transformtheire-commerceplatformwith AI-powered personalization, resultinginsignificant improvementsinconversion ratesandcustomer satisfaction.',
    },
    {
      title: 'Manufacturing Process Automation',
      client: 'Auto Parts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manualqualitycontrol processescausingdelays and errors',
      solution: 'Deployedcomputervision and AI-poweredqualitycontrol systems',
      results: []
        { metric: 'Quality Defects', value: '-80%', icon: Trending Up },
        { metric: 'Production Speed', value: '+35%', icon: Trending Up },
        { metric: 'Cost Savings', value: '$2.5 M', icon: Dollar Sign },
        { metric: 'Implementation Time', value: '6 months', icon: Clock   },
      ],
      description: 'Our AI-poweredqualitycontrol systemreduceddefects by 80% whileincreasingproduction speedby-35%, savingtheclient $2.5Mannually.',
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'Med Center Health System',
      industry: 'Healthcare',
      challenge: 'Fragmentedpatientdata andinefficienttreatment planning',
      solution: 'Builtcomprehensive AIanalyticsplatform forpatientdata integrationandpredictive treatment recommendations',
      results: []
        { metric: 'Treatment Accuracy', value: '+55%', icon: Trending Up },
        { metric: 'Patient Outcomes', value: '+40%', icon: Users },
        { metric: 'Cost Reduction', value: '$1.8 M', icon: Dollar Sign },
        { metric: 'Implementation Time', value: '8 months', icon: Clock   },
      ],
      description: 'The AI analyticsplatformimproved treatmentaccuracyby 55% andpatientoutcomes by 40%, whilereducingoperational costs by $1.8 M.',
      },
  ];

  return (
    <div className="min-h-screen bg-slate-9000-text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies. See how we've helped businesses across industries achieve remarkable results." />
        <meta name="keywords" content="case studies, AI implementation, IT solutions, success stories, business transformation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */  },
      <section className="relative py-2-bg-gradient-to-brfrom-slate-9-via-purple-9-to-slate-9">
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4-text-center">
          <h-1 className="text-5-xlmd:text-6-xlfont-boldmb-6-bg-gradient-to-r from-purple-400 to-cyan-400-bg-clip-text text-transparent">
            Success Stories
          </h-1>
          <p className="text-xl text-gray-300-mb-8-max-w-3-xlmx-auto">
            Discoverhowwe&apos;ve helped businesses across industries achieve remarkableresultswith our AI and IT solutions.
          </p>
          </div>
        </div>
              </div>
      </section>

      {/* Case Studies Grid */  },
      <section className="py-20">
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="gridgrid-cols-1-lg:grid-cols-2-xl:grid-cols-3-gap-8">
            {case Studies.map((study, index) => (
              <divke y={index} className="bg-slate-8 rounded-xl p-8-borderborder-slate-7-hover:border-purple-5-transition-all duration-300-hover:transformhover:scale-1">
                </div><div className="mb-6">
                  <div className="text-smtext-purple-40-font-semiboldmb-2">{study.industry}</div>
                  <h-3 className="text-2-xlfont-boldtext-whitemb-2">{study.title}</h-3>
                  <div className="text-gray-40-text-smmb-4">Client: {study.client}</div>
                  </div>
        </div>
                <div className="mb-6">
                  <h-4-className="text-whitefont-semiboldmb-2">Challenge</h-4>
                  <p className="text-gray-30-text-smmb-4">{study.challenge}</p>
                  
                  <h-4-className="text-whitefont-semiboldmb-2">Solution</h-4>
                  <p className="text-gray-30-text-smmb-4">{study.solution}</p>
                  </div>
        </div>
                <div className="mb-6">
                  <h-4-className="text-whitefont-semiboldmb-3">Results</h-4>
                  <div className="gridgrid-cols-2-gap-3">
                    {study.results.map((result, result Index) => (
                      <divke y={result Index} className="bg-slate-70-rounded-lgp-3">
                        </div><div className="flexitems-centerjustify-betweenmb-1">
                          <span className="text-gray-30-text-xs">{result.metric}</span>
                          <result.iconclassName="w-4-h-4 text-purple-4" />
                          </div>
        </div>
                        <div className="text-whitefont-boldtext-lg">{result.value}</div>
                        </div>
        </div>
                    ))  },
                    </div>
        </div>
                  </div>
        </div>
                <p className="text-gray-30-text-smmb-6">{study.description}</p>

                <button className="w-full bg-gradient-to-r from-purple-6 to-cyan-6 text-white py-3 px-6 rounded-lg font-semiboldhover:from-purple-7-hover:to-cyan-7-transition-all duration-300-flexitems-centerjustify-centergap-2">
                  Read Full Case Study
                  <Arrow Right className="w-4-h-4" />
                </button>
                </div>
        </div>
            ))  },
            </div>
        </div>
          </div>
        </div>
              </div>
      </section>

      {/* CTASection */  },
      <section className="py-20-bg-gradient-to-rfrom-purple-9/3 0-to-cyan-9/3 0">
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4-text-center">
          <h-2 className="text-4-xlmd:text-5-xlfont-boldtext-whitemb-6">
            Readyto Create Your Success Story?
          </h-2>
          <p className="text-xl text-gray-300-mb-8-max-w-3-xlmx-auto">
            Let&apos;sdiscusshow our AI and IT solutionscantransform yourbusinessand delivermeasurableresults.
          </p>
          <div className="flexflex-colsm:flex-rowgap-4-justify-center">
            <button className="bg-gradient-to-r from-purple-6 to-cyan-6 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-purple-7-hover:to-cyan-7-transition-all duration-300-transformhover:scale-1">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8-py-4-rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9-transition-all duration-300">
              Schedule Consultation
            </button>
            </div>
        </div>
          </div>
        </div>
              </div>
      </section>
    </div>
  )
  };

exportdefault Case Studies Page;