import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, DollarSign, Target, CheckCircle, Star, Award } from 'lucide-react';

export default function AISuccessStories2025() {
  const successStories = [
    {
      company: "TechCorp Global",
      industry: "Manufacturing",
      challenge: "Manual quality control processes causing 15% defect rate",
      solution: "AI-powered computer vision system for real-time quality inspection",
      results: {
        roi: "2,500%",
        efficiency: "95%",
        costReduction: "60%",
        accuracy: "99.8%"
      },
      timeline: "6 months",
      testimonial: "The AI implementation transformed our entire production line. We've never seen such dramatic improvements in such a short time.",
      author: "Sarah Johnson, CTO",
      featured: true
    },
    {
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      challenge: "Manual fraud detection missing 8% of fraudulent transactions",
      solution: "Advanced AI fraud detection system with real-time analysis",
      results: {
        roi: "1,800%",
        efficiency: "90%",
        costReduction: "45%",
        accuracy: "99.5%"
      },
      timeline: "4 months",
      testimonial: "Our fraud detection accuracy improved dramatically while reducing false positives by 70%. The ROI was immediate.",
      author: "Michael Chen, Head of Security",
      featured: true
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Manual patient data analysis taking 40 hours per week",
      solution: "AI-powered medical data analysis and diagnostic assistance system",
      results: {
        roi: "3,200%",
        efficiency: "98%",
        costReduction: "75%",
        accuracy: "99.9%"
      },
      timeline: "8 months",
      testimonial: "The AI system not only saved us time but also improved diagnostic accuracy. It's been a game-changer for our practice.",
      author: "Dr. Emily Rodriguez, Chief Medical Officer",
      featured: false
    },
    {
      company: "RetailMax",
      industry: "Retail",
      challenge: "Inventory management causing 20% stockouts and overstock",
      solution: "Predictive AI system for demand forecasting and inventory optimization",
      results: {
        roi: "1,900%",
        efficiency: "85%",
        costReduction: "50%",
        accuracy: "97%"
      },
      timeline: "5 months",
      testimonial: "Our inventory turnover improved by 40% and we eliminated stockouts completely. The AI predictions are incredibly accurate.",
      author: "David Kim, Operations Director",
      featured: false
    },
    {
      company: "LogiChain Pro",
      industry: "Logistics",
      challenge: "Route optimization causing 25% fuel waste and delays",
      solution: "AI-powered route optimization and predictive maintenance system",
      results: {
        roi: "2,100%",
        efficiency: "92%",
        costReduction: "55%",
        accuracy: "98%"
      },
      timeline: "7 months",
      testimonial: "Fuel costs dropped by 55% and delivery times improved by 30%. The AI system pays for itself every month.",
      author: "Lisa Wang, Fleet Manager",
      featured: false
    },
    {
      company: "EduTech Academy",
      industry: "Education",
      challenge: "Manual student performance tracking and personalized learning",
      solution: "AI-powered learning analytics and personalized education platform",
      results: {
        roi: "2,800%",
        efficiency: "88%",
        costReduction: "65%",
        accuracy: "96%"
      },
      timeline: "9 months",
      testimonial: "Student engagement increased by 60% and learning outcomes improved significantly. The AI personalization is remarkable.",
      author: "Professor James Wilson, Academic Director",
      featured: false
    }
  ];

  const stats = [
    { label: "Average ROI", value: "2,400%", icon: TrendingUp },
    { label: "Companies Transformed", value: "500+", icon: Users },
    { label: "Total Savings", value: "$2.5B+", icon: DollarSign },
    { label: "Success Rate", value: "99.2%", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium mb-8">
            <Award className="w-4 h-4 mr-2" />
            AI Success Stories 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Real
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Success Stories</span>
            <br />
            from AI Implementation
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover how leading companies across industries have achieved unprecedented results 
            with our AI solutions. Real stories, real results, real transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#success-stories" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              View Success Stories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Start Your Success Story
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Featured Success Stories
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {successStories.filter(story => story.featured).map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{story.company}</h3>
                    <p className="text-gray-400">{story.industry}</p>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 mb-4">{story.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-gray-300 mb-4">{story.solution}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400">{story.results.roi}</div>
                    <div className="text-gray-300 text-sm">ROI</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400">{story.results.efficiency}</div>
                    <div className="text-gray-300 text-sm">Efficiency</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400">{story.results.costReduction}</div>
                    <div className="text-gray-300 text-sm">Cost Reduction</div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400">{story.results.accuracy}</div>
                    <div className="text-gray-300 text-sm">Accuracy</div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-purple-500 pl-4 mb-4">
                  <p className="text-gray-300 italic">"{story.testimonial}"</p>
                  <cite className="text-purple-400 font-medium">- {story.author}</cite>
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Implementation: {story.timeline}
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Success Stories */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            All Success Stories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{story.company}</h3>
                  {story.featured && (
                    <div className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                
                <p className="text-gray-400 mb-4">{story.industry}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400">{story.results.roi}</div>
                    <div className="text-gray-300 text-xs">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400">{story.results.efficiency}</div>
                    <div className="text-gray-300 text-xs">Efficiency</div>
                  </div>
                </div>
                
                <blockquote className="text-gray-300 text-sm italic mb-4">
                  "{story.testimonial.substring(0, 100)}..."
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{story.timeline}</span>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join hundreds of companies that have already transformed their business with our AI solutions. 
            Let us help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/ai-implementation-guide-2025" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              View Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}