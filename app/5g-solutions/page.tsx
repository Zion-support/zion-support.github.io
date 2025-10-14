import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Globe, Smartphone, Wifi, CheckCircle } from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Fast Speeds',
      description: 'Experience lightning-fast 5G connectivity with speeds up to 10 Gbps',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Comprehensive 5G network coverage across multiple countries and regions',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Integration',
      description: 'Seamless integration with mobile devices and IoT applications',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Wifi,
      title: 'Low Latency',
      description: 'Ultra-low latency for real-time applications and gaming',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional 5G solutions and network infrastructure services by Zion Tech Group." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your business with cutting-edge 5G technology and infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our 5G Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive 5G solutions provide the speed, reliability, and scalability your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Key Benefits
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Enhanced Performance
                  </h3>
                  <p className="text-gray-600">
                    Experience up to 100x faster speeds compared to 4G networks.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Future-Ready Infrastructure
                  </h3>
                  <p className="text-gray-600">
                    Built to support the next generation of connected devices and applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Scalable Solutions
                  </h3>
                  <p className="text-gray-600">
                    Easily scale your network capacity as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGSolutionsPage;