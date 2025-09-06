<<<<<<< HEAD
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
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};
const serviceHighlights = [;
  {;
    title: 'Zero Trust Security',;
    description:;
      'Never trust, always verify - Advanced zero trust implementation',;
    icon: Shield,;
    color: 'from-red-500 to-pink-600',;
    features: [;
      'Continuous verification',;
      'Micro-segmentation',;
      'Adaptive controls',;
      'Real-time monitoring',;
    ],;
  },  {;
    title: 'AI Threat Intelligence',;
    description: 'Predict and prevent cyber threats with AI intelligence',;
    icon: Eye,;
    color: 'from-indigo-500 to-purple-600',;
    features: [;
      'Real-time detection',;
      'Predictive analytics',;
      'Automated response',;
      'Global intelligence',;
    ],;
  },;
  {;
    title: 'Cloud Security Posture',;
    description:;
      'Secure your cloud infrastructure with comprehensive posture management',;
    icon: Cloud,;
    color: 'from-blue-500 to-cyan-600',;
    features: [;
      'Multi-cloud monitoring',;
      'Compliance automation',;
      'Risk management',;
      'Security analytics',;
    ],;
  },  {;
    title: 'DevSecOps Security',;
    description: 'Integrate security into your DevOps pipeline seamlessly',;
    icon: Cpu,;
    color: 'from-green-500 to-emerald-600',;
    features: [;
      'Automated testing',;
      'Vulnerability scanning',;
      'Compliance automation',;
      'Security metrics',;
    ],;
  },  {;
    title: 'IoT Security Platform',;
    description: 'Secure your IoT ecosystem with comprehensive protection',;
    icon: Globe,;
    color: 'from-purple-500 to-violet-600',;
    features: [;
      'Device authentication',;
      'Network monitoring',;
      'Threat detection',;
      'Automated response',;
    ],;
  },];
const benefits = [;
  {;
    title: '99 && 99.99% Threat Detection',;
    description:;
      'Advanced AI algorithms detect threats before they become incidents',;
    icon: Shield,;
    color: 'text-red-400',;
  },;
  {;
    title: 'Zero False Positives',;
    description:;
      'AI-powered analysis eliminates false alarms and alert fatigue',;
    icon: CheckCircle,;
    color: 'text-green-400',;
  },  {;
    title: '24/7 Security Monitoring',;
    description: 'Round-the-clock protection with automated incident response',;
    icon: Clock,;
    color: 'text-blue-400',;
  },  {;
    title: 'Compliance Automation',;
    description: 'Automated compliance reporting and audit preparation',;
    icon: BarChart3,;
    color: 'text-purple-400',;
  },];
