import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, Shield, CheckCircle, Users, Clock, Award } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing: AI-Powered Predictive Maintenance",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Unplanned equipment downtime costing $2M annually",
      solution: "AI-powered predictive maintenance system with IoT sensors",
      results: "75% reduction in downtime, $1.5M annual savings",
      duration: "6 months",
      technologies: ["Machine Learning", "IoT", "Cloud Computing", "Data Analytics"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Healthcare Provider: Digital Transformation & Patient Portal",
      company: "Regional Health System",
      industry: "Healthcare",
      challenge: "Outdated patient management system causing inefficiencies",
      solution: "Comprehensive digital transformation with AI-powered patient portal",
      results: "40% improvement in patient satisfaction, 60% reduction in admin time",
      duration: "8 months",
      technologies: ["React", "Node.js", "AI/ML", "HIPAA Compliance", "Cloud Infrastructure"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "E-commerce Platform: Scalable Cloud Migration",
      company: "TechStart E-commerce",
      industry: "E-commerce",
      challenge: "Legacy infrastructure unable to handle traffic spikes",
      solution: "Complete cloud migration with auto-scaling architecture",
      results: "99.9% uptime, 300% increase in peak capacity",
      duration: "4 months",
      technologies: ["AWS", "Docker", "Kubernetes", "Microservices", "CI/CD"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Financial Services: AI-Powered Fraud Detection",
      company: "SecureBank Financial",
      industry: "Financial Services",
      challenge: "Increasing fraud attempts and false positives",
      solution: "Advanced AI fraud detection system with real-time monitoring",
      results: "90% reduction in false positives, 85% faster fraud detection",
      duration: "5 months",
      technologies: ["Machine Learning", "Real-time Analytics", "Blockchain", "Security"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Retail Chain: Omnichannel Customer Experience",
      company: "Fashion Forward Retail",
      industry: "Retail",
      challenge: "Disconnected online and offline customer experiences",
      solution: "Unified omnichannel platform with AI-powered personalization",
      results: "35% increase in online sales, 50% improvement in customer retention",
      duration: "7 months",
      technologies: ["React Native", "AI/ML", "API Integration", "Analytics", "Mobile"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Government Agency: Digital Services Modernization",
      company: "State Department of Technology",
      industry: "Government",
      challenge: "Outdated citizen services causing long wait times",
      solution: "Modern digital services platform with automated workflows",
      results: "70% reduction in processing time, 80% increase in citizen satisfaction",
      duration: "10 months",
      technologies: ["React", "Python", "Automation", "Security", "Compliance"],
      image: "/api/placeholder/600/400"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Target className="w-8 h-8" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-8 h-8" /> },
    { number: "50+", label: "Industries Served", icon: <Globe className="w-8 h-8" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-8 h-8" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta
          name="description"
          content="Explore our successful case studies and client success stories. See how Zion Tech Group has helped businesses achieve remarkable results through innovative technology solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client results, AI implementation, digital transformation, technology solutions, business outcomes"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Case
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Studies
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries achieve remarkable results 
              through innovative technology solutions and AI implementation.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Case Studies
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've delivered measurable impact for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <Globe className="w-16 h-16 text-cyan-400" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {study.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    <strong>Client:</strong> {study.company}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-cyan-400" />
                        Challenge:
                      </h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Solution:
                      </h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-400" />
                        Results:
                      </h4>
                      <p className="text-cyan-400 text-sm font-medium">{study.results}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our growing list of satisfied clients and discover how we can help transform your business with innovative technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Users className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}