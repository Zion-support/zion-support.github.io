import React from 'react';
import { Metadata } from 'next';
import { TrendingUp, Users, DollarSign, Clock, CheckCircle, ArrowRight, Star, Award, Target, Zap, Shield, Globe, Brain, Database, Network } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Success Stories 2025 | Zion Tech Group',
  description: 'Discover how leading organizations achieved extraordinary results with AI implementation. Real case studies, measurable outcomes, and proven strategies.',
  keywords: 'AI success stories, AI case studies, AI implementation, business transformation, AI ROI, enterprise AI',
  openGraph: {
    title: 'AI Success Stories 2025',
    description: 'Real-world AI implementations delivering extraordinary business results',
    type: 'website',
  },
};

const AISuccessStories = () => {
  const featuredStories = [
    {
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Manual quality control processes causing 15% defect rate and $2M annual losses",
      solution: "AI-powered computer vision quality inspection system",
      results: {
        defectRate: "95% reduction",
        costSavings: "$8.5M annually",
        efficiency: "300% improvement",
        timeline: "4 months"
      },
      technologies: ["Computer Vision", "Machine Learning", "IoT Sensors", "Edge Computing"],
      testimonial: "The AI quality control system transformed our production line. We've seen unprecedented improvements in both quality and efficiency.",
      author: "Sarah Chen, VP of Operations",
      image: "/api/placeholder/600/400",
      icon: Target
    },
    {
      company: "Metro Health System",
      industry: "Healthcare",
      challenge: "Diagnostic accuracy issues and long patient wait times affecting care quality",
      solution: "AI-powered diagnostic assistant with predictive analytics",
      results: {
        accuracy: "98% diagnostic accuracy",
        waitTime: "60% reduction",
        patientSatisfaction: "40% increase",
        timeline: "6 months"
      },
      technologies: ["Deep Learning", "Natural Language Processing", "Predictive Analytics", "Medical Imaging AI"],
      testimonial: "Our AI diagnostic system has revolutionized patient care. We're diagnosing conditions faster and more accurately than ever before.",
      author: "Dr. Michael Rodriguez, Chief Medical Officer",
      image: "/api/placeholder/600/400",
      icon: Brain
    },
    {
      company: "FinTech Innovations",
      industry: "Financial Services",
      challenge: "Fraud detection system missing 25% of fraudulent transactions",
      solution: "Advanced AI fraud detection with real-time risk assessment",
      results: {
        fraudDetection: "99.8% accuracy",
        falsePositives: "80% reduction",
        costSavings: "$12M annually",
        timeline: "3 months"
      },
      technologies: ["Machine Learning", "Real-time Analytics", "Behavioral Analysis", "Blockchain AI"],
      testimonial: "The AI fraud detection system has been a game-changer. We've virtually eliminated fraud while reducing false positives significantly.",
      author: "Jennifer Park, Chief Risk Officer",
      image: "/api/placeholder/600/400",
      icon: Shield
    }
  ];

  const industryStories = [
    {
      industry: "Retail & E-commerce",
      icon: Globe,
      stories: [
        {
          company: "MegaRetail Chain",
          challenge: "Inventory management inefficiencies causing $5M in lost sales",
          solution: "AI demand forecasting and inventory optimization",
          results: "35% reduction in stockouts, $8M revenue increase"
        },
        {
          company: "Fashion Forward",
          challenge: "Personalization at scale for 10M+ customers",
          solution: "AI-powered recommendation engine",
          results: "45% increase in conversion rate, 60% higher customer satisfaction"
        }
      ]
    },
    {
      industry: "Transportation & Logistics",
      icon: Network,
      stories: [
        {
          company: "Global Logistics Co",
          challenge: "Route optimization and fuel costs",
          solution: "AI route optimization and predictive maintenance",
          results: "25% fuel savings, 40% reduction in delivery times"
        },
        {
          company: "Urban Transit Authority",
          challenge: "Predictive maintenance for 500+ vehicles",
          solution: "IoT sensors with AI predictive analytics",
          results: "50% reduction in breakdowns, $3M maintenance savings"
        }
      ]
    },
    {
      industry: "Energy & Utilities",
      icon: Zap,
      stories: [
        {
          company: "Green Energy Corp",
          challenge: "Grid optimization and renewable energy integration",
          solution: "AI smart grid management system",
          results: "30% efficiency improvement, 20% cost reduction"
        },
        {
          company: "Water Management District",
          challenge: "Leak detection and water conservation",
          solution: "AI-powered leak detection and water quality monitoring",
          results: "40% reduction in water loss, 25% improvement in quality"
        }
      ]
    }
  ];

  const metrics = [
    { label: "Average ROI", value: "340%", icon: TrendingUp },
    { label: "Implementation Time", value: "4.2 months", icon: Clock },
    { label: "Success Rate", value: "98%", icon: CheckCircle },
    { label: "Client Satisfaction", value: "4.9/5", icon: Star }
  ];

  const technologies = [
    { name: "Machine Learning", count: "85%", icon: Brain },
    { name: "Computer Vision", count: "72%", icon: Target },
    { name: "Natural Language Processing", count: "68%", icon: Globe },
    { name: "Predictive Analytics", count: "91%", icon: TrendingUp },
    { name: "Edge AI", count: "45%", icon: Zap },
    { name: "Quantum AI", count: "12%", icon: Database }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-8">
              <Award className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">Success Stories 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Success
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how leading organizations achieved extraordinary results with AI implementation. 
              Real case studies, measurable outcomes, and proven strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                View All Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-green-500 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300">
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                  <metric.icon className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In-depth case studies showcasing transformative AI implementations
            </p>
          </div>

          <div className="space-y-16">
            {featuredStories.map((story, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <story.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{story.company}</h3>
                        <p className="text-green-300 font-medium">{story.industry}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-300 mb-2">Challenge</h4>
                        <p className="text-gray-400">{story.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-300 mb-2">Solution</h4>
                        <p className="text-gray-400">{story.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-300 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {story.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(story.results).map(([key, value], resultIndex) => (
                          <div key={resultIndex} className="text-center">
                            <div className="text-2xl font-bold text-green-400 mb-1">{value}</div>
                            <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <blockquote className="text-gray-300 italic mb-4">
                        "{story.testimonial}"
                      </blockquote>
                      <cite className="text-green-300 font-medium">— {story.author}</cite>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI transformations across different industries and sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryStories.map((industry, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{industry.industry}</h3>
                </div>
                
                <div className="space-y-6">
                  {industry.stories.map((story, storyIndex) => (
                    <div key={storyIndex} className="border-l-2 border-green-500/30 pl-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{story.company}</h4>
                      <p className="text-gray-400 text-sm mb-2">{story.challenge}</p>
                      <p className="text-green-300 text-sm font-medium mb-1">Solution: {story.solution}</p>
                      <p className="text-blue-300 text-sm font-medium">Results: {story.results}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Adoption */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Technology Adoption
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most commonly used AI technologies in successful implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <tech.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                  </div>
                  <span className="text-2xl font-bold text-green-400">{tech.count}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: tech.count }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of organizations already achieving extraordinary results with AI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-green-500 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISuccessStories;