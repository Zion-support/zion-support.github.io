import React from 'react';
import { Shield, Users, Zap, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const EnterprisePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and end-to-end encryption'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 dedicated support team with guaranteed response times'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: '99.9% uptime SLA with global CDN and load balancing'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy across multiple regions with data residency compliance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scalable, secure, and reliable AI and IT solutions designed for enterprise organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center cyber-card p-12">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Enterprise?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our enterprise team to discuss your specific requirements and get a custom solution.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
          >
            Contact Enterprise Team
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EnterprisePage;
