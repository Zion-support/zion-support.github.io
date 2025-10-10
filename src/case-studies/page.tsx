import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, CheckCircle, Star, BarChart, Zap, Shield, Brain, Cloud } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing Company",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and high operational costs",
      solution: "AI-powered predictive maintenance and workflow optimization",
      results: {
        costReduction: "45%",
        efficiencyGain: "60%",
        roi: "280%",
        timeSaved: "2,500 hours/month"
      },
      technologies: ["AI Predictive Analytics", "Machine Learning", "IoT Integration", "Process Automation"],
      image: "/api/placeholder/600/400",
      testimonial: "Zion Tech Group transformed our manufacturing operations with AI. The results exceeded our expectations.",
      client: "John Smith, CTO"
    },
    {
      id: 2,
      title: "Global Financial Services Firm",
      industry: "Financial Services",
      challenge: "Manual fraud detection and compliance reporting",
      solution: "AI-powered fraud detection and automated compliance system",
      results: {
        costReduction: "35%",
        efficiencyGain: "75%",
        roi: "320%",
        timeSaved: "1,800 hours/month"
      },
      technologies: ["AI Fraud Detection", "Natural Language Processing", "Blockchain", "Real-time Analytics"],
      image: "/api/placeholder/600/400",
      testimonial: "The AI fraud detection system has saved us millions while improving accuracy.",
      client: "Sarah Johnson, Risk Director"
    },
    {
      id: 3,
      title: "Healthcare Network",
      industry: "Healthcare",
      challenge: "Patient data management and diagnostic accuracy",
      solution: "AI-powered patient analytics and diagnostic assistance",
      results: {
        costReduction: "40%",
        efficiencyGain: "50%",
        roi: "250%",
        timeSaved: "3,200 hours/month"
      },
      technologies: ["AI Healthcare Analytics", "Computer Vision", "Natural Language Processing", "Predictive Modeling"],
      image: "/api/placeholder/600/400",
      testimonial: "Patient outcomes have improved significantly with AI-powered diagnostics.",
      client: "Dr. Michael Chen, Chief Medical Officer"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      industry: "E-commerce",
      challenge: "Personalization and inventory management",
      solution: "AI-driven personalization engine and smart inventory system",
      results: {
        costReduction: "30%",
        efficiencyGain: "65%",
        roi: "290%",
        timeSaved: "2,100 hours/month"
      },
      technologies: ["AI Personalization", "Recommendation Engine", "Inventory Optimization", "Customer Analytics"],
      image: "/api/placeholder/600/400",
      testimonial: "Our conversion rates increased by 40% with AI personalization.",
      client: "Lisa Rodriguez, VP of Technology"
    },
    {
      id: 5,
      title: "Government Agency",
      industry: "Government",
      challenge: "Citizen services and data processing",
      solution: "AI-powered citizen portal and automated document processing",
      results: {
        costReduction: "50%",
        efficiencyGain: "80%",
        roi: "350%",
        timeSaved: "4,000 hours/month"
      },
      technologies: ["AI Document Processing", "Chatbot", "Process Automation", "Data Analytics"],
      image: "/api/placeholder/600/400",
      testimonial: "Citizen satisfaction has improved dramatically with our AI-powered services.",
      client: "Robert Davis, IT Director"
    },
    {
      id: 6,
      title: "Retail Chain",
      industry: "Retail",
      challenge: "Supply chain optimization and customer experience",
      solution: "AI-powered supply chain management and customer analytics",
      results: {
        costReduction: "38%",
        efficiencyGain: "55%",
        roi: "270%",
        timeSaved: "2,800 hours/month"
      },
      technologies: ["AI Supply Chain", "Customer Analytics", "Demand Forecasting", "Process Optimization"],
      image: "/api/placeholder/600/400",
      testimonial: "Our supply chain is now more efficient and responsive than ever.",
      client: "Jennifer Lee, Operations Manager"
    }
  ];

  const stats = [
    { icon: Users, value: "100+", label: "Successful Projects" },
    { icon: TrendingUp, value: "300%", label: "Average ROI" },
    { icon: DollarSign, value: "$50M+", label: "Cost Savings Delivered" },
    { icon: Clock, value: "2M+", label: "Hours Saved" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 cyber-grid"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="neon-text-advanced">Success</span>
              <span className="holographic-text ml-4">Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover how we've transformed businesses across industries with cutting-edge AI and IT solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center cyber-card-advanced p-6">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-300">Real results from real clients</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="cyber-card-advanced p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {study.industry}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                  <p className="text-gray-300 mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                  <p className="text-gray-300 mb-4">{study.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{study.results.costReduction}</div>
                    <div className="text-sm text-gray-400">Cost Reduction</div>
                  </div>
                  <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{study.results.efficiencyGain}</div>
                    <div className="text-sm text-gray-400">Efficiency Gain</div>
                  </div>
                  <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{study.results.roi}</div>
                    <div className="text-sm text-gray-400">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-pink-400">{study.results.timeSaved}</div>
                    <div className="text-sm text-gray-400">Time Saved</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <blockquote className="text-gray-300 italic mb-4">
                    "{study.testimonial}"
                  </blockquote>
                  <div className="text-cyan-400 font-semibold">— {study.client}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies that have transformed their business with our AI and IT solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold group"
            >
              <span className="relative z-10">Start Your Project</span>
            </Link>
            <Link
              to="/demo"
              className="quantum-button px-8 py-4 text-lg font-semibold group"
            >
              <span className="relative z-10">Request Demo</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
