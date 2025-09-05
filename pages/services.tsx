import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'AI & Machine Learning Services',
      description: 'Revolutionary artificial intelligence solutions that transform your business operations and drive innovation.',
      features: ['Machine Learning Models', 'AI Chatbots & Virtual Assistants', 'Predictive Analytics', 'Computer Vision', 'Natural Language Processing', 'AI Strategy Consulting'],
      href: '/ai-services',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cloud & IT Infrastructure',
      description: 'Comprehensive cloud solutions and IT infrastructure management to modernize and scale your technology stack.',
      features: ['Cloud Migration & Strategy', 'DevOps Implementation', 'Infrastructure as Code', 'Multi-Cloud Management', 'Disaster Recovery', 'Performance Optimization'],
      href: '/it-services',
      icon: '☁️',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Micro SaaS Development',
      description: 'Custom software-as-a-service applications designed to solve specific business challenges and drive growth.',
      features: ['Custom Web Applications', 'API Development & Integration', 'Database Design & Optimization', 'User Management Systems', 'Payment Processing', 'Scalable Architecture'],
      href: '/micro-saas',
      icon: '🚀',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions to protect your business from evolving cyber threats and ensure compliance.',
      features: ['Security Audits & Assessments', 'Penetration Testing', 'Compliance Management', 'Incident Response', 'Security Training', 'Threat Intelligence'],
      href: '/cybersecurity',
      icon: '🔒',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
      features: ['Business Intelligence Dashboards', 'Data Visualization', 'Predictive Modeling', 'Real-time Analytics', 'Data Warehousing', 'Statistical Analysis'],
      href: '/data-analytics',
      icon: '📊',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes and enhance customer experience.',
      features: ['Process Automation', 'Workflow Optimization', 'Technology Integration', 'Change Management', 'Digital Strategy', 'Legacy System Modernization'],
      href: '/digital-transformation',
      icon: '🔄',
      color: 'from-teal-500 to-blue-500'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Cutting-edge blockchain solutions and Web3 technologies to future-proof your business.',
      features: ['Smart Contract Development', 'DeFi Solutions', 'NFT Marketplaces', 'Blockchain Integration', 'Cryptocurrency Wallets', 'Web3 Applications'],
      href: '/blockchain',
      icon: '⛓️',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android Apps', 'React Native Development', 'Flutter Applications', 'Progressive Web Apps', 'App Store Optimization', 'Mobile UI/UX Design'],
      href: '/mobile-development',
      icon: '📱',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Comprehensive e-commerce platforms and solutions to drive online sales and customer engagement.',
      features: ['Custom E-commerce Platforms', 'Payment Gateway Integration', 'Inventory Management', 'Order Processing', 'Customer Analytics', 'Multi-channel Selling'],
      href: '/ecommerce',
      icon: '🛒',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <div>
      <Head>
        <title>Our Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive range of technology services including AI, IT solutions, micro SaaS development, cybersecurity, blockchain, and more. Transform your business with our innovative solutions." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, cybersecurity, blockchain, data analytics, digital transformation, mobile app development, e-commerce solutions" />
        <meta property="og:title" content="Our Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology services including AI, IT solutions, micro SaaS development, and more." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8 animate-fade-in">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                Comprehensive Technology Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up">
                We offer a comprehensive range of cutting-edge technology services designed to help your business 
                thrive in the digital age. From AI and machine learning to blockchain and cybersecurity, 
                we provide end-to-end solutions that drive innovation and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          <span className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={service.href} 
                    className={`group/btn block w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center transform hover:scale-105`}
                  >
                    Learn More
                    <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to deliver exceptional results for every project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery</h3>
                <p className="text-gray-600">We analyze your business needs and challenges to understand your requirements.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy</h3>
                <p className="text-gray-600">We develop a comprehensive strategy tailored to your specific goals and objectives.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation</h3>
                <p className="text-gray-600">We execute the solution with precision, keeping you informed throughout the process.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Support</h3>
                <p className="text-gray-600">We provide ongoing support and maintenance to ensure optimal performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss how our comprehensive technology services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </Link>
              <Link 
                href="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}