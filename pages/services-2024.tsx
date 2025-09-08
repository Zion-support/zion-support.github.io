import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, Users, TrendingUp, 
  Brain, Atom, Cpu, Shield, Database, Cloud,
  ArrowRight, CheckCircle, Zap, Sparkles
} from 'lucide-react';
<<<<<<< HEAD
=======
import { enhancedMicroSaasServices2025 } from '../src/data/enhancedMicroSaasServices2025';
import { innovativeITServices2025 } from '../src/data/innovativeITServices2025';
=======
import { realMicroSaasServices2024 } from '../data/2024-real-micro-saas-services';
import { innovativeITServices2024 } from '../data/2024-innovative-it-services';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4

import Link from 'next/link';

// Import the new 2024 services
import { realMicroSaasServices2024 } from '../data/2024-real-micro-saas-services';
import { innovativeITServices2024 } from '../data/2024-innovative-it-services';

<<<<<<< HEAD
  // Combine all services
  const allServices = [...ultimateInnovativeServices2026, ...enterpriseITInfrastructureServices2026];
=======
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f

const serviceCategories = [
  {
    id: 'ai-services',
    title: '🧠 AI & Machine Learning',
    description: 'Revolutionary AI-powered solutions for business automation and intelligence',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    services: realMicroSaasServices2024.filter(s => s.category.includes('AI')),
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'quantum-security',
    title: '⚛️ Quantum & Security',
    description: 'Future-proof quantum-resistant encryption and blockchain solutions',
    icon: Atom,
    color: 'from-indigo-500 to-blue-500',
    services: [
      ...realMicroSaasServices2024.filter(s => s.category.includes('Quantum') || s.category.includes('Blockchain')),
      ...innovativeITServices2024.filter(s => s.category.includes('Security'))
    ],
    gradient: 'from-indigo-500/20 to-cyan-500/20'
  },
  {
    id: 'enterprise-it',
    title: '🏙️ Enterprise IT Solutions',
    description: 'Autonomous operations and intelligent infrastructure management',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    services: innovativeITServices2024.filter(s => s.category.includes('Enterprise') || s.category.includes('DevOps')),
    gradient: 'from-blue-500/20 to-teal-500/20'
  },
  {
    id: 'api-development',
    title: '🔌 API & Development',
    description: 'Intelligent API management and development tools',
    icon: Code,
    color: 'from-teal-500 to-emerald-500',
    services: innovativeITServices2024.filter(s => s.category.includes('API') || s.category.includes('Development')),
    gradient: 'from-teal-500/20 to-green-500/20'
  },
  {
    id: 'business-analytics',
    title: '💰 Business & Analytics',
    description: 'AI-powered business intelligence and optimization solutions',
    icon: BarChart,
    color: 'from-green-500 to-yellow-500',
    services: realMicroSaasServices2024.filter(s => s.category.includes('Business') || s.category.includes('Analytics')),
    gradient: 'from-green-500/20 to-orange-500/20'
  },
  {
    id: 'marketing-automation',
    title: '📱 Marketing & Automation',
    description: 'Intelligent marketing automation and social media management',
    icon: Target,
    color: 'from-orange-500 to-red-500',
    services: realMicroSaasServices2024.filter(s => s.category.includes('Marketing') || s.category.includes('Social')),
    gradient: 'from-orange-500/20 to-pink-500/20'
  }
];

export default function Services2024Page() {
	return (
		<>
			<Head>
				<title>Services 2024 | Zion Tech Group</title>
				<meta name="description" content="Services for 2024." />
			</Head>
			<main className="mx-auto max-w-4xl px-4 py-12">
				<h1 className="text-3xl font-bold mb-4">Services 2024</h1>
				<p className="text-gray-700">This page is under construction.</p>
			</main>
		</>
	);
}