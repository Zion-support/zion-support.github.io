import { ArrowRight, TrendingUp, Users, Award, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform Transformation",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Legacy system struggling with inventory management and customer personalization",
      solution: "Implemented AI-driven recommendation engine and automated inventory management",
      results: [
        "40% increase in conversion rates",
        "60% reduction in inventory costs",
        "85% improvement in customer satisfaction"
      ],
      duration: "6 months",
      team: "12 specialists",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "5G Network Implementation for Smart City",
      client: "MetroCity Government",
      industry: "Government",
      challenge: "Need for ultra-fast connectivity to support smart city infrastructure",
      solution: "Deployed comprehensive 5G network with edge computing capabilities",
      results: [
        "99.9% network uptime achieved",
        "50% faster data processing",
        "30% reduction in operational costs"
      ],
      duration: "12 months",
      team: "25 specialists",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Cybersecurity Overhaul for Financial Services",
      client: "SecureBank Ltd.",
      industry: "Financial Services",
      challenge: "Outdated security infrastructure vulnerable to modern threats",
      solution: "Implemented zero-trust security architecture with AI-powered threat detection",
      results: [
        "95% reduction in security incidents",
        "100% compliance with regulations",
        "70% faster threat response time"
      ],
      duration: "8 months",
      team: "18 specialists",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Cloud Migration for Healthcare Provider",
      client: "MediCare Systems",
      industry: "Healthcare",
      challenge: "On-premises infrastructure limiting scalability and accessibility",
      solution: "Migrated to cloud-native architecture with HIPAA-compliant security",
      results: [
        "300% increase in system capacity",
        "90% reduction in maintenance costs",
        "99.5% system availability"
      ],
      duration: "10 months",
      team: "20 specialists",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Data Analytics Platform for Manufacturing",
      client: "AutoParts Manufacturing",
      industry: "Manufacturing",
      challenge: "Lack of real-time insights into production processes and quality control",
      solution: "Built comprehensive data analytics platform with predictive maintenance",
      results: [
        "25% increase in production efficiency",
        "40% reduction in equipment downtime",
        "50% improvement in quality control"
      ],
      duration: "7 months",
      team: "15 specialists",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Mobile App Development for Logistics",
      client: "FastLogistics Corp.",
      industry: "Logistics",
      challenge: "Need for real-time tracking and route optimization",
      solution: "Developed mobile-first logistics platform with AI-powered route optimization",
      results: [
        "35% reduction in delivery time",
        "45% decrease in fuel costs",
        "80% improvement in customer satisfaction"
      ],
      duration: "5 months",
      team: "10 specialists",
      image: "/api/placeholder/400/300"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+", icon: <Award className="w-8 h-8" /> },
    { label: "Client Satisfaction", value: "98%", icon: <Users className="w-8 h-8" /> },
    { label: "Average ROI", value: "250%", icon: <TrendingUp className="w-8 h-8" /> },
    { label: "Years Experience", value: "10+", icon: <Clock className="w-8 h-8" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta
          name="description"
          content="Explore our success stories and case studies showcasing how Zion Tech Group has helped businesses transform with AI, 5G, and IT solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with our innovative AI, 5G, and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
                    <div className="w-full h-48 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 flex items-center justify-center">
                      <span className="text-white/60 text-sm">Case Study Image</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        {study.team}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-300 mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-300 mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-300 mb-2">Results:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
