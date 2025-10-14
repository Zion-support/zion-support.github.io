import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGMigrationPage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Migration Planning",
      description: "Comprehensive migration strategy to transition from legacy networks to 5G technology."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Zero Downtime Migration",
      description: "Seamless migration process with minimal disruption to your business operations."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Data Migration",
      description: "Secure and efficient migration of data and applications to 5G infrastructure."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Migration Services | Zion Tech Group"
        description="Expert 5G migration services to help you transition from legacy networks to next-generation 5G technology."
        keywords="5G migration, network migration, legacy migration, 5G transition"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Migration Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Seamlessly migrate from legacy networks to cutting-edge 5G technology
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Start Migration
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
              Our 5G Migration Process
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
      <section className="bg-indigo-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Migrate to 5G?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let us guide you through a smooth transition to 5G technology
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Plan Your Migration
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGMigrationPage;
