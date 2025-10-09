import {ShoppingCart, Users, Wrench, Search, Filter, Star, Clock, CheckCircle, ArrowRight, Phone, Mail, Award,  ShoppingCart,  Users from 'lucide-react';
'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const,
  MarketplacePage: React.FC = () => {
  return (
    <div>Coming Soon</div>
  );
};
  const [activeCategory, setActiveCategory] = useState('products');
  const [searchTerm, setSearchTerm] = useState('');
const categories = [
    {
  // TODO: Add content
};
  id: 'products',
      name: 'Products',
      icon: ShoppingCart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'AI-powered software products and solutions'
    },
      id: 'talent',
      name: 'Talent',
      icon: Users,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      description: 'Expert professionals and consultants',

      id: 1,
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered insights and automation',
      category: 'AI Tools',
      price: '$49/month',
      rating: 4.9,
      reviews: 127,
      image: '',
      features: ['AI Planning', 'Resource Optimization', 'Risk Assessment', 'Automated Reporting'],
      vendor: 'Zion Tech Group',
      verified: true,

      id: 3,
      name: 'AI Customer Support Bot',
      description: '24/7 intelligent customer support with natural language processing',
      category: 'Customer Service',
      price: '$29/month',
      rating: 4.7,
      reviews: 203,
      image: '',
      features: ['24/7 Support', 'Multi-language', 'Sentiment Analysis', 'Human Handoff'],
      vendor: 'SupportAI Inc',
      name: 'Michael Rodriguez',
      title: 'Cloud Architecture Expert',
      expertise: ['AWS', 'Azure', 'DevOps', 'Microservices'],
      experience: '12 years',
      projects: 67,
      rate: '$120/hour',
      name: 'Quantum Computing Access',
      description: 'Cloud access to quantum computing resources for research and development',
      category: 'Cloud Services',
      price: '$500/month',
      reviews: 15,
      image: '',
      features: ['100 qubits', '24/7 access', 'API integration', 'Expert support'],
      vendor: 'QuantumCloud',
                
          
          
          
          
          
          
          
          
          <ShoppingCart className="w-5 h-5 mr-2" />
// Start Shopping
              
          
          
          
          
          
          
          
          
          </a>
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold,
  hover:bg-cyan-400,
  hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold,
  hover:bg-purple-400,
  hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us      <Footer />
    </div>
  );
};

export default PagePage;