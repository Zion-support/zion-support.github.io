import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Building, Car, Heart, DollarSign, GraduationCap, 
  Shield, Factory, Globe, Brain, Atom, Rocket,
  ArrowRight, CheckCircle, Star, Users, Zap, Cloud, BarChart3
} from 'lucide-react';

export default function SolutionsPage() {
  const industrySolutions = [
    {
      name: 'Enterprise',
      description: 'Scalable solutions for large organizations with complex requirements',
      icon: Building,
      color: 'from-blue-400 to-cyan-500',
      solutions: [
        'Digital Transformation',
        'Enterprise AI Platform',
        'Cloud Migration',
        'Legacy System Modernization'
      ]
    },
    {
      name: 'Manufacturing',
      description: 'Smart manufacturing solutions for Industry 4.0 and beyond',
      icon: Factory,
      color: 'from-orange-400 to-red-500',
      solutions: [
        'Predictive Maintenance',
        'Quality Control AI',
        'Supply Chain Optimization',
        'Smart Factory Management'
      ]
    },
    {
      name: 'Automotive',
      description: 'Next-generation automotive technology and mobility solutions',
      icon: Car,
      color: 'from-gray-400 to-slate-500',
      solutions: [
        'Connected Vehicle Platform',
        'Autonomous Driving Systems',
        'Fleet Management',
        'EV Infrastructure'
      ]
    },
    {
      name: 'Healthcare',
      description: 'AI-powered healthcare solutions for better patient outcomes',
      icon: Heart,
      color: 'from-red-400 to-pink-500',
      solutions: [
        'Medical AI Diagnostics',
        'Patient Care Automation',
        'Healthcare Analytics',
        'Telemedicine Platform'
      ]
    },
    {
      name: 'Education',
      description: 'Innovative educational technology for modern learning',
      icon: GraduationCap,
      color: 'from-green-400 to-emerald-500',
      solutions: [
        'Learning Management System',
        'AI Tutoring Platform',
        'Virtual Reality Learning',
        'Student Analytics'
      ]
    },
    {
      name: 'Financial Services',
      description: 'Secure and intelligent financial technology solutions',
      icon: Shield,
      color: 'from-yellow-400 to-orange-500',
      solutions: [
        'Fraud Detection AI',
        'Risk Management',
        'Trading Algorithms',
        'Regulatory Compliance'
      ]
    }
  ];

  const technologySolutions = [
    {
      name: 'AI & Machine Learning',
      description: 'Comprehensive AI solutions for business automation and intelligence',
      icon: Brain,
      color: 'from-purple-400 to-pink-500',
      features: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making'
      ]
    },
    {
      name: 'Quantum Computing',
      description: 'Quantum solutions for complex optimization and simulation problems',
      icon: Zap,
      color: 'from-cyan-400 to-blue-500',
      features: [
        'Quantum Optimization',
        'Quantum Machine Learning',
        'Quantum Cryptography',
        'Quantum Simulation'
      ]
    },
    {
      name: 'Cloud & DevOps',
      description: 'Modern cloud infrastructure and development operations',
      icon: Cloud,
      color: 'from-green-400 to-emerald-500',
      features: [
        'Multi-Cloud Management',
        'Container Orchestration',
        'CI/CD Automation',
        'Infrastructure as Code'
      ]
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced security solutions for modern threat landscapes',
      icon: Shield,
      color: 'from-red-400 to-pink-500',
      features: [
        'Zero-Trust Security',
        'Threat Intelligence',
        'Incident Response',
        'Compliance Management'
      ]
    }
  ];

  const useCaseSolutions = [
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation solutions for modern businesses',
      icon: Rocket,
      color: 'from-purple-400 to-pink-500',
      benefits: [
        'Increased operational efficiency',
        'Improved customer experience',
        'Reduced operational costs',
        'Enhanced data insights'
      ]
    },
    {
      title: 'Process Automation',
      description: 'Intelligent automation solutions for repetitive business processes',
      icon: Zap,
      color: 'from-cyan-400 to-blue-500',
      benefits: [
        'Faster process execution',
        'Reduced human error',
        '24/7 operation capability',
        'Scalable automation'
      ]
    },
    {
      title: 'Data Analytics',
      description: 'Comprehensive data analytics and business intelligence solutions',
      icon: BarChart3,
      color: 'from-green-400 to-emerald-500',
      benefits: [
        'Real-time insights',
        'Predictive analytics',
        'Data-driven decisions',
        'Performance optimization'
      ]
    },
    {
      title: 'Customer Experience',
      description: 'AI-powered customer experience and engagement solutions',
      icon: Users,
      color: 'from-orange-400 to-red-500',
      benefits: [
        'Personalized experiences',
        'Improved satisfaction',
        'Increased retention',
        'Better engagement'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive technology solutions for various industries including AI, quantum computing, cloud, and cybersecurity." />
        <meta property="og:title" content="Solutions - Zion Tech Group" />
        <meta property="og:description" content="Discover Zion Tech Group's comprehensive technology solutions for various industries including AI, quantum computing, cloud, and cybersecurity." />
        <link rel="canonical" href="https://ziontechgroup.com/solutions" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent"
            >
              Technology Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-4xl mx-auto mb-8"
            >
              Comprehensive technology solutions designed to transform your business operations, 
              drive innovation, and deliver measurable results across all industries.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                Get Started
              </a>
              <a href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                View Case Studies
              </a>
            </motion.div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Industry Solutions
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Tailored technology solutions designed specifically for your industry's unique challenges and opportunities.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white text-center">{industry.name}</h3>
                  <p className="text-white/70 mb-4 text-center">{industry.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Solutions:</h4>
                    <ul className="space-y-1">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-white/70 flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <a href="/contact" className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Technology Solutions
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Cutting-edge technology solutions that power modern businesses and drive innovation.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {technologySolutions.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mr-4`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{tech.name}</h3>
                      <p className="text-white/70">{tech.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-white/70">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <a href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                      Explore Solution
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Case Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Use Case Solutions
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Proven solutions for common business challenges and opportunities.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCaseSolutions.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mr-4`}>
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                      <p className="text-white/70">{useCase.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-white/70 flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <a href="/contact" className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                      Get Solution
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Let us help you implement the right technology solutions to achieve your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Start Your Journey
                </a>
                <a href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                  View Success Stories
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}