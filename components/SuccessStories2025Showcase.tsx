import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, Award, CheckCircle, DollarSign } from 'lucide-react';

const SuccessStories2025Showcase: React.FC = () => {
  const successStories = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing Giant Saves $2.3B with AI Automation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      readTime: "8 min read",
      views: "5.2M",
      likes: "124K",
      image: "/images/manufacturing-success-story-2025.jpg",
      tags: ["Manufacturing", "Cost Savings", "AI Automation", "Fortune 500"],
      featured: true,
      publishedDate: "2025-01-15",
      author: "Dr. Sarah Success",
      authorRole: "Success Stories Director",
      metrics: {
        costSavings: "$2.3B",
        efficiencyGain: "95%",
        timeReduction: "90%",
        roi: "2,500%"
      }
    },
    {
      id: 2,
      title: "Healthcare Network Reduces Patient Wait Times by 85% with AI",
      company: "Metro Health Systems",
      industry: "Healthcare",
      readTime: "10 min read",
      views: "4.8M",
      likes: "98K",
      image: "/images/healthcare-success-story-2025.jpg",
      tags: ["Healthcare", "Patient Care", "AI Optimization", "Wait Times"],
      featured: true,
      publishedDate: "2025-01-14",
      author: "Dr. Marcus Health",
      authorRole: "Healthcare AI Lead",
      metrics: {
        waitTimeReduction: "85%",
        patientSatisfaction: "98%",
        costSavings: "$180M",
        roi: "1,800%"
      }
    },
    {
      id: 3,
      title: "Financial Services Firm Achieves 99.9% Fraud Detection Accuracy",
      company: "SecureBank International",
      industry: "Financial Services",
      readTime: "12 min read",
      views: "3.9M",
      likes: "87K",
      image: "/images/finance-success-story-2025.jpg",
      tags: ["Financial Services", "Fraud Detection", "Security", "AI Accuracy"],
      featured: true,
      publishedDate: "2025-01-13",
      author: "Dr. Elena Finance",
      authorRole: "Financial AI Director",
      metrics: {
        fraudDetection: "99.9%",
        falsePositives: "0.01%",
        costSavings: "$450M",
        roi: "3,200%"
      }
    }
  ];

  const successStats = [
    { label: "Success Stories", value: "500+", icon: Star },
    { label: "Average ROI", value: "2,500%", icon: TrendingUp },
    { label: "Cost Savings", value: "$15B+", icon: DollarSign },
    { label: "Happy Clients", value: "1,200+", icon: Users }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            Success Stories 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how leading companies across industries have achieved extraordinary results 
            with our AI solutions, delivering massive ROI and transformative business outcomes.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {successStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-pink-600 mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-yellow-400" />
            Featured Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs font-semibold rounded-full">
                      {story.industry}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>{story.views}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">{story.readTime}</span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <span className="text-sm font-semibold">{story.likes}</span>
                      <span className="text-sm">likes</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {story.title}
                  </h4>
                  <div className="text-orange-300 font-semibold mb-3">{story.company}</div>
                  
                  {/* Success Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-orange-400 font-bold text-sm">{story.metrics.costSavings}</div>
                      <div className="text-gray-400 text-xs">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-pink-400 font-bold text-sm">{story.metrics.efficiencyGain || story.metrics.waitTimeReduction || story.metrics.fraudDetection}</div>
                      <div className="text-gray-400 text-xs">Key Metric</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-bold text-sm">{story.metrics.timeReduction || story.metrics.patientSatisfaction || story.metrics.falsePositives}</div>
                      <div className="text-gray-400 text-xs">Performance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 font-bold text-sm">{story.metrics.roi}</div>
                      <div className="text-gray-400 text-xs">ROI</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {story.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{story.author}</div>
                        <div className="text-gray-400 text-xs">{story.authorRole}</div>
                      </div>
                    </div>
                    <Link 
                      to={`/success-stories/${story.id}`}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-sm font-semibold rounded-lg hover:from-orange-600 hover:to-pink-700 transition-all duration-300"
                    >
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful companies that have transformed their business with our AI solutions. 
              Get a free consultation and discover your potential ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/consultation"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-pink-700 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/roi-calculator"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories2025Showcase;