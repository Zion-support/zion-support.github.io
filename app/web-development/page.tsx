import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, IconComponent, Star, CheckCircle, Clock } from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      id: 'responsive-web-design',
      title: 'Responsive Web Design',
      description: 'Create beautiful, mobile-first websites that work perfectly on all devices.',
      icon: Smartphone,
      features: ['Mobile-First Design', 'Cross-Browser Compatibility', 'Fast Loading', 'SEO Optimized'],
      price: 'Starting at $2,999',
      popular: true,
    },
    {
      id: 'e-commerce-solutions',
      title: 'E-commerce Solutions',
      description: 'Build powerful online stores with advanced features and seamless user experience.',
      icon: Globe,
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Admin Dashboard'],
      price: 'Starting at $4,999',
      popular: false,
    },
    {
      id: 'web-applications',
      title: 'Web Applications',
      description: 'Develop custom web applications tailored to your specific business needs.',
      icon: Code,
      features: ['Custom Development', 'API Integration', 'Database Design', 'User Authentication'],
      price: 'Starting at $7,999',
      popular: false,
    },
    {
      id: 'cms-development',
      title: 'CMS Development',
      description: 'Create content management systems that make it easy to update your website.',
      icon: Settings,
      features: ['Easy Content Updates', 'User Management', 'SEO Tools', 'Multi-language Support'],
      price: 'Starting at $3,999',
      popular: false,
    },
    {
      id: 'progressive-web-apps',
      title: 'Progressive Web Apps',
      description: 'Build app-like experiences that work offline and can be installed on devices.',
      icon: Zap,
      features: ['Offline Functionality', 'Push Notifications', 'App-like Experience', 'Installable'],
      price: 'Starting at $5,999',
      popular: false,
    },
    {
      id: 'web-maintenance',
      title: 'Web Maintenance',
      description: 'Keep your website secure, updated, and performing at its best.',
      icon: Shield,
      features: ['Security Updates', 'Performance Optimization', 'Backup & Recovery', '24/7 Monitoring'],
      price: 'Starting at $299/month',
      popular: false,
    },
  ];

const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
  ];

const benefits = [
    {
      title: 'Modern Technologies',
      description: 'We use the latest technologies and best practices for optimal performance.',
      icon: Code,
    },
    {
      title: 'Mobile-First Approach',
      description: 'All our websites are designed mobile-first for the best user experience.',
      icon: Smartphone,
    },
    {
      title: 'SEO Optimized',
      description: 'Built-in SEO features to help your website rank higher in search results.',
      icon: BarChart3,
    },
    {
      title: 'Fast & Secure',
      description: 'Optimized for speed and security to protect your business and users.',
      icon: Shield,
    },
  ];
  return (
    <>
      <Helmet>
        <title>Web Development - Zion Tech Group | Custom Website Solutions</title>
        <meta name="description" content="Professional web development services including responsive design, e-commerce, web applications, and CMS development." />
        <meta name="keywords" content="web development, website design, e-commerce, web applications, responsive design, CMS development" />
        <link rel="canonical" href="https://ziontechgroup.com/web-development" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-7xl mx-auto text-center">
            
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Web <span className="text-cyan-400">Development</span>
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning, high-performance websites and web applications that drive business growth and engage your audience.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
    to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
    to="/demo"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
        {/* Technologies Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Technologies We Use
            </h2>
            
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center">
                  
        <div className="w-16 h-16 bg-slate-800/50 rounded-lg flex items-center justify-center mx-auto mb-3 text-2xl">
                    {tech.icon}
                  </div>
                  <span className="text-gray-300 text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our Web Development Services?
            </h2>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
  return (
                  <div key={index} className="text-center">
                    
        <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    
          <p className="text-gray-300">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Web Development Services
            </h2>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webServices.map((service) => {
                const IconComponent = service.icon;
  return (
                  <div
    key={service.id} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300 ${
                      service.popular 
                        ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                        : 'border-cyan-500/20'
                    }`}
                  >
                    {service.popular && (
                      
        <div className="flex items-center justify-center mb-4">
                        <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>Most Popular</span>
                        </span>
                      </div>
                    )}
                    
        <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    
          <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
        <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      
        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>2-4 weeks</span>
                      </div>
                    </div>
                    <Link
    to="/contact"
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          
        <div className="max-w-4xl mx-auto text-center">
            
        <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Build Your Dream Website?
              </h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Let our expert developers create a website that perfectly represents your brand and drives results.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
    to="/contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
    to="/demo"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default WebDevelopmentPage;