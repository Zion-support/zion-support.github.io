import React from 'react';
import { CheckCircle, ArrowRight, Zap, Globe, Users, Eye } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function FiveGMobileApplicationsPage() {
  const features = [
    {
      title: "Feature 1",
      description: "Description of feature 1"
    },
    {
      title: "Feature 2",
      description: "Description of feature 2"
    }
  ];

  return (

  const appTypes = [
    {
      title: 'Immersive Experiences',
      description: 'AR/VR applications for entertainment, education, and training',
      icon: '🥽'
    },
    {
      title: 'Real-time Communication',
      description: 'Video calls, live streaming, and instant messaging apps',
      icon: '📹'
    },
    {
      title: 'Cloud Services',
      description: 'Cloud gaming, storage, and computing applications',
      icon: '☁️'
    },
    {
      title: 'IoT Integration',
      description: 'Mobile apps that connect with IoT devices and sensors',
      icon: '📱'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <Helmet>
        <title>5G Mobile Applications - Zion Tech Group</title>
        <meta name="description" content="Next-generation mobile applications optimized for 5G networks including AR/VR, real-time streaming, cloud gaming, and collaboration apps." />
        <meta name="keywords" content="5G mobile apps, AR VR applications, real-time streaming, cloud gaming, mobile development, 5G optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Mobile Applications
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Next-generation mobile applications optimized for 5G networks with AR/VR, real-time streaming, 
              cloud gaming, and immersive experiences that take advantage of ultra-fast connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/5g-implementation" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Back to 5G Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mobile App Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete mobile application development for 5G networks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {mobileAppServices.map((service, index) => (
              {features.map((feature, index) => (

                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-white mb-4">{service.pricing}</div>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">5G Mobile App Types</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the types of mobile applications that benefit from 5G connectivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTypes.map((appType, index) => (
              {features.map((feature, index) => (

                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">{appType.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{appType.title}</h3>
                <p className="text-gray-300 text-sm">{appType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Build 5G Mobile Apps?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free mobile app consultation and discover how we can create next-generation applications for 5G.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/5g-implementation" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All 5G Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGMobileApplicationsPage;
  );
}