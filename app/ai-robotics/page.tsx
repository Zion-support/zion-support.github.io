'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
const $1: React.FC = () => {
  const features = [,
    {,
      icon: Brain,
      title: 'Intelligent Robotics',
      description: 'AI-powered robots that can learn, adapt, and make decisions in real-time for complex tasks.',
      benefits: ['Machine learning', 'Adaptive behavior', 'Real-time decisions', 'Continuous improvement']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced vision systems that enable robots to see, recognize, and interact with their environment.',
      benefits: ['Object recognition', 'Spatial awareness', 'Quality inspection', 'Navigation assistance']
    },
    {
      icon: Settings,
      title: 'Autonomous Operation',
      description: 'Robots that can operate independently with minimal human intervention and supervision.',
      benefits: ['Self-navigation', 'Task planning', 'Error recovery', 'Maintenance alerts']
    },
    {
      icon: Zap,
      title: 'Precision Control',
      description: 'High-precision robotic control systems for delicate and complex manufacturing tasks.',
      benefits: ['Micro-precision', 'Repeatable accuracy', 'Force control', 'Speed optimization']
    },
    {
      icon: Users,
      title: 'Human-Robot Collaboration',
      description: 'Safe and efficient collaboration between humans and robots in shared workspaces.',
      benefits: ['Safety protocols', 'Intuitive interfaces', 'Collaborative tasks', 'Workflow optimization']
    },
    {
      icon: Shield,
      title: 'Safety Systems',
      description: 'Advanced safety features and fail-safe mechanisms for secure robotic operations.',
      benefits: ['Collision avoidance', 'Emergency stops', 'Safety monitoring', 'Risk assessment']
    }
  ];

  const applications = [
    {
      title: 'Manufacturing',
      description: 'Industrial robots for assembly, welding, painting, and quality control in manufacturing.',
      icon: Factory,
      useCases: ['Assembly automation', 'Quality control', 'Welding robots', 'Painting systems']
    },
    {
      title: 'Healthcare',
      description: 'Medical robots for surgery, rehabilitation, and patient care assistance.',
      icon: Stethoscope,
      useCases: ['Surgical robots', 'Rehabilitation', 'Patient monitoring', 'Drug delivery']
    },
    {
      title: 'Logistics',
      description: 'Warehouse and delivery robots for inventory management and order fulfillment.',
      icon: Truck,
      useCases: ['Warehouse automation', 'Order picking', 'Delivery robots', 'Inventory tracking']
    },
    {
      title: 'Agriculture',
      description: 'Agricultural robots for planting, harvesting, and crop monitoring.',
      icon: Home,
      useCases: ['Precision farming', 'Crop monitoring', 'Harvesting robots', 'Soil analysis']
    },
    {
      title: 'Service Industry',
      description: 'Service robots for cleaning, security, and customer assistance.',
      icon: Users,
      useCases: ['Cleaning robots', 'Security patrols', 'Customer service', 'Maintenance tasks']
    },
    {
      title: 'Research & Exploration',
      description: 'Robots for scientific research, space exploration, and underwater missions.',
      icon: Compass,
      useCases: ['Space exploration', 'Underwater research', 'Scientific experiments', 'Data collection']
    }
  ];

  const capabilities = [
    {
      metric: '99.9%',
      description: 'Accuracy in precision tasks',
      icon: Target,
    },
    {
      metric: '24/7',
      description: 'Continuous operation capability',
      icon: Clock3,
    },
    {
      metric: '50%',
      description: 'Increase in productivity',
      icon: TrendingUp,
    },
    {
      metric: '90%',
      description: 'Reduction in workplace injuries',
      icon: Shield,
    }
  ];

  const pricingPlans = [
    {
      name: 'Robotics Starter',
      price: '$2,499/month',
      description: 'For small-scale robotic applications',
      features: [,
        'Basic robot programming',
        'Standard sensors',
        'Email support',
        'Cloud monitoring',
        'Basic analytics',
        'Documentation'
      ],
      popular: false,
    },
    {
      name: 'Robotics Professional',
      price: '$5,999/month',
      description: 'For enterprise robotic solutions',
      features: [,
        'Advanced AI programming',
        'Advanced sensors',
        'Priority support',
        'Real-time monitoring',
        'Advanced analytics',
        'Custom integrations',
        'Training & consultation',
        'API access'
      ],
      popular: true,
    },
    {
      name: 'Robotics Enterprise',
      price: 'Custom',
      description: 'For large-scale robotic operations',
      features: [,
        'Custom robot development',
        'On-site deployment',
        'Dedicated support team',
        '24/7 monitoring',
        'White-label solutions',
        'Advanced safety systems',
        'Custom reporting',
        'Full customization'
      ],
      popular: false,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigation>
      </Navigation><section className="pt-24 pb-16 px-4">
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Settings className="w-4 h-4" />
              <span>Intelligent Robotics Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              AI</h1> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Robotics</span><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Build intelligent robots that can see, learn, and adapt. Our AI-powered robotics solutions</p>
              combine advanced machine learning with precision engineering for autonomous operation.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">Build AI Robots</a>
                <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
              <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">View Demo</a>
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">{capabilities.map((capability, index) => (</div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">,</h1>
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Robotics</span>,
            </h1>,
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
              Build intelligent robots that can see, learn, and adapt. Our AI-powered robotics solutions;
              combine advanced machine learning with precision engineering for autonomous operation.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Build AI Robots;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">
                View Demo;
              </a>
            </div>,
          </div>)
)
          {/* Capabilities */})
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-16">),
            {capabilities.map((capability, index) => (</div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">AI Robotics Capabilities<p className="text-xl text-gray-300 max-w-3xl mx-auto">Our AI robotics platform provides the intelligence and capabilities needed for</p>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">AI Robotics Capabilities</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Our AI robotics platform provides the intelligence and capabilities needed for</p>
              autonomous operation in any environment.<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Robotics Capabilities;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover: border-cyan-400/40 transition-colors">,</div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">,</div>
                  <feature.icon className="w-6 h-6 text-cyan-400" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, idx) => (</ul>
                    <li key={idx} className="flex items-center text-sm text-gray-300">
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
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">AI Robotics Applications<p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how AI robotics is transforming industries and enabling new possibilities.<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">AI Robotics Applications</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how AI robotics is transforming industries and enabling new possibilities.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <app.icon className="w-6 h-6 text-purple-400" />
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Robotics Applications;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI robotics is transforming industries and enabling new possibilities.
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {applications.map((app, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover: border-purple-400/40 transition-colors">,</div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4">,</div>
                  <app.icon className="w-6 h-6 text-purple-400" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4">{app.description}</p><div className="space-y-2">{app.useCases.map((useCase, idx) => (</div>
                    <div key={idx} className="flex items-center text-sm text-purple-300"></div>
                      <Target className="w-4 h-4 mr-2" >{useCase}</Target>
                    </Target>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">AI Robotics Plans<p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the right plan for your AI robotics needs.<div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">AI Robotics Plans</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the right plan for your AI robotics needs.</p><div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'
                  : 'border-gray-600/50'
              }`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Robotics Plans;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
          <div className="grid md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular;
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'}
                  : 'border-gray-600/50'}
              }`}>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular;
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div><p className="text-gray-300">{plan.description}</p><ul className="space-y-3 mb-8">{plan.features.map((feature, idx) => (</ul>
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <a href="/contact" className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>Get Started</a>
                  plan.popular;
                    ? 'bg-cyan-400 text-slate-900 hover: bg-cyan-300'}
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'}
                }`}>
                  Get Started;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build AI Robots?</h2><p className="text-xl text-gray-300 mb-8">Start building intelligent robots that can see, learn, and adapt to any environment.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">Start Building</a>
              <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">Schedule Demo</a>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">
              Start Building;
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">
              Schedule Demo;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;
