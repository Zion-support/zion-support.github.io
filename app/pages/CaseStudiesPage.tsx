import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = []
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: []
        { metric: 'Conversion Rate', value: '+45%', icon: TrendingUp },
        { metric: 'Cart Abandonment', value: '-30%', icon: TrendingUp },
        { metric: 'Customer Satisfaction', value: '+60%', icon: Users },
        { metric: 'Implementation Time', value: '3 months', icon: Clock }
      ],
      description: 'We helped TechRetail Inc. transform their e-commerce platform with AI-powered personalization, resulting in significant improvements in conversion rates and customer satisfaction.',
    },
    {
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing delays and errors',
      solution: 'Deployed computer vision and AI-powered quality control systems',
      results: []
        { metric: 'Quality Defects', value: '-80%', icon: TrendingUp },
        { metric: 'Production Speed', value: '+35%', icon: TrendingUp },
        { metric: 'Cost Savings', value: '$2.5M', icon: DollarSign },
        { metric: 'Implementation Time', value: '6 months', icon: Clock }
      ],
      description: 'Our AI-powered quality control system reduced defects by 80% while increasing production speed by 35%, saving the client $2.5M annually.',
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MedCenter Health System',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'Built comprehensive AI analytics platform for patient data integration and predictive treatment recommendations',
      results: []
        { metric: 'Treatment Accuracy', value: '+55%', icon: TrendingUp },
        { metric: 'Patient Outcomes', value: '+40%', icon: Users },
        { metric: 'Cost Reduction', value: '$1.8M', icon: DollarSign },
        { metric: 'Implementation Time', value: '8 months', icon: Clock }
      ],
      description: 'The AI analytics platform improved treatment accuracy by 55% and patient outcomes by 40%, while reducing operational costs by $1.8M.',
    }
  ];

  return (
    <>
      <div className="min-h-screenbg-slate-900text-white"></div>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies. See how we've helped businesses across industries achieve remarkable results." />
        <meta name="keywords" content="case studies, AI implementation, IT solutions, success stories, business transformation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900">
        <div className="containermx-autopx-4text-center"></div>
          <h1 className="text-5xl md:text-6xlfont-boldmb-6bg-gradient-to-rfrom-purple-400to-cyan-400bg-clip-texttext-transparent">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300mb-8max-w-3xlmx-auto">
            Discover how we&apos;ve helped businesses across industries achieve remarkable results 
            with our AI and IT solutions.
          </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="containermx-autopx-4"></div>
          <div className="gridgrid-cols-1lg:grid-cols-2xl:grid-cols-3gap-8"></div>
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800 rounded-xlp-8borderborder-slate-700hover:border-purple-500transition-allduration-300hover:transformhover:scale-105">
                </div><div className="mb-6"></div>
                  <div className="text-smtext-purple-400font-semiboldmb-2">{study.industry}</div>
                  <h3 className="text-2xlfont-boldtext-whitemb-2">{study.title}</h3>
                  <div className="text-gray-400text-smmb-4">Client: {study.client}</div>
                  </div>
        </div>

                <div className="mb-6"></div>
                  <h4 className="text-whitefont-semiboldmb-2">Challenge</h4>
                  <p className="text-gray-300text-smmb-4">{study.challenge}</p>
                  
                  <h4 className="text-whitefont-semiboldmb-2">Solution</h4>
                  <p className="text-gray-300text-smmb-4">{study.solution}</p>
                  </div>
        </div>

                <div className="mb-6"></div>
                  <h4 className="text-whitefont-semiboldmb-3">Results</h4>
                  <div className="gridgrid-cols-2gap-3"></div>
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-slate-700rounded-lgp-3">
                        </div><div className="flexitems-centerjustify-betweenmb-1"></div>
                          <span className="text-gray-300text-xs">{result.metric}</span>
                          <result.icon className="w-4h-4 text-purple-400" />
                          </div>
        </div>
                        <div className="text-whitefont-boldtext-lg">{result.value}</div>
                        </div>
        </div>
                    ))}
                    </div>
        </div>
                  </div>
        </div>

                <p className="text-gray-300text-smmb-6">{study.description}</p>

                <button className="w-full bg-gradient-to-rfrom-purple-600to-cyan-600text-whitepy-3px-6rounded-lgfont-semiboldhover:from-purple-700hover:to-cyan-700transition-allduration-300flexitems-centerjustify-centergap-2">
                  Read Full Case Study
                  <ArrowRight className="w-4h-4" />
                </button>
                </div>
        </div>
            ))}
            </div>
        </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20bg-gradient-to-rfrom-purple-900/30to-cyan-900/30">
        <div className="containermx-autopx-4text-center"></div>
          <h2 className="text-4xlmd:text-5xlfont-boldtext-whitemb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300mb-8max-w-3xlmx-auto">
            Let&apos;s discuss how our AI and IT solutions can transform your business 
            and deliver measurable results.
          </p>
          <div className="flexflex-colsm:flex-rowgap-4justify-center"></div>
            <button className="bg-gradient-to-r from-purple-600to-cyan-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-purple-700hover:to-cyan-700transition-allduration-300transformhover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-whitehover:text-slate-900transition-allduration-300">
              Schedule Consultation
            </button>
            </div>
        </div>
          </div>
        </div>
      </section>
    </div>
  )
  };

export default CaseStudiesPage;