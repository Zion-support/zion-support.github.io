import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, CheckCircle, ArrowRight, Star, Phone, Mail, MapPin, 
  Zap, Sparkles, Lock, Cpu, Database, Cloud, Users, 
  Briefcase, BookOpen, MessageCircle, TrendingUp,
  Target, Layers, Globe, Brain, Atom, Building, Network,
  Eye, Key, Server, LockKeyhole, Fingerprint, ShieldCheck
} from 'lucide-react';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const features = [
  'Identity verification',
  'Device trust scoring',
  'Continuous monitoring',
  'Micro-segmentation',
  'Least privilege access',
  'Real-time threat detection',
  'Automated response',
  'Compliance automation'
];

const benefits = [
  'Eliminate network perimeter',
  'Reduce attack surface',
  'Improve compliance',
  'Enhanced visibility',
  'Automated security',
  'Cost-effective protection'
];

const useCases = [
  'Enterprise organizations',
  'Government agencies',
  'Healthcare institutions',
  'Financial services',
  'Educational institutions',
  'Manufacturing companies'
];

const technology = [
  'Zero Trust Architecture',
  'Identity Management',
  'Network Security',
  'AI-Powered Analytics',
  'Automation Systems',
  'Compliance Tools'
];

const pricingPlans = [
  {
    name: 'Zero Trust Starter',
    price: '$29,999',
    period: '/month',
    description: 'Perfect for small to medium enterprises',
    features: [
      'Basic identity verification',
      'Device trust scoring',
      'Network monitoring',
      'Basic support',
      'Training modules'
    ],
    popular: false
  },
  {
    name: 'Zero Trust Enterprise',
    price: '$59,999',
    period: '/month',
    description: 'For large enterprises and organizations',
    features: [
      'Advanced identity management',
      'Full micro-segmentation',
      'AI threat detection',
      'Priority support',
      'Custom training',
      'Integration services'
    ],
    popular: true
  },
  {
    name: 'Zero Trust Government',
    price: '$119,999',
    period: '/month',
    description: 'For government and military organizations',
    features: [
      'Military-grade security',
      'Custom compliance',
      'On-site deployment',
      '24/7 dedicated support',
      'Full compliance certification',
      'Complete training program'
    ],
    popular: false
  }
];

export default function ZeroTrustNetworkArchitecture2029() {
  return (
    <>
      <Head>
        <title>Zero Trust Network Architecture 2029 | Zion Tech Group</title>
        <meta name="description" content="Revolutionary zero trust network architecture that eliminates traditional network perimeters and provides continuous security verification for all users and devices." />
        <meta name="keywords" content="zero trust, network security, cybersecurity, 2029 technology, network architecture" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zero Trust Network Architecture 2029" />
        <meta property="og:description" content="Revolutionary zero trust network architecture that eliminates traditional network perimeters and provides continuous security verification for all users and devices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zero-trust-network-architecture-2029" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zero Trust Network Architecture 2029" />
        <meta name="twitter:description" content="Revolutionary zero trust network architecture that eliminates traditional network perimeters and provides continuous security verification for all users and devices." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.svg" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8b5cf6" />
        <link rel="canonical" href="https://ziontechgroup.com/zero-trust-network-architecture-2029" />
      </Head>

      <UltraFuturisticNavigation2029 />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Zero Trust Network Architecture 2029
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Eliminate traditional network perimeters with continuous verification for every user and device, leveraging AI-powered analytics and micro-segmentation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#contact" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#features" className="inline-flex items-center px-6 py-3 rounded-xl bg-gray-800 text-gray-100 font-semibold hover:bg-gray-700 transition-colors">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature} className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">{feature}</h3>
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-gray-400">Robust capability built for modern zero trust deployments.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`p-8 rounded-2xl border ${plan.popular ? 'border-purple-500/40' : 'border-gray-800'} bg-gray-900`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-xl font-semibold">{plan.name}</h3>
                  {plan.popular && (
                    <span className="px-3 py-1 text-xs rounded-full bg-purple-600/20 text-purple-300">Most Popular</span>
                  )}
                </div>
                <div className="mt-4 flex items-end space-x-2">
                  <span className="text-3xl text-white font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400 mt-4">{plan.description}</p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="mt-6 inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-600 hover:to-purple-700 transition-colors">
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3"><Phone className="w-4 h-4 text-cyan-400" /><span>{contactInfo.mobile}</span></li>
                <li className="flex items-center space-x-3"><Mail className="w-4 h-4 text-purple-400" /><span>{contactInfo.email}</span></li>
                <li className="flex items-center space-x-3"><MapPin className="w-4 h-4 text-green-400" /><span>{contactInfo.address}</span></li>
                <li className="flex items-center space-x-3"><Globe className="w-4 h-4 text-blue-400" /><span>{contactInfo.website}</span></li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-white text-xl font-semibold mb-4">Why Zion Tech Group?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3"><Star className="w-4 h-4 text-yellow-400" /><span>Industry-leading innovation and security expertise</span></li>
                <li className="flex items-center space-x-3"><TrendingUp className="w-4 h-4 text-emerald-400" /><span>Proven ROI and measurable outcomes</span></li>
                <li className="flex items-center space-x-3"><Shield className="w-4 h-4 text-cyan-400" /><span>End-to-end zero trust implementation</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <UltraFuturisticFooter2029 />
    </>
  );
}