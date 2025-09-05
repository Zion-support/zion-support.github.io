import React from 'react';
<<<<<<< HEAD
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Cloud, Shield, Database, Cpu, Users, Globe } from 'lucide-react';
=======
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Cloud, 
  Cpu, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Shield,
  Target,
  Users,
  Award,
  Globe,
  Lock,
  Clock,
  TrendingUp
} from 'lucide-react';
import Layout from '../components/Layout';

const services = [
  {
    "title": "AI Services",
    "description": "Comprehensive artificial intelligence solutions including machine learning, natural language processing, computer vision, and AI-powered automation to transform your business operations.",
    "icon": Brain,
    "href": "/ai-services",
    "features": ["Machine Learning", "Natural Language Processing", "Computer Vision", "AI Automation", "Predictive Analytics", "Chatbots", "Voice Recognition", "Deep Learning"],
    "pricing": "Starting at $5,000/project",
    "count": "25+ Solutions",
    "popular": true
  },
  {
    "title": "IT Services",
    "description": "Complete information technology solutions including cloud migration, cybersecurity, system integration, and IT consulting to modernize and secure your infrastructure.",
    "icon": Cpu,
    "href": "/it-services",
    "features": ["Cloud Migration", "Cybersecurity", "System Integration", "IT Consulting", "Network Security", "Data Management", "Infrastructure Setup", "Technical Support"],
    "pricing": "Starting at $2,500/month",
    "count": "30+ Services",
    "popular": true
  },
  {
    "title": "Micro SaaS",
    "description": "Innovative software as a service solutions including AI-powered tools, blockchain applications, smart energy management, and specialized business automation platforms.",
    "icon": Cloud,
    "href": "/micro-saas",
    "features": ["AI-Powered Tools", "Blockchain Analytics", "Smart Energy Management", "Voice AI Assistants", "Predictive Maintenance", "Smart Contracts", "Green Technology", "Advanced Automation"],
    "pricing": "Starting at $29/month",
    "count": "45+ Products",
    "popular": true
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Team",
    description: "Certified professionals with years of experience"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development with rapid deployment"
  },
  {
    icon: Shield,
    title: "24/7 Support",
    description: "Round-the-clock technical support"
  }
];

const whyChooseUs = [
  {
    icon: Target,
    title: "Custom Solutions",
    description: "Tailored to your specific business needs and goals"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with proven track records"
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients worldwide with local expertise"
  },
  {
    icon: Lock,
    title: "Security First",
    description: "Enterprise-grade security and compliance"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your requirements and business goals"
  },
  {
    step: "02",
    title: "Planning",
    description: "Create a detailed project roadmap and timeline"
  },
  {
    step: "03",
    title: "Development",
    description: "Build and implement your solution with regular updates"
  },
  {
    step: "04",
    title: "Deployment",
    description: "Launch your solution with full support and training"
  }
];
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4

export default function ServicesPage() {
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions to automate processes and gain insights from your data.',
      icon: Cpu,
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems']
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      icon: Cloud,
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud Platform', 'Hybrid Cloud']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      icon: Database,
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Data Warehousing']
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business processes with cutting-edge technology solutions.',
      icon: Globe,
      features: ['Process Automation', 'Legacy System Modernization', 'API Development', 'Integration Services']
    },
    {
      title: 'Consulting',
      description: 'Expert guidance to help you make informed technology decisions.',
      icon: Users,
      features: ['Technology Strategy', 'Architecture Design', 'Project Management', 'Training & Support']
    }
  ];

  const benefits = [
    '24/7 Technical Support',
    'Scalable Solutions',
    'Industry Expertise',
    'Cost-Effective Pricing',
    'Rapid Deployment',
    'Ongoing Maintenance'
  ];

  return (
<<<<<<< HEAD
    <Layout title="Services - Zion Tech Group">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
=======
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive technology solutions to drive your business forward. 
                From AI and cloud services to cybersecurity and digital transformation.
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive growth
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
<<<<<<< HEAD
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
=======
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From AI-powered solutions to cloud infrastructure, we provide end-to-end technology services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="h-12 w-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-blue-600 font-semibold">{service.count}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-blue-600 mb-2">{service.pricing}</p>
                    <p className="text-sm text-gray-500">Starting price</p>
                  </div>
                  
                  <Link
                    href={service.href}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Us
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We deliver exceptional value through our expertise, innovation, and commitment to your success.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
=======
        {/* Our Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What You Get
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive benefits that ensure your success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-gray-50 p-8 rounded-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4
      </div>
    </Layout>
  );
}