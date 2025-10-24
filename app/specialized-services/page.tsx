import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GDataAnalyticsZionTechGroupPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
=======
    <div>
      <Head>
        <title>Specialized Specialized Servicess - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Specialized Specialized Servicess
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            specialized-services services Transform your business with our expert solutions. services coming soon.
          </p>
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const SpecializedServicesPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
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

<<<<<<< HEAD
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>Specialized Services - Zion Tech Group</title>
        <meta name="description" content="Specialized technology services for unique requirements." />
        <meta name="keywords" content="specialized services, custom solutions, unique requirements" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Specialized Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Specialized technology services for unique requirements.
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div></div></div>
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
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div></div>
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
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
=======
      title: 'Quantum Computing Solutions'
      description: 'Revolutionary quantum algorithms and computing infrastructure for complex problem solving'
      icon: Cpu;
      price: 'Custom Pricing',
      features: [
        'Quantum Algorithm Development',
        'Quantum Machine Learning',
        'Quantum Optimization',
        'Quantum Cryptography',
        'Quantum Simulation',
        'Quantum Error Correction'
      ],
      benefits: [
        'Exponential speed improvements',
        'Breakthrough problem solving',
        'Future-proof technology',
        'Competitive advantage'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30',
      category: 'Quantum Technology'},
    {
      title: 'Autonomous Systems'
      description: 'Self-managing intelligent systems that operate independently with minimal human intervention'
      icon: Settings;
      price: 'Custom Pricing',
      features: [
        'Autonomous Decision Making',
        'Self-Healing Infrastructure',
        'Predictive Maintenance',
        'Adaptive Learning',
        'Real-time Optimization',
        'Exception Handling'
      ],
      benefits: [
        'Reduced operational costs',
        'Improved reliability',
        '24/7 autonomous operation',
        'Scalable intelligence'
      ],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-400/30',
      category: 'Autonomous Technology'},
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Decentralized applications, smart contracts, and Web3 infrastructure development',
      icon: Lock;
      price: 'Custom Pricing',
      features: [
        'Smart Contract Development',
        'DApp Creation',
        'DeFi Solutions',
        'NFT Marketplaces',
        'Token Economics',
        'Web3 Integration'
      ],
      benefits: [
        'Decentralized security',
        'Transparent operations',
        'Reduced intermediaries',
        'Global accessibility'
      ],
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-400/30',
      category: 'Blockchain Technology'},
    {
      title: 'IoT & Edge Computing'
      description: 'Connected devices and edge computing solutions for real-time data processing'
      icon: Globe;
      price: 'Custom Pricing',
      features: [
        'IoT Device Development',
        'Edge Computing Infrastructure',
        'Real-time Data Processing',
        'Sensor Integration',
        'Edge AI Implementation',
        'IoT Security'
      ],
      benefits: [
        'Real-time insights',
        'Reduced latency',
        'Improved efficiency',
        'Cost optimization'
      ],
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400/30',
      category: 'IoT Technology'},
    {
      title: 'Business Intelligence Platform'
      description: 'Advanced analytics and business intelligence solutions for data-driven decision making'
      icon: BarChart;
      price: 'Custom Pricing',
      features: [
        'Advanced Analytics',
        'Predictive Modeling',
        'Data Visualization',
        'Real-time Dashboards',
        'Custom Reports',
        'Data Integration'
      ],
      benefits: [
        'Better decision making',
        'Competitive insights',
        'Operational efficiency',
        'Revenue optimization'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30',
      category: 'Analytics'},
    {
      title: 'Robotics Solutions'
      description: 'Intelligent robotics and automation systems for industrial and commercial applications'
      icon: Settings;
      price: 'Custom Pricing',
      features: [
        'Robotic Process Automation',
        'Intelligent Robotics',
        'Computer Vision Integration',
        'Human-Robot Collaboration',
        'Predictive Maintenance',
        'Safety Systems'
      ],
      benefits: [
        'Increased productivity',
        'Improved safety',
        'Cost reduction',
        'Quality consistency'
      ],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-400/30',
      category: 'Robotics'},
    {
      title: 'Enterprise Solutions'
      description: 'Comprehensive enterprise-grade solutions for large organizations and complex requirements'
      icon: Building;
      price: 'Custom Pricing',
      features: [
        'Enterprise Architecture',
        'Scalable Infrastructure',
        'Security & Compliance',
        'Integration Services',
        'Change Management',
        'Training & Support'
      ],
      benefits: [
        'Enterprise-grade security',
        'Scalable solutions',
        'Compliance assurance',
        'Dedicated support'
      ],
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-400/30',
      category: 'Enterprise'},
    {
      title: 'Analytics Tools Suite'
      description: 'Comprehensive suite of advanced analytics tools for business intelligence and insights'
      icon: BarChart;
      price: 'Custom Pricing',
      features: [
        'Advanced Analytics',
        'Machine Learning Models',
        'Data Mining',
        'Statistical Analysis',
        'Custom Algorithms',
        'API Integration'
      ],
      benefits: [
        'Deep insights',
        'Predictive capabilities',
        'Custom solutions',
        'Integration flexibility'
      ],
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/20',
      borderColor: 'border-indigo-400/30',
      category: 'Analytics'}
  ];

  const businessApps = [
    {
      title: 'Expense Tracker Pro',
      description: 'AI-powered expense management and financial tracking',
      icon: DollarSign;
      price: '$99/month',
      features: ['AI Receipt Scanning', 'Automatic Categorization', 'Expense Analytics', 'Budget Planning'],
      color: 'text-green-400'},
    {
      title: 'Task Manager Pro',
      description: 'Intelligent task management and project coordination',
      icon: CheckCircle;
      price: '$79/month',
      features: ['AI Task Prioritization', 'Team Collaboration', 'Progress Tracking', 'Deadline Management'],
      color: 'text-blue-400'},
    {
      title: 'Smart Analytics',
      description: 'Advanced business analytics and reporting platform',
      icon: BarChart;
      price: '$149/month',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
      color: 'text-purple-400'}
  ];

  const stats = [
    { label: 'Specialized Projects', value: '200+', icon: Star },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: Users },
    { label: 'Average ROI', value: '400%', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        {/* Hero Section */}
        <section className="text-center mb-16"></section>
          <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text"></h1>
            Specialized Solutions;
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>
            Cutting-edge technologies and specialized solutions for complex business challenges.
            We deliver innovative solutions that push the boundaries of what's possible.
          </p>,
        </section>,
)
        {/* Stats Section */})
        <section className="mb-16">)
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6">),
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center hover: scale-105 transition-all duration-300">,
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />,
                <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
                <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div><div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Services Grid */}
        <section className="mb-16"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
            Advanced Technology Solutions;
          </h2>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {specializedServices.map((service, index) => (
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Advanced Technology Solutions</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{specializedServices.map((service, index) => (</section>
              <article key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${service.borderColor}`}></article>
                <div className="flex items-center mb-6"></div>
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mr-4`}></div>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.title}</h3><div className={`text-sm font-semibold ${service.color}`}>{service.category}</div><p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                </p>

                <div className="mb-6"></div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:<ul className="space-y-2">{service.features.map((feature, featureIndex) => (</ul>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features: </h4>,
                  <ul className="space-y-2">,
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>

                <div className="mb-6"></div>
                  <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:<ul className="space-y-2">{service.benefits.map((benefit, benefitIndex) => (</ul>
                  <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits: </h4>,
                  <ul className="space-y-2">,
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                        <ArrowRight className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" >{benefit}</ArrowRight>
                      </ArrowRight>
                    ))}
                  </ul>
                </div>

                <div className="text-center"></div>
                  <div className={`text-lg font-bold mb-4 neon-text ${service.color}`}>{service.price}</div><a
                    href="/contact"
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >Learn More</a>
                  <div className={`text-lg font-bold mb-4 neon-text ${service.color}`}></div>
                    {service.price}
                  </div>
                  <a;
                    href="/contact"
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  ></a>
                    Learn More;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Business Apps Section */}
        <section className="mb-16"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
            Business Applications;
          </h2>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {businessApps.map((app, index) => (
              <div key={index} className="cyber-card p-6 text-center hover: scale-105 transition-all duration-300">,
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Business Applications</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{businessApps.map((app, index) => (</section>
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
                <app.icon className={`w-16 h-16 ${app.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{app.title}</h3><p className="text-gray-300 mb-4">{app.description}</p><ul className="space-y-2 mb-6">{app.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <div className={`text-2xl font-bold mb-4 neon-text ${app.color}`}>{app.price}</div><a
                  href="/contact"
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${app.color} border border-current hover:bg-current hover:text-slate-900`}
                >Get Started</a>
                </ul>

                <div className={`text-2xl font-bold mb-4 neon-text ${app.color}`}></div>
                  {app.price}
                </div>
                <a;
                  href="/contact"
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${app.color} border border-current hover:bg-current hover:text-slate-900`}
                ></a>
                  Get Started;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
            Why Choose Our Specialized Solutions?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">,
              <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />,
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Cutting-Edge Technology</h3>,
              <p className="text-gray-300">,
                We leverage the latest technologies including quantum computing, AI, and blockchain to deliver innovative solutions.
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover: scale-105 transition-all duration-300"></div>
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Cutting-Edge Technology</h3><p className="text-gray-300">We leverage the latest technologies including quantum computing, AI, and blockchain to deliver innovative solutions.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
              <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Proven Expertise</h3><p className="text-gray-300">Our team has deep expertise in specialized technologies with a track record of successful implementations.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
              <Target className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Custom Solutions</h3><p className="text-gray-300">Every solution is tailored to your specific needs and business requirements for maximum impact.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
              <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Dedicated Support</h3><p className="text-gray-300">Our specialized team provides ongoing support and maintenance for all our advanced solutions.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
              <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Rapid Implementation</h3><p className="text-gray-300">We deliver complex solutions quickly without compromising on quality or security.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
              <DollarSign className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">ROI Focused</h3><p className="text-gray-300">Our solutions are designed to deliver measurable ROI and long-term business value.</p>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center"></section>
              <h3 className="text-xl font-bold text-white mb-3 neon-text">ROI Focused</h3>
              <p className="text-gray-300"></p>
                Our solutions are designed to deliver measurable ROI and long-term business value.
              </p>,
            </div>,
          </div>,
        </section>,
,
        {/* CTA Section */}
        <section className="text-center"></section>
          <div className="cyber-card p-12 max-w-4xl mx-auto"></div>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text"></h2>
              Ready to Explore Specialized Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Contact our specialized solutions team to discuss your unique requirements and discover how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a;
          <div className="cyber-card p-12 max-w-4xl mx-auto"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Explore Specialized Solutions?</h2><p className="text-xl text-gray-300 mb-8">Contact our specialized solutions team to discuss your unique requirements and discover how we can help.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              ></a>
                Discuss Your Project;
              </a>
              <a;
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ></a>
                Call +1 302 464 0950;
              </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
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
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
=======
      <Footer />,
    </div>);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};

export default SpecializedServicesPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
