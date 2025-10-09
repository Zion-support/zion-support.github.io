'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, FileText, GitBranch, PieChart, Activity, AlertCircle, Settings, Users2, Target as TargetIcon, BarChart3, Clock3, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings as SettingsIcon, BarChart as BarChartIcon, FileText as FileTextIcon, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar as CalendarIcon, Compass, Globe2, Map, Navigation as NavigationIcon, TrendingDown, CloudUpload, CloudDownload, Server, HardDrive, Wifi, Router, Database as DatabaseIcon2, Shield as ShieldIcon, Lock as LockIcon, Users as UsersIcon2, Settings as SettingsIcon2, BarChart as BarChartIcon2, FileText as FileTextIcon2, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon2, Compass as CompassIcon, Globe2 as Globe2Icon, Map as MapIcon, Navigation as NavigationIcon2, TrendingDown as TrendingDownIcon } from 'lucide-react';

const CloudMigrationPage: React.FC = () => {
  const features = [
    'Comprehensive cloud readiness assessment',
    'Automated migration planning and execution',
    'Zero-downtime migration strategies',
    'Data security and compliance validation',
    'Performance optimization and monitoring',
    'Cost optimization and resource management',
    'Multi-cloud and hybrid cloud solutions',
    'Disaster recovery and backup strategies',
    '24/7 migration support and monitoring',
    'Post-migration optimization and training'
  ];

  const benefits = [
    'Reduce migration time by 60%',
    'Lower cloud costs by 40%',
    'Improve system performance by 50%',
    'Enhance security and compliance',
    'Increase scalability and flexibility',
    'Save 50+ hours on migration planning',
    'Minimize business disruption',
    'Future-proof your infrastructure'
  ];

  const pricing = [
    {
      name: 'Small Business',
      price: '$2,999',
      description: 'Perfect for small companies',
      features: [
        'Up to 10 servers',
        'Basic migration planning',
        'Standard security measures',
        'Email support',
        '30-day post-migration support',
        'Migration documentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 servers',
        'Advanced migration planning',
        'Enhanced security measures',
        'Priority support',
        '90-day post-migration support',
        'Performance optimization',
        'Cost optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Custom migration strategy',
        'Enterprise security',
        'Dedicated support',
        '1-year post-migration support',
        'Custom integrations',
        'Training and documentation',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const cloudProviders = [
    'Amazon Web Services', 'Microsoft Azure', 'Google Cloud Platform', 'IBM Cloud', 'Oracle Cloud', 'Alibaba Cloud'
  ];

  const migrationSteps = [
    'Assessment and Planning',
    'Security and Compliance Review',
    'Migration Strategy Development',
    'Pilot Migration Testing',
    'Full Migration Execution',
    'Performance Optimization',
    'Monitoring and Support',
    'Training and Documentation'
  ];

  return (
    <>
      <SEOOptimizer
        title="Cloud Migration Services - Zion Tech Group"
        description="Expert cloud migration services with zero-downtime strategies, automated planning, and cost optimization. Reduce migration time by 60% and lower costs by 40%."
        keywords={['cloud migration', 'AWS migration', 'Azure migration', 'cloud services', 'infrastructure migration', 'cloud consulting']}
        canonicalUrl="https://ziontechgroup.com/cloud-migration"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Cloud Migration Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Expert cloud migration with zero-downtime strategies
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Seamlessly migrate your infrastructure to the cloud with our expert services. 
                Reduce migration time by 60% while lowering costs by 40% and improving performance by 50%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Assessment</span>
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Comprehensive Migration Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                      <h3 className="text-lg font-bold text-white">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Proven Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">
                      {benefit.split(' ')[0]}
                    </div>
                    <div className="text-gray-300">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Migration Process Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Our Migration Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {migrationSteps.map((step, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cloud Providers Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Supported Cloud Providers
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {cloudProviders.map((provider, index) => (
                  <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                    <div className="text-2xl mb-2">☁️</div>
                    <div className="text-white font-medium">{provider}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricing.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                      className="w-full cyber-button text-center block"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free cloud readiness assessment and migration plan tailored to your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Assessment</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CloudMigrationPage;