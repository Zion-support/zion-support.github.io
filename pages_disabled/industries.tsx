import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Heart, Building, ShoppingCart, Settings, BookOpen, Shield, ArrowRight, CheckCircle, Star, Zap, Users, Globe, BarChart3, Brain, Network, Cloud } from 'lucide-react';;
import React from 'react';
import Head from 'next/head';';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Heart, 
  Building, 
  ShoppingCart, 
  Settings, 
  BookOpen, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart,
  Building,
  ShoppingCart,
  Settings,
  BookOpen,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Users,
  Globe,
  BarChart3,
  Brain,
  Network,
  Cloud;
} from 'lucide-react';

const industries = [;
  {}
    title: 'Healthcare,',
    icon: Heart,
    description: 'AI-powered diagnostics, medical imaging, drug discovery, and patient care solutions.',',
    color: 'from-red-500 to-pink-500,',
    services: [;
      'AI Medical Imaging Analysis,',
      'Drug Discovery Platform',',
      'Patient Data Analytics',',
      'Telemedicine Solutions',',
      'Clinical Decision Support',',
      'Healthcare IoT Management'';
    ],
    benefits: [;
      'Improved Patient Outcomes,',
      'Reduced Diagnostic Time',',
      'Enhanced Treatment Accuracy',',
      'Cost-effective Care Delivery'';
    ],
    caseStudy: 'Reduced diagnostic time by 60% for a major hospital network,',
    pricing: 'Starting at $15,000/project',
  },
  {}
    title: 'Finance,',
    icon: Building,
    description: 'Fraud detection, risk assessment, algorithmic trading, and financial planning solutions.',',
    color: 'from-green-500 to-emerald-500,',
    services: [;
      'AI Fraud Detection,',
      'Algorithmic Trading',',
      'Risk Assessment Models',',
      'Financial Planning Tools',',
      'Regulatory Compliance',',
      'Blockchain Solutions'';
    ],
    benefits: [;
      'Enhanced Security,',
      'Reduced Financial Risk',',
      'Improved Compliance',',
      'Automated Trading'';
    ],
    caseStudy: 'Prevented $2M+ in fraudulent transactions for a major bank,',
    pricing: 'Starting at $10,000/setup',
  },
  {}
    title: 'E-commerce,',
    icon: ShoppingCart,
    description: 'Personalized recommendations, inventory optimization, and customer experience enhancement.',',
    color: 'from-blue-500 to-cyan-500,',
    services: [;
      'AI Recommendation Engine,',
      'Inventory Optimization',',
      'Customer Analytics',',
      'Price Optimization',',
      'Chatbot Support',',
      'Visual Search'';
    ],
    benefits: [;
      'Increased Sales,',
      'Better Customer Experience',',
      'Optimized Inventory',',
      'Reduced Cart Abandonment'';
    ],
    caseStudy: 'Increased conversion rates by 35% for an online retailer,',
    pricing: 'Starting at $3,000/setup',
  },
  {}
    title: 'Manufacturing,',
    icon: Settings,
    description: 'Predictive maintenance, quality control, supply chain optimization, and smart factory solutions.',',
    color: 'from-orange-500 to-yellow-500,',
    services: [;
      'Predictive Maintenance,',
      'Quality Control AI',',
      'Supply Chain Optimization',',
      'Smart Factory Solutions',',
      'IoT Integration',',
      'Energy Optimization'';
    ],
    benefits: [;
      'Reduced Downtime,',
      'Improved Quality',',
      'Cost Optimization',',
      'Enhanced Efficiency'';
    ],
    caseStudy: 'Reduced equipment downtime by 40% for a manufacturing plant,',
    pricing: 'Starting at $20,000/project',
  },
  {}
    title: 'Education,',
    icon: BookOpen,
    description: 'Personalized learning, automated assessment, and educational content generation.',',
    color: 'from-purple-500 to-indigo-500,',
    services: [;
      'Personalized Learning,',
      'Automated Assessment',',
      'Content Generation',',
      'Student Analytics',',
      'Virtual Tutoring',',
      'Learning Management'';
    ],
    benefits: [;
      'Personalized Education,',
      'Improved Learning Outcomes',',
      'Automated Grading',',
      'Enhanced Engagement'';
    ],
    caseStudy: 'Improved student performance by 25% in a university program,',
    pricing: 'Starting at $5,000/setup',
  },
  {}
    title: 'Government,',
    icon: Shield,
    description: 'Citizen services, data analytics, cybersecurity, and digital transformation solutions.',',
    color: 'from-gray-600 to-slate-600,',
    services: [;
      'Citizen Services Portal,',
      'Data Analytics Platform',',
      'Cybersecurity Solutions',',
      'Digital Transformation',',
      'Compliance Management',',
      'Public Safety AI'';
    ],
    benefits: [;
      'Improved Citizen Services,',
      'Enhanced Security',',
      'Better Data Insights',',
      'Streamlined Operations'';
    ],
    caseStudy: 'Streamlined citizen services for a state government,',
    pricing: 'Starting at $25,000/project',
  }
