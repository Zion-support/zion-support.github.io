import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGSecurityPage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Network Security",
      description: "Comprehensive security measures to protect your 5G network from cyber threats and attacks."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Data Protection",
      description: "Advanced encryption and data protection protocols to secure sensitive information over 5G networks."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Threat Monitoring",
      description: "24/7 threat monitoring and incident response to detect and mitigate security breaches quickly."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Security Services | Zion Tech Group"
        description="Expert 5G security services to protect your network infrastructure and data from cyber threats."
        keywords="5G security, network security, cyber security, data protection, threat monitoring"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-orange-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Security Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Protect your 5G network with advanced security solutions and threat monitoring
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Secure Your Network
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
              Our 5G Security Solutions
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
      <section className="bg-red-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need 5G Security?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Keep your 5G network secure with our comprehensive security solutions
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-red-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Security Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGSecurityPage;
