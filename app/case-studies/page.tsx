import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Globe, Zap, BarChart3, Shield, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "RetailCorp",
      industry: "E-commerce",
      challenge: "Legacy system causing 40% cart abandonment rate and poor user experience",
      solution: "Implemented AI-powered recommendation engine and modernized the entire platform",
      results: [
        "60% increase in conversion rate",
        "45% reduction in cart abandonment",
        "35% increase in average order value",
        "50% improvement in page load speed"
      ],
      duration: "6 months",
      team: "8 developers",
      technologies: ["React", "Node.js", "AI/ML", "AWS"],
      image: "ecommerce-transformation"
    },
    {
      id: 2,
      title: "AI-Powered Customer Support Automation",
      client: "TechStart Inc.",
      industry: "SaaS",
      challenge: "High support ticket volume overwhelming the team and affecting customer satisfaction",
      solution: "Deployed intelligent chatbots and automated ticket routing system",
      results: [
        "80% reduction in response time",
        "70% of tickets resolved automatically",
        "90% customer satisfaction score",
        "60% reduction in support costs"
      ],
      duration: "4 months",
      team: "5 developers",
      technologies: ["AI/ML", "NLP", "Python", "Azure"],
      image: "customer-support-ai"
    },
    {
      id: 3,
      title: "Financial Services Data Analytics",
      client: "FinanceFirst",
      industry: "Financial Services",
      challenge: "Manual data processing causing delays and errors in risk assessment",
      solution: "Built comprehensive AI analytics platform with real-time risk monitoring",
      results: [
        "95% accuracy in risk assessment",
        "75% faster data processing",
        "40% reduction in false positives",
        "Real-time monitoring capabilities"
      ],
      duration: "8 months",
      team: "12 developers",
      technologies: ["Python", "Machine Learning", "Big Data", "GCP"],
      image: "financial-analytics"
    },
    {
      id: 4,
      title: "Healthcare AI Diagnosis Assistant",
      client: "MediCare Plus",
      industry: "Healthcare",
      challenge: "Need to improve diagnostic accuracy and reduce time for patient assessments",
      solution: "Developed AI-powered diagnostic assistant with medical image analysis",
      results: [
        "85% accuracy in preliminary diagnosis",
        "50% faster patient assessment",
        "30% reduction in misdiagnosis",
        "Improved patient outcomes"
      ],
      duration: "10 months",
      team: "15 developers",
      technologies: ["Computer Vision", "Deep Learning", "Python", "AWS"],
      image: "healthcare-ai"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Award className="w-6 h-6" /> },
    { number: "200%", label: "Average ROI", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "15+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group - Success Stories & Client Results</title>
        <meta
          name="description"
          content="Explore our success stories and case studies. See how Zion Tech Group has helped businesses across industries achieve remarkable results with AI and technology solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client results, AI implementation, technology transformation, business outcomes, project portfolio"
        />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <BarChart3 className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Success Stories</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Case
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Studies
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover how we've helped businesses across industries achieve remarkable results with our AI and technology solutions. 
                Real projects, real results, real impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a
                  href="#case-studies"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  View Case Studies
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Start Your Project
                  <BarChart3 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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
          </div>
        </section>

        {/* Case Studies Grid */}
        <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Explore detailed case studies showcasing our expertise and the transformative results we've achieved for our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {study.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-300">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {study.client}
                          </span>
                          <span className="flex items-center">
                            <Globe className="w-4 h-4 mr-1" />
                            {study.industry}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-300 text-sm mb-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {study.duration}
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          {study.team}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {study.challenge}
                      </p>
                      <h4 className="text-white font-semibold mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-medium text-sm">View Full Case Study</span>
                      <Link
                        to="/contact"
                        className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-cyan-500/25"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
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
              Join the growing list of businesses that have transformed their operations with our AI and technology solutions. 
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
                <BarChart3 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}