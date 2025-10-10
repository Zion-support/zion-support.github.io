#!/bin/bash

# Function to create a clean AR/VR platform page
fix_ar_vr_platform() {
    cat > app/ar-vr-platform/page.tsx << 'AR_VR_EOF'
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const ArVrPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered AR/VR',
      description: 'Advanced AI algorithms that enhance AR/VR experiences with intelligent interactions.',
      benefits: ['Smart object recognition', 'Predictive interactions', 'Automated content generation', 'Real-time adaptation']
    },
    {
      icon: BarChart,
      title: 'Immersive Analytics',
      description: 'Comprehensive analytics for AR/VR experiences and user engagement.',
      benefits: ['User behavior tracking', 'Performance metrics', 'Engagement analytics', 'Experience optimization']
    },
    {
      icon: Target,
      title: 'Precision Tracking',
      description: 'Accurate spatial tracking and object recognition for seamless experiences.',
      benefits: ['Spatial mapping', 'Object detection', 'Gesture recognition', 'Eye tracking']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize AR/VR performance for smooth, responsive experiences.',
      benefits: ['Frame rate optimization', 'Latency reduction', 'Battery optimization', 'Resource management']
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security to protect user data and privacy.',
      benefits: ['Data encryption', 'Privacy controls', 'Secure authentication', 'Compliance support']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'High-performance real-time processing for responsive AR/VR experiences.',
      benefits: ['Low latency', 'High throughput', 'Real-time rendering', 'Instant feedback']
    }
  ];

  const benefits = [
    'Increase user engagement by up to 70%',
    'Reduce development time by 50% with AI tools',
    'Improve user experience with intelligent interactions',
    'Scale AR/VR applications without proportional complexity',
    'Gain competitive advantage with cutting-edge technology'
  ];

  return (
    <>
      <Helmet>
        <title>AR/VR Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced AR/VR platform with AI-powered features for immersive experiences. Build next-generation augmented and virtual reality applications." />
        <meta name="keywords" content="AR VR platform, augmented reality, virtual reality, AI-powered AR, immersive experiences, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AR/VR Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AR/VR platform with AI-powered features for immersive experiences. Build next-generation augmented and virtual reality applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AR/VR technology that drives immersive experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive user engagement and business success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your AR/VR platform requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ArVrPlatformPage;
AR_VR_EOF
    echo "Fixed ar-vr-platform/page.tsx"
}

# Function to create a clean backup recovery page
fix_backup_recovery() {
    cat > app/backup-recovery/page.tsx << 'BACKUP_EOF'
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const BackupRecoveryPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Backup Solutions',
      description: 'Enterprise-grade backup solutions to protect your critical data and systems.',
      benefits: ['Automated backups', 'Encrypted storage', 'Version control', 'Disaster recovery']
    },
    {
      icon: Zap,
      title: 'Fast Recovery',
      description: 'Quick and reliable data recovery with minimal downtime and data loss.',
      benefits: ['Rapid restoration', 'Point-in-time recovery', 'Minimal downtime', 'Data integrity']
    },
    {
      icon: Brain,
      title: 'AI-Powered Monitoring',
      description: 'Intelligent monitoring and predictive analytics for backup systems.',
      benefits: ['Predictive failures', 'Automated alerts', 'Performance optimization', 'Smart scheduling']
    },
    {
      icon: BarChart,
      title: 'Comprehensive Analytics',
      description: 'Detailed analytics and reporting for backup operations and compliance.',
      benefits: ['Backup reports', 'Compliance tracking', 'Performance metrics', 'Audit trails']
    },
    {
      icon: Target,
      title: 'Precision Recovery',
      description: 'Granular recovery options for specific files, databases, and systems.',
      benefits: ['File-level recovery', 'Database recovery', 'System recovery', 'Selective restore']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Round-the-clock monitoring and support for your backup systems.',
      benefits: ['Continuous monitoring', 'Instant alerts', 'Expert support', 'Proactive maintenance']
    }
  ];

  const benefits = [
    'Reduce data loss risk by up to 99.9%',
    'Minimize recovery time by up to 80%',
    'Ensure business continuity with reliable backups',
    'Meet compliance requirements with automated reporting',
    'Gain peace of mind with enterprise-grade security'
  ];

  return (
    <>
      <Helmet>
        <title>Backup & Recovery - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade backup and recovery solutions. Protect your critical data with secure, reliable backup systems and fast recovery options." />
        <meta name="keywords" content="backup recovery, data protection, disaster recovery, enterprise backup, data security, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Backup & Recovery
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade backup and recovery solutions. Protect your critical data with secure, reliable backup systems and fast recovery options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced backup and recovery technology that protects your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that protect your business and ensure continuity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your backup and recovery requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BackupRecoveryPage;
BACKUP_EOF
    echo "Fixed backup-recovery/page.tsx"
}

# Run the fixes
echo "Fixing remaining syntax errors..."
fix_ar_vr_platform
fix_backup_recovery

echo "All remaining syntax errors fixed!"
