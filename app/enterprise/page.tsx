'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Building, Users, Shield, Brain, Cloud, BarChart, Zap, ArrowRight, Clock, Settings, Database } from 'lucide-react';

const EnterprisePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions designed for large-scale enterprise environments.',
      benefits: ['Advanced threat protection', 'Compliance management', 'Data encryption', 'Access control']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that grow with your business needs.',
      benefits: ['Auto-scaling', 'High availability', 'Disaster recovery', 'Cost optimization']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefits: ['Machine learning', 'Predictive analytics', 'Process automation', 'Intelligent insights']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Advanced data management and analytics for enterprise-scale operations.',
      benefits: ['Big data processing', 'Real-time analytics', 'Data governance', 'Business intelligence']
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user and access management for large organizations.',
      benefits: ['Single sign-on', 'Role-based access', 'User provisioning', 'Audit trails']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration with existing enterprise systems and workflows.',
      benefits: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization']
    }
  ];

  const solutions = [
    {
      title: 'Enterprise Resource Planning',
      description: 'Comprehensive ERP solutions that streamline business processes and improve efficiency.',
      icon: Building,
      benefits: ['Financial management', 'Supply chain optimization', 'Human resources', 'Project management']
    },
    {
      title: 'Customer Relationship Management',
      description: 'Advanced CRM systems for managing customer relationships and sales processes.',
      icon: Users,
      benefits: ['Lead management', 'Sales automation', 'Customer analytics', 'Marketing automation']
    },
    {
      title: 'Business Intelligence',
      description: 'Powerful BI solutions for data-driven decision making and strategic planning.',
      icon: BarChart,
      benefits: ['Data visualization', 'Predictive analytics', 'Reporting', 'Performance monitoring']
    },
    {
      title: 'Workflow Automation',
      description: 'Automate complex business processes to improve efficiency and reduce errors.',
      icon: Zap,
      benefits: ['Process automation', 'Task management', 'Approval workflows', 'Document management']
    }
  ];

  const benefits = [
    'Reduce operational costs by 30%',
    'Improve productivity by 50%',
    'Enhance security and compliance',
    'Streamline business processes',
    'Enable data-driven decisions',
    'Scale with business growth',
    'Integrate with existing systems',
    'Provide 24/7 support and monitoring'
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Building },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise-grade AI and IT solutions designed for large-scale business operations. Transform your organization with cutting-edge technology." />
        <meta name="keywords" content="enterprise solutions, enterprise AI, enterprise IT, large-scale business, enterprise software" />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Hero Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Enterprise <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive enterprise-grade solutions designed for large-scale business operations. 
              Transform your organization with cutting-edge technology and expert implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Enterprise Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Enterprise-Grade Features</h2>
              <p className="text-xl text-gray-300">
                Built for scale, security, and performance to meet the demands of large organizations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 relative z-10 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Solutions</h2>
              <p className="text-xl text-gray-300">
                End-to-end enterprise solutions that address every aspect of your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Enterprise Solutions?</h2>
              <p className="text-xl text-gray-300">
                Proven benefits that drive measurable results for your organization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of enterprise clients who trust our solutions for their mission-critical operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Contact Enterprise Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnterprisePage;

