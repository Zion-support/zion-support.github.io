import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  BookOpen, 
  FileText,
  ArrowRight,
  Star,
  Clock,
  CheckCircle
} from 'lucide-react';

const RevolutionaryContentShowcase2025: React.FC = () => {
  const contentItems = [
    {
      id: 1,
      title: "AI 2025: Enterprise Automation Revolution",
      description: "Discover how AI automation is revolutionizing enterprise operations with unprecedented efficiency gains and cost savings.",
      category: "Blog Post",
      readTime: "12 min",
      icon: Zap,
      color: "from-blue-500 to-purple-500",
      link: "/blog/ai-2025-enterprise-automation-revolution",
      features: ["45% Downtime Reduction", "30% Efficiency Gains", "$2.3M Annual Savings"],
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Business Applications",
      description: "Explore revolutionary quantum computing applications transforming industries with exponential computational power.",
      category: "Blog Post", 
      readTime: "15 min",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      link: "/blog/quantum-computing-business-applications-2025",
      features: ["Exponential Speed", "Enhanced Security", "Revolutionary Problem-Solving"],
      featured: true
    },
    {
      id: 3,
      title: "$50M Enterprise AI Success Story",
      description: "Learn from a Fortune 500 company's comprehensive AI transformation achieving remarkable business results.",
      category: "Case Study",
      readTime: "18 min", 
      icon: Award,
      color: "from-green-500 to-teal-500",
      link: "/case-studies/enterprise-ai-transformation-success-story",
      features: ["$50M Annual Savings", "300% Productivity", "Complete Transformation"],
      featured: true
    },
    {
      id: 4,
      title: "AI Implementation Master Guide 2025",
      description: "The definitive roadmap to successful AI implementation with proven strategies and step-by-step methodologies.",
      category: "Implementation Guide",
      readTime: "25 min",
      icon: BookOpen,
      color: "from-yellow-500 to-orange-500", 
      link: "/resources/ai-implementation-master-guide-2025",
      features: ["Complete Roadmap", "Best Practices", "ROI Strategies"],
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6">
            <Brain className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">Revolutionary Content 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cutting-Edge AI Knowledge
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Access the most comprehensive collection of AI implementation guides, success stories, and revolutionary insights that are reshaping industries in 2025.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {contentItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
              >
                {item.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
                
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-gray-400 font-medium">{item.category}</span>
                      <div className="flex items-center ml-4 text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{item.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, index) => (
                      <div key={index} className="flex items-center bg-white/10 rounded-full px-3 py-1">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        <span className="text-xs text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Link 
                  to={item.link}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all group-hover:translate-x-1"
                >
                  {item.category === "Implementation Guide" ? "Download Guide" : "Read More"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Proven Results Across Industries
            </h3>
            <p className="text-gray-300 text-lg">
              Our comprehensive content library is based on real-world implementations and measurable outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">300%</div>
              <div className="text-gray-300">Productivity Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">$50M</div>
              <div className="text-gray-300">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">Implementation Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">8mo</div>
              <div className="text-gray-300">Average Payback Period</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking organizations that have already begun their AI transformation journey with our proven methodologies and comprehensive guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Start Your AI Journey
              </Link>
              <Link 
                to="/resources"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase2025;