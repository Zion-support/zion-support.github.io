import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="News - Zion Tech Group
      description=Latest news and updates from Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50>
        <div className=container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6>News</h1>
          <p className=text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Page;

import { 
  Newspaper;
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Zap
} from 'lucide-react
import UltraAdvancedFuturisticBackground from ../components/ui/UltraAdvancedFuturisticBackground';
import React from 'react,
import Head from next / head',
import { motion } from 'framer-motion,
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

const NewsPage: React.FC = () => {
  const news_articles = [;
    {
      title: Zion Tech Group Launches Revolutionary AI Consciousness Platform'
      excerpt: 'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.
      author: Press Team'
      date: '2025-01-15
      author: Zion Tech Group'
      readTime: '5 min read
      featured: true
      image: /images/news/ai-consciousness-breakthrough.jpg'
      tags: ['AI ConsciousnessBreakthroughResearchInnovation]
    }
    {
      id: 2
      title: Series C Funding Round: Zion Tech Group Raises $250M for Global Expansion'
      excerpt: 'Major investment round led by leading venture capital firms to accelerate AI consciousness platform development and international market expansion.
      category: company'
      date: '2025-01-10
      author: Zion Tech Group'
      readTime: '3 min read
      featured: true
      image: /images/news/series-c-funding.jpg'
      tags: ['FundingInvestmentGrowthExpansion]
    }
    {
      id: 3
      title: Quantum-Secure Cloud Infrastructure Launches in Partnership with Microsoft Azure'
      excerpt: 'World\s first quantum-secure cloud platform provides unbreakable encryption for enterprise customers, setting new security standards.
      category: 'partnerships'
      date: 2025-01-05
      author: 'Zion Tech Group'
      readTime: 4 min read
      featured: true
      image: '/images/news/quantum-azure-partnership.jpg'
      tags: [Quantum ComputingMicrosoft AzureSecurityPartnership]
    }
  ]


    {



import React from 'react';
import Head from next/head;
import { motion } from 'framer-motion';
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
  Zap;
} from lucide-react,
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
  const newsArticles = [;
    {
      title: Zion Tech Group Launches Revolutionary AI Consciousness Platform;
      excerpt: 'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.';
      author: Press Team;
      date: '2025-01-15';
      author: Zion Tech Group,
      readTime: '5 min read',
      featured: true,
      image: /images/news/ai-consciousness-breakthrough.jpg,
      tags: ['AI ConsciousnessBreakthroughResearchInnovation'];
    },
    {
      id: 2,
      title: Series C Funding Round: Zion Tech Group Raises $250M for Global Expansion,
      excerpt: 'Major investment round led by leading venture capital firms to accelerate AI consciousness platform development and international market expansion.',
      category: company,
      date: '2025-01-10',
      author: Zion Tech Group,
      readTime: '3 min read',
      featured: true,
      image: /images/news/series-c-funding.jpg,
      tags: ['FundingInvestmentGrowthExpansion'];
    },
    {
      id: 3,
      title: Quantum-Secure Cloud Infrastructure Launches in Partnership with Microsoft Azure,
      excerpt: 'World\'s first quantum-secure cloud platform provides unbreakable encryption for enterprise customers, setting new security standards.,
      category: partnerships',
      date: '2025-01-05,
      author: Zion Tech Group',
      readTime: '4 min read,
      featured: true,
      image: /images/news/quantum-azure-partnership.jpg',
      tags: ['Quantum ComputingMicrosoft AzureSecurityPartnership];
      } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
  ],
  const latestNews = [
    {
      id: 4
      title: AI Customer Success Platform Achieves 99.9% Customer Retention Rate'
      excerpt: 'Revolutionary AI-powered customer success solution demonstrates exceptional results in preventing churn and improving customer satisfaction.
      category: product'
      date: '2025-01-12
      author: Sarah Chen'
      readTime: '4 min read
      featured: false
      image: /images/news/ai-customer-success.jpg'
      tags: ['AICustomer SuccessRetentionPlatform]
    }
    {
      id: 5
      title: Zion Tech Group Named to Forbes AI 50 List for Second Consecutive Year'
      excerpt: 'Recognition as one of the world\s most innovative AI companies highlights our leadership in artificial intelligence and quantum computing.
      category: 'company'
      date: 2025-01-08
      author: 'Zion Tech Group'
      readTime: 2 min read
      featured: false
      image: '/images/news/forbes-ai-50.jpg'
      tags: [RecognitionForbesAI LeadershipInnovation]
    }
    {
      tags: ['Quantum ComputingDrug DiscoveryResearchHealthcare']
    }
    {
      id: 7
      title: Strategic Partnership with Deloitte for Enterprise AI Implementation
      excerpt: 'Collaboration to deliver AI consciousness solutions to Fortune 500 companies, accelerating digital transformation initiatives.'
      category: partnerships
      date: '2024-12-28'
      author: Zion Tech Group
      readTime: '3 min read'
      featured: false
      image: /images/news/deloitte-partnership.jpg
      tags: ['PartnershipDeloitteEnterpriseAI Implementation']
    }
    {
      id: 8
      title: AI Autonomous Business Operations Platform Beta Launch
      excerpt: 'Revolutionary platform enables fully autonomous business management with AI-driven decision making and process optimization.'
      category: product
      date: '2024-12-20'
      author: Zion Tech Group
      readTime: '6 min read'
      featured: false
      image: /images/news/ai-autonomous-business.jpg
      tags: ['AIAutonomous OperationsBusinessPlatform']
    }
    {
      id: 9
      title: Zion Tech Group Expands to European Markets
      excerpt: 'Strategic expansion into European Union markets with new offices in London, Berlin, and Paris to serve growing demand.'
      category: company
      date: '2024-12-15'
      author: Zion Tech Group
      readTime: '3 min read'
      featured: false
      image: /images/news/european-expansion.jpg
      tags: ['ExpansionEuropeInternationalGrowth']
      day: numeric
    })
  }
import SEO from ../components/SEO;
export default function NewsPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen>
        <Head>
          <title>News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>
          <meta name=description" content="Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies. />
        </Head>
        <section className=relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center>
            <motion.h1 
              className=text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
import Head from next/head';
import { motion } from 'framer-motion;
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
 } from lucide-react';
const NewsPage: React.FC;
origin/cursor/automate-test-improve-and-merge-code-2533
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
        {/* Hero Section */  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8>
          <div className=max-w-7xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
              className=text-center"
            >
<h1 className="text-4xl md:text-6xl font-bold mb-6>News & Updates</h1>
              <p className=text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Stay informed about our latest developments, product launches, and industry insights.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b>
          <div className=max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-4>
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </section>

{/* Featured Article */}
        {featuredArticle && (
          <section className="py-16 bg-white>
            <div className=max-w-7xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12
              >
                <div className=flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-blue-600 />
                  <span className=text-blue-600 font-medium">{featuredArticle.category}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4>{featuredArticle.title}</h2>
                <p className=text-lg text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6>
                  <div className=flex items-center gap-2">
                    <User className="w-4 h-4 />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className=flex items-center gap-2">
                    <Calendar className="w-4 h-4 />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <Link
                  href={`/news/${featuredArticle.id}`}
                  className=inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 />
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section className=py-16">
          <div className="max-w-7xl mx-auto px-4>
            <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden
                >
                  <div className=h-48 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-gray-400>Image Placeholder</span>
                  </div>
                  <div className=p-6">
                    <div className="flex items-center gap-2 mb-3>
                      <Tag className=w-4 h-4 text-blue-600" />
                      <span className="text-blue-600 text-sm font-medium>{article.category}</span>
                    </div>
                    <h3 className=text-xl font-semibold mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4>{article.excerpt}</p>
                    <div className=flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1>
                        <User className=w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1>
                        <Calendar className=w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between>
                      <span className=text-sm text-gray-500">{article.readTime}</span>
                      <Link
                        href={`/news/${article.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium
                      >
                        Read More
                        <ArrowRight className=ml-1 w-4 h-4" />
                      </Link>
origin/cursor/automate-test-improve-and-merge-code-2533
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

{/* CTA Section */}
        <section className="py-20 bg-blue-600>
          <div className=max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
origin/cursor/automate-test-improve-and-merge-code-2533
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6>
                Stay Updated
              </h2>
              <p className=text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get the latest news and updates delivered to your inbox.
              </p>
              <div className="flex flex-wrap justify-center gap-4>
                <Link
                  href=/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold
                >
                  Subscribe Now
                  <ArrowRight className=ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/about
                  className=inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
origin/cursor/automate-test-improve-and-merge-code-2533
                please contact our communications team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <a
                  href=/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105
                >
                  Contact Media Team
                  <Mic className=ml-2 w-5 h-5" />
                <a
                  href="/press
                  className=inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Press Kit
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>


</>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
