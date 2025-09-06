import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Brain,
  Star,
  Users,
  TrendingUp,
  Zap,
  Shield,
  CheckCircle,
  Clock,
  Award,
  Target,
  Globe,
  Sparkles,
  Cpu,
  Lock,
  Cloud,
  BarChart3,
  Eye,
  Heart,
  Lightbulb,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
<<<<<<< HEAD
  Globe as GlobeIcon,;} from 'lucide-react';
=======
  Globe as GlobeIcon,;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { 
  Brain, Star, Users, TrendingUp, Zap, Shield, 
  CheckCircle, Clock, Award, Target, Globe, Sparkles;
  Cpu, Lock, Cloud, BarChart3, Eye, Heart, Lightbulb;
  ArrowRight, Phone, Mail, MapPin, Globe as GlobeIcon
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
} from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
  website: 'https://ziontechgroup.com',
=======
<<<<<<< HEAD
<<<<<<< HEAD
  website: 'https://ziontechgroup.com',
=======
  website: 'https://ziontechgroup.com'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
};

const features = [
  'Emotional intelligence training modules',
  'Consciousness expansion exercises',
  'Self-awareness development tools',
  'Empathy and compassion training',
  'Mindfulness and meditation guidance',
  'Cognitive enhancement techniques',
  'Social intelligence development',
  'Creative consciousness exploration',
  'Spiritual growth pathways',
  'Personal transformation tracking',
];

const useCases = [
  'Personal development and growth',
  'Professional leadership training',
  'Therapeutic and healing practices',
  'Educational enhancement',
  'Corporate wellness programs',
  'Mental health support',
  'Spiritual development',
  'Creative arts enhancement',
  'Relationship improvement',
  'Stress management and resilience',
];

const technology = [
  'Advanced AI algorithms',
  'Machine learning models',
  'Natural language processing',
  'Emotional recognition systems',
  'Biometric feedback integration',
  'Virtual reality experiences',
  'Augmented reality overlays',
  'Brain-computer interfaces',
  'Quantum computing integration',
  'Blockchain security',
];

const integrations = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  'Wearable devices',
  'Mobile applications',
  'Web platforms',
  'Smart home systems',
  'Healthcare platforms',
  'Educational systems',
  'Corporate wellness platforms',
  'Social media networks',
  'Fitness trackers',
<<<<<<< HEAD
  'Meditation apps',];
=======
  'Meditation apps',
=======
  website: 'https://ziontechgroup.com'
};

const features = [
  'Emotional intelligence training modulesConsciousness expansion exercisesSelf-awareness development toolsEmpathy and compassion trainingMindfulness and meditation guidanceCognitive enhancement techniquesSocial intelligence developmentCreative consciousness exploration';
  'Spiritual growth pathwaysPersonal transformation tracking'
];

const useCases = [
  'Personal development and growthProfessional leadership trainingTherapeutic and healing practicesEducational enhancementCorporate wellness programsMental health supportSpiritual developmentCreative arts enhancement';
  'Relationship improvementStress management and resilience'
];

const technology = [
  'Advanced AI algorithmsMachine learning modelsNatural language processingEmotional recognition systemsBiometric feedback integrationVirtual reality experiencesAugmented reality overlaysBrain-computer interfaces';
  'Quantum computing integrationBlockchain security'
];

const integrations = [
  'Wearable devicesMobile applicationsWeb platformsSmart home systemsHealthcare platformsEducational systemsCorporate wellness platformsSocial media networks';
  'Fitness trackersMeditation apps'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  'Wearable devicesMobile applicationsWeb platformsSmart home systemsHealthcare platformsEducational systemsCorporate wellness platformsSocial media networks';
  'Fitness trackersMeditation apps'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Clinical Psychologist',
    company: 'Mindful Wellness Center',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    content:
      'The AI Consciousness Evolution platform has revolutionized how we approach emotional intelligence training. Our clients show remarkable improvements in self-awareness and empathy.',
    rating: 5,
    avatar: '👩‍⚕️',
<<<<<<< HEAD
  },  {
    name: 'Michael Rodriguez',
    role: 'CEO',
    company: 'InnovateTech Solutions',
=======
  },
