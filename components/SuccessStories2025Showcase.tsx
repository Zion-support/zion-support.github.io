import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Users, DollarSign, Clock, Star } from 'lucide-react';

const SuccessStories2025Showcase: React.FC = () => {
  const successStories = [
    {
      id: 1,
      company: "TechCorp Global",
      industry: "Manufacturing",
      challenge: "Manual quality control processes causing 15% defect rate and production delays",
      solution: "AI-powered autonomous quality control system with real-time defect detection",
      results: {
        roi: "2,800%",
        efficiency: "95%",
        costReduction: "70%",
        accuracy: "99.8%"
      },
      timeline: "6 months",
      testimonial: "The AI automation system transformed our production line. We've seen unprecedented improvements in quality and efficiency.",
      author: "Sarah Johnson, CTO",
      image: "/images/techcorp-logo.png",
      tags: ["Manufacturing", "Quality Control", "AI Automation"]
    },
    {
      id: 2,
      company: "HealthFirst Medical",
      industry: "Healthcare",
      challenge: "Manual patient diagnosis leading to 20% misdiagnosis rate and delayed treatments",
      solution: "Quantum-enhanced AI diagnostic system with predictive analytics",
      results: {
        roi: "3,200%",
        efficiency: "90%",
        costReduction: "60%",
        accuracy: "99.9%"
      },
      timeline: "4 months",
      testimonial: "Our diagnostic accuracy improved dramatically. Patients are getting faster, more accurate treatments.",
      author: "Dr. Michael Chen, Chief Medical Officer",
      image: "/images/healthfirst-logo.png",
      tags: ["Healthcare", "Diagnostics", "Quantum AI"]
    },
    {
      id: 3,
      company: "FinanceMax Bank",
      industry: "Financial Services",
      challenge: "Manual risk assessment processes taking 3 days per application with 25% error rate",
      solution: "Autonomous risk assessment AI with real-time fraud detection",
      results: {
        roi: "2,500%",
        efficiency: "85%",
        costReduction: "75%",
        accuracy: "99.7%"
      },
      timeline: "3 months",
      testimonial: "The AI system processes applications in minutes instead of days, with incredible accuracy.",
      author: "Jennifer Martinez, Head of Risk Management",
      image: "/images/financemax-logo.png",
      tags: ["Finance", "Risk Assessment", "Fraud Detection"]
    },
    {
      id: 4,
      company: "RetailGiant Corp",
      industry: "Retail",
      challenge: "Inventory management inefficiencies causing 30% stockouts and 20% overstock",
      solution: "Predictive inventory management AI with demand forecasting",
      results: {
        roi: "2,200%",
        efficiency: "88%",
        costReduction: "65%",
        accuracy: "96%"
      },
      timeline: "5 months",
      testimonial: "Our inventory optimization has been revolutionary. Stockouts are virtually eliminated.",
      author: "Robert Kim, VP of Operations",
      image: "/images/retailgiant-logo.png",
      tags: ["Retail", "Inventory", "Predictive Analytics"]
    },
    {
      id: 5,
      company: "EnergySolutions Inc",
      industry: "Energy",
      challenge: "Manual grid management leading to 12% energy waste and frequent outages",
      solution: "Smart grid AI with autonomous energy distribution and load balancing",
      results: {
        roi: "3,500%",
        efficiency: "92%",
        costReduction: "80%",
        accuracy: "99.5%"
      },
      timeline: "8 months",
      testimonial: "The smart grid AI has transformed our energy distribution. Efficiency is at an all-time high.",
      author: "Lisa Thompson, Chief Technology Officer",
      image: "/images/energysolutions-logo.png",
      tags: ["Energy", "Smart Grid", "Load Balancing"]
    },
    {
      id: 6,
      company: "LogisticsPro",
      industry: "Logistics",
      challenge: "Route optimization inefficiencies causing 25% delivery delays and high fuel costs",
      solution: "AI-powered logistics optimization with real-time route planning",
      results: {
        roi: "2,700%",
        efficiency: "90%",
        costReduction: "70%",
        accuracy: "98%"
      },
      timeline: "4 months",
      testimonial: "Our delivery efficiency has skyrocketed. Customers are happier, costs are lower.",
      author: "David Wilson, Operations Director",
      image: "/images/logisticspro-logo.png",
      tags: ["Logistics", "Route Optimization", "Delivery"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-lg font-bold mb-6">
            <Star className="w-5 h-5" />
            SUCCESS STORIES 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Proven Results
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Real Companies, Real Impact
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how leading companies across industries have achieved unprecedented success with our AI solutions. 
            From 2,200% to 3,500% ROI, these case studies showcase the transformative power of our technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {successStories.map((story) => (
            <div key={story.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {story.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {story.company}
                    </h3>
                    <p className="text-gray-400 text-lg">{story.industry}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                <p className="text-gray-300 mb-4">{story.challenge}</p>
                <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                <p className="text-gray-300">{story.solution}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">ROI</div>
                  <div className="text-2xl font-bold text-yellow-400">
                    {story.results.roi}
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Efficiency</div>
                  <div className="text-2xl font-bold text-green-400">
                    {story.results.efficiency}
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Cost Reduction</div>
                  <div className="text-2xl font-bold text-blue-400">
                    {story.results.costReduction}
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Accuracy</div>
                  <div className="text-2xl font-bold text-purple-400">
                    {story.results.accuracy}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-xl p-6 mb-6">
                <blockquote className="text-gray-300 italic mb-4">
                  "{story.testimonial}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{story.author}</div>
                    <div className="text-sm text-gray-400">{story.company}</div>
                  </div>
                  <div className="text-sm text-gray-400">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {story.timeline}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag, index) => (
                    <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/case-studies/${story.id}`}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                >
                  Read Full Case Study
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with the same AI solutions that have delivered exceptional results for industry leaders. 
              Our proven track record speaks for itself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-lg text-gray-300">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2,500%</div>
              <div className="text-lg text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-lg text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-lg text-gray-300">Support Available</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-2xl font-bold text-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center gap-3 shadow-2xl"
            >
              Start Your Success Story
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link 
              to="/case-studies"
              className="bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories2025Showcase;