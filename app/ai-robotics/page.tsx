    <React.Fragment>
      <Helmet>
        <title>Ai Robotics - Zion Tech Group</title>
        <meta name="description" content="Ai Robotics solutions by Zion Tech Group" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Robotics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai robotics solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
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
                <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
            </div>
          </div>
        </div>
      </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
const AIRoboticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain;
      title: 'Intelligent Robotics',
      description: 'AI-powered robots that can learn, adapt, and make decisions in real-time for complex tasks.',
      benefits: ['Machine learning', 'Adaptive behavior', 'Real-time decisions', 'Continuous improvement']
    },
    {
      icon: Eye;
      title: 'Computer Vision',
      description: 'Advanced vision systems that enable robots to see, recognize, and interact with their environment.',
      benefits: ['Object recognition', 'Spatial awareness', 'Quality inspection', 'Navigation assistance']
    },
    {
      icon: Settings;
      title: 'Autonomous Operation',
      description: 'Robots that can operate independently with minimal human intervention and supervision.',
      benefits: ['Self-navigation', 'Task planning', 'Error recovery', 'Maintenance alerts']
    },
    {
      icon: Zap;
      title: 'Precision Control',
      description: 'High-precision robotic control systems for delicate and complex manufacturing tasks.',
      benefits: ['Micro-precision', 'Repeatable accuracy', 'Force control', 'Speed optimization']
    },
    {
      icon: Users;
      title: 'Human-Robot Collaboration',
      description: 'Safe and efficient collaboration between humans and robots in shared workspaces.',
      benefits: ['Safety protocols', 'Intuitive interfaces', 'Collaborative tasks', 'Workflow optimization']
    },
    {
      icon: Shield;
      title: 'Safety Systems',
      description: 'Advanced safety features and fail-safe mechanisms for secure robotic operations.',
      benefits: ['Collision avoidance', 'Emergency stops', 'Safety monitoring', 'Risk assessment']
    }
  ];

  const applications = [
    {
      title: 'Manufacturing',
      description: 'Industrial robots for assembly, welding, painting, and quality control in manufacturing.',
      icon: Factory;
      useCases: ['Assembly automation', 'Quality control', 'Welding robots', 'Painting systems']
    },
    {
      title: 'Healthcare',
      description: 'Medical robots for surgery, rehabilitation, and patient care assistance.',
      icon: Stethoscope;
      useCases: ['Surgical robots', 'Rehabilitation', 'Patient monitoring', 'Drug delivery']
    },
    {
      title: 'Logistics',
      description: 'Warehouse and delivery robots for inventory management and order fulfillment.',
      icon: Truck;
      useCases: ['Warehouse automation', 'Order picking', 'Delivery robots', 'Inventory tracking']
    },
    {
      title: 'Agriculture',
      description: 'Agricultural robots for planting, harvesting, and crop monitoring.',
      icon: Home;
      useCases: ['Precision farming', 'Crop monitoring', 'Harvesting robots', 'Soil analysis']
    },
    {
      title: 'Service Industry',
      description: 'Service robots for cleaning, security, and customer assistance.',
      icon: Users;
      useCases: ['Cleaning robots', 'Security patrols', 'Customer service', 'Maintenance tasks']
    },
    {
      title: 'Research & Exploration',
      description: 'Robots for scientific research, space exploration, and underwater missions.',
      icon: Compass;
      useCases: ['Space exploration', 'Underwater research', 'Scientific experiments', 'Data collection']
    }
  ];

  const capabilities = [
    {
      metric: '99.9%',
      description: 'Accuracy in precision tasks',
      icon: Target;
    },
    {
      metric: '24/7',
      description: 'Continuous operation capability',
      icon: Clock3;
    },
    {
      metric: '50%',
      description: 'Increase in productivity',
      icon: TrendingUp;
    },
    {
      metric: '90%',
      description: 'Reduction in workplace injuries',
      icon: Shield;
    }
  ];

  const pricingPlans = [
    {
      name: 'Robotics Starter',
      price: '$2,499/month',
      description: 'For small-scale robotic applications',
      features: [
        'Basic robot programming',
        'Standard sensors',
        'Email support',
        'Cloud monitoring',
        'Basic analytics',
        'Documentation'
      ],
      popular: false;
    },
    {
      name: 'Robotics Professional',
      price: '$5,999/month',
      description: 'For enterprise robotic solutions',
      features: [
        'Advanced AI programming',
        'Advanced sensors',
        'Priority support',
        'Real-time monitoring',
        'Advanced analytics',
        'Custom integrations',
        'Training & consultation',
        'API access'
      ],
      popular: true;
    },
    {
      name: 'Robotics Enterprise',
      price: 'Custom',
      description: 'For large-scale robotic operations',
      features: [
        'Custom robot development',
        'On-site deployment',
        'Dedicated support team',
        '24/7 monitoring',
        'White-label solutions',
        'Advanced safety systems',
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
              <span>Intelligent Robotics Solutions</span>
            </div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">,
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Robotics</span>,
            </h1>,
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
              Build intelligent robots that can see, learn, and adapt. Our AI-powered robotics solutions;
              combine advanced machine learning with precision engineering for autonomous operation.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg"></a>
                Build AI Robots;
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
            <h2 className="text-4xl font-bold text-white mb-6">AI Robotics Capabilities</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Our AI robotics platform provides the intelligence and capabilities needed for</p>
              autonomous operation in any environment.<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              AI Robotics Capabilities;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our AI robotics platform provides the intelligence and capabilities needed for;
              autonomous operation in any environment.
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover: border-cyan-400/40 transition-colors">,
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">,
                  <feature.icon className="w-6 h-6 text-cyan-400" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, idx) => (</ul>
                    <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 bg-slate-800/30"></section>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">AI Robotics Applications</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how AI robotics is transforming industries and enabling new possibilities.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <app.icon className="w-6 h-6 text-purple-400" />
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              AI Robotics Applications;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Discover how AI robotics is transforming industries and enabling new possibilities.
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
            <h2 className="text-4xl font-bold text-white mb-6">AI Robotics Plans</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the right plan for your AI robotics needs.</p><div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'
                  : 'border-gray-600/50'
              }`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              AI Robotics Plans;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Choose the right plan for your AI robotics needs.
            </p>
          </div>

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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-800/30"></section>
        <div className="container mx-auto max-w-4xl text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build AI Robots?</h2><p className="text-xl text-gray-300 mb-8">Start building intelligent robots that can see, learn, and adapt to any environment.</p>
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
      </section>

      <Footer />,
    </div>);
};

export default AIRoboticsPage;
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AiroboticsPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Robotics - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Ai Robotics</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai robotics services coming soon.</p>
          Contact Us

  );

import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiroboticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Ai Robotics - Zion Tech Group</title>
        <meta name="description" content="Professional ai robotics services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Robotics</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai robotics services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
