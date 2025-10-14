import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGTrainingPage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Technical Training",
      description: "Comprehensive technical training programs to master 5G technology and implementation."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Certification Programs",
      description: "Industry-recognized certification programs to validate your 5G expertise and skills."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Hands-on Workshops",
      description: "Practical hands-on workshops with real 5G equipment and live network environments."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Training Services | Zion Tech Group"
        description="Expert 5G training programs and certification courses to develop your team's 5G expertise and skills."
        keywords="5G training, 5G certification, technical training, 5G workshops, network training"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lime-900 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Training Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-lime-100">
              Develop your team's 5G expertise with our comprehensive training and certification programs
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-lime-600 hover:bg-lime-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Start Training
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
              Our 5G Training Programs
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
      <section className="bg-lime-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Learn 5G?
          </h2>
          <p className="text-xl text-lime-100 mb-8">
            Invest in your team's future with our expert 5G training programs
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-lime-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Enroll in Training
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGTrainingPage;
