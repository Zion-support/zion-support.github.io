import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Users, Award, Mail, Smartphone, Globe as GlobeIcon, TrendingUp, Clock, CheckCircle, ExternalLink } from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered E-commerce Transformation",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Low conversion rates and poor customer experience due to outdated recommendation system",
      solution: "Implemented AI-powered product recommendations and personalized shopping experience",
      results: [
        "45% increase in conversion rates",
        "60% improvement in customer satisfaction",
        "35% boost in average order value",
        "50% reduction in cart abandonment"
      ],
      technologies: ["AI/ML", "React", "Node.js", "MongoDB", "TensorFlow"],
      duration: "6 months",
      team: "8 developers",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "5G Network Infrastructure for Smart City",
      client: "MetroCity Government",
      industry: "Government",
      challenge: "Need for ultra-fast connectivity to support smart city initiatives and IoT devices",
      solution: "Deployed comprehensive 5G network infrastructure with edge computing capabilities",
      results: [
        "99.9% network uptime achieved",
        "10x faster data transmission",
        "Support for 100,000+ IoT devices",
        "40% reduction in operational costs"
      ],
      technologies: ["5G", "Edge Computing", "IoT", "Network Security", "Cloud"],
      duration: "12 months",
      team: "15 engineers",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 3,
      title: "AI Cybersecurity Suite Implementation",
      client: "FinanceCorp",
      industry: "Financial Services",
      challenge: "Increasing cyber threats and need for real-time threat detection and response",
      solution: "Deployed AI-powered cybersecurity monitoring and automated incident response system",
      results: [
        "95% reduction in false positives",
        "Real-time threat detection",
        "99.8% security incident response time",
        "Full compliance with financial regulations"
      ],
      technologies: ["AI Security", "Machine Learning", "Threat Intelligence", "Automation"],
      duration: "4 months",
      team: "6 security experts",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "Cloud Migration and Optimization",
      client: "ManufacturingPro",
      industry: "Manufacturing",
      challenge: "Legacy systems causing inefficiencies and high operational costs",
      solution: "Complete cloud migration with AI-powered optimization and automation",
      results: [
        "70% reduction in infrastructure costs",
        "50% improvement in system performance",
        "99.5% uptime achieved",
        "Automated scaling and resource management"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "AI Optimization", "DevOps"],
      duration: "8 months",
      team: "10 engineers",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "AI Customer Support Automation",
      client: "ServiceMax",
      industry: "Customer Service",
      challenge: "High customer service costs and inconsistent response times",
      solution: "Implemented AI-powered chatbots and automated customer service workflows",
      results: [
        "80% reduction in support tickets",
        "24/7 customer support availability",
        "90% customer satisfaction rate",
        "60% reduction in support costs"
      ],
      technologies: ["NLP", "Chatbots", "CRM Integration", "Sentiment Analysis"],
      duration: "3 months",
      team: "5 developers",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "AI-Powered Data Analytics Platform",
      client: "DataInsights Corp",
      industry: "Data Analytics",
      challenge: "Complex data processing and need for real-time insights",
      solution: "Built comprehensive AI analytics platform with machine learning capabilities",
      results: [
        "Real-time data processing",
        "Predictive analytics accuracy of 92%",
        "50% faster decision making",
        "Automated report generation"
      ],
      technologies: ["Python", "TensorFlow", "Apache Spark", "React", "PostgreSQL"],
      duration: "5 months",
      team: "7 data scientists",
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta
          name="description"
          content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries. See real results and client success stories."
        />
        <meta
          name="keywords"
          content="case studies, success stories, AI solutions, IT projects, client results, business transformation, technology implementation"
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
                Success
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Stories
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across various industries transform their operations 
              with cutting-edge AI and IT solutions. Real projects, real results, real success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Case Studies
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most impactful projects that showcase the power of AI and technology in transforming businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => study.featured).map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      <span className="text-cyan-400 text-sm font-medium">{study.duration}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="mb-4">
                      <p className="text-gray-300 font-semibold mb-2">Client: {study.client}</p>
                      <p className="text-gray-400 text-sm mb-3">{study.challenge}</p>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full text-xs border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Team: {study.team}</span>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group-hover:translate-x-1 transition-all duration-300"
                      >
                        Read Full Case Study
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  All Case Studies
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse through our complete portfolio of successful projects across different industries and technologies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs border border-yellow-500/30">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">{study.challenge}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-xs">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <span>{study.duration}</span>
                      <span>{study.team}</span>
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our innovative AI and IT solutions. 
                Join the ranks of our successful clients.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <GlobeIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}