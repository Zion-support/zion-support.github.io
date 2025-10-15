import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ExternalLink, 
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  Clock,
  Filter,
  Search,
  Eye,
  Code,
  Smartphone,
  Globe
} from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 24 },
    { id: 'ai', name: 'AI Solutions', count: 8 },
    { id: 'web', name: 'Web Development', count: 10 },
    { id: 'mobile', name: 'Mobile Apps', count: 4 },
    { id: 'enterprise', name: 'Enterprise', count: 2 }
  ];

  const projects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      description: "Complete e-commerce solution with AI-driven product recommendations, inventory management, and customer analytics.",
      image: "/api/placeholder/600/400",
      category: "ai",
      technologies: ["React", "Node.js", "TensorFlow", "MongoDB"],
      client: "TechRetail Inc.",
      duration: "6 months",
      results: "40% increase in sales, 60% reduction in cart abandonment",
      featured: true,
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-studies/ecommerce-ai"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform with patient management, appointment scheduling, and telemedicine capabilities.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
      client: "MediCare Plus",
      duration: "8 months",
      results: "50% improvement in patient satisfaction, 30% reduction in admin time",
      featured: true,
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-studies/healthcare-system"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      image: "/api/placeholder/600/400",
      category: "mobile",
      technologies: ["React Native", "Node.js", "Blockchain", "AWS"],
      client: "SecureBank",
      duration: "4 months",
      results: "99.9% uptime, 200% increase in mobile transactions",
      featured: false,
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-studies/mobile-banking"
    },
    {
      id: 4,
      title: "AI Content Generation Platform",
      description: "SaaS platform for automated content creation with natural language processing and SEO optimization.",
      image: "/api/placeholder/600/400",
      category: "ai",
      technologies: ["Vue.js", "Python", "OpenAI API", "Redis"],
      client: "ContentPro",
      duration: "5 months",
      results: "80% reduction in content creation time, 90% client satisfaction",
      featured: false,
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-studies/content-ai"
    },
    {
      id: 5,
      title: "Enterprise Resource Planning System",
      description: "Comprehensive ERP solution for manufacturing companies with inventory, production, and financial modules.",
      image: "/api/placeholder/600/400",
      category: "enterprise",
      technologies: ["Angular", "Java", "Oracle", "Docker"],
      client: "ManufacturingCorp",
      duration: "12 months",
      results: "25% cost reduction, 40% improvement in efficiency",
      featured: true,
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-studies/erp-system"
    },
    {
      id: 6,
      title: "Real Estate Management Platform",
      description: "Property management system with virtual tours, tenant portal, and automated rent collection.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["React", "Express", "MongoDB", "Stripe"],
      client: "PropertyMax",
      duration: "7 months",
      results: "35% increase in property occupancy, 50% reduction in management overhead",
      featured: false,
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-studies/real-estate"
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "99.9%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechRetail Inc.",
      content: "Zion Tech Group transformed our business with their AI-powered e-commerce platform. The results exceeded our expectations.",
      rating: 5,
      project: "AI-Powered E-commerce Platform"
    },
    {
      name: "Michael Chen",
      role: "CTO, MediCare Plus",
      content: "The healthcare management system they built has revolutionized our patient care and operational efficiency.",
      rating: 5,
      project: "Healthcare Management System"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, ContentPro",
      content: "Their AI content generation platform has been a game-changer for our business. Highly recommended!",
      rating: 5,
      project: "AI Content Generation Platform"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Portfolio - Zion Tech Group | Our Work & Success Stories</title>
        <meta name="description" content="Explore our portfolio of successful projects including AI solutions, web development, mobile apps, and enterprise systems. See how we've helped businesses transform with technology." />
        <meta name="keywords" content="portfolio, projects, case studies, AI solutions, web development, mobile apps, enterprise software" />
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
                Discover our successful projects and see how we've helped businesses transform
                with cutting-edge technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                  }`}
                >
                  {category.name} ({category.count})
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
                <div key={project.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:border-cyan-500/40 hover:scale-105 group">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex space-x-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
                        >
                          <Eye className="w-5 h-5" />
                        </a>
                        <a
                          href={project.caseStudyUrl}
                          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category.toUpperCase()}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {project.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Client:</h4>
                      <p className="text-gray-300 text-sm">{project.client}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2 text-sm">Results:</h4>
                      <p className="text-green-400 text-sm font-medium">{project.results}</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
                      >
                        View Live
                      </a>
                      <a
                        href={project.caseStudyUrl}
                        className="flex-1 border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center"
                      >
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-white/20 pt-4">
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs mt-1">Project: {testimonial.project}</p>
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
                Let's discuss how we can help bring your vision to life with our expertise and proven track record.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
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