import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Award, BarChart3, Globe, Shield, Zap } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      client: "Retail Solutions Inc.",
      industry: "E-commerce",
      challenge: "Legacy system causing 40% cart abandonment and poor mobile experience",
      solution: "Complete platform rebuild with AI-powered personalization and mobile-first design",
      results: [
        "60% increase in conversion rate",
        "45% reduction in cart abandonment",
        "300% improvement in mobile performance",
        "50% increase in average order value"
      ],
      technologies: ["React", "Node.js", "AI/ML", "Cloud Infrastructure"],
      duration: "6 months",
      team: "12 developers",
      image: "/images/case-study-1.jpg"
    },
    {
      title: "Healthcare Data Analytics Platform",
      client: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Fragmented patient data across multiple systems affecting care quality",
      solution: "AI-powered data integration platform with real-time analytics and predictive insights",
      results: [
        "90% reduction in data processing time",
        "75% improvement in diagnostic accuracy",
        "40% decrease in patient readmission rates",
        "60% increase in operational efficiency"
      ],
      technologies: ["Python", "Machine Learning", "Data Analytics", "Cloud Computing"],
      duration: "8 months",
      team: "15 developers",
      image: "/images/case-study-2.jpg"
    },
    {
      title: "Financial Services Security Enhancement",
      client: "SecureBank Corp",
      industry: "Financial Services",
      challenge: "Increasing cyber threats and compliance requirements",
      solution: "Advanced cybersecurity suite with AI-powered threat detection and automated compliance",
      results: [
        "99.9% security uptime achieved",
        "80% reduction in false positives",
        "100% compliance with regulations",
        "50% reduction in security incidents"
      ],
      technologies: ["Cybersecurity", "AI/ML", "Blockchain", "Cloud Security"],
      duration: "4 months",
      team: "10 developers",
      image: "/images/case-study-3.jpg"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Successful Technology Transformations | Zion Tech Group</title>
        <meta name="description" content="Explore our successful technology transformation projects across various industries. See how we've helped businesses achieve digital transformation goals." />
        <meta name="keywords" content="case studies, technology projects, digital transformation, success stories, client projects, software development, AI solutions" />
        <meta property="og:title" content="Case Studies - Successful Technology Transformations | Zion Tech Group" />
        <meta property="og:description" content="Explore our successful technology transformation projects across various industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
        <meta property="og:image" content="https://ziontechgroup.com/og-case-studies.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies - Successful Technology Transformations | Zion Tech Group" />
        <meta name="twitter:description" content="Explore our successful technology transformation projects across various industries." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-case-studies.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SEOOptimizer
          title="Case Studies - Technology Transformation Success Stories | Zion Tech Group"
          description="Discover how we've helped businesses across industries achieve digital transformation success. Real case studies with measurable results and proven outcomes."
          keywords="case studies, technology projects, digital transformation, success stories, client projects, software development, AI solutions, business transformation"
          canonical="https://ziontechgroup.com/case-studies"
        />

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden quantum-field holographic-grid">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Award className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Proven Success Stories</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-cyberpunk neon-advanced">
                Success Stories
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've transformed businesses across industries with cutting-edge technology solutions. 
              Real projects, real results, real impact.
            </p>
            
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

        {/* Case Studies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-cyberpunk">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Explore our most impactful technology transformation projects and see the measurable results we've achieved for our clients.
              </p>
            </div>
            
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className={`holographic-card hover-quantum p-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex-row gap-8`}
                >
                  <div className="lg:w-1/2">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm font-semibold rounded-full mb-4">
                        {study.industry}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {study.title}
                      </h3>
                      <div className="flex items-center text-gray-400 mb-4">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{study.client}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Key Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-300">
                              <Zap className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-400 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>Duration: {study.duration}</span>
                        <span>Team: {study.team}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="h-64 lg:h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20">
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                        <p className="text-gray-400">Project Visualization</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 holographic-grid">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-cyberpunk">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our portfolio of successful technology transformations. 
              Let's create your next success story together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-quantum hover-quantum flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="holographic-card border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Our Services
                <Globe className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;