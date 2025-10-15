import React from 'react';
import SEOHead from '../components/SEOHead';
import { CheckCircle, Star, Zap, Shield, Users, BarChart3, Clock, Globe, ArrowRight, Play, Award, TrendingUp } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredServices = [
    {
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with multi-language support and SEO optimization.',
      price: 'From $29/month',
      features: ['50+ languages', 'SEO optimization', 'Brand voice customization'],
      link: '/ai-content-generator',
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Micro SaaS'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Intelligent business analytics with predictive insights and real-time visualization.',
      price: 'From $39/month',
      features: ['Real-time data', 'Predictive analytics', '100+ integrations'],
      link: '/ai-analytics-dashboard',
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'AI Solutions'
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure design, deployment, and management services.',
      price: 'From $2,500/month',
      features: ['Multi-cloud support', 'Auto-scaling', '24/7 monitoring'],
      link: '/cloud-infrastructure',
      icon: <Globe className="w-8 h-8" />,
      category: 'IT Solutions'
    },
    {
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and security monitoring with real-time alerts.',
      price: 'From $99/month',
      features: ['Real-time monitoring', 'AI threat detection', 'Compliance reporting'],
      link: '/ai-cybersecurity-monitor',
      icon: <Shield className="w-8 h-8" />,
      category: 'Cybersecurity'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI solutions, IT services, micro SaaS applications, cybersecurity, and cloud infrastructure. Transform your business with cutting-edge technology."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Transform Your Business with AI & IT Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Leading provider of cutting-edge AI solutions, micro SaaS applications, IT services, and cybersecurity solutions. 
                Drive innovation and growth with our comprehensive technology services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/demo"
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Featured Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular AI and IT solutions designed to solve real business challenges and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 border border-slate-700 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-xs text-blue-400 bg-blue-900/30 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <div className="mb-4">
                    <div className="text-lg font-bold text-blue-400 mb-2">{service.price}</div>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center block"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
                <p className="text-gray-300">
                  Over 10 years of experience delivering AI and IT solutions across various industries including healthcare, finance, and manufacturing.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Results</h3>
                <p className="text-gray-300">
                  Our solutions have helped 500+ businesses increase efficiency by 40% on average and reduce operational costs by 30%.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
                <p className="text-gray-300">
                  Round-the-clock technical support and monitoring to ensure your systems run smoothly and efficiently at all times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of successful businesses that trust Zion Tech Group for their AI and IT solutions. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Free Consultation
              </a>
              <a
                href="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing Plans
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <Globe className="w-5 h-5 mr-2 text-blue-400" />
                <span>https://ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;