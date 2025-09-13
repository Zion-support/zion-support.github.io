import React from 'react';
import { Metadata } from 'next';
import { Star, TrendingUp, Users, DollarSign, Award, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Success Stories 2025 - Real Results from AI Implementation | Zion Tech Group',
  description: 'Discover how leading companies achieved remarkable results with our AI solutions. Real case studies, proven ROI, and transformative business outcomes.',
  keywords: 'AI success stories, case studies, business transformation, ROI, AI implementation results',
  openGraph: {
    title: 'Success Stories 2025 - Real AI Implementation Results',
    description: 'See how companies achieved 500%+ ROI with our AI solutions. Real case studies and proven results.',
    type: 'website',
  },
};

const successStories = [
  {
    id: 1,
    company: "TechCorp Global",
    industry: "Technology",
    logo: "🏢",
    challenge: "Manual data processing causing 40% operational delays",
    solution: "Implemented AI-powered automation system",
    results: {
      efficiency: "85%",
      costReduction: "60%",
      timeSaved: "2000 hours/month",
      roi: "450%"
    },
    testimonial: "The AI implementation transformed our entire operation. We've never seen such dramatic improvements in such a short time.",
    author: "Sarah Johnson, CEO",
    rating: 5
  },
  {
    id: 2,
    company: "FinanceFlow Inc",
    industry: "Financial Services",
    logo: "💼",
    challenge: "Fraud detection accuracy below 70%",
    solution: "Deployed advanced AI security algorithms",
    results: {
      efficiency: "95%",
      costReduction: "45%",
      timeSaved: "1500 hours/month",
      roi: "320%"
    },
    testimonial: "Our fraud detection is now 99.7% accurate. This AI system has saved us millions in potential losses.",
    author: "Michael Chen, CTO",
    rating: 5
  },
  {
    id: 3,
    company: "HealthTech Solutions",
    industry: "Healthcare",
    logo: "🏥",
    challenge: "Patient diagnosis taking 3-5 days",
    solution: "AI-powered diagnostic assistance platform",
    results: {
      efficiency: "90%",
      costReduction: "55%",
      timeSaved: "3000 hours/month",
      roi: "680%"
    },
    testimonial: "We can now diagnose complex cases in minutes instead of days. This is revolutionary for patient care.",
    author: "Dr. Emily Rodriguez, Chief Medical Officer",
    rating: 5
  },
  {
    id: 4,
    company: "RetailMax",
    industry: "Retail",
    logo: "🛍️",
    challenge: "Inventory management causing 30% waste",
    solution: "AI-driven predictive analytics system",
    results: {
      efficiency: "80%",
      costReduction: "50%",
      timeSaved: "2500 hours/month",
      roi: "520%"
    },
    testimonial: "Our inventory accuracy improved from 70% to 98%. The AI predictions are incredibly accurate.",
    author: "David Park, Operations Director",
    rating: 5
  },
  {
    id: 5,
    company: "ManufacturingPro",
    industry: "Manufacturing",
    logo: "🏭",
    challenge: "Quality control defects at 15%",
    solution: "Computer vision AI quality inspection",
    results: {
      efficiency: "92%",
      costReduction: "65%",
      timeSaved: "4000 hours/month",
      roi: "750%"
    },
    testimonial: "Defect rates dropped to 0.5%. The AI system catches issues humans would miss every time.",
    author: "Lisa Thompson, Quality Manager",
    rating: 5
  },
  {
    id: 6,
    company: "EduTech Academy",
    industry: "Education",
    logo: "🎓",
    challenge: "Student performance tracking was manual",
    solution: "AI-powered learning analytics platform",
    results: {
      efficiency: "88%",
      costReduction: "40%",
      timeSaved: "1800 hours/month",
      roi: "380%"
    },
    testimonial: "Student outcomes improved by 40%. The AI insights help us personalize learning like never before.",
    author: "Professor James Wilson, Academic Director",
    rating: 5
  }
];

const overallStats = [
  { label: "Companies Transformed", value: "10,000+", icon: Users },
  { label: "Average ROI", value: "520%", icon: TrendingUp },
  { label: "Cost Savings", value: "$2.5B+", icon: DollarSign },
  { label: "Time Saved", value: "50M+ hours", icon: Award }
];

export default function SuccessStories2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-8">
            <span className="text-blue-300 text-sm font-medium">✨ Real Success Stories</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Success Stories
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              2025
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how leading companies achieved remarkable results with our AI solutions. Real case studies, proven ROI, and transformative business outcomes.
          </p>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {overallStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Results from Real Companies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how companies across industries achieved extraordinary results with our AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                {/* Company Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{story.logo}</div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{story.company}</h3>
                      <p className="text-sm text-gray-400">{story.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-300 mb-2">Challenge:</h4>
                  <p className="text-sm text-gray-300 mb-4">{story.challenge}</p>
                  
                  <h4 className="text-sm font-semibold text-green-300 mb-2">Solution:</h4>
                  <p className="text-sm text-gray-300">{story.solution}</p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{story.results.efficiency}</div>
                    <div className="text-xs text-gray-400">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{story.results.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{story.results.costReduction}</div>
                    <div className="text-xs text-gray-400">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{story.results.timeSaved}</div>
                    <div className="text-xs text-gray-400">Time Saved</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-300 italic mb-2">"{story.testimonial}"</p>
                  <p className="text-xs text-gray-400">- {story.author}</p>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 font-medium rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300">
                  View Full Case Study
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Proven Results Across Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions have delivered consistent, measurable results across every industry we serve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">99.7%</h3>
                <p className="text-gray-300">Client Satisfaction Rate</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">520%</h3>
                <p className="text-gray-300">Average ROI</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-gray-300">Industry Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve similar results. Schedule a consultation to discover how our AI solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
              Start Your Success Story
            </button>
            <button className="px-8 py-4 border border-blue-500 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
              Download Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}