=======
    content: 'The AI Consciousness Evolution platform has revolutionized how we approach emotional intelligence training. Our clients show remarkable improvements in self-awareness and empathy.',
    rating: 5,
    avatar: '👩‍⚕️'
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    content: 'The AI Consciousness Evolution platform has revolutionized how we approach emotional intelligence training. Our clients show remarkable improvements in self-awareness and empathy.',
    rating: 5,
    avatar: '👩‍⚕️'
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
    name: 'Michael Rodriguez',
    role: 'CEO',
    company: 'InnovateTech Solutions',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    content:
      'Implementing this platform in our leadership development program has transformed our company culture. Our executives are more emotionally intelligent and effective leaders.',
    rating: 5,
    avatar: '👨‍💼',
<<<<<<< HEAD
  },  {
    name: 'Dr. Emily Watson',
    role: 'Research Director',
    company: 'Consciousness Research Institute',
=======
  },
=======
    content: 'Implementing this platform in our leadership development program has transformed our company culture. Our executives are more emotionally intelligent and effective leaders.',
    rating: 5,
    avatar: '👨‍💼'
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    content: 'Implementing this platform in our leadership development program has transformed our company culture. Our executives are more emotionally intelligent and effective leaders.',
    rating: 5,
    avatar: '👨‍💼'
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
    name: 'Dr. Emily Watson',
    role: 'Research Director',
    company: 'Consciousness Research Institute',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    content:
      "This is the most advanced consciousness development tool I've ever encountered. The AI integration makes personal growth accessible to everyone.",
    rating: 5,
    avatar: '👩‍🔬',
<<<<<<< HEAD
  },];
=======
  },
=======
    content: 'This is the most advanced consciousness development tool I\'ve ever encountered. The AI integration makes personal growth accessible to everyone.',
    rating: 5,
    avatar: '👩‍🔬'
  }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    content: 'This is the most advanced consciousness development tool I\'ve ever encountered. The AI integration makes personal growth accessible to everyone.',
    rating: 5,
    avatar: '👩‍🔬'
  }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function AIConsciousnessEvolution2025() {
  return (
    <Layout>
      <Head>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <title>
          AI Consciousness Evolution Platform 2025 - Zion Tech Group
        </title>
        <meta
          name='description'
          content='Revolutionary AI-powered consciousness evolution platform that enhances emotional intelligence, self-awareness, and personal transformation through advanced technology.'
        />
        <meta
          name='keywords'
          content='AI consciousness, emotional intelligence, self-awareness, personal development, consciousness evolution, AI training, Zion Tech Group'
        />
<<<<<<< HEAD
=======
=======
        <title>AI Consciousness Evolution Platform 2025 - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered consciousness evolution platform that enhances emotional intelligence, self-awareness, and personal transformation through advanced technology." />
        <meta name="keywords" content="AI consciousness, emotional intelligence, self-awareness, personal development, consciousness evolution, AI training, Zion Tech Group" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </Head>

      {/* Hero Section */}
      <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* Animated Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.15),transparent_50%)]'></div>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.15),transparent_50%)]'></div>
        </div>

        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-purple-400 rounded-full opacity-30'
              animate={{
<<<<<<< HEAD
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
=======
                x: [0, 100, 0];
                y: [0, -100, 0];
                opacity: [0.3, 0.8, 0.3]}}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.3}}
              style={{
                left: `${Math.random() * 100}%`,
<<<<<<< HEAD
                top: `${Math.random() * 100}%`,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
<<<<<<< HEAD
                top: `${Math.random() * 100}%`,
              }}            />
          ))}
        </div>

        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>          <motion.div
