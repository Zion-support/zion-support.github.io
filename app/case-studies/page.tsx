import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Shield, 
  Cloud, 
  Brain,
  CheckCircle,
  Star,
  Users,
  Award
} from "lucide-react";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Migration",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Migrate legacy e-commerce platform to cloud with zero downtime",
      solution: "Implemented AWS-based microservices architecture with automated scaling",
      results: [
        "99.9% uptime during migration",
        "40% reduction in infrastructure costs",
        "60% improvement in page load times",
        "300% increase in peak traffic handling"
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Customer Service",
      client: "FinanceCorp",
      industry: "Financial Services",
      challenge: "Reduce customer service costs while improving response times",
      solution: "Deployed AI chatbot with natural language processing capabilities",
      results: [
        "70% reduction in support tickets",
        "85% customer satisfaction rate",
        "50% faster response times",
        "24/7 automated support coverage"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity Enhancement",
      client: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Strengthen security posture for HIPAA compliance",
      solution: "Implemented comprehensive security framework with threat detection",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security incidents in 12 months",
        "95% reduction in false positives",
        "Automated threat response in under 5 minutes"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Reduction", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "60%", label: "Average Efficiency Gain", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform their operations with AI, cloud computing, and cybersecurity solutions." />
        <meta name="keywords" content="case studies, success stories, client testimonials, project results, AI implementation, cloud migration, cybersecurity" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions. 
              Real results from real clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped businesses achieve their goals.
              </p>
            </div>
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center text-white mr-4`}>
                          {study.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-white">{study.title}</h3>
                          <p className="text-cyan-400">{study.client} • {study.industry}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-purple-900 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-24 h-24 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center text-white mx-auto mb-4`}>
                          {study.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                        <p className="text-gray-300">{study.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of successful businesses that have transformed their operations with our technology solutions. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;