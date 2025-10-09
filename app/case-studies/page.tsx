'use client';
import React from 'react';
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, CheckCircle, Star, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing: 70% Cost Reduction with AI Automation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Manual processes causing 40% production delays and $50M annual losses",
      solution: "AI-powered autonomous production system with predictive maintenance",
      results: {
        costReduction: "70%",
        efficiencyGain: "300%",
        timeSaved: "2,000 hours/month",
        roi: "450%"
      },
      duration: "6 months",
      teamSize: "15 AI engineers",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Provider: AI-Powered Patient Care Optimization",
      company: "Metro Health Systems",
      industry: "Healthcare",
      challenge: "Patient wait times averaging 3+ hours, staff burnout at 60%",
      solution: "AI scheduling system with predictive analytics and resource optimization",
      results: {
        costReduction: "45%",
        efficiencyGain: "180%",
        timeSaved: "1,500 hours/month",
        roi: "320%"
      },
      duration: "4 months",
      teamSize: "12 AI specialists",
      featured: true
    },
    {
      id: 3,
      title: "Financial Services: Quantum-Enhanced Risk Assessment",
      company: "Premier Financial Group",
      industry: "Financial Services",
      challenge: "Manual risk assessment taking 2 weeks per application, 30% error rate",
      solution: "Quantum AI algorithms for real-time risk analysis and fraud detection",
      results: {
        costReduction: "60%",
        efficiencyGain: "500%",
        timeSaved: "800 hours/month",
        roi: "380%"
      },
      duration: "8 months",
      teamSize: "20 quantum AI experts",
      featured: false
    },
    {
      id: 4,
      title: "E-commerce Giant: AI-Driven Personalization Engine",
      company: "ShopGlobal Inc",
      industry: "E-commerce",
      challenge: "Low conversion rates (2.1%) and high cart abandonment (78%)",
      solution: "Advanced AI personalization with real-time recommendation engine",
      results: {
        costReduction: "35%",
        efficiencyGain: "250%",
        timeSaved: "1,200 hours/month",
        roi: "280%"
      },
      duration: "5 months",
      teamSize: "18 AI engineers",
      featured: false
    },
    {
      id: 5,
      title: "Logistics Company: Autonomous Supply Chain Optimization",
      company: "TransGlobal Logistics",
      industry: "Logistics",
      challenge: "Supply chain disruptions causing $25M annual losses",
      solution: "AI-powered autonomous supply chain with predictive analytics",
      results: {
        costReduction: "55%",
        efficiencyGain: "220%",
        timeSaved: "1,800 hours/month",
        roi: "340%"
      },
      duration: "7 months",
      teamSize: "16 AI specialists",
      featured: false
    },
    {
      id: 6,
      title: "Energy Sector: Smart Grid AI Management System",
      company: "PowerGrid Solutions",
      industry: "Energy",
      challenge: "Grid inefficiencies causing 15% energy waste and frequent outages",
      solution: "AI-powered smart grid with autonomous load balancing",
      results: {
        costReduction: "40%",
        efficiencyGain: "190%",
        timeSaved: "1,000 hours/month",
        roi: "290%"
      },
      duration: "9 months",
      teamSize: "22 AI engineers",
      featured: false
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+", icon: CheckCircle },
    { label: "Average ROI", value: "340%", icon: TrendingUp },
    { label: "Cost Savings", value: "$2.5B+", icon: DollarSign },
    { label: "Time Saved", value: "50,000+ hours", icon: Clock }
  ];

  return (
    <>
      <SEOEnhancer
        title="AI Success Stories & Case Studies - Zion Tech Group"
        description="Discover how leading companies achieved remarkable results with our AI solutions. Real case studies showing 70% cost reduction, 300% efficiency gains, and 340% average ROI."
        keywords={['ai case studies', 'ai success stories', 'enterprise ai results', 'ai roi', 'ai cost savings', 'ai automation success']}
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover how leading companies achieved remarkable results with our AI solutions. 
              Real case studies showing measurable business impact and transformative outcomes.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Case Studies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">Featured Case Studies</h2>
            <div className="space-y-12">
              {caseStudies.filter(study => study.featured).map((study) => (
                <div key={study.id} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                          {study.industry}
                        </span>
                        <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">
                          {study.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        <strong>Challenge:</strong> {study.challenge}
                      </p>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        <strong>Solution:</strong> {study.solution}
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{study.results.costReduction}</div>
                          <div className="text-gray-300 text-sm">Cost Reduction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">{study.results.efficiencyGain}</div>
                          <div className="text-gray-300 text-sm">Efficiency Gain</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">{study.results.timeSaved}</div>
                          <div className="text-gray-300 text-sm">Time Saved</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-yellow-400">{study.results.roi}</div>
                          <div className="text-gray-300 text-sm">ROI</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {study.teamSize}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {study.duration}
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Results</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">Reduced operational costs by {study.results.costReduction}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">Increased efficiency by {study.results.efficiencyGain}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">Saved {study.results.timeSaved} monthly</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">Achieved {study.results.roi} ROI</span>
                        </div>
                      </div>
                      <button className="w-full mt-6 cyber-button py-3 font-semibold hover:scale-105 transition-all duration-300">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Case Studies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs">
                      {study.industry}
                    </span>
                    <span className="px-2 py-1 bg-purple-400/20 text-purple-400 rounded-full text-xs">
                      {study.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">{study.results.costReduction}</div>
                      <div className="text-gray-300 text-xs">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{study.results.efficiencyGain}</div>
                      <div className="text-gray-300 text-xs">Efficiency Gain</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{study.teamSize}</span>
                    <button className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industry Focus */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Manufacturing", projects: "120+", avgROI: "380%" },
                { name: "Healthcare", projects: "85+", avgROI: "320%" },
                { name: "Financial Services", projects: "95+", avgROI: "350%" },
                { name: "E-commerce", projects: "110+", avgROI: "290%" },
                { name: "Logistics", projects: "75+", avgROI: "340%" },
                { name: "Energy", projects: "60+", avgROI: "310%" }
              ].map((industry, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{industry.projects}</div>
                  <div className="text-gray-300 text-sm mb-2">Projects Completed</div>
                  <div className="text-lg font-bold text-green-400">{industry.avgROI}</div>
                  <div className="text-gray-300 text-sm">Average ROI</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Create Your Success Story?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join hundreds of companies that have transformed their operations with our AI solutions. 
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Our Services
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;