=======
                top: `${Math.random() * 100}%`}}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                top: `${Math.random() * 100}%`}}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            />
          ))}
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
=======
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6'
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6'
=======
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            >
              <Sparkles className='w-4 h-4 mr-2' />
              Revolutionary AI Technology
            </motion.div>

            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent'>
                AI Consciousness
              </span>
              <br />
              <span className='text-white'>Evolution Platform</span>
            </h1>

            <p className='text-xl sm:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Experience the future of personal development with our
              revolutionary AI-powered consciousness evolution platform. Enhance
              your emotional intelligence, expand self-awareness, and unlock
              your full potential.
            </p>

            {/* Key Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
              {[
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                {
                  label: 'Success Rate',
                  value: '94%',
                  icon: <Award className='w-8 h-8' />,
                },
                {
                  label: 'Active Users',
                  value: '12.5K+',
                  icon: <Users className='w-8 h-8' />,
                },
                {
                  label: 'Improvement',
                  value: '300%',
                  icon: <TrendingUp className='w-8 h-8' />,
                },
                {
                  label: 'Satisfaction',
                  value: '4.9/5',
                  icon: <Star className='w-8 h-8' />,
<<<<<<< HEAD
                },              ].map((stat, index) => (
=======
                },
=======
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary AI Technology
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                AI Consciousness
              </span>
              <br />
              <span className="text-white">Evolution Platform</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of personal development with our revolutionary AI-powered consciousness evolution platform. 
              Enhance your emotional intelligence, expand self-awareness, and unlock your full potential.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                { label: 'Success Rate', value: '94%', icon: <Award className="w-8 h-8" /> },
                { label: 'Active Users', value: '12.5K+', icon: <Users className="w-8 h-8" /> },
                { label: 'Improvement', value: '300%', icon: <TrendingUp className="w-8 h-8" /> },
                { label: 'Satisfaction', value: '4.9/5', icon: <Star className="w-8 h-8" /> }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              ].map((stat, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
<<<<<<< HEAD
                  className='text-center'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  className='text-center'
=======
                  className="text-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                >
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-3 text-purple-400'>
                    {stat.icon}
                  </div>
<<<<<<< HEAD
                  <div className='text-3xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-purple-300'>{stat.label}</div>                </motion.div>
=======
<<<<<<< HEAD
                  <div className='text-3xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-purple-300'>{stat.label}</div>
=======
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-3 text-purple-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-purple-300">{stat.label}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-purple-300">{stat.label}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </motion.div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              ))}
            </div>

            {/* CTA Buttons */}
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105'              >
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
=======
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105'
=======
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                Start Free Trial
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
<<<<<<< HEAD
                className='border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200'              >
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200'
=======
                className="border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
<<<<<<< HEAD
      <section className='py-20 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
=======
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='text-center mb-16'
=======
<<<<<<< HEAD
<<<<<<< HEAD
            className='text-center mb-16'
