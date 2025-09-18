<<<<<<< HEAD






  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown
} from 'lucide-react'
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';




import React, { useState } from 'react',;
import Head from 'next/head',;
import { motion, AnimatePresence } from 'framer-motion',;
import { 
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown
} from 'lucide-react',;
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion',;
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025',;








export default function ComprehensivePricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [expandedService, setExpandedService] = useState<string | null>(null)
  // Combine all services


  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices];

  const categories = [

import React, { useState } from 'react',
import Head from 'next / head',
import { motion, AnimatePresence } from 'framer-motion',
import {
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown;
} from 'lucide-react',
import { comprehensiveMicroSaasServices } from '../data / comprehensive - 2025 - micro - saas - expansion',
import { specializedEmergingTechServices } from '../data / specialized - emerging - tech - services - 2025',
export default /**
 * ComprehensivePricingPage - Function description
 */
function ComprehensivePricingPage() {
  const [selected_category, setSelectedCategory] = useState ('all'),
  const [billing_cycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly'),
  const [expanded_service, setExpandedService] = useState < string | null>(null),
  // Combine all services;
  const all_services = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices],
  const categories = [;


    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠' },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥' },
    { id: 'Fintech AI', name: 'Fintech', icon: '💰' },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️' },
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️' },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗' },
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️' },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀' },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖' },
{ id: 'AR / VR & Metaverse', name: 'AR / VR', icon: '🥽' },
    { id: '5G / 6G Networks', name: '5G / 6G', icon: '📡' },
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬' },
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡' },
    { id: 'Edge Computing', name: 'Edge', icon: '🌐' },


    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠' }



  ]
  const filteredServices = selectedCategory === 'all'
    ? allServices
    : allServices.filter(service => service.category === selectedCategory)
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category)
    return categoryData?.icon |'🚀'
  }


  const calculateYearlyPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', '').replace(, ''))
    return `$${(price * 12 * 0.8).toFixed(0)}`, // 20% discount for yearly
  }
  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)







import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {;
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,;
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown;
} from 'lucide-react',;
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';
export default function ComprehensivePricingPage(req, res) {
  try {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  // Combine all services;
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices],;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀' },;
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠' },;
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥' },;
    { id: 'Fintech AI', name: 'Fintech', icon: '💰' },;
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️' },;
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️' },;
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗' },;
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️' },;
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀' },;
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖' },;
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽' },;
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡' },;
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬' },;
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡' },;
    { id: 'Edge Computing', name: 'Edge', icon: '🌐' },;
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍' },;
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}









  ],
  const filteredServices = selectedCategory === 'all'
    ? allServices
    : allServices.filter(service => service.category === selectedCategory),
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category),
    return categoryData?.icon || '🚀'
  },



  const calculateYearlyPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', '').replace(, ''))
    return `$${(price * 12 * 0.8).toFixed(0)}`, // 20% discount for yearly

  }
  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  },
  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  },
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-pricing-2025 | Zion Tech Group</title>
        <meta name="description" content="comprehensive-pricing-2025 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-pricing-2025</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default comprehensive-pricing-2025;
