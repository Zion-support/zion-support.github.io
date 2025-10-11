'use client';
import React, {useCallback, useState, useEffect, Suspense, lazy, memo}from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

import StructuredData from './components/StructuredData';

import {Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText}}from 'lucide-react';

      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      benefits: [''AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery'']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      benefits: [''Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response'']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      benefits: [''Web Applications', 'Mobile Apps', 'API Development', 'System Integration'']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      benefits: [''Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting'']
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Expert guidance to help you navigate digital transformation and technology adoption.',
      benefits: [''Strategy Planning', 'Technology Assessment', 'Implementation Support', 'Training'']
    },
  ];
  const services = const services = const services = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Comprehensive AI solutions including machine learning, natural language processing, and computer vision.',;
      href: '/ai-services',;
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'];
    },
    {
      icon: Cloud,
>>>>>>> origin/main
      title: 'IT Services',
      description: 'Complete IT infrastructure and cloud solutions to modernize your business operations.',
      href: '/it-services',
      features: ['Cloud Migration', 'Infrastructure Management', 'DevOps', 'Monitoring']},
    {icon: Cpu,
      title: 'Micro SaaS',
      description: 'Specialized software-as-a-service solutions designed for specific business needs.',
      href: '/micro-saas',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      benefits: [''AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery'']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      benefits: [''Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response'']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      benefits: [''Web Applications', 'Mobile Apps', 'API Development', 'System Integration'']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      benefits: [''Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting'']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make the right technology decisions.',
      benefits: [''Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training'']
    },
  ];
  const stats = const stats = const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },;
    { number: '50+', label: 'Expert Team Members' };
  ];
