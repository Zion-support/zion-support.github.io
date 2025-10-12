import { ArrowRight, CheckCircle, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Settings, Cpu, Zap } from 'lucide-react'      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      price: 'Starting at $2,999',
      features: ['Responsive design', 'SEO optimized', 'Fast loading', 'Mobile-first approach'],
      link: '/web-development'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android devices.',
      price: 'Starting at $4,999',
      features: ['Native performance', 'Cross-platform', 'App store optimization', 'Push notifications'],
      link: '/mobile-development'
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime and enhanced security.',
      price: 'Starting at $1,999',
      features: ['Zero downtime', 'Enhanced security', 'Cost optimization', '24/7 monitoring'],
      link: '/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      price: 'Starting at $399/month',
      features: ['Threat detection', 'Vulnerability assessment', 'Security audits', 'Incident response'],
      link: '/cybersecurity'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance services.',
      price: 'Starting at $299/month',
      features: ['Performance optimization', 'Data backup', 'Security hardening', 'Query optimization'],
      link: '/database-management'
    },
    {
      icon: <Network className="w-8 h-8 text-orange-400" />,
      title: 'Network Infrastructure',
      description: 'Robust network solutions for reliable connectivity and performance.',
      price: 'Starting at $499/month',
      features: ['Network design', 'Security implementation', 'Performance monitoring', 'Disaster recovery'],
      link: '/network-infrastructure'
    },
    {
      icon: <Wrench className="w-8 h-8 text-pink-400" />,
      title: 'DevOps Solutions',
      description: 'Streamline development and deployment with modern DevOps practices.',
      price: 'Starting at $599/month',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & logging', 'Automated testing'],
      link: '/devops-solutions'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      price: 'Starting at $399/month',
      features: ['Data visualization', 'Predictive analytics', 'Real-time dashboards', 'Custom reports'],
      link: '/data-analytics'
    }
  ]

  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Server className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Monitor className="w-6 h-6 text-blue-400" /> },
    { number: '150+', label: 'Expert Engineers', icon: <Users className="w-6 h-6 text-purple-400" /> }  ]
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/analyze-improve-and-deploy-application-9d9d

const ItServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, web development, and more. Transform your business with our expert solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, web development, mobile development, data analytics" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT solutions to modernize your infrastructure, enhance security, 
            and accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"            <Link 
              to="/demo" 
              className="group border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />            </Link>
          </div>
        </div>
      </section>

        <title>It Services - Zion Tech Group</title>
        <meta name="description" content="It Services services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="it-services, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <div className="text-emerald-400 font-semibold text-lg">
                    {service.price}
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={service.link}
                    className="block w-full mt-6 bg-gradient-to-r from-emerald-500 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/25"
                  >
                    Learn More
                  </Link>
                </div>              </div>
            ))}
          </div>
        </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-9d9d

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive it services solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