;];

const technologies = [;
  { name: 'AI & Machine Learning, icon: Brain, description: 'Advanced AI solutions for every industry' },',
  { name: 'Cloud Infrastructure, icon: Cloud, description: 'Scalable and secure cloud solutions' },',
  { name: 'Cybersecurity, icon: Shield, description: 'Enterprise-grade security solutions' },',
  { name: 'Data Analytics, icon: BarChart3, description: 'Insights-driven decision making' },',
  { name: 'IoT & Edge Computing, icon: Network, description: 'Connected and intelligent systems' },',
  { name: 'Blockchain, icon: Globe, description: 'Secure and transparent solutions' }',
;];

export default function IndustriesPage() {
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
      <Head>;
        <title>Industry Solutions - Zion Tech Group</title>;
        <meta name="description" content="Industry-specific technology solutions for healthcare, finance, e-commerce, manufacturing, education, and government sectors." />"
        <meta name="keywords" content="industry solutions, healthcare AI, fintech, e-commerce technology, manufacturing automation, education technology, government solutions" />"
      </Head>;

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">"
        <div className="absolute inset-0">";
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
        </div>;

        <div className="container mx-auto px-4 relative z-10">";
          <motion.div);
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center""
          >;
            <h1 className="text-4xl md:text-6xl font-bold mb-6">";
              Industry-Specific{' '}',
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";
                Solutions;
              </span>;
            </h1>;
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
              Tailored technology solutions designed specifically for your industry's unique challenges and opportunities.';
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">";
                Get Industry Consultation;
              </Link>;
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">";
                View All Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">"
        <div className="container mx-auto px-4">";
          <motion.div;
            className="text-center mb-16"";
  Cloud
} from 'lucide-react';
const industries = [
  {
    id: 1,
    name: 'Healthcare',
    icon: Heart,
    description: 'AI-powered diagnostics, medical imaging, drug discovery, and patient care solutions.',
    color: 'from-red-500 to-pink-500',
    services: [
      'AI Medical Imaging Analysis',
      'Drug Discovery Platform',
      'Patient Data Analytics',
      'Telemedicine Solutions',
      'Clinical Decision Support',
      'Healthcare IoT Management'
    ]
  },
  {
    title: 'Financial Services',
    icon: BarChart3,
    description: 'Advanced fintech solutions including fraud detection, risk assessment, and automated trading.',
    color: 'from-green-500 to-emerald-500',
    services: [
      'Fraud Detection Systems',
      'Risk Assessment Tools',
      'Algorithmic Trading',
      'Credit Scoring Models',
      'Regulatory Compliance',
      'Digital Banking Solutions'
    ]
  },
  {
    title: 'E-commerce & Retail',
    icon: ShoppingCart,
    description: 'Personalized shopping experiences, inventory optimization, and customer analytics.',
    color: 'from-blue-500 to-cyan-500',
    services: [
      'Personalized Recommendations',
      'Inventory Optimization',
      'Customer Analytics',
      'Price Optimization',
      'Supply Chain Management',
      'Omnichannel Solutions'
    ]
  },
  {
    title: 'Education',
    icon: GraduationCap,
    description: 'AI-powered learning platforms, personalized education, and student analytics.',
    color: 'from-purple-500 to-indigo-500',
    services: [
      'Personalized Learning',
      'Student Analytics',
      'Automated Grading',
      'Virtual Classrooms',
      'Learning Management Systems',
      'Educational Content Generation'
    ]
  },
  {
    id: 4,
    name: 'Manufacturing',
    icon: Settings,
    description: 'Smart manufacturing solutions with predictive maintenance and quality control.',
    color: 'from-orange-500 to-red-500',
    services: [
      'Predictive Maintenance',
      'Quality Control Systems',
      'Supply Chain Optimization',
      'Robotic Process Automation',
      'Production Analytics',
      'IoT Integration'
    ]
  },
  {
    title: 'Transportation',
    icon: Car,
    description: 'Autonomous vehicles, route optimization, and fleet management solutions.',
    color: 'from-yellow-500 to-orange-500',
    services: [
      'Autonomous Vehicle Systems',
      'Route Optimization',
      'Fleet Management',
      'Traffic Analytics',
      'Predictive Maintenance',
      'Smart Transportation'
    ]
  },
  {
    title: 'Real Estate',
    icon: Building,
    description: 'Property valuation, market analysis, and smart building management.',
    color: 'from-teal-500 to-green-500',
    services: [
      'Property Valuation Models',
      'Market Analysis Tools',
      'Smart Building Management',
      'Investment Analytics',
      'Property Management Systems',
      'Virtual Property Tours'
    ]
  },
  {
    title: 'Government',
    icon: Globe,
    description: 'Digital government services, citizen analytics, and public safety solutions.',
    color: 'from-indigo-500 to-purple-500',
    services: [
      'Digital Government Services',
      'Citizen Analytics',
      'Public Safety Systems',
      'Resource Optimization',
      'Policy Analysis Tools',
      'Smart City Solutions'
    ]
  }
];

export default function IndustriesPage() {
  return (
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Serve</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                We provide specialized AI and technology solutions across multiple industries, 
                helping organizations transform their operations and achieve their goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className={`bg-gradient-to-r ${industry.color} p-6 text-white`}>
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-8 h-8 mr-3" />
                        <h3 className="text-2xl font-bold">{industry.title}</h3>
                      </div>
                      <p className="text-white text-opacity-90">{industry.description}</p>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Solutions:</h4>
                      <ul className="space-y-2">
                        {industry.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Expertise</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our team has deep industry knowledge and experience across multiple sectors. 
                  We understand the unique challenges and opportunities in each industry and 
                  tailor our solutions accordingly.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Industry Knowledge</h3>
                    <p className="text-gray-600">Years of experience working across different industries</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance & Security</h3>
                    <p className="text-gray-600">Understanding of industry regulations and security requirements</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">Track record of successful implementations across industries</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our industry-specific solutions can help your organization 
                achieve its goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Industry Consultation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Industry Solutions - Zion Tech Group</title>
        <meta name="description" content="Industry-specific technology solutions for healthcare, finance, e-commerce, manufacturing, education, and government sectors." />
        <meta name="keywords" content="industry solutions, healthcare AI, fintech, e-commerce technology, manufacturing automation, education technology, government solutions" />
      </Head>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industry-Specific{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Tailored technology solutions designed specifically for your industry's unique challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Industry Consultation
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >,
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">";
              Industries We Serve;
            </h2>;
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">";
              We understand the unique challenges and opportunities in each industry. Our solutions are designed to address specific sector needs while driving innovation and growth.;
            </p>;
          </motion.div>;

        {/* Industries Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Industry Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From healthcare to finance, we deliver tailored solutions that address 
                the unique challenges and opportunities in each industry.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-32 bg-gradient-to-r ${industry.color} flex items-center justify-center`}>
                    <industry.icon className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Services:</h4>
                      <ul className="space-y-1">
                        {industry.services.map((service, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}