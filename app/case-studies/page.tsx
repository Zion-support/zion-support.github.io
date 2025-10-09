'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, TrendingUp, Users, DollarSign, Clock, Award, ArrowRight, Star, BarChart, Zap, Shield, Brain, Cloud, Code, Target, MessageSquare, Eye, Cpu, Lock, Database, Settings, Globe, FileText, Search, Bot, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, TrendingUp as TrendingUpIcon } from 'lucide-react';

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
        '$1.8M annual cost savings',
        '300% increase in inspection speed',
        'Zero false positives after 6 months'
      ],
      technologies: ['Computer Vision', 'Machine Learning', 'IoT Sensors', 'Real-time Analytics'],
      duration: '6 months',
      roi: '450%',
      image: '🏭',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      title: 'Global Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Patient data scattered across 15+ systems, causing 40% diagnostic delays',
      solution: 'AI-powered data integration and diagnostic assistance platform',
      results: [
        '60% faster diagnosis times',
        '85% reduction in data entry errors',
        '30% improvement in patient outcomes',
        '50% reduction in administrative costs'
      ],
      technologies: ['NLP', 'Data Integration', 'Predictive Analytics', 'HIPAA Compliance'],
      duration: '8 months',
      roi: '320%',
      image: '🏥',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 3,
      title: 'E-commerce Giant',
      industry: 'Retail',
      challenge: 'Inventory management causing $5M in lost sales and 25% overstock',
      solution: 'AI-powered demand forecasting and inventory optimization system',
      results: [
        '40% reduction in overstock',
        '25% increase in sales',
        '60% improvement in forecast accuracy',
        '$3.2M additional revenue'
      ],
      technologies: ['Predictive Analytics', 'Machine Learning', 'Supply Chain AI', 'Real-time Optimization'],
      duration: '4 months',
      roi: '280%',
      image: '🛒',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 4,
      title: 'Financial Services Leader',
      industry: 'Finance',
      challenge: 'Manual fraud detection missing 20% of fraudulent transactions',
      solution: 'Advanced AI fraud detection system with real-time monitoring',
      results: [
        '95% fraud detection accuracy',
        '80% reduction in false positives',
        '60% faster transaction processing',
        '$12M prevented fraud losses'
      ],
      technologies: ['Deep Learning', 'Real-time Processing', 'Anomaly Detection', 'Risk Scoring'],
      duration: '5 months',
      roi: '600%',
      image: '🏦',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 5,
      title: 'Logistics & Transportation',
      industry: 'Logistics',
      challenge: 'Route optimization causing 30% fuel waste and delivery delays',
      solution: 'AI-powered route optimization and predictive maintenance system',
      results: [
        '35% reduction in fuel costs',
        '25% faster delivery times',
        '50% reduction in vehicle breakdowns',
        '40% improvement in customer satisfaction'
      ],
      technologies: ['Route Optimization', 'Predictive Maintenance', 'IoT Integration', 'Real-time Tracking'],
      duration: '7 months',
      roi: '380%',
      image: '🚚',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 6,
      title: 'Educational Institution',
      industry: 'Education',
      challenge: 'Student dropout rate of 35% and low engagement levels',
      solution: 'AI-powered personalized learning platform and early warning system',
      results: [
        '50% reduction in dropout rate',
        '40% improvement in student engagement',
        '60% increase in course completion',
        '35% improvement in test scores'
      ],
      technologies: ['Personalized Learning', 'Predictive Analytics', 'Adaptive Content', 'Student Analytics'],
      duration: '9 months',
      roi: '250%',
      image: '🎓',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Average ROI', value: '350%', icon: TrendingUp },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Cost Savings', value: '$50M+', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how we've transformed businesses across industries with our AI and IT solutions. 
            Real results, real impact, real success stories.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Success Stories
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <article key={study.id} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{study.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <div className="text-cyan-400 font-medium">{study.industry}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Challenge</h4>
                  <p className="text-gray-300 mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">Solution</h4>
                  <p className="text-gray-300 mb-4">{study.solution}</p>
                </div>

                <div className="mb-6">
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

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="text-white font-semibold">{study.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">ROI</div>
                    <div className="text-green-400 font-semibold">{study.roi}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`bg-gradient-to-r ${study.color} p-4 rounded-lg text-center`}>
                  <div className="text-white font-bold text-lg">Ready to achieve similar results?</div>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center mt-3 text-white hover:text-gray-200 transition-colors"
                  >
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have transformed their operations with our AI and IT solutions. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Start Your Project
              </a>
              <a 
                href="tel:+13024640950" 
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5" />
                +1 302 464 0950
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