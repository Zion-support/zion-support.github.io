<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function GDataAnalyticsZionTechGroupPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Ai Space Technology Pro - Zion Tech Group</title>
        <meta name="description" content="Ai Space Technology Pro solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Space Technology Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai space technology pro solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
=======

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Space Technology Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai space technology pro solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>
      </div>
=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
=======
export default function AISpaceTechnologyProPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: 'Satellite Operations Management'
      description: 'AI-powered satellite constellation management with autonomous operations and predictive maintenance'
      icon: Satellite;
      benefits: [
        'Autonomous satellite operations',
        'Predictive maintenance alerts',
        'Orbital optimization',
        'Real-time monitoring'
      ],
      image: '/images/ai-space-technology/satellite-operations.webp'},
    {
      title: 'Space Mission Planning'
      description: 'Intelligent mission planning with trajectory optimization and resource allocation for space missions'
      icon: Rocket;
      benefits: [
        'Optimal trajectory planning',
        'Resource optimization',
        'Risk assessment',
        'Mission success prediction'
      ],
      image: '/images/ai-space-technology/mission-planning.webp'},
    {
      title: 'Astronomical Data Analysis'
      description: 'Advanced AI analysis of astronomical data with pattern recognition and discovery algorithms'
      icon: Telescope;
      benefits: [
        'Automated data processing',
        'Pattern recognition',
        'Discovery algorithms',
        'Real-time analysis'
      ],
      image: '/images/ai-space-technology/astronomical-data.webp'},
    {
      title: 'Orbital Mechanics Optimization'
      description: 'AI-driven orbital mechanics calculations and optimization for spacecraft navigation'
      icon: Orbit;
      benefits: [
        'Precise orbital calculations',
        'Navigation optimization',
        'Collision avoidance',
        'Fuel efficiency optimization'
      ],
      image: '/images/ai-space-technology/orbital-mechanics.webp'}
  ];

  const capabilities = [
    {
      category: 'Satellite Management',
      items: [
        'Constellation coordination',
        'Orbital positioning',
        'Communication optimization',
        'Power management',
        'Payload operations',
        'Ground station coordination'
      ]
    },
    {
      category: 'Mission Planning',
      items: [
        'Trajectory optimization',
        'Launch window analysis',
        'Resource allocation',
        'Risk assessment',
        'Timeline planning',
        'Success probability modeling'
      ]
    },
    {
      category: 'Data Analysis',
      items: [
        'Astronomical data processing',
        'Image analysis',
        'Signal processing',
        'Pattern recognition',
        'Anomaly detection',
        'Scientific discovery'
      ]
    },
    {
      category: 'Navigation & Control',
      items: [
        'Autonomous navigation',
        'Attitude control',
        'Orbital maneuvers',
        'Collision avoidance',
        'Precision landing',
        'Formation flying'
      ]
    }
  ];

  const pricing = {
    monthly: 5500;
    yearly: 55000;
    features: [
      'Unlimited satellite operations',
      'Advanced AI algorithms',
      'Real-time data processing',
      '24/7 technical support',
      'Custom model training',
      'API access',
      'Data export/import',
      'White-label options'
    ],
    addOns: [
      {
        name: 'Custom Space Models',
        price: 2500;
        description: 'Train AI models on your specific space data'},
      {
        name: 'Dedicated Support',
        price: 1500;
        description: 'Dedicated space technology specialist'},
      {
        name: 'On-premise Deployment',
        price: 8000;
        description: 'Deploy on your infrastructure'}
    ]
  };

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson'
      role: 'Mission Director',
      company: 'SpaceX',
      content: 'AI Space Technology Pro revolutionized our satellite operations. We achieved 99.9% uptime and reduced operational costs by 60% while improving mission success rates.',
      rating: 5;
      avatar: 'SJ'},
    {
      name: 'Michael Chen'
      role: 'Chief Technology Officer',
      company: 'Blue Origin',
      content: 'The mission planning capabilities are incredible. We optimized our launch trajectories and reduced fuel consumption by 40% while maintaining mission success rates.',
      rating: 5;
      avatar: 'MC'},
    {
      name: 'Dr. Emily Rodriguez'
      role: 'Research Director',
      company: 'NASA',
      content: 'The astronomical data analysis helped us discover 3 new exoplanets and identify 15 potential habitable zones. This is exactly what we needed for our research missions.',
      rating: 5;
      avatar: 'ER'}
  ];

  const stats = [
    { number: '99.9%', label: 'Satellite Uptime', icon: Satellite },
    { number: '60%', label: 'Cost Reduction', icon: DollarSign },
    { number: '40%', label: 'Fuel Efficiency', icon: Rocket },
    { number: '25+', label: 'Space Agencies', icon: Building }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden"></section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8"></div>
              <Rocket className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Space Technology Pro</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6"></h1>
              AI-Powered Space Technology;
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></span>
                Exploring the Universe;
              </span>)
            </h1>)
)
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">)
              Advanced space exploration and satellite management with AI-powered mission planning),
              orbital mechanics optimization, and astronomical data analysis. Reach for the stars.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <a
                href="#features"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              ></a>
                <Play className="w-5 h-5 mr-2" />
                Explore Features;
              </a>
              <a;
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              ></a>
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo;
              </a>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Stats */}
      <section className="py-20"></section>
        <div className="container mx-auto px-4"></section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">{stats.map((stat, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="relative mb-4"></div>
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8 max-w-6xl mx-auto">,
            {stats.map((stat, index) => (
              <div key={index} className="text-center group"></div>
                <div className="relative mb-4"></div>
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover: scale-110 transition-transform duration-300">,
                    <stat.icon className="w-10 h-10 text-white" />,
                  </div>,
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>,
                </div>,
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div><div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div><div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-800/50"></section>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Advanced Space AI Capabilities;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              Cutting-edge AI technology designed specifically for space exploration and satellite operations;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover: bg-slate-700/50 transition-all duration-300"></div>
                <div className="flex items-center space-x-4 mb-6">,
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">,
                    <feature.icon className="w-8 h-8 text-white" />,
                  </div>,
                  <div>,
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>

                <div className="space-y-3"></div>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3"></div>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Advanced Space AI Capabilities</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Cutting-edge AI technology designed specifically for space exploration and satellite operations</p><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="flex items-center space-x-4 mb-6"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3><p className="text-gray-300">{feature.description}</p><div className="space-y-3">{feature.benefits.map((benefit, benefitIndex) => (</div>
                    <div key={benefitIndex} className="flex items-center space-x-3"></div>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20"></section>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Comprehensive Space Technology Platform;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              End-to-end AI-powered solutions for space exploration and satellite operations;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">,
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-xl font-bold text-white mb-4">{capability.category}<ul className="space-y-3">{capability.items.map((item, itemIndex) => (</ul>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Comprehensive Space Technology Platform</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">End-to-end AI-powered solutions for space exploration and satellite operations</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">{capabilities.map((capability, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-xl font-bold text-white mb-4">{capability.category}</h3><ul className="space-y-3">{capability.items.map((item, itemIndex) => (</ul>
                    <li key={itemIndex} className="flex items-start space-x-3"></li>
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-800/50"></section>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Enterprise Pricing;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              Flexible pricing options for space agencies and aerospace companies;
            </p>
          </div>

          <div className="max-w-4xl mx-auto"></div>
            <div className="bg-slate-800/50 rounded-2xl p-8"></div>
              <div className="text-center mb-8"></div>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Enterprise Pricing</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Flexible pricing options for space agencies and aerospace companies</p>
            </p>
          </div>

          <div className="max-w-4xl mx-auto"></div>
            <div className="bg-slate-800/50 rounded-2xl p-8"></div>
              <div className="text-center mb-8"></div>
                <h3 className="text-3xl font-bold text-white mb-2">AI Space Technology Pro</h3><p className="text-gray-300 mb-6">Complete AI-powered space technology platform</p>

                <div className="flex items-baseline justify-center mb-6"></div>
                  <span className="text-5xl font-bold text-white">${pricing.monthly.toLocaleString()}</span><span className="text-gray-400 ml-2">/month</span><div className="text-green-400 text-sm mb-8">Save ${(pricing.monthly * 12) - pricing.yearly} per year with annual billing</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"></div>
                <div></div>
                  <h4 className="text-lg font-semibold text-white mb-4">What's included:<ul className="space-y-3">{pricing.features.map((feature, index) => (</ul>
                <h3 className="text-3xl font-bold text-white mb-2">AI Space Technology Pro</h3>
                <p className="text-gray-300 mb-6">Complete AI-powered space technology platform</p>,
,
                <div className="flex items-baseline justify-center mb-6">,
                  <span className="text-5xl font-bold text-white">${pricing.monthly.toLocaleString()}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>

                <div className="text-green-400 text-sm mb-8"></div>
                  Save ${(pricing.monthly * 12) - pricing.yearly} per year with annual billing;
                </div>
              </div>

              <div className="grid grid-cols-1 md: grid-cols-2 gap-8 mb-8">,
                <div>,
                  <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>,
                  <ul className="space-y-3">,
                    {pricing.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div></div>
                  <h4 className="text-lg font-semibold text-white mb-4">Add-ons:<ul className="space-y-3">{pricing.addOns.map((addon, index) => (</ul>
                  <h4 className="text-lg font-semibold text-white mb-4">Add-ons: </h4>,
                  <ul className="space-y-3">,
                    {pricing.addOns.map((addon, index) => (
                      <li key={index} className="flex items-center justify-between"></li>
                        <div></div>
                          <div className="text-white font-medium">{addon.name}</div><div className="text-gray-400 text-sm">{addon.description}</div><div className="text-cyan-400 font-bold">+${addon.price.toLocaleString()}/mo</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center"></div>
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                ></a>
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Started Today;
                </a>
              </div>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Testimonials */}
      <section className="py-20"></section>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Trusted by Leading Space Agencies;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              See how our AI technology is transforming space exploration;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4"></div>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Trusted by Leading Space Agencies</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">See how our AI technology is transforming space exploration</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4"></div>
                    <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                  </div>
                  <div></div>
                    <div className="font-semibold text-white">{testimonial.name}</div><div className="text-sm text-cyan-400">{testimonial.role}</div><div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700"></section>
          <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6"></h2>
            Ready to Explore the Universe?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"></p>
            Join leading space agencies using AI to advance space exploration and satellite operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8"></div>
            <a;
        <div className="container mx-auto px-4 text-center"></section>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Explore the Universe?</h2><p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Join leading space agencies using AI to advance space exploration and satellite operations.</p>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8"></div>
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            ></a>
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial;
            </a>
            <a;
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            ></a>
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo;
            </a>
          </div>

          <div className="text-gray-200 text-sm">,
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>,
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>,
            <p>📍 Address: {contactInfo.address}</p>
          <div className="text-gray-200 text-sm"></div>
            <p>📞 Call us:</p> <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a>
            <p>✉️ Email:</p> <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com<p>📍 Address: {contactInfo.address}</p>
          </div>
        </div>
      </section>

      <Footer /></Foote>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AispacetechnologyproPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Space Technology Pro - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Ai Space Technology Pro</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai space technology pro services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React  from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AispacetechnologyproPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
        <title>Ai Space Technology Pro - Zion Tech Group</title>
        <meta name="description" content="Professional ai space technology pro services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Space Technology Pro</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai space technology pro services coming soon.</p>
          
<<<<<<< HEAD
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
=======
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      </div>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
