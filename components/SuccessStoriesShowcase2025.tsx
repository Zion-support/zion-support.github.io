import React from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  ArrowRight, 
  Star,
  CheckCircle,
  Globe,
  Zap
} from 'lucide-react';

const SuccessStoriesShowcase2025 = () => {
  const successStories = [
    {
      id: 1,
      company: "TechCorp Global",
      industry: "Manufacturing",
      challenge: "Manual production processes causing 40% efficiency loss",
      solution: "AI-powered automation system with predictive maintenance",
      results: {
        efficiency: "+300%",
        costSavings: "$2.5M",
        timeReduction: "75%",
        roi: "450%"
      },
      testimonial: "Zion Tech Group transformed our entire production line. The AI automation system not only increased our efficiency by 300% but also reduced costs by $2.5M annually.",
      author: "Sarah Johnson, CEO",
      logo: "🏭",
      featured: true
    },
    {
      id: 2,
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      challenge: "Manual data processing taking 8 hours daily",
      solution: "Quantum-powered data analytics and AI processing",
      results: {
        efficiency: "+500%",
        costSavings: "$1.8M",
        timeReduction: "90%",
        roi: "380%"
      },
      testimonial: "The quantum computing solution reduced our data processing time from 8 hours to 45 minutes. Incredible results!",
      author: "Michael Chen, CTO",
      logo: "🏦",
      featured: true
    },
    {
      id: 3,
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Patient data analysis taking weeks",
      solution: "Neural interface platform for real-time diagnostics",
      results: {
        efficiency: "+250%",
        costSavings: "$3.2M",
        timeReduction: "85%",
        roi: "520%"
      },
      testimonial: "Our diagnostic accuracy improved by 95% and processing time reduced from weeks to hours. Life-changing technology.",
      author: "Dr. Emily Rodriguez, Chief Medical Officer",
      logo: "🏥",
      featured: false
    },
    {
      id: 4,
      company: "RetailMax",
      industry: "Retail",
      challenge: "Inventory management causing 30% stockouts",
      solution: "AI-powered demand forecasting and automated restocking",
      results: {
        efficiency: "+200%",
        costSavings: "$4.1M",
        timeReduction: "70%",
        roi: "340%"
      },
      testimonial: "Stockouts reduced by 95% and inventory costs decreased by 40%. Our customers are happier than ever.",
      author: "David Kim, Operations Director",
      logo: "🛍️",
      featured: false
    },
    {
      id: 5,
      company: "LogiChain Pro",
      industry: "Logistics",
      challenge: "Route optimization taking 6 hours daily",
      solution: "Quantum optimization algorithms for real-time routing",
      results: {
        efficiency: "+400%",
        costSavings: "$2.8M",
        timeReduction: "95%",
        roi: "420%"
      },
      testimonial: "Delivery times improved by 60% and fuel costs reduced by 35%. The quantum algorithms are game-changing.",
      author: "Lisa Wang, Logistics Manager",
      logo: "🚚",
      featured: true
    },
    {
      id: 6,
      company: "CloudScale Systems",
      industry: "Cloud Computing",
      challenge: "Manual scaling causing service disruptions",
      solution: "Autonomous cloud infrastructure with AI-driven scaling",
      results: {
        efficiency: "+350%",
        costSavings: "$5.2M",
        timeReduction: "80%",
        roi: "480%"
      },
      testimonial: "Zero downtime since implementation. The autonomous scaling system is incredibly reliable and cost-effective.",
      author: "Alex Thompson, Cloud Architect",
      logo: "☁️",
      featured: false
    }
  ];

  const globalStats = [
    { label: "Companies Transformed", value: "1000+", icon: <Globe className="w-6 h-6" /> },
    { label: "Average ROI", value: "425%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Cost Savings", value: "$50M+", icon: <DollarSign className="w-6 h-6" /> },
    { label: "Efficiency Gains", value: "300%", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Real Companies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies across industries have transformed their operations and achieved unprecedented success with our solutions.
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {globalStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {successStories.map((story) => (
            <div
              key={story.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                story.featured ? 'ring-2 ring-green-500 ring-opacity-50' : ''
              }`}
            >
              {story.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                    Featured
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Company Header */}
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{story.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                    <p className="text-gray-600">{story.industry}</p>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm mb-4">{story.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{story.solution}</p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{story.results.efficiency}</div>
                    <div className="text-xs text-gray-600">Efficiency</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{story.results.costSavings}</div>
                    <div className="text-xs text-gray-600">Cost Savings</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">{story.results.timeReduction}</div>
                    <div className="text-xs text-gray-600">Time Reduction</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-lg font-bold text-orange-600">{story.results.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="border-l-4 border-green-500 pl-4 mb-4">
                  <p className="text-gray-700 italic">"{story.testimonial}"</p>
                  <cite className="text-sm text-gray-600 mt-2 block">— {story.author}</cite>
                </blockquote>

                <Link
                  href={`/case-studies/${story.id}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful companies that have transformed their operations with our revolutionary solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
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

export default SuccessStoriesShowcase2025;