import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Download, 
  ExternalLink, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Play,
  Code,
  Database,
  Shield,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';

const ComprehensiveResourcesShowcase: React.FC = () => {
  const resourceCategories = [
    {
      id: 'implementation-guides',
      title: 'Implementation Guides',
      description: 'Step-by-step guides to implement AI solutions in your organization',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      resources: [
        {
          id: 'ai-implementation-master-guide',
          title: 'Complete AI Implementation Master Guide 2025',
          description: 'Comprehensive 200-page guide covering everything from AI strategy to deployment and maintenance.',
          type: 'PDF Guide',
          pages: 200,
          downloads: '25,000+',
          rating: 4.9,
          difficulty: 'Beginner to Advanced',
          lastUpdated: '2025-01-15',
          featured: true
        },
        {
          id: 'quantum-ai-implementation',
          title: 'Quantum-AI Implementation Handbook',
          description: 'Advanced guide for implementing quantum-AI fusion solutions in enterprise environments.',
          type: 'PDF Guide',
          pages: 150,
          downloads: '8,500+',
          rating: 4.8,
          difficulty: 'Advanced',
          lastUpdated: '2025-01-10',
          featured: true
        },
        {
          id: 'ai-ethics-framework',
          title: 'AI Ethics Implementation Framework',
          description: 'Practical framework for implementing ethical AI practices in your organization.',
          type: 'PDF Guide',
          pages: 80,
          downloads: '15,200+',
          rating: 4.7,
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-08',
          featured: false
        }
      ]
    },
    {
      id: 'video-tutorials',
      title: 'Video Tutorials',
      description: 'Comprehensive video courses and tutorials for all skill levels',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      resources: [
        {
          id: 'ai-fundamentals-course',
          title: 'AI Fundamentals: Complete Course',
          description: '50+ video lessons covering AI fundamentals, machine learning, and deep learning.',
          type: 'Video Course',
          duration: '12 hours',
          students: '45,000+',
          rating: 4.9,
          difficulty: 'Beginner',
          lastUpdated: '2025-01-12',
          featured: true
        },
        {
          id: 'quantum-ai-workshop',
          title: 'Quantum AI Workshop Series',
          description: 'Hands-on workshop series on quantum computing and AI integration.',
          type: 'Video Workshop',
          duration: '8 hours',
          students: '12,000+',
          rating: 4.8,
          difficulty: 'Advanced',
          lastUpdated: '2025-01-05',
          featured: true
        },
        {
          id: 'ai-deployment-masterclass',
          title: 'AI Deployment Masterclass',
          description: 'Advanced techniques for deploying AI models in production environments.',
          type: 'Video Masterclass',
          duration: '6 hours',
          students: '18,500+',
          rating: 4.7,
          difficulty: 'Expert',
          lastUpdated: '2025-01-03',
          featured: false
        }
      ]
    },
    {
      id: 'code-templates',
      title: 'Code Templates & Libraries',
      description: 'Ready-to-use code templates, libraries, and frameworks',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      resources: [
        {
          id: 'ai-model-templates',
          title: 'AI Model Templates Collection',
          description: '100+ pre-built AI model templates for common use cases and industries.',
          type: 'Code Library',
          files: 100,
          downloads: '35,000+',
          rating: 4.8,
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-14',
          featured: true
        },
        {
          id: 'quantum-ai-sdk',
          title: 'Quantum-AI SDK',
          description: 'Complete SDK for building quantum-AI applications with Python and JavaScript.',
          type: 'SDK',
          files: 50,
          downloads: '12,500+',
          rating: 4.9,
          difficulty: 'Advanced',
          lastUpdated: '2025-01-11',
          featured: true
        },
        {
          id: 'ai-deployment-tools',
          title: 'AI Deployment Tools Suite',
          description: 'Comprehensive toolkit for deploying, monitoring, and managing AI models.',
          type: 'Tool Suite',
          files: 25,
          downloads: '22,000+',
          rating: 4.7,
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-09',
          featured: false
        }
      ]
    },
    {
      id: 'datasets',
      title: 'Datasets & Training Data',
      description: 'High-quality datasets for training and testing AI models',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      resources: [
        {
          id: 'multimodal-dataset',
          title: 'Multimodal AI Dataset Collection',
          description: 'Comprehensive collection of text, image, audio, and video datasets for multimodal AI training.',
          type: 'Dataset Collection',
          size: '2.5TB',
          downloads: '8,200+',
          rating: 4.9,
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-13',
          featured: true
        },
        {
          id: 'quantum-optimization-data',
          title: 'Quantum Optimization Datasets',
          description: 'Specialized datasets for quantum optimization and machine learning applications.',
          type: 'Dataset',
          size: '500GB',
          downloads: '3,100+',
          rating: 4.8,
          difficulty: 'Advanced',
          lastUpdated: '2025-01-07',
          featured: true
        },
        {
          id: 'industry-specific-data',
          title: 'Industry-Specific AI Datasets',
          description: 'Curated datasets for healthcare, finance, manufacturing, and other industries.',
          type: 'Dataset Collection',
          size: '1.8TB',
          downloads: '15,600+',
          rating: 4.7,
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-06',
          featured: false
        }
      ]
    },
    {
      id: 'security-tools',
      title: 'Security & Compliance',
      description: 'Tools and frameworks for AI security and regulatory compliance',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      resources: [
        {
          id: 'ai-security-framework',
          title: 'AI Security Framework',
          description: 'Comprehensive framework for securing AI systems and protecting against adversarial attacks.',
          type: 'Security Framework',
          files: 30,
          downloads: '18,000+',
          rating: 4.8,
          difficulty: 'Advanced',
          lastUpdated: '2025-01-12',
          featured: true
        },
        {
          id: 'ai-compliance-toolkit',
          title: 'AI Compliance Toolkit',
          description: 'Complete toolkit for ensuring AI systems meet regulatory requirements and standards.',
          type: 'Compliance Toolkit',
          files: 40,
          downloads: '12,500+',
          rating: 4.7,
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-09',
          featured: true
        },
        {
          id: 'privacy-preservation-guide',
          title: 'Privacy-Preserving AI Guide',
          description: 'Guide to implementing privacy-preserving techniques in AI systems.',
          type: 'Guide',
          files: 20,
          downloads: '9,800+',
          rating: 4.6,
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-05',
          featured: false
        }
      ]
    },
    {
      id: 'performance-tools',
      title: 'Performance & Optimization',
      description: 'Tools and techniques for optimizing AI model performance',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      resources: [
        {
          id: 'ai-optimization-suite',
          title: 'AI Model Optimization Suite',
          description: 'Complete suite of tools for optimizing AI model performance, speed, and efficiency.',
          type: 'Optimization Suite',
          files: 35,
          downloads: '28,000+',
          rating: 4.9,
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-14',
          featured: true
        },
        {
          id: 'edge-ai-optimization',
          title: 'Edge AI Optimization Toolkit',
          description: 'Specialized tools for optimizing AI models for edge devices and mobile platforms.',
          type: 'Optimization Toolkit',
          files: 25,
          downloads: '16,500+',
          rating: 4.8,
          difficulty: 'Advanced',
          lastUpdated: '2025-01-11',
          featured: true
        },
        {
          id: 'quantum-ai-benchmarks',
          title: 'Quantum-AI Performance Benchmarks',
          description: 'Comprehensive benchmarks and performance metrics for quantum-AI systems.',
          type: 'Benchmark Suite',
          files: 15,
          downloads: '7,200+',
          rating: 4.7,
          difficulty: 'Expert',
          lastUpdated: '2025-01-08',
          featured: false
        }
      ]
    }
  ];

  const stats = [
    { label: 'Total Resources', value: '500+', icon: FileText },
    { label: 'Active Users', value: '150K+', icon: Users },
    { label: 'Downloads', value: '2.5M+', icon: Download },
    { label: 'Average Rating', value: '4.8★', icon: Star }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-medium mb-4">
            <FileText className="w-4 h-4 mr-2" />
            Comprehensive Resources
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Master AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our comprehensive library of guides, tutorials, code templates, datasets, and tools to accelerate your AI journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Resource Categories */}
        <div className="space-y-16">
          {resourceCategories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource) => (
                  <div key={resource.id} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group ${resource.featured ? 'ring-2 ring-purple-500/50' : ''}`}>
                    {resource.featured && (
                      <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-medium rounded-full mb-4">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full">
                        {resource.type}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{resource.rating}</span>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {resource.title}
                    </h4>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="space-y-2 mb-4 text-sm text-gray-400">
                      <div className="flex items-center justify-between">
                        <span>Downloads:</span>
                        <span className="text-white font-medium">{resource.downloads}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Difficulty:</span>
                        <span className="text-white font-medium">{resource.difficulty}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Last Updated:</span>
                        <span className="text-white font-medium">{resource.lastUpdated}</span>
                      </div>
                      {resource.pages && (
                        <div className="flex items-center justify-between">
                          <span>Pages:</span>
                          <span className="text-white font-medium">{resource.pages}</span>
                        </div>
                      )}
                      {resource.duration && (
                        <div className="flex items-center justify-between">
                          <span>Duration:</span>
                          <span className="text-white font-medium">{resource.duration}</span>
                        </div>
                      )}
                      {resource.files && (
                        <div className="flex items-center justify-between">
                          <span>Files:</span>
                          <span className="text-white font-medium">{resource.files}</span>
                        </div>
                      )}
                      {resource.size && (
                        <div className="flex items-center justify-between">
                          <span>Size:</span>
                          <span className="text-white font-medium">{resource.size}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Link
                        to={`/resources/${resource.id}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition-all hover:scale-105"
                      >
                        {resource.type.includes('Video') ? (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Watch
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </>
                        )}
                      </Link>
                      <Link
                        to={`/resources/${resource.id}/preview`}
                        className="px-4 py-2 bg-white/10 text-white font-medium rounded-lg border border-white/20 transition-all hover:bg-white/20"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link
                  to={`/resources/${category.id}`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group"
                >
                  View All {category.title}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Access Our Complete Resource Library?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community and get unlimited access to all resources, plus exclusive content and early access to new releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              Browse All Resources
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:bg-white/20 border border-white/20"
            >
              Get Custom Recommendations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveResourcesShowcase;