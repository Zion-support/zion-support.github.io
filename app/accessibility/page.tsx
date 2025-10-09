'use client';
import React from 'react';
import { Brain, Eye, Ear, Hand, Users, CheckCircle, ArrowRight, Zap, Settings, Code, BarChart, Cloud, Target, MessageSquare, Cpu, Database, Mail, Phone, MapPin, Lock, Truck, Factory, GraduationCap, Stethoscope, CreditCard, Home, Briefcase, Wrench, FileText, Search, Bot, Music, Video, Gamepad2, ShoppingCart, Building, Car, Plane, Ship, Train, Heart, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, TrendingUp, Award, Accessibility } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AccessibilityPage: React.FC = () => {
  const accessibilityFeatures = [
    {
      title: 'Screen Reader Support',
      description: 'Full compatibility with screen readers and assistive technologies',
      icon: Eye,
      features: [
        'Semantic HTML structure',
        'ARIA labels and descriptions',
        'Proper heading hierarchy',
        'Alt text for all images',
        'Focus management and navigation'
      ]
    },
    {
      title: 'Keyboard Navigation',
      description: 'Complete keyboard accessibility for all interactive elements',
      icon: Hand,
      features: [
        'Tab navigation support',
        'Skip links for main content',
        'Keyboard shortcuts',
        'Focus indicators',
        'Logical tab order'
      ]
    },
    {
      title: 'Visual Accessibility',
      description: 'High contrast and customizable visual elements',
      icon: Eye,
      features: [
        'High contrast mode support',
        'Customizable font sizes',
        'Color-blind friendly palettes',
        'Clear visual hierarchy',
        'Consistent design patterns'
      ]
    },
    {
      title: 'Motor Accessibility',
      description: 'Support for users with motor impairments',
      icon: Hand,
      features: [
        'Large click targets',
        'Adjustable timing controls',
        'Voice control compatibility',
        'Switch navigation support',
        'Gesture alternatives'
      ]
    },
    {
      title: 'Cognitive Accessibility',
      description: 'Clear and understandable content and navigation',
      icon: Brain,
      features: [
        'Simple language and structure',
        'Consistent navigation patterns',
        'Clear error messages',
        'Progress indicators',
        'Help and guidance tools'
      ]
    },
    {
      title: 'Audio Accessibility',
      description: 'Support for users with hearing impairments',
      icon: Ear,
      features: [
        'Video captions and transcripts',
        'Visual alerts and notifications',
        'Text alternatives for audio',
        'Volume controls',
        'Audio description support'
      ]
    }
  ];

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines Level AA compliance',
      status: 'Compliant',
      icon: Award,
      color: 'text-green-400'
    },
    {
      name: 'Section 508',
      description: 'US federal accessibility requirements',
      status: 'Compliant',
      icon: Shield,
      color: 'text-blue-400'
    },
    {
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance',
      status: 'Compliant',
      icon: Users,
      color: 'text-purple-400'
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard',
      status: 'Compliant',
      icon: Globe,
      color: 'text-orange-400'
    }
  ];

  const assistiveTechnologies = [
    {
      name: 'Screen Readers',
      technologies: ['NVDA', 'JAWS', 'VoiceOver', 'TalkBack', 'Orca'],
      icon: Eye
    },
    {
      name: 'Voice Control',
      technologies: ['Dragon NaturallySpeaking', 'Voice Access', 'Voice Control'],
      icon: Mic
    },
    {
      name: 'Switch Navigation',
      technologies: ['Switch Control', 'Assistive Touch', 'External switches'],
      icon: Settings
    },
    {
      name: 'Magnification',
      technologies: ['ZoomText', 'MAGic', 'Built-in browser zoom'],
      icon: Search
    }
  ];

  const accessibilityTools = [
    {
      title: 'Accessibility Checker',
      description: 'Built-in tool to identify and fix accessibility issues',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      title: 'High Contrast Mode',
      description: 'Toggle high contrast mode for better visibility',
      icon: Eye,
      color: 'text-blue-400'
    },
    {
      title: 'Text Size Controls',
      description: 'Increase or decrease text size for better readability',
      icon: Type,
      color: 'text-purple-400'
    },
    {
      title: 'Focus Indicators',
      description: 'Enhanced focus indicators for keyboard navigation',
      icon: Target,
      color: 'text-orange-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Accessibility - Zion Tech Group"
        description="Learn about Zion Tech Group's commitment to web accessibility and inclusive design for all users."
        keywords={['accessibility', 'WCAG', 'inclusive design', 'Zion Tech Group', 'web accessibility', 'ADA compliance']}
        canonicalUrl="https://ziontechgroup.com/accessibility"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <Accessibility className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Accessibility
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're committed to making our website and services accessible to everyone. 
            Our inclusive design ensures equal access for users of all abilities.
          </p>
        </section>

        {/* Accessibility Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Accessibility Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Standards Compliance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Standards Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <standard.icon className={`w-12 h-12 ${standard.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
                <p className="text-gray-300 mb-3">{standard.description}</p>
                <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-500 text-white">
                  {standard.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Assistive Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Supported Assistive Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assistiveTechnologies.map((tech, index) => (
              <div key={index} className="cyber-card p-6">
                <tech.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                <ul className="space-y-2">
                  {tech.technologies.map((technology, techIndex) => (
                    <li key={techIndex} className="text-gray-300 text-sm">
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Accessibility Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Built-in Accessibility Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityTools.map((tool, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <tool.icon className={`w-12 h-12 ${tool.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-gray-300">{tool.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accessibility Statement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our Accessibility Commitment
          </h2>
          <div className="cyber-card p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
                We continually improve the user experience for everyone and apply the relevant accessibility standards.
              </p>
              
              <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>We follow WCAG 2.1 AA guidelines to ensure our website is accessible to users with disabilities</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>We conduct regular accessibility audits and testing with users who have disabilities</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>We provide multiple ways to access information and services</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>We continuously monitor and improve our accessibility features</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-4">Feedback and Support</h3>
              <p className="text-gray-300 mb-4">
                If you encounter any accessibility barriers or have suggestions for improvement, 
                please contact our accessibility team. We welcome your feedback and are committed to addressing any issues promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Accessibility Support
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Need help with accessibility features or have feedback? Our team is here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:accessibility@ziontechgroup.com"
              className="cyber-button px-8 py-3 text-lg font-semibold"
            >
              Contact Accessibility Team
            </a>
            <a
              href="/support"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              General Support
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AccessibilityPage;