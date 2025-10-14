import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Bot, BarChart3, Shield, Zap, Target } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: &apos;AI Strategy & Consulting&apos;,
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      features: [&apos;AI Readiness Assessment&apos;, &apos;Technology Roadmap&apos;, &apos;ROI Analysis&apos;, &apos;Implementation Planning&apos;]
    },
    {
      icon: Bot,
      title: 'Conversational AI',
      description: 'Build intelligent chatbots and virtual assistants that enhance customer experience and automate support.',
      features: [&apos;Natural Language Processing&apos;, &apos;Multi-channel Integration&apos;, &apos;Sentiment Analysis&apos;, &apos;24/7 Availability&apos;]
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to predict trends, behaviors, and outcomes for better decision making.',
      features: [&apos;Data Mining&apos;, &apos;Pattern Recognition&apos;, &apos;Forecasting Models&apos;, &apos;Real-time Insights&apos;]
    },
    {
      icon: Shield,
      title: 'AI Security Solutions',
      description: 'Advanced AI-powered security systems to protect your digital assets and detect threats in real-time.',
      features: [&apos;Threat Detection&apos;, &apos;Anomaly Detection&apos;, &apos;Automated Response&apos;, &apos;Compliance Monitoring&apos;]
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation that reduces costs and improves efficiency.',
      features: [&apos;Workflow Automation&apos;, &apos;Document Processing&apos;, &apos;Data Entry Automation&apos;, &apos;Quality Control&apos;]
    },
    {
      icon: Target,
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions designed specifically for your unique business challenges and opportunities.',
      features: [&apos;Custom Algorithms&apos;, &apos;API Development&apos;, &apos;Integration Services&apos;, &apos;Ongoing Support&apos;]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900text-white">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including strategy consulting, machine learning, predictive analytics, and custom AI development solutions." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, predictive analytics, AI consulting, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-texttext-transparent">
            AI Services
          </h1>
<p className="Transform your business with cutting-edge artificial intelligence solutions. 
            From strategy to implementation, we deliver AI that drives real results.
             ">$2</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=" py-20">
        <div className="container mx-autopx-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transformhover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8text-white" />
                  </div>
        </div>
                
                <h3 className="text-2xl font-bold text-white mb-4  ">{service.title}</h3>
                <p className="text-gray-300 mb-6   ">{service.description}</p>
                
                <div className=" mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flexitems-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-fullmr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </div>
        </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-allduration-300">
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
      <section className="py-20 bg-gradient-to-r from-purple-900/30to-cyan-900/30">
        <div className="container mx-auto px-4text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
<p className="Let&apos;s discuss how our AI services can transform your business and give you a competitive edge.
             ">$2</p>
          <div className="flex flex-col sm:flex-row gap-4justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transformhover:scale-105">
              Start Your AI Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-allduration-300">
              Schedule Consultation
            </button>
            </div>
        </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;