'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CreditCard, Brain, Shield, BarChart, Users, CheckCircle, ArrowRight, Star, 
  Phone, Mail, MapPin, Clock, Award, Target, Zap, Cpu, Eye, MessageSquare,
  FileText, Calendar, DollarSign, PieChart, Activity, ExternalLink, ChevronRight,
  Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator,
  Clock3, Compass, Navigation, Home, Heart, GraduationCap, Briefcase, Car,
  Plane, Ship, Train, Factory, Building, ShoppingCart, Gamepad2,
  Music, Video, Camera, Palette, Bot, Headphones, Settings, Database, Cloud,
  Smartphone, Globe, Lock, TrendingUp, Sparkles, Code, Monitor, Network,
  RefreshCw, AlertTriangle, FileText as FileTextIcon, Download, Play, Code as CodeIcon
} from 'lucide-react';

export default function AIFintechPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fintechServices = [
    {
      title: 'AI Fraud Detection System',
      description: 'Advanced AI-powered fraud detection and prevention system for financial transactions.',
      icon: Shield,
      features: [
        'Real-time Transaction Monitoring',
        'Behavioral Pattern Analysis',
        'Risk Scoring & Assessment',
        'Automated Fraud Alerts',
        'Machine Learning Models'
      ],
      benefits: [
        '99.5% fraud detection accuracy',
        '60% reduction in false positives',
        'Real-time protection',
        'Compliance with regulations'
      ],
      price: { starting: 3999, period: 'month' },
      popular: true
    },
    {
      title: 'AI Credit Scoring Platform',
      description: 'Intelligent credit scoring system using alternative data and machine learning.',
      icon: BarChart,
      features: [
        'Alternative Data Analysis',
        'Predictive Credit Modeling',
        'Risk Assessment',
        'Automated Decision Making',
        'Regulatory Compliance'
      ],
      benefits: [
        '30% more accurate scoring',
        'Faster loan processing',
        'Reduced default rates',
        'Better risk management'
      ],
      price: { starting: 2999, period: 'month' },
      popular: true
    },
    {
      title: 'AI Trading Algorithm Platform',
      description: 'Sophisticated AI trading algorithms for automated investment management.',
      icon: TrendingUp,
      features: [
        'Algorithmic Trading Strategies',
        'Market Sentiment Analysis',
        'Portfolio Optimization',
        'Risk Management',
        'Backtesting & Simulation'
      ],
      benefits: [
        'Consistent returns',
        'Reduced human error',
        '24/7 market monitoring',
        'Optimized portfolio allocation'
      ],
      price: { starting: 5999, period: 'month' },
      popular: false
    },
    {
      title: 'AI Regulatory Compliance',
      description: 'Automated compliance monitoring and reporting for financial institutions.',
      icon: FileText,
      features: [
        'Regulatory Change Monitoring',
        'Automated Compliance Reporting',
        'Risk Assessment',
        'Audit Trail Management',
        'Policy Enforcement'
      ],
      benefits: [
        'Reduced compliance costs',
        'Automated reporting',
        'Risk mitigation',
        'Regulatory adherence'
      ],
      price: { starting: 2499, period: 'month' },
      popular: false
    },
    {
      title: 'AI Customer Service Bot',
      description: 'Intelligent customer service automation for financial institutions.',
      icon: MessageSquare,
      features: [
        '24/7 Customer Support',
        'Natural Language Processing',
        'Account Management',
        'Transaction Support',
        'Escalation Management'
      ],
      benefits: [
        'Improved customer satisfaction',
        'Reduced support costs',
        'Faster response times',
        'Multilingual support'
      ],
      price: { starting: 1999, period: 'month' },
      popular: true
    },
    {
      title: 'AI Wealth Management',
      description: 'Personalized wealth management and investment advisory services.',
      icon: PieChart,
      features: [
        'Personalized Investment Advice',
        'Portfolio Rebalancing',
        'Goal-based Planning',
        'Tax Optimization',
        'Performance Tracking'
      ],
      benefits: [
        'Personalized strategies',
        'Better returns',
        'Tax efficiency',
        'Automated management'
      ],
      price: { starting: 1499, period: 'month' },
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "Goldman Sachs",
      content: "The AI fraud detection system has reduced our fraud losses by 70% while maintaining a 99.5% accuracy rate. It's been a game-changer for our operations.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "JP Morgan Chase",
      content: "The credit scoring platform has improved our loan approval process significantly. We're seeing better risk assessment and faster processing times.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Morgan Stanley",
      content: "The AI trading algorithms have consistently outperformed our traditional strategies. The automated risk management features are particularly impressive.",
      rating: 5
    }
  ];

  const stats = [
    { label: 'Fraud Detection Accuracy', value: '99.5%' },
    { label: 'Cost Reduction', value: '60%' },
    { label: 'Processing Speed', value: '10x Faster' },
    { label: 'Customer Satisfaction', value: '95%' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Fintech Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI fintech solutions including fraud detection, credit scoring, trading algorithms, and regulatory compliance." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Fintech Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform financial services with cutting-edge AI technology that enhances security, efficiency, and customer experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Fintech Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered financial technology solutions designed to enhance security, efficiency, and customer experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fintechServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-blue-600 mb-4">
                  Starting at ${service.pricing.starting}/{service.pricing.period}
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Financial Leaders Say</h2>
            <p className="text-xl text-gray-600">Real results from leading financial institutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Financial Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI fintech solutions can enhance your financial operations and customer experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}