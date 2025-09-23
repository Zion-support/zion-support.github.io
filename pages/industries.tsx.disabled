import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  Heart,
  GraduationCap,
  ShoppingCart,
  Car,
  Factory,
  DollarSign,
  Shield,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const industries = [
  {
    title: 'Healthcare & Life Sciences',
    description: 'Transform healthcare delivery with AI-powered diagnostics, patient management systems, and telemedicine solutions.',
    icon: Heart,
    services: ['AI Diagnostics', 'Patient Management', 'Telemedicine', 'HIPAA Compliance', 'Medical Records'],
    challenges: ['Data Privacy', 'Regulatory Compliance', 'Interoperability', 'Cost Optimization'],
    solutions: ['Secure Cloud Infrastructure', 'AI-Powered Analytics', 'Mobile Health Apps', 'Integration Services'],
    pricing: 'Starting at $5,000/month',
    popular: true
  },
  {
    title: 'Financial Services',
    description: 'Secure, scalable solutions for banking, insurance, and fintech with advanced fraud detection and compliance.',
    icon: DollarSign,
    services: ['Fraud Detection', 'Risk Management', 'Payment Processing', 'Regulatory Compliance', 'Customer Analytics'],
    challenges: ['Security Requirements', 'Regulatory Compliance', 'Real-time Processing', 'Scalability'],
    solutions: ['Blockchain Solutions', 'AI-Powered Security', 'Cloud Migration', 'API Development'],
    pricing: 'Starting at $8,000/month',
    popular: true
  },
  {
    title: 'Education & E-Learning',
    description: 'Modernize education with learning management systems, virtual classrooms, and personalized learning experiences.',
    icon: GraduationCap,
    services: ['LMS Development', 'Virtual Classrooms', 'Student Analytics', 'Content Management', 'Assessment Tools'],
    challenges: ['Scalability', 'User Experience', 'Content Delivery', 'Accessibility'],
    solutions: ['Cloud-Based Platforms', 'AI-Powered Personalization', 'Mobile Applications', 'Video Streaming'],
    pricing: 'Starting at $3,000/month',
    popular: true
  },
  {
    title: 'E-Commerce & Retail',
    description: 'Boost sales with AI-powered recommendations, inventory management, and seamless customer experiences.',
    icon: ShoppingCart,
    services: ['E-commerce Platforms', 'Inventory Management', 'AI Recommendations', 'Payment Integration', 'Analytics'],
    challenges: ['Inventory Optimization', 'Customer Experience', 'Payment Security', 'Scalability'],
    solutions: ['AI-Powered Recommendations', 'Cloud Infrastructure', 'Mobile Commerce', 'Data Analytics'],
    pricing: 'Starting at $2,500/month',
    popular: true
  },
  {
    title: 'Manufacturing & Industrial',
    description: 'Optimize production with IoT solutions, predictive maintenance, and smart manufacturing systems.',
    icon: Factory,
    services: ['IoT Integration', 'Predictive Maintenance', 'Quality Control', 'Supply Chain', 'Automation'],
    challenges: ['Legacy Systems', 'Data Integration', 'Quality Control', 'Efficiency'],
    solutions: ['IoT Platforms', 'AI Analytics', 'Cloud Integration', 'Automation Systems'],
    pricing: 'Starting at $6,000/month',
    popular: false
  },
  {
    title: 'Automotive & Transportation',
    description: 'Drive innovation with connected vehicles, fleet management, and autonomous systems.',
    icon: Car,
    services: ['Fleet Management', 'Connected Vehicles', 'Route Optimization', 'Predictive Maintenance', 'Safety Systems'],
    challenges: ['Real-time Data', 'Safety Requirements', 'Integration', 'Scalability'],
    solutions: ['IoT Platforms', 'AI Analytics', 'Cloud Infrastructure', 'Mobile Applications'],
    pricing: 'Starting at $4,500/month',
    popular: false
  },
  {
    title: 'Real Estate & Construction',
    description: 'Streamline operations with property management systems, virtual tours, and construction project management.',
    icon: Building2,
    services: ['Property Management', 'Virtual Tours', 'Project Management', 'CRM Systems', 'Analytics'],
    challenges: ['Data Management', 'Project Coordination', 'Client Communication', 'Compliance'],
    solutions: ['Cloud Platforms', 'Mobile Applications', 'AI Analytics', 'Integration Services'],
    pricing: 'Starting at $3,500/month',
    popular: false
  },
  {
    title: 'Government & Public Sector',
    description: 'Modernize government services with citizen portals, data analytics, and digital transformation.',
    icon: Shield,
    services: ['Citizen Portals', 'Data Analytics', 'Digital Services', 'Security Solutions', 'Compliance'],
    challenges: ['Security Requirements', 'Compliance', 'Legacy Systems', 'Citizen Experience'],
    solutions: ['Secure Cloud Infrastructure', 'AI-Powered Analytics', 'Mobile Applications', 'Integration Services'],
    pricing: 'Starting at $7,000/month',
    popular: false
  }
];

const stats = [
  { number: '500+', label: 'Industry Projects' },
  { number: '50+', label: 'Industries Served' },
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

export default function IndustriesPage() {
  return (
    <>
      <Head>
        <title>Industries We Serve - Zion Tech Group</title>
        <meta name="description" content="Industry-specific technology solutions for healthcare, finance, education, e-commerce, manufacturing, and more. Tailored solutions for your sector." />
        <meta name="keywords" content="industry solutions, healthcare technology, fintech, e-learning, e-commerce, manufacturing, government" />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Industries We Serve
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Tailored technology solutions designed specifically for your industry's unique challenges and opportunities.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Industry Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Industry-Specific Solutions Matter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each industry has unique challenges, regulations, and requirements. Our specialized solutions are designed to address these specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we can help transform your industry with cutting-edge technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  {industry.popular && (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Services</h4>
                  <ul className="space-y-2">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Common Challenges</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.challenges.map((challenge, challengeIndex) => (
                      <span key={challengeIndex} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Solutions</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <span key={solutionIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">{industry.pricing}</span>
                </div>
                
                <div className="flex gap-2">
                  <Link
                    href="/contact"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Get Consultation
                  </Link>
                  <Link
                    href="/case-studies"
                    className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    View Case Studies
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Industry?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact our industry experts to discuss how we can help solve your specific challenges and drive innovation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <a href="tel:+13024640950" className="text-gray-700 hover:text-blue-600">
                        +1 302 464 0950
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <a href="mailto:kleber@ziontechgroup.com" className="text-gray-700 hover:text-blue-600">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Industry-Specific Expertise
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Compliance & Security Focus
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Proven Track Record
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      24/7 Industry Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}