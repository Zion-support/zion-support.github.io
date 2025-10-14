import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGMaintenancePage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Preventive Maintenance",
      description: "Regular maintenance schedules to prevent issues and ensure optimal 5G performance."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "24/7 Monitoring",
      description: "Continuous monitoring of your 5G network with real-time alerts and diagnostics."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Expert Support",
      description: "Dedicated technical support team with deep expertise in 5G maintenance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Maintenance Services | Zion Tech Group"
        description="Professional 5G network maintenance services to ensure optimal performance and reliability."
        keywords="5G maintenance, network monitoring, preventive maintenance, 5G support"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Maintenance Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Keep your 5G network running at peak performance with our expert maintenance services
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Get Maintenance Plan
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
              Our 5G Maintenance Services
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
      <section className="bg-orange-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need 5G Maintenance?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Ensure your 5G network stays reliable with our comprehensive maintenance services
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-orange-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Maintenance Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGMaintenancePage;
