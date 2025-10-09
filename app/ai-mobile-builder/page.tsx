import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Users, BarChart, Zap, Shield, Smartphone, Code, Palette, Rocket } from 'lucide-react';

const AIMobileBuilderPage: React.FC = () => {
  const features = [
    'AI-powered app design and layout generation',
    'Drag-and-drop interface builder',
    'Automatic code generation for iOS and Android',
    'Real-time preview and testing',
    'AI-powered app store optimization',
    'Automated testing and quality assurance',
    'One-click deployment to app stores',
    'Advanced analytics and user insights'
  ];

  const benefits = [
    'Build apps 10x faster than traditional development',
    'Reduce development costs by 80%',
    'No coding knowledge required',
    'Deploy to both iOS and Android simultaneously',
    'AI-optimized for app store success',
    'Built-in analytics and user tracking'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Mobile App Builder - Zion Tech Group</title>
        <meta name="description" content="Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment. Starting at $399/month." />
        <meta name="keywords" content="ai mobile app builder, app development, mobile apps, ios android, no code app builder" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Mobile App Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Development</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$399</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">0</div>
              <div className="text-gray-300">Coding Required</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Build Any Type of App
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Smartphone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Apps</h3>
              <p className="text-gray-600">CRM, project management, and productivity apps</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Palette className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce</h3>
              <p className="text-gray-600">Online stores and shopping apps</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media</h3>
              <p className="text-gray-600">Social networking and community apps</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Rocket className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gaming</h3>
              <p className="text-gray-600">Interactive games and entertainment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our AI Builder
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$399<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />1 app project</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Basic AI features</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />iOS & Android deployment</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Email support</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">$799<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />5 app projects</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Advanced AI features</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />App store optimization</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Priority support</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">$1,599<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Unlimited projects</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />All AI features</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Custom integrations</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />24/7 phone support</li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start building your mobile app today with our AI-powered builder. No coding required!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMobileBuilderPage;