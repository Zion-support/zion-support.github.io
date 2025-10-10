'use client'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Shield, Code, BarChart, Users, Zap, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced AI & IT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge technology, automation, and digital innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-Powered Solutions',
                description: 'Leverage artificial intelligence to automate processes and gain insights.'
              },
              {
                icon: Cloud,
                title: 'Cloud Infrastructure',
                description: 'Scalable and secure cloud solutions for modern businesses.'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Advanced security measures to protect your data and systems.'
              },
              {
                icon: Code,
                title: 'Custom Development',
                description: 'Tailored software solutions built for your specific needs.'
              },
              {
                icon: BarChart,
                title: 'Data Analytics',
                description: 'Transform data into actionable business intelligence.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Experienced professionals dedicated to your success.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-colors">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;