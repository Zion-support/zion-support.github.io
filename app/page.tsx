import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Brain, 
  Server, 
  Globe, 
  Shield, 
  Code, 
  Database, 
  Smartphone,
  BarChart3,
  Users,
  Settings,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence services that transform your business operations and decision-making processes.',
      link: '/ai-solutions'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'Micro SAAS Platform',
      description: 'Scalable micro software-as-a-service solutions designed for modern businesses and startups.',
      link: '/micro-saas-solutions'
    },
    {
      icon: <Server className="w-8 h-8 text-green-400" />,
      title: 'IT Infrastructure',
      description: 'Comprehensive IT services including cloud infrastructure, cybersecurity, and system integration.',
      link: '/it-solutions'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: '5G Solutions',
      description: 'Next-generation 5G implementation, IoT solutions, and smart city technologies.',
      link: '/5g-solutions'
    }
  ];

  const microSaasServices = [
    {
      name: 'AI Accounting Assistant',
      price: '$29/mo',
      description: 'Automated bookkeeping and financial analysis',
      features: ['Invoice Processing', 'Expense Tracking', 'Tax Preparation', 'Financial Reports'],
      link: '/ai-accounting-assistant'
    },
    {
      name: 'AI Content Moderation Pro',
      price: '$49/mo',
      description: 'Advanced content filtering and moderation',
      features: ['Real-time Monitoring', 'Custom Rules', 'Multi-language Support', 'Analytics Dashboard'],
      link: '/ai-content-moderation-pro'
    },
    {
      name: 'AI Climate Solutions Pro',
      price: '$79/mo',
      description: 'Environmental monitoring and sustainability tracking',
      features: ['Carbon Footprint Analysis', 'Sustainability Reports', 'Compliance Monitoring', 'Green Initiatives'],
      link: '/ai-climate-solutions-pro'
    },
    {
      name: 'AI Agricultural Intelligence',
      price: '$99/mo',
      description: 'Smart farming and crop optimization',
      features: ['Crop Monitoring', 'Weather Analysis', 'Yield Prediction', 'Resource Optimization'],
      link: '/ai-agricultural-intelligence-pro'
    }
  ];

  const aiServices = [
    {
      name: 'AI Chatbot Enterprise',
      price: '$299/mo',
      description: 'Advanced conversational AI for customer service',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Custom Training', 'Analytics'],
      link: '/ai-chatbot-enterprise'
    },
    {
      name: 'AI Computer Vision',
      price: '$399/mo',
      description: 'Image and video analysis solutions',
      features: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Real-time Processing'],
      link: '/ai-computer-vision'
    },
    {
      name: 'AI Analytics Dashboard Pro',
      price: '$349/mo',
      description: 'Advanced business intelligence and analytics',
      features: ['Predictive Analytics', 'Custom Dashboards', 'Real-time Insights', 'Data Visualization'],
      link: '/ai-analytics-dashboard-pro'
    },
    {
      name: 'AI Automation Platform',
      price: '$499/mo',
      description: 'End-to-end business process automation',
      features: ['Workflow Automation', 'RPA Integration', 'Custom Bots', 'Performance Monitoring'],
      link: '/ai-automation-platform'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Expert Support', icon: <Clock className="w-6 h-6" /> },
    { number: '50+', label: 'AI Solutions', icon: <Brain className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion Tech Group transformed our business with their AI solutions. Our efficiency increased by 300% in just 6 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Enterprises',
      role: 'CTO',
      content: 'The micro SAAS platform they built for us is incredibly powerful and cost-effective. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateCorp',
      role: 'Operations Director',
      content: 'Their 5G solutions helped us implement smart city technologies that improved our city\'s infrastructure significantly.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Micro SAAS Platform</title>
        <meta name="description" content="Leading provider of AI-powered micro SAAS solutions, IT services, and 5G technologies. Transform your business with cutting-edge technology from Zion Tech Group." />
        <meta name="keywords" content="AI solutions, micro SAAS, IT services, 5G technology, cloud infrastructure, cybersecurity, business automation" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered micro SAAS solutions, IT services, and 5G technologies." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}AI & IT Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Leading provider of micro SAAS solutions, AI services, and cutting-edge technology. 
              Scale your business with our innovative platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white/30 hover:border-cyan-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                Watch Demo
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable micro software-as-a-service solutions designed for modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    {service.price}
                  </div>
                  <p className="text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="block w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white text-center py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/micro-saas-solutions"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View All Micro SAAS Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced artificial intelligence services that transform your business operations and decision-making processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 group">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    {service.price}
                  </div>
                  <p className="text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-center py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/ai-solutions"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View All AI Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by businesses worldwide for our innovative solutions and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have already transformed their operations with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;