import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  Star, 
  Sparkles,
  Brain,
  Cloud,
  Wifi,
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      description: 'Revolutionary e-commerce platform with AI-driven personalization and recommendation engine',
      category: 'AI Services',
      client: 'TechCorp Inc.',
      duration: '6 months',
      technologies: ['React', 'Node.js', 'TensorFlow', 'AWS'],
      results: [
        '300% increase in conversion rates',
        '50% reduction in cart abandonment',
        '40% improvement in customer satisfaction'
      ],
      image: '/api/placeholder/600/400',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Cloud Migration for Healthcare',
      description: 'Complete cloud migration of healthcare data management system with enhanced security',
      category: 'IT Services',
      client: 'HealthFirst Medical',
      duration: '4 months',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
      results: [
        '99.9% uptime achieved',
        '60% reduction in operational costs',
        '100% compliance with HIPAA standards'
      ],
      image: '/api/placeholder/600/400',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: '5G Smart City Infrastructure',
      description: 'Comprehensive 5G network implementation for smart city traffic management system',
      category: '5G Solutions',
      client: 'MetroCity Government',
      duration: '8 months',
      technologies: ['5G NR', 'Edge Computing', 'IoT', 'Machine Learning'],
      results: [
        '40% reduction in traffic congestion',
        'Real-time traffic monitoring',
        'Improved emergency response times'
      ],
      image: '/api/placeholder/600/400',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 4,
      title: 'Cybersecurity Framework',
      description: 'Enterprise-wide cybersecurity implementation with threat detection and response system',
      category: 'Cybersecurity',
      client: 'FinanceSecure Bank',
      duration: '3 months',
      technologies: ['SIEM', 'Machine Learning', 'Blockchain', 'Zero Trust'],
      results: [
        '95% reduction in security incidents',
        'Real-time threat detection',
        'Full compliance with financial regulations'
      ],
      image: '/api/placeholder/600/400',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 5,
      title: 'AI Analytics Dashboard',
      description: 'Advanced business intelligence platform with predictive analytics and real-time insights',
      category: 'AI Services',
      client: 'DataDriven Corp',
      duration: '5 months',
      technologies: ['React', 'Python', 'TensorFlow', 'MongoDB'],
      results: [
        '200% faster decision making',
        '80% reduction in manual reporting',
        '45% improvement in forecast accuracy'
      ],
      image: '/api/placeholder/600/400',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 6,
      title: 'Micro SAAS Platform',
      description: 'Multi-tenant micro SAAS platform for project management with AI-powered features',
      category: 'Micro SAAS',
      client: 'StartupHub',
      duration: '4 months',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      results: [
        '500+ active users',
        '99.9% uptime',
        'Scalable architecture'
      ],
      image: '/api/placeholder/600/400',
      icon: <Users className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: <Award className="w-6 h-6" /> },
    { label: 'Happy Clients', value: '200+', icon: <Users className="w-6 h-6" /> },
    { label: 'Success Rate', value: '99%', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Years Experience', value: '10+', icon: <Star className="w-6 h-6" /> }
  ];

  const categories = ['All', 'AI Services', 'IT Services', '5G Solutions', 'Cybersecurity', 'Micro SAAS'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Our Work Portfolio
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Discover our successful projects and see how we've helped businesses transform with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-400">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful projects across different industries and technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-6 hover:border-cyan-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}>
                      <div className="text-white">{project.icon}</div>
                    </div>
                    <div className="text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Client:</span>
                      <span className="text-white">{project.client}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{project.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-400 mb-2">Key Results:</div>
                    <div className="space-y-1">
                      {project.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group/btn shadow-lg hover:shadow-cyan-500/25 text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-12 border border-cyan-500/20 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Start Your Project?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help transform your business with our cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Start Your Project
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;