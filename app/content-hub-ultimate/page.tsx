import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { ArrowRight, BookOpen, Video, FileText, Users, TrendingUp, Brain, Zap, Calendar, Download, ExternalLink } from 'lucide-react';

export default function ContentHubUltimatePage() {
  const contentCategories = [
    {
      title: "AI Implementation Guides",
      description: "Step-by-step guides to implementing AI solutions in your business",
      icon: BookOpen,
      color: "from-cyan-500 to-blue-500",
      items: [
        {
          title: "AI Implementation Mastery Guide 2025-2026",
          description: "Complete roadmap for AI transformation with 2,500-5,000% ROI",
          type: "Guide",
          readTime: "45 min read",
          link: "/ai-implementation-guide-2025"
        },
        {
          title: "Autonomous Operations Setup Guide",
          description: "How to deploy self-optimizing AI systems for maximum efficiency",
          type: "Guide",
          readTime: "30 min read",
          link: "/automation-solutions-2025"
        },
        {
          title: "Quantum Computing Integration Playbook",
          description: "Enterprise guide to quantum-AI fusion and quantum supremacy",
          type: "Guide",
          readTime: "60 min read",
          link: "/quantum-computing-2025"
        }
      ]
    },
    {
      title: "Video Tutorials & Demos",
      description: "Interactive demonstrations and hands-on tutorials",
      icon: Video,
      color: "from-purple-500 to-pink-500",
      items: [
        {
          title: "AI Autonomous Operations Demo",
          description: "Live demonstration of self-optimizing business systems",
          type: "Video",
          readTime: "15 min watch",
          link: "/ai-2025-autonomous-operations-showcase"
        },
        {
          title: "Quantum Computing Showcase",
          description: "See quantum algorithms solving complex optimization problems",
          type: "Video",
          readTime: "20 min watch",
          link: "/quantum-computing-2026-breakthrough"
        },
        {
          title: "Neural Interface Technology Demo",
          description: "Experience direct brain-computer interaction capabilities",
          type: "Video",
          readTime: "25 min watch",
          link: "/neural-interface-revolution-2026"
        }
      ]
    },
    {
      title: "Research & Insights",
      description: "Latest AI research, trends, and industry insights",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      items: [
        {
          title: "AI Future Predictions 2025-2030",
          description: "Comprehensive analysis of AI evolution and breakthrough technologies",
          type: "Research",
          readTime: "40 min read",
          link: "/ai-2025-2030-ultimate-predictions"
        },
        {
          title: "Quantum Supremacy Timeline Analysis",
          description: "When quantum computers will achieve practical quantum advantage",
          type: "Research",
          readTime: "35 min read",
          link: "/quantum-computing-2026-ultimate-breakthrough"
        },
        {
          title: "Neural Interface Market Analysis",
          description: "Market trends and adoption rates for brain-computer interfaces",
          type: "Research",
          readTime: "25 min read",
          link: "/neural-interface-revolution-2030"
        }
      ]
    },
    {
      title: "Case Studies & Success Stories",
      description: "Real-world transformations and measurable results",
      icon: Users,
      color: "from-orange-500 to-red-500",
      items: [
        {
          title: "Manufacturing Transformation Case Study",
          description: "How AI achieved 99.9% operational efficiency and $50M savings",
          type: "Case Study",
          readTime: "20 min read",
          link: "/case-studies-comprehensive"
        },
        {
          title: "Financial Services Quantum Revolution",
          description: "Quantum risk assessment delivering 95% accuracy and 10,000x speed",
          type: "Case Study",
          readTime: "18 min read",
          link: "/case-studies-comprehensive"
        },
        {
          title: "Healthcare Neural Interface Success",
          description: "45% improvement in patient outcomes with neural monitoring",
          type: "Case Study",
          readTime: "22 min read",
          link: "/case-studies-comprehensive"
        }
      ]
    },
    {
      title: "Technical Documentation",
      description: "API docs, technical specifications, and developer resources",
      icon: FileText,
      color: "from-indigo-500 to-purple-500",
      items: [
        {
          title: "AI Services API Documentation",
          description: "Complete API reference for all AI services and endpoints",
          type: "Documentation",
          readTime: "API Reference",
          link: "/api-reference"
        },
        {
          title: "Quantum Algorithm Specifications",
          description: "Technical specifications for quantum computing algorithms",
          type: "Documentation",
          readTime: "Technical Spec",
          link: "/quantum-computing-2025"
        },
        {
          title: "Neural Interface SDK Guide",
          description: "Developer guide for neural interface integration",
          type: "Documentation",
          readTime: "SDK Guide",
          link: "/neural-interface-solutions"
        }
      ]
    },
    {
      title: "Webinars & Events",
      description: "Live sessions, workshops, and industry events",
      icon: Calendar,
      color: "from-teal-500 to-cyan-500",
      items: [
        {
          title: "AI Transformation Masterclass",
          description: "Live workshop on implementing AI for maximum ROI",
          type: "Webinar",
          readTime: "2 hours",
          link: "/ai-mastery-academy-2026"
        },
        {
          title: "Quantum Computing Summit 2025",
          description: "Annual conference on quantum breakthrough technologies",
          type: "Event",
          readTime: "Full Day",
          link: "/quantum-computing-2025"
        },
        {
          title: "Neural Interface Workshop",
          description: "Hands-on workshop on brain-computer interface development",
          type: "Workshop",
          readTime: "4 hours",
          link: "/neural-interface-revolution-2026"
        }
      ]
    }
  ];

  const featuredContent = [
    {
      title: "Ultimate AI Implementation Guide 2025-2026",
      description: "The most comprehensive guide to AI transformation with proven methodologies for 2,500-5,000% ROI",
      category: "Implementation Guide",
      readTime: "45 min read",
      image: "/api/placeholder/400/250",
      link: "/ai-implementation-guide-2025",
      featured: true
    },
    {
      title: "Revolutionary AI Breakthrough Showcase 2025",
      description: "See the latest AI innovations including autonomous operations, quantum computing, and neural interfaces",
      category: "Showcase",
      readTime: "30 min watch",
      image: "/api/placeholder/400/250",
      link: "/ai-2025-revolutionary-breakthrough-showcase",
      featured: true
    },
    {
      title: "Quantum Supremacy Timeline & Predictions",
      description: "When quantum computers will achieve practical advantage and transform industries",
      category: "Research",
      readTime: "35 min read",
      image: "/api/placeholder/400/250",
      link: "/quantum-computing-2026-ultimate-breakthrough",
      featured: true
    }
  ];

  return (
    <>
      <SEO 
        title="Ultimate Content Hub | AI Resources, Guides & Insights | Zion Tech Group"
        description="Comprehensive content hub featuring AI implementation guides, video tutorials, research insights, case studies, and technical documentation. Everything you need for AI transformation."
        keywords="AI content hub, AI guides, AI tutorials, AI research, AI case studies, AI documentation, AI resources"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ultimate Content Hub
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive resources for AI transformation. Guides, tutorials, research, 
                case studies, and technical documentation to accelerate your AI journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/ai-implementation-guide-2025" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start with Implementation Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/ai-services-comprehensive" 
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Content
            </h2>
            <p className="text-xl text-gray-300">
              Start your AI transformation journey with our most popular resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <Brain className="h-16 w-16 text-cyan-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full">
                      {content.category}
                    </span>
                    <span className="ml-auto text-gray-400 text-sm">{content.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{content.title}</h3>
                  <p className="text-gray-300 mb-4">{content.description}</p>
                  <Link 
                    href={content.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
                  >
                    Read More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Content Categories
            </h2>
            <p className="text-xl text-gray-300">
              Explore our comprehensive library of AI resources organized by category
            </p>
          </div>

          <div className="space-y-12">
            {contentCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-cyan-500/20">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full">
                          {item.type}
                        </span>
                        <span className="text-gray-400 text-sm">{item.readTime}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
                      <Link 
                        href={item.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors duration-300"
                      >
                        Access Resource
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access Tools */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quick Access Tools
              </h2>
              <p className="text-xl text-gray-300">
                Essential tools and resources for immediate AI implementation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/ai-implementation-guide-2025" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 text-center group">
                <BookOpen className="h-12 w-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-white mb-2">Implementation Guide</h3>
                <p className="text-gray-300 text-sm">Step-by-step AI transformation roadmap</p>
              </Link>
              
              <Link href="/ai-services-comprehensive" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-400 transition-all duration-300 text-center group">
                <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-white mb-2">Service Catalog</h3>
                <p className="text-gray-300 text-sm">Comprehensive AI services overview</p>
              </Link>
              
              <Link href="/case-studies-comprehensive" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-green-500/20 hover:border-green-400 transition-all duration-300 text-center group">
                <Users className="h-12 w-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-white mb-2">Case Studies</h3>
                <p className="text-gray-300 text-sm">Real-world success stories and ROI</p>
              </Link>
              
              <Link href="/contact" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20 hover:border-orange-400 transition-all duration-300 text-center group">
                <Brain className="h-12 w-12 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-white mb-2">Get Started</h3>
                <p className="text-gray-300 text-sm">Schedule consultation and begin transformation</p>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Access our comprehensive content hub and start your AI transformation journey. 
              Get expert guidance, proven methodologies, and step-by-step implementation guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/ai-implementation-guide-2025" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}