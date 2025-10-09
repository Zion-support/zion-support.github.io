'use client';
import React from 'react';
import { Building, Target, BarChart, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const EnterprisePage: React.FC = () => {
  const enterpriseServices = [
    {
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategies that modernize your business processes and technology stack.',
      features: ['Strategy Development', 'Process Optimization', 'Technology Modernization', 'Change Management', 'ROI Measurement'],
      benefits: ['Improved efficiency', 'Cost reduction', 'Competitive advantage', 'Future readiness']
    },
    {
      title: 'Enterprise Architecture',
      description: 'Design and implement enterprise-wide technology architectures that align with business objectives.',
      features: ['Architecture Planning', 'Technology Selection', 'Integration Design', 'Security Framework', 'Scalability Planning'],
      benefits:['Aligned technology', 'Reduced complexity', 'Better integration', 'Scalable solutions']
    },
    {
      title: 'Cloud Strategy & Migration',
      description: 'Develop and execute cloud migration strategies that optimize costs and improve performance.',
      features: ['Cloud Assessment', 'Migration Planning', 'Multi-cloud Strategy', 'Cost Optimization', 'Security Implementation'],
      benefits:['Reduced costs', 'Improved scalability', 'Enhanced security', 'Better performance']
    },
    {
      title: 'Enterprise Integration',
      description: 'Connect disparate systems and applications to create a unified, efficient enterprise ecosystem.',
      features: ['API Development', 'System Integration', 'Data Synchronization', 'Workflow Automation', 'Legacy Modernization'],
      benefits:['Unified systems', 'Improved efficiency', 'Better data flow', 'Reduced manual work']
    },
    {
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions that protect your entire enterprise infrastructure and data.',
      features: ['Security Assessment', 'Threat Detection', 'Compliance Management', 'Identity Management', 'Security Training'],
      benefits:['Enhanced security', 'Compliance readiness', 'Risk reduction', 'Peace of mind']
    },
    {
      title: 'Enterprise Support',
      description: 'Dedicated support services tailored to enterprise needs with guaranteed SLAs and priority response.',
      features: ['Dedicated Team', 'Priority Support', 'Custom SLAs', 'Proactive Monitoring', 'Strategic Consulting'],
      benefits:['Reliable support', 'Faster response', 'Strategic guidance', 'Business continuity']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Enterprise Solutions - Digital Transformation & Architecture | Zion Tech Group"
        description="Comprehensive enterprise solutions including digital transformation, enterprise architecture, cloud migration, and integration. Transform your large-scale business operations."
        keywords={['enterprise solutions', 'digital transformation', 'enterprise architecture', 'cloud migration', 'enterprise integration', 'enterprise security']}
        canonicalUrl="https://ziontechgroup.com/enterprise"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Transform your enterprise with comprehensive digital solutions and strategic technology consulting
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our enterprise experts help large organizations navigate digital transformation, optimize technology 
              architectures, and implement scalable solutions that drive business growth and operational excellence.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-indigo-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-indigo-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Enterprise Capabilities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Enterprise Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-white mb-3">Large Scale Deployments</h3>
                <p className="text-gray-300 text-sm">
                  Handle enterprise-scale projects with thousands of users and complex requirements.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
                <p className="text-gray-300 text-sm">
                  Support multinational organizations with global teams and distributed infrastructure.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300 text-sm">
                  Bank-level security and compliance for sensitive enterprise data and operations.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">High Performance</h3>
                <p className="text-gray-300 text-sm">
                  Optimized solutions that handle high-volume transactions and concurrent users.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-3">Scalable Solutions</h3>
                <p className="text-gray-300 text-sm">
                  Architecture designed to grow with your business and adapt to changing needs.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Strategic Consulting</h3>
                <p className="text-gray-300 text-sm">
                  C-level consulting and strategic guidance for technology and digital transformation.
                </p>
              </div>
            </div>
          </section>

          {/* Industries */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-white mb-3">Financial Services</h3>
                <p className="text-gray-300 text-sm">
                  Banking, insurance, and fintech solutions with regulatory compliance and security.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300 text-sm">
                  HIPAA-compliant solutions for hospitals, clinics, and healthcare organizations.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-white mb-3">Manufacturing</h3>
                <p className="text-gray-300 text-sm">
                  Industry 4.0 solutions with IoT, automation, and supply chain optimization.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-white mb-3">Retail & E-commerce</h3>
                <p className="text-gray-300 text-sm">
                  Omnichannel solutions with inventory management and customer analytics.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-white mb-3">Education</h3>
                <p className="text-gray-300 text-sm">
                  Learning management systems and educational technology solutions.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-white mb-3">Government</h3>
                <p className="text-gray-300 text-sm">
                  Secure government solutions with compliance and citizen services.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Enterprise?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how our enterprise solutions can drive your digital transformation and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Schedule Enterprise Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
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

export default EnterprisePage;