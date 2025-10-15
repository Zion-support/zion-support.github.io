import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, Star, Users, Calendar, ArrowRight, Filter } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      description: "Complete e-commerce solution with AI-driven product recommendations, inventory management, and customer analytics.",
      image: "/api/placeholder/600/400",
      category: "ai-services",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "MongoDB"],
      client: "TechRetail Inc.",
      year: "2024",
      duration: "6 months",
      team: "8 developers",
      rating: 5,
      features: [
        "AI product recommendations",
        "Real-time inventory tracking",
        "Customer behavior analytics",
        "Mobile-responsive design"
      ],
      results: [
        "40% increase in conversion rate",
        "60% reduction in cart abandonment",
        "25% boost in average order value"
      ],
      liveUrl: "https://techretail-demo.com",
      githubUrl: "https://github.com/ziontech/ecommerce-ai"
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Dashboard",
      description: "Advanced analytics platform for healthcare providers with predictive modeling and real-time monitoring.",
      image: "/api/placeholder/600/400",
      category: "ai-services",
      technologies: ["React", "D3.js", "Python", "PostgreSQL", "Docker"],
      client: "MediCare Systems",
      year: "2024",
      duration: "4 months",
      team: "6 developers",
      rating: 5,
      features: [
        "Predictive health analytics",
        "Real-time patient monitoring",
        "HIPAA compliant security",
        "Interactive data visualization"
      ],
      results: [
        "30% improvement in patient outcomes",
        "50% faster diagnosis times",
        "99.9% system uptime"
      ],
      liveUrl: "https://medicare-analytics.com",
      githubUrl: null
    },
    {
      id: 3,
      title: "Cloud Migration & DevOps Setup",
      description: "Complete cloud infrastructure migration with automated CI/CD pipelines and monitoring solutions.",
      image: "/api/placeholder/600/400",
      category: "it-services",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      client: "FinanceFlow Corp",
      year: "2024",
      duration: "3 months",
      team: "5 developers",
      rating: 5,
      features: [
        "Multi-cloud architecture",
        "Automated deployments",
        "Infrastructure as code",
        "24/7 monitoring"
      ],
      results: [
        "70% reduction in deployment time",
        "90% cost savings on infrastructure",
        "Zero downtime migration"
      ],
      liveUrl: "https://financeflow.com",
      githubUrl: "https://github.com/ziontech/cloud-migration"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transaction processing.",
      image: "/api/placeholder/600/400",
      category: "it-services",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
      client: "SecureBank Ltd",
      year: "2023",
      duration: "8 months",
      team: "10 developers",
      rating: 5,
      features: [
        "Biometric authentication",
        "Real-time transactions",
        "Fraud detection",
        "Offline capabilities"
      ],
      results: [
        "1M+ downloads in first month",
        "4.8/5 app store rating",
        "99.99% security record"
      ],
      liveUrl: "https://securebank.app",
      githubUrl: null
    },
    {
      id: 5,
      title: "AI Content Management System",
      description: "Intelligent CMS with AI-powered content generation, SEO optimization, and automated publishing.",
      image: "/api/placeholder/600/400",
      category: "micro-saas",
      technologies: ["Next.js", "OpenAI API", "MongoDB", "Vercel", "Stripe"],
      client: "ContentPro Solutions",
      year: "2024",
      duration: "5 months",
      team: "7 developers",
      rating: 5,
      features: [
        "AI content generation",
        "SEO optimization",
        "Multi-language support",
        "Analytics dashboard"
      ],
      results: [
        "80% reduction in content creation time",
        "150% increase in organic traffic",
        "500+ active users"
      ],
      liveUrl: "https://contentpro-saas.com",
      githubUrl: "https://github.com/ziontech/ai-cms"
    },
    {
      id: 6,
      title: "IoT Fleet Management System",
      description: "Real-time fleet tracking and management system with predictive maintenance and route optimization.",
      image: "/api/placeholder/600/400",
      category: "it-services",
      technologies: ["React", "Node.js", "IoT", "Machine Learning", "AWS IoT"],
      client: "LogiTrack Inc",
      year: "2023",
      duration: "7 months",
      team: "9 developers",
      rating: 5,
      features: [
        "Real-time GPS tracking",
        "Predictive maintenance",
        "Route optimization",
        "Driver behavior analysis"
      ],
      results: [
        "25% reduction in fuel costs",
        "40% improvement in delivery times",
        "60% decrease in maintenance costs"
      ],
      liveUrl: "https://logitrack.com",
      githubUrl: "https://github.com/ziontech/fleet-management"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai-services', name: 'AI Services' },
    { id: 'it-services', name: 'IT Services' },
    { id: 'micro-saas', name: 'Micro SAAS' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5.0", label: "Average Rating" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - Zion Tech Group | Our Work & Success Stories</title>
        <meta name="description" content="Explore our portfolio of successful AI and IT projects. See how we&apos;ve helped businesses transform with cutting-edge technology solutions." />
        <meta name="keywords" content="portfolio, projects, case studies, ai solutions, it services, web development, mobile apps" />
        <meta property="og:title" content="Portfolio - Zion Tech Group" />
        <meta property="og:description" content="Our successful projects and client success stories" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Portfolio</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover our successful projects and see how we&apos;ve helped businesses transform with cutting-edge technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                    activeFilter === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 px-2 py-1 rounded">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-semibold">{project.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">{project.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="text-gray-300 text-xs">• {result}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {project.team}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.duration}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help you achieve similar success with your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;