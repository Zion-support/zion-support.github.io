
=======

import { 
  Newspaper;
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
ExternalLink;
  TrendingUp;
  Award;
  Rocket;
  Globe;
  Brain;
  Atom;
  Zap
} from 'lucide-react'
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import React from 'react',
import Head from 'next / head',
import { motion } from 'framer-motion',
import {
  Newspaper,
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Latest News & Updates
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                News & Press
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

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

        {/* Category Filter */  } catch (error) {
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

      {/* Hero Section */}
      <section className="relative pt - 32 pb - 20 px - 6">;
        <div className="max - w-7xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}


      {/* Hero Section */  } catch (error) {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

import React, { useState } from 'react',
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import {
  Newspaper, Globe, Award, Users, Rocket, Brain,

  ArrowRight, ExternalLink, Calendar, Tag, Star
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation',;
import EnhancedFooter from '../components/EnhancedFooter',;

export default function NewsPage() {
  const newsItems = [
    {

    }
  ],

  const categories = ["All", "Awards & Recognition", "Technology Innovation", "Business Development", "Company News", "Research & Development"],
  const [selectedCategory, setSelectedCategory] = React.useState("All"),

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Discover the latest developments in AI, quantum computing, and technology

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Discover the latest developments in AI, quantum computing, and technology

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              innovation from Zion Tech Group and our global team.
            </p>
          </motion.div>
        </div>
      </section>

      {featuredNews.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">

            <motion.div

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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured News</h2>
              <p className="text-white/70">Latest headlines and major announcements</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {featuredNews.map((item, index) => (
                <motion.div

                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full">

                        </span>
                        <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        </span>
                        <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                          Featured
                        </span>
                      </div>
                    </div>

                    </button>
                  </div>
                </motion.div>

      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded-full">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
                    <a

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  </div>
                </motion.div>
              ))}
            </div>

              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

            <motion.div

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />

                  </button>
                </motion.article>

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


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    </span>
                    <span className="text-gray-400 text-sm">{release.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  </p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{release.date}</span>

                  </div>
                </motion.article>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-all duration-300 border border-white/20">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    </span>
                    <span className="text-gray-400 text-sm">{news.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{news.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{news.date}</span>

        {/* Media Contact */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
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
        {/* Media Contact */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                please contact our communications team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Media Team
                  <Mic className="ml-2 w-5 h-5" />

=======

                </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                <a
                  href="/press"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Press Kit
                </a>

      {/* CTA Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}


      {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

              Explore our latest research, industry insights, and technology breakthroughs
              that are shaping the future of AI and quantum computing.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">

              Explore our latest research, industry insights, and technology breakthroughs
              that are shaping the future of AI and quantum computing.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link

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
                Contact Media Relations
              </button>
            </div>
          </motion.div>
        </div>
      </section>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

                  className="flex gap-6 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs border border-purple-500/30">

                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                      <span>{formatDate(news.date)}</span>
                      <span>{news.author}</span>
                    </div>
                  </div>
                </motion.div>

                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">

                  No news articles match your current filters. Try adjusting your search or category selection.
                </p>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

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

        {/* Press Releases */}
        <section className="py - 20">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    </span>
                    <a
                      href="/contact"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Request Full Release
                    </a>

                  </div>
                </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-gray-700/50 rounded">

=======
                        {resource.type  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      </span>;
                      <span>{resource.size}</span>;
                    </div>;
                    <a;

                      href={resource.download  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Download
                    </a>

                  </div>
                </motion.div>

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
    <div className="min - h-[60vh] px - 6 py - 24">;
      <SEO title="News | Zion Tech Group" description="News and press from Zion Tech Group" />;
      <div className="max - w-3xl mx - auto">;
        <h1 className="text - 4xl font - bold text - white mb - 4">News & Press</h1>;
        <p className="text - gray - 300">Press releases and announcements will appear here.</p>;
      </div>;
      <EnhancedFooter />;
    </div>);
}

;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
