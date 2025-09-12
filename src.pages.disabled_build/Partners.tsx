import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users,
  Handshake,
  Globe,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Rocket,
  Star,
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  Building2,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Check
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export default function Partners() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedPartner, setExpandedPartner] = useState<any>(null);

  const partnerCategories = [
    { id: 'all', name: 'All Partners', count: 24 },
    { id: 'technology', name: 'Technology', count: 8 },
    { id: 'consulting', name: 'Consulting', count: 6 },
    { id: 'enterprise', name: 'Enterprise', count: 5 },
    { id: 'startup', name: 'Startups', count: 3 },
    { id: 'academic', name: 'Academic', count: 2 }
  ];

  const featuredPartners = [
    {
      id: 'partner-001',
      name: 'Microsoft',
      logo: '/images/partners/microsoft-logo.png',
      description: 'Global technology leader providing cloud computing, AI, and enterprise solutions.',
      longDescription: 'Microsoft is a global technology leader that has been at the forefront of innovation for decades. Our partnership focuses on cloud computing solutions, AI integration, and enterprise software development. Together, we deliver cutting-edge solutions that transform businesses and drive digital transformation.',
      category: 'technology',
      partnershipType: 'Strategic Alliance',
      partnershipDuration: '5+ years',
      jointProjects: 12,
      successStories: 8,
      website: 'https://microsoft.com',
      contact: 'partnerships@microsoft.com',
      featured: true,
      benefits: [
        'Joint go-to-market strategies',
        'Co-development of AI solutions',
        'Shared technology roadmaps',
        'Collaborative customer success'
      ],
      testimonials: [
        {
          quote: 'Our partnership with Zion Tech Group has been instrumental in delivering innovative AI solutions to our enterprise customers.',
          author: 'Sarah Williams',
          role: 'VP of Strategic Partnerships',
          company: 'Microsoft'
        }
      ]
    },
    {
      name: 'AWS',
      logo: '🟠',
      category: 'Cloud Services',
      description: 'Leading cloud provider for scalable and reliable infrastructure.',
      benefits: ['AWS credits', 'Architecture guidance', 'Marketplace integration']
    },
    {
      name: 'Google Cloud',
      logo: '🔴',
      category: 'AI & ML Platform',
      description: 'Advanced AI and machine learning platform for enterprise solutions.',
      benefits: ['AI/ML tools', 'Cloud credits', 'Technical support']
    }
  ];

  const filteredPartners = featuredPartners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO 
        title="Strategic Partners - Zion Tech Group"
        description="Discover our network of strategic partners and technology alliances that enable us to deliver cutting-edge solutions."
        keywords="partners, alliances, technology partnerships, strategic relationships"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">
              Our Strategic Partners
            </h1>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver innovative solutions that drive business transformation and technological advancement.