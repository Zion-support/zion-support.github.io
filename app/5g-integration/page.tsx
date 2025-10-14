import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGIntegrationPage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "System Integration",
      description: "Seamless integration of 5G technology with your existing infrastructure and systems."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "API Development",
      description: "Custom API development to connect 5G services with your business applications."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Legacy System Migration",
      description: "Smooth migration from legacy systems to 5G-enabled solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Integration Services | Zion Tech Group"
        description="Expert 5G integration services to seamlessly connect your business with next-generation wireless technology."
        keywords="5G integration, system integration, API development, legacy migration"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Integration Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Seamlessly integrate 5G technology with your existing business systems
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Start Integration
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
              Our 5G Integration Expertise
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
      <section className="bg-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for 5G Integration?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let us integrate 5G technology seamlessly into your business operations
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Discuss Integration
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGIntegrationPage;
