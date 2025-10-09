'use client';

import React from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Cutting-edge artificial intelligence solutions',
      services: [
        {
          name: 'Machine Learning Solutions',
          description: 'Custom ML models for predictive analytics and decision-making',
          price: 'Starting at $1,500/month',
          features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring']
        },
        {
          name: 'Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis and language understanding',
          price: 'Starting at $1,200/month',
          features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development']
        },
        {
          name: 'Computer Vision',
          description: 'Image and video analysis solutions for object detection and recognition',
          price: 'Starting at $1,800/month',
          features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition']
        },
        {
          name: 'AI Automation',
          description: 'Intelligent process automation with decision-making capabilities',
          price: 'Starting at $1,400/month',
          features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling']
        }
      ]


    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Comprehensive IT infrastructure and support',
      services: [
        {
          name: 'Cloud Migration & Management',
          description: 'Seamless migration to AWS, Azure, or GCP with 99.9% uptime guarantee',
          price: 'Starting at $1,299/month',
          features: ['AWS/Azure/GCP Migration', 'Cloud Architecture Design', 'Cost Optimization', '24/7 Monitoring']
        },
        {
          name: 'Cybersecurity',
          description: 'Advanced security solutions with threat detection and prevention',
          price: 'Starting at $1,599/month',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response']
        },
        {
          name: 'DevOps & CI/CD',
          description: 'Streamlined development workflows with automated testing and deployment',
          price: 'Starting at $1,199/month',
          features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup']


        }
      ]
    },
    {

      title: 'Web Development',
      icon: Globe,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      description: 'Modern web applications with cutting-edge technologies',
      services: [
        {
          name: 'Frontend Development',
          description: 'React, Next.js, and modern JavaScript frameworks',
          price: 'Starting at $1,000/month',
          features: ['React/Next.js Development', 'Responsive Design', 'Performance Optimization', 'SEO Implementation']
        },
        {
          name: 'Backend Development',
          description: 'Scalable server-side solutions with Node.js, Python, and more',
          price: 'Starting at $1,200/month',
          features: ['API Development', 'Database Design', 'Authentication', 'Performance Optimization']
        },
        {
          name: 'Full-Stack Development',
          description: 'Complete web applications from frontend to backend',
          price: 'Starting at $1,800/month',
          features: ['End-to-End Development', 'Database Integration', 'Third-party Integrations', 'Deployment & Maintenance']

        }
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, current systems, and goals to create a tailored solution strategy.',
      icon: Target
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a comprehensive solution architecture that aligns with your business objectives.',
      icon: Code
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your operations and maximum efficiency.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous monitoring, optimization, and 24/7 support to ensure peak performance.',
      icon: TrendingUp
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Users },
    { number: '50+', label: 'Expert Engineers', icon: Award }
  ];

  const benefits = [
    'Expert team of engineers',
    'Cutting-edge technology',
    '24/7 support',
    'Scalable solutions',
    'Cost-effective pricing'
  ];

  const additionalServices = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate processes and gain insights',
      icon: Shield
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your critical data and systems',
      icon: Shield
    },
    {
      title: 'Rapid Deployment',
      description: 'Get your solutions up and running quickly with our proven methodologies',
      icon: BarChart
    },
    {
      title: 'Measurable Results',
      description: 'Track performance with detailed analytics and reporting dashboards',
      icon: BarChart
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions to transform your business and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
              <div className="flex items-center mb-6">
                <div className={`p-3 ${category.bgColor} rounded-xl mr-4`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="border-b border-gray-700 pb-4 last:border-b-0">
                    <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-300 text-sm mb-2">{service.description}</p>
                    <div className="text-cyan-400 font-semibold mb-2">{service.price}</div>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your project and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-600 text-white py-3 px-8 rounded-lg hover:bg-cyan-700 transition-colors">
              <Phone className="w-5 h-5 inline mr-2" />
              Call (302) 464-0950
            </button>
            <button className="border-2 border-cyan-600 text-cyan-400 py-3 px-8 rounded-lg hover:bg-cyan-600 hover:text-white transition-colors">
              <Mail className="w-5 h-5 inline mr-2" />
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ServicesPage;"`





