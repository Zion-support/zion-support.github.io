import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Code, 
  Book, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Server, 
  Lock, 
  CheckCircle, 
  Brain, 
  Cloud 
} from 'lucide-react';

const apiEndpoints = [
  {
    title: 'Authentication API',
    description: 'Secure authentication and authorization endpoints',
    icon: Lock,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/auth'
  },
  {
    title: 'User Management',
    description: 'User profile and account management',
    icon: Globe,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    endpoint: '/api/users'
  },
  {
    title: 'Services API',
    description: 'Access to our micro SaaS and IT services',
    icon: Server,
    methods: ['GET', 'POST'],
    endpoint: '/api/services'
  },
  {
    title: 'AI Services',
    description: 'AI-powered solutions and machine learning APIs',
    icon: Brain,
    methods: ['POST', 'GET'],
    endpoint: '/api/ai'
  },
  {
    title: 'Analytics',
    description: 'Data analytics and reporting endpoints',
    icon: Database,
    methods: ['GET', 'POST'],
    endpoint: '/api/analytics'
  },
  {
    title: 'Cloud Services',
    description: 'Cloud infrastructure and deployment APIs',
    icon: Cloud,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    endpoint: '/api/cloud'
  }
];

const features = [
  {
    icon: Shield,
    title: 'Secure',
    description: 'Enterprise-grade security with OAuth 2.0 and JWT tokens'
  },
  {
    icon: Zap,
    title: 'Fast',
    description: 'High-performance APIs with sub-100ms response times'
  },
  {
    icon: CheckCircle,
    title: 'Reliable',
    description: '99.9% uptime with comprehensive error handling'
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'Clear documentation and SDKs for all major languages'
  }
];
