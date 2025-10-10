'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, BarChart, Users, Zap, ArrowRight, Star, Award, Shield } from 'lucide-react';

const AiMentalHealthPage: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Emotional Analysis',
      description: 'AI-powered analysis of emotional patterns and mental health indicators'
    },
    {
      icon: BarChart,
      title: 'Risk Assessment',
      description: 'Predictive models that identify mental health risks and suggest interventions'
    },
    {
      icon: Users,
      title: 'Personalized Care',
      description: 'Tailored mental health recommendations and treatment plans'
    },
    {
      icon: Zap,
      title: 'Crisis Intervention',
      description: 'Real-time monitoring and immediate support during mental health crises'
    }
  ];

  const benefits = [
    'Improve mental health outcomes by 45%',
    'Reduce crisis incidents by 60%',
    'Enhance early intervention effectiveness',
    'Provide 24/7 mental health support',
    'Personalize treatment approaches',
    'Reduce healthcare costs by 30%'
  ];

  const stats = [
    { icon: Heart, value: '45%', label: 'Outcome Improvement' },
    { icon: BarChart, value: '60%', label: 'Crisis Reduction' },
    { icon: Users, value: '10,000+', label: 'Lives Improved' },
    { icon: Shield, value: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Mental Health Solutions - Zion Tech Group</title>
        <meta name="description" content="Compassionate AI mental health solutions that improve outcomes by 45% and reduce crisis incidents by 60% through personalized care and early intervention." />
        <meta name="keywords" content="AI mental health, mental health AI, emotional analysis, crisis intervention, personalized care, mental wellness" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Mental Health</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Transform mental healthcare with AI-powered solutions that improve outcomes by 45% and reduce crisis incidents by 60%.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Mental Health AI Features</h2>
            <p className="text-gray-300 text-lg">Compassionate technology for better mental wellness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Improve Mental Health Outcomes</h2>
              <p className="text-gray-300 text-lg mb-8">
                Our AI mental health solutions provide compassionate, personalized care that helps individuals and healthcare providers achieve better mental health outcomes.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Heart className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Mental Health Assessment</h3>
              <p className="text-gray-300 mb-6">
                Get a comprehensive mental health evaluation and personalized recommendations using our AI-powered assessment tools.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Start Assessment
                </button>
                <button className="w-full bg-white/10 text-white py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Find Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Transform Mental Healthcare Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join healthcare providers and organizations that are using AI to improve mental health outcomes and provide better care for those in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                <ArrowRight className="w-5 h-5" />
                Start Your Mental Health AI Journey
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Star className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiMentalHealthPage;