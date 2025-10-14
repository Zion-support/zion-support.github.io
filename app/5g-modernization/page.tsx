import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGModernizationPage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Infrastructure Modernization",
      description: "Complete modernization of your network infrastructure to support 5G technology."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Security Enhancement",
      description: "Advanced security measures to protect your modernized 5G network infrastructure."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Future-Proof Solutions",
      description: "Modernization solutions designed to adapt to future 5G advancements and requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Modernization Services | Zion Tech Group"
        description="Transform your infrastructure with our comprehensive 5G modernization services for future-ready technology."
        keywords="5G modernization, infrastructure upgrade, network modernization, 5G transformation"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Modernization Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Modernize your infrastructure with cutting-edge 5G technology solutions
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Start Modernization
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
              Our 5G Modernization Approach
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
      <section className="bg-teal-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Modernize with 5G?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Transform your infrastructure with our comprehensive 5G modernization services
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-teal-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Plan Modernization
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGModernizationPage;
