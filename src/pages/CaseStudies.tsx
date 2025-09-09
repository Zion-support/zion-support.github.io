import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building, 
  TrendingUp, 
  Shield, 
  Brain, 
  Cloud,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Financial Fraud Detection",
      company: "Global Bank Corp",
      industry: "Financial Services",
      challenge: "Detecting sophisticated fraud patterns in real-time across millions of transactions",
      solution: "Implemented machine learning algorithms with 99.7% accuracy",
      results: [
        "Fraud detection accuracy improved by 40%",
        "False positive rate reduced by 60%",
        "Annual savings of $15M+",
        "Real-time processing of 10M+ transactions/day"
      ],
      technologies: ["Machine Learning", "Real-time Analytics", "Cloud Computing", "API Integration"],
      duration: "6 months",
      team: "12 developers",
      rating: 5
    },
    {
      id: 2,
      title: "Cloud Migration & DevOps Transformation",
      company: "TechStart Inc",
      industry: "SaaS",
      challenge: "Legacy on-premise infrastructure limiting scalability and deployment speed",
      solution: "Complete cloud migration with CI/CD pipeline implementation",
      results: [
        "Deployment time reduced from 2 weeks to 2 hours",
        "Infrastructure costs reduced by 35%",
        "99.9% uptime achieved",
        "Team productivity increased by 50%"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      duration: "8 months",
      team: "8 developers",
      rating: 5
    },
    {
      id: 3,
      title: "Cybersecurity Infrastructure Overhaul",
      company: "Healthcare Plus",
      industry: "Healthcare",
      challenge: "Outdated security systems vulnerable to modern cyber threats",
      solution: "Zero-trust architecture with advanced threat detection",
      results: [
        "Security incidents reduced by 85%",
        "Compliance score improved to 98%",
        "Real-time threat monitoring implemented",
        "Employee security training completion: 100%"
      ],
      technologies: ["Zero Trust", "SIEM", "EDR", "Multi-factor Authentication"],
      duration: "10 months",
      team: "15 security specialists",
      rating: 5
    },
    {
      id: 4,
      title: "Digital Transformation for Manufacturing",
      company: "Industrial Manufacturing Co",
      industry: "Manufacturing",
      challenge: "Manual processes causing delays and quality control issues",
      solution: "IoT sensors and AI-powered quality control system",
      results: [
        "Production efficiency increased by 30%",
        "Quality defects reduced by 45%",
        "Predictive maintenance implemented",
        "ROI achieved in 18 months"
      ],
      technologies: ["IoT", "AI/ML", "Cloud Computing", "Data Analytics"],
      duration: "12 months",
      team: "20 engineers",
      rating: 5
    }
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Retail",
    "Technology",
    "Energy",
    "Transportation",
    "Education"
  ];

  const technologies = [
    "Artificial Intelligence",
    "Cloud Computing",
    "Cybersecurity",
    "IoT",
    "Blockchain",
    "Data Analytics",
    "DevOps",
    "Digital Transformation"
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-world results from our technology solutions across diverse industries
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center"><Users className="w-4 h-4 mr-2" /> 50+ Clients</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> 95% Success Rate</span>
              <span className="flex items-center"><Star className="w-4 h-4 mr-2" /> 4.9/5 Rating</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped organizations achieve remarkable results through innovative technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-green-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center"><Building className="w-4 h-4 mr-2" /> {study.company}</span>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full">{study.industry}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(study.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-green-400 font-semibold mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 border-t border-slate-700 pt-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {study.duration}</span>
                      <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {study.team}</span>
                    </div>
                    <Link 
                      to={`/case-studies/${study.id}`}
                      className="text-green-400 hover:text-green-300 transition-colors flex items-center"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Solutions by Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've delivered successful solutions across diverse industry verticals
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold group-hover:text-green-400 transition-colors">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technology Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our deep expertise in cutting-edge technologies enables innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                  {tech}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Success by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quantifying the impact of our technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Successful Projects", icon: CheckCircle },
              { number: "95%", label: "Client Satisfaction", icon: Star },
              { number: "$500M+", label: "Client ROI Generated", icon: DollarSign },
              { number: "24/7", label: "Support Available", icon: Clock }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our technology solutions can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
