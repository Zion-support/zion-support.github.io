
import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="News - Zion Tech Group"
      description="Latest news and updates from Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">News</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
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
import React from 'react',;
import Head from 'next / head',;
import { motion } from 'framer-motion',;
import {
  Newspaper,
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
  ]


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
              initial={{ opacity: 0, y: 30 }}
import React from 'react',;

import Head from 'next/head';
import { motion } from 'framer-motion';
import { Newspaper;
  Calendar;
  User;
  Tag;
  ArrowRight;
  ExternalLink;
  TrendingUp;
  Award;
  Rocket;
  Globe;
  Brain;
  Atom;
  Zap
 } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
const NewsPage: React.FC;

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
      {/* CTA Section */}
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
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Stay Informed?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                    </span>
                    <a
                      href="/contact"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Request Full Release
                    </a>
                  </div>
                </motion.div>
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

        {/* Media Resources */}
        <section className="py - 20 bg - black / 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
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

href={resource.download  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Download
                    </a>
                  </div>
                </motion.div>
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
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="News | Zion Tech Group" description="News and press from Zion Tech Group" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">News & Press</h1>
        <p className="text-gray-300">Press releases and announcements will appear here.</p>
      </div>
      <EnhancedFooter />
    </div>
  )
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


};
;
}

}

}
}
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
import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="News - Zion Tech Group"
      description="Latest news and updates from Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">News</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
</>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