=======
            className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Revolutionary Features for
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                {' '}
                Consciousness Evolution
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our AI-powered platform combines cutting-edge technology with
              ancient wisdom to create the most advanced consciousness
              development experience ever created.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {features.map((feature, index) => (
=======
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary Features for
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Consciousness Evolution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with ancient wisdom to create 
              the most advanced consciousness development experience ever created.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {features.map((feature, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className='group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300'
=======
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div className='w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Brain className='w-8 h-8 text-purple-400' />
                </div>
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200'>
                  {feature}
                </h3>
<<<<<<< HEAD
                <p className='text-gray-400'>
                  Advanced AI algorithms guide you through personalized
                  consciousness development exercises.                </p>
=======
<<<<<<< HEAD
                <p className='text-gray-400'>
                  Advanced AI algorithms guide you through personalized
                  consciousness development exercises.
=======
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200">
                  {feature}
                </h3>
                <p className="text-gray-400">
                  Advanced AI algorithms guide you through personalized consciousness development exercises.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <p className="text-gray-400">
                  Advanced AI algorithms guide you through personalized consciousness development exercises.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-b from-black to-purple-900/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-b from-black to-purple-900/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
=======
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='text-center mb-16'
=======
<<<<<<< HEAD
<<<<<<< HEAD
            className='text-center mb-16'
=======
            className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              How AI Consciousness Evolution
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                {' '}
                Works
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our revolutionary platform uses advanced AI to create personalized
              consciousness development experiences that adapt to your unique
              journey.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {[
              {
                step: '01',
                title: 'AI Assessment',
=======
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              How AI Consciousness Evolution
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary platform uses advanced AI to create personalized consciousness development 
              experiences that adapt to your unique journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {[
              {
                step: '01',
                title: 'AI Assessment',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                description:
                  'Our AI analyzes your current consciousness level and creates a personalized development plan.',
                icon: <Brain className='w-12 h-12' />,
              },
<<<<<<< HEAD
=======
=======
                description: 'Our AI analyzes your current consciousness level and creates a personalized development plan.',
                icon: <Brain className="w-12 h-12" />
              };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {
                step: '02',
                title: 'Personalized Training',
                description:
                  'AI-generated exercises and experiences tailored to your specific needs and goals.',
                icon: <Target className='w-12 h-12' />,
              },
              {
                step: '03',
                title: 'Continuous Evolution',
<<<<<<< HEAD
                description:
                  'Real-time feedback and adaptation ensure continuous growth and development.',
                icon: <TrendingUp className='w-12 h-12' />,
              },            ].map((step, index) => (
=======
<<<<<<< HEAD
                description:
                  'Real-time feedback and adaptation ensure continuous growth and development.',
                icon: <TrendingUp className='w-12 h-12' />,
              },
=======
                description: 'Our AI analyzes your current consciousness level and creates a personalized development plan.',
                icon: <Brain className="w-12 h-12" />
              };
              {
                step: '02',
                title: 'Personalized Training',
                description: 'AI-generated exercises and experiences tailored to your specific needs and goals.',
                icon: <Target className="w-12 h-12" />
              };
              {
                step: '03',
                title: 'Continuous Evolution',
                description: 'Real-time feedback and adaptation ensure continuous growth and development.',
                icon: <TrendingUp className="w-12 h-12" />
              }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                description: 'Real-time feedback and adaptation ensure continuous growth and development.',
                icon: <TrendingUp className="w-12 h-12" />
              }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            ].map((step, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className='text-center'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='text-center'
=======
                className="text-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div className='relative mb-8'>
                  <div className='w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <div className='text-white font-bold text-2xl'>
                      {step.step}
                    </div>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-xl opacity-30'></div>
                </div>
                <div className='w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-400'>
                  {step.icon}
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <h3 className='text-2xl font-bold text-white mb-4'>
                  {step.title}
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  {step.description}
<<<<<<< HEAD
                </p>              </motion.div>
=======
                </p>
=======
                className="text-center"
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white font-bold text-2xl">{step.step}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-xl opacity-30"></div>
                </div>
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-400">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </motion.div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
<<<<<<< HEAD
      <section className='py-20 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
=======
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='text-center mb-16'
=======
<<<<<<< HEAD
<<<<<<< HEAD
            className='text-center mb-16'
=======
            className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Transform Your Life with
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                {' '}
                AI Consciousness
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              From personal development to professional growth, our platform
              serves diverse needs across multiple domains.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {useCases.map((useCase, index) => (
=======
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Life with
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Consciousness</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From personal development to professional growth, our platform serves diverse needs 
              across multiple domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {useCases.map((useCase, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <motion.div
                key={useCase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className='group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300'
=======
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div className='w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Lightbulb className='w-8 h-8 text-purple-400' />
                </div>
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200'>
                  {useCase}
                </h3>
<<<<<<< HEAD
                <p className='text-gray-400'>
                  Leverage AI-powered consciousness development for enhanced
                  personal and professional growth.                </p>
=======
<<<<<<< HEAD
                <p className='text-gray-400'>
                  Leverage AI-powered consciousness development for enhanced
                  personal and professional growth.
=======
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200">
                  {useCase}
                </h3>
                <p className="text-gray-400">
                  Leverage AI-powered consciousness development for enhanced personal and professional growth.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <p className="text-gray-400">
                  Leverage AI-powered consciousness development for enhanced personal and professional growth.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-b from-black to-purple-900/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-b from-black to-purple-900/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
=======
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='text-center mb-16'
=======
<<<<<<< HEAD
<<<<<<< HEAD
            className='text-center mb-16'
=======
            className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Cutting-Edge
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                {' '}
                Technology
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our platform leverages the latest advancements in AI, machine
              learning, and consciousness research to deliver unprecedented
              results.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>            {technology.map((tech, index) => (
=======
<<<<<<< HEAD
          <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages the latest advancements in AI, machine learning, and consciousness research 
              to deliver unprecedented results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {technology.map((tech, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className='text-center group'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='text-center group'
=======
                className="text-center group"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div className='w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300'>
                  <Cpu className='w-10 h-10 text-purple-400' />
                </div>
<<<<<<< HEAD
                <p className='text-sm text-gray-300 font-medium'>{tech}</p>              </motion.div>
=======
<<<<<<< HEAD
                <p className='text-sm text-gray-300 font-medium'>{tech}</p>
=======
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-10 h-10 text-purple-400" />
                </div>
                <p className="text-sm text-gray-300 font-medium">{tech}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <p className="text-sm text-gray-300 font-medium">{tech}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </motion.div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
<<<<<<< HEAD
      <section className='py-20 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
=======
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='text-center mb-16'
=======
<<<<<<< HEAD
<<<<<<< HEAD
            className='text-center mb-16'
=======
            className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              What Our Users
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                {' '}
                Say
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Join thousands of satisfied users who have transformed their lives
              with our AI consciousness platform.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {testimonials.map((testimonial, index) => (
=======
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Users
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied users who have transformed their lives with our AI consciousness platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {testimonials.map((testimonial, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className='bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6'
=======
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div className='flex items-center mb-4'>
                  <div className='text-3xl mr-3'>{testimonial.avatar}</div>
                  <div>
                    <h4 className='text-lg font-bold text-white'>
                      {testimonial.name}
                    </h4>
                    <p className='text-sm text-purple-300'>
                      {testimonial.role}
                    </p>
                    <p className='text-xs text-gray-400'>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className='flex items-center mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-5 h-5 text-yellow-400 fill-current'
                    />
                  ))}
                </div>
<<<<<<< HEAD
                <p className='text-gray-300 italic'>"{testimonial.content}"</p>              </motion.div>
=======
<<<<<<< HEAD
                <p className='text-gray-300 italic'>"{testimonial.content}"</p>
=======
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-purple-300">{testimonial.role}</p>
                    <p className="text-xs text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </motion.div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-b from-black to-purple-900/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-b from-black to-purple-900/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
=======
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='text-center mb-16'
=======
<<<<<<< HEAD
<<<<<<< HEAD
            className='text-center mb-16'
=======
            className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Choose Your
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                {' '}
                Evolution Path
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Flexible pricing options designed to make consciousness evolution
              accessible to everyone.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {[
=======
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Evolution Path</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to make consciousness evolution accessible to everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {[
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {
                name: 'Starter',
                price: '$99',
                period: '/month',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                description:
                  'Perfect for individuals beginning their consciousness journey',
                features: [
                  'Basic AI assessment',
                  '10 consciousness exercises',
                  'Progress tracking',
                  'Email support',
                  'Mobile app access',
                ],
                popular: false,
<<<<<<< HEAD
              },              {
                name: 'Professional',
                price: '$299',
                period: '/month',
=======
              },
=======
                description: 'Perfect for individuals beginning their consciousness journey',
                features: [
=======
                description: 'Perfect for individuals beginning their consciousness journey',
                features: [
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  'Basic AI assessment10 consciousness exercisesProgress trackingEmail supportMobile app access'
                ];
                popular: false
              };
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {
                name: 'Professional',
                price: '$299',
                period: '/month',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                description:
                  'Advanced features for serious consciousness development',
                features: [
                  'Advanced AI assessment',
                  'Unlimited exercises',
                  'Personalized coaching',
                  'Priority support',
                  'Advanced analytics',
                  'Integration with wearables',
                  'Group sessions',
                ],
                popular: true,
<<<<<<< HEAD
              },              {
=======
              },
=======
                description: 'Advanced features for serious consciousness development',
                features: [
=======
                description: 'Advanced features for serious consciousness development',
                features: [
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  'Advanced AI assessmentUnlimited exercisesPersonalized coachingPriority supportAdvanced analyticsIntegration with wearablesGroup sessions'
                ];
                popular: true
              };
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                name: 'Enterprise',
                price: '$799',
                period: '/month',
                description: 'Complete solution for organizations and teams',
                features: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  'Everything in Professional',
                  'Team management',
                  'Custom integrations',
                  'Dedicated support',
                  'White-label options',
                  'Advanced reporting',
                  'API access',
                ],
                popular: false,
<<<<<<< HEAD
              },            ].map((plan, index) => (
=======
              },
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  'Everything in ProfessionalTeam managementCustom integrationsDedicated supportWhite-label optionsAdvanced reportingAPI access'
                ];
                popular: false
              }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            ].map((plan, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border rounded-2xl p-8 ${
<<<<<<< HEAD
                  plan.popular
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'                    : 'border-purple-500/20'
                }`}
              >
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold'>                      Most Popular
                    </span>
                  </div>
                )}
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  plan.popular
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'
=======
                  plan.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  plan.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    : 'border-purple-500/20'
                }`}
              >
                {plan.popular && (
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold'>
=======
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      Most Popular
                    </span>
                  </div>
                )}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {plan.name}
                  </h3>
                  <div className='mb-4'>
                    <span className='text-4xl font-bold text-purple-400'>
                      {plan.price}
                    </span>
                    <span className='text-gray-400'>{plan.period}</span>
<<<<<<< HEAD
=======
=======
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                  <p className='text-gray-300'>{plan.description}</p>
                </div>

                <ul className='space-y-3 mb-8'>
                  {plan.features.map((feature, featureIndex) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <li
                      key={featureIndex}
                      className='flex items-center text-gray-300'
                    >
<<<<<<< HEAD
                      <CheckCircle className='w-5 h-5 text-purple-400 mr-3 flex-shrink-0' />                      {feature}
=======
                      <CheckCircle className='w-5 h-5 text-purple-400 mr-3 flex-shrink-0' />
=======
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      {feature}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </li>
                  ))}
                </ul>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <button
                  className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 hover:scale-105'
                      : 'border border-purple-500/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white'
                  }`}
<<<<<<< HEAD
                >                  Get Started
=======
                >
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 hover:scale-105'
                    : 'border border-purple-500/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white'
                }`}>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Get Started
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-purple-500/20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-purple-500/20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
=======
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <h2 className='text-4xl font-bold text-white mb-6'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className='text-4xl font-bold text-white mb-6'>
=======
            <h2 className="text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Ready to Evolve Your
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                {' '}
                Consciousness?
              </span>
            </h2>
            <p className='text-xl text-purple-200 mb-8'>
              Join thousands of users who have already transformed their lives
              with our revolutionary AI platform. Start your consciousness
              evolution journey today.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <button className='bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105'>
                Start Free Trial
              </button>
<<<<<<< HEAD
              <button className='border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200'>                Schedule Demo
=======
<<<<<<< HEAD
              <button className='border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200'>
=======
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Evolve Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Consciousness?</span>
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Join thousands of users who have already transformed their lives with our revolutionary AI platform. 
              Start your consciousness evolution journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <button className="border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Schedule Demo
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </button>
            </div>

            {/* Contact Info */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
              {[
                {
                  icon: <Phone className='w-6 h-6' />,
                  label: 'Call Us',
                  value: contactInfo.mobile,
                },
                {
                  icon: <Mail className='w-6 h-6' />,
                  label: 'Email Us',
                  value: contactInfo.email,
                },
                {
                  icon: <MapPin className='w-6 h-6' />,
                  label: 'Visit Us',
                  value: contactInfo.address,
<<<<<<< HEAD
                },              ].map((contact, index) => (
=======
                },
=======
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Phone className="w-6 h-6" />, label: 'Call Us', value: contactInfo.mobile },
                { icon: <Mail className="w-6 h-6" />, label: 'Email Us', value: contactInfo.email },
                { icon: <MapPin className="w-6 h-6" />, label: 'Visit Us', value: contactInfo.address }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Phone className="w-6 h-6" />, label: 'Call Us', value: contactInfo.mobile },
                { icon: <Mail className="w-6 h-6" />, label: 'Email Us', value: contactInfo.email },
                { icon: <MapPin className="w-6 h-6" />, label: 'Visit Us', value: contactInfo.address }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              ].map((contact, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
                  className='text-center'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  className='text-center'
=======
                  className="text-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                >
                  <div className='inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-3 text-purple-400'>
                    {contact.icon}
                  </div>
<<<<<<< HEAD
                  <div className='text-sm text-purple-300 mb-1'>
                    {contact.label}
                  </div>
                  <div className='text-white font-medium'>{contact.value}</div>                </motion.div>
=======
<<<<<<< HEAD
                  <div className='text-sm text-purple-300 mb-1'>
                    {contact.label}
                  </div>
                  <div className='text-white font-medium'>{contact.value}</div>
=======
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-3 text-purple-400">
                    {contact.icon}
                  </div>
                  <div className="text-sm text-purple-300 mb-1">{contact.label}</div>
                  <div className="text-white font-medium">{contact.value}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="text-sm text-purple-300 mb-1">{contact.label}</div>
                  <div className="text-white font-medium">{contact.value}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </motion.div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
