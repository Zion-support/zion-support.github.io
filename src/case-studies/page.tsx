'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, Target, CheckCircle, BarChart, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: "Healthcare Giant Achieves 95% Diagnostic Accuracy with AI",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Manual diagnostic processes were causing delays and inconsistencies in patient care.",
      solution: "Implemented AI-powered diagnostic assistance system with computer vision and machine learning.",
      results: {
        accuracy: "95%",
        timeReduction: "70%",
        costSavings: "$2.5M",
        roi: "400%"
      },
      metrics: [
        { label: "Diagnostic Accuracy", value: "95%", icon: Target },
        { label: "Time Reduction", value: "70%", icon: Clock },
        { label: "Cost Savings", value: "$2.5M", icon: DollarSign },
        { label: "ROI", value: "400%", icon: TrendingUp }
      ],
      testimonial: "The AI system has revolutionized our diagnostic process. We're seeing faster, more accurate diagnoses and significantly improved patient outcomes.",
      author: "Dr. Sarah Johnson, Chief Medical Officer",
      duration: "6 months",
      teamSize: "15 AI specialists",
      technologies: ["Computer Vision", "Machine Learning", "Natural Language Processing"],
      featured: true
    },
    {
      id: 2,
      title: "Financial Services Firm Reduces Fraud by 99.9% with AI",
      company: "Global Finance Corp",
      industry: "Finance",
      challenge: "Increasing fraud attempts were costing millions in losses and damaging customer trust.",
      solution: "Deployed advanced AI fraud detection system with real-time monitoring and behavioral analysis.",
      results: {
        fraudReduction: "99.9%",
        falsePositives: "85%",
        costSavings: "$15M",
        roi: "500%"
      },
      metrics: [
        { label: "Fraud Reduction", value: "99.9%", icon: Shield },
        { label: "False Positives", value: "85%", icon: BarChart },
        { label: "Cost Savings", value: "$15M", icon: DollarSign },
        { label: "ROI", value: "500%", icon: TrendingUp }
      ],
      testimonial: "Our AI fraud detection system has been a game-changer. We've virtually eliminated fraud while reducing false positives by 85%.",
      author: "Michael Chen, Chief Security Officer",
      duration: "4 months",
      teamSize: "12 AI specialists",
      technologies: ["Machine Learning", "Behavioral Analytics", "Real-time Processing"],
      featured: true
    },
    {
      id: 3,
      title: "Manufacturing Company Achieves 40% Efficiency Gain with AI Automation",
      company: "Industrial Manufacturing Ltd",
      industry: "Manufacturing",
      challenge: "Manual quality control processes were slow and prone to human error, affecting production efficiency.",
      solution: "Implemented AI-powered quality control system with computer vision and predictive maintenance.",
      results: {
        efficiency: "40%",
        defectReduction: "90%",
        costSavings: "$8M",
        roi: "350%"
      },
      metrics: [
        { label: "Efficiency Gain", value: "40%", icon: Zap },
        { label: "Defect Reduction", value: "90%", icon: Target },
        { label: "Cost Savings", value: "$8M", icon: DollarSign },
        { label: "ROI", value: "350%", icon: TrendingUp }
      ],
      testimonial: "The AI automation has transformed our production line. We're producing higher quality products faster than ever before.",
      author: "Lisa Rodriguez, Operations Director",
      duration: "8 months",
      teamSize: "20 AI specialists",
      technologies: ["Computer Vision", "Predictive Analytics", "IoT Integration"],
      featured: false
    },
    {
      id: 4,
      title: "Retail Chain Increases Sales by 60% with AI Personalization",
      company: "Mega Retail Group",
      industry: "Retail",
      challenge: "Generic marketing approaches were failing to engage customers and drive sales growth.",
      solution: "Deployed AI-powered personalization engine with customer behavior analysis and recommendation systems.",
      results: {
        salesIncrease: "60%",
        customerEngagement: "80%",
        revenueGrowth: "$25M",
        roi: "450%"
      },
      metrics: [
        { label: "Sales Increase", value: "60%", icon: TrendingUp },
        { label: "Customer Engagement", value: "80%", icon: Users },
        { label: "Revenue Growth", value: "$25M", icon: DollarSign },
        { label: "ROI", value: "450%", icon: BarChart }
      ],
      testimonial: "AI personalization has revolutionized our customer experience. We're seeing unprecedented engagement and sales growth.",
      author: "David Park, Chief Marketing Officer",
      duration: "5 months",
      teamSize: "18 AI specialists",
      technologies: ["Machine Learning", "Recommendation Systems", "Customer Analytics"],
      featured: true
    },
    {
      id: 5,
      title: "Logistics Company Optimizes Routes and Reduces Costs by 35%",
      company: "Global Logistics Inc",
      industry: "Logistics",
      challenge: "Inefficient routing and fleet management were driving up costs and delivery times.",
      solution: "Implemented AI-powered route optimization and fleet management system with predictive analytics.",
      results: {
        costReduction: "35%",
        deliveryTime: "50%",
        fuelSavings: "30%",
        roi: "300%"
      },
      metrics: [
        { label: "Cost Reduction", value: "35%", icon: DollarSign },
        { label: "Delivery Time", value: "50%", icon: Clock },
        { label: "Fuel Savings", value: "30%", icon: Zap },
        { label: "ROI", value: "300%", icon: TrendingUp }
      ],
      testimonial: "Our AI optimization system has made us the most efficient logistics company in the region. The cost savings are remarkable.",
      author: "Jennifer Lee, Chief Operations Officer",
      duration: "7 months",
      teamSize: "14 AI specialists",
      technologies: ["Optimization Algorithms", "Predictive Analytics", "IoT Sensors"],
      featured: false
    },
    {
      id: 6,
      title: "Education Platform Improves Learning Outcomes by 75% with AI",
      company: "EduTech Solutions",
      industry: "Education",
      challenge: "One-size-fits-all learning approaches were failing to meet individual student needs.",
      solution: "Developed AI-powered adaptive learning platform with personalized content and progress tracking.",
      results: {
        learningOutcomes: "75%",
        studentEngagement: "90%",
        completionRate: "85%",
        roi: "400%"
      },
      metrics: [
        { label: "Learning Outcomes", value: "75%", icon: Target },
        { label: "Student Engagement", value: "90%", icon: Users },
        { label: "Completion Rate", value: "85%", icon: CheckCircle },
        { label: "ROI", value: "400%", icon: TrendingUp }
      ],
      testimonial: "AI has transformed how students learn. We're seeing remarkable improvements in outcomes and engagement across all age groups.",
      author: "Dr. Robert Kim, Chief Academic Officer",
      duration: "9 months",
      teamSize: "22 AI specialists",
      technologies: ["Adaptive Learning", "Natural Language Processing", "Learning Analytics"],
      featured: false
    }
  ];

  const industries = ['all', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Logistics', 'Education'];

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedIndustry === 'all' || study.industry === selectedIndustry
  );

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  return (
    <>
      <SEOOptimizer
        title="AI Success Stories & Case Studies - Zion Tech Group"
        description="Discover how our AI solutions have transformed businesses across industries. Real case studies showing 300%+ ROI and significant efficiency gains."
        keywords={['AI case studies', 'AI success stories', 'enterprise AI', 'AI ROI', 'AI implementation', 'business transformation']}
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              AI Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how our AI solutions have transformed businesses across industries, delivering measurable results and unprecedented ROI.
            </p>
            
            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {industries.map(industry => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedIndustry === industry
                      ? 'bg-cyan-400 text-slate-900 font-semibold'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Case Studies */}
          {selectedIndustry === 'all' && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 neon-text">Featured Success Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredCaseStudies.map((study) => (
                  <article key={study.id} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <BarChart className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{study.title}</h3>
                        <p className="text-cyan-400 font-semibold">{study.company}</p>
                        <p className="text-gray-400 text-sm">{study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.metrics.slice(0, 4).map((metric, index) => (
                        <div key={index} className="text-center p-3 bg-slate-800/50 rounded-lg">
                          <metric.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <blockquote className="border-l-4 border-cyan-400 pl-4 mb-4">
                      <p className="text-gray-300 italic text-sm">"{study.testimonial}"</p>
                      <cite className="text-cyan-400 text-sm font-semibold">— {study.author}</cite>
                    </blockquote>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Duration: {study.duration}</span>
                      <span>Team: {study.teamSize}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* All Case Studies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8 neon-text">
              {selectedIndustry === 'all' ? 'All Case Studies' : `${selectedIndustry} Case Studies`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCaseStudies.map((study) => (
                <article key={study.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <BarChart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{study.title}</h3>
                      <p className="text-cyan-400 text-sm font-semibold">{study.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {study.metrics.slice(0, 4).map((metric, index) => (
                      <div key={index} className="text-center p-2 bg-slate-800/50 rounded">
                        <div className="text-lg font-bold text-white">{metric.value}</div>
                        <div className="text-xs text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.slice(0, 2).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/case-studies/${study.id}`}
                      className="text-cyan-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
                    >
                      View Details <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-2">No case studies found</h3>
                <p className="text-gray-400">Try selecting a different industry filter.</p>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="mt-16 text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-6">
                Join hundreds of companies that have already achieved remarkable results with our AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="cyber-button px-8 py-3 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your AI Journey
                </Link>
                <Link 
                  to="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Pricing
                </Link>
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