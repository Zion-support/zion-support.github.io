import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGUpgradePage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Infrastructure Upgrade",
      description: "Complete infrastructure upgrade to support 5G technology and future network requirements."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Hardware Modernization",
      description: "Upgrade to latest 5G-compatible hardware and equipment for optimal performance."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Software Updates",
      description: "Comprehensive software updates and configuration to enable 5G capabilities."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Upgrade Services | Zion Tech Group"
        description="Expert 5G upgrade services to modernize your existing network infrastructure for next-generation technology."
        keywords="5G upgrade, network upgrade, infrastructure modernization, 5G migration, hardware upgrade"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stone-900 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Upgrade Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-stone-100">
              Upgrade your existing network to 5G technology with our expert upgrade services
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-stone-600 hover:bg-stone-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Start Upgrade
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
              Our 5G Upgrade Solutions
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
      <section className="bg-stone-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Upgrade to 5G?
          </h2>
          <p className="text-xl text-stone-100 mb-8">
            Let us upgrade your network to 5G technology with minimal disruption
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-stone-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Upgrade Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGUpgradePage;
