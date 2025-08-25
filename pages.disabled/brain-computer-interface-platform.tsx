import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Target, Users, 
  Shield, Rocket, Globe, Sparkles,
  Check, ArrowRight, Star, Award,
  Cpu, Database, Network, Lock, Activity
} from 'lucide-react';

export default function BrainComputerInterfacePlatform() {
  const features = [
    {
      name: 'Neural Signal Processing',
      description: 'Advanced algorithms for real-time brain signal analysis and interpretation',
      capabilities: [
        'EEG Signal Analysis',
        'Neural Pattern Recognition',
        'Real-time Processing',
        'Signal Filtering',
        'Noise Reduction',
        'Adaptive Algorithms'
      ],
      icon: <Activity className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Thought-to-Action Interface',
      description: 'Direct translation of brain signals into digital commands and actions',
      capabilities: [
        'Intent Recognition',
        'Command Generation',
        'Response Mapping',
        'Feedback Loops',
        'Learning Algorithms',
        'Custom Commands'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Cognitive Enhancement',
      description: 'Augment human cognitive abilities through direct brain-computer interaction',
      capabilities: [
        'Memory Enhancement',
        'Learning Acceleration',
        'Focus Improvement',
        'Creativity Boost',
        'Problem Solving',
        'Decision Support'
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Assistive Technology',
      description: 'Revolutionary solutions for individuals with physical disabilities',
      capabilities: [
        'Mobility Control',
        'Communication Systems',
        'Environmental Control',
        'Prosthetic Control',
        'Wheelchair Navigation',
        'Daily Living Assistance'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Virtual Reality Integration',
      description: 'Seamless integration with VR/AR for immersive brain-controlled experiences',
      capabilities: [
        'VR Environment Control',
        'Haptic Feedback',
        'Immersive Gaming',
        'Training Simulations',
        'Therapeutic Applications',
        'Social Interaction'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-teal-500 to-blue-600'
    },
    {
      name: 'Medical Applications',
      description: 'Advanced medical diagnostics and treatment through brain-computer interfaces',
      capabilities: [
        'Neurological Assessment',
        'Treatment Monitoring',
        'Rehabilitation Support',
        'Pain Management',
        'Sleep Analysis',
        'Mental Health Support'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const applications = [
    {
      industry: 'Healthcare',
      useCases: ['Neurological Rehabilitation', 'Prosthetic Control', 'Communication Aids', 'Pain Management'],
      icon: <Shield className="w-6 h-6" />
    },
    {
      industry: 'Gaming & Entertainment',
      useCases: ['Mind-Controlled Games', 'Virtual Reality', 'Interactive Media', 'Immersive Experiences'],
      icon: <Globe className="w-6 h-6" />
    },
    {
      industry: 'Education & Training',
      useCases: ['Learning Enhancement', 'Skill Development', 'Focus Training', 'Cognitive Assessment'],
      icon: <Brain className="w-6 h-6" />
    },
    {
      industry: 'Research & Development',
      useCases: ['Neuroscience Research', 'Human-Computer Interaction', 'Cognitive Science', 'AI Development'],
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const technology = [
    {
      title: 'Advanced Sensors',
      description: 'High-precision neural signal acquisition with minimal invasiveness',
      icon: <Activity className="w-6 h-6" />,
      features: ['EEG Electrodes', 'fNIRS Sensors', 'ECoG Arrays', 'Optical Imaging']
    },
    {
      title: 'AI Processing',
      description: 'Machine learning algorithms for real-time brain signal interpretation',
      icon: <Cpu className="w-6 h-6" />,
      features: ['Neural Networks', 'Pattern Recognition', 'Adaptive Learning', 'Real-time Analysis']
    },
    {
      title: 'Secure Communication',
      description: 'Encrypted data transmission and privacy protection for sensitive neural data',
      icon: <Lock className="w-6 h-6" />,
      features: ['End-to-End Encryption', 'Privacy Controls', 'Data Anonymization', 'Secure Protocols']
    },
    {
      title: 'Cloud Integration',
      description: 'Scalable cloud infrastructure for processing and storing neural data',
      icon: <Database className="w-6 h-6" />,
      features: ['Real-time Processing', 'Data Analytics', 'Machine Learning', 'Scalable Storage']
    }
  ];

  const benefits = [
    {
      title: 'Accessibility',
      description: 'Empower individuals with disabilities to interact with technology naturally',
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Cognitive Enhancement',
      description: 'Augment human cognitive abilities and unlock new potential',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Medical Innovation',
      description: 'Revolutionary treatments for neurological conditions and disabilities',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Brain-Computer Interface Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary brain-computer interface platform for neural signal processing, cognitive enhancement, and assistive technology applications." />
        <meta name="keywords" content="brain-computer interface, BCI, neural interface, cognitive enhancement, assistive technology, neural signals" />
        <link rel="canonical" href="https://ziontechgroup.com/brain-computer-interface-platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                BCI Platform
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Brain-Computer Interface Platform
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionary brain-computer interface technology that bridges the gap between human thought 
                and digital action. Experience the future of human-computer interaction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{feature.name}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {feature.capabilities.map((capability, capabilityIndex) => (
                        <li key={capabilityIndex} className="flex items-center text-sm text-gray-400">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Applications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {applications.map((application, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {application.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-4">{application.industry}</h3>
                    
                    <div className="space-y-2">
                      {application.useCases.map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className="text-sm text-gray-400">
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Technology Stack</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {technology.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                        {tech.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{tech.description}</p>
                    
                    <div className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <Star className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover how our brain-computer interface platform can transform the way you interact 
                with technology and unlock new possibilities for human potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}