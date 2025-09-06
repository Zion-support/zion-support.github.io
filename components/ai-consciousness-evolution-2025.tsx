
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import Head from 'next / head';
import Layout from '../components / layout / Layout';
import { motion } from 'framer-motion';

import {
  Brain
  Star
  Users
  TrendingUp
  Zap
  Shield
  CheckCircle
  Clock
  Award
  Target
  Globe
  Sparkles
  Cpu
  Lock
  Cloud
  BarChart3
  Eye
  Heart
  Lightbulb
  ArrowRight
  Phone
  Mail
  MapPin
  Globe as GlobeIcon;} from 'lucide-react';import {
  Brain, Star, Users, TrendingUp, Zap, Shield
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
  MapPin,;
  Globe as GlobeIcon,;} from 'lucide-react';import { 
  Brain, Star, Users, TrendingUp, Zap, Shield, ;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  CheckCircle, Clock, Award, Target, Globe, Sparkles;
  Cpu, Lock, Cloud, BarChart3, Eye, Heart, Lightbulb;
  ArrowRight, Phone, Mail, MapPin, Globe as GlobeIcon
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  website: 'https://ziontechgroup.com'
}
const features = [
  'Emotional intelligence training modules'
  'Consciousness expansion exercises'
  'Self-awareness development tools'
  'Empathy and compassion training'
  'Mindfulness and meditation guidance'
  'Cognitive enhancement techniques'
  'Social intelligence development'
  'Creative consciousness exploration'
  'Spiritual growth pathways'
  'Personal transformation tracking'
];
const useCases = [
  'Personal development and growth'
  'Professional leadership training'
  'Therapeutic and healing practices'
  'Educational enhancement'
  'Corporate wellness programs'
  'Mental health support'
  'Spiritual development'
  'Creative arts enhancement'
  'Relationship improvement'
  'Stress management and resilience'
];
const technology = [
  'Advanced AI algorithms'
  'Machine learning models'
  'Natural language processing'
  'Emotional recognition systems'
  'Biometric feedback integration'
  'Virtual reality experiences'
  'Augmented reality overlays'
  'Brain-computer interfaces'
  'Quantum computing integration'
  'Blockchain security'
];
const integrations = [
  'Wearable devices'
  'Mobile applications'
  'Web platforms'
  'Smart home systems'
  'Healthcare platforms'
  'Educational systems'
  'Corporate wellness platforms'
  'Social media networks'
  'Fitness trackers'
  'Meditation apps',];}
const features = [

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
  Globe as GlobeIcon,} from 'lucide-react';import {
  Brain, Star, Users, TrendingUp, Zap, Shield,
  CheckCircle, Clock, Award, Target, Globe, Sparkles;
  Cpu, Lock, Cloud, BarChart3, Eye, Heart, Lightbulb;
  ArrowRight, Phone, Mail, MapPin, Globe as GlobeIcon;
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
;
const features = [;
  'Emotional intelligence training modules',
  'Consciousness expansion exercises',
  'Self - awareness development tools',
  'Empathy and compassion training',
  'Mindfulness and meditation guidance',
  'Cognitive enhancement techniques',
  'Social intelligence development',
  'Creative consciousness exploration',
  'Spiritual growth pathways',
  'Personal transformation tracking',
];
          ))}
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}>;
            {/* Badge */}
