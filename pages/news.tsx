
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Newspaper;

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  Newspaper
  Calendar
  User
  Tag
  ArrowRight
  ExternalLink
  TrendingUp
  Award
  Rocket
  Globe
  Brain
  Atom
  Zap
} from 'lucide-react'
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import React from 'react',;
import Head from 'next/head',;
import { motion } from 'framer-motion',;
import { 
  Newspaper,
=======

import { 
  Newspaper;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import { 
  Newspaper;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
<<<<<<< HEAD
=======
  ExternalLink;
  TrendingUp;
  Award;
  Rocket;
  Globe;
  Brain;
  Atom;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import React from 'react',
import Head from 'next / head',
import { motion } from 'framer-motion',
import {
  Newspaper,
  Calendar,
  User,
  Tag,
  ArrowRight,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ExternalLink,
  TrendingUp,
  Award,
  Rocket,
  Globe,
  Brain,
  Atom,
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  Zap
} from 'lucide-react',;
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',;


const NewsPage: React.FC = () => {
  const news_articles = [;
    {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



=======



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD


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

<<<<<<< HEAD
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  ]
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: 6
      title: 'New Research Paper: "Quantum Neural Networks for Drug Discovery"'
      excerpt: 'Breakthrough research demonstrates quantum computing applications in pharmaceutical research, potentially accelerating drug development by decades.'
      category: 'research'
      date: '2025-01-03'
      author: 'Dr. Michael Rodriguez'
      readTime: '8 min read'
      featured: false
      image: '/images/news/quantum-drug-discovery.jpg'
      id: 6,
      title: 'New Research Paper: "Quantum Neural Networks for Drug Discovery"',
      excerpt: 'Breakthrough research demonstrates quantum computing applications in pharmaceutical research, potentially accelerating drug development by decades.',
      category: 'research',
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
      date: '2025 - 01 - 03',
      author: 'Dr. Michael Rodriguez',
      read_time: '8 min read',
      featured: false,
      image: '/images / news / quantum - drug - discovery.jpg',
      tags: ['Quantum ComputingDrug DiscoveryResearchHealthcare'];
    },
    {
      id: 7,
      title: 'Strategic Partnership with Deloitte for Enterprise AI Implementation',
      excerpt: 'Collaboration to deliver AI consciousness solutions to Fortune 500 companies, accelerating digital transformation initiatives.',
      category: 'partnerships',
date: '2024 - 12 - 28',
      author: 'Zion Tech Group',
      read_time: '3 min read',
      featured: false,
      image: '/images / news / deloitte - partnership.jpg',
      tags: ['PartnershipDeloitteEnterpriseAI Implementation'];
    },
    {
      id: 8,
      title: 'AI Autonomous Business Operations Platform Beta Launch',
excerpt: 'Revolutionary platform enables fully autonomous business management with AI - driven decision making and process optimization.',
      category: 'product',
      date: '2024 - 12 - 20',
      author: 'Zion Tech Group',
      read_time: '6 min read',
      featured: false,
      image: '/images / news / ai - autonomous - business.jpg',
      tags: ['AIAutonomous OperationsBusinessPlatform'];
    },
    {
      id: 9,
      title: 'Zion Tech Group Expands to European Markets',
      excerpt: 'Strategic expansion into European Union markets with new offices in London, Berlin, and Paris to serve growing demand.',
      category: 'company',
date: '2024 - 12 - 15',
      author: 'Zion Tech Group',
      read_time: '3 min read',
      featured: false,
      image: '/images / news / european - expansion.jpg',
      tags: ['ExpansionEuropeInternationalGrowth'];
    }
  ],
  const press_releases = [;
    {
      title: 'Zion Tech Group Announces Revolutionary AI Consciousness Breakthrough',
      date: '2025 - 01 - 15',
      summary: 'Major milestone in artificial intelligence research with implications for human - AI collaboration and consciousness studies.';
    },
    {
      title: 'Series C Funding Round: $250M Investment for Global Expansion',
      date: '2025 - 01 - 10',
      summary: 'Strategic investment to accelerate AI consciousness platform development and international market expansion.';
    },
    {
      title: 'Quantum - Secure Cloud Partnership with Microsoft Azure',
      date: '2025 - 01 - 05',
      summary: 'World's first quantum - secure cloud infrastructure for enterprise customers.';
    }
  ],
  const media_resources = [;
    {
      title: 'Company Fact Sheet',
      description: 'Key facts, figures, and company information for media and investors.',
      type: 'PDF',
      size: '2.1 MB',
download: '/media / zion - tech - group - fact - sheet.pdf';
    },
    {
      title: 'Executive Biographies',
      description: 'Professional backgrounds and photos of Zion Tech Group leadership team.',
      type: 'ZIP',
      size: '15.3 MB',
download: '/media / executive - bios.zip';
    },
    {
      title: 'Company Logo Package',
      description: 'High - resolution logos and brand assets for media use.',
      type: 'ZIP',
      size: '8.7 MB',
      download: '/media / logo - package.zip';
    },
    {
      title: 'Product Screenshots',
      description: 'High - quality screenshots of our AI and quantum computing platforms.',
      type: 'ZIP',
      size: '25.1 MB',
      download: '/media / product - screenshots.zip';
    }
  ],
  const filtered_news = [...featured_news, ...latest_news].filter (news => {
    const category_match = selected_category === 'all' || news.category === selected_category,
    const search_match = search_query === '' ||;
      news.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      news.excerpt.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      news.tags.some (tag => tag.toLowerCase ().includes (search_query.toLowerCase ())),
    return category_match && search_match;
  }),
  const format_date = (date_string: string) =>: any {
    const date = new Date (date_string),
    return date.toLocaleDateString ('en - US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric';
    });
  },
import React from 'react',
import SEO from '../components / SEO',
export default /**
 * NewsPage - Function description
 */
function NewsPage() {
  return (
    <UltraAdvancedFuturisticBackground>;
      <div className="min - h-screen">;
        <Head>;
          <title > News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>;
          <meta name="description" content="Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies." />;
        </Head>;
        {/* Hero Section */}
        <section className="relative pt - 32 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto text - center">;
            <motion.h1;
              className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent mb - 6";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center";
            >;
              <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - blue - 400 via - indigo - 500 to - purple - 600 bg - clip - text text - transparent mb - 6">;
                Latest News & Updates;
              </div>;
              <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - blue - 400 via - cyan - 400 to - indigo - 400 bg - clip - text text - transparent mb - 6">;
                News & Press;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed">;
                Stay updated with the latest developments, breakthroughs, and innovations;
                from Zion Tech Group and the technology industry.;
              </p>;
            </motion.div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Category Filter */}
        <section className="py - 10 px - 4">;
          <div className="container mx - auto max - w-6xl">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex - wrap justify - center gap - 4";
            >;
              {categories.map ((category, index) => (
                <button;
                  key={category}
<<<<<<< HEAD
=======



              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <button
                  key={category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    category === "All News"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function NewsPage() {
  const newsItems = [
    {

      title: "Zion Tech Group Named Top AI Innovation Company 2025",
      category: "Awards & Recognition",
      date: "January 15, 2025",
      excerpt: "Zion Tech Group has been recognized as one of the top AI innovation companies of 2025 by TechCrunch, highlighting our breakthrough work in autonomous AI systems and quantum computing integration.",
      image: "/api/placeholder/600/400",
      source: "TechCrunch",
      url: "#",
      featured: true,
      icon: Award,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Revolutionary Quantum AI Breakthrough Announced",
      category: "Technology Innovation",
      date: "January 10, 2025",
      excerpt: "Zion Tech Group announces a major breakthrough in quantum AI integration, achieving unprecedented performance improvements in machine learning algorithms through quantum-enhanced neural networks.",
      image: "/api/placeholder/600/400",
      source: "MIT Technology Review",
      url: "#",
      featured: false,
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Partnership with Fortune 500 Financial Institution",
      category: "Business Development",
      date: "January 5, 2025",
      excerpt: "Zion Tech Group announces strategic partnership with leading financial institution to deploy AI-powered risk assessment and fraud detection systems across their global operations.",
      image: "/api/placeholder/600/400",
      source: "Business Insider",
      url: "#",
      featured: false,
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "New Cybersecurity Division Launch",
      category: "Company News",
      date: "December 28, 2024",
      excerpt: "Zion Tech Group expands its service portfolio with the launch of a dedicated cybersecurity division, offering quantum-resistant encryption and AI-powered threat detection solutions.",
      image: "/api/placeholder/600/400",
      source: "Security Weekly",
      url: "#",
      featured: false,
      icon: Rocket,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Record-Breaking AI Model Performance",
      category: "Research & Development",
      date: "December 20, 2024",
      excerpt: "Our research team achieves record-breaking performance in natural language processing, with our latest AI model outperforming industry benchmarks by 40% in accuracy and 60% in speed.",
      image: "/api/placeholder/600/400",
      source: "AI Research Journal",
      url: "#",
      featured: false,
      icon: Brain,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Global Expansion: New Office in Singapore",
      category: "Company News",
      date: "December 15, 2024",
      excerpt: "Zion Tech Group announces the opening of its new Asia-Pacific headquarters in Singapore, expanding our global reach and strengthening partnerships in the region.",
      image: "/api/placeholder/600/400",
      source: "Singapore Business Times",
      url: "#",
      featured: false,
      icon: Globe,
      color: "from-indigo-500 to-purple-500"

    : newsItems.filter(item => item.category === selectedCategory),
  const featuredNews = newsItems.filter(item => item.featured),

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>News & Press - Zion Tech Group</title>
        <meta name="description" content="Stay updated with Zion Tech Group's latest news, press releases, awards, and media coverage. Discover our innovations in AI, quantum computing, and technology." />
        <meta property="og:title" content="News & Press - Zion Tech Group" />
        <meta property="og:description" content="Stay updated with our latest news, awards, and media coverage." />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>
      <EnhancedNavigation />

                  className={`px - 6 py - 3 rounded - xl font - semibold transition - all duration - 300 ${
                    category === "All News";
                      ? "bg - gradient - to - r from - blue - 500 to - purple - 600 text - white";
                      : "bg - gray - 800 / 50 text - gray - 300 hover:bg - gray - 700 / 50 border border - gray - 700 hover:border - gray - 600";
import React, { useState } from 'react',
import React from 'react',
import Head from 'next / head',
import { motion } from 'framer-motion',
import {
  Newspaper, Globe, Award, Users, Rocket, Brain,
  ArrowRight, ExternalLink, Calendar, Tag, Star;
} from 'lucide-react',
import EnhancedNavigation from '../components / EnhancedNavigation',
import EnhancedFooter from '../components / EnhancedFooter',
export default /**
 * NewsPage - Function description
 */
function NewsPage() {
  const news_items = [;
    {
      title: "Zion Tech Group Named Top AI Innovation Company 2025",
      category: "Awards & Recognition",
      date: "January 15, 2025",
      excerpt: "Zion Tech Group has been recognized as one of the top AI innovation companies of 2025 by TechCrunch, highlighting our breakthrough work in autonomous AI systems and quantum computing integration.",
      image: "/api / placeholder / 600 / 400",
      source: "TechCrunch",
      url: "#",
      featured: true,
      icon: Award,
      color: "from - yellow - 500 to - orange - 500";
    },
    {
      title: "Revolutionary Quantum AI Breakthrough Announced",
      category: "Technology Innovation",
      date: "January 10, 2025",
      excerpt: "Zion Tech Group announces a major breakthrough in quantum AI integration, achieving unprecedented performance improvements in machine learning algorithms through quantum - enhanced neural networks.",
      image: "/api / placeholder / 600 / 400",
      source: "MIT Technology Review",
      url: "#",
      featured: false,
      icon: Brain,
      color: "from - purple - 500 to - pink - 500";
    },
    {
      title: "Partnership with Fortune 500 Financial Institution",
      category: "Business Development",
      date: "January 5, 2025",
      excerpt: "Zion Tech Group announces strategic partnership with leading financial institution to deploy AI - powered risk assessment and fraud detection systems across their global operations.",
      image: "/api / placeholder / 600 / 400",
      source: "Business Insider",
      url: "#",
      featured: false,
      icon: Users,
      color: "from - blue - 500 to - cyan - 500";
    },
    {
      title: "New Cybersecurity Division Launch",
      category: "Company News",
      date: "December 28, 2024",
      excerpt: "Zion Tech Group expands its service portfolio with the launch of a dedicated cybersecurity division, offering quantum - resistant encryption and AI - powered threat detection solutions.",
      image: "/api / placeholder / 600 / 400",
      source: "Security Weekly",
      url: "#",
      featured: false,
      icon: Rocket,
      color: "from - red - 500 to - orange - 500";
    },
    {
      title: "Record - Breaking AI Model Performance",
      category: "Research & Development",
      date: "December 20, 2024",
      excerpt: "Our research team achieves record - breaking performance in natural language processing, with our latest AI model outperforming industry benchmarks by 40% in accuracy and 60% in speed.",
      image: "/api / placeholder / 600 / 400",
      source: "AI Research Journal",
      url: "#",
      featured: false,
      icon: Brain,
      color: "from - emerald - 500 to - teal - 500";
    },
    {
      title: "Global Expansion: New Office in Singapore",
      category: "Company News",
      date: "December 15, 2024",
      excerpt: "Zion Tech Group announces the opening of its new Asia - Pacific headquarters in Singapore, expanding our global reach and strengthening partnerships in the region.",
      image: "/api / placeholder / 600 / 400",
      source: "Singapore Business Times",
      url: "#",
      featured: false,
      icon: Globe,
      color: "from - indigo - 500 to - purple - 500";
    }
  ],
  const categories = ["All", "Awards & Recognition", "Technology Innovation", "Business Development", "Company News", "Research & Development"],
  const [selected_category, setSelectedCategory] = React.useState ("All"),
  const filtered_news = selected_category === "All";
    ? news_items;
    : news_items.filter (item => item.category === selected_category),
  const featured_news = news_items.filter (item => item.featured),
  return (
    <div className="min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950 text - white">;
      <Head>;
        <title > News & Press - Zion Tech Group</title>;
        <meta name="description" content="Stay updated with Zion Tech Group's latest news, press releases, awards, and media coverage. Discover our innovations in AI, quantum computing, and technology." />;
        <meta property="og:title" content="News & Press - Zion Tech Group" />;
        <meta property="og:description" content="Stay updated with our latest news, awards, and media coverage." />;
        <link rel="canonical" href="https://ziontechgroup.com / news" />;
      </Head>;
      <EnhancedNavigation />;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Hero Section */}
      <section className="relative pt - 32 pb - 20 px - 6">;
        <div className="max - w-7xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======


      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              News & Press
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our latest innovations, awards, and media coverage
            </p>
          </motion.div>
          <motion.div

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Discover the latest developments in AI, quantum computing, and technology 

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
            transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Discover the latest developments in AI, quantum computing, and technology




              innovation from Zion Tech Group and our global team.
            </p>
          </motion.div>
        </div>
      </section>

            className="mb - 8";

      {/* Featured News */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


      {featuredNews.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div

  ],;
  const filteredNews = [...featuredNews, ...latestNews].filter(news => {;
    const categoryMatch = selectedCategory === 'all' || news.category === selectedCategory;
    const searchMatch = searchQuery === '' ||;
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });
  const formatDate = (dateString: string) => {;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {;
      year: 'numeric',;
      month: 'long',;
      day: 'numeric';
    });
  },;
import React from 'react';
import SEO from '../components/SEO';
export default function NewsPage(req, res) {
  try {
  return (;
    <UltraAdvancedFuturisticBackground>;
      <div className="min-h-screen">;
        <Head>;
          <title>News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>;
          <meta name="description" content="Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies." />;
        </Head>;
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto text-center">;
            <motion.h1;
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6";
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
              className="text-center";
            >;
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">;
                Latest News & Updates;
              </div>;
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">;
                News & Press;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
                Stay updated with the latest developments, breakthroughs, and innovations;
                from Zion Tech Group and the technology industry.;
              </p>;
            </motion.div>;
        {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-10 px-4">;
          <div className="container mx-auto max-w-6xl">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="flex flex-wrap justify-center gap-4";
            >;
              {categories.map((category, index) => (;
                <button;
                  key={category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${;
                    category === "All News";
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white";
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600";
import React, { useState } from 'react';
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {;
  Newspaper, Globe, Award, Users, Rocket, Brain,;
  ArrowRight, ExternalLink, Calendar, Tag, Star;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function NewsPage(req, res) {
  try {
  const newsItems = [;
    {;
      title: "Zion Tech Group Named Top AI Innovation Company 2025";
      category: "Awards & Recognition";
      date: "January 15, 2025",;
      excerpt: "Zion Tech Group has been recognized as one of the top AI innovation companies of 2025 by TechCrunch, highlighting our breakthrough work in autonomous AI systems and quantum computing integration.",;
      image: "/api/placeholder/600/400",;
      source: "TechCrunch",;
      url: "#",;
      featured: true,;
      icon: Award,;
      color: "from-yellow-500 to-orange-500";
    },;
    {;
      title: "Revolutionary Quantum AI Breakthrough Announced",;
      category: "Technology Innovation",;
      date: "January 10, 2025",;
      excerpt: "Zion Tech Group announces a major breakthrough in quantum AI integration, achieving unprecedented performance improvements in machine learning algorithms through quantum-enhanced neural networks.",;
      image: "/api/placeholder/600/400",;
      source: "MIT Technology Review",;
      url: "#",;
      featured: false,;
      icon: Brain,;
      color: "from-purple-500 to-pink-500";
    },;
    {;
      title: "Partnership with Fortune 500 Financial Institution",;
      category: "Business Development",;
      date: "January 5, 2025",;
      excerpt: "Zion Tech Group announces strategic partnership with leading financial institution to deploy AI-powered risk assessment and fraud detection systems across their global operations.",;
      image: "/api/placeholder/600/400",;
      source: "Business Insider",;
      url: "#",;
      featured: false,;
      icon: Users,;
      color: "from-blue-500 to-cyan-500";
    },;
    {;
      title: "New Cybersecurity Division Launch",;
      category: "Company News",;
      date: "December 28, 2024",;
      excerpt: "Zion Tech Group expands its service portfolio with the launch of a dedicated cybersecurity division, offering quantum-resistant encryption and AI-powered threat detection solutions.",;
      image: "/api/placeholder/600/400",;
      source: "Security Weekly",;
      url: "#",;
      featured: false,;
      icon: Rocket,;
      color: "from-red-500 to-orange-500";
    },;
    {;
      title: "Record-Breaking AI Model Performance",;
      category: "Research & Development",;
      date: "December 20, 2024",;
      excerpt: "Our research team achieves record-breaking performance in natural language processing, with our latest AI model outperforming industry benchmarks by 40% in accuracy and 60% in speed.",;
      image: "/api/placeholder/600/400",;
      source: "AI Research Journal",;
      url: "#",;
      featured: false,;
      icon: Brain,;
      color: "from-emerald-500 to-teal-500";
    },;
    {;
      title: "Global Expansion: New Office in Singapore",;
      category: "Company News",;
      date: "December 15, 2024",;
      excerpt: "Zion Tech Group announces the opening of its new Asia-Pacific headquarters in Singapore, expanding our global reach and strengthening partnerships in the region.",;
      image: "/api/placeholder/600/400",;
      source: "Singapore Business Times",;
      url: "#",;
      featured: false,;
      icon: Globe,;
      color: "from-indigo-500 to-purple-500";
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const categories = ["All", "Awards & Recognition", "Technology Innovation", "Business Development", "Company News", "Research & Development"],;
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const filteredNews = selectedCategory === "All";
    ? newsItems;
    : newsItems.filter(item => item.category === selectedCategory);
  const featuredNews = newsItems.filter(item => item.featured);
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;
      <Head>;
        <title>News & Press - Zion Tech Group</title>;
        <meta name="description" content="Stay updated with Zion Tech Group's latest news, press releases, awards, and media coverage. Discover our innovations in AI, quantum computing, and technology." />;
        <meta property="og:title" content="News & Press - Zion Tech Group" />;
        <meta property="og:description" content="Stay updated with our latest news, awards, and media coverage." />;
        <link rel="canonical" href="https://ziontechgroup.com/news" />;
      </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative pt-32 pb-20 px-6">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
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
            className="mb-8";
          >;
            <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - white via - blue - 100 to - cyan - 100 bg - clip - text text - transparent mb - 6">;
              News & Press;
            </h1>;
            <p className="text - xl md:text - 2xl text - white / 80 max - w-3xl mx - auto leading - relaxed">;
              Stay updated with our latest innovations, awards, and media coverage;
            </p>;
          </motion.div>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb - 12";
          >;
            <p className="text - lg text - white / 70 max - w-2xl mx - auto mb - 8">;
              Discover the latest developments in AI, quantum computing, and technology;
              innovation from Zion Tech Group and our global team.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
      {/* Featured News */}
      {featured_news.length > 0 && (
        <section className="py - 16 px - 6">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
<<<<<<< HEAD
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
=======

              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured News</h2>
              <p className="text-white/70">Latest headlines and major announcements</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item, index) => (
                <motion.div

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className="text - center mb - 12";
            >;
              <h2 className="text - 3xl font - bold text - white mb - 4">Featured News</h2>;
              <p className="text - white / 70">Latest headlines and major announcements</p>;
            </motion.div>;
            <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 8">;
              {featured_news.map ((item, index) => (
                <motion.div;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  key={item.title}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 900 / 50 backdrop - blur - xl border border - white / 10 rounded - 2xl overflow - hidden hover:border - blue - 500 / 30 transition - all duration - 300";
                >;
                  <div className="p - 8">;
                    <div className="flex items - center gap - 3 mb - 4">;
                      <div className={`w - 12 h - 12 bg - gradient - to - br ${item.color} rounded - xl flex items - center justify - center`}>;
                        <item.icon className="w - 6 h - 6 text - white" />;
                      </div>;
                      <div className="flex items - center gap - 2">;
                        <span className="text - sm text - white / 60 bg - white / 5 px - 3 py - 1 rounded - full">;
                          {item.category}
<<<<<<< HEAD
=======


                  key={item.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          {item.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                        </span>
                        <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                          Featured
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/70 mb-6">{item.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Newspaper className="w-4 h-4" />
                        <span>{item.source}</span>
                      </div>
                    </div>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>

                        </span>;
                        <span className="text - xs text - white / 40 bg - white / 5 px - 2 py - 1 rounded">;
                          Featured;
                        </span>;
                      </div>;
                    </div>;
                    <h3 className="text - 2xl font - bold text - white mb - 4">{item.title}</h3>;
                    <p className="text - white / 70 mb - 6">{item.excerpt}</p>;
                    <div className="flex items - center justify - between text - sm text - white / 60 mb - 4">;
                      <div className="flex items - center gap - 2">;
                        <Calendar className="w - 4 h - 4" />;
                        <span>{item.date}</span>;
                      </div>;
                      <div className="flex items - center gap - 2">;
                        <Newspaper className="w - 4 h - 4" />;
                        <span>{item.source}</span>;
                      </div>;
                    </div>;
                    <button className="w - full px - 6 py - 3 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - lg font - semibold text - white transition - all duration - 300 transform hover:scale - 105 flex items - center justify - center gap - 2">;
                      Read Full Article;
                      <ExternalLink className="w - 4 h - 4" />;
                    </button>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>)}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Category Filter */}
      <section className="py - 8 px - 6">;
        <div className="max - w-7xl mx - auto">;
          <div className="flex flex - wrap justify - center gap - 4">;
            {categories.map ((category) => (
              <button;
                key={category}
                on_click={() => setSelectedCategory (category)}
                className={`px - 6 py - 3 rounded - full font - semibold transition - all duration - 300 ${
                  selected_category === category;
                    ? 'bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white';
                    : 'bg - white / 5 text - white / 70 hover:bg - white / 10 hover:text - white';
                }`}
              >;
                {category}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </button>))}
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* News Grid */}
      <section className="py - 20 px - 6">;
        <div className="max - w-7xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
=======


              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                key={category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                onClick={() => setSelectedCategory(category)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${;
                  selectedCategory === category;
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white';
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >;
                {category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </button>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* News Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Latest News</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay informed about our latest developments and industry recognition
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.filter(item => !item.featured).map((item, index) => (
              <motion.div

            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl font - bold text - white mb - 6">Latest News</h2>;
            <p className="text - xl text - white / 70 max - w-3xl mx - auto">;
              Stay informed about our latest developments and industry recognition;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {filtered_news.filter (item => !item.featured).map ((item, index) => (
              <motion.div;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                key={item.title}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 900 / 50 backdrop - blur - xl border border - white / 10 rounded - 2xl overflow - hidden hover:border - blue - 500 / 30 transition - all duration - 300";
              >;
                <div className="p - 6">;
                  <div className="flex items - center gap - 3 mb - 4">;
                    <div className={`w - 10 h - 10 bg - gradient - to - br ${item.color} rounded - xl flex items - center justify - center`}>;
                      <item.icon className="w - 5 h - 5 text - white" />;
                    </div>;
                    <span className="text - xs text - white / 60 bg - white / 5 px - 2 py - 1 rounded - full">;
                      {item.category}
<<<<<<< HEAD
=======


                key={item.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded-full">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {item.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Newspaper className="w-3 h-3" />
                      <span>{item.source}</span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105">
                    Read More
                  </button>
                </div>
              </motion.div>

                    </span>;
                  </div>;
                  <h3 className="text - lg font - bold text - white mb - 3 line - clamp - 2">{item.title}</h3>;
                  <p className="text - white / 70 text - sm mb - 4 line - clamp - 3">{item.excerpt}</p>;
                  <div className="flex items - center justify - between text - xs text - white / 60 mb - 4">;
                    <div className="flex items - center gap - 1">;
                      <Calendar className="w - 3 h - 3" />;
                      <span>{item.date}</span>;
                    </div>;
                    <div className="flex items - center gap - 1">;
                      <Newspaper className="w - 3 h - 3" />;
                      <span>{item.source}</span>;
                    </div>;
                  </div>;
                  <button className="w - full px - 4 py - 2 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - lg font - semibold text - white text - sm transition - all duration - 300 transform hover:scale - 105">;
                    Read More;
                  </button>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Press Kit CTA */}
      <section className="py - 20 px - 6">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
                    <a;
                      href={`/news/${news.id}`}
<<<<<<< HEAD
=======


            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Press Kit CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
                    <a

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      href={`/news/${news.id}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />


                    </Link>


                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
          <div className="max-w-7xl mx-auto">
            <motion.div


              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.6, delay: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Latest News</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our most recent developments and announcements
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article

                      className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300 font - medium";
                    >;
                      Read More;
                      <ArrowRight className="w - 4 h - 4" />;
                    </a>;
                  </div>;
                </motion.div>))}
            </div>;
            <p className="text - sm text - gray - 400 mt - 4">;
              No spam, unsubscribe at any time. We respect your privacy.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl font - bold mb - 4">Latest News</h2>;
              <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
                Stay updated with our most recent developments and announcements;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {news_articles.filter (article => !article.featured).map ((article, index) => (
                <motion.article;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  key={article.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg - gray - 800 / 50 backdrop - blur - sm rounded - xl p - 6 border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <div className="flex items - center gap - 4 mb - 4">;
                    <span className="px - 3 py - 1 bg - cyan - 500 / 20 text - cyan - 400 text - sm font - medium rounded - full border border - cyan - 500 / 30">;
                      {article.category}
<<<<<<< HEAD
=======


                  key={article.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: 0.1 * index }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {article.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />


                      {new Date(article.date).toLocaleDateString()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                    </div>
                  </div>
                  <button className="w-full px-4 py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.article>


<<<<<<< HEAD
                    </span>;
                  </div>;
                  <h3 className="text - xl font - semibold mb - 3 line - clamp - 2">{article.title}</h3>;
                  <p className="text - gray - 400 mb - 4 line - clamp - 3">{article.excerpt}</p>;
                  <div className="flex items - center justify - between text - sm text - gray - 500 mb - 4">;
                    <div className="flex items - center gap - 2">;
                      <Calendar className="w - 4 h - 4" />;
                      {new Date (article.date).toLocaleDateString ()}
                    </div>;
                    <div className="flex items - center gap - 2">;
                      <Clock className="w - 4 h - 4" />;
                      {article.read_time}
                    </div>;
                  </div>;
                  <button className="w - full px - 4 py - 2 border border - cyan - 500 / 30 text - cyan - 400 rounded - lg hover:bg - cyan - 500 / 10 transition - all duration - 300 flex items - center justify - center gap - 2">;
                    Read More;
                    <ArrowRight className="w - 4 h - 4" />;
                  </button>;
                </motion.article>))}
            </div>;
          </div>;
        </section>;
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Newsletter Signup */}
              <h2 className="text - 3xl lg:text - 4xl font - bold text - white mb - 6">;
                Stay Updated;
              </h2>;
              <p className="text - xl text - gray - 400 max - w-2xl mx - auto mb - 8">;
                Subscribe to our newsletter for the latest news, insights, and breakthroughs in AI consciousness and quantum computing.;
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - gray - 800 / 30">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
<<<<<<< HEAD
=======


              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Newsletter Signup */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter for the latest news, insights, and breakthroughs in AI consciousness and quantum computing.
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.6, delay: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            >
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-400 mb-8">
                Subscribe to our newsletter for the latest news, insights, and technology updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pressReleases.map((release, index) => (
                <motion.article

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >;
              <h2 className="text - 4xl font - bold mb - 6">Stay Updated</h2>;
              <p className="text - xl text - gray - 400 mb - 8">;
                Subscribe to our newsletter for the latest news, insights, and technology updates;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center max - w-md mx - auto">;
                <input;
                  type="email";
                  placeholder="Enter your email";
                  className="flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - cyan - 500 / 50";
                />;
                <button className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300">;
                  Subscribe;
                </button>;
              </div>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
              {press_releases.map ((release, index) => (
                <motion.article;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  key={release.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 p - 6 rounded - 2xl border border - gray - 700 / 30 hover:border - purple - 500 / 50 transition - all duration - 300 group";
                >;
                  <div className="flex items - center gap - 2 mb - 3">;
                    <span className="px - 3 py - 1 bg - purple - 500 / 20 text - purple - 300 rounded - full text - xs font - medium">;
                      {release.category}
                    </span>;
                    <span className="text - gray - 400 text - sm">{release.read_time}</span>;
                  </div>;
                  <h3 className="text - xl font - bold text - white mb - 3 group - hover:text - purple - 400 transition - colors duration - 300">;
                    {release.title}
                  </h3>;
                  <p className="text - gray - 300 text - sm mb - 4 leading - relaxed">;
                    {release.excerpt}
<<<<<<< HEAD
=======


                  key={release.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {release.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                    </span>
                    <span className="text-gray-400 text-sm">{release.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">

                    {release.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {release.excerpt  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                  </p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{release.date}</span>
                  </div>
                </motion.article>

                  </p>;
                  <div className="flex items - center gap - 2">;
                    <Calendar className="w - 4 h - 4 text - gray - 400" />;
                    <span className="text - gray - 400 text - sm">{release.date}</span>;
                  </div>;
                </motion.article>))}
            </div>;
          </div>;
        </section>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* News Categories */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
=======


              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* News Categories */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                News Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore news by category to find updates in your areas of interest.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {newsCategories.map((category, index) => (
                <motion.div

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl font - bold text - white mb - 4">;
                News Categories;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                Explore news by category to find updates in your areas of interest.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 6">;
              {news_categories.map ((category, index) => (
                <motion.div;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  key={category.name}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text - center group cursor - pointer";
                >;
                  <div className="w - 16 h - 16 bg - white / 10 backdrop - blur - lg rounded - 2xl flex items - center justify - center mx - auto mb - 3 group - hover:bg - purple - 500 / 20 transition - all duration - 300 border border - white / 20">;
                    <div className="text - purple - 400 group - hover:text - purple - 300 transition - colors duration - 300">;
                      {category.icon}
                    </div>;
                  </div>;
                  <h3 className="text - sm font - semibold text - white mb - 1">;
                    {category.name}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </h3>;
                  <p className="text - gray - 400 text - xs">{category.count} articles</p>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Recent News */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - black / 20">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
=======


                  key={category.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-all duration-300 border border-white/20">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {category.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {category.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>
                  <p className="text-gray-400 text-xs">{category.count} articles</p>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Recent News */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Recent News
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our latest announcements and developments.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentNews.map((news, index) => (
                <motion.article

              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl font - bold text - white mb - 4">;
                Recent News;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                Stay updated with our latest announcements and developments.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
              {recent_news.map ((news, index) => (
                <motion.article;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  key={news.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 p - 6 rounded - 2xl border border - gray - 700 / 30 hover:border - purple - 500 / 50 transition - all duration - 300 group";
                >;
                  <div className="flex items - center gap - 2 mb - 3">;
                    <span className="px - 3 py - 1 bg - purple - 500 / 20 text - purple - 300 rounded - full text - xs font - medium">;
                      {news.category}
                    </span>;
                    <span className="text - gray - 400 text - sm">{news.read_time}</span>;
                  </div>;
                  <h3 className="text - xl font - bold text - white mb - 3 group - hover:text - purple - 400 transition - colors duration - 300">;
                    {news.title}
                  </h3>;
                  <p className="text - gray - 300 text - sm mb - 4 leading - relaxed">;
                    {news.excerpt}
<<<<<<< HEAD
=======


                  key={news.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {news.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                    </span>
                    <span className="text-gray-400 text-sm">{news.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">

                    {news.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {news.excerpt  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{news.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{news.date}</span>
                    </div>
                  </div>
                </motion.article>


<<<<<<< HEAD
                  </p>;
                  <div className="flex items - center justify - between">;
                    <div className="flex items - center gap - 2">;
                      <User className="w - 4 h - 4 text - gray - 400" />;
                      <span className="text - gray - 400 text - sm">{news.author}</span>;
                    </div>;
                    <div className="flex items - center gap - 2">;
                      <Calendar className="w - 4 h - 4 text - gray - 400" />;
                      <span className="text - gray - 400 text - sm">{news.date}</span>;
                    </div>;
                  </div>;
                </motion.article>))}
            </div>;
          </div>;
        </section>;
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Media Contact */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
=======


              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Media Contact */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Media Inquiries
              </h2>
              <p className="text-xl text-gray-300 mb-8">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                For press inquiries, media interviews, or additional information,

                For press inquiries, media interviews, or additional information, 

                For press inquiries, media interviews, or additional information,

                please contact our communications team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Media Team
                  <Mic className="ml-2 w-5 h-5" />


                </Link>


                <a
                  href="/press"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Press Kit
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >;
              <h2 className="text - 4xl font - bold text - white mb - 4">;
                Media Inquiries;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8">;
                For press inquiries, media interviews, or additional information,
                please contact our communications team.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - purple - 600 to - cyan - 600 text - white font - semibold rounded - lg hover:from - purple - 700 hover:to - cyan - 700 transition - all duration - 300 transform hover:scale - 105";
                >;
                  Contact Media Team;
                  <Mic className="ml - 2 w - 5 h - 5" />;
                </a>;
                <a;
                  href="/press";
                  className="inline - flex items - center px - 8 py - 4 border - 2 border - purple - 500 text - purple - 400 font - semibold rounded - lg hover:bg - purple - 500 hover:text - white transition - all duration - 300";
                >;
                  Press Kit;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* CTA Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
=======


      {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Stay Informed?
            </h2>
            <p className="text-xl text-gray-300 mb-8">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



                href="/blog"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Blog
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>




                href="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </UltraAdvancedFuturisticBackground>
  )
}
      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >;
            <h2 className="text - 4xl md:text - 5xl font - bold mb - 6">;
              Ready to Stay Informed?;
            </h2>;
            <p className="text - xl text - gray - 300 mb - 8">;
              Explore our latest research, industry insights, and technology breakthroughs;
              that are shaping the future of AI and quantum computing.;
            </p>;
            <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
              <Link;
                href="/blog";
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - full hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105";
              >;
                Explore Our Blog;
                <ArrowRight className="w - 5 h - 5 ml - 2" />;
              </Link>;
              <Link;
                href="/contact";
                className="px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - semibold rounded - full hover:bg - cyan - 500 hover:text - black transition - all duration - 300";
              >;
                Contact Our Team;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
    </UltraAdvancedFuturisticBackground>);
}

      {/* Call to Action */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion.div;
<<<<<<< HEAD
=======
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Have questions about our news or want to learn more about our latest developments? Contact our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />

              </Link>
              <a href="/about" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                About Zion Tech Group
              </Link>
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Media & Press Inquiries
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Journalists and media representatives can access our press kit, company information, and arrange interviews with our leadership team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Download Press Kit
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Contact Media Relations
              </button>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Latest News */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Latest News
              </h2>
              <p className="text-xl text-gray-400">
                Recent updates and announcements
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredNews.filter(news => !news.featured).map((news, index) => (
                <motion.div

<<<<<<< HEAD
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text - 4xl font - bold mb - 6 bg - gradient - to - r from - purple - 400 to - pink - 600 bg - clip - text text - transparent">;
              Get in Touch;
            </h2>;
            <p className="text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto">;
              Have questions about our news or want to learn more about our latest developments? Contact our team.;
            </p>;
            <div className="flex flex - wrap justify - center gap - 4">;
              <a href="/contact" className="bg - gradient - to - r from - purple - 500 to - pink - 600 hover:from - purple - 600 hover:to - pink - 700 text - white px - 8 py - 3 rounded - lg font - semibold transition - all duration - 300 flex items - center space - x-2">;
                <span > Contact Us</span>;
                <ArrowRight className="w - 5 h - 5" />;
              </a>;
              <a href="/about" className="border border - purple - 500 text - purple - 400 hover:bg - purple - 500 hover:text - white px - 8 py - 3 rounded - lg font - semibold transition - all duration - 300">;
                About Zion Tech Group;
              </a>;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text - 4xl font - bold text - white mb - 6">;
              Media & Press Inquiries;
            </h2>;
            <p className="text - xl text - white / 70 mb - 8 max - w-2xl mx - auto">;
              Journalists and media representatives can access our press kit, company information, and arrange interviews with our leadership team.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <button className="px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105">;
                Download Press Kit;
              </button>;
              <button className="px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10">;
                Contact Media Relations;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
        {/* Latest News */}
        <section className="py - 20 bg - black / 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl font - bold text - white mb - 4">;
                Latest News;
              </h2>;
              <p className="text - xl text - gray - 400">;
                Recent updates and announcements;
              </p>;
            </motion.div>;
            <div className="grid lg:grid - cols - 2 gap - 8">;
              {filtered_news.filter (news => !news.featured).map ((news, index) => (
                <motion.div;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  key={news.id}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap - 6 p - 6 bg - gradient - to - br from - gray - 900 / 50 to - gray - 800 / 50 rounded - 2xl border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <div className="w - 24 h - 24 bg - gradient - to - br from - cyan - 500 / 20 to - purple - 500 / 20 rounded - xl flex items - center justify - center flex - shrink - 0">;
                    <Newspaper className="w - 12 h - 12 text - gray - 400" />;
                  </div>;
                  <div className="flex - 1">;
                    <div className="flex items - center gap - 2 mb - 2">;
                      <span className="px - 2 py - 1 bg - purple - 500 / 20 text - purple - 400 rounded text - xs border border - purple - 500 / 30">;
                        {news.category}
                      </span>;
                      <span className="text - gray - 400 text - xs">;
                        {news.read_time}
                      </span>;
                    </div>;
                    <h3 className="text - lg font - bold text - white mb - 2 line - clamp - 2">;
                      {news.title}
                    </h3>;
                    <p className="text - gray - 300 text - sm mb - 3 line - clamp - 2">;
                      {news.excerpt}
<<<<<<< HEAD
=======


                  key={news.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.8, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                  className="flex gap-6 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs border border-purple-500/30">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        {news.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {news.readTime  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {news.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {news.excerpt  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{formatDate(news.date)}</span>
                      <span>{news.author}</span>
                    </div>
                  </div>
                </motion.div>


              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
            {filteredNews.filter(news => !news.featured).length === 0 && (;
              <motion.div;
                initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">
                  No news articles match your current filters. Try adjusting your search or category selection.
                </p>
              </motion.div>

                    </p>;
                    <div className="flex items - center justify - between text - xs text - gray - 400">;
                      <span>{format_date (news.date)}</span>;
                      <span>{news.author}</span>;
                    </div>;
                  </div>;
                </motion.div>))}
            </div>;
            {filtered_news.filter (news => !news.featured).length === 0 && (
              <motion.div;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text - center py - 12";
              >;
                <p className="text - gray - 400 text - lg">;
                  No news articles match your current filters. Try adjusting your search or category selection.;
                </p>;
              </motion.div>)}
          </div>;
        </section>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Press Releases */}
        <section className="py - 20">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
=======


            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* Press Releases */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Press Releases
              </h2>
              <p className="text-xl text-gray-400">
                Official company announcements and media releases
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl font - bold text - white mb - 4">;
                Press Releases;
              </h2>;
              <p className="text - xl text - gray - 400">;
                Official company announcements and media releases;
              </p>;
            </motion.div>;
            <div className="max - w-4xl mx - auto space - y-6">;
              {press_releases.map ((release, index) => (
                <motion.div;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  key={release.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p - 6 bg - gradient - to - br from - gray - 900 / 50 to - gray - 800 / 50 rounded - 2xl border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <h3 className="text - xl font - bold text - white mb - 3">;
                    {release.title}
                  </h3>;
                  <p className="text - gray - 300 mb - 4">;
                    {release.summary}
<<<<<<< HEAD
=======


                  key={release.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.8, delay: index * 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {release.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {release.summary  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {formatDate(release.date)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    </span>
                    <a
                      href="/contact"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Request Full Release
                    </a>
                  </div>
                </motion.div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </p>;
                  <div className="flex items - center justify - between">;
                    <span className="text - gray - 400 text - sm">;
                      {format_date (release.date)}
                    </span>;
                    <a;
                      href="/contact";
                      className="text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300 font - medium";
                    >;
                      Request Full Release;
                    </a>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Media Resources */}
        <section className="py - 20 bg - black / 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
=======


              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Media Resources */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Media Resources
              </h2>
              <p className="text-xl text-gray-400">
                Downloadable assets and resources for media and journalists
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-8">
              {mediaResources.map((resource, index) => (
                <motion.div

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl font - bold text - white mb - 4">;
                Media Resources;
              </h2>;
              <p className="text - xl text - gray - 400">;
                Downloadable assets and resources for media and journalists;
              </p>;
            </motion.div>;
            <div className="grid lg:grid - cols - 2 gap - 8">;
              {media_resources.map ((resource, index) => (
                <motion.div;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  key={resource.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p - 6 bg - gradient - to - br from - gray - 900 / 50 to - gray - 800 / 50 rounded - 2xl border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <h3 className="text - xl font - bold text - white mb - 3">;
                    {resource.title}
                  </h3>;
                  <p className="text - gray - 300 mb - 4">;
                    {resource.description}
                  </p>;
                  <div className="flex items - center justify - between">;
                    <div className="flex items - center gap - 4 text - sm text - gray - 400">;
                      <span className="px - 2 py - 1 bg - gray - 700 / 50 rounded">;
                        {resource.type}

                  key={resource.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.8, delay: index * 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {resource.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {resource.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-gray-700/50 rounded">

                        {resource.type  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </span>;
                      <span>{resource.size}</span>;
                    </div>;
                    <a;
<<<<<<< HEAD
                      href={resource.download}
=======

                      href={resource.download  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Download
                    </a>
                  </div>
                </motion.div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      className="text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300 font - medium";
                    >;
                      Download;
                    </a>;
                  </div>;
                </motion.div>))}

              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - cyan - 500 / 10 via - purple - 500 / 10 to - pink - 500 / 10">;
          <div className="container mx - auto px - 4 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 4xl font - bold text - white mb - 6">;
                Stay Updated;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto">;
                Get the latest news, product updates, and industry insights delivered to your inbox. Never miss a breakthrough announcement.;
              </p>;
              <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - bold rounded - xl hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300 transform hover:scale - 105";
                >;
                  Subscribe to Updates;
                </a>;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - bold rounded - xl hover:bg - cyan - 500 hover:text - white transition - all duration - 300";
                >;
                  Media Inquiries;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
}
<<<<<<< HEAD
=======



        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the latest news, product updates, and industry insights delivered to your inbox. Never miss a breakthrough announcement.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe to Updates
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Media Inquiries
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="News | Zion Tech Group" description="News and press from Zion Tech Group" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">News & Press</h1>
        <p className="text-gray-300">Press releases and announcements will appear here.</p>
      </div>
      <EnhancedFooter />
    </div>
  )

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};
;
}

}

}
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="min - h-[60vh] px - 6 py - 24">;
      <SEO title="News | Zion Tech Group" description="News and press from Zion Tech Group" />;
      <div className="max - w-3xl mx - auto">;
        <h1 className="text - 4xl font - bold text - white mb - 4">News & Press</h1>;
        <p className="text - gray - 300">Press releases and announcements will appear here.</p>;
      </div>;
      <EnhancedFooter />;
    </div>);
}

<<<<<<< HEAD

        </Head>

        {/* Hero Section */}
        <section className=&quot;relative pt-32 pb-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.h1 
              className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center&quot;
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;>
                Latest News & Updates
              </div>
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6&quot;>
                News & Press
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    }
  ]
  const pressReleases = [
    {
      title: 'Zion Tech Group Announces Revolutionary AI Consciousness Breakthrough'
      date: '2025-01-15'
      summary: 'Major milestone in artificial intelligence research with implications for human-AI collaboration and consciousness studies.'
    }
    {
      title: 'Series C Funding Round: $250M Investment for Global Expansion'
      date: '2025-01-10'
      summary: 'Strategic investment to accelerate AI consciousness platform development and international market expansion.'
    }
    {
      title: 'Quantum-Secure Cloud Partnership with Microsoft Azure'
      date: '2025-01-05'
      summary: 'World\'s first quantum-secure cloud infrastructure for enterprise customers.'
    }
  ]
  const mediaResources = [
    {
      title: 'Company Fact Sheet'
      description: 'Key facts, figures, and company information for media and investors.'
      type: 'PDF'
      size: '2.1 MB'
      download: '/media/zion-tech-group-fact-sheet.pdf'
    }
    {
      title: 'Executive Biographies'
      description: 'Professional backgrounds and photos of Zion Tech Group leadership team.'
      type: 'ZIP'
      size: '15.3 MB'
      download: '/media/executive-bios.zip'
    }
    {
      title: 'Company Logo Package'
      description: 'High-resolution logos and brand assets for media use.'
      type: 'ZIP'
      size: '8.7 MB'
      download: '/media/logo-package.zip'
    }
    {
      title: 'Product Screenshots'
      description: 'High-quality screenshots of our AI and quantum computing platforms.'
      type: 'ZIP'
      size: '25.1 MB'
      download: '/media/product-screenshots.zip'
    }
  ]
  const filteredNews = [...featuredNews, ...latestNews].filter(news => {
    const categoryMatch = selectedCategory === 'all' |news.category === selectedCategory
    const searchMatch = searchQuery === '' |
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) |
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) |
      news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return categoryMatch && searchMatch
  })
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric'
      month: 'long'
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
<<<<<<< HEAD
        {/* Hero Section */}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Latest News & Updates
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                News & Press
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
<<<<<<< HEAD
                Stay updated with the latest developments, breakthroughs, and innovations
                from Zion Tech Group and the technology industry.
              </p>
            </motion.div>
                Stay updated with the latest developments, breakthroughs, and innovations 
                from Zion Tech Group and the technology industry.
              </p>
            </motion.div>
        {/* Category Filter */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
                Stay updated with the latest developments, breakthroughs, and innovations
                from Zion Tech Group and the technology industry.
              </p>
            </motion.div>
        {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

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
      id: 6,
      title: 'New Research Paper: "Quantum Neural Networks for Drug Discovery"',
      excerpt: 'Breakthrough research demonstrates quantum computing applications in pharmaceutical research, potentially accelerating drug development by decades.',
      category: 'research',
      date: '2025 - 01 - 03',
      author: 'Dr. Michael Rodriguez',
      read_time: '8 min read',
      featured: false,
      image: '/images / news / quantum - drug - discovery.jpg',
      tags: ['Quantum ComputingDrug DiscoveryResearchHealthcare'];
    },
    {
      id: 7,
      title: 'Strategic Partnership with Deloitte for Enterprise AI Implementation',
      excerpt: 'Collaboration to deliver AI consciousness solutions to Fortune 500 companies, accelerating digital transformation initiatives.',
      category: 'partnerships',
      date: '2024 - 12 - 28',
      author: 'Zion Tech Group',
      read_time: '3 min read',
      featured: false,
      image: '/images / news / deloitte - partnership.jpg',
      tags: ['PartnershipDeloitteEnterpriseAI Implementation'];
    },
    {
      id: 8,
      title: 'AI Autonomous Business Operations Platform Beta Launch',
      excerpt: 'Revolutionary platform enables fully autonomous business management with AI - driven decision making and process optimization.',
      category: 'product',
      date: '2024 - 12 - 20',
      author: 'Zion Tech Group',
      read_time: '6 min read',
      featured: false,
      image: '/images / news / ai - autonomous - business.jpg',
      tags: ['AIAutonomous OperationsBusinessPlatform'];
    },
    {
      id: 9,
      title: 'Zion Tech Group Expands to European Markets',
      excerpt: 'Strategic expansion into European Union markets with new offices in London, Berlin, and Paris to serve growing demand.',
      category: 'company',
      date: '2024 - 12 - 15',
      author: 'Zion Tech Group',
      read_time: '3 min read',
      featured: false,
      image: '/images / news / european - expansion.jpg',
      tags: ['ExpansionEuropeInternationalGrowth'];
    }
  ],
  const press_releases = [;
    {
      title: 'Zion Tech Group Announces Revolutionary AI Consciousness Breakthrough',
      date: '2025 - 01 - 15',
      summary: 'Major milestone in artificial intelligence research with implications for human - AI collaboration and consciousness studies.';
    },
    {
      title: 'Series C Funding Round: $250M Investment for Global Expansion',
      date: '2025 - 01 - 10',
      summary: 'Strategic investment to accelerate AI consciousness platform development and international market expansion.';
    },
    {
      title: 'Quantum - Secure Cloud Partnership with Microsoft Azure',
      date: '2025 - 01 - 05',
      summary: 'World's first quantum - secure cloud infrastructure for enterprise customers.';
    }
  ],
  const media_resources = [;
    {
      title: 'Company Fact Sheet',
      description: 'Key facts, figures, and company information for media and investors.',
      type: 'PDF',
      size: '2.1 MB',
      download: '/media / zion - tech - group - fact - sheet.pdf';
    },
    {
      title: 'Executive Biographies',
      description: 'Professional backgrounds and photos of Zion Tech Group leadership team.',
      type: 'ZIP',
      size: '15.3 MB',
      download: '/media / executive - bios.zip';
    },
    {
      title: 'Company Logo Package',
      description: 'High - resolution logos and brand assets for media use.',
      type: 'ZIP',
      size: '8.7 MB',
      download: '/media / logo - package.zip';
    },
    {
      title: 'Product Screenshots',
      description: 'High - quality screenshots of our AI and quantum computing platforms.',
      type: 'ZIP',
      size: '25.1 MB',
      download: '/media / product - screenshots.zip';
    }
  ],
  const filtered_news = [...featured_news, ...latest_news].filter (news => {
    const category_match = selected_category === 'all' || news.category === selected_category,
    const search_match = search_query === '' ||;
      news.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      news.excerpt.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      news.tags.some (tag => tag.toLowerCase ().includes (search_query.toLowerCase ())),
    return category_match && search_match;
  }),
  const format_date = (date_string: string) =>: any {
    const date = new Date (date_string),
    return date.toLocaleDateString ('en - US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric';
    });
  },
import React from 'react',
import SEO from '../components / SEO',
export default /**
 * NewsPage - Function description
 */
function NewsPage() {
  return (
    <UltraAdvancedFuturisticBackground>;
      <div className="min - h-screen">;
        <Head>;
          <title > News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>;
          <meta name="description" content="Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies." />;
        </Head>;
        {/* Hero Section */}
        <section className="relative pt - 32 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto text - center">;
            <motion.h1;
              className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent mb - 6";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center";
            >;
              <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - blue - 400 via - indigo - 500 to - purple - 600 bg - clip - text text - transparent mb - 6">;
                Latest News & Updates;
              </div>;
              <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - blue - 400 via - cyan - 400 to - indigo - 400 bg - clip - text text - transparent mb - 6">;
                News & Press;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed">;
                Stay updated with the latest developments, breakthroughs, and innovations;
                from Zion Tech Group and the technology industry.;
              </p>;
            </motion.div>;

        {/* Category Filter */}
        <section className="py - 10 px - 4">;
          <div className="container mx - auto max - w-6xl">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex - wrap justify - center gap - 4";
            >;
              {categories.map ((category, index) => (
                <button;
                  key={category}



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <button
                  key={category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    category === "All News"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
<<<<<<< HEAD
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600"
import React, { useState } from 'react';
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  Newspaper, Globe, Award, Users, Rocket, Brain
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600";
import React, { useState } from 'react',;
import React from 'react',;
import Head from 'next/head',;
import { motion } from 'framer-motion',;
import { 
  Newspaper, Globe, Award, Users, Rocket, Brain, 
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600"
import React, { useState } from 'react',
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import {
  Newspaper, Globe, Award, Users, Rocket, Brain,
  ArrowRight, ExternalLink, Calendar, Tag, Star
} from 'lucide-react'
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
  ArrowRight, ExternalLink, Calendar, Tag, Star
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation',;
import EnhancedFooter from '../components/EnhancedFooter',;
=======

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function NewsPage() {
  const newsItems = [
    {
      title: "Zion Tech Group Named Top AI Innovation Company 2025"
      category: "Awards & Recognition"
      date: "January 15, 2025"
      excerpt: "Zion Tech Group has been recognized as one of the top AI innovation companies of 2025 by TechCrunch, highlighting our breakthrough work in autonomous AI systems and quantum computing integration."
      image: "/api/placeholder/600/400"
      source: "TechCrunch"
      url: "#"
      featured: true
      icon: Award
      color: "from-yellow-500 to-orange-500"
    }
    {
      title: "Revolutionary Quantum AI Breakthrough Announced"
      category: "Technology Innovation"
      date: "January 10, 2025"
      excerpt: "Zion Tech Group announces a major breakthrough in quantum AI integration, achieving unprecedented performance improvements in machine learning algorithms through quantum-enhanced neural networks."
      image: "/api/placeholder/600/400"
      source: "MIT Technology Review"
      url: "#"
      featured: false
      icon: Brain
      color: "from-purple-500 to-pink-500"
    }
    {
      title: "Partnership with Fortune 500 Financial Institution"
      category: "Business Development"
      date: "January 5, 2025"
      excerpt: "Zion Tech Group announces strategic partnership with leading financial institution to deploy AI-powered risk assessment and fraud detection systems across their global operations."
      image: "/api/placeholder/600/400"
      source: "Business Insider"
      url: "#"
      featured: false
      icon: Users
      color: "from-blue-500 to-cyan-500"
    }
    {
      title: "New Cybersecurity Division Launch"
      category: "Company News"
      date: "December 28, 2024"
      excerpt: "Zion Tech Group expands its service portfolio with the launch of a dedicated cybersecurity division, offering quantum-resistant encryption and AI-powered threat detection solutions."
      image: "/api/placeholder/600/400"
      source: "Security Weekly"
      url: "#"
      featured: false
      icon: Rocket
      color: "from-red-500 to-orange-500"
    }
    {
      title: "Record-Breaking AI Model Performance"
      category: "Research & Development"
      date: "December 20, 2024"
      excerpt: "Our research team achieves record-breaking performance in natural language processing, with our latest AI model outperforming industry benchmarks by 40% in accuracy and 60% in speed."
      image: "/api/placeholder/600/400"
      source: "AI Research Journal"
      url: "#"
      featured: false
      icon: Brain
      color: "from-emerald-500 to-teal-500"
    }
    {
      title: "Global Expansion: New Office in Singapore"
      category: "Company News"
      date: "December 15, 2024"
      excerpt: "Zion Tech Group announces the opening of its new Asia-Pacific headquarters in Singapore, expanding our global reach and strengthening partnerships in the region."
      image: "/api/placeholder/600/400"
      source: "Singapore Business Times"
      url: "#"
      featured: false
      icon: Globe
      color: "from-indigo-500 to-purple-500"
    }
  ]
  const categories = ["All", "Awards & Recognition", "Technology Innovation", "Business Development", "Company News", "Research & Development"]
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const filteredNews = selectedCategory === "All"
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory)
  const featuredNews = newsItems.filter(item => item.featured)
      title: "Zion Tech Group Named Top AI Innovation Company 2025",
      category: "Awards & Recognition",
      date: "January 15, 2025",
      excerpt: "Zion Tech Group has been recognized as one of the top AI innovation companies of 2025 by TechCrunch, highlighting our breakthrough work in autonomous AI systems and quantum computing integration.",
      image: "/api/placeholder/600/400",
      source: "TechCrunch",
      url: "#",
      featured: true,
      icon: Award,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Revolutionary Quantum AI Breakthrough Announced",
      category: "Technology Innovation",
      date: "January 10, 2025",
      excerpt: "Zion Tech Group announces a major breakthrough in quantum AI integration, achieving unprecedented performance improvements in machine learning algorithms through quantum-enhanced neural networks.",
      image: "/api/placeholder/600/400",
      source: "MIT Technology Review",
      url: "#",
      featured: false,
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Partnership with Fortune 500 Financial Institution",
      category: "Business Development",
      date: "January 5, 2025",
      excerpt: "Zion Tech Group announces strategic partnership with leading financial institution to deploy AI-powered risk assessment and fraud detection systems across their global operations.",
      image: "/api/placeholder/600/400",
      source: "Business Insider",
      url: "#",
      featured: false,
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "New Cybersecurity Division Launch",
      category: "Company News",
      date: "December 28, 2024",
      excerpt: "Zion Tech Group expands its service portfolio with the launch of a dedicated cybersecurity division, offering quantum-resistant encryption and AI-powered threat detection solutions.",
      image: "/api/placeholder/600/400",
      source: "Security Weekly",
      url: "#",
      featured: false,
      icon: Rocket,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Record-Breaking AI Model Performance",
      category: "Research & Development",
      date: "December 20, 2024",
      excerpt: "Our research team achieves record-breaking performance in natural language processing, with our latest AI model outperforming industry benchmarks by 40% in accuracy and 60% in speed.",
      image: "/api/placeholder/600/400",
      source: "AI Research Journal",
      url: "#",
      featured: false,
      icon: Brain,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Global Expansion: New Office in Singapore",
      category: "Company News",
      date: "December 15, 2024",
      excerpt: "Zion Tech Group announces the opening of its new Asia-Pacific headquarters in Singapore, expanding our global reach and strengthening partnerships in the region.",
      image: "/api/placeholder/600/400",
      source: "Singapore Business Times",
      url: "#",
      featured: false,
      icon: Globe,
      color: "from-indigo-500 to-purple-500"
<<<<<<< HEAD
    }
  ],

  const categories = ["All", "Awards & Recognition", "Technology Innovation", "Business Development", "Company News", "Research & Development"],
  const [selectedCategory, setSelectedCategory] = React.useState("All"),

  const filteredNews = selectedCategory === "All" 
    ? newsItems 
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const categories = ["All", "Awards & Recognition", "Technology Innovation", "Business Development", "Company News", "Research & Development"],
  const [selectedCategory, setSelectedCategory] = React.useState("All"),
  const filteredNews = selectedCategory === "All"
    ? newsItems
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    : newsItems.filter(item => item.category === selectedCategory),
  const featuredNews = newsItems.filter(item => item.featured),
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>News & Press - Zion Tech Group</title>
        <meta name="description" content="Stay updated with Zion Tech Group's latest news, press releases, awards, and media coverage. Discover our innovations in AI, quantum computing, and technology." />
        <meta property="og:title" content="News & Press - Zion Tech Group" />
        <meta property="og:description" content="Stay updated with our latest news, awards, and media coverage." />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>
      <EnhancedNavigation />
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
=======
      <section className="relative pt - 32 pb - 20 px - 6">;
        <div className="max - w-7xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            transition={{ duration: 0.8 }}
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              News & Press
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our latest innovations, awards, and media coverage
            </p>
          </motion.div>
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Discover the latest developments in AI, quantum computing, and technology 
<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Discover the latest developments in AI, quantum computing, and technology
<<<<<<< HEAD
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              innovation from Zion Tech Group and our global team.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Featured News */}
      {/* Featured News */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {featuredNews.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
  ],;
  const filteredNews = [...featuredNews, ...latestNews].filter(news => {;
    const categoryMatch = selectedCategory === 'all' || news.category === selectedCategory;
    const searchMatch = searchQuery === '' ||;
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });
  const formatDate = (dateString: string) => {;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {;
      year: 'numeric',;
      month: 'long',;
      day: 'numeric';
    });
  },;
import React from 'react';
import SEO from '../components/SEO';
export default function NewsPage(req, res) {
  try {
  return (;
    <UltraAdvancedFuturisticBackground>;
      <div className="min-h-screen">;
        <Head>;
          <title>News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>;
          <meta name="description" content="Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies." />;
        </Head>;
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto text-center">;
            <motion.h1;
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6";
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
              className="text-center";
            >;
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">;
                Latest News & Updates;
              </div>;
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">;
                News & Press;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
                Stay updated with the latest developments, breakthroughs, and innovations;
                from Zion Tech Group and the technology industry.;
              </p>;
            </motion.div>;
        {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-10 px-4">;
          <div className="container mx-auto max-w-6xl">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="flex flex-wrap justify-center gap-4";
            >;
              {categories.map((category, index) => (;
                <button;
                  key={category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${;
                    category === "All News";
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white";
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600";
import React, { useState } from 'react';
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {;
  Newspaper, Globe, Award, Users, Rocket, Brain,;
  ArrowRight, ExternalLink, Calendar, Tag, Star;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function NewsPage(req, res) {
  try {
  const newsItems = [;
    {;
      title: "Zion Tech Group Named Top AI Innovation Company 2025";
      category: "Awards & Recognition";
      date: "January 15, 2025",;
      excerpt: "Zion Tech Group has been recognized as one of the top AI innovation companies of 2025 by TechCrunch, highlighting our breakthrough work in autonomous AI systems and quantum computing integration.",;
      image: "/api/placeholder/600/400",;
      source: "TechCrunch",;
      url: "#",;
      featured: true,;
      icon: Award,;
      color: "from-yellow-500 to-orange-500";
    },;
    {;
      title: "Revolutionary Quantum AI Breakthrough Announced",;
      category: "Technology Innovation",;
      date: "January 10, 2025",;
      excerpt: "Zion Tech Group announces a major breakthrough in quantum AI integration, achieving unprecedented performance improvements in machine learning algorithms through quantum-enhanced neural networks.",;
      image: "/api/placeholder/600/400",;
      source: "MIT Technology Review",;
      url: "#",;
      featured: false,;
      icon: Brain,;
      color: "from-purple-500 to-pink-500";
    },;
    {;
      title: "Partnership with Fortune 500 Financial Institution",;
      category: "Business Development",;
      date: "January 5, 2025",;
      excerpt: "Zion Tech Group announces strategic partnership with leading financial institution to deploy AI-powered risk assessment and fraud detection systems across their global operations.",;
      image: "/api/placeholder/600/400",;
      source: "Business Insider",;
      url: "#",;
      featured: false,;
      icon: Users,;
      color: "from-blue-500 to-cyan-500";
    },;
    {;
      title: "New Cybersecurity Division Launch",;
      category: "Company News",;
      date: "December 28, 2024",;
      excerpt: "Zion Tech Group expands its service portfolio with the launch of a dedicated cybersecurity division, offering quantum-resistant encryption and AI-powered threat detection solutions.",;
      image: "/api/placeholder/600/400",;
      source: "Security Weekly",;
      url: "#",;
      featured: false,;
      icon: Rocket,;
      color: "from-red-500 to-orange-500";
    },;
    {;
      title: "Record-Breaking AI Model Performance",;
      category: "Research & Development",;
      date: "December 20, 2024",;
      excerpt: "Our research team achieves record-breaking performance in natural language processing, with our latest AI model outperforming industry benchmarks by 40% in accuracy and 60% in speed.",;
      image: "/api/placeholder/600/400",;
      source: "AI Research Journal",;
      url: "#",;
      featured: false,;
      icon: Brain,;
      color: "from-emerald-500 to-teal-500";
    },;
    {;
      title: "Global Expansion: New Office in Singapore",;
      category: "Company News",;
      date: "December 15, 2024",;
      excerpt: "Zion Tech Group announces the opening of its new Asia-Pacific headquarters in Singapore, expanding our global reach and strengthening partnerships in the region.",;
      image: "/api/placeholder/600/400",;
      source: "Singapore Business Times",;
      url: "#",;
      featured: false,;
      icon: Globe,;
      color: "from-indigo-500 to-purple-500";
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const categories = ["All", "Awards & Recognition", "Technology Innovation", "Business Development", "Company News", "Research & Development"],;
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const filteredNews = selectedCategory === "All";
    ? newsItems;
    : newsItems.filter(item => item.category === selectedCategory);
  const featuredNews = newsItems.filter(item => item.featured);
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;
      <Head>;
        <title>News & Press - Zion Tech Group</title>;
        <meta name="description" content="Stay updated with Zion Tech Group's latest news, press releases, awards, and media coverage. Discover our innovations in AI, quantum computing, and technology." />;
        <meta property="og:title" content="News & Press - Zion Tech Group" />;
        <meta property="og:description" content="Stay updated with our latest news, awards, and media coverage." />;
        <link rel="canonical" href="https://ziontechgroup.com/news" />;
      </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative pt-32 pb-20 px-6">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
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
            className="mb-8";
<<<<<<< HEAD
          >;
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">;
              News & Press;
            </h1>;
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >;
            <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - white via - blue - 100 to - cyan - 100 bg - clip - text text - transparent mb - 6">;
              News & Press;
            </h1>;
            <p className="text - xl md:text - 2xl text - white / 80 max - w-3xl mx - auto leading - relaxed">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Stay updated with our latest innovations, awards, and media coverage;
            </p>;
          </motion.div>;
          <motion.div;
<<<<<<< HEAD
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
            transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="mb-12";
          >;
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">;
=======
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb - 12";
          >;
            <p className="text - lg text - white / 70 max - w-2xl mx - auto mb - 8">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Discover the latest developments in AI, quantum computing, and technology;
              innovation from Zion Tech Group and our global team.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD
      {/* Featured News */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      {featuredNews.length > 0 && (;
        <section className="py-16 px-6">;
          <div className="max-w-7xl mx-auto">;
            <motion.div;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {/* Featured News */}
      {featured_news.length > 0 && (
        <section className="py - 16 px - 6">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured News</h2>
              <p className="text-white/70">Latest headlines and major announcements</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item, index) => (
                <motion.div
                  key={item.title}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
=======
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={item.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full">
                          {item.category}
                          {item.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </span>
                        <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                          Featured
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/70 mb-6">{item.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Newspaper className="w-4 h-4" />
                        <span>{item.source}</span>
                      </div>
                    </div>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Category Filter */}
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* News Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
                key={category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                onClick={() => setSelectedCategory(category)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${;
                  selectedCategory === category;
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white';
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >;
                {category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </button>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* News Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Latest News</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay informed about our latest developments and industry recognition
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.filter(item => !item.featured).map((item, index) => (
              <motion.div
                key={item.title}
<<<<<<< HEAD
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
=======
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={item.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded-full">
                      {item.category}
                      {item.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Newspaper className="w-3 h-3" />
                      <span>{item.source}</span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Press Kit CTA */}
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Press Kit CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
                    <a
                      href={`/news/${news.id}`}
                      href={`/news/${news.id}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    </Link>
<<<<<<< HEAD
                  </div>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  </div>
                </motion.div>
              ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.6, delay: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Latest News</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our most recent developments and announcements
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.title}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
=======
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  key={article.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: 0.1 * index }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
                      {article.category}
                      {article.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                      {new Date(article.date).toLocaleDateString()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        {/* Newsletter Signup */}
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Newsletter Signup */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter for the latest news, insights, and breakthroughs in AI consciousness and quantum computing.
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.6, delay: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-400 mb-8">
                Subscribe to our newsletter for the latest news, insights, and technology updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pressReleases.map((release, index) => (
                <motion.article
                  key={release.title}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
=======
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={release.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                      {release.category}
                      {release.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </span>
                    <span className="text-gray-400 text-sm">{release.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {release.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {release.excerpt}
                    {release.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {release.excerpt  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{release.date}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        {/* News Categories */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
=======
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* News Categories */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                News Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore news by category to find updates in your areas of interest.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {newsCategories.map((category, index) => (
                <motion.div
                  key={category.name}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
=======
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={category.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-all duration-300 border border-white/20">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-xs">{category.count} articles</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Recent News */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                      {category.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {category.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>
                  <p className="text-gray-400 text-xs">{category.count} articles</p>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Recent News */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Recent News
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our latest announcements and developments.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentNews.map((news, index) => (
                <motion.article
                  key={news.title}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
=======
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={news.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                      {news.category}
                      {news.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </span>
                    <span className="text-gray-400 text-sm">{news.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {news.excerpt}
                    {news.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {news.excerpt  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{news.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{news.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        {/* Media Contact */}
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Media Contact */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Media Inquiries
              </h2>
              <p className="text-xl text-gray-300 mb-8">
<<<<<<< HEAD
                For press inquiries, media interviews, or additional information

                For press inquiries, media interviews, or additional information,
                For press inquiries, media interviews, or additional information, 
                For press inquiries, media interviews, or additional information,
=======


                For press inquiries, media interviews, or additional information,

=======
                For press inquiries, media interviews, or additional information, 
                For press inquiries, media interviews, or additional information,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                please contact our communications team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Media Team
                  <Mic className="ml-2 w-5 h-5" />
                </a>
                </Link>
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <a
                  href="/press"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Press Kit
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      {/* CTA Section */}
      {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Stay Informed?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
<<<<<<< HEAD
              Explore our latest research, industry insights, and technology breakthroughs 
              that are shaping the future of AI and quantum computing.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link 
              Explore our latest research, industry insights, and technology breakthroughs
              that are shaping the future of AI and quantum computing.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                href="/blog"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Blog
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
<<<<<<< HEAD
              <Link
              <Link 
              <Link
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </UltraAdvancedFuturisticBackground>
  )
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      {/* Call to Action */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
          >;
            <h2 className="text-4xl md:text-5xl font-bold mb-6">;
              Ready to Stay Informed?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8">;
              Explore our latest research, industry insights, and technology breakthroughs;
              that are shaping the future of AI and quantum computing.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                href="/blog";
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105";
              >;
                Explore Our Blog;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <Link;
                href="/contact";
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300";
=======
}
      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
=======
          >;
            <h2 className="text - 4xl md:text - 5xl font - bold mb - 6">;
              Ready to Stay Informed?;
            </h2>;
            <p className="text - xl text - gray - 300 mb - 8">;
              Explore our latest research, industry insights, and technology breakthroughs;
              that are shaping the future of AI and quantum computing.;
            </p>;
            <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
              <Link;
                href="/blog";
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - full hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105";
              >;
                Explore Our Blog;
                <ArrowRight className="w - 5 h - 5 ml - 2" />;
              </Link>;
              <Link;
                href="/contact";
                className="px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - semibold rounded - full hover:bg - cyan - 500 hover:text - black transition - all duration - 300";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >;
                Contact Our Team;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
<<<<<<< HEAD
    </UltraAdvancedFuturisticBackground>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
    </UltraAdvancedFuturisticBackground>);
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Call to Action */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Have questions about our news or want to learn more about our latest developments? Contact our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/about" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                About Zion Tech Group
              </a>
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              </Link>
              <a href="/about" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                About Zion Tech Group
              </Link>
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Media & Press Inquiries
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Journalists and media representatives can access our press kit, company information, and arrange interviews with our leadership team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Download Press Kit
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Contact Media Relations
              </button>
            </div>
          </motion.div>
        </div>
      </section>
        {/* Latest News */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
        {/* Latest News */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Latest News
              </h2>
              <p className="text-xl text-gray-400">
                Recent updates and announcements
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredNews.filter(news => !news.featured).map((news, index) => (
                <motion.div
                  key={news.id}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
=======
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={news.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.8, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="flex gap-6 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs border border-purple-500/30">
                        {news.category}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {news.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {news.excerpt}
                        {news.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {news.readTime  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {news.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {news.excerpt  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{formatDate(news.date)}</span>
                      <span>{news.author}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {filteredNews.filter(news => !news.featured).length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
            {filteredNews.filter(news => !news.featured).length === 0 && (;
              <motion.div;
                initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">
                  No news articles match your current filters. Try adjusting your search or category selection.
                </p>
              </motion.div>
            )}
          </div>
        </section>
        {/* Press Releases */}
<<<<<<< HEAD
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
=======
        <section className="py - 20">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* Press Releases */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Press Releases
              </h2>
              <p className="text-xl text-gray-400">
                Official company announcements and media releases
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.title}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {release.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
=======
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p - 6 bg - gradient - to - br from - gray - 900 / 50 to - gray - 800 / 50 rounded - 2xl border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <h3 className="text - xl font - bold text - white mb - 3">;
                    {release.title}
                  </h3>;
                  <p className="text - gray - 300 mb - 4">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {release.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {formatDate(release.date)}
                  key={release.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.8, delay: index * 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {release.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {release.summary  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {formatDate(release.date)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </span>
                    <a
                      href="/contact"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Request Full Release
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Media Resources */}
<<<<<<< HEAD
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
=======
        <section className="py - 20 bg - black / 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Media Resources */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Media Resources
              </h2>
              <p className="text-xl text-gray-400">
                Downloadable assets and resources for media and journalists
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-8">
              {mediaResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
=======
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p - 6 bg - gradient - to - br from - gray - 900 / 50 to - gray - 800 / 50 rounded - 2xl border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <h3 className="text - xl font - bold text - white mb - 3">;
                    {resource.title}
                  </h3>;
                  <p className="text - gray - 300 mb - 4">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {resource.description}
                  key={resource.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.8, delay: index * 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {resource.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {resource.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-gray-700/50 rounded">
                        {resource.type}
                      </span>
                      <span>{resource.size}</span>
                    </div>
                    <a
                      href={resource.download}
                        {resource.type  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </span>;
                      <span>{resource.size}</span>;
                    </div>;
                    <a;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      href={resource.download  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Download
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
            </div>;
          </div>;
        </section>;
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

            </div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - cyan - 500 / 10 via - purple - 500 / 10 to - pink - 500 / 10">;
          <div className="container mx - auto px - 4 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 4xl font - bold text - white mb - 6">;
                Stay Updated;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto">;
                Get the latest news, product updates, and industry insights delivered to your inbox. Never miss a breakthrough announcement.;
              </p>;
              <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - bold rounded - xl hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300 transform hover:scale - 105";
                >;
                  Subscribe to Updates;
                </a>;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - bold rounded - xl hover:bg - cyan - 500 hover:text - white transition - all duration - 300";
                >;
                  Media Inquiries;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
}



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the latest news, product updates, and industry insights delivered to your inbox. Never miss a breakthrough announcement.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe to Updates
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Media Inquiries
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="News | Zion Tech Group" description="News and press from Zion Tech Group" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">News & Press</h1>
        <p className="text-gray-300">Press releases and announcements will appear here.</p>
      </div>
      <EnhancedFooter />
    </div>
  )
<<<<<<< HEAD
};
;
}
}
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Stay Updated;
              </h2>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Get the latest news, product updates, and industry insights delivered to your inbox. Never miss a breakthrough announcement.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <a;
                  href="/contact";
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105";
                >;
                  Subscribe to Updates;
                </a>;
                <a;
                  href="/contact";
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300";
                >;
                  Media Inquiries;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    <div className="min-h-[60vh] px-6 py-24">;
      <SEO title="News | Zion Tech Group" description="News and press from Zion Tech Group" />;
      <div className="max-w-3xl mx-auto">;
        <h1 className="text-4xl font-bold text-white mb-4">News & Press</h1>;
        <p className="text-gray-300">Press releases and announcements will appear here.</p>;
      </div>;
      <EnhancedFooter />;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
=======
=======

=======

};
;
}

}

=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    <div className="min - h-[60vh] px - 6 py - 24">;
      <SEO title="News | Zion Tech Group" description="News and press from Zion Tech Group" />;
      <div className="max - w-3xl mx - auto">;
        <h1 className="text - 4xl font - bold text - white mb - 4">News & Press</h1>;
        <p className="text - gray - 300">Press releases and announcements will appear here.</p>;
      </div>;
      <EnhancedFooter />;
    </div>);
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
