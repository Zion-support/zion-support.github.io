'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: '🧠',
      description: 'Comprehensive artificial intelligence solutions that transform your business operations',
      services: [
        { name: 'AI Marketing Automation', description: 'Automate your marketing campaigns with intelligent AI systems' },
        { name: 'AI Content Generation', description: 'Create high-quality content at scale with AI-powered tools' },
        { name: 'AI Data Analytics', description: 'Extract actionable insights from your data with advanced AI algorithms' },
        { name: 'AI Customer Support', description: 'Enhance customer experience with intelligent chatbots and support systems' },
        { name: 'AI Workflow Automation', description: 'Streamline business processes with intelligent automation' },
        { name: 'AI Mobile App Development', description: 'Build intelligent mobile applications with AI capabilities' }
      ],
      link: '/ai-services'
    },
    {
      title: 'IT Services',
      icon: '☁️',
      description: 'Complete IT infrastructure and support services for modern businesses',
      services: [
        { name: 'Cloud Migration & Setup', description: 'Seamlessly migrate to cloud platforms with expert guidance' },
        { name: 'Cybersecurity Solutions', description: 'Protect your business with comprehensive security measures' },
        { name: 'DevOps & CI/CD', description: 'Implement modern development and deployment practices' },
        { name: 'Database Management', description: 'Optimize and maintain your database infrastructure' },
        { name: 'Network Solutions', description: 'Design and implement robust network architectures' },
        { name: 'IT Consulting', description: 'Strategic IT planning and technology roadmaps' }
      ],
      link: '/it-services'
    },
    {
      title: 'Micro SAAS',
      icon: '⚡',
      description: 'Ready-to-use AI-powered applications for immediate business impact',
      services: [
        { name: 'AI-Powered CRM', description: 'Intelligent customer relationship management system' },
        { name: 'Smart Analytics Dashboard', description: 'Real-time business intelligence and reporting' },
        { name: 'AI Chatbot Builder', description: 'Create custom chatbots without coding knowledge' },
        { name: 'AI Email Marketing', description: 'Automated email campaigns with personalization' },
        { name: 'AI SEO Optimizer', description: 'Improve your search rankings with AI-driven optimization' },
        { name: 'AI Document Processor', description: 'Intelligent document processing and analysis' }
      ],
      link: '/micro-saas'
    },
    {
      title: 'Emerging Technologies',
      icon: '🚀',
      description: 'Cutting-edge technologies that give you a competitive advantage',
      services: [
        { name: 'Quantum Computing', description: 'Explore quantum computing applications for your business' },
        { name: 'Robotics & Automation', description: 'Intelligent robotics solutions for industrial applications' },
        { name: 'IoT & Edge Computing', description: 'Connected devices and edge computing solutions' },
        { name: 'Blockchain & Web3', description: 'Decentralized applications and blockchain integration' },
        { name: 'Business Intelligence', description: 'Advanced analytics and data visualization' },
        { name: 'Autonomous Systems', description: 'Self-managing systems and intelligent automation' }
      ],
      link: '/emerging-tech'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, current technology stack, and identify opportunities for improvement.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy and roadmap tailored to your specific goals and requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with minimal disruption to your ongoing operations.'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'We continuously monitor, optimize, and provide ongoing support to ensure maximum ROI.'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Our Services - AI, IT, and Technology Solutions | Zion Tech Group"
        description="Discover our comprehensive range of AI services, IT solutions, Micro SAAS applications, and emerging technologies designed to transform your business."
        keywords={['AI services', 'IT services', 'Micro SAAS', 'technology solutions', 'business transformation', 'digital innovation']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive technology solutions designed to transform your business. 
                  From AI-powered automation to cutting-edge IT infrastructure, we deliver results that matter.
                </p>
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {serviceCategories.map((category, index) => (
                  <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{category.icon}</div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
                        <p className="text-gray-300">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h3 className="text-white font-medium mb-1">{service.name}</h3>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <a
                      href={category.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Process</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We follow a proven methodology to ensure successful project delivery and maximum value for your investment.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We combine deep technical expertise with business acumen to deliver solutions that drive real results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="cyber-card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
                  <p className="text-gray-300">
                    We stay at the forefront of technology, implementing the latest AI, quantum computing, 
                    and emerging technologies to give you a competitive edge.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                  <p className="text-gray-300">
                    Our track record speaks for itself - 50+ successful projects, 100+ happy clients, 
                    and an average ROI of 300% for our clients.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                  <p className="text-gray-300">
                    Our diverse team of AI researchers, IT specialists, and business consultants 
                    brings decades of combined experience to every project.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
                  <p className="text-gray-300">
                    We prioritize security and data protection in all our solutions, ensuring your 
                    business data remains safe and compliant with industry standards.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
                  <p className="text-gray-300">
                    Our solutions are designed to grow with your business, from startup to enterprise scale, 
                    ensuring long-term value and flexibility.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                  <p className="text-gray-300">
                    We provide round-the-clock support and monitoring to ensure your systems 
                    run smoothly and any issues are resolved quickly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your specific needs and explore how our services can drive your success. 
                Get a free consultation and discover the possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;