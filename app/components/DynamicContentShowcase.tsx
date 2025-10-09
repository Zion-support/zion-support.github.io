import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, Award, TrendingUp, Zap, Shield, Globe } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Success Stories",
      icon: Star,
      content: [
        {
          company: "TechCorp Inc.",
          industry: "Manufacturing",
          challenge: "Manual inventory management causing 30% waste",
          solution: "AI-powered inventory optimization system",
          result: "45% reduction in waste, $2M annual savings",
          logo: "🏭"
        },
        {
          company: "FinanceFlow Ltd.",
          industry: "Financial Services",
          challenge: "Fraud detection accuracy below 85%",
          solution: "Advanced AI fraud detection algorithms",
          result: "99.2% accuracy, 60% faster processing",
          logo: "💰"
        },
        {
          company: "HealthTech Solutions",
          industry: "Healthcare",
          challenge: "Patient data analysis taking weeks",
          solution: "AI-powered medical data analytics",
          result: "90% faster diagnosis, 95% accuracy improvement",
          logo: "🏥"
        }
      ]
    },
    {
      title: "Technology Stack",
      icon: Zap,
      content: [
        {
          category: "AI & Machine Learning",
          technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI GPT", "Computer Vision", "NLP"],
          description: "Cutting-edge AI frameworks and models"
        },
        {
          category: "Cloud Infrastructure",
          technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
          description: "Scalable and secure cloud solutions"
        },
        {
          category: "Data & Analytics",
          technologies: ["Apache Spark", "Hadoop", "Elasticsearch", "Grafana", "Prometheus", "Tableau"],
          description: "Advanced data processing and visualization"
        }
      ]
    },
    {
      title: "Industry Expertise",
      icon: Globe,
      content: [
        {
          industry: "Healthcare",
          expertise: "Medical AI, Drug Discovery, Patient Care Optimization",
          projects: "50+ healthcare AI implementations"
        },
        {
          industry: "Finance",
          expertise: "Fraud Detection, Risk Management, Algorithmic Trading",
          projects: "30+ fintech solutions delivered"
        },
        {
          industry: "Manufacturing",
          expertise: "Predictive Maintenance, Quality Control, Supply Chain",
          projects: "25+ manufacturing automation projects"
        }
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for AI and IT solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 m-2 rounded-lg transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8">
            {tabs[activeTab].title === "Success Stories" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tabs[activeTab].content.map((story, index) => (
                  <div key={index} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300">
                    <div className="text-4xl mb-4">{story.logo}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{story.company}</h3>
                    <p className="text-cyan-400 text-sm mb-4">{story.industry}</p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                        <p className="text-sm text-gray-400">{story.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                        <p className="text-sm text-gray-400">{story.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-1">Result:</h4>
                        <p className="text-sm text-green-300 font-medium">{story.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tabs[activeTab].title === "Technology Stack" && (
              <div className="space-y-8">
                {tabs[activeTab].content.map((tech, index) => (
                  <div key={index} className="bg-slate-700/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{tech.category}</h3>
                    <p className="text-gray-300 mb-4">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.technologies.map((technology, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tabs[activeTab].title === "Industry Expertise" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tabs[activeTab].content.map((industry, index) => (
                  <div key={index} className="bg-slate-700/30 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">{industry.industry}</h3>
                    <p className="text-gray-300 mb-4">{industry.expertise}</p>
                    <div className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium">
                      {industry.projects}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;