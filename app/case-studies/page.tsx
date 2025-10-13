import { ArrowRight, TrendingUp, Users, Award, Clock, Target, CheckCircle, Star, BarChart3, Shield, Zap, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      company: "RetailTech Solutions",
      industry: "E-commerce",
      challenge: "Legacy system causing 40% cart abandonment and poor user experience",
      solution: "Implemented AI-powered recommendation engine and modernized checkout process",
      results: [
        "60% increase in conversion rate",
        "45% reduction in cart abandonment",
        "35% increase in average order value",
        "50% improvement in page load speed"
      ],
      technologies: ["AI Analytics", "Cloud Infrastructure", "Mobile Optimization"],
      duration: "6 months",
      image: "/api/placeholder/400/300",
      testimonial: "Zion Tech Group transformed our entire e-commerce platform. The results exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, RetailTech Solutions"
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Implementation",
      company: "MediCare Plus",
      industry: "Healthcare",
      challenge: "Fragmented patient data across multiple systems affecting care quality",
      solution: "Deployed AI-powered data analytics platform with real-time patient insights",
      results: [
        "30% improvement in patient outcomes",
        "25% reduction in readmission rates",
        "40% faster diagnosis times",
        "90% reduction in data processing time"
      ],
      technologies: ["AI Analytics", "Data Integration", "Security Compliance"],
      duration: "8 months",
      image: "/api/placeholder/400/300",
      testimonial: "The AI analytics platform revolutionized our patient care approach. Highly recommended!",
      author: "Dr. Michael Chen",
      position: "Chief Medical Officer, MediCare Plus"
    },
    {
      id: 3,
      title: "Manufacturing Automation Upgrade",
      company: "AutoParts Manufacturing",
      industry: "Manufacturing",
      challenge: "Manual processes causing production delays and quality issues",
      solution: "Implemented IoT sensors and AI-powered predictive maintenance system",
      results: [
        "50% reduction in downtime",
        "35% increase in production efficiency",
        "60% reduction in maintenance costs",
        "25% improvement in product quality"
      ],
      technologies: ["IoT Integration", "AI Predictive Analytics", "Process Automation"],
      duration: "10 months",
      image: "/api/placeholder/400/300",
      testimonial: "Zion Tech Group's automation solutions transformed our manufacturing operations completely.",
      author: "Robert Martinez",
      position: "Operations Director, AutoParts Manufacturing"
    },
    {
      id: 4,
      title: "Financial Services Digital Transformation",
      company: "SecureBank International",
      industry: "Financial Services",
      challenge: "Outdated systems unable to handle increasing transaction volumes",
      solution: "Modernized core banking system with AI-powered fraud detection and real-time processing",
      results: [
        "99.9% system uptime achieved",
        "70% faster transaction processing",
        "85% reduction in fraud incidents",
        "40% increase in customer satisfaction"
      ],
      technologies: ["AI Security", "Cloud Migration", "Real-time Processing"],
      duration: "12 months",
      image: "/api/placeholder/400/300",
      testimonial: "The digital transformation exceeded all our expectations. Our customers love the new experience.",
      author: "Jennifer Lee",
      position: "Chief Technology Officer, SecureBank International"
    },
    {
      id: 5,
      title: "Educational Platform Modernization",
      company: "EduTech Academy",
      industry: "Education",
      challenge: "Outdated learning management system affecting student engagement",
      solution: "Developed AI-powered personalized learning platform with interactive content",
      results: [
        "45% increase in student engagement",
        "30% improvement in learning outcomes",
        "50% reduction in administrative workload",
        "80% increase in course completion rates"
      ],
      technologies: ["AI Learning Analytics", "Cloud Infrastructure", "Mobile Development"],
      duration: "7 months",
      image: "/api/placeholder/400/300",
      testimonial: "The new platform transformed how our students learn. Engagement levels are at an all-time high.",
      author: "Professor David Wilson",
      position: "Academic Director, EduTech Academy"
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      company: "Global Logistics Corp",
      industry: "Logistics",
      challenge: "Inefficient supply chain causing delays and increased costs",
      solution: "Implemented AI-powered supply chain optimization with real-time tracking",
      results: [
        "35% reduction in delivery times",
        "25% decrease in operational costs",
        "50% improvement in inventory accuracy",
        "60% increase in customer satisfaction"
      ],
      technologies: ["AI Optimization", "Real-time Tracking", "Data Analytics"],
      duration: "9 months",
      image: "/api/placeholder/400/300",
      testimonial: "Zion Tech Group's supply chain solution revolutionized our operations. Highly efficient!",
      author: "Lisa Anderson",
      position: "Supply Chain Director, Global Logistics Corp"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta
          name="description"
          content="Explore our successful case studies and client success stories. See how Zion Tech Group has helped businesses across various industries achieve digital transformation and growth."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client results, digital transformation, AI implementation, business growth, technology solutions"
        />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Award className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">500+ Successful Projects</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Case
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Studies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across various industries achieve digital transformation, 
              improve efficiency, and drive growth through innovative technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore Our Services
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
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
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from real clients. See how our technology solutions have transformed businesses across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{study.company.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-cyan-400 text-sm">{study.company} • {study.industry}</p>
                        </div>
                      </div>
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {study.duration}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Solution:</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Results:</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial */}
                    <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-gray-300 text-sm italic mb-2">"{study.testimonial}"</p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-xs font-bold">{study.author.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="text-white text-sm font-semibold">{study.author}</div>
                          <div className="text-cyan-400 text-xs">{study.position}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of businesses that have transformed their operations with our technology solutions. 
              Let's discuss how we can help you achieve similar results.
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
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}