export default function CybersecurityServices() {;
  return (
        />;
        <meta name='author' content='Zion Tech Group' />;
        <meta name='robots' content='index, follow' />;
        {/* Open Graph */}
        <meta
          property='og:title'
          content='Cybersecurity Services - Zion Tech Group'
        />;
        <meta
          property='og:description'
          content='Next-generation cybersecurity solutions for modern enterprises.'
        />;
        <meta property='og:type' content='website' />;
        <meta
          property='og:url'
          content='https://ziontechgroup && ziontechgroup.com/cybersecurity-services'
        />;
        <meta
          property='og:image'
          content='https://ziontechgroup && ziontechgroup.com/og-image && image.jpg'
        />;
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />;
        <meta
          name='twitter:title'
          content='Cybersecurity Services - Zion Tech Group'
        />;
        <meta
          name='twitter:description'
          content='Next-generation cybersecurity solutions for modern enterprises.'
        />;
        <meta
          name='twitter:image'
          content='https://ziontechgroup && ziontechgroup.com/twitter-image && image.jpg'
        />;
        {/* Contact Information */}
        <meta name='contact:mobile' content='+1 302 464 0950' />;
        <meta name='contact:email' content='kleber@ziontechgroup && ziontechgroup.com' />;
        <meta
          name='contact:address'
          content='364 E Main St STE 1008 Middletown DE 19709'
    <Layout>
      <Head>
        <title>Cybersecurity Services - Zion Tech Group | Next-Generation Security Solutions</title>
        <meta name="description" content="Protect your business with our advanced cybersecurity services. Zero trust security, AI threat intelligence, cloud security posture, and comprehensive protection solutions." />
        <meta name="keywords" content="cybersecurity, zero trust security, AI threat intelligence, cloud security, DevSecOps, IoT security, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */}
        <meta property="og:title" content="Cybersecurity Services - Zion Tech Group" />
        <meta property="og:description" content="Next-generation cybersecurity solutions for modern enterprises." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cybersecurity-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cybersecurity Services - Zion Tech Group" />
        <meta name="twitter:description" content="Next-generation cybersecurity solutions for modern enterprises." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        {/* Contact Information */}
        <meta name="contact:mobile" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        <meta name="contact:website" content="https://ziontechgroup.com" />
      </Head>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-medium">Cybersecurity Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text text-white">
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Next-Generation
              </span>
              <br />
              <span className="text-white">Cybersecurity</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your business with cutting-edge cybersecurity solutions. From zero trust security to AI threat intelligence,
              we provide comprehensive protection that adapts to evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#services" className="group">
                <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact" className="group">
                <button className="border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2">
                  <span>Get Protected</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        />;
        <meta name='contact:website' content='https://ziontechgroup && ziontechgroup.com' />;
      </Head>;
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg'>;
        <div className='absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent'></div>;
        <div className='relative z-10 container mx-auto px-4 text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='max-w-4xl mx-auto'>;
            <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-8'>;
              <Shield className='w-5 h-5 text-red-400' />;
              <span className='text-red-400 font-medium'>;
                Cybersecurity Services;
              </span>;
            </div>;
            <h1 className='text-5xl md:text-7xl font-bold mb-6 neon-text text-white'>;
              <span className='bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'>;
                Next-Generation;
              </span>;
              <br />;
              <span className='text-white'>Cybersecurity</span>;
            </h1>;
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>;
              Protect your business with cutting-edge cybersecurity solutions.;
              From zero trust security to AI threat intelligence, we provide;
              comprehensive protection that adapts to evolving threats.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
              <Link href='#services' className='group'>;
                <button className='bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2'>;
                  <span>Explore Services</span>;
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />;
                </button>;
              </Link>;
              <Link href='/contact' className='group'>;
                <button className='border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2'>;
                  <span>Get Protected</span>;
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />                </button>;
              </Link>;
            </div>;
          </motion && motion.div>;
        </div>;
        {/* Floating Elements */}
        <div className='absolute top-20 left-10 opacity-20 animate-float'>;
          <div className='w-4 h-4 bg-red-400 rounded-full'></div>;
        </div>;
        <div
          className='absolute top-40 right-20 opacity-30 animate-float'
          style={{ animationDelay: '1s' }}>;
          <div className='w-6 h-6 bg-pink-400 rounded-full'></div>;
        </div>;
        <div
          className='absolute bottom-40 left-20 opacity-25 animate-float'
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <div className="w-4 h-4 bg-red-400 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-20 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
        </div>
      </section>
          style={{ animationDelay: '2s' }}>;
          <div className='w-3 h-3 bg-purple-400 rounded-full'></div>        </div>;
      </section>;
      {/* Service Highlights */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cybersecurity <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions that protect your digital assets and ensure business continuity
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title}
              <span className='bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent'>;
                Services;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Comprehensive security solutions that protect your digital assets;
              and ensure business continuity;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {serviceHighlights && serviceHighlights.map((service, index) => (;
              <motion&& motion.div
                key={service && service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
import Head from 'next / head';
import Link from 'next / link';
import {motion} from 'framer-motion';
import {Shield, Lock, Eye, AlertTriangle, Cpu, Globe, Cloud, CheckCircle, ArrowRight, Star, Clock, Target, Zap, Users, BarChart3, Settings, Database, } from 'lucide-react';
import Layout from '../components / layout / Layout';
import { advancedCybersecurityServices2025 } from '../data / 2025 - advanced - cybersecurity - services';
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com', }
;
const service_highlights = [;
  {
    title: 'Zero Trust Security',
    description:;
      'Never trust, always verify - Advanced zero trust implementation',
    icon: Shield,
    color: 'from - red - 500 to - pink - 600',
    features: [;
      'Continuous verification',
      'Micro - segmentation',
      'Adaptive controls',
      'Real - time monitoring',
=======
<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, Cpu, Globe, Cloud;
  CheckCircle, ArrowRight, Star, Clock, Target;
  Zap, Users, BarChart3, Settings, Database
 } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { advancedCybersecurityServices2025 } from '../data/2025-advanced-cybersecurity-services';

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',}
const serviceHighlights = [
  {
    title: 'Zero Trust Security'
    description:
      'Never trust, always verify - Advanced zero trust implementation'
    icon: Shield
    color: 'from-red-500 to-pink-600'
    features: [
      'Continuous verification'
      'Micro-segmentation'
      'Adaptive controls'
      'Real-time monitoring'
    ]
  },  {
    title: 'AI Threat Intelligence'
    description: 'Predict and prevent cyber threats with AI intelligence'
    icon: Eye
    color: 'from-indigo-500 to-purple-600'
    features: [
      'Real-time detection'
      'Predictive analytics'
      'Automated response'
      'Global intelligence'
    ]
  }
  {
    title: 'Cloud Security Posture'
    description:
      'Secure your cloud infrastructure with comprehensive posture management'
    icon: Cloud
    color: 'from-blue-500 to-cyan-600'
    features: [
      'Multi-cloud monitoring'
      'Compliance automation'
      'Risk management'
      'Security analytics'
    ]
  },  {
    title: 'DevSecOps Security'
    description: 'Integrate security into your DevOps pipeline seamlessly'
    icon: Cpu
    color: 'from-green-500 to-emerald-600'
    features: [
      'Automated testing'
      'Vulnerability scanning'
      'Compliance automation'
      'Security metrics'
    ]
  },  {
    title: 'IoT Security Platform'
    description: 'Secure your IoT ecosystem with comprehensive protection'
    icon: Globe
    color: 'from-purple-500 to-violet-600'
    features: [
      'Device authentication'
      'Network monitoring'
      'Threat detection'
      'Automated response'
    ]
  },];
const benefits = [
  {
    title: '99.99% Threat Detection'
    description:
      'Advanced AI algorithms detect threats before they become incidents'
    icon: Shield
    color: 'text-red-400'
  }
  {
    title: 'Zero False Positives'
    description:
      'AI-powered analysis eliminates false alarms and alert fatigue'
    icon: CheckCircle
    color: 'text-green-400'
  },  {
    title: '24/7 Security Monitoring'
    description: 'Round-the-clock protection with automated incident response'
    icon: Clock
    color: 'text-blue-400'
  },  {
    title: 'Compliance Automation'
    description: 'Automated compliance reporting and audit preparation'
    icon: BarChart3
    color: 'text-purple-400'
  },];
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {motion} from 'framer-motion';
import {Shield, Lock, Eye, AlertTriangle, Cpu, Globe, Cloud, CheckCircle, ArrowRight, Star, Clock, Target, Zap, Users, BarChart3, Settings, Database,} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { advancedCybersecurityServices2025 } from '../data/2025-advanced-cybersecurity-services';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',};

const serviceHighlights = [
  {
    title: 'Zero Trust Security',
    description:
      'Never trust, always verify - Advanced zero trust implementation',
    icon: Shield,
    color: 'from-red-500 to-pink-600',
    features: [
      'Continuous verification',
      'Micro-segmentation',
      'Adaptive controls',
      'Real-time monitoring',
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    ],
  },  {
    title: 'AI Threat Intelligence',
    description: 'Predict and prevent cyber threats with AI intelligence',
    icon: Eye,
<<<<<<< HEAD
    color: 'from - indigo - 500 to - purple - 600',
    features: [;
      'Real - time detection',
=======
    color: 'from-indigo-500 to-purple-600',
    features: [
      'Real-time detection',
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      'Predictive analytics',
      'Automated response',
      'Global intelligence',
    ],
  },
  {
    title: 'Cloud Security Posture',
<<<<<<< HEAD
    description:;
      'Secure your cloud infrastructure with comprehensive posture management',
    icon: Cloud,
    color: 'from - blue - 500 to - cyan - 600',
    features: [;
      'Multi - cloud monitoring',
=======
    description:
      'Secure your cloud infrastructure with comprehensive posture management',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-600',
    features: [
      'Multi-cloud monitoring',
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      'Compliance automation',
      'Risk management',
      'Security analytics',
    ],
  },  {
    title: 'DevSecOps Security',
    description: 'Integrate security into your DevOps pipeline seamlessly',
    icon: Cpu,
<<<<<<< HEAD
    color: 'from - green - 500 to - emerald - 600',
    features: [;
=======
    color: 'from-green-500 to-emerald-600',
    features: [
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      'Automated testing',
      'Vulnerability scanning',
      'Compliance automation',
      'Security metrics',
    ],
  },  {
    title: 'IoT Security Platform',
    description: 'Secure your IoT ecosystem with comprehensive protection',
    icon: Globe,
<<<<<<< HEAD
    color: 'from - purple - 500 to - violet - 600',
    features: [;
=======
    color: 'from-purple-500 to-violet-600',
    features: [
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      'Device authentication',
      'Network monitoring',
      'Threat detection',
      'Automated response',
    ],
<<<<<<< HEAD
  }, ];
;
const benefits = [;
  {
    title: '99.99% Threat Detection',
    description:;
      'Advanced AI algorithms detect threats before they become incidents',
    icon: Shield,
    color: 'text - red - 400',
  },
  {
    title: 'Zero False Positives',
    description:;
      'AI - powered analysis eliminates false alarms and alert fatigue',
    icon: CheckCircle,
    color: 'text - green - 400',
  },  {
    title: '24 / 7 Security Monitoring',
    description: 'Round - the - clock protection with automated incident response',
    icon: Clock,
    color: 'text - blue - 400',
=======
  },];

const benefits = [
  {
    title: '99.99% Threat Detection',
    description:
      'Advanced AI algorithms detect threats before they become incidents',
    icon: Shield,
    color: 'text-red-400',
  },
  {
    title: 'Zero False Positives',
    description:
      'AI-powered analysis eliminates false alarms and alert fatigue',
    icon: CheckCircle,
    color: 'text-green-400',
  },  {
    title: '24/7 Security Monitoring',
    description: 'Round-the-clock protection with automated incident response',
    icon: Clock,
    color: 'text-blue-400',
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  },  {
    title: 'Compliance Automation',
    description: 'Automated compliance reporting and audit preparation',
    icon: BarChart3,
<<<<<<< HEAD
    color: 'text - purple - 400',
  }, ];
;
export default /**
 * CybersecurityServices - Function description
 */
function CybersecurityServices() {
  return (
    <Layout>;
      <Head>;
        <title>;
          Cybersecurity Services - Zion Tech Group | Next - Generation Security;
          Solutions;
        </title>;
        <meta;
          name='description';
          content='Protect your business with our advanced cybersecurity services. Zero trust security, AI threat intelligence, cloud security posture, and comprehensive protection solutions.';
        />;
        <meta;
          name='keywords';
          content='cybersecurity, zero trust security, AI threat intelligence, cloud security, DevSecOps, IoT security, Zion Tech Group';
        />;
        <meta name='author' content='Zion Tech Group' />;
        <meta name='robots' content='index, follow' />;
        {/* Open Graph */}
        <meta;
          property='og:title';
          content='Cybersecurity Services - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Next - generation cybersecurity solutions for modern enterprises.';
        />;
        <meta property='og:type' content='website' />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / cybersecurity - services';
        />;
        <meta;
          property='og:image';
          content='https://ziontechgroup.com / og - image.jpg';
        />;
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />;
        <meta;
          name='twitter:title';
          content='Cybersecurity Services - Zion Tech Group';
        />;
        <meta;
          name='twitter:description';
          content='Next - generation cybersecurity solutions for modern enterprises.';
        />;
        <meta;
          name='twitter:image';
          content='https://ziontechgroup.com / twitter - image.jpg';
        />;
        {/* Contact Information */}
        <meta name='contact:mobile' content='+1 302 464 0950' />;
        <meta name='contact:email' content='kleber@ziontechgroup.com' />;
        <meta;
          name='contact:address';
          content='364 E Main St STE 1008 Middletown DE 19709';
        />;
        <meta name='contact:website' content='https://ziontechgroup.com' />;
      </Head>;
      {/* Hero Section */}
      <section className='relative min - h-screen flex items - center justify - center overflow - hidden futuristic - bg'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - black / 50 via - black / 30 to - transparent'></div>;
        <div className='relative z - 10 container mx - auto px - 4 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='max - w-4xl mx - auto';
          >;
            <div className='inline - flex items - center space - x-2 bg - gradient - to - r from - red - 500 / 20 to - pink - 500 / 20 border border - red - 500 / 30 rounded - full px - 6 py - 3 mb - 8'>;
              <Shield className='w - 5 h - 5 text - red - 400' />;
              <span className='text - red - 400 font - medium'>;
                Cybersecurity Services;
              </span>;
            </div>;
            <h1 className='text - 5xl md:text - 7xl font - bold mb - 6 neon - text text - white'>;
              <span className='bg - gradient - to - r from - red - 400 via - pink - 400 to - purple - 400 bg - clip - text text - transparent'>;
                Next - Generation;
              </span>;
              <br />;
              <span className='text - white'>Cybersecurity</span>;
            </h1>;
            <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-3xl mx - auto leading - relaxed'>;
              Protect your business with cutting - edge cybersecurity solutions.;
              From zero trust security to AI threat intelligence, we provide;
              comprehensive protection that adapts to evolving threats.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
              <Link href='#services' className='group'>;
                <button className='bg - gradient - to - r from - red - 500 to - pink - 600 hover:from - red - 600 hover:to - pink - 700 text - white px - 8 py - 4 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center space - x-2'>;
                  <span > Explore Services</span>;
                  <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
                </button>;
              </Link>;
              <Link href='/contact' className='group'>;
                <button className='border - 2 border - red - 500 / 50 hover:border - red - 400 text - red - 400 hover:text - red - 300 px - 8 py - 4 rounded - full font - semibold text - lg transition - all duration - 300 hover:bg - red - 500 / 10 flex items - center space - x-2'>;
                  <span > Get Protected</span>;
                  <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />                </button>;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
        {/* Floating Elements */}
        <div className='absolute top - 20 left - 10 opacity - 20 animate - float'>;
          <div className='w - 4 h - 4 bg - red - 400 rounded - full'></div>;
        </div>;
        <div;
          className='absolute top - 40 right - 20 opacity - 30 animate - float';
          style={{ animation_delay: '1s' }}
        >;
          <div className='w - 6 h - 6 bg - pink - 400 rounded - full'></div>;
        </div>;
        <div;
          className='absolute bottom - 40 left - 20 opacity - 25 animate - float';
          style={{ animation_delay: '2s' }}
        >;
          <div className='w - 3 h - 3 bg - purple - 400 rounded - full'></div>        </div>;
      </section>;
      {/* Service Highlights */}
      <section;
        id='services';
        className='py - 20 bg - gradient - to - b from - black to - gray - 900';
      >;
        <div className='container mx - auto px - 4'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Cybersecurity{' '}
              <span className='bg - gradient - to - r from - red - 400 to - pink - 400 bg - clip - text text - transparent'>;
                Services;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Comprehensive security solutions that protect your digital assets;
              and ensure business continuity;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {service_highlights.map ((service, index) => (
              <motion.div;
                key={service.title}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='futuristic - card p - 6 group hover:scale - 105 transition - all duration - 300';
              >;
                <div;
                  className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - r ${service.color} p - 4 mb - 6 group - hover:scale - 110 transition - transform duration - 300`}
                >;
                  <service.icon className='w - full h - full text - white' />;
                </div>;
                <h3 className='text - 2xl font - bold text - white mb - 4'>;
                  {service.title}
                </h3>;
                <p className='text - gray - 300 mb - 6 leading - relaxed'>;
                  {service.description}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service && service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <service && service.icon className='w-full h-full text-white' />;
                </div>;
                <h3 className='text-2xl font-bold text-white mb-4'>;
                  {service && service.title}
                </h3>;
                <p className='text-gray-300 mb-6 leading-relaxed'>;
                  {service && service.description}
                </p>;
                <ul className='space-y-2'>;
                  {service && service.features.map((feature, featureIndex) => (;
                    <li
                      key={featureIndex}
                      className='flex items-center text-gray-300'>;
                      <CheckCircle className='w-5 h-5 text-red-400 mr-3 flex-shrink-0' />                      <span>{feature}</span>;
                    </li>;
                className="futuristic-card p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>;
              </motion && motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Detailed Services */}
      <section className='py-20 bg-black'>;
        <div className='container mx-auto px-4'>          <motion&& motion.div
      {/* Detailed Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Security</span> Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of cybersecurity services designed for modern enterprises
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advancedCybersecurityServices2025.map((service, index) => (
              <motion.div
                key={service.id}
              Portfolio;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Discover our comprehensive range of cybersecurity services;
              designed for modern enterprises;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {advancedCybersecurityServices2025 && advancedCybersecurityServices2025.map((service, index) => (;
              <motion&& motion.div
                key={service && service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                </p>;
                <ul className='space - y-2'>;
                  {service.features.map ((feature, feature_index) => (
                    <li;
                      key={feature_index}
                      className='flex items - center text - gray - 300';
                    >;
                      <CheckCircle className='w - 5 h - 5 text - red - 400 mr - 3 flex - shrink - 0' />                      <span>{feature}</span>;
                    </li>))}
                </ul>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Detailed Services */}
      <section className='py - 20 bg - black'>;
        <div className='container mx - auto px - 4'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Our{' '}
              <span className='bg - gradient - to - r from - red - 400 to - pink - 400 bg - clip - text text - transparent'>;
                Security;
              </span>{' '}
              Portfolio;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Discover our comprehensive range of cybersecurity services;
              designed for modern enterprises;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>            {advancedCybersecurityServices2025.map ((service, index) => (
              <motion.div;
                key={service.id}
                initial={{ opacity: 0, coordinate_x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, coordinate_x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='animated - border';
              >;
                <div className='h - full'>;
                  <div className='flex items - start justify - between mb - 4'>;
                    <div className='flex items - center space - x-3'>;
                      <span className='text - 3xl'>{service.icon}</span>;
                      <div>;
                        <h3 className='text - xl font - bold text - white'>;
                          {service.name}
                        </h3>;
                        <p className='text - red - 400 font - medium'>;
                          {service.tagline}
                        </p>;
                      </div>;
                    </div>;
                    {service.popular && (
                      <span className='bg - gradient - to - r from - red - 500 to - pink - 600 text - white px - 3 py - 1 rounded - full text - sm font - medium'>                        Popular;
                      </span>)}
                  </div>;
                  <p className='text - gray - 300 mb - 4 leading - relaxed'>;
                    {service.description}
                  </p>;
                  <div className='flex items - center justify - between mb - 4'>;
                    <div className='text - 2xl font - bold text - red - 400'>;
                      {service.price}
                      <span className='text - gray - 400 text - lg'>;
                        {service.period}
                  </div>;
                  <p className='text-gray-300 mb-4 leading-relaxed'>;
                    {service && service.description}
                  </p>;
                  <div className='flex items-center justify-between mb-4'>;
                    <div className='text-2xl font-bold text-red-400'>;
                      {service && service.price}
                      <span className='text-gray-400 text-lg'>;
                        {service && service.period}
                      </span>;
                    </div>;
                    <div className='flex items-center space-x-1'>;
                      {[...Array(5)].map((_, i) => (;
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < service && service.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                        />;
                      ))}
                      <span className='text-gray-400 text-sm ml-2'>;
                        ({service && service.reviews});
                      </span>;
                    </div>;
                  </div>;
                  <div className='grid grid-cols-2 gap-4 mb-6'>;
                    <div className='text-center p-3 bg-gray-800/50 rounded-lg'>;
                      <div className='text-red-400 font-bold'>;
                        {service && service.customers}+;
                      </div>;
                      <div className='text-gray-400 text-sm'>Customers</div>;
                    </div>;
                    <div className='text-center p-3 bg-gray-800/50 rounded-lg'>;
                      <div className='text-red-400 font-bold'>;
                        {service && service.trialDays}
                      </div>;
                      <div className='text-gray-400 text-sm'>Trial Days</div>;
                    </div>;
                  </div>;
                  <div className='flex flex-wrap gap-2 mb-6'>;
                    {service && service.features;
                      .slice(0, 4);
                      .map((feature, featureIndex) => (;
                        <span
                          key={featureIndex}
                          className='bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm'>;
                          {feature}
                        </span>;
                      ))}
                  </div>;
                  <div className='flex items-center justify-between'>;
                    <Link
                      href={service && service.link}
                      className='text-red-400 hover:text-red-300 font-medium flex items-center space-x-2 group'>;
                      <span>Learn More</span>;
                      <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />;
                    </Link>;
                    <Link
                      href='/contact'
                      className='bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105'>                      Get Protected;
                    </Link>;
                  </div>;
                </div>;
              </motion && motion.div>;
                className="animated-border"
              >
                <div className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <p className="text-red-400 font-medium">{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">

export default function CybersecurityServices() {_return (_<Layout>
      <Head>
        <title>Cybersecurity Services - Zion Tech Group | Next-Generation Security Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Protect your business with our advanced cybersecurity services. Zero trust security, AI threat intelligence, cloud security posture, and comprehensive protection solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;cybersecurity, zero trust security, AI threat intelligence, cloud security, DevSecOps, IoT security, Zion Tech Group&quot; />
        <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
        <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
        
        {/* Open Graph */}
        <meta property=&quot;og:title&quot; content=&quot;Cybersecurity Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Next-generation cybersecurity solutions for modern enterprises.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/cybersecurity-services&quot; />
        <meta property=&quot;og:image&quot; content=&quot;https://ziontechgroup.com/og-image.jpg&quot; />
        
        {/* Twitter */}
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <meta name=&quot;twitter:title&quot; content=&quot;Cybersecurity Services - Zion Tech Group&quot; />
        <meta name=&quot;twitter:description&quot; content=&quot;Next-generation cybersecurity solutions for modern enterprises.&quot; />
        <meta name=&quot;twitter:image&quot; content=&quot;https://ziontechgroup.com/twitter-image.jpg&quot; />
        
        {/* Contact Information */}
        <meta name=&quot;contact:mobile&quot; content=&quot;+1 302 464 0950&quot; />
        <meta name=&quot;contact:email&quot; content=&quot;kleber@ziontechgroup.com&quot; />
        <meta name=&quot;contact:address&quot; content=&quot;364 E Main St STE 1008 Middletown DE 19709&quot; />
        <meta name=&quot;contact:website&quot; content=&quot;https://ziontechgroup.com&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent&quot;></div>
        
        <div className=&quot;relative z-10 container mx-auto px-4 text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;max-w-4xl mx-auto&quot;
          >
            <div className=&quot;inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-8&quot;>
              <Shield className=&quot;w-5 h-5 text-red-400&quot; />
              <span className=&quot;text-red-400 font-medium&quot;>Cybersecurity Services</span>
            </div>
            
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 neon-text text-white&quot;>
              <span className=&quot;bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent&quot;>
                Next-Generation
              </span>
              <br />
              <span className=&quot;text-white&quot;>Cybersecurity</span>
            </h1>
            
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Protect your business with cutting-edge cybersecurity solutions. From zero trust security to AI threat intelligence, 
              we provide comprehensive protection that adapts to evolving threats.
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <Link href=&quot;#services&quot; className=&quot;group&quot;>
                <button className=&quot;bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2&quot;>
                  <span>Explore Services</span>
                  <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
                </button>
              </Link>
              
              <Link href=&quot;/contact&quot; className=&quot;group&quot;>
                <button className=&quot;border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2&quot;>
                  <span>Get Protected</span>
                  <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
=======
    color: 'text-purple-400',
  },];

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { motion } from 'framer-motion';
import {;
  Shield, Lock, Eye, AlertTriangle, Cpu, Globe, Cloud,;
  CheckCircle, ArrowRight, Star, Clock, Target,;
  Zap, Users, BarChart3, Settings, Database;
} from 'lucide-react',;
import Layout from '../components/layout/Layout';
import { advancedCybersecurityServices2025 } from '../data/2025-advanced-cybersecurity-services';
const contactInfo = {;
  mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709';
  website: 'https://ziontechgroup.com';
};
const serviceHighlights = [;
  {;
    title: 'Zero Trust Security';
    description: 'Never trust, always verify - Advanced zero trust implementation',;
    icon: Shield,;
    color: 'from-red-500 to-pink-600',;
    features: ['Continuous verificationMicro-segmentationAdaptive controlsReal-time monitoring'];
  },;
  {;
    title: 'AI Threat Intelligence',;
    description: 'Predict and prevent cyber threats with AI intelligence',;
    icon: Eye,;
    color: 'from-indigo-500 to-purple-600',;
    features: ['Real-time detectionPredictive analyticsAutomated responseGlobal intelligence'];
  },;
  {;
    title: 'Cloud Security Posture',;
    description: 'Secure your cloud infrastructure with comprehensive posture management',;
    icon: Cloud,;
    color: 'from-blue-500 to-cyan-600',;
    features: ['Multi-cloud monitoringCompliance automationRisk managementSecurity analytics'];
  },;
  {;
    title: 'DevSecOps Security',;
    description: 'Integrate security into your DevOps pipeline seamlessly',;
    icon: Cpu,;
    color: 'from-green-500 to-emerald-600',;
    features: ['Automated testingVulnerability scanningCompliance automationSecurity metrics'];
  },;
  {;
    title: 'IoT Security Platform',;
    description: 'Secure your IoT ecosystem with comprehensive protection',;
    icon: Globe,;
    color: 'from-purple-500 to-violet-600',;
    features: ['Device authenticationNetwork monitoringThreat detectionAutomated response'];
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const benefits = [;
  {;
    title: '99.99% Threat Detection';
    description: 'Advanced AI algorithms detect threats before they become incidents';
    icon: Shield;
    color: 'text-red-400';
  };
  {;
    title: 'Zero False Positives',;
    description: 'AI-powered analysis eliminates false alarms and alert fatigue',;
    icon: CheckCircle,;
    color: 'text-green-400';
  },;
  {;
    title: '24/7 Security Monitoring',;
    description: 'Round-the-clock protection with automated incident response',;
    icon: Clock,;
    color: 'text-blue-400';
  },;
  {;
    title: 'Compliance Automation',;
    description: 'Automated compliance reporting and audit preparation',;
    icon: BarChart3,;
    color: 'text-purple-400';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function CybersecurityServices() {
  return (
    <Layout>
      <Head>
<<<<<<< HEAD
        <title>
          Cybersecurity Services - Zion Tech Group | Next-Generation Security
          Solutions
        </title>
        <meta
          name='description'
          content='Protect your business with our advanced cybersecurity services. Zero trust security, AI threat intelligence, cloud security posture, and comprehensive protection solutions.'
        />
        <meta
          name='keywords'
          content='cybersecurity, zero trust security, AI threat intelligence, cloud security, DevSecOps, IoT security, Zion Tech Group'
        />
        <meta name='author' content='Zion Tech Group' />
        <meta name='robots' content='index, follow' />
        {/* Open Graph */}
        <meta
          property='og:title'
          content='Cybersecurity Services - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Next-generation cybersecurity solutions for modern enterprises.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/cybersecurity-services'
        />
        <meta
          property='og:image'
          content='https://ziontechgroup.com/og-image.jpg'
        />
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Cybersecurity Services - Zion Tech Group'
        />
        <meta
          name='twitter:description'
          content='Next-generation cybersecurity solutions for modern enterprises.'
        />
        <meta
          name='twitter:image'
          content='https://ziontechgroup.com/twitter-image.jpg'
        />
        {/* Contact Information */}
        <meta name='contact:mobile' content='+1 302 464 0950' />
        <meta name='contact:email' content='kleber@ziontechgroup.com' />
        <meta
          name='contact:address'
          content='364 E Main St STE 1008 Middletown DE 19709'
        />
        <meta name='contact:website' content='https://ziontechgroup.com' />
      </Head>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg'>
        <div className='absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent'></div>
        <div className='relative z-10 container mx-auto px-4 text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-4xl mx-auto'
=======
        <title>Cybersecurity Services - Zion Tech Group | Next-Generation Security Solutions</title>
        <meta name="description" content="Protect your business with our advanced cybersecurity services. Zero trust security, AI threat intelligence, cloud security posture, and comprehensive protection solutions." />
        <meta name="keywords" content="cybersecurity, zero trust security, AI threat intelligence, cloud security, DevSecOps, IoT security, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <meta property="og:title" content="Cybersecurity Services - Zion Tech Group" />
        <meta property="og:description" content="Next-generation cybersecurity solutions for modern enterprises." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cybersecurity-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        {/* Twitter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cybersecurity Services - Zion Tech Group" />
        <meta name="twitter:description" content="Next-generation cybersecurity solutions for modern enterprises." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <meta name="contact:mobile" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        <meta name="contact:website" content="https://ziontechgroup.com" />
      </Head>
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="max-w-4xl mx-auto"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-medium">Cybersecurity Services</span>
            </div>
<<<<<<< HEAD
            <h1 className='text-5xl md:text-7xl font-bold mb-6 neon-text text-white'>
              <span className='bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'>
=======
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text text-white">
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                Next-Generation
              </span>
              <br />
              <span className="text-white">Cybersecurity</span>
            </h1>
<<<<<<< HEAD
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>
              Protect your business with cutting-edge cybersecurity solutions.
              From zero trust security to AI threat intelligence, we provide
              comprehensive protection that adapts to evolving threats.
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link href='#services' className='group'>
                <button className='bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2'>
=======
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your business with cutting-edge cybersecurity solutions. From zero trust security to AI threat intelligence,
              we provide comprehensive protection that adapts to evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#services" className="group">
                <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
<<<<<<< HEAD
              <Link href='/contact' className='group'>
                <button className='border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2'>
=======
              <Link href="/contact" className="group">
                <button className="border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <span>Get Protected</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
        
        {/* Floating Elements */}
        <div className=&quot;absolute top-20 left-10 opacity-20 animate-float&quot;>
          <div className=&quot;w-4 h-4 bg-red-400 rounded-full&quot;></div>
        </div>
        <div className=&quot;absolute top-40 right-20 opacity-30 animate-float&quot; style={{ animationDelay: '1s' }}>
          <div className=&quot;w-6 h-6 bg-pink-400 rounded-full&quot;></div>
        </div>
        <div className=&quot;absolute bottom-40 left-20 opacity-25 animate-float&quot; style={{ animationDelay: '2s' }}>
          <div className=&quot;w-3 h-3 bg-purple-400 rounded-full&quot;></div>
        </div>
      </section>

      {/* Service Highlights */}
      <section id=&quot;services&quot; className=&quot;py-20 bg-gradient-to-b from-black to-gray-900&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <motion.div
=======
<<<<<<< HEAD
        {/* Floating Elements */}
        <div className='absolute top-20 left-10 opacity-20 animate-float'>
          <div className='w-4 h-4 bg-red-400 rounded-full'></div>
=======
        {/* Floating Elements */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <div className="w-4 h-4 bg-red-400 rounded-full"></div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        </div>
        <div className="absolute top-40 right-20 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Service Highlights */}
      <section
        id='services'
        className='py-20 bg-gradient-to-b from-black to-gray-900'
      >
        <div className='container mx-auto px-4'>          <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className=&quot;text-center mb-16&quot;
=======
            className='text-center mb-16'
=======
      {/* Service Highlights */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cybersecurity <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions that protect your digital assets and ensure business continuity
            </p>
          </motion.div>
<<<<<<< HEAD
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {serviceHighlights.map((service, index) => (
=======
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {serviceHighlights.map((service, index) => (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className=&quot;futuristic-card p-6 group hover:scale-105 transition-all duration-300&quot;
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className=&quot;w-full h-full text-white&quot; />
                </div>
                
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>{service.description}</p>
                
                <ul className=&quot;space-y-2&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-red-400 mr-3 flex-shrink-0&quot; />
=======
                className='futuristic-card p-6 group hover:scale-105 transition-all duration-300'
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="futuristic-card p-6 group hover:scale-105 transition-all duration-300"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
<<<<<<< HEAD
                <h3 className='text-2xl font-bold text-white mb-4'>
                  {service.title}
                </h3>
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {service.description}
                </p>
                <ul className='space-y-2'>
=======
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      <span>{feature}</span>
                    </li>
<<<<<<< HEAD
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Detailed Services */}
      <section className=&quot;py-20 bg-black&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <motion.div
=======
      {/* Detailed Services */}
      <section className='py-20 bg-black'>
        <div className='container mx-auto px-4'>          <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className=&quot;text-center mb-16&quot;
=======
            className='text-center mb-16'
=======
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </ul>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Detailed Services */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Security</span> Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of cybersecurity services designed for modern enterprises
            </p>
          </motion.div>
<<<<<<< HEAD
          
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {advancedCybersecurityServices2025.map((service, index) => (
=======
<<<<<<< HEAD
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {advancedCybersecurityServices2025.map((service, index) => (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className=&quot;animated-border&quot;
=======
                className='animated-border'
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advancedCybersecurityServices2025.map((service, index) => (
              <motion.div
                key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="animated-border"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              >
                <div className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <p className="text-red-400 font-medium">{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
<<<<<<< HEAD
                      <span className=&quot;bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium&quot;>

                        Popular
                      </span>
                    )}
                  </div>
<p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
=======
                      <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
<<<<<<< HEAD
                  <p className='text-gray-300 mb-4 leading-relaxed'>
                    {service.description}
                  </p>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='text-2xl font-bold text-red-400'>
                      {service.price}
                      <span className='text-gray-400 text-lg'>
                        {service.period}
                      </span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                        />
                      ))}
                      <span className='text-gray-400 text-sm ml-2'>
                        ({service.reviews})
                      </span>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-4 mb-6'>
                    <div className='text-center p-3 bg-gray-800/50 rounded-lg'>
                      <div className='text-red-400 font-bold'>
                        {service.customers}+
                      </div>
                      <div className='text-gray-400 text-sm'>Customers</div>
                    </div>
                    <div className='text-center p-3 bg-gray-800/50 rounded-lg'>
                      <div className='text-red-400 font-bold'>
                        {service.trialDays}
                      </div>
                      <div className='text-gray-400 text-sm'>Trial Days</div>
                    </div>
                  </div>
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {service.features
                      .slice(0, 4)
                      .map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className='bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm'
                        >
                          {feature}
                        </span>
                      ))}
                  </div>
                  <div className='flex items-center justify-between'>
                    <Link
                      href={service.link}
                      className='text-red-400 hover:text-red-300 font-medium flex items-center space-x-2 group'
                    >
=======
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-red-400">
                      {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
<<<<<<< HEAD
                      ))}
=======
                      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-red-400 font-bold">{service.customers}+</div>
                      <div className="text-gray-400 text-sm">Customers</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-red-400 font-bold">{service.trialDays}</div>
                      <div className="text-gray-400 text-sm">Trial Days</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
<<<<<<< HEAD
                        {feature}
                      </span>
                    ))}
                  </div>
<div className="flex items-center justify-between">
                    <Link href={service.link} className="text-red-400 hover:text-red-300 font-medium flex items-center space-x-2 group">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/contact" className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                      Get Protected
=======
                        {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </span>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link href={service.link} className="text-red-400 hover:text-red-300 font-medium flex items-center space-x-2 group">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
<<<<<<< HEAD
                    <Link
                      href='/contact'
                      className='bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105'
                    >                      Get Protected
=======
                    <Link href="/contact" className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                      Get Protected
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </Link>
                  </div>
                </div>
              </motion.div>
<<<<<<< HEAD
            ))}
<<<<<<< HEAD
</div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className='py-20 bg-gradient-to-b from-gray-900 to-black'>;
        <div className='container mx-auto px-4'>          <motion&& motion.div
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
=======
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className='py-20 bg-gradient-to-b from-gray-900 to-black'>
        <div className='container mx-auto px-4'>          <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className="text-center mb-16"
=======
            className='text-center mb-16'
=======
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Our Security</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced protection that keeps your business safe and compliant
            </p>
          </motion.div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
=======
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {benefits.map((benefit, index) => (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <motion.div
                key={benefit.title}
              <span className='bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent'>;
                Our Security;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Advanced protection that keeps your business safe and compliant;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {benefits && benefits.map((benefit, index) => (;
              <motion&& motion.div
                key={benefit && benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                      </span>;
                    </div>;
                    <div className='flex items - center space - x-1'>;
                      {[...Array (5)].map ((_, i) => (
                        <Star;
                          key={i}
                          className={`w - 4 h - 4 ${i < service.rating ? 'text - yellow - 400 fill - current' : 'text - gray - 600'}`}
                        />))}
                      <span className='text - gray - 400 text - sm ml - 2'>;
                        ({service.reviews});
                      </span>;
                    </div>;
                  </div>;
                  <div className='grid grid - cols - 2 gap - 4 mb - 6'>;
                    <div className='text - center p - 3 bg - gray - 800 / 50 rounded - lg'>;
                      <div className='text - red - 400 font - bold'>;
                        {service.customers}+;
                      </div>;
                      <div className='text - gray - 400 text - sm'>Customers</div>;
                    </div>;
                    <div className='text - center p - 3 bg - gray - 800 / 50 rounded - lg'>;
                      <div className='text - red - 400 font - bold'>;
                        {service.trial_days}
                      </div>;
                      <div className='text - gray - 400 text - sm'>Trial Days</div>;
                    </div>;
                  </div>;
                  <div className='flex flex - wrap gap - 2 mb - 6'>;
                    {service.features;
                      .slice (0, 4);
                      .map ((feature, feature_index) => (
                        <span;
                          key={feature_index}
                          className='bg - red - 500 / 20 text - red - 400 px - 3 py - 1 rounded - full text - sm';
                        >;
                          {feature}
                        </span>))}
                  </div>;
                  <div className='flex items - center justify - between'>;
                    <Link;
                      href={service.link}
                      className='text - red - 400 hover:text - red - 300 font - medium flex items - center space - x-2 group';
                    >;
                      <span > Learn More</span>;
                      <ArrowRight className='w - 4 h - 4 group - hover:translate - x-1 transition - transform' />;
                    </Link>;
                    <Link;
                      href='/contact';
                      className='bg - gradient - to - r from - red - 500 to - pink - 600 hover:from - red - 600 hover:to - pink - 700 text - white px - 6 py - 2 rounded - full text - sm font - medium transition - all duration - 300 hover:scale - 105';
                    >                      Get Protected;
                    </Link>;
                  </div>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className='py - 20 bg - gradient - to - b from - gray - 900 to - black'>;
        <div className='container mx - auto px - 4'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Why Choose{' '}
              <span className='bg - gradient - to - r from - red - 400 to - pink - 400 bg - clip - text text - transparent'>;
                Our Security;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Advanced protection that keeps your business safe and compliant;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>            {benefits.map ((benefit, index) => (
              <motion.div;
                key={benefit.title}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className='text - center group';
              >;
                <div;
                  className={`w - 20 h - 20 rounded - 2xl bg - gradient - to - r from - red - 500 / 20 to - pink - 500 / 20 border border - red - 500 / 30 p - 5 mx - auto mb - 6 group - hover:scale - 110 transition - transform duration - 300`}
                >;
                  <benefit.icon className={`w - full h - full ${benefit.color}`} />;
                </div>;
                <h3 className='text - xl font - bold text - white mb - 4'>;
                  {benefit.title}
                </h3>;
                <p className='text - gray - 300 leading - relaxed'>;
                  {benefit.description}
                className="text-center group"
=======
                className='text-center group'
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="text-center group"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-full h-full ${benefit.color}`} />
                </div>
<<<<<<< HEAD
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
=======
<<<<<<< HEAD
                <h3 className='text-xl font-bold text-white mb-4'>
                  {benefit.title}
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  {benefit.description}
                </p>              </motion.div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
className={`w-20 h-20 rounded-2xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <benefit && benefit.icon className={`w-full h-full ${benefit && benefit.color}`} />;
                </div>;
                <h3 className='text-xl font-bold text-white mb-4'>;
                  {benefit && benefit.title}
                </h3>;
                <p className='text-gray-300 leading-relaxed'>;
                  {benefit && benefit.description}
                </p>              </motion && motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20'>;
        <div className='container mx-auto px-4 text-center'>          <motion&& motion.div
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
=======
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20'>
        <div className='container mx-auto px-4 text-center'>          <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Secure</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for a breach to happen. Protect your business today with our advanced cybersecurity solutions 
              and stay one step ahead of evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                  <span>Start Your Security Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/comprehensive-services-showcase-2025" className="group">
                <button className="border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2">
                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">99.99%</div>
                <div className="text-gray-300">Threat Detection</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">450%</div>
                <div className="text-gray-300">ROI Improvement</div>
=======
            className='max-w-4xl mx-auto'
=======
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="max-w-4xl mx-auto"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Secure</span> Your Business?
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for a breach to happen. Protect your business today with our advanced cybersecurity solutions
              and stay one step ahead of evolving threats.
            </p>
<<<<<<< HEAD
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;group&quot;>
                <button className=&quot;bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2&quot;>
                  <span>Start Your Security Journey</span>
                  <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
                </button>
              </Link>
              
              <Link href=&quot;/comprehensive-services-showcase-2025&quot; className=&quot;group&quot;>
                <button className=&quot;border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2&quot;>
                  <span>View All Services</span>
                  <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
                </button>
              </Link>
            </div>
            
            <div className=&quot;mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center&quot;>
              <div>
                <div className=&quot;text-3xl font-bold text-red-400 mb-2&quot;>24/7</div>
                <div className=&quot;text-gray-300&quot;>Security Monitoring</div>
              </div>
              <div>
                <div className=&quot;text-3xl font-bold text-red-400 mb-2&quot;>99.99%</div>
                <div className=&quot;text-gray-300&quot;>Threat Detection</div>
              </div>
              <div>
                <div className=&quot;text-3xl font-bold text-red-400 mb-2&quot;>450%</div>
                <div className=&quot;text-gray-300&quot;>ROI Improvement</div>

=======
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link href='/contact' className='group'>
                <button className='bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2'>
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <span>Start Your Security Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
<<<<<<< HEAD
              <Link
                href='/comprehensive-services-showcase-2025'
                className='group'
              >
                <button className='border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2'>
=======
              <Link href="/comprehensive-services-showcase-2025" className="group">
                <button className="border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
<<<<<<< HEAD
            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
=======
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">99.99%</div>
                <div className="text-gray-300">Threat Detection</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">450%</div>
                <div className="text-gray-300">ROI Improvement</div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
    </Layout>
<<<<<<< HEAD
Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
                </p>              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py - 20 bg - gradient - to - r from - red - 900 / 20 via - pink - 900 / 20 to - purple - 900 / 20'>;
        <div className='container mx - auto px - 4 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='max - w-4xl mx - auto';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to{' '}
              <span className='bg - gradient - to - r from - red - 400 to - pink - 400 bg - clip - text text - transparent'>;
                Secure;
              </span>{' '}
              Your Business?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
              Don't wait for a breach to happen. Protect your business today;
              with our advanced cybersecurity solutions and stay one step ahead;
              of evolving threats.;
            </p>;
  )
}
            <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
              <Link href='/contact' className='group'>;
                <button className='bg - gradient - to - r from - red - 500 to - pink - 600 hover:from - red - 600 hover:to - pink - 700 text - white px - 8 py - 4 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center space - x-2'>;
                  <span > Start Your Security Journey</span>;
                  <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
                </button>;
              </Link>;
              <Link;
                href='/comprehensive - services - showcase - 2025';
                className='group';
              >;
                <button className='border - 2 border - red - 500 / 50 hover:border - red - 400 text - red - 400 hover:text - red - 300 px - 8 py - 4 rounded - full font - semibold text - lg transition - all duration - 300 hover:bg - red - 500 / 10 flex items - center space - x-2'>;
                  <span > View All Services</span>;
                  <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
                </button>;
              </Link>;
            </div>;
            <div className='mt - 12 grid grid - cols - 1 md:grid - cols - 3 gap - 8 text - center'>;
              <div>;
                <div className='text - 3xl font - bold text - red - 400 mb - 2'>24 / 7</div>;
                <div className='text - gray - 300'>Security Monitoring</div>;
              </div>;
              <div>;
                <div className='text - 3xl font - bold text - red - 400 mb - 2'>;
                  99.99%;
                </div>;
                <div className='text - gray - 300'>Threat Detection</div>;
              </div>;
              <div>;
                <div className='text - 3xl font - bold text - red - 400 mb - 2'>450%</div>;
                <div className='text - gray - 300'>ROI Improvement</div>              </div>;
=======
<<<<<<< HEAD
);
=======
=======
<<<<<<< HEAD
    </Layout>;
);

}
=======
    </Layout>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
            className="max-w-4xl mx-auto";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready to <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Secure</span> Your Business?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Don't wait for a breach to happen. Protect your business today with our advanced cybersecurity solutions;
              and stay one step ahead of evolving threats.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <Link href="/contact" className="group">;
                <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">;
                  <span>Start Your Security Journey</span>;
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />;
                </button>;
              </Link>;
              <Link href="/comprehensive-services-showcase-2025" className="group">;
                <button className="border-2 border-red-500/50 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center space-x-2">;
                  <span>View All Services</span>;
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />;
                </button>;
              </Link>;
            </div>;
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">;
              <div>;
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>;
                <div className="text-gray-300">Security Monitoring</div>;
              </div>;
              <div>;
                <div className="text-3xl font-bold text-red-400 mb-2">99.99%</div>;
                <div className="text-gray-300">Threat Detection</div>;
              </div>;
              <div>;
                <div className="text-3xl font-bold text-red-400 mb-2">450%</div>;
                <div className="text-gray-300">ROI Improvement</div>;
              </div>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </div>;
          </motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD
    </Layout>);
;
=======
    </Layout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
