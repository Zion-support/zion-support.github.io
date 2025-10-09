'use client';
import React from 'react';
import { CheckCircle, TrendingUp, Users, DollarSign, Target, Shield, Brain, Cloud } from 'lucide-react';;
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing 15% defect rate and $2M annual losses',
      solution: 'AI-powered computer vision system for real-time quality inspection',
      results: [
        '95% reduction in defect rate',
        '$3.2M annual cost savings',
        '300% increase in inspection speed',
        'Zero false positives after 6 months'
      ],
      technologies: ['Computer Vision', 'Machine Learning', 'IoT Sensors', 'Real-time Analytics'],
      duration: '6 months',
      roi: '450%',
      icon: Shield,
      color: 'text-green-400'
    },
    {
      id: 2,
      title: 'Global E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'Poor customer experience with 40% cart abandonment and low conversion rates',
      solution: 'AI-powered recommendation engine and personalized shopping experience',
      results: [
        '65% increase in conversion rate',
        '40% reduction in cart abandonment',
        '$12M additional revenue in first year',
        '85% customer satisfaction improvement'
      ],
      technologies: ['Recommendation Engine', 'NLP', 'Real-time Personalization', 'A/B Testing'],
      duration: '4 months',
      roi: '320%',
      icon: Target,
      color: 'text-blue-400'
    },
    {
      id: 3,
      title: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Manual patient scheduling causing 30% no-show rates and inefficient resource utilization',
      solution: 'AI-powered scheduling optimization and patient engagement system',
      results: [
        '50% reduction in no-show rates',
        '35% improvement in resource utilization',
        '$1.8M cost savings annually',
        '90% patient satisfaction score'
      ],
      technologies: ['Predictive Analytics', 'NLP', 'Mobile Integration', 'Automated Reminders'],
      duration: '5 months',
      roi: '280%',
      icon: Brain,
      color: 'text-purple-400'
    },
    {
      id: 4,
      title: 'Financial Services Institution',
      industry: 'Finance',
      challenge: 'Manual fraud detection missing 25% of fraudulent transactions worth $5M annually',
      solution: 'Advanced AI fraud detection system with real-time monitoring',
      results: [
        '98% fraud detection accuracy',
        '$8M prevented fraud losses',
        '99.9% system uptime',
        '60% reduction in false positives'
      ],
      technologies: ['Machine Learning', 'Real-time Processing', 'Anomaly Detection', 'Risk Scoring'],
      duration: '3 months',
      roi: '600%',
      icon: Shield,
      color: 'text-red-400'
    },
    {
      id: 5,
      title: 'Supply Chain Management Company',
      industry: 'Logistics',
      challenge: 'Inefficient route planning causing 20% fuel waste and delivery delays',
      solution: 'AI-powered route optimization and predictive maintenance system',
      results: [
        '30% reduction in fuel costs',
        '25% improvement in delivery times',
        '$4.5M annual savings',
        '95% on-time delivery rate'
      ],
      technologies: ['Route Optimization', 'Predictive Analytics', 'IoT Integration', 'Real-time Tracking'],
      duration: '4 months',
      roi: '380%',
      icon: Cloud,
      color: 'text-cyan-400'
    },
    {
      id: 6,
      title: 'Educational Technology Platform',
      industry: 'Education',
      challenge: 'Low student engagement and poor learning outcomes with traditional methods',
      solution: 'AI-powered personalized learning platform with adaptive content',
      results: [
        '70% improvement in student engagement',
        '45% increase in learning outcomes',
        '60% reduction in dropout rates',
        '85% teacher satisfaction improvement'
      ],
      technologies: ['Adaptive Learning', 'NLP', 'Learning Analytics', 'Content Personalization'],
      duration: '7 months',
      roi: '250%',
      icon: Brain,
      color: 'text-yellow-400'
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Average ROI', value: '350%', icon: TrendingUp },
    { label: 'Client Satisfaction', value: '98%', icon: Users },
    { label: 'Cost Savings Delivered', value: '$50M+', icon: DollarSign },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Featured Case Studies
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <article key={study.id} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <study.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{study.title}</h3>
                    <div className="text-cyan-400 font-semibold">{study.industry}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                    <div>
                      <div className="text-sm text-gray-400">Duration</div>
                      <div className="text-white font-semibold">{study.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">ROI</div>
                      <div className={`font-semibold ${study.color}`}>{study.roi}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
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