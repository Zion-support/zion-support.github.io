import React from 'react';
import { Link } from 'react-router-dom';

interface ServicesSectionProps {
  className?: string;
}

export default function ServicesSection({ className = '' }: ServicesSectionProps) {
  const aiServices = [
    {
      title: 'AI Analytics',
      description: 'Advanced data analytics powered by machine learning algorithms',
      href: '/ai-analytics',
      icon: '📊',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards']
    },
    {
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation',
      href: '/ai-automation',
      icon: '🤖',
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling']
    },
    {
      title: 'AI Healthcare',
      description: 'Revolutionary healthcare solutions powered by AI',
      href: '/ai-healthcare',
      icon: '🏥',
      features: ['Medical Diagnosis', 'Treatment Planning', 'Patient Monitoring']
    },
    {
      title: 'AI Marketing',
      description: 'Data-driven marketing strategies with AI optimization',
      href: '/ai-marketing',
      icon: '📈',
      features: ['Customer Segmentation', 'Campaign Optimization', 'ROI Analysis']
    },
    {
      title: 'AI Customer Support',
      description: 'Intelligent customer service solutions',
      href: '/ai-customer-support',
      icon: '💬',
      features: ['Chatbots', 'Sentiment Analysis', '24/7 Support']
    },
    {
      title: 'AI Content Generation',
      description: 'Create compelling content with AI assistance',
      href: '/ai-content-generation',
      icon: '✍️',
      features: ['Content Writing', 'SEO Optimization', 'Multi-language Support']
    }
  ];

  const itServices = [
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning and digital transformation',
      href: '/it-consulting',
      icon: '💼',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Roadmap']
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration',
      href: '/cloud-services',
      icon: '☁️',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for your business',
      href: '/cybersecurity',
      icon: '🔒',
      features: ['Threat Detection', 'Security Audits', 'Compliance Management']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes',
      href: '/devops-cicd',
      icon: '⚙️',
      features: ['Automated Deployment', 'Continuous Integration', 'Monitoring']
    },
    {
      title: 'Database Management',
      description: 'Optimized database solutions and management',
      href: '/database-management',
      icon: '🗄️',
      features: ['Performance Tuning', 'Backup Solutions', 'Data Migration']
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies',
      href: '/digital-transformation',
      icon: '🚀',
      features: ['Process Digitization', 'Technology Integration', 'Change Management']
    }
  ];

  return (
    <section className={`py-20 bg-slate-800/50 backdrop-blur-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive innovation
          </p>
        </div>

        {/* AI Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">AI Solutions</h3>
            <p className="text-gray-300 text-lg">Cutting-edge artificial intelligence services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* IT Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-purple-400 mb-4">IT Services</h3>
            <p className="text-gray-300 text-lg">Comprehensive technology solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you implement the perfect AI and IT solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}