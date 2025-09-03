import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Rocket, Lightbulb, Target } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Startups: NextPage = () => {
  const solutions = [
    {
      title: 'MVP Development'
      description: 'Fast-track your product launch with our rapid MVP development services'
      features: ['Rapid prototyping', 'User feedback integration', 'Scalable architecture', 'Launch support']
      icon: Rocket;
      price: 'Starting at $5,000'
    }
    {
      title: 'Technical Co-founder'
      description: 'Get expert technical guidance and leadership for your startup'
      features: ['Technical strategy', 'Architecture planning', 'Team building', 'Mentorship']
      icon: Users;
      price: 'Equity-based partnerships'
    }
    {
      title: 'AI Integration'
      description: 'Leverage cutting-edge AI to differentiate your product'
      features: ['Custom AI models', 'Machine learning pipelines', 'Data analytics', 'AI strategy']
      icon: Lightbulb;
      price: 'Starting at $3,000'
    }
    {
      title: 'Cloud Infrastructure'
      description: 'Scalable, cost-effective cloud solutions for growing startups'
      features: ['Auto-scaling', 'Cost optimization', 'Security compliance', 'Monitoring']
      icon: Globe;
      price: 'Starting at $299/month'
    }
  ];

  const benefits = [
    {
      title: 'Speed to Market'
      description: 'Launch faster with our proven development processes'
      icon: Clock;
    }
    {
      title: 'Cost Effective'
      description: 'Flexible pricing models designed for startups'
      icon: TrendingUp;
    }
    {
      title: 'Expert Guidance'
      description: 'Access to experienced technical advisors'
      icon: Award;
    }
    {
      title: 'Scalable Solutions'
      description: 'Build for growth from day one'
      icon: Target;
    }
  ];

  const stages = [
    {
      stage: 'Idea Validation'
      description: 'Validate your concept with market research and prototyping'
      services: ['Market analysis', 'User research', 'Prototype development', 'Feasibility study']
    }
    {
      stage: 'MVP Development'
      description: 'Build and launch your minimum viable product'
      services: ['Rapid development', 'User testing', 'Iteration cycles', 'Launch support']
    }
    {
      stage: 'Growth & Scale'
      description: 'Scale your product and team for growth'
      services: ['Performance optimization', 'Team expansion', 'Feature development', 'Market expansion']
    }
  ];

  return (
    <MainLayout;
      title="Startup Solutions - Zion Tech Group"
      description="Accelerate your startup's success with our comprehensive technology solutions. From MVP development to scaling, we're your technical partner."
      keywords="startup solutions, MVP development, technical co-founder, AI integration, cloud infrastructure, startup technology"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1;
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </motion.h1>
          <motion.p;
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Accelerate your startup's success with our comprehensive technology solutions. 
            From MVP development to scaling, we're your technical partner.
          </motion.p>
          
          <motion.div;
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link;
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg"
            >
              Start Your Journey;
            </Link>
            <Link;
              href="/solutions"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105"
            >
              View All Solutions;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Startups Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges startups face and provide solutions that help you;
              move fast, stay lean, and scale efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div;
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Startup Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We support startups at every stage of their journey, from idea validation to scaling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stages.map((stage, index) => (
              <motion.div;
                key={stage.stage}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{stage.stage}</h3>
                <p className="text-gray-600 mb-6">{stage.description}</p>
                <ul className="space-y-2 text-left">
                  {stage.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Startup Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for startups and early-stage companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div;
                key={solution.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <solution.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                    <p className="text-blue-600 font-semibold">{solution.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-3">
                  <Link;
                    href="/contact"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    Get Started;
                  </Link>
                  <Link;
                    href="/contact"
                    className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    Learn More;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Startup Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped startups achieve their goals and scale successfully.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "TechStart Inc."
                result: "Raised $2M Series A"
                quote: "Zion Tech Group's technical expertise was crucial in our fundraising success."
              }
              {
                company: "HealthTech Solutions"
                result: "10,000+ users in 6 months"
                quote: "Their MVP development helped us validate our product quickly and efficiently."
              }
              {
                company: "FinTech Innovations"
                result: "Compliant and secure platform"
                quote: "The security and compliance expertise gave us confidence to launch."
              }
            ].map((story, index) => (
              <motion.div;
                key={story.company}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.company}</h3>
                <p className="text-green-600 font-semibold mb-4">{story.result}</p>
                <p className="text-gray-600 italic">"{story.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2;
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Build Something Amazing?
          </motion.h2>
          <motion.p;
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how we can help turn your startup idea into a successful, scalable business.
          </motion.p>
          <motion.div;
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link;
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg"
            >
              Start Your Project;
            </Link>
            <Link;
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105"
            >
              Schedule Consultation;
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Startups;