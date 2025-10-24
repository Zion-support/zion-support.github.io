'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Shield, Brain, BarChart, Target } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const features = [
    {
      icon: Shield
      ,
      title: 'Regulatory Compliance'
      ,
      description: 'Ensure your business meets all regulatory requirements with our comprehensive compliance solutions.'
      benefits: ['GDPR compliance', 'SOX compliance', 'HIPAA compliance', 'Industry standards']
    }
    ,
    { icon: Brain
      ,
      title: 'AI-Powered Analysis'
      ,
      description: 'Advanced AI algorithms provide intelligent insights and recommendations for compliance monitoring.'
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    }
    ,
    { icon: BarChart
      ,
      title: 'Advanced Analytics'
      ,
      description: 'Comprehensive analytics dashboard with real-time compliance data visualization.'
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    }
    ,
    { icon: Target
      ,
      title: 'Precision Targeting'
      ,
      description: 'Target specific compliance goals and objectives with precision and accuracy.'
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Compliance Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ensure your business meets all regulatory requirements with our comprehensive compliance solutions powered by AI and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Compliance Solutions</h2>
              <p className="text-xl text-gray-300">Comprehensive tools and services to keep your business compliant</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Ensure Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our compliance experts to discuss your specific requirements and get started today.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CompliancePage;