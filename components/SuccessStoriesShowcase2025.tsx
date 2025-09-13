import React from 'react';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

const SuccessStoriesShowcase2025: React.FC = () => {
  const successStories = [
    {
      id: 1,
      company: "TechCorp Global",
      industry: "Manufacturing",
      challenge: "Manual quality control processes causing 15% defect rate",
      solution: "AI-powered computer vision system for real-time quality inspection",
      results: {
        defectRate: "Reduced by 95%",
        efficiency: "Increased by 300%",
        costSavings: "$2.3M annually",
        roi: "2,800% ROI"
      },
      testimonial: "The AI implementation transformed our entire production line. We've never seen such dramatic improvements in quality and efficiency.",
      author: "Sarah Johnson, CTO",
      rating: 5,
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      company: "FinanceFirst",
      industry: "Financial Services",
      challenge: "Manual fraud detection missing 20% of fraudulent transactions",
      solution: "Advanced AI fraud detection system with real-time analysis",
      results: {
        fraudDetection: "99.7% accuracy",
        falsePositives: "Reduced by 85%",
        costSavings: "$5.1M annually",
        roi: "3,200% ROI"
      },
      testimonial: "Our fraud detection is now virtually perfect. The AI system catches threats we never knew existed.",
      author: "Michael Chen, Head of Security",
      rating: 5,
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Patient diagnosis taking 3-5 days with 12% misdiagnosis rate",
      solution: "AI diagnostic assistant with medical imaging analysis",
      results: {
        diagnosisTime: "Reduced to 2 hours",
        accuracy: "99.2% accuracy",
        livesSaved: "500+ patients",
        roi: "4,100% ROI"
      },
      testimonial: "This AI system has revolutionized our diagnostic capabilities. We're saving lives and improving outcomes daily.",
      author: "Dr. Emily Rodriguez, Chief Medical Officer",
      rating: 5,
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      company: "RetailMax",
      industry: "Retail",
      challenge: "Inventory management causing 25% stockouts and 30% overstock",
      solution: "AI-powered demand forecasting and inventory optimization",
      results: {
        stockouts: "Reduced by 90%",
        overstock: "Reduced by 75%",
        revenue: "Increased by 40%",
        roi: "2,600% ROI"
      },
      testimonial: "Our inventory is now perfectly optimized. We never run out of popular items and rarely overstock.",
      author: "David Park, Operations Director",
      rating: 5,
      image: "/api/placeholder/400/300"
    }
  ];

  const stats = [
    { label: "Average ROI", value: "2,800%", icon: TrendingUp },
    { label: "Success Rate", value: "99.2%", icon: CheckCircle },
    { label: "Happy Clients", value: "500+", icon: Users },
    { label: "Industry Awards", value: "15+", icon: Award }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real companies. See how organizations across industries are transforming their operations with our AI solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {successStories.map((story) => (
            <div key={story.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              {/* Company Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{story.company}</h3>
                  <p className="text-blue-400">{story.industry}</p>
                </div>
                <div className="flex">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                <p className="text-gray-300 mb-4">{story.challenge}</p>
                <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                <p className="text-gray-300">{story.solution}</p>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(story.results).map(([key, value]) => (
                  <div key={key} className="bg-white/5 rounded-lg p-3">
                    <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className="text-lg font-bold text-white">{value}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <p className="text-gray-300 italic mb-2">"{story.testimonial}"</p>
                <p className="text-blue-400 font-semibold">- {story.author}</p>
              </div>

              {/* Read More Link */}
              <Link 
                to={`/case-studies/${story.company.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-blue-400 hover:text-white transition-colors"
              >
                Read Full Case Study
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful companies who have transformed their operations with our AI solutions. 
              Let us help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/case-studies" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View All Case Studies
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Start Your Success Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesShowcase2025;