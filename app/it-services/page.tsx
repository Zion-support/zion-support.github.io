'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cloud, Shield, Code, Database, Smartphone, Users, Server, Zap, ArrowRight, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true,
      duration: '2-4 weeks',
      category: 'Cloud'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security audit', 'Penetration testing', 'Compliance management', '24/7 monitoring'],
      pricing: 'Starting at $1,500/month',
      link: '/cybersecurity',
      popular: false,
      duration: 'Ongoing',
      category: 'Security'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your specific business requirements and workflows.',
      features: ['Web applications', 'Mobile apps', 'API development', 'Database design'],
      pricing: 'Starting at $5,000',
      link: '/custom-development',
      popular: false,
      duration: '4-12 weeks',
      category: 'Development'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'Real-time reporting'],
      pricing: 'Starting at $2,000/month',
      link: '/data-analytics',
      popular: false,
      duration: '2-6 weeks',
      category: 'Analytics'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS development', 'Android development', 'Cross-platform apps', 'App store deployment'],
      pricing: 'Starting at $8,000',
      link: '/mobile-development',
      popular: false,
      duration: '6-16 weeks',
      category: 'Development'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your infrastructure.',
      features: ['Technology assessment', 'Strategic planning', 'Vendor evaluation', 'Implementation guidance'],
      pricing: 'Starting at $200/hour',
      link: '/it-consulting',
      popular: false,
      duration: 'As needed',
      category: 'Consulting'
    },
    {
      icon: <Server className="w-8 h-8 text-cyan-500" />,
      title: 'DevOps Services',
      description: 'Streamline your development and deployment processes with modern DevOps practices and tools.',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & logging', 'Automated testing'],
      pricing: 'Starting at $3,000/month',
      link: '/devops',
      popular: true,
      duration: '2-8 weeks',
      category: 'DevOps'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Performance Optimization',
      description: 'Optimize your applications and infrastructure for maximum performance and efficiency.',
      features: ['Code optimization', 'Database tuning', 'Caching strategies', 'Load balancing'],
      pricing: 'Starting at $1,500',
      link: '/performance-optimization',
      popular: false,
      duration: '1-4 weeks',
      category: 'Infrastructure'
    }
  ];

  const categories = ['All', 'Cloud', 'Security', 'DevOps', 'Analytics', 'Development', 'Blockchain', 'Infrastructure'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, and DevOps solutions." />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-purple-600">{service.pricing}</span>
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>
                  
                  {service.popular && (
                    <div className="mb-4">
                      <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let our experts help you modernize your technology stack and optimize your business processes.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
