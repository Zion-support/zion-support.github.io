import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  ExternalLink, 
  Newspaper, 
  Award, 
  Users, 
  Globe,
  TrendingUp,
  Star,
  Quote
} from 'lucide-react';

export default function Press() {
  const pressReleases = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Neural Interface Technology",
      date: "2024-01-15",
      summary: "Breakthrough brain-computer interface technology enables thought-to-text conversion with 95% accuracy",
      category: "Product Launch",
      featured: true
    },
    {
      id: 2,
      title: "Company Secures $50M Series B Funding for AI Innovation",
      date: "2024-01-10",
      summary: "Investment will accelerate development of next-generation AI solutions and expand global operations",
      category: "Funding",
      featured: false
    },
    {
      id: 3,
      title: "Zion Tech Group Partners with Leading Healthcare Providers",
      date: "2024-01-05",
      summary: "Strategic partnership to implement AI-powered diagnostic tools across major healthcare networks",
      category: "Partnership",
      featured: false
    },
    {
      id: 4,
      title: "Company Recognized as Top AI Innovation Leader 2024",
      date: "2023-12-20",
      summary: "Industry recognition for groundbreaking contributions to artificial intelligence and machine learning",
      category: "Award",
      featured: false
    }
  ];

  const mediaCoverage = [
    {
      id: 1,
      title: "The Future of Brain-Computer Interfaces",
      publication: "TechCrunch",
      date: "2024-01-12",
      url: "#",
      excerpt: "Zion Tech Group's neural interface technology represents a quantum leap in human-computer interaction...",
      category: "Technology"
    },
    {
      id: 2,
      title: "AI Revolution: How Zion Tech is Transforming Industries",
      publication: "Forbes",
      date: "2024-01-08",
      url: "#",
      excerpt: "From healthcare to manufacturing, Zion Tech Group's AI solutions are driving unprecedented efficiency gains...",
      category: "Business"
    },
    {
      id: 3,
      title: "The Ethics of Neural Interface Technology",
      publication: "Wired",
      date: "2024-01-03",
      url: "#",
      excerpt: "As brain-computer interfaces become reality, questions about privacy and consent take center stage...",
      category: "Ethics"
    },
    {
      id: 4,
      title: "Startup Spotlight: Zion Tech Group's Journey to AI Leadership",
      publication: "VentureBeat",
      date: "2023-12-28",
      url: "#",
      excerpt: "How a small team of innovators built one of the most promising AI companies in the market...",
      category: "Startup"
    }
  ];

  const awards = [
    {
      title: "AI Innovation Leader 2024",
      organization: "AI Industry Awards",
      date: "2024-01-15",
      description: "Recognized for breakthrough contributions to artificial intelligence technology"
    },
    {
      title: "Best AI Startup 2023",
      organization: "TechCrunch Disrupt",
      date: "2023-09-15",
      description: "Awarded for innovative approach to AI solutions and market impact"
    },
    {
      title: "Top 50 AI Companies",
      organization: "Forbes",
      date: "2023-08-20",
      description: "Listed among the most promising AI companies globally"
    },
    {
      title: "Excellence in Neural Technology",
      organization: "IEEE",
      date: "2023-06-10",
      description: "Recognized for advances in brain-computer interface technology"
    }
  ];

  const stats = [
    { number: "50+", label: "Press Mentions", icon: <Newspaper className="w-6 h-6" /> },
    { number: "15+", label: "Awards Won", icon: <Award className="w-6 h-6" /> },
    { number: "25+", label: "Countries Covered", icon: <Globe className="w-6 h-6" /> },
    { number: "95%", label: "Positive Coverage", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Press & Media - Zion Tech Group</title>
        <meta name="description" content="Stay updated with Zion Tech Group's latest news, press releases, media coverage, and industry recognition." />
        <meta name="keywords" content="press, media, news, press releases, awards, coverage, AI technology" />
        <link rel="canonical" href="https://ziontechgroup.com/press" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Newspaper className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Press & Media</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Press & Media
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay updated with our latest news, press releases, media coverage, 
            and industry recognition as we continue to push the boundaries of AI technology.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest Press Releases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed about our latest announcements, product launches, and company milestones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pressReleases.map((release) => (
              <div
                key={release.id}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                  release.featured ? 'border-cyan-500/50 shadow-cyan-500/20' : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {release.featured && (
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 text-sm font-semibold">Featured</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-2 text-sm text-cyan-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(release.date).toLocaleDateString()}</span>
                  <span className="bg-cyan-500/20 px-2 py-1 rounded">{release.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {release.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {release.summary}
                </p>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Media Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what leading publications are saying about our technology and innovations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaCoverage.map((article) => (
              <div
                key={article.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-cyan-400">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <span className="bg-purple-500/20 px-2 py-1 rounded text-xs text-purple-400">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3">
                  <strong>{article.publication}</strong>
                </p>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <a
                  href={article.url}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1"
                >
                  Read Article
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to innovation and excellence has been recognized by industry leaders and organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {award.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-2">
                  {award.organization}
                </p>
                <p className="text-gray-400 text-xs mb-3">
                  {new Date(award.date).toLocaleDateString()}
                </p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Media Resources
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Access our media kit, company logos, executive photos, and other resources for journalists and media professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Download Media Kit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Contact Media Team
              <Users className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}