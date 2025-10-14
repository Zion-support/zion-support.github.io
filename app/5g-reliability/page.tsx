import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGReliabilityPage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Redundancy Planning",
      description: "Comprehensive redundancy strategies to ensure 99.9% uptime for your 5G network infrastructure."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Fault Tolerance",
      description: "Advanced fault tolerance mechanisms to maintain service continuity during network disruptions."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Disaster Recovery",
      description: "Robust disaster recovery solutions to quickly restore 5G services in case of major incidents."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Reliability Services | Zion Tech Group"
        description="Expert 5G reliability services to ensure maximum uptime, fault tolerance, and disaster recovery capabilities."
        keywords="5G reliability, network uptime, fault tolerance, disaster recovery, 5G resilience"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Reliability Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-100">
              Ensure maximum reliability and uptime for your critical 5G infrastructure
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-slate-600 hover:bg-slate-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Ensure Reliability
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Our 5G Reliability Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Reliable 5G Services?
          </h2>
          <p className="text-xl text-slate-100 mb-8">
            Trust our expertise to keep your 5G network running reliably 24/7
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-slate-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Reliability Plan
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGReliabilityPage;
