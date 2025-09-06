

import { 
  Newspaper;
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  ExternalLink,
  TrendingUp,
  Award,
  Rocket,
  Globe,
  Brain,
  Atom,

  Zap
} from 'lucide-react',;
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',;


const NewsPage: React.FC = () => {
  const news_articles = [;
    {



import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {;
  Newspaper,;
  Calendar,;
  User,;
  Tag,;
  ArrowRight,;
  ExternalLink,;
  TrendingUp,;
  Award,;
  Rocket,;
  Globe,;
  Brain,;
  Atom,;
  Zap;
} from 'lucide-react',;
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
const NewsPage: React.FC = () => {;
  const newsArticles = [;
    {;
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform';
      excerpt: 'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.';
      author: 'Press Team';
      date: '2025-01-15';
      author: 'Zion Tech Group',;
      readTime: '5 min read',;
      featured: true,;
      image: '/images/news/ai-consciousness-breakthrough.jpg',;
      tags: ['AI ConsciousnessBreakthroughResearchInnovation'];
    },;
    {;
      id: 2,;
      title: 'Series C Funding Round: Zion Tech Group Raises $250M for Global Expansion',;
      excerpt: 'Major investment round led by leading venture capital firms to accelerate AI consciousness platform development and international market expansion.',;
      category: 'company',;
      date: '2025-01-10',;
      author: 'Zion Tech Group',;
      readTime: '3 min read',;
      featured: true,;
      image: '/images/news/series-c-funding.jpg',;
      tags: ['FundingInvestmentGrowthExpansion'];
    },;
    {;
      id: 3,;
      title: 'Quantum-Secure Cloud Infrastructure Launches in Partnership with Microsoft Azure',;
      excerpt: 'World\'s first quantum-secure cloud platform provides unbreakable encryption for enterprise customers, setting new security standards.',;
      category: 'partnerships',;
      date: '2025-01-05',;
      author: 'Zion Tech Group',;
      readTime: '4 min read',;
      featured: true,;
      image: '/images/news/quantum-azure-partnership.jpg',;
      tags: ['Quantum ComputingMicrosoft AzureSecurityPartnership'];
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



  ],
  const latestNews = [
    {
      id: 4
      title: 'AI Customer Success Platform Achieves 99.9% Customer Retention Rate'
      excerpt: 'Revolutionary AI-powered customer success solution demonstrates exceptional results in preventing churn and improving customer satisfaction.'
      category: 'product'
      date: '2025-01-12'
      author: 'Sarah Chen'
      readTime: '4 min read'
      featured: false
      image: '/images/news/ai-customer-success.jpg'
      tags: ['AICustomer SuccessRetentionPlatform']
    }
    {
      id: 5
      title: 'Zion Tech Group Named to Forbes AI 50 List for Second Consecutive Year'
      excerpt: 'Recognition as one of the world\'s most innovative AI companies highlights our leadership in artificial intelligence and quantum computing.'
      category: 'company'
      date: '2025-01-08'
      author: 'Zion Tech Group'
      readTime: '2 min read'
      featured: false
      image: '/images/news/forbes-ai-50.jpg'
      tags: ['RecognitionForbesAI LeadershipInnovation']
    }
    {


      id: 6,
      title: 'New Research Paper: "Quantum Neural Networks for Drug Discovery"',
      excerpt: 'Breakthrough research demonstrates quantum computing applications in pharmaceutical research, potentially accelerating drug development by decades.',
      category: 'research',
      date: '2025-01-03',
      author: 'Dr. Michael Rodriguez',
      readTime: '8 min read',
      featured: false,
      image: '/images/news/quantum-drug-discovery.jpg',


      tags: ['Quantum ComputingDrug DiscoveryResearchHealthcare']
    }
    {
      id: 7
      title: 'Strategic Partnership with Deloitte for Enterprise AI Implementation'
      excerpt: 'Collaboration to deliver AI consciousness solutions to Fortune 500 companies, accelerating digital transformation initiatives.'
      category: 'partnerships'
      date: '2024-12-28'
      author: 'Zion Tech Group'
      readTime: '3 min read'
      featured: false
      image: '/images/news/deloitte-partnership.jpg'
      tags: ['PartnershipDeloitteEnterpriseAI Implementation']
    }
    {
      id: 8
      title: 'AI Autonomous Business Operations Platform Beta Launch'
      excerpt: 'Revolutionary platform enables fully autonomous business management with AI-driven decision making and process optimization.'
      category: 'product'
      date: '2024-12-20'
      author: 'Zion Tech Group'
      readTime: '6 min read'
      featured: false
      image: '/images/news/ai-autonomous-business.jpg'
      tags: ['AIAutonomous OperationsBusinessPlatform']
    }
    {
      id: 9
      title: 'Zion Tech Group Expands to European Markets'
      excerpt: 'Strategic expansion into European Union markets with new offices in London, Berlin, and Paris to serve growing demand.'
      category: 'company'
      date: '2024-12-15'
      author: 'Zion Tech Group'
      readTime: '3 min read'
      featured: false
      image: '/images/news/european-expansion.jpg'
      tags: ['ExpansionEuropeInternationalGrowth']


      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const pressReleases = [;
    {;
      title: 'Zion Tech Group Announces Revolutionary AI Consciousness Breakthrough';
      date: '2025-01-15';
      summary: 'Major milestone in artificial intelligence research with implications for human-AI collaboration and consciousness studies.';
    };
    {;
      title: 'Series C Funding Round: $250M Investment for Global Expansion';
      date: '2025-01-10',;
      summary: 'Strategic investment to accelerate AI consciousness platform development and international market expansion.';
    },;
    {;
      title: 'Quantum-Secure Cloud Partnership with Microsoft Azure',;
      date: '2025-01-05',;
      summary: 'World\'s first quantum-secure cloud infrastructure for enterprise customers.';
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const mediaResources = [;
    {;
      title: 'Company Fact Sheet';
      description: 'Key facts, figures, and company information for media and investors.',;
      type: 'PDF',;
      size: '2.1 MB',;
      download: '/media/zion-tech-group-fact-sheet.pdf';
    },;
    {;
      title: 'Executive Biographies',;
      description: 'Professional backgrounds and photos of Zion Tech Group leadership team.',;
      type: 'ZIP',;
      size: '15.3 MB',;
      download: '/media/executive-bios.zip';
    },;
    {;
      title: 'Company Logo Package',;
      description: 'High-resolution logos and brand assets for media use.',;
      type: 'ZIP',;
      size: '8.7 MB',;
      download: '/media/logo-package.zip';
    },;
    {;
      title: 'Product Screenshots',;
      description: 'High-quality screenshots of our AI and quantum computing platforms.',;
      type: 'ZIP',;
      size: '25.1 MB',;
      download: '/media/product-screenshots.zip';
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const filteredNews = [...featuredNews, ...latestNews].filter(news => {
    const categoryMatch = selectedCategory === 'all' || news.category === selectedCategory,
    const searchMatch = searchQuery === '' ||
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())),
    return categoryMatch && searchMatch
  }),
  const formatDate = (dateString: string) => {
    const date = new Date(dateString),
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',


      day: 'numeric'
    })
  }
import React from 'react';
import SEO from '../components/SEO';
export default function NewsPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>
          <meta name="description" content="Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies." />
        </Head>


        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"


              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Latest News & Updates
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                News & Press
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Breakthrough technology that brings emotional intelligence and self - awareness to artificial intelligence systems.',
      author: 'Press Team',
      date: '2025 - 01 - 15',
      author: 'Zion Tech Group',
      read_time: '5 min read',
      featured: true,
      image: '/images / news / ai - consciousness - breakthrough.jpg',
      tags: ['AI ConsciousnessBreakthroughResearchInnovation'];
    },
    {
      id: 2,
      title: 'Series C Funding Round: Zion Tech Group Raises $250M for Global Expansion',
      excerpt: 'Major investment round led by leading venture capital firms to accelerate AI consciousness platform development and international market expansion.',
      category: 'company',
date: '2025 - 01 - 10',
      author: 'Zion Tech Group',
      read_time: '3 min read',
      featured: true,
      image: '/images / news / series - c-funding.jpg',
      tags: ['FundingInvestmentGrowthExpansion'];
    },
    {
      id: 3,
      title: 'Quantum - Secure Cloud Infrastructure Launches in Partnership with Microsoft Azure',
      excerpt: 'World's first quantum - secure cloud platform provides unbreakable encryption for enterprise customers, setting new security standards.',
      category: 'partnerships',
      date: '2025 - 01 - 05',
      author: 'Zion Tech Group',
      read_time: '4 min read',
      featured: true,
      image: '/images / news / quantum - azure - partnership.jpg',
      tags: ['Quantum ComputingMicrosoft AzureSecurityPartnership'];
    }
  ],
  const latest_news = [;
    {
      id: 4,
      title: 'AI Customer Success Platform Achieves 99.9% Customer Retention Rate',
      excerpt: 'Revolutionary AI - powered customer success solution demonstrates exceptional results in preventing churn and improving customer satisfaction.',
      category: 'product',
      date: '2025 - 01 - 12',
      author: 'Sarah Chen',
      read_time: '4 min read',
      featured: false,
      image: '/images / news / ai - customer - success.jpg',
      tags: ['AICustomer SuccessRetentionPlatform'];
    },
    {
      id: 5,
      title: 'Zion Tech Group Named to Forbes AI 50 List for Second Consecutive Year',
excerpt: 'Recognition as one of the world's most innovative AI companies highlights our leadership in artificial intelligence and quantum computing.',
      category: 'company',
      date: '2025 - 01 - 08',
      author: 'Zion Tech Group',
      read_time: '2 min read',
      featured: false,
      image: '/images / news / forbes - ai - 50.jpg',
      tags: ['RecognitionForbesAI LeadershipInnovation'];
    },
    {
  Zap
} from 'lucide-react',;
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',;
const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform'
      excerpt: 'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.'
      author: 'Press Team'
      date: '2025-01-15'
      author: 'Zion Tech Group'
      readTime: '5 min read'
      featured: true
      image: '/images/news/ai-consciousness-breakthrough.jpg'
      tags: ['AI ConsciousnessBreakthroughResearchInnovation']
    }
    {
      id: 2
      title: 'Series C Funding Round: Zion Tech Group Raises $250M for Global Expansion'
      excerpt: 'Major investment round led by leading venture capital firms to accelerate AI consciousness platform development and international market expansion.'
      category: 'company'
      date: '2025-01-10'
      author: 'Zion Tech Group'
      readTime: '3 min read'
      featured: true
      image: '/images/news/series-c-funding.jpg'
      tags: ['FundingInvestmentGrowthExpansion']
    }
    {
      id: 3
      title: 'Quantum-Secure Cloud Infrastructure Launches in Partnership with Microsoft Azure'
      excerpt: 'World\'s first quantum-secure cloud platform provides unbreakable encryption for enterprise customers, setting new security standards.'
      category: 'partnerships'
      date: '2025-01-05'
      author: 'Zion Tech Group'
      readTime: '4 min read'
      featured: true
      image: '/images/news/quantum-azure-partnership.jpg'
      tags: ['Quantum ComputingMicrosoft AzureSecurityPartnership']
    }
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {;
  Newspaper,;
  Calendar,;
  User,;
  Tag,;
  ArrowRight,;
  ExternalLink,;
  TrendingUp,;
  Award,;
  Rocket,;
  Globe,;
  Brain,;
  Atom,;
  Zap;
} from 'lucide-react',;
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
const NewsPage: React.FC = () => {;
  const newsArticles = [;
    {;
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform';
      excerpt: 'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.';
      author: 'Press Team';
      date: '2025-01-15';
      author: 'Zion Tech Group',;
      readTime: '5 min read',;
      featured: true,;
      image: '/images/news/ai-consciousness-breakthrough.jpg',;
      tags: ['AI ConsciousnessBreakthroughResearchInnovation'];
    },;
    {;
      id: 2,;
      title: 'Series C Funding Round: Zion Tech Group Raises $250M for Global Expansion',;
      excerpt: 'Major investment round led by leading venture capital firms to accelerate AI consciousness platform development and international market expansion.',;
      category: 'company',;
      date: '2025-01-10',;
      author: 'Zion Tech Group',;
      readTime: '3 min read',;
      featured: true,;
      image: '/images/news/series-c-funding.jpg',;
      tags: ['FundingInvestmentGrowthExpansion'];
    },;
    {;
      id: 3,;
      title: 'Quantum-Secure Cloud Infrastructure Launches in Partnership with Microsoft Azure',;
      excerpt: 'World\'s first quantum-secure cloud platform provides unbreakable encryption for enterprise customers, setting new security standards.',;
      category: 'partnerships',;
      date: '2025-01-05',;
      author: 'Zion Tech Group',;
      readTime: '4 min read',;
      featured: true,;
      image: '/images/news/quantum-azure-partnership.jpg',;
      tags: ['Quantum ComputingMicrosoft AzureSecurityPartnership'];
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const latestNews = [
    {
      id: 4
      title: 'AI Customer Success Platform Achieves 99.9% Customer Retention Rate'
      excerpt: 'Revolutionary AI-powered customer success solution demonstrates exceptional results in preventing churn and improving customer satisfaction.'
      category: 'product'
      date: '2025-01-12'
      author: 'Sarah Chen'
      readTime: '4 min read'
      featured: false
      image: '/images/news/ai-customer-success.jpg'
      tags: ['AICustomer SuccessRetentionPlatform']
    }
    {
      id: 5
      title: 'Zion Tech Group Named to Forbes AI 50 List for Second Consecutive Year'
      excerpt: 'Recognition as one of the world\'s most innovative AI companies highlights our leadership in artificial intelligence and quantum computing.'
      category: 'company'
      date: '2025-01-08'
      author: 'Zion Tech Group'
      readTime: '2 min read'
      featured: false
      image: '/images/news/forbes-ai-50.jpg'
      tags: ['RecognitionForbesAI LeadershipInnovation']
    }
    {
      id: 6,
      title: 'New Research Paper: "Quantum Neural Networks for Drug Discovery"',
      excerpt: 'Breakthrough research demonstrates quantum computing applications in pharmaceutical research, potentially accelerating drug development by decades.',
      category: 'research',