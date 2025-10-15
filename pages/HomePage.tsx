import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Brain,
  Server,
  Target,
  Rocket,
  BarChart3,
  Code,
  Database,
  Cloud,
  Smartphone,
  Globe
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence services that transform your business operations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Server,
      title: 'Enterprise IT Services',
      description: 'Comprehensive IT infrastructure and management solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Micro SAAS Platforms',
      description: 'Specialized software solutions for modern business needs',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Advanced security solutions to protect your digital assets',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const services = [
    {
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights',
      price: '$299/month',
      features: ['Real-time Analytics', 'AI Predictions', 'Custom Dashboards', 'API Integration'],
      popular: true
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      price: '$199/month',
      features: ['Auto-scaling', '99.9% Uptime', '24/7 Monitoring', 'Security Compliance'],
      popular: false
    },
    {
      name: 'AI Content Generator',
      description: 'Automated content creation with advanced AI',
      price: '$149/month',
      features: ['Multi-language Support', 'SEO Optimization', 'Brand Voice', 'Bulk Generation'],
      popular: false
    },
    {
      name: 'Cybersecurity Suite',
      description: 'Comprehensive security monitoring and protection',
      price: '$399/month',
      features: ['Threat Detection', 'Real-time Alerts', 'Compliance Reports', 'Incident Response'],
      popular: true
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Zap },
    { number: '4.9/5', label: 'Customer Rating', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI, IT, and Micro SAAS solutions. Transform your business with cutting-edge technology and expert support." />
        <meta name="keywords" content="AI solutions, IT services, micro SAAS, business automation, cloud computing, cybersecurity, data analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Advanced Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI, IT, and Micro SAAS solutions. We help businesses scale, automate, and innovate with cutting-edge technology and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with expert knowledge to deliver solutions that drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Popular Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of AI, IT, and Micro SAAS solutions designed to accelerate your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                service.popular 
                  ? 'border-purple-500/60 ring-2 ring-purple-500/20' 
                  : 'border-purple-500/20 hover:border-purple-500/40'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="text-3xl font-bold text-white mb-6">{service.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600'
                        : 'border border-purple-500 text-purple-300 hover:bg-purple-500/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-12 text-center border border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that trust Zion Tech Group for their technology needs. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;