import * as React from 'react';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Target, BarChart3, Shield, Server, Database, Zap, Users, Building2, Rocket, Factory, Brain, Cloud, Network, Settings, ArrowRight, CheckCircle, Star, TrendingUp, Award, Clock, Globe, Lock, Cpu, Workflow, MessageCircle, ArrowUp, Sparkles, Home, Truck, BookOpen, Leaf, Satellite, HelpCircle, Menu, X, Building, DollarSign, ShoppingCart, Heart, Eye, FileText, AlertCircle, Scale, Phone, Mail, MapPin, Instagram, Linkedin, Twitter, Facebook, ExternalLink, Calendar, User, Download, Play, Tag, Smartphone } from 'lucide-react';

const consultingServices = [
  {
    icon: Target,
    title: 'Technology Strategy',
    description: 'Develop comprehensive technology strategies aligned with business goals',
    features: ['Technology roadmap', 'Architecture planning', 'Vendor selection', 'ROI analysis']
  },
  {
    icon: BarChart3,
    title: 'Digital Transformation',
    description: 'Guide organizations through complete digital transformation initiatives',
    features: ['Process optimization', 'Change management', 'Technology adoption', 'Performance metrics']
  },
  {
    icon: Shield,
    title: 'Cybersecurity Consulting',
    description: 'Assess and improve your organization\'s security posture',
    features: ['Security audits', 'Risk assessment', 'Compliance guidance', 'Incident response']
  },
  {
    icon: Server,
    title: 'Cloud Strategy',
    description: 'Plan and execute cloud migration and optimization strategies',
    features: ['Cloud assessment', 'Migration planning', 'Cost optimization', 'Security design']
  },
  {
    icon: Database,
    title: 'Data Strategy',
    description: 'Develop data management and analytics strategies for business growth',
    features: ['Data governance', 'Analytics planning', 'Data quality', 'Privacy compliance']
  },
  {
    icon: Zap,
    title: 'Process Optimization',
    description: 'Streamline business processes for maximum efficiency and productivity',
    features: ['Process mapping', 'Automation opportunities', 'Workflow design', 'Performance improvement']
  }
];

const expertiseAreas = [
  {
    name: 'Enterprise Architecture',
    description: 'Design scalable and maintainable enterprise systems',
    icon: '🏗️',
    services: ['System design', 'Integration planning', 'Technology selection', 'Scalability planning']
  },
  {
    name: 'Agile Transformation',
    description: 'Implement agile methodologies across your organization',
    icon: '🚀',
    services: ['Agile coaching', 'Team training', 'Process implementation', 'Tool selection']
  },
  {
    name: 'IT Governance',
    description: 'Establish effective IT governance and management frameworks',
    icon: '⚖️',
    services: ['Policy development', 'Risk management', 'Compliance frameworks', 'Audit preparation']
  },
  {
    name: 'Change Management',
    description: 'Manage organizational change during technology implementations',
    icon: '🔄',
    services: ['Change planning', 'Stakeholder engagement', 'Training programs', 'Communication strategies']
  },
  {
    name: 'Performance Optimization',
    description: 'Optimize systems and processes for maximum performance',
    icon: '⚡',
    services: ['Performance analysis', 'Bottleneck identification', 'Optimization strategies', 'Monitoring setup']
  },
  {
    name: 'Innovation Strategy',
    description: 'Develop innovation strategies to stay competitive',
    icon: '💡',
    services: ['Technology trends', 'Innovation frameworks', 'Pilot programs', 'R&D planning']
  }
];

const consultingProcess = [
  {
    step: 'Discovery',
    description: 'Understanding your current state and business objectives',
    duration: '1-2 weeks',
    activities: ['Stakeholder interviews', 'Current state analysis', 'Gap identification', 'Requirements gathering']
  },
  {
    step: 'Analysis',
    description: 'Comprehensive analysis of opportunities and challenges',
    duration: '2-3 weeks',
    activities: ['Technical assessment', 'Risk analysis', 'Opportunity identification', 'Benchmarking']
  },
  {
    step: 'Strategy',
    description: 'Develop comprehensive recommendations and implementation plan',
    duration: '2-4 weeks',
    activities: ['Strategy development', 'Roadmap creation', 'Resource planning', 'Success metrics']
  },
  {
    step: 'Implementation',
    description: 'Support implementation of recommended solutions',
    duration: '3-12 months',
    activities: ['Project management', 'Change management', 'Training delivery', 'Progress monitoring']
  }
];

