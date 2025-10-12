import React, {useState} from 'react'
import {Helmet} from 'react-helmet-async'
import {Link} from 'react-router-dom'
import {Code, Star} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function MicroSaasServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All'
  const microSaasServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration'],
      pricing: '$9/month',
      popular: true
      link: '/ai-task-manager',
      category: 'Productivity'
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and categorization.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget alerts', 'Tax preparation'],
      pricing: '$7/month',
      popular: false
      link: '/ai-expense-tracker',
      category: 'Finance'
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure storage', 'Password generation', 'Security audit', 'Multi-device sync'],
      pricing: '$12/month',
      popular: true
      link: '/ai-password-manager',
      category: 'Security'
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with smart templates and payment tracking.',
      features: ['Auto generation', 'Custom templates', 'Payment tracking', 'Tax calculations'],
      pricing: '$15/month',
      popular: false
      link: '/ai-invoice-generator',
      category: 'Finance'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights and wellness recommendations.',
      features: ['Health monitoring', 'AI insights', 'Goal tracking', 'Wellness tips'],
      pricing: '$8/month',
      popular: true
      link: '/ai-health-tracker',
      category: 'Health'
    },
    {
      icon: <Code className="w-12 h-12 text-yellow-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with smart scheduling and conflict resolution.',
      features: ['Smart scheduling', 'Conflict resolution', 'Meeting optimization', 'Time blocking'],
      pricing: '$10/month',
      popular: false
      link: '/ai-smart-calendar',
      category: 'Productivity'
    }
  ]

  const _categories = ['All', 'Productivity', 'Finance', 'Security', 'Health']

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices
    : microSaasServices.filter(service => service.category === selectedCategory
  const stats = [
    { number: '50,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '15+', label: 'Micro SAAS Apps' },
    { number: '24/7', label: 'Support' }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup process and guided onboarding.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Powerful tools at micro-SaaS prices, perfect for small businesses and individuals.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate tasks and improve productivity.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock support to help you get the most out of your tools.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      </Helmet>
        <title>Micro SaaS Services | Zion Tech Group</title>
        <meta name="description" content="Specialized micro software solutions designed for specific business needs. AI-powered tools for productivity, finance, security, and more." />
        <meta name="keywords" content="micro SaaS, software solutions, productivity tools, AI tools, business software" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions;
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Specialized micro software solutions designed for specific business needs and workflows. 
              Powerful tools at micro-SaaS prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started;
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link;
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
            {stats.map((stat, index) => (
              <div key={index} className="text-center"></div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2"></div>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm"></div>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-wrap justify-center gap-4"></div>
            {_categories.map((category) => (
              <button;
                key={category},
    onClick={() => setSelectedCategory(category)},
    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category;
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Solutions;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of specialized micro software solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {filteredServices.map((service, index) => (
              <div;
                key={index},
    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group"
              ></div>
                <div className="flex items-center justify-between mb-4"></div>
                  {service.icon},
    {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular;
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-6"></div>
                  <span className="text-2xl font-bold text-white">
                    {service.pricing}
                  </span>
                  <div className="flex items-center"></div>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300 ml-1">4.8</span>
                  </div>
                </div>
                
                <Link;
                  to={service.link},
    className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  Try Now;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver powerful, affordable tools designed for modern businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start using our micro SaaS solutions today and experience the power of specialized tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today;
              </Link>
              <Link;
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  
}