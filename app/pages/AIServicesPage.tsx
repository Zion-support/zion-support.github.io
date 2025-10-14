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
      icon: Bar Chart 3,
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
    <div className="min-h-screenbg-slate-900 text-white">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="ComprehensiveAI services including strategy consulting, machine learning, predictive analytics, and custom AI development solutions." />
        <meta name="keywords" content="AIservices, machine learning, artificial intelligence, predictive analytics, AI consulting, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-20 bg-gradient-to-brfrom-slate-9 00 via-purple-9 0 0 to-slate-9 0 0">
        <div className="container mx-autopx-4 text-center">
          <h1 className="text-5 xlmd:text-6 xlfont-boldmb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xlmx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From strategy to implementation, we deliver AI that drives real results.
          </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-autopx-4">
          <div className="gridgrid-cols-1 md:grid-cols-2lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <divkey={index} className="bg-slate-800 rounded-xl p-8 borderborder-slate-7 00 hover:border-purple-5 00 transition-all duration-300 hover:transformhover:scale-1 0 5">
                </div><div className="w-16 h-1 6 bg-gradient-to-rfrom-purple-5 0 0 to-cyan-5 0 0 rounded-lgflexitems-centerjustify-centermb-6">
                  <service.icon className="w-8 h-8text-white" />
                  </div>
        </div>
                
                <h3 className="text-2 xlfont-boldtext-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-whitefont-semiboldmb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, feature Index) => (
                      <likey={feature Index} className="text-gray-300 text-smflexitems-center">
                        <div className="w-2 h-2bg-purple-40 0 rounded-fullmr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </div>
        </div>

                <but ton className="w-fullbg-gradient-to-rfrom-purple-6 00 to-cyan-6 00 text-white py-3 px-6 rounded-lgfont-semiboldhover:from-purple-7 00 hover:to-cyan-7 0 0 transition-all duration-300">
                  Learn More
                </butn>
                </div>
        </div>
            ))}
            </div>
        </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-rfrom-purple-90 0/3 0 to-cyan-9 0 0/3 0">
        <div className="container mx-autopx-4 text-center">
          <h2 className="text-4 xlmd:text-5xlfont-boldtext-whitemb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xlmx-auto">
            Let&apos;s discuss how our AI services can transform your business and give you a competitive edge.
          </p>
          <div className="flexflex-colsm:flex-rowgap-4 justify-center">
            <but ton className="bg-gradient-to-rfrom-purple-600 to-cyan-6 00 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-purple-7 00 hover:to-cyan-7 00 transition-all duration-300 transformhover:scale-1 0 5">
              Start Your AI Journey
            </butn>
            <but ton className="border-2 border-whitetext-white px-8 py-4 rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9 0 0 transition-all duration-300">
              Schedule Consultation
            </butn>
            </div>
        </div>
          </div>
        </div>
      </section>
    </div>
  )
  };

export default AIServicesPage;