import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, ExternalLink, TrendingUp, Award, Users, Zap } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Announces $50M Series B Funding Round',
      date: '2024-01-15',
      category: 'Company News',
      summary: 'Leading AI solutions provider secures major investment to accelerate quantum computing research and expand global operations.',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      title: 'Revolutionary AI Model Achieves 99.7% Accuracy in Medical Diagnosis',
      date: '2024-01-10',
      category: 'AI Innovation',
      summary: 'Our latest healthcare AI system demonstrates unprecedented accuracy in early disease detection across multiple medical specialties.',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      title: 'Partnership with Fortune 500 Company Delivers $2.5B in Cost Savings',
      date: '2024-01-08',
      category: 'Client Success',
      summary: 'Enterprise automation solution implemented across 50+ locations results in record-breaking efficiency gains and cost reduction.',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      title: 'Quantum Computing Breakthrough: New Algorithm Reduces Processing Time by 90%',
      date: '2024-01-05',
      category: 'Research',
      summary: 'Our quantum research team develops innovative algorithm that dramatically improves computational efficiency for complex optimization problems.',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      title: 'Zion Tech Group Named "AI Company of the Year" by TechCrunch',
      date: '2024-01-03',
      category: 'Awards',
      summary: 'Industry recognition for our groundbreaking work in autonomous systems and enterprise AI transformation.',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      title: 'New Office Opening in Silicon Valley Expands West Coast Presence',
      date: '2024-01-01',
      category: 'Company News',
      summary: 'Strategic expansion brings our cutting-edge AI solutions closer to major technology partners and clients.',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Next-Generation AI Platform',
      date: '2024-01-20',
      description: 'Revolutionary platform combines quantum computing with machine learning for unprecedented business intelligence capabilities.'
    },
    {
      title: 'Major Healthcare Provider Implements Zion AI Solutions',
      date: '2024-01-18',
      description: 'Leading hospital network adopts our AI-powered diagnostic tools across 200+ facilities nationwide.'
    },
    {
      title: 'Partnership with Leading Cloud Provider Announced',
      date: '2024-01-16',
      description: 'Strategic alliance brings enterprise AI solutions to millions of cloud users worldwide.'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Company News':
        return <Users className="w-4 h-4" />;
      case 'AI Innovation':
        return <Zap className="w-4 h-4" />;
      case 'Client Success':
        return <TrendingUp className="w-4 h-4" />;
      case 'Research':
        return <Award className="w-4 h-4" />;
      case 'Awards':
        return <Award className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Company News':
        return 'bg-blue-100 text-blue-800';
      case 'AI Innovation':
        return 'bg-purple-100 text-purple-800';
      case 'Client Success':
        return 'bg-green-100 text-green-800';
      case 'Research':
        return 'bg-orange-100 text-orange-800';
      case 'Awards':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Helmet>
        <title>News & Press - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, press releases, and announcements from Zion Tech Group. Discover our latest AI innovations and company milestones." />
        <meta name="keywords" content="news, press releases, AI news, technology updates, company announcements" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              News & <span className="text-cyan-400">Press</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed about our latest innovations, company milestones, and industry insights. 
              Discover how we're shaping the future of AI and enterprise technology.
            </p>
          </section>

          {/* Featured Article */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured News</h2>
            {newsArticles.filter(article => article.featured).map((article, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getCategoryColor(article.category)}`}>
                        {getCategoryIcon(article.category)}
                        <span>{article.category}</span>
                      </span>
                      <span className="text-gray-400 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{article.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{article.summary}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium mt-4"
                    >
                      Read More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <div className="bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Featured Image</span>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* News Grid */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getCategoryColor(article.category)}`}>
                      {getCategoryIcon(article.category)}
                      <span>{article.category}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{article.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <a
                      href="#"
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center"
                    >
                      Read More
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Press Releases */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{release.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{release.description}</p>
                      <span className="text-gray-400 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(release.date).toLocaleDateString()}
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center ml-4"
                    >
                      View Release
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Media Kit */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Media Kit</h2>
              <p className="text-gray-300 mb-6">
                Download our media kit for logos, company information, and high-resolution images.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="#"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
                >
                  <h3 className="text-white font-semibold mb-2">Company Logos</h3>
                  <p className="text-gray-300 text-sm">High-res logos in various formats</p>
                </a>
                <a
                  href="#"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
                >
                  <h3 className="text-white font-semibold mb-2">Press Photos</h3>
                  <p className="text-gray-300 text-sm">Executive headshots and team photos</p>
                </a>
                <a
                  href="#"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
                >
                  <h3 className="text-white font-semibold mb-2">Company Fact Sheet</h3>
                  <p className="text-gray-300 text-sm">Key facts and company information</p>
                </a>
              </div>
            </div>
          </section>

          {/* Contact Press */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Press Inquiries</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              For media inquiries, interview requests, or additional information, 
              please contact our press team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:press@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Contact Press Team
              </a>
              <a
                href="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                General Contact
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default NewsPage;