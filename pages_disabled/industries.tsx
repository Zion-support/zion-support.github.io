import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Building, ShoppingCart, Settings, BookOpen, Shield, ArrowRight, CheckCircle, Star, Zap, Users, Globe, BarChart3, Brain, Network, Cloud } from 'lucide-react';
import Layout from '../components/Layout';

const industries = [
  {
    id: 1,
    name: 'Healthcare',
    icon: Heart,
    description: 'AI-powered medical solutions and healthcare technology',
    services: ['Medical AI', 'Health Analytics', 'Telemedicine', 'Patient Management'],
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 2,
    name: 'Financial Services',
    icon: Building,
    description: 'Secure financial technology and banking solutions',
    services: ['Fintech', 'Blockchain', 'Risk Management', 'Payment Systems'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 3,
    name: 'E-commerce',
    icon: ShoppingCart,
    description: 'Online retail and marketplace solutions',
    services: ['E-commerce Platforms', 'Payment Processing', 'Inventory Management', 'Customer Analytics'],
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 4,
    name: 'Manufacturing',
    icon: Settings,
    description: 'Industrial automation and smart manufacturing',
    services: ['IoT Solutions', 'Predictive Maintenance', 'Quality Control', 'Supply Chain'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 5,
    name: 'Education',
    icon: BookOpen,
    description: 'Educational technology and learning platforms',
    services: ['Learning Management', 'Virtual Classrooms', 'Student Analytics', 'Content Management'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 6,
    name: 'Government',
    icon: Shield,
    description: 'Public sector technology and digital transformation',
    services: ['Digital Services', 'Data Management', 'Citizen Portals', 'Security Solutions'],
    color: 'from-gray-500 to-blue-600'
  }
];
}

export default function IndustriesPage() {
  
    >
      <div className='min-h-screen bg-gray-50'>
        {/* Hero Section */}
        <section className='relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
            <div className='absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000'></div>
            <div className='absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000'></div>
          </div>
          
          <div className='container mx-auto px-4 relative z-10'>
            <motion.div
              initial={ opacity: 0, y: 30 }
              animate={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
              className='text-center'
            >
              <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                Industries We <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>Serve</span>
              </h1>
              <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto'>
                We provide specialized technology solutions across diverse industries, 
                helping businesses transform and thrive in the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className='py-16'>
          <div className='container mx-auto px-4'>
            <motion.div
              initial={ opacity: 0, y: 30 }
              animate={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
              className='text-center mb-12'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Our Industry Expertise
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                From healthcare to finance, we deliver tailored solutions that address 
                the unique challenges and opportunities in each industry.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={ opacity: 0, y: 30 }
                  animate={ opacity: 1, y: 0 }
                  transition={ duration: 0.6, delay: index * 0.1 }
                  className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
                >
                  <div className={`h-32 bg-gradient-to-r ${industry.color} flex items-center justify-center`}>
                    <industry.icon className='w-16 h-16 text-white' />
                  </div>
                  
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
                      {industry.name}
                    </h3>
                    
                    <p className='text-gray-600 mb-4 leading-relaxed'>
                      {industry.description}
                    </p>
                    
                    <div className='space-y-2 mb-6'>
                      <h4 className='font-semibold text-gray-900 text-sm'>Key Services:</h4>
                      <ul className='space-y-1'>
                        {industry.services.map((service, idx) => (
                          <li key={idx} className='flex items-center text-sm text-gray-600'>
                            <CheckCircle className='w-3 h-3 text-green-500 mr-2 flex-shrink-0' />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className='w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group'>
                      Learn More
                      <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
          <div className='container mx-auto px-4 text-center'>
            <motion.div
              initial={ opacity: 0, y: 30 }
              animate={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
            >
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Ready to Transform Your Industry?
              </h2>
              <p className='text-xl mb-8 max-w-2xl mx-auto'>
                Let's discuss how our industry-specific solutions can help your business 
                achieve its goals and stay ahead of the competition.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button className='px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center'>
                  <ArrowRight className='w-5 h-5 mr-2' />
                  Get Industry Consultation
                </button>
                <button className='px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold'>
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
