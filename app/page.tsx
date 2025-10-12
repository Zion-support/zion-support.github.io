import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Shield, Brain, BarChart, MessageCircle, Target, ShoppingCart, Globe, Clock } from 'lucide-react';
const HomePage = () => {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive technology solutions for modern businesses',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Micro SAAS',
      description: 'Ready-to-use software solutions for immediate deployment',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '5G Solutions',
      description: 'Next-generation connectivity and infrastructure services',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];
  return (
    <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
      <Helmet></div>
        <title>Zion Tech Group - Advanced AI and IT Solutions<div></title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." /></div>
        <meta name="keywords" content="AI solutions, IT services, digital transformation, business automation, technology consulting" /></div>
      </Helmet></div>
      {/* Hero Section */}
      <div><section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section></div>
        <div className="max-w-7xl mx-auto text-center"></div><div></div></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></div></div>
            Welcome to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {' '}Zion Tech Group
            <div></span>
          </h1></div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></div></p></div>
            Leading provider of AI-powered solutions, IT services, and digital transformation
            for modern businesses. Transform your operations with cutting-edge technology.
          <div></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div></div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <div><ArrowRight className="w-5 h-5 ml-2" />
            </Link></div>
            <Link
              to="/about"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            ></div>
              Learn More
            <div></Link>
          </div></div>
        </div></div>
      </section></div>
      {/* Features Section */}
      <div><section className="py-16 px-4 sm:px-6 lg:px-8"></section></div>
        <div className="max-w-7xl mx-auto"></div><div></div></div>
          <div className="text-center mb-16"></div></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Our Core Services
            <div></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></div></div>
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            <div></p>
          </div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div></div>
            {features.map((feature, index) => (
              <div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div></div>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto`}></div></div></div>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </div>
            ))}
          <div></div>
        </div></div>
      </section></div>
      {/* CTA Section */}
      <div><section className="py-16 px-4 sm:px-6 lg:px-8"></section></div>
        <div className="max-w-4xl mx-auto text-center"></div><div></div></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2></div></div>
            Ready to Transform Your Business?
          <div></h2>
          <p className="text-xl text-gray-300 mb-8"></p></div></div>
            Join thousands of businesses already using our solutions to drive growth and innovation.
          <div></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div></div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Journey
              <div><ArrowRight className="w-5 h-5 ml-2" />
            </Link></div>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            ></div>
              View Services
            <div></Link>
          </div></div>
        </div></div>
      </section></div>
    </div>
  );
};
export default HomePage;