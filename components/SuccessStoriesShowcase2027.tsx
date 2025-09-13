import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Star,
  BarChart3,
  Target,
  Zap,
  Shield,
  Brain,
  Cpu,
  Database,
  Rocket,
  Globe,
  Building2
} from 'lucide-react';

const SuccessStoriesShowcase2027: React.FC = () => {
  const successStories = [
    {
      id: 1,
      company: "TechCorp Solutions",
      industry: "Manufacturing",
      logo: "/api/placeholder/80/80",
      challenge: "Inefficient production line causing 30% waste",
      solution: "AI-powered optimization system",
      results: {
        roi: "3,200%",
        efficiency: "+85%",
        costSavings: "$2.5M",
        timeframe: "6 months"
      },
      testimonial: "The AI optimization system transformed our production line. We achieved 85% efficiency improvement and saved $2.5M in the first year alone.",
      author: "Sarah Johnson",
      position: "CEO, TechCorp Solutions",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      company: "DataFlow Inc",
      industry: "Finance",
      logo: "/api/placeholder/80/80",
      challenge: "High fraud rates costing millions annually",
      solution: "Advanced AI fraud detection system",
      results: {
        roi: "4,800%",
        fraudReduction: "99.2%",
        costSavings: "$8.2M",
        timeframe: "4 months"
      },
      testimonial: "Our fraud detection system now catches 99.2% of fraudulent transactions. The ROI has been incredible at 4,800%.",
      author: "Michael Chen",
      position: "CTO, DataFlow Inc",
      rating: 5,
      featured: true
    },
    {
      id: 3,
      company: "CloudScale Systems",
      industry: "Healthcare",
      logo: "/api/placeholder/80/80",
      challenge: "Patient care inefficiencies and high costs",
      solution: "Predictive patient care analytics",
      results: {
        roi: "2,900%",
        patientOutcomes: "+92%",
        costSavings: "$5.1M",
        timeframe: "8 months"
      },
      testimonial: "The predictive analytics system improved patient outcomes by 92% while reducing costs by $5.1M annually.",
      author: "Dr. Emily Rodriguez",
      position: "Chief Medical Officer, CloudScale Systems",
      rating: 5,
      featured: false
    },
    {
      id: 4,
      company: "RetailMax Corp",
      industry: "Retail",
      logo: "/api/placeholder/80/80",
      challenge: "Inventory management and demand forecasting",
      solution: "AI-powered inventory optimization",
      results: {
        roi: "1,800%",
        inventoryAccuracy: "+95%",
        costSavings: "$3.8M",
        timeframe: "5 months"
      },
      testimonial: "Our inventory accuracy improved to 95% and we reduced waste by $3.8M. The AI system is incredibly accurate.",
      author: "David Thompson",
      position: "Operations Director, RetailMax Corp",
      rating: 5,
      featured: false
    },
    {
      id: 5,
      company: "EnergyFlow Ltd",
      industry: "Energy",
      logo: "/api/placeholder/80/80",
      challenge: "Energy consumption optimization",
      solution: "Smart energy management system",
      results: {
        roi: "2,400%",
        energySavings: "40%",
        costSavings: "$4.2M",
        timeframe: "7 months"
      },
      testimonial: "We reduced energy consumption by 40% and saved $4.2M annually. The smart energy system is revolutionary.",
      author: "Lisa Wang",
      position: "Sustainability Director, EnergyFlow Ltd",
      rating: 5,
      featured: false
    },
    {
      id: 6,
      company: "LogiChain Global",
      industry: "Logistics",
      logo: "/api/placeholder/80/80",
      challenge: "Supply chain optimization and delivery efficiency",
      solution: "AI-powered logistics optimization",
      results: {
        roi: "3,600%",
        deliverySpeed: "+70%",
        costSavings: "$6.1M",
        timeframe: "6 months"
      },
      testimonial: "Our delivery speed improved by 70% and we saved $6.1M in logistics costs. The AI optimization is game-changing.",
      author: "James Wilson",
      position: "Logistics Director, LogiChain Global",
      rating: 5,
      featured: true
    }
  ];

  const industryStats = [
    { industry: "Manufacturing", avgROI: "2,800%", projects: 150 },
    { industry: "Finance", avgROI: "3,200%", projects: 120 },
    { industry: "Healthcare", avgROI: "2,500%", projects: 95 },
    { industry: "Retail", avgROI: "2,100%", projects: 180 },
    { industry: "Energy", avgROI: "2,600%", projects: 75 },
    { industry: "Logistics", avgROI: "3,000%", projects: 110 }
  ];

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case "Manufacturing": return Building2;
      case "Finance": return BarChart3;
      case "Healthcare": return Shield;
      case "Retail": return Globe;
      case "Energy": return Zap;
      case "Logistics": return Rocket;
      default: return Target;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Success Stories Showcase 2027
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real companies. Discover how our AI solutions have transformed 
            businesses across industries, delivering unprecedented ROI and growth.
          </p>
        </div>

        {/* Industry Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {industryStats.map((stat, index) => {
            const IconComponent = getIndustryIcon(stat.industry);
            return (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{stat.industry}</h3>
                <div className="text-2xl font-bold text-green-400 mb-1">{stat.avgROI}</div>
                <div className="text-sm text-gray-400">Average ROI</div>
                <div className="text-sm text-gray-300 mt-2">{stat.projects} Projects</div>
              </div>
            );
          })}
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {successStories.map((story) => (
            <div
              key={story.id}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:bg-white/10 ${
                story.featured 
                  ? 'border-yellow-400/50 hover:border-yellow-400' 
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              {story.featured && (
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-bold text-sm">Featured Success Story</span>
                </div>
              )}

              {/* Company Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{story.company}</h3>
                  <p className="text-gray-400">{story.industry}</p>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-300 mb-2">Challenge:</h4>
                  <p className="text-gray-400 text-sm">{story.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-300 mb-2">Solution:</h4>
                  <p className="text-gray-400 text-sm">{story.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">{story.results.roi}</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{story.results.costSavings}</div>
                  <div className="text-xs text-gray-400">Cost Savings</div>
                </div>
              </div>

              {/* Testimonial */}
              <blockquote className="text-gray-300 text-sm italic mb-4">
                "{story.testimonial}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">{story.author}</div>
                  <div className="text-gray-400 text-xs">{story.position}</div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Statistics */}
        <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Overall Success Metrics
            </h3>
            <p className="text-xl text-gray-300">
              Combined results from all our AI implementations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2,800%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">730+</div>
              <div className="text-gray-300">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-gray-300">Total Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already experiencing unprecedented growth and ROI 
            with our AI solutions. Let's transform your business together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Start Your Success Story
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/case-studies"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center gap-2"
            >
              View All Case Studies
              <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesShowcase2027;