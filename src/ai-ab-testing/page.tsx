import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  TestTube,
  Target,
  Settings,
  CheckCircle,
  BarChart3,
  Zap,
  Shield,
  Users
} from 'lucide-react';

const AIABTestingPage: React.FC = () => {
  const features = [
    {
      icon: TestTube,
      title: 'AI-Powered Testing',
      description: 'Advanced A/B testing with machine learning optimization'
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'Intelligent audience segmentation and targeting'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive analytics and performance tracking'
    },
    {
      icon: Zap,
      title: 'Automated Optimization',
      description: 'AI-driven test optimization and recommendations'
    },
    {
      icon: Shield,
      title: 'Statistical Significance',
      description: 'Ensures reliable and statistically significant results'
    },
    {
      icon: Users,
      title: 'User Experience Focus',
      description: 'Optimizes for user experience and conversion rates'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI-Powered A/B Testing
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Optimize your digital experiences with intelligent testing and experimentation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Start Testing
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Testing Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Leverage AI to maximize your testing effectiveness
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-600" />
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

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your Testing?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get started with AI-powered A/B testing today
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIABTestingPage;