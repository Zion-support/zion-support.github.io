'use client';
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, GraduationCap, Users, BookOpen, Award, Clock, Star, ArrowRight } from 'lucide-react';

const ItTrainingPage: React.FC = () => {
  const trainingPrograms = [
    {
      title: 'AI & Machine Learning',
      description: 'Comprehensive training in artificial intelligence and machine learning technologies',
      duration: '12 weeks',
      level: 'Intermediate',
      features: ['Hands-on projects', 'Industry certifications', 'Expert mentorship'],
      icon: TrendingUp
    },
    {
      title: 'Cloud Computing',
      description: 'Master cloud platforms and infrastructure management',
      duration: '8 weeks',
      level: 'Beginner',
      features: ['AWS/Azure training', 'DevOps practices', 'Security best practices'],
      icon: Users
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced cybersecurity training and certification programs',
      duration: '16 weeks',
      level: 'Advanced',
      features: ['Ethical hacking', 'Security analysis', 'Compliance training'],
      icon: Award
    },
    {
      title: 'Data Science',
      description: 'Complete data science and analytics training program',
      duration: '14 weeks',
      level: 'Intermediate',
      features: ['Python/R training', 'Statistical analysis', 'Data visualization'],
      icon: BookOpen
    }
  ];

  const supportServices = [
    {
      title: '24/7 Technical Support',
      description: 'Round-the-clock technical assistance for all your IT needs',
      icon: Clock
    },
    {
      title: 'Remote Assistance',
      description: 'Expert remote support to resolve issues quickly and efficiently',
      icon: Phone
    },
    {
      title: 'On-site Training',
      description: 'Customized training sessions delivered at your location',
      icon: MapPin
    },
    {
      title: 'Certification Programs',
      description: 'Industry-recognized certification programs for your team',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="IT Training & Support - Zion Tech Group"
        description="Comprehensive IT training and support services for teams and organizations."
        keywords={["IT training","technical training","certification","user support","IT education"]}
        canonicalUrl="https://ziontechgroup.com/it-training"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              IT Training & Support
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT training and support services for teams and organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Training Programs Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Training Programs</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training programs designed to enhance your team's technical skills
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-gray-300 mb-4">{program.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-cyan-400 text-sm font-medium">{program.duration}</span>
                  <span className="text-purple-400 text-sm font-medium">{program.level}</span>
                </div>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Support Services Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Support Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Reliable support services to keep your systems running smoothly
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 backdrop-blur-sm border border-cyan-500/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Enhance Your Team's Skills?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your training and support needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ItTrainingPage;