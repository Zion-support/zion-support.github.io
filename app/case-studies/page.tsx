'use client';
import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Clock, Target, BarChart, Zap, Shield, Brain, Cloud, Code, Database, Globe, Settings, MessageSquare, Eye, Cpu, Lock, FileText, Search, Bot, Calculator, Calendar, Compass, Navigation, PieChart, Activity, Star, Award, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Video, Gamepad2, ShoppingCart, CreditCard, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEOOptimizer from '../components/EnhancedSEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Legacy system integration and process automation',
      solution: 'AI-powered workflow automation and data integration',
      results: {
        costSavings: '$2.5M',
        efficiencyGain: '85%',
        timeReduction: '70%',
        roi: '340%'
      },
      technologies: ['AI Automation', 'Machine Learning', 'Cloud Migration', 'Data Analytics'],
      duration: '6 months',
      teamSize: '12 engineers',
      image: '/case-studies/manufacturing.jpg',
      description: 'Transformed a traditional manufacturing company with AI-powered automation, reducing operational costs by 70% and increasing efficiency by 85%.'
    },
    {
      id: 2,
      title: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Patient data management and diagnostic accuracy',
      solution: 'AI-powered medical imaging and patient management system',
      results: {
        costSavings: '$1.8M',
        efficiencyGain: '90%',
        timeReduction: '60%',
        roi: '280%'
      },
      technologies: ['Computer Vision', 'NLP', 'Predictive Analytics', 'Cloud Infrastructure'],
      duration: '8 months',
      teamSize: '15 engineers',
      image: '/case-studies/healthcare.jpg',
      description: 'Implemented AI-powered diagnostic tools that improved accuracy by 40% and reduced patient wait times by 60%.'
    },
    {
      id: 3,
      title: 'Financial Services Corporation',
      industry: 'Finance',
      challenge: 'Fraud detection and risk management',
      solution: 'Advanced AI fraud detection and risk assessment platform',
      results: {
        costSavings: '$3.2M',
        efficiencyGain: '95%',
        timeReduction: '80%',
        roi: '420%'
      },
      technologies: ['Machine Learning', 'Real-time Analytics', 'Blockchain', 'Cybersecurity'],
      duration: '10 months',
      teamSize: '18 engineers',
      image: '/case-studies/finance.jpg',
      description: 'Deployed AI-powered fraud detection that reduced false positives by 75% and prevented $50M+ in fraudulent transactions.'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'Personalization and inventory optimization',
      solution: 'AI recommendation engine and demand forecasting',
      results: {
        costSavings: '$1.5M',
        efficiencyGain: '70%',
        timeReduction: '50%',
        roi: '250%'
      },
      technologies: ['Recommendation Engine', 'Predictive Analytics', 'Cloud Computing', 'Data Science'],
      duration: '5 months',
      teamSize: '10 engineers',
      image: '/case-studies/ecommerce.jpg',
      description: 'Increased conversion rates by 35% and reduced inventory costs by 40% through AI-powered personalization.'
    },
    {
      id: 5,
      title: 'Government Agency',
      industry: 'Government',
      challenge: 'Citizen services automation and data security',
      solution: 'AI-powered citizen portal and automated processing',
      results: {
        costSavings: '$4.1M',
        efficiencyGain: '80%',
        timeReduction: '65%',
        roi: '380%'
      },
      technologies: ['NLP', 'Process Automation', 'Cybersecurity', 'Cloud Infrastructure'],
      duration: '12 months',
      teamSize: '20 engineers',
      image: '/case-studies/government.jpg',
      description: 'Automated 80% of citizen services, reducing processing time from weeks to hours while maintaining security compliance.'
    },
    {
      id: 6,
      title: 'Retail Chain',
      industry: 'Retail',
      challenge: 'Supply chain optimization and customer analytics',
      solution: 'AI-powered supply chain and customer behavior analytics',
      results: {
        costSavings: '$2.8M',
        efficiencyGain: '75%',
        timeReduction: '55%',
        roi: '320%'
      },
      technologies: ['Supply Chain AI', 'Customer Analytics', 'IoT Integration', 'Real-time Monitoring'],
      duration: '7 months',
      teamSize: '14 engineers',
      image: '/case-studies/retail.jpg',
      description: 'Optimized supply chain operations, reducing stockouts by 60% and improving customer satisfaction by 45%.'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Average ROI', value: '320%', icon: TrendingUp },
    { label: 'Cost Savings', value: '$50M+', icon: DollarSign },
    { label: 'Efficiency Gains', value: '85%', icon: Zap },
    { label: 'Time Reduction', value: '70%', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEOOptimizer
        title="Case Studies - Zion Tech Group"
        description="Explore our successful AI and IT transformation projects. See how we've helped Fortune 500 companies achieve 300%+ ROI with our cutting-edge solutions."
        keywords={['case studies', 'AI success stories', 'IT transformation', 'enterprise AI', 'digital transformation', 'ROI', 'cost savings', 'efficiency gains']}
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Case Studies
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Real results from real clients. See how we've transformed businesses across industries with AI and IT solutions.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <article key={study.id} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {study.industry}
                  </span>
                  <span className="text-sm text-gray-400">{study.duration}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 neon-text">{study.title}</h3>
                <p className="text-gray-300 mb-6">{study.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Challenge</h4>
                  <p className="text-gray-300 mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Solution</h4>
                  <p className="text-gray-300 mb-4">{study.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{study.results.costSavings}</div>
                    <div className="text-sm text-gray-300">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{study.results.efficiencyGain}</div>
                    <div className="text-sm text-gray-300">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{study.results.timeReduction}</div>
                    <div className="text-sm text-gray-300">Time Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{study.results.roi}</div>
                    <div className="text-sm text-gray-300">ROI</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="bg-slate-800 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Team: {study.teamSize}</span>
                  <a href={`/case-studies/${study.id}`} className="text-cyan-400 hover:text-white transition-colors flex items-center">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join the ranks of successful companies that have achieved remarkable results with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Start Your Project
              </a>
              <a href="/services" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;