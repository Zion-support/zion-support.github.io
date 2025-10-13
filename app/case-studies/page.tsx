import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, BarChart3, Zap, Users, Award, Clock, CheckCircle } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  teamSize: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: "1",
      title: "AI-Powered Customer Service Transformation",
      client: "Global E-commerce Giant",
      industry: "E-commerce",
      challenge: "High customer service costs and inconsistent response quality across multiple channels.",
      solution: "Implemented AI-powered chatbots and automated response systems with natural language processing capabilities.",
      results: [
        "75% reduction in customer service costs",
        "90% improvement in response time",
        "95% customer satisfaction rate",
        "40% increase in first-call resolution"
      ],
      image: "/api/placeholder/600/400",
      duration: "6 months",
      teamSize: "12 specialists"
    },
    {
      id: "2",
      title: "Cybersecurity Infrastructure Overhaul",
      client: "Financial Services Corporation",
      industry: "Finance",
      challenge: "Outdated security systems vulnerable to modern cyber threats and compliance requirements.",
      solution: "Comprehensive security audit and implementation of zero-trust architecture with advanced threat detection.",
      results: [
        "99.9% security incident reduction",
        "100% compliance with industry standards",
        "60% faster threat detection",
        "50% reduction in security management overhead"
      ],
      image: "/api/placeholder/600/400",
      duration: "8 months",
      teamSize: "15 experts"
    },
    {
      id: "3",
      title: "Cloud Migration and Optimization",
      client: "Manufacturing Enterprise",
      industry: "Manufacturing",
      challenge: "Legacy on-premise systems limiting scalability and increasing operational costs.",
      solution: "Complete cloud migration with hybrid architecture and automated scaling solutions.",
      results: [
        "70% reduction in infrastructure costs",
        "300% improvement in system scalability",
        "99.5% uptime achievement",
        "80% faster deployment cycles"
      ],
      image: "/api/placeholder/600/400",
      duration: "10 months",
      teamSize: "20 engineers"
    },
    {
      id: "4",
      title: "5G Network Implementation",
      client: "Smart City Initiative",
      industry: "Government",
      challenge: "Need for high-speed, low-latency connectivity to support smart city infrastructure.",
      solution: "End-to-end 5G network deployment with edge computing capabilities and IoT integration.",
      results: [
        "10x faster data transmission",
        "90% reduction in latency",
        "1000+ connected devices supported",
        "Real-time analytics capabilities"
      ],
      image: "/api/placeholder/600/400",
      duration: "12 months",
      teamSize: "25 specialists"
    },
    {
      id: "5",
      title: "AI-Driven Supply Chain Optimization",
      client: "Global Retail Chain",
      industry: "Retail",
      challenge: "Inefficient supply chain operations leading to stockouts and excess inventory.",
      solution: "AI-powered demand forecasting and automated inventory management system.",
      results: [
        "35% reduction in inventory costs",
        "50% improvement in demand accuracy",
        "25% reduction in stockouts",
        "40% faster order fulfillment"
      ],
      image: "/api/placeholder/600/400",
      duration: "7 months",
      teamSize: "18 analysts"
    },
    {
      id: "6",
      title: "Digital Transformation Initiative",
      client: "Healthcare Provider",
      industry: "Healthcare",
      challenge: "Paper-based processes and fragmented patient data across multiple systems.",
      solution: "Comprehensive digital transformation with integrated patient management and telemedicine platform.",
      results: [
        "80% reduction in administrative time",
        "60% improvement in patient satisfaction",
        "90% reduction in data entry errors",
        "Real-time patient monitoring capabilities"
      ],
      image: "/api/placeholder/600/400",
      duration: "9 months",
      teamSize: "22 developers"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Reduction", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "60%", label: "Average Efficiency Gain", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped organizations across industries transform their operations and achieve remarkable results through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{study.client}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {study.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {study.teamSize}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700">
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-2 transition-all"
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 text-center border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help transform your organization with cutting-edge technology solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/consultation"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;