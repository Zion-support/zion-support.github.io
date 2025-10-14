import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Bot, BarChart3, Shield, Zap, Target } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = []
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      features: ['AI Readiness Assessment', 'Technology Roadmap', 'ROI Analysis', 'Implementation Planning']
    },
    {
      icon: Bot,
      title: 'Conversational AI',
      description: 'Build intelligent chatbots and virtual assistants that enhance customer experience and automate support.',
      features: ['Natural Language Processing', 'Multi-channel Integration', 'Sentiment Analysis', '24/7 Availability']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to predict trends, behaviors, and outcomes for better decision making.',
      features: ['Data Mining', 'Pattern Recognition', 'Forecasting Models', 'Real-time Insights']
    },
    {
      icon: Shield,
      title: 'AI Security Solutions',
      description: 'Advanced AI-powered security systems to protect your digital assets and detect threats in real-time.',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Compliance Monitoring']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation that reduces costs and improves efficiency.',
      features: ['Workflow Automation', 'Document Processing', 'Data Entry Automation', 'Quality Control']
    },
    {
      icon: Target,
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions designed specifically for your unique business challenges and opportunities.',
      features: ['Custom Algorithms', 'API Development', 'Integration Services', 'Ongoing Support']
    }
  ];

  return (
    <>
      <div className="min-h-screenbg-slate-900text-white"></div>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including strategy consulting, machine learning, predictive analytics, and custom AI development solutions." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, predictive analytics, AI consulting, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900">
        <div className="containermx-autopx-4text-center"></div>
          <h1 className="text-5xl md:text-6xlfont-boldmb-6bg-gradient-to-rfrom-purple-400to-cyan-400bg-clip-texttext-transparent">
            AI Services
          </h1>
          <p className="text-xl text-gray-300mb-8max-w-3xlmx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From strategy to implementation, we deliver AI that drives real results.
          </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="containermx-autopx-4"></div>
          <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3gap-8"></div>
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xlp-8borderborder-slate-700hover:border-purple-500transition-allduration-300hover:transformhover:scale-105">
                </div><div className="w-16 h-16bg-gradient-to-rfrom-purple-500to-cyan-500rounded-lgflexitems-centerjustify-centermb-6"></div>
                  <service.icon className="w-8h-8 text-white" />
                  </div>
        </div>
                
                <h3 className="text-2xlfont-bold text-whitemb-4">{service.title}</h3>
                <p className="text-gray-300mb-6">{service.description}</p>
                
                <div className="mb-6"></div>
                  <h4 className="text-whitefont-semiboldmb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300text-smflexitems-center">
                        <div className="w-2h-2bg-purple-400rounded-fullmr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </div>
        </div>

                <button className="w-full bg-gradient-to-rfrom-purple-600to-cyan-600text-whitepy-3px-6rounded-lgfont-semiboldhover:from-purple-700hover:to-cyan-700transition-allduration-300">
                  Learn More
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
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300mb-8max-w-3xlmx-auto">
            Let&apos;s discuss how our AI services can transform your business and give you a competitive edge.
          </p>
          <div className="flexflex-colsm:flex-rowgap-4justify-center"></div>
            <button className="bg-gradient-to-r from-purple-600to-cyan-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-purple-700hover:to-cyan-700transition-allduration-300transformhover:scale-105">
              Start Your AI Journey
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

export default AIServicesPage;