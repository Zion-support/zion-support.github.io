import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, Award, Target, Zap, Brain, ChevronRight, Quote, Building } from 'lucide-react';

const SuccessStoriesShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('enterprise');

  const successStories = {
    enterprise: [
      {
        id: 1,
        company: "TechCorp Global",
        industry: "Technology",
        challenge: "Manual data processing causing 40% efficiency loss",
        solution: "AI-powered automation system with 99.9% accuracy",
        results: {
          efficiency: "85% increase",
          cost: "60% reduction",
          time: "75% faster",
          roi: "2,500% ROI"
        },
        testimonial: "The AI automation system transformed our operations completely. We achieved 85% efficiency gains and 60% cost reduction within 6 months.",
        author: "Sarah Johnson, CTO",
        image: "/api/placeholder/400/300",
        tags: ["AI Automation", "Enterprise", "ROI"],
        featured: true
      },
      {
        id: 2,
        company: "Quantum Dynamics",
        industry: "Quantum Computing",
        challenge: "Complex quantum algorithm optimization",
        solution: "Advanced quantum machine learning platform",
        results: {
          efficiency: "1000x faster",
          accuracy: "99.9% precision",
          cost: "50% reduction",
          roi: "3,200% ROI"
        },
        testimonial: "Our quantum computing capabilities increased 1000x with the new platform. The accuracy and speed improvements are unprecedented.",
        author: "Dr. Michael Chen, Lead Quantum Scientist",
        image: "/api/placeholder/400/300",
        tags: ["Quantum Computing", "ML Platform", "Breakthrough"],
        featured: true
      },
      {
        id: 3,
        company: "AutoFlow Industries",
        industry: "Manufacturing",
        challenge: "Production line optimization and predictive maintenance",
        solution: "Intelligent process automation with predictive analytics",
        results: {
          efficiency: "70% increase",
          downtime: "90% reduction",
          cost: "45% savings",
          roi: "1,800% ROI"
        },
        testimonial: "The predictive maintenance system reduced downtime by 90% and increased our production efficiency by 70%. Incredible results!",
        author: "Robert Martinez, Operations Director",
        image: "/api/placeholder/400/300",
        tags: ["Manufacturing", "Predictive Analytics", "Automation"],
        featured: false
      },
      {
        id: 4,
        company: "FinanceFirst Bank",
        industry: "Financial Services",
        challenge: "Fraud detection and risk assessment",
        solution: "AI-powered fraud detection and risk management system",
        results: {
          accuracy: "99.8% detection rate",
          cost: "70% reduction",
          time: "95% faster",
          roi: "2,100% ROI"
        },
        testimonial: "Our fraud detection accuracy improved to 99.8% with 95% faster processing. The system pays for itself every month.",
        author: "Lisa Thompson, Risk Management VP",
        image: "/api/placeholder/400/300",
        tags: ["Fraud Detection", "Risk Management", "AI Security"],
        featured: true
      }
    ],
    startups: [
      {
        id: 1,
        company: "NeuralTech Startup",
        industry: "AI/ML",
        challenge: "Limited resources for AI model development",
        solution: "Cloud-based AI development platform with pre-trained models",
        results: {
          development: "80% faster",
          cost: "90% reduction",
          accuracy: "95% improvement",
          roi: "4,500% ROI"
        },
        testimonial: "The platform accelerated our AI development by 80% while reducing costs by 90%. We launched 6 months ahead of schedule.",
        author: "Alex Kim, Founder & CEO",
        image: "/api/placeholder/400/300",
        tags: ["Startup", "AI Platform", "Cloud"],
        featured: true
      },
      {
        id: 2,
        company: "QuantumLeap Labs",
        industry: "Quantum Technology",
        challenge: "Quantum algorithm development complexity",
        solution: "Quantum development toolkit with visual programming",
        results: {
          development: "70% faster",
          complexity: "60% reduction",
          accuracy: "99.5% success",
          roi: "3,800% ROI"
        },
        testimonial: "The quantum toolkit made complex algorithm development accessible. We reduced development time by 70% and complexity by 60%.",
        author: "Dr. Elena Rodriguez, CTO",
        image: "/api/placeholder/400/300",
        tags: ["Quantum", "Development Tools", "Visual Programming"],
        featured: false
      }
    ],
    government: [
      {
        id: 1,
        company: "City of Innovation",
        industry: "Smart City",
        challenge: "Traffic management and urban planning optimization",
        solution: "AI-powered smart city management system",
        results: {
          traffic: "40% reduction",
          energy: "35% savings",
          citizen: "85% satisfaction",
          roi: "2,200% ROI"
        },
        testimonial: "The smart city system reduced traffic congestion by 40% and energy consumption by 35%. Citizen satisfaction increased to 85%.",
        author: "Mayor David Wilson",
        image: "/api/placeholder/400/300",
        tags: ["Smart City", "Traffic Management", "Urban Planning"],
        featured: true
      },
      {
        id: 2,
        company: "National Health Institute",
        industry: "Healthcare",
        challenge: "Medical diagnosis accuracy and treatment optimization",
        solution: "AI-powered medical diagnosis and treatment recommendation system",
        results: {
          accuracy: "98% diagnosis accuracy",
          time: "60% faster",
          cost: "50% reduction",
          roi: "2,800% ROI"
        },
        testimonial: "The AI system improved diagnosis accuracy to 98% while reducing diagnosis time by 60%. Patient outcomes have significantly improved.",
        author: "Dr. Maria Santos, Chief Medical Officer",
        image: "/api/placeholder/400/300",
        tags: ["Healthcare", "Medical AI", "Diagnosis"],
        featured: true
      }
    ]
  };

  const tabs = [
    { id: 'enterprise', label: 'Enterprise', icon: Building },
    { id: 'startups', label: 'Startups', icon: Zap },
    { id: 'government', label: 'Government', icon: Award }
  ];

  const currentStories = successStories[activeTab as keyof typeof successStories];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how organizations across industries are achieving unprecedented results 
            with our AI solutions, quantum computing, and automation technologies.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {currentStories.map((story) => (
            <div key={story.id} className={`group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden hover:transform hover:scale-105 ${story.featured ? 'lg:col-span-2' : ''}`}>
              <div className="relative">
                <img 
                  src={story.image} 
                  alt={story.company}
                  className="w-full h-48 object-cover"
                />
                {story.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {story.industry}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {story.company}
                </h3>
                
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-gray-300 mb-2">Challenge:</h4>
                  <p className="text-gray-400 mb-3">{story.challenge}</p>
                  
                  <h4 className="text-lg font-medium text-gray-300 mb-2">Solution:</h4>
                  <p className="text-gray-400 mb-4">{story.solution}</p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(story.results).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-white/10 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-400 mb-1">{value}</div>
                      <div className="text-sm text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <Quote className="w-6 h-6 text-emerald-400 mb-2" />
                  <p className="text-gray-300 italic mb-3">"{story.testimonial}"</p>
                  <p className="text-emerald-400 font-semibold">— {story.author}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  to={`/success-stories/${story.id}`}
                  className="group/link inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  Read Full Case Study
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl p-12 border border-emerald-400/30 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Proven Results Across Industries
            </h3>
            <p className="text-xl text-gray-300">
              Our solutions have delivered measurable results for organizations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Successful Deployments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">2,500%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that have transformed their operations 
            with our AI solutions and automation technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Target className="w-6 h-6 mr-2" />
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/case-studies"
              className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <Users className="w-6 h-6 mr-2" />
              View All Stories
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesShowcase2025;