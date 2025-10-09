'use client';
import React from 'react';
<<<<<<< HEAD
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity } from 'lucide-react';

const DevopsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="DevOps & CI/CD - Zion Tech Group"
        description="Streamlined development workflows with automated testing, deployment, and monitoring."
        keywords={["DevOps","CI/CD","automated deployment","container orchestration","infrastructure as code"]}
        canonicalUrl="https://ziontechgroup.com/devops"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DevOps & CI/CD
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamlined development workflows with automated testing, deployment, and monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Powerful capabilities designed to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">CI/CD Pipelines</h3>
              <p className="text-gray-300">Advanced ci/cd pipelines capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Automated Testing</h3>
              <p className="text-gray-300">Advanced automated testing capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Container Orchestration</h3>
              <p className="text-gray-300">Advanced container orchestration capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Monitoring Setup</h3>
              <p className="text-gray-300">Advanced monitoring setup capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Infrastructure as Code</h3>
              <p className="text-gray-300">Advanced infrastructure as code capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">GitOps Implementation</h3>
              <p className="text-gray-300">Advanced gitops implementation capabilities powered by AI</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our DevOps & CI/CD?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Proven results and measurable impact for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Faster Deployments</h3>
              <p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Reduced Errors</h3>
              <p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Better Collaboration</h3>
              <p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Automated Processes</h3>
              <p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">DevOps & CI/CD</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$1,199/month</div>
              <p className="text-gray-300 mb-6">per month</p>
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Contact our experts to discuss your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us your requirements</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg font-semibold">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-pink-400/20">
              <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-pink-400 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DevopsPage;
=======
import { Settings, Zap, Cloud, Shield, BarChart, GitBranch, Container, Monitor } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DevOpsPage: React.FC = () => {
  const devopsServices = [
    {
      title: 'CI/CD Pipelines',
      description: 'Automated continuous integration and deployment pipelines for faster, reliable releases',
      icon: GitBranch,
      features: ['Automated Testing', 'Code Quality Checks', 'Deployment Automation', 'Rollback Capabilities']
    },
    {
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker container management and orchestration',
      icon: Container,
      features: ['Kubernetes Setup', 'Docker Management', 'Auto-scaling', 'Service Mesh']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure through code for consistency and reliability',
      icon: Cloud,
      features: ['Terraform', 'CloudFormation', 'Ansible', 'Infrastructure Monitoring']
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring, logging, and alerting systems',
      icon: Monitor,
      features: ['Application Monitoring', 'Log Aggregation', 'Performance Metrics', 'Alert Management']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="DevOps & CI/CD Solutions - Zion Tech Group"
        description="Comprehensive DevOps solutions including CI/CD pipelines, container orchestration, infrastructure as code, and monitoring. Streamline your development workflow."
        keywords={['DevOps', 'CI/CD', 'container orchestration', 'infrastructure as code', 'monitoring', 'automation']}
        canonicalUrl="https://ziontechgroup.com/devops"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              DevOps & CI/CD
            </h1>
            <p className="text-xl text-green-400 mb-8 font-medium">
              Streamline Your Development Workflow
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Accelerate your development process with our comprehensive DevOps solutions. 
              From CI/CD pipelines to container orchestration, we help you deploy faster and more reliably.
            </p>
          </section>

          {/* DevOps Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devopsServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our DevOps Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Faster Deployments</h3>
                <p className="text-gray-300">Automated pipelines that reduce deployment time from hours to minutes.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Reliable Releases</h3>
                <p className="text-gray-300">Consistent, repeatable deployments with automated testing and quality checks.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">Full Visibility</h3>
                <p className="text-gray-300">Comprehensive monitoring and logging for complete system visibility.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your DevOps?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our DevOps experts help you build efficient, automated development workflows. 
              Get a free consultation and discover how we can accelerate your development process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DevOpsPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-11ea
