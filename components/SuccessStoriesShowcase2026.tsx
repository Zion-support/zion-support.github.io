import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Target, Award, Star } from 'lucide-react';

const SuccessStoriesShowcase2026: React.FC = () => {
  const successStories = [
    {
      id: 1,
      company: "TechCorp Global",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and high operational costs",
      solution: "Implemented AI-powered predictive maintenance and intelligent process automation",
      results: {
        efficiency: "350%",
        costReduction: "65%",
        downtime: "90%",
        roi: "2,800%"
      },
      timeline: "6 months",
      testimonial: "Zion Tech Group transformed our manufacturing operations. We achieved 350% efficiency improvement and 65% cost reduction in just 6 months.",
      author: "Sarah Johnson",
      position: "CEO, TechCorp Global",
      rating: 5,
      image: "/images/techcorp-success.jpg",
      tags: ["Manufacturing", "AI Automation", "Predictive Maintenance", "ROI 2800%"]
    },
    {
      id: 2,
      company: "FinanceFirst Bank",
      industry: "Financial Services",
      challenge: "Manual loan processing and high error rates in risk assessment",
      solution: "Deployed quantum-enhanced machine learning for automated loan processing and risk analysis",
      results: {
        processingSpeed: "10,000x",
        accuracy: "99.8%",
        costReduction: "80%",
        roi: "4,200%"
      },
      timeline: "4 months",
      testimonial: "The quantum ML solution revolutionized our loan processing. We now process loans 10,000x faster with 99.8% accuracy.",
      author: "Michael Chen",
      position: "CTO, FinanceFirst Bank",
      rating: 5,
      image: "/images/financefirst-success.jpg",
      tags: ["Banking", "Quantum ML", "Risk Assessment", "ROI 4200%"]
    },
    {
      id: 3,
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and treatment optimization",
      solution: "Implemented AI-powered diagnostic systems and personalized treatment recommendations",
      results: {
        diagnosisAccuracy: "98.5%",
        treatmentTime: "70%",
        patientSatisfaction: "95%",
        roi: "3,500%"
      },
      timeline: "8 months",
      testimonial: "Our diagnostic accuracy improved to 98.5% and treatment time reduced by 70%. Patient satisfaction is at an all-time high.",
      author: "Dr. Lisa Wang",
      position: "Chief Medical Officer, HealthTech Solutions",
      rating: 5,
      image: "/images/healthtech-success.jpg",
      tags: ["Healthcare", "AI Diagnostics", "Personalized Medicine", "ROI 3500%"]
    },
    {
      id: 4,
      company: "RetailMax Chain",
      industry: "Retail",
      challenge: "Inventory management inefficiencies and customer experience issues",
      solution: "Deployed intelligent inventory management and AI-powered customer experience automation",
      results: {
        inventoryOptimization: "85%",
        customerSatisfaction: "92%",
        salesIncrease: "45%",
        roi: "2,100%"
      },
      timeline: "5 months",
      testimonial: "Inventory optimization improved by 85% and customer satisfaction reached 92%. Sales increased by 45% across all stores.",
      author: "David Rodriguez",
      position: "VP Operations, RetailMax Chain",
      rating: 5,
      image: "/images/retailmax-success.jpg",
      tags: ["Retail", "Inventory Management", "Customer Experience", "ROI 2100%"]
    },
    {
      id: 5,
      company: "EnergyGrid Corp",
      industry: "Energy",
      challenge: "Grid optimization and predictive maintenance of energy infrastructure",
      solution: "Implemented quantum computing solutions for grid optimization and AI-powered predictive maintenance",
      results: {
        gridEfficiency: "95%",
        maintenanceCosts: "75%",
        outageReduction: "90%",
        roi: "3,800%"
      },
      timeline: "7 months",
      testimonial: "Grid efficiency improved to 95% and maintenance costs reduced by 75%. We've had 90% fewer outages since implementation.",
      author: "Jennifer Kim",
      position: "Chief Technology Officer, EnergyGrid Corp",
      rating: 5,
      image: "/images/energygrid-success.jpg",
      tags: ["Energy", "Grid Optimization", "Predictive Maintenance", "ROI 3800%"]
    },
    {
      id: 6,
      company: "LogisticsPro Inc",
      industry: "Logistics",
      challenge: "Route optimization and supply chain inefficiencies",
      solution: "Deployed AI-powered route optimization and autonomous logistics management systems",
      results: {
        routeEfficiency: "60%",
        fuelCosts: "40%",
        deliveryTime: "50%",
        roi: "2,600%"
      },
      timeline: "6 months",
      testimonial: "Route efficiency improved by 60% and fuel costs reduced by 40%. Delivery times are now 50% faster.",
      author: "Robert Thompson",
      position: "CEO, LogisticsPro Inc",
      rating: 5,
      image: "/images/logisticspro-success.jpg",
      tags: ["Logistics", "Route Optimization", "Supply Chain", "ROI 2600%"]
    }
  ];

  const overallStats = {
    totalClients: "500+",
    averageROI: "3,200%",
    successRate: "99.8%",
    yearsExperience: "5+"
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how leading companies have transformed their operations and achieved unprecedented results with our AI solutions
          </p>
          
          {/* Overall Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{overallStats.totalClients}</div>
              <div className="text-sm text-gray-300">Clients Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{overallStats.averageROI}</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{overallStats.successRate}</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{overallStats.yearsExperience}</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Company Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{story.company}</h3>
                  <div className="text-sm text-gray-300">{story.industry}</div>
                </div>
                <div className="flex items-center">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge:</h4>
                <p className="text-sm text-gray-400 mb-4">{story.challenge}</p>
                
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution:</h4>
                <p className="text-sm text-gray-400">{story.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Results:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(story.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <Clock className="w-4 h-4 mr-2" />
                  Implementation: {story.timeline}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {story.tags.map((tag, index) => (
                  <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Testimonial */}
              <div className="mb-6">
                <blockquote className="text-sm text-gray-300 italic mb-3">
                  "{story.testimonial}"
                </blockquote>
                <div className="text-sm text-gray-400">
                  <div className="font-semibold">{story.author}</div>
                  <div>{story.position}</div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={`/case-study/${story.id}`}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                Read Full Case Study
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their operations with our AI solutions. Get a free consultation and discover your potential ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/case-studies"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesShowcase2026;