const pricingOptions = [
  {
    name: 'Hourly Consulting',
    description: 'Flexible hourly engagement for specific needs',
    price: '$150-300',
    period: '/hour',
    features: [
      'Expert consultation',
      'Flexible scheduling',
      'Focused expertise',
      'Quick turnaround'
    ],
    ideal: 'Specific questions, short-term needs'
  },
  {
    name: 'Project-Based',
    description: 'Fixed-price consulting for defined projects',
    price: '$10,000-100,000',
    period: '/project',
    features: [
      'Defined deliverables',
      'Fixed timeline',
      'Comprehensive analysis',
      'Detailed recommendations'
    ],
    ideal: 'Strategic initiatives, assessments',
    popular: true
  },
  {
    name: 'Retainer',
    description: 'Ongoing consulting relationship',
    price: '$5,000-25,000',
    period: '/month',
    features: [
      'Dedicated consultant',
      'Regular check-ins',
      'Priority support',
      'Continuous guidance'
    ],
    ideal: 'Long-term partnerships, ongoing needs'
  }
];

const industries = [
  {
    name: 'Financial Services',
    description: 'Banking, insurance, and fintech consulting',
    icon: '🏦',
    challenges: ['Regulatory compliance', 'Digital transformation', 'Risk management', 'Customer experience']
  },
  {
    name: 'Healthcare',
    description: 'Healthcare IT and digital health consulting',
    icon: '🏥',
    challenges: ['HIPAA compliance', 'Interoperability', 'Patient data management', 'Telemedicine']
  },
  {
    name: 'Manufacturing',
    description: 'Industrial IoT and smart manufacturing consulting',
    icon: '🏭',
    challenges: ['Industry 4.0', 'Supply chain optimization', 'Quality control', 'Predictive maintenance']
  },
  {
    name: 'Retail',
    description: 'E-commerce and omnichannel retail consulting',
    icon: '🛒',
    challenges: ['Digital transformation', 'Customer experience', 'Inventory management', 'Supply chain']
  },
  {
    name: 'Government',
    description: 'Public sector digital transformation consulting',
    icon: '🏛️',
    challenges: ['Citizen services', 'Legacy modernization', 'Security compliance', 'Transparency']
  },
  {
    name: 'Education',
    description: 'EdTech and digital learning consulting',
    icon: '🎓',
    challenges: ['Remote learning', 'Student engagement', 'Learning analytics', 'Technology integration']
  }
];

export default function ConsultingPage() {
  return (
    <MainLayout
      title="Technology Consulting - Zion Tech Group"
      description="Expert technology consulting services. Strategic guidance for digital transformation, technology strategy, and business optimization."
      keywords="technology consulting, IT consulting, digital transformation consulting, technology strategy, business consulting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
                Technology Consulting That{' '}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Drives Results
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Strategic technology guidance to help your organization make informed decisions, 
                optimize operations, and achieve digital transformation success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Schedule Consultation
                </Link>
                <Link href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Consulting Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide strategic technology consulting across all areas of your business 
                to help you make informed decisions and achieve your goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-violet-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-violet-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Expertise Areas Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Areas of Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our consultants bring deep expertise across multiple technology domains 
                and industry verticals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{area.name}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <ul className="space-y-1">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <ArrowRight className="w-3 h-3 text-violet-500 mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Consulting Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a structured approach to ensure comprehensive analysis 
                and actionable recommendations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultingProcess.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-violet-600 font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.step}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="mb-4">
                    <span className="text-sm text-violet-600 font-semibold">Duration: {step.duration}</span>
                  </div>
                  <ul className="space-y-1">
                    {step.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <ArrowRight className="w-3 h-3 text-violet-500 mr-2" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Experience
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We have extensive experience across multiple industries, understanding 
                the unique challenges and opportunities in each sector.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Challenges:</h4>
                    <ul className="space-y-1">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="w-3 h-3 text-violet-500 mr-2" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Flexible Pricing Options
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the consulting engagement model that best fits your needs and budget.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingOptions.map((option, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white p-8 rounded-lg shadow-lg ${
                    option.popular ? 'ring-2 ring-violet-500 scale-105' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {option.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.name}</h3>
                    <div className="text-4xl font-bold text-violet-600 mb-2">
                      {option.price}
                      <span className="text-lg text-gray-500">{option.period}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{option.description}</p>
                    <p className="text-sm text-violet-600 font-semibold">{option.ideal}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-violet-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      option.popular
                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Expert Guidance?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Schedule a consultation with our technology experts to discuss your 
                organization's needs and challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <p className="text-violet-100 mb-1">📞 <strong>Call:</strong> +1 302 464 0950</p>
                  <p className="text-violet-100">📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
                </div>
                <Link href="/contact" className="px-8 py-4 bg-white text-violet-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}