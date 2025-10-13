import { ArrowRight, TrendingUp, Users, Award, Clock, CheckCircle, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      client: "TechStart Inc.",
      industry: "E-commerce",
      duration: "6 months",
      team: "8 specialists",
      challenge: "Legacy e-commerce platform struggling with performance, scalability, and user experience issues.",
      solution: "Complete digital transformation with modern microservices architecture, AI-powered recommendations, and advanced analytics.",
      results: [
        "300% increase in page load speed",
        "150% improvement in conversion rates",
        "99.9% uptime achieved",
        "50% reduction in operational costs"
      ],
      technologies: ["React", "Node.js", "AWS", "AI/ML", "Microservices"],
      image: "/api/placeholder/600/400",
      slug: "ecommerce-platform-transformation"
    },
    {
      title: "Healthcare Data Security Enhancement",
      client: "MedSecure Solutions",
      industry: "Healthcare",
      duration: "4 months",
      team: "6 specialists",
      challenge: "Healthcare organization needed to enhance data security and ensure HIPAA compliance while improving patient data management.",
      solution: "Implemented comprehensive cybersecurity framework with advanced encryption, access controls, and compliance monitoring.",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security breaches in 12 months",
        "75% reduction in data access time",
        "99.8% system availability"
      ],
      technologies: ["Cybersecurity", "HIPAA Compliance", "Encryption", "AWS", "Monitoring"],
      image: "/api/placeholder/600/400",
      slug: "healthcare-data-security-enhancement"
    },
    {
      title: "Manufacturing AI Integration",
      client: "AutoParts Manufacturing",
      industry: "Manufacturing",
      duration: "8 months",
      team: "10 specialists",
      challenge: "Manufacturing company wanted to integrate AI for predictive maintenance, quality control, and process optimization.",
      solution: "Deployed AI-powered predictive analytics, computer vision for quality control, and IoT sensors for real-time monitoring.",
      results: [
        "40% reduction in equipment downtime",
        "25% improvement in product quality",
        "30% increase in production efficiency",
        "60% reduction in maintenance costs"
      ],
      technologies: ["AI/ML", "IoT", "Computer Vision", "Predictive Analytics", "Cloud"],
      image: "/api/placeholder/600/400",
      slug: "manufacturing-ai-integration"
    },
    {
      title: "Financial Services Digital Banking",
      client: "Community Credit Union",
      industry: "Financial Services",
      duration: "5 months",
      team: "7 specialists",
      challenge: "Traditional credit union needed to modernize their digital banking platform to compete with larger institutions.",
      solution: "Developed modern mobile-first banking application with advanced security features, real-time analytics, and seamless user experience.",
      results: [
        "200% increase in mobile app usage",
        "85% customer satisfaction score",
        "50% reduction in support tickets",
        "99.95% security compliance"
      ],
      technologies: ["React Native", "Node.js", "Blockchain", "Security", "Analytics"],
      image: "/api/placeholder/600/400",
      slug: "financial-services-digital-banking"
    },
    {
      title: "Retail Chain Inventory Optimization",
      client: "Fashion Forward Retail",
      industry: "Retail",
      duration: "3 months",
      team: "5 specialists",
      challenge: "Retail chain struggling with inventory management, stockouts, and overstock issues across multiple locations.",
      solution: "Implemented AI-powered inventory management system with demand forecasting, automated reordering, and real-time analytics.",
      results: [
        "35% reduction in stockouts",
        "25% decrease in overstock",
        "20% improvement in inventory turnover",
        "45% reduction in manual work"
      ],
      technologies: ["AI/ML", "Analytics", "IoT", "Cloud", "Automation"],
      image: "/api/placeholder/600/400",
      slug: "retail-chain-inventory-optimization"
    },
    {
      title: "Educational Platform Modernization",
      client: "EduTech Academy",
      industry: "Education",
      duration: "7 months",
      team: "9 specialists",
      challenge: "Online education platform needed to scale to support 100,000+ students with improved performance and new features.",
      solution: "Complete platform overhaul with microservices architecture, AI-powered personalization, and advanced learning analytics.",
      results: [
        "500% increase in concurrent users",
        "90% improvement in page load times",
        "40% increase in student engagement",
        "95% student satisfaction rating"
      ],
      technologies: ["Microservices", "AI/ML", "Analytics", "Cloud", "Scalability"],
      image: "/api/placeholder/600/400",
      slug: "educational-platform-modernization"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "200%", label: "Average ROI", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Success Stories & Client Results | Zion Tech Group</title>
        <meta
          name="description"
          content="Explore our success stories and case studies showcasing how Zion Tech Group has helped businesses achieve digital transformation, improved efficiency, and increased ROI."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client results, digital transformation, AI implementation, cybersecurity, business solutions, ROI"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Award className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Proven Results</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Case
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Studies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries achieve digital transformation, 
              improve efficiency, and drive measurable results through innovative technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Our Services
                <Award className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've transformed businesses across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Award className="w-20 h-20 text-cyan-400/50 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {study.title}
                      </h3>
                      <div className="text-right text-sm text-gray-400">
                        <div className="flex items-center mb-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {study.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.team}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Client: {study.client}</h4>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {study.solution}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group-hover:scale-105 block"
                    >
                      Read Full Case Study
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the growing list of businesses that have transformed their operations with our innovative solutions. 
                Let's discuss how we can help you achieve similar results.
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
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}