=======
            <motion&& motion.div
              initial={{ opacity: 0, scale: 0 && 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6'

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
                {
                  label: 'Success Rate'
                  value: '94%'
                  icon: <Award className='w-8 h-8' />
                }
                {
                  label: 'Active Users'
                  value: '12.5K+'
                  icon: <Users className='w-8 h-8' />
                }
                {
                  label: 'Improvement'
                  value: '300%'
                  icon: <TrendingUp className='w-8 h-8' />
                }
                {
                  label: 'Satisfaction'
                  value: '4.9/5'
                  icon: <Star className='w-8 h-8' />
                },              ].map((stat, index) => (                { label: 'Success Rate', value: '94%', icon: <Award className="w-8 h-8" /> }
                { label: 'Active Users', value: '12.5K+', icon: <Users className="w-8 h-8" /> }
                { label: 'Improvement', value: '300%', icon: <TrendingUp className="w-8 h-8" /> }
                { label: 'Satisfaction', value: '4.9/5', icon: <Star className="w-8 h-8" /> }

                <motion.div
                  key={stat.label}
              <Sparkles className='w-4 h-4 mr-2' />;
              Revolutionary AI Technology;
            </motion && motion.div>;
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent'>;
                AI Consciousness;
              </span>;
              <br />;
              <span className='text-white'>Evolution Platform</span>;
            </h1>;
            <p className='text-xl sm:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed'>;
              Experience the future of personal development with our;
              revolutionary AI-powered consciousness evolution platform. Enhance;
              your emotional intelligence, expand self-awareness, and unlock;
              your full potential.;
            </p>;
            {/* Key Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>;
              {[;
                {;
                  label: 'Success Rate',;
                  value: '94%',;
                  icon: <Award className='w-8 h-8' />,;
                },;
                {;
                  label: 'Active Users',;
                  value: '12 && 12.5K+',;
                  icon: <Users className='w-8 h-8' />,;
                },;
                {;
                  label: 'Improvement',;
                  value: '300%',;
                  icon: <TrendingUp className='w-8 h-8' />,;
                },;
                {;
                  label: 'Satisfaction',;
                  value: '4 && 4.9/5',;
                  icon: <Star className='w-8 h-8' />,;
                },              ].map((stat, index) => (                { label: 'Success Rate', value: '94%', icon: <Award className="w-8 h-8" /> },;
                { label: 'Active Users', value: '12 && 12.5K+', icon: <Users className="w-8 h-8" /> },;
                { label: 'Improvement', value: '300%', icon: <TrendingUp className="w-8 h-8" /> },;
                { label: 'Satisfaction', value: '4 && 4.9/5', icon: <Star className="w-8 h-8" /> }
                <motion&& motion.div
                  key={stat && stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                >
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-3 text-purple-400'>
                    {stat.icon}
                  </div>
                  <div className='text-3xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105'              >            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* CTA Buttons */}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}

              >
                Start Free Trial
              </motion.button>
              <motion.button
label: 'Success Rate',
                  value: '94%',
                  icon: <Award className='w - 8 h - 8' />,
                },
                {
                  label: 'Active Users',
                  value: '12.5K+',
                  icon: <Users className='w - 8 h - 8' />,
                },
                {
                  label: 'Improvement',
                  value: '300%',
                  icon: <TrendingUp className='w - 8 h - 8' />,
                },
                {
                  label: 'Satisfaction',
                  value: '4.9 / 5',
                  icon: <Star className='w - 8 h - 8' />,
                },              ].map ((stat, index) => (                { label: 'Success Rate', value: '94%', icon: <Award className="w - 8 h - 8" /> },
                { label: 'Active Users', value: '12.5K+', icon: <Users className="w - 8 h - 8" /> },
                { label: 'Improvement', value: '300%', icon: <TrendingUp className="w - 8 h - 8" /> },
                { label: 'Satisfaction', value: '4.9 / 5', icon: <Star className="w - 8 h - 8" /> }
                <motion.div;
                  key={stat.label}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className='text - center';
                >;
                  <div className='inline - flex items - center justify - center w - 16 h - 16 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full mb - 3 text - purple - 400'>;
                    {stat.icon}
                  </div>;
                  <div className='text - 3xl font - bold text - white mb - 1'>;
                    {stat.value}
                  </div>;
                  <div className='text - sm text - purple - 300'>{stat.label}</div>                </motion.div>                >;
                  <div className="inline - flex items - center justify - center w - 16 h - 16 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full mb - 3 text - purple - 400">;
                    {stat.icon}
                  </div>;
                  <div className="text - 3xl font - bold text - white mb - 1">{stat.value}</div>;
                  <div className="text - sm text - purple - 300">{stat.label}</div>;
                </motion.div>))}
            </div>;
            {/* CTA Buttons */}
            <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6'>              <motion.button;
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}

              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.6 }}
                className='bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105'                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">;
                Start Free Trial;
              </motion && motion.button>;
              <motion&& motion.button
                initial={{ opacity: 0, scale: 0 && 0.9 }}
                animate={{ opacity: 1, scale: 1 }}


      {/* Features Section */}
      <section className='py-20 bg-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section className="py-20 bg-black">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'

