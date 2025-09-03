import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, DollarSign, Target, Cloud } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SmallBusiness: NextPage = () => {
  const solutions = [;
    {
      title: 'Affordable Cloud Solutions',;
      description: 'Cost-effective cloud infrastructure designed for small businesses',;
      features: ['Scalable hosting', 'Data backup', 'Security monitoring', '24/7 support'],;
      icon: Cloud,;
      price: 'Starting at $99/month'},;
    {
      title: 'Business Automation',;
      description: 'Streamline operations with intelligent automation tools',;
      features: ['Workflow automation', 'Email marketing', 'Customer management', 'Reporting'],;
      icon: Zap,;
      price: 'Starting at $49/month'},;
    {
      title: 'Digital Marketing Suite',;
      description: 'Complete digital marketing tools for growth',;
      features: ['SEO optimization', 'Social media management', 'Analytics dashboard', 'Content creation'],;
      icon: Target,;
      price: 'Starting at $79/month'},;
    {
      title: 'E-commerce Platform',;
      description: 'Professional online store with payment processing',;
      features: ['Online store setup', 'Payment integration', 'Inventory management', 'Order tracking'],;
      icon: Globe,;
      price: 'Starting at $129/month'}
  ];

  const benefits = [;
    {
      title: 'Cost-Effective',;
      description: 'Affordable solutions that fit your budget',;
      icon: DollarSign},;
    {
      title: 'Quick Setup',;
      description: 'Get up and running in days, not months',;
      icon: Clock},;
    {
      title: 'Scalable Growth',;
      description: 'Solutions that grow with your business',;
      icon: TrendingUp},;
    {
      title: 'Expert Support',;
      description: 'Dedicated support team for small businesses',;
      icon: Users}
  ];

  return (;
    <MainLayout;
      title="Small Business Solutions - Zion Tech Group";
      description="Affordable technology solutions designed specifically for small businesses. Get professional-grade tools without the enterprise price tag.";
      keywords="small business solutions, affordable technology, business automation, cloud solutions, digital marketing">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">;
        <div className="absolute inset-0 bg-black opacity-10"></div>;
        <div className="container mx-auto px-4 text-center relative z-10">;
          <motion.h1 ;
            className="text-5xl md:text-6xl font-bold mb-6";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            Small Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>;
          </motion.h1>;
          <motion.p ;
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >;
            Professional technology solutions designed specifically for small businesses. ;
            Get enterprise-grade tools without the enterprise price tag.;
          </motion.p>;

          <motion.div ;
            className="flex flex-col sm:flex-row justify-center gap-4";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >;
            <Link;
              href="/contact";
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">;
              Get Started Today;
            </Link>;
            <Link;
              href="/solutions";
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">;
              View All Solutions;
            </Link>;
          </motion.div>;
        </div>;
      </section>;

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Small Business Solutions?</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We understand the unique challenges small businesses face and have designed solutions ;
              that address your specific needs while staying within your budget.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {benefits.map((benefit, index) => (;
              <motion.div;
                key={benefit.title}
                className="text-center";
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >;
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <benefit.icon className="w-8 h-8 text-blue-600" />;
                </div>;
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>;
                <p className="text-gray-600">{benefit.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Solutions Grid */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Small Business Solutions</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Comprehensive technology solutions designed to help your small business thrive in the digital age.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {solutions.map((solution, index) => (;
              <motion.div;
                key={solution.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8";
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >;
                <div className="flex items-center mb-6">;
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">;
                    <solution.icon className="w-8 h-8 text-blue-600" />;
                  </div>;
                  <div>;
                    <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>;
                    <p className="text-blue-600 font-semibold">{solution.price}</p>;
                  </div>;
                </div>;

                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>;

                <div className="mb-6">;
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>;
                  <ul className="space-y-2">;
                    {solution.features.map((feature, idx) => (;
                      <li key={idx} className="flex items-center text-gray-600">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                </div>;

                <div className="flex space-x-3">;
                  <Link;
                    href="/contact";
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">;
                    Get Started;
                  </Link>;
                  <Link;
                    href="/contact";
                    className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">;
                    Learn More;
                  </Link>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Small Business Success Stories</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              See how we've helped small businesses like yours achieve their goals.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {[;
              {
                company: "Local Bakery",;
                result: "300% increase in online orders",;
                quote: "Zion Tech Group helped us build an online presence that transformed our business."},;
              {
                company: "Consulting Firm",;
                result: "50% reduction in administrative time",;
                quote: "Their automation solutions freed up our time to focus on what we do best."},;
              {
                company: "Retail Store",;
                result: "200% growth in customer base",;
                quote: "The digital marketing tools helped us reach customers we never knew existed."}
            ].map((story, index) => (;
              <motion.div;
                key={story.company}
                className="bg-white rounded-xl shadow-lg p-8 text-center";
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >;
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Award className="w-8 h-8 text-green-600" />;
                </div>;
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.company}</h3>;
                <p className="text-green-600 font-semibold mb-4">{story.result}</p>;
                <p className="text-gray-600 italic">"{story.quote}"</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <motion.h2 ;
            className="text-4xl md:text-5xl font-bold mb-6";
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            Ready to Grow Your Small Business?;
          </motion.h2>;
          <motion.p ;
            className="text-xl mb-8 max-w-3xl mx-auto";
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >;
            Let us help you implement the right technology solutions to take your business to the next level.;
          </motion.p>;
          <motion.div ;
            className="flex flex-col sm:flex-row justify-center gap-4";
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >;
            <Link;
              href="/contact";
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">;
              Start Your Journey;
            </Link>;
            <Link;
              href="/contact";
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">;
              Schedule Consultation;
            </Link>;
          </motion.div>;
        </div>;
      </section>;
    </MainLayout>;
  )}
export default SmallBusiness;