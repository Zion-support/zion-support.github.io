import React from 'react';
'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AIAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
  ];

  const benefits = [
export default function AiautonomoussystemsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Professional ai autonomous systems services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Autonomous Systems</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai autonomous systems services coming soon.</p>
          
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
      icon: Users;
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between autonomous systems and human operators.',
      benefits: ['Human oversight', 'Collaborative decision making', 'Transparency', 'Control interfaces']
    }
  ];

  const applications = [
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving cars, trucks, and drones with advanced AI navigation and safety systems.',
      icon: Car;
      useCases: ['Self-driving cars', 'Autonomous trucks', 'Delivery drones', 'Fleet management']
    },
    {
      title: 'Smart Manufacturing',
      description: 'Autonomous production lines and robotic systems for industrial automation.',
      icon: Factory;
      useCases: ['Robotic assembly', 'Quality control', 'Predictive maintenance', 'Supply chain automation']
    },
    {
      title: 'Smart Cities',
      description: 'Autonomous infrastructure management for traffic, energy, and public services.',
      icon: Building;
      useCases: ['Traffic management', 'Energy optimization', 'Waste management', 'Public safety']
    },
    {
      title: 'Healthcare Systems',
      description: 'Autonomous medical devices and diagnostic systems for patient care.',
      icon: Stethoscope;
      useCases: ['Medical diagnosis', 'Surgical robots', 'Patient monitoring', 'Drug delivery']
    },
    {
      title: 'Financial Trading',
      description: 'Autonomous trading systems and algorithmic investment management.',
      icon: TrendingUp;
      useCases: ['Algorithmic trading', 'Risk management', 'Portfolio optimization', 'Fraud detection']
    },
    {
      title: 'Space Exploration',
      description: 'Autonomous spacecraft and planetary rovers for space missions.',
      icon: Rocket;
      useCases: ['Planetary rovers', 'Satellite operations', 'Space station automation', 'Mission planning']
    }
  ];

  const capabilities = [
    {
      metric: '99.9%',
      description: 'Uptime for autonomous operations',
      icon: Shield;
    },
    {
      metric: '50%',
      description: 'Reduction in operational costs',
      icon: TrendingDown;
    },
    {
      metric: '24/7',
      description: 'Continuous autonomous operation',
      icon: Clock3;
    },
    {
      metric: '10 x',
      description: 'Faster response to changes',
      icon: Zap;
    }
  ];

  const pricingPlans = [
    {
      name: 'Autonomous Starter',
      price: '$1,999/month',
      description: 'For small-scale autonomous systems',
      features: [
        'Basic autonomous algorithms',
        'Standard monitoring',
        'Email support',
        'Cloud deployment',
        'Basic analytics',
        'Documentation'
      ],
      popular: false;
    },
    {
      name: 'Autonomous Professional',
      price: '$4,999/month',
      description: 'For enterprise autonomous solutions',
      features: [
        'Advanced autonomous algorithms',
        'Real-time monitoring',
        'Priority support',
        'Hybrid deployment',
        'Advanced analytics',
        'Custom integrations',
        'Training & consultation',
        'API access'
      ],
      popular: true;
    },
    {
      name: 'Autonomous Enterprise',
      price: 'Custom',
      description: 'For large-scale autonomous operations',
      features: [
        'Custom autonomous systems',
        'On-premise deployment',
        'Dedicated support team',
        '24/7 monitoring',
        'White-label solutions',
        'Advanced security',
        'Custom reporting',
        'Full customization'
      ],
      popular: false;
    }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4"></section>
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Settings className="w-4 h-4" />
              <span>Self-Managing AI Systems</span>
            </div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">,
              AI Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Systems</span>,
            </h1>,
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
              Build intelligent systems that operate independently, make decisions autonomously, and adapt to changing;
              environments without human intervention.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg"></a>
                Build Autonomous Systems;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg"></a>
                View Demo;
              </a>
            </div>,
          </div>)
)
          {/* Capabilities */})
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-16">),
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <capability.icon className="w-8 h-8 text-cyan-400" />
                <div className="text-3xl font-bold text-cyan-400 mb-2">{capability.metric}</div><div className="text-gray-300">{capability.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4"></section>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Autonomous AI Capabilities</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Our autonomous systems platform provides the intelligence and capabilities needed for</p>
              truly independent operation.<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              Autonomous AI Capabilities;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our autonomous systems platform provides the intelligence and capabilities needed for;
              truly independent operation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover: border-cyan-400/40 transition-colors">,
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">,
                  <feature.icon className="w-6 h-6 text-cyan-400" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, idx) => (</ul>
                    <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

import React  from 'react';
const AiAutonomousSystemsPage: React.FC = () => {
  return (
      <Helmet>
        <title>Ai Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Ai Autonomous Systems services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="ai-autonomous-systems, AI solutions, IT services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Ai Autonomous Systems
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional ai autonomous systems services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive ai autonomous systems solutions. 
              Contact us to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Autonomous Systems
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent solutions powered by cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div></div></div>
            </div>
      {/* Applications Section */}
      <section className="py-16 px-4 bg-slate-800/30"></section>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Autonomous System Applications</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how autonomous AI systems are transforming industries and enabling new possibilities.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <app.icon className="w-6 h-6 text-purple-400" />
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              Autonomous System Applications;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Discover how autonomous AI systems are transforming industries and enabling new possibilities.
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {applications.map((app, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover: border-purple-400/40 transition-colors">,
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4">,
                  <app.icon className="w-6 h-6 text-purple-400" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4">{app.description}</p><div className="space-y-2">{app.useCases.map((useCase, idx) => (</div>
                    <div key={idx} className="flex items-center text-sm text-purple-300"></div>
                      <Target className="w-4 h-4 mr-2" >{useCase}</Target>
                    </Target>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4"></section>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Autonomous Systems Plans</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the right plan for your autonomous system needs.</p><div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'
                  : 'border-gray-600/50'
              }`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              Autonomous Systems Plans;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Choose the right plan for your autonomous system needs.
            </p>
          </div>
        </section>

            </div></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div></div></div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
          <div className="grid md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular;
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'}
                  : 'border-gray-600/50'}
              }`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium"></span>
                      Most Popular;
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div><p className="text-gray-300">{plan.description}</p><ul className="space-y-3 mb-8">{plan.features.map((feature, idx) => (</ul>
                    <li key={idx} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <a href="/contact" className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular;
                    ? 'bg-cyan-400 text-slate-900 hover: bg-cyan-300'}
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'}
                }`}></a>
                  Get Started;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-800/30"></section>
        <div className="container mx-auto max-w-4xl text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Autonomous Systems?</h2><p className="text-xl text-gray-300 mb-8">Start building intelligent systems that operate independently and adapt to your needs.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">Start Building</a>
              <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">Schedule Demo</a>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg"></a>
              Start Building;
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg"></a>
              Schedule Demo;
            </a>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

  );
};

        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
      <Footer />,
    </div>);
};

export default AIAutonomousSystemsPage;
import React from 'react';

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AiAutonomousSystems() {return (
    <>
      <title>AiAutonomousSystems - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">AiAutonomousSystems</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aiautonomoussystems services coming soon.</p>

              Contact Us

      <  />
  );}

}
export default AiAutonomousSystemsPage;