=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Revolutionary Features for
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {features.map((feature, index) => (          >

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
            {features.map((feature, index) => (
              <motion.div
                Consciousness Evolution;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Our AI-powered platform combines cutting-edge technology with;
              ancient wisdom to create the most advanced consciousness;
              development experience ever created.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {features && features.map((feature, index) => (          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Revolutionary Features for;
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Consciousness Evolution</span>;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI-powered platform combines cutting-edge technology with ancient wisdom to create ;
              the most advanced consciousness development experience ever created.;
            </p>;
          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features && features.map((feature, index) => (;
              <motion&& motion.div


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className='group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300'

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              >
                <div className='w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Brain className='w-8 h-8 text-purple-400' />
                </div>
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200'>
                  {feature}
                </h3>
                <p className='text-gray-400'>
                  Advanced AI algorithms guide you through personalized

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      {/* How It Works Section */}
      <section className='py-20 bg-gradient-to-b from-black to-purple-900/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div


      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              How AI Consciousness Evolution
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {[
              {
                step: '01'
                title: 'AI Assessment',          >

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
            {[

                description:
                  'Our AI analyzes your current consciousness level and creates a personalized development plan.'
                icon: <Brain className='w-12 h-12' />
              }
              {
                step: '02'
                title: 'Personalized Training'
                description:
                  'AI-generated exercises and experiences tailored to your specific needs and goals.'
                icon: <Target className='w-12 h-12' />
              }
              {
                step: '03'
                title: 'Continuous Evolution'
                description:
                  'Real-time feedback and adaptation ensure continuous growth and development.'
                icon: <TrendingUp className='w-12 h-12' />
              },            ].map((step, index) => (              {

              {
                step: '03'
                title: 'Continuous Evolution'
                description: 'Real-time feedback and adaptation ensure continuous growth and development.'
                icon: <TrendingUp className="w-12 h-12" />
              }

            ].map((step, index) => (
              <motion.div
                key={step.step}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                description:
                  'Our AI analyzes your current consciousness level and creates a personalized development plan.'
                icon: <Brain className='w-12 h-12' />
              }
              {
                step: '02'
                title: 'Personalized Training'
                description:
                  'AI-generated exercises and experiences tailored to your specific needs and goals.'
                icon: <Target className='w-12 h-12' />
              }
              {
                step: '03'
                title: 'Continuous Evolution'
                description:
                  'Real-time feedback and adaptation ensure continuous growth and development.'
                icon: <TrendingUp className='w-12 h-12' />
              },            ].map((step, index) => (              {
                step: '02'
                title: 'Personalized Training'
                description: 'AI-generated exercises and experiences tailored to your specific needs and goals.'
                icon: <Target className="w-12 h-12" />
              }
              {
                step: '03'
                title: 'Continuous Evolution'
                description: 'Real-time feedback and adaptation ensure continuous growth and development.'
                icon: <TrendingUp className="w-12 h-12" />
              }
=======
                step: '01',
                title: 'AI Assessment',

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                viewport={{ once: true }}
                className='group bg - gradient - to - br from - gray - 900 / 50 to - black / 50 backdrop - blur - lg border border - purple - 500 / 20 rounded - 2xl p - 6 hover:border - purple - 400 / 40 hover:shadow - 2xl hover:shadow - purple - 500 / 20 transition - all duration - 300';
              >;
                <div className='w - 16 h - 16 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - xl flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300'>;
                  <Brain className='w - 8 h - 8 text - purple - 400' />;
                </div>;
                <h3 className='text - xl font - bold text - white mb - 3 group - hover:text - purple - 300 transition - colors duration - 200'>;
                  {feature}
                </h3>;
                <p className='text - gray - 400'>;
                  Advanced AI algorithms guide you through personalized;
                  consciousness development exercises.                </p>              >;
                <div className="w - 16 h - 16 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - xl flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300">;
                  <Brain className="w - 8 h - 8 text - purple - 400" />;
                </div>;
                <h3 className="text - xl font - bold text - white mb - 3 group - hover:text - purple - 300 transition - colors duration - 200">;
                  {feature}
                </h3>;
                <p className="text - gray - 400">;
                  Advanced AI algorithms guide you through personalized consciousness development exercises.;
                </p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* How It Works Section */}
      <section className='py - 20 bg - gradient - to - b from - black to - purple - 900 / 20'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section className="py - 20 bg - gradient - to - b from - black to - purple - 900 / 20">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              How AI Consciousness Evolution;
              <span className='bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                {' '}
                Works;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Our revolutionary platform uses advanced AI to create personalized;
              consciousness development experiences that adapt to your unique;
              journey.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            {[;
              {
                step: '01'
                title: 'AI Assessment'
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
                <h3 className='text-2xl font-bold text-white mb-4'>
                  {step.title}
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  {step.description}

            ))}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            ))}
          </div>
        </div>
      </section>

=======
          </div>;
        </div>;
      </section>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      {/* Use Cases Section */}
      <section className='py-20 bg-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section className="py-20 bg-black">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div


      {/* Use Cases Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Transform Your Life with
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {' '}
                AI Consciousness
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              From personal development to professional growth, our platform
              serves diverse needs across multiple domains.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {useCases.map((useCase, index) => (          >

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
            {useCases.map((useCase, index) => (
              <motion.div
                AI Consciousness;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              From personal development to professional growth, our platform;
              serves diverse needs across multiple domains.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {useCases && useCases.map((useCase, index) => (          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Transform Your Life with;
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Consciousness</span>;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              From personal development to professional growth, our platform serves diverse needs ;
              across multiple domains.;
            </p>;
          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {useCases && useCases.map((useCase, index) => (;
              <motion&& motion.div


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                key={useCase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className='group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300'

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              >
                <div className='w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Lightbulb className='w-8 h-8 text-purple-400' />
                </div>
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200'>
                  {useCase}
                </h3>
                <p className='text-gray-400'>
                  Leverage AI-powered consciousness development for enhanced

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      {/* Technology Section */}
      <section className='py-20 bg-gradient-to-b from-black to-purple-900/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div


      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Cutting-Edge
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
          <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>            {technology.map((tech, index) => (          >

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
            {technology.map((tech, index) => (
              <motion.div

                Technology;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='text - center';
              >;
                <div className='relative mb - 8'>;
                  <div className='w - 24 h - 24 bg - gradient - to - r from - purple - 500 to - pink - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                    <div className='text - white font - bold text - 2xl'>;
                      {step.step}
                    </div>;
                  </div>;
                  <div className='absolute inset - 0 bg - gradient - to - r from - purple - 500 to - pink - 600 rounded - full blur - xl opacity - 30'></div>;
                </div>;
                <div className='w - 20 h - 20 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4 text - purple - 400'>;
                  {step.icon}
                </div>;
                <h3 className='text - 2xl font - bold text - white mb - 4'>;
                  {step.title}
                </h3>;
                <p className='text - gray - 300 leading - relaxed'>;
                  {step.description}
                </p>              </motion.div>              >;
                <div className="relative mb - 8">;
                  <div className="w - 24 h - 24 bg - gradient - to - r from - purple - 500 to - pink - 600 rounded - full flex items - center justify - center mx - auto mb - 4">;
                    <div className="text - white font - bold text - 2xl">{step.step}</div>;
                  </div>;
                  <div className="absolute inset - 0 bg - gradient - to - r from - purple - 500 to - pink - 600 rounded - full blur - xl opacity - 30"></div>;
                </div>;
                <div className="w - 20 h - 20 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4 text - purple - 400">;
                  {step.icon}
                </div>;
                <h3 className="text - 2xl font - bold text - white mb - 4">{step.title}</h3>;
                <p className="text - gray - 300 leading - relaxed">{step.description}</p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Use Cases Section */}
      <section className='py - 20 bg - black'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section className="py - 20 bg - black">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Transform Your Life with;
              <span className='bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                {' '}
                AI Consciousness;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              From personal development to professional growth, our platform;
              serves diverse needs across multiple domains.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {use_cases.map ((use_case, index) => (          >;
            <h2 className="text - 4xl font - bold text - white mb - 6">;
              Transform Your Life with;
              <span className="bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent"> AI Consciousness</span>;
            </h2>;
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
              From personal development to professional growth, our platform serves diverse needs;
              across multiple domains.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {use_cases.map ((use_case, index) => (
              <motion.div;
                key={use_case}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group bg - gradient - to - br from - gray - 900 / 50 to - black / 50 backdrop - blur - lg border border - purple - 500 / 20 rounded - 2xl p - 6 hover:border - purple - 400 / 40 hover:shadow - xl hover:shadow - purple - 500 / 20 transition - all duration - 300';
              >;
                <div className='w - 16 h - 16 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - xl flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300'>;
                  <Lightbulb className='w - 8 h - 8 text - purple - 400' />;
                </div>;
                <h3 className='text - xl font - bold text - white mb - 3 group - hover:text - purple - 300 transition - colors duration - 200'>;
                  {use_case}
                </h3>;
                <p className='text - gray - 400'>;
                  Leverage AI - powered consciousness development for enhanced;
                  personal and professional growth.                </p>              >;
                <div className="w - 16 h - 16 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - xl flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300">;
                  <Lightbulb className="w - 8 h - 8 text - purple - 400" />;
                </div>;
                <h3 className="text - xl font - bold text - white mb - 3 group - hover:text - purple - 300 transition - colors duration - 200">;
                  {use_case}
                </h3>;
                <p className="text - gray - 400">;
                  Leverage AI - powered consciousness development for enhanced personal and professional growth.;
                </p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Technology Section */}
      <section className='py - 20 bg - gradient - to - b from - black to - purple - 900 / 20'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section className="py - 20 bg - gradient - to - b from - black to - purple - 900 / 20">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Cutting - Edge;
              <span className='bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                {' '}
                Technology;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;

              Our platform leverages the latest advancements in AI, machine;
              learning, and consciousness research to deliver unprecedented;
              results.;
            </p>;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                key={tech}
                initial={{ opacity: 0, scale: 0 && 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className='text-center group'>;
                <div className='w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300'>;
                  <Cpu className='w-10 h-10 text-purple-400' />;
                </div>;
                <p className='text-sm text-gray-300 font-medium'>{tech}</p>              </motion && motion.div>              >;
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">;
                  <Cpu className="w-10 h-10 text-purple-400" />;
                </div>;
                <p className="text-sm text-gray-300 font-medium">{tech}</p>;
              </motion && motion.div>;

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-10 h-10 text-purple-400" />
                </div>
                <p className="text-sm text-gray-300 font-medium">{tech}</p>
              </motion.div>

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            ))}
          </div>
        </div>
      </section>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      {/* Testimonials Section */}
      <section className='py-20 bg-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section className="py-20 bg-black">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div


              >
                <div className='w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300'>
                  <Cpu className='w-10 h-10 text-purple-400' />
                </div>
                <p className='text-sm text-gray-300 font-medium'>{tech}</p>              </motion.div>              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-10 h-10 text-purple-400" />
                </div>
                <p className="text-sm text-gray-300 font-medium">{tech}</p>
              </motion.div>

            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              What Our Users
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {' '}
                Say
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Join thousands of satisfied users who have transformed their lives
              with our AI consciousness platform.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {testimonials.map((testimonial, index) => (          >

            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Users
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied users who have transformed their lives with our AI consciousness platform.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                Say;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Join thousands of satisfied users who have transformed their lives;
              with our AI consciousness platform.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {testimonials && testimonials.map((testimonial, index) => (          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              What Our Users;
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Say</span>;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Join thousands of satisfied users who have transformed their lives with our AI consciousness platform.;
            </p>;
          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {testimonials && testimonials.map((testimonial, index) => (;
              <motion&& motion.div
                key={testimonial && testimonial.name}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.2 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6'

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    <Star
                      key={i}
                      className='w-5 h-5 text-yellow-400 fill-current'
                    />
                  ))}
                </div>

            ))}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            ))}
          </div>
        </div>
      </section>

=======
          </div>;
        </div>;
      </section>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      {/* Pricing Section */}
      <section className='py-20 bg-gradient-to-b from-black to-purple-900/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div

=======
          </div>
        </div>
      </section>
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Choose Your
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {' '}
                Evolution Path
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Flexible pricing options designed to make consciousness evolution
              accessible to everyone.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {[          >

            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Evolution Path</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to make consciousness evolution accessible to everyone.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {

                Evolution Path;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Flexible pricing options designed to make consciousness evolution;
              accessible to everyone.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {[          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Choose Your;
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Evolution Path</span>;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Flexible pricing options designed to make consciousness evolution accessible to everyone.;
            </p>;
          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {[;
              {;
                name: 'Starter',;
                price: '$99',;
                period: '/month',;
                description:;
                  'Perfect for individuals beginning their consciousness journey',;
                features: [;
                  'Basic AI assessment',;
                  '10 consciousness exercises',;
                  'Progress tracking',;
                  'Email support',;
                  'Mobile app access',;
                ],;
                popular: false,;
              },              {;
                name: 'Professional',;
                price: '$299',;
                period: '/month',                  'Basic AI assessment10 consciousness exercisesProgress trackingEmail supportMobile app access';
                ];
=======

                description:
                  'Advanced features for serious consciousness development'

                features: [
                  'Basic AI assessment10 consciousness exercisesProgress trackingEmail supportMobile app access'
];
                popular: false
              };
              {
                name: 'Professional',
                price: '$299',
                period: '/month',
                description: 'Advanced features for serious consciousness development',
                features: [
                  'Advanced AI assessmentUnlimited exercisesPersonalized coachingPriority supportAdvanced analyticsIntegration with wearablesGroup sessions'
];
                popular: true
              };
              {
                className='text - center group';
              >;
                <div className='w - 20 h - 20 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - xl flex items - center justify - center mx - auto mb - 3 group - hover:scale - 110 transition - transform duration - 300'>;
                  <Cpu className='w - 10 h - 10 text - purple - 400' />;
                </div>;
                <p className='text - sm text - gray - 300 font - medium'>{tech}</p>              </motion.div>              >;
                <div className="w - 20 h - 20 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - xl flex items - center justify - center mx - auto mb - 3 group - hover:scale - 110 transition - transform duration - 300">;
                  <Cpu className="w - 10 h - 10 text - purple - 400" />;
                </div>;
                <p className="text - sm text - gray - 300 font - medium">{tech}</p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Testimonials Section */}
      <section className='py - 20 bg - black'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section className="py - 20 bg - black">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              What Our Users;
              <span className='bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                {' '}
                Say;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Join thousands of satisfied users who have transformed their lives;
              with our AI consciousness platform.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            {testimonials.map ((testimonial, index) => (          >;
            <h2 className="text - 4xl font - bold text - white mb - 6">;
              What Our Users;
              <span className="bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent"> Say</span>;
            </h2>;
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
              Join thousands of satisfied users who have transformed their lives with our AI consciousness platform.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            {testimonials.map ((testimonial, index) => (
              <motion.div;
                key={testimonial.name}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                ];
                popular: false;
              }

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

                }`}
              >
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold'>                      Most Popular
                    </span>
                  </div>
                )}                  plan.popular
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'

                    : 'border-purple-500/20'
              <motion.div;
                key={plan.name}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'                    : 'border-purple-500/20'
              };

              {
                name: 'Professional',
                price: '$299',
                period: '/month',

                    : 'border-purple-500/20'

                    : 'border-purple-500/20'
                }`}
              >;
                {plan.popular && (
                  <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                    <span className='bg - gradient - to - r from - purple - 500 to - pink - 600 text - white px - 4 py - 2 rounded - full text - sm font - bold'>                      Most Popular;
                    </span>;
                  </div>)}                  plan.popular;
                    ? 'border - purple - 500 / 50 shadow - 2xl shadow - purple - 500 / 20';
                    : 'border - purple - 500 / 20';
                }`}
              >;
                {plan.popular && (

                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">

                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {plan.name}
                  </h3>;
                  <div className='mb - 4'>;
                    <span className='text - 4xl font - bold text - purple - 400'>;
                      {plan.price}

                
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

              >;
                {plan && plan.popular && (;
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>;
                    <span className='bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold'>                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
                <div className='text-center mb-8'>;
                  <h3 className='text-2xl font-bold text-white mb-2'>;
                    {plan && plan.name}
                  </h3>;
                  <div className='mb-4'>;
                    <span className='text-4xl font-bold text-purple-400'>;
                      {plan && plan.price}
                    </span>;
                    <span className='text-gray-400'>{plan && plan.period}</span>;
                  </div>;
                  <p className='text-gray-300'>{plan && plan.description}</p>;
                </div>;
                <ul className='space-y-3 mb-8'>;
                  {plan && plan.features.map((feature, featureIndex) => (;
                    <li
                      key={featureIndex}
                      className='flex items-center text-gray-300'>;
                      <CheckCircle className='w-5 h-5 text-purple-400 mr-3 flex-shrink-0' />                      {feature}                  </div>;
                  <p className="text-gray-300">{plan && plan.description}</p>;
                </div>;
                <ul className="space-y-3 mb-8">;
                  {plan && plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-300">;
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />;

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                      {feature}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                    </li>
                  ))}
                </ul>

                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 hover:scale-105'
                    : 'border border-purple-500/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white'
                }`}>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
          </div>
        </div>
      </section>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-purple-500/20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion.div      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Ready to Evolve Your;
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                {' '}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
                Schedule Demo
              </button>
            </div>
            {/* Contact Info */}
            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
              {[
                {
                  icon: <Phone className='w-6 h-6' />
                  label: 'Call Us'
                  value: contactInfo.mobile
                }
                {
                  icon: <Mail className='w-6 h-6' />
                  label: 'Email Us'
                  value: contactInfo.email
                }
                {
                  icon: <MapPin className='w-6 h-6' />
                  label: 'Visit Us'
                  value: contactInfo.address
                },              ].map((contact, index) => (            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Phone className="w-6 h-6" />, label: 'Call Us', value: contactInfo.mobile }
                { icon: <Mail className="w-6 h-6" />, label: 'Email Us', value: contactInfo.email }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

              {[
                { icon: <Phone className="w-6 h-6" />, label: 'Call Us', value: contactInfo.mobile }
                { icon: <Mail className="w-6 h-6" />, label: 'Email Us', value: contactInfo.email }

                { icon: <MapPin className="w-6 h-6" />, label: 'Visit Us', value: contactInfo.address }

              ].map((contact, index) => (

=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  icon: <MapPin className='w-6 h-6' />,
                  label: 'Visit Us',
                  value: contactInfo.address,
                },              ].map((contact, index) => (            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Phone className="w-6 h-6" />, label: 'Call Us', value: contactInfo.mobile },
                { icon: <Mail className="w-6 h-6" />, label: 'Email Us', value: contactInfo.email },
                { icon: <MapPin className="w-6 h-6" />, label: 'Visit Us', value: contactInfo.address }
                },              ].map((contact, index) => (

                { icon: <MapPin className="w-6 h-6" />, label: 'Visit Us', value: contactInfo.address }
              ].map((contact, index) => (

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                <motion.div
                  key={contact.label}
                Consciousness?;
              </span>;
            </h2>;
            <p className='text-xl text-purple-200 mb-8'>;
              Join thousands of users who have already transformed their lives;
              with our revolutionary AI platform. Start your consciousness;
              evolution journey today.;
            </p>;
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>;
              <button className='bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105'>;
                Start Free Trial;
              </button>;
              <button className='border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200'>                Schedule Demo              Ready to Evolve Your;
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Consciousness?</span>;
            </h2>;
            <p className="text-xl text-purple-200 mb-8">;
              Join thousands of users who have already transformed their lives with our revolutionary AI platform. ;
              Start your consciousness evolution journey today.;
            </p>;
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">;
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">;
                Start Free Trial;
              </button>;
              <button className="border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200">;
                Schedule Demo;
              </button>;
            </div>;
            {/* Contact Info */}
            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>;
              {[;
                {;
                  icon: <Phone className='w-6 h-6' />,;
                  label: 'Call Us',;
                  value: contactInfo && contactInfo.mobile,;
                },;
                {;
                  icon: <Mail className='w-6 h-6' />,;
                  label: 'Email Us',;
                  value: contactInfo && contactInfo.email,;
                },;
                {;
                  icon: <MapPin className='w-6 h-6' />,;
                  label: 'Visit Us',;
                  value: contactInfo && contactInfo.address,;
                },              ].map((contact, index) => (            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">;
              {[;
                { icon: <Phone className="w-6 h-6" />, label: 'Call Us', value: contactInfo && contactInfo.mobile },;
                { icon: <Mail className="w-6 h-6" />, label: 'Email Us', value: contactInfo && contactInfo.email },;
                { icon: <MapPin className="w-6 h-6" />, label: 'Visit Us', value: contactInfo && contactInfo.address }
                <motion&& motion.div
                  key={contact && contact.label}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: 0 && 0.4 + index * 0 && 0.1 }}
                  viewport={{ once: true }}
                  className='text-center'

=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                >
                  <div className='inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-3 text-purple-400'>
                    {contact.icon}
                  </div>
                  <div className='text-sm text-purple-300 mb-1'>
                    {contact.label}
                  </div>

              ))}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
);  )
}

=======

  );
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
