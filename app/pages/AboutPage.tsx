import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheckIcon,
  ArrowRightIcon,
  TagIcon as TargetIcon,
  UsersIcon,
  TrophyIcon,
  LightBulbIcon,
  ShieldCheckIcon as ShieldIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const AboutPage = () => {
  const features = [
    {
      icon: TargetIcon,
      title: 'Mission-Driven',
      description: 'We are committed to delivering exceptional AI solutions that drive real business value.'
    },
    {
      icon: UsersIcon,
      title: 'Expert Team',
      description: 'Our team consists of world-class AI researchers, engineers, and business strategists.'
    },
    {
      icon: TrophyIcon,
      title: 'Proven Results',
      description: 'We have helped hundreds of companies transform their operations with AI technology.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with artificial intelligence.'
    },
    {
      icon: ShieldIcon,
      title: 'Security First',
      description: 'Your data and privacy are our top priorities in everything we build.'
    },
    {
      icon: BoltIcon,
      title: 'Fast Delivery',
      description: 'We deliver results quickly without compromising on quality or security.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Our AI Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We are pioneers in artificial intelligence, dedicated to transforming businesses through innovative AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver solutions that truly make a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ShieldCheckIcon className="w-10 h-10 text-white" />
            Start Your AI Journey
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;