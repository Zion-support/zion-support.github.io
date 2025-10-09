'use client';
import React from 'react';
import { Building, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const EnterprisePage: React.FC = () => {
  const enterpriseServices = [
    {
      title: 'Enterprise Architecture',
      description: 'Comprehensive enterprise architecture design and implementation',
      features: ['System Design', 'Integration Planning', 'Scalability Design', 'Technology Roadmap']
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategy and execution',
      features: ['Process Automation', 'Cloud Migration', 'Data Modernization', 'Change Management']
    },
    {
      title: 'Enterprise Integration',
      description: 'Seamless integration of enterprise systems and applications',
      features: ['API Development', 'System Integration', 'Data Synchronization', 'Workflow Automation']
    },
    {
      title: 'Compliance & Governance',
      description: 'Enterprise compliance and governance framework implementation',
      features: ['Policy Development', 'Compliance Monitoring', 'Risk Management', 'Audit Support']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise solutions including architecture, digital transformation, integration, and compliance. Scale your business with enterprise-grade technology."
        keywords={['enterprise solutions', 'digital transformation', 'enterprise architecture', 'enterprise integration', 'compliance', 'governance']}
        canonicalUrl="https://ziontechgroup.com/enterprise"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Scale your business with comprehensive enterprise-grade technology solutions.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enterpriseServices.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Enterprise?</h2>
            <p className="text-gray-300 mb-6">Let's discuss your enterprise needs.</p>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Contact Us
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EnterprisePage;