import React from 'react';
import Head from 'next/head';
import { 
  FileText, 
  Download, 
  Calendar, 
  Users, 
  Eye, 
  Star,
  Brain,
  Shield,
  Cpu,
  Zap,
  Cloud,
  Database,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: A Comprehensive Guide to Implementation",
      description: "This comprehensive white paper explores the current state of AI adoption in enterprise environments, providing practical insights and implementation strategies for organizations looking to leverage artificial intelligence.",
      author: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      date: "December 2024",
      category: "AI & Machine Learning",
      downloads: 2847,
      rating: 4.9,
      pages: 45,
      topics: ["AI Strategy", "Implementation Roadmap", "ROI Analysis", "Risk Management"],
      image: "/images/white-papers/ai-enterprise.jpg",
      downloadUrl: "#",
      previewUrl: "#",
      isFeatured: true
    },
    {
      id: 2,
      title: "Quantum Computing: From Theory to Business Reality",
      description: "An in-depth analysis of quantum computing's potential impact on various industries, including finance, healthcare, and logistics, with practical applications and business case studies.",
      author: "Dr. Michael Rodriguez",
      role: "Quantum Research Lead",
      date: "November 2024",
      category: "Quantum Technology",
      downloads: 1893,
      rating: 4.8,
      pages: 38,
      topics: ["Quantum Supremacy", "Business Applications", "Implementation Challenges", "Future Outlook"],
      image: "/images/white-papers/quantum-computing.jpg",
      downloadUrl: "#",
      previewUrl: "#",
      isFeatured: true
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: Threats, Defenses, and Future Trends",
      description: "Explore the evolving landscape of cybersecurity threats and how AI is being used both by attackers and defenders, with practical recommendations for organizations.",
      author: "Alex Johnson",
      role: "Chief Security Officer",
      date: "October 2024",
      category: "Cybersecurity",
      downloads: 3241,
      rating: 4.7,
      pages: 52,
      topics: ["AI Threats", "Defense Strategies", "Threat Intelligence", "Incident Response"],
      image: "/images/white-papers/ai-cybersecurity.jpg",
      downloadUrl: "#",
      previewUrl: "#",
      isFeatured: false
    },
    {
      id: 4,
      title: "Digital Transformation: A Strategic Framework for Success",
      description: "A comprehensive guide to digital transformation, covering strategy development, change management, technology selection, and measuring success.",
      author: "Lisa Thompson",
      role: "Digital Strategy Director",
      date: "September 2024",
      category: "Digital Transformation",
      downloads: 2156,
      rating: 4.6,
      pages: 41,
      topics: ["Strategy Development", "Change Management", "Technology Selection", "Success Metrics"],
      image: "/images/white-papers/digital-transformation.jpg",
      downloadUrl: "#",
      previewUrl: "#",
      isFeatured: false
    },
    {
      id: 5,
      title: "Cloud-Native Architecture: Building Scalable and Resilient Systems",
      description: "Learn how to design and implement cloud-native architectures that can scale automatically, handle failures gracefully, and provide optimal performance.",
      author: "David Kim",
      role: "Cloud Architect",
      date: "August 2024",
      category: "Cloud & DevOps",
      downloads: 1876,
      rating: 4.8,
      pages: 36,
      topics: ["Microservices", "Containerization", "Auto-scaling", "Resilience Patterns"],
      image: "/images/white-papers/cloud-native.jpg",
      downloadUrl: "#",
      previewUrl: "#",
      isFeatured: false
    },
    {
      id: 6,
      title: "Green IT: Sustainable Technology Solutions for the Modern Enterprise",
      description: "Discover how organizations can reduce their environmental impact while improving IT efficiency and performance through sustainable technology practices.",
      author: "Emma Wilson",
      role: "Sustainability Specialist",
      date: "July 2024",
      category: "Green IT",
      downloads: 1432,
      rating: 4.9,
      pages: 29,
      topics: ["Energy Efficiency", "Sustainable Procurement", "Waste Reduction", "Carbon Footprint"],
      image: "/images/white-papers/green-it.jpg",
      downloadUrl: "#",
      previewUrl: "#",
      isFeatured: false
    }
  ];

  const categories = [
    { name: "All", count: 6, active: true },
    { name: "AI & Machine Learning", count: 1, active: false },
    { name: "Quantum Technology", count: 1, active: false },
    { name: "Cybersecurity", count: 1, active: false },
    { name: "Digital Transformation", count: 1, active: false },
    { name: "Cloud & DevOps", count: 1, active: false },
    { name: "Green IT", count: 1, active: false }
  ];

  const featuredPapers = whitePapers.filter(paper => paper.isFeatured);

  return (
    <>
      <Head>
        <title>White Papers & Research | Zion Tech Group</title>
        <meta name="description" content="Access our comprehensive white papers on AI, quantum computing, cybersecurity, digital transformation, and more. Expert insights and practical guidance for technology leaders." />
        <meta name="keywords" content="white papers, research, AI, quantum computing, cybersecurity, digital transformation, technology insights, enterprise technology" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="White Papers & Research | Zion Tech Group" />
        <meta property="og:description" content="Access our comprehensive white papers on AI, quantum computing, cybersecurity, digital transformation, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/white-papers" />
        <link rel="canonical" href="https://ziontechgroup.com/white-papers" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              White Papers & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Research</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access in-depth research, expert insights, and practical guidance on cutting-edge technology topics. 
              Download our comprehensive white papers to stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download All Papers</span>
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Browse by Category</span>
              </button>
            </div>
          </div>
        </section>

        {/* Featured White Papers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Featured White Papers</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPapers.map((paper) => (
                <div key={paper.id} className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/30 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full">
                        {paper.category}
                      </span>
                      <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 text-xs font-medium rounded-full flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Featured</span>
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-300 text-base mb-6 line-clamp-3">
                      {paper.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{paper.author}, {paper.role}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{paper.date} • {paper.pages} pages</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Download className="h-4 w-4" />
                        <span>{paper.downloads.toLocaleString()} downloads</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{paper.rating} rating</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-white mb-2">Key Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {paper.topics.map((topic, index) => (
                          <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Download PDF</span>
                      </button>
                      <button className="px-4 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    category.active
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All White Papers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">All White Papers</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <span>Sort by:</span>
                  <button className="flex items-center space-x-1 px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200">
                    <span>Date</span>
                    <SortDesc className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitePapers.map((paper) => (
                <div key={paper.id} className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full">
                        {paper.category}
                      </span>
                      {paper.isFeatured && (
                        <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 text-xs font-medium rounded-full flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-current" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {paper.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{paper.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{paper.date} • {paper.pages} pages</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Download className="h-4 w-4" />
                        <span>{paper.downloads.toLocaleString()} downloads</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-600/30 transition-all duration-200 flex items-center justify-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                      <button className="px-3 py-2 bg-gray-600/20 text-gray-400 text-sm font-medium rounded-lg hover:bg-gray-600/30 transition-all duration-200">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated with Latest Research</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and get notified about new white papers, research insights, and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Custom Research?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our research team can conduct custom studies and create white papers tailored to your specific industry and technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                Request Custom Research
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}