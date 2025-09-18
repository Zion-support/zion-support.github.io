import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Building, 
  Users, 
  TrendingUp, 
  Clock, 
  Target,
  CheckCircle,
  Star,
  Award,
  Globe,
  Zap,
  Shield,
  Database,
  Cloud,
  Brain
} from 'lucide-react';

const CaseStudy = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Digital Transformation Success: Fortune 500 Manufacturing Company",
      excerpt: "How we helped a leading manufacturer achieve 40% efficiency improvement through AI-powered automation and IoT integration.",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      duration: "18 months",
      teamSize: "25+ experts",
      results: [
        "40% increase in operational efficiency",
        "30% reduction in production costs",
        "50% improvement in quality control",
        "25% faster time-to-market"
      ],
      technologies: ["AI/ML", "IoT", "Cloud Computing", "Data Analytics"],
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "AI-Powered Healthcare Analytics Platform",
      excerpt: "Revolutionary healthcare analytics solution that improved patient outcomes and reduced operational costs by 35%.",
      company: "Metro Health Systems",
      industry: "Healthcare",
      duration: "12 months",
      teamSize: "18 experts",
      results: [
        "35% reduction in operational costs",
        "45% improvement in patient outcomes",
        "60% faster diagnosis times",
        "30% increase in staff productivity"
      ],
      technologies: ["AI/ML", "Big Data", "Predictive Analytics", "Cloud Security"],
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Cybersecurity Infrastructure Overhaul",
      excerpt: "Complete security transformation for a financial services company, implementing zero-trust architecture and advanced threat detection.",
      company: "SecureBank Financial",
      industry: "Financial Services",
      duration: "9 months",
      teamSize: "15 experts",
      results: [
        "99.9% threat detection accuracy",
        "80% reduction in security incidents",
        "Zero data breaches post-implementation",
        "50% faster incident response time"
      ],
      technologies: ["Zero Trust", "AI Security", "Threat Intelligence", "Compliance"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Cloud Migration and DevOps Transformation",
      excerpt: "Successful migration of legacy systems to cloud infrastructure with complete DevOps transformation.",
      company: "TechCorp Solutions",
      industry: "Technology",
      duration: "15 months",
      teamSize: "22 experts",
      results: [
        "70% reduction in deployment time",
        "90% improvement in system reliability",
        "60% cost savings on infrastructure",
        "24/7 automated monitoring"
      ],
      technologies: ["AWS/Azure", "Kubernetes", "CI/CD", "Infrastructure as Code"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Quantum Computing Research Platform",
      excerpt: "Development of a cutting-edge quantum computing research platform for academic and commercial applications.",
      company: "Quantum Research Institute",
      industry: "Research & Development",
      duration: "24 months",
      teamSize: "30+ experts",
      results: [
        "10x faster computation for complex algorithms",
        "Breakthrough in quantum error correction",
        "5 new patents filed",
        "Partnerships with leading universities"
      ],
      technologies: ["Quantum Computing", "Quantum Algorithms", "Error Correction", "Research Tools"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Smart City IoT Implementation",
      excerpt: "Comprehensive IoT solution for a major city, improving public services and citizen engagement.",
      company: "SmartCity Municipal",
      industry: "Government",
      duration: "21 months",
      teamSize: "35+ experts",
      results: [
        "25% improvement in public service efficiency",
        "40% reduction in energy consumption",
        "60% increase in citizen satisfaction",
        "Real-time monitoring of city infrastructure"
      ],
      technologies: ["IoT", "Edge Computing", "Data Analytics", "Smart Sensors"],
      featured: false,
      image: "/api/placeholder/600/400"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories & Case Studies
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Discover how Zion Tech Group has transformed businesses across industries through innovative technology solutions and strategic partnerships.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>Industry Recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span>Measurable Impact</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Case Studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.h2 
          className="text-3xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Featured Success Stories
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.filter(study => study.featured).map((study) => (
            <motion.div
              key={study.id}
              className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-center">
                  <Building className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                  <p className="text-slate-400">{study.company}</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-lg mb-6">{study.excerpt}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{study.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{study.teamSize}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Target className="w-4 h-4" />
                  <span className="text-sm">{study.industry}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">Featured</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                <ul className="space-y-2">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-slate-600/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Read Full Case Study
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.h2 
          className="text-3xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          All Case Studies
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {caseStudies.filter(study => !study.featured).map((study) => (
            <motion.article
              key={study.id}
              className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-lg border border-slate-600/50 flex items-center justify-center">
                    <Building className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{study.company}</p>
                  </div>
                </div>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {study.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {study.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {study.teamSize}
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    {study.industry}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium text-sm mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-xs">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-700/50">
                  <button className="w-full text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                    Read Full Case Study →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div 
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500/10 transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;
