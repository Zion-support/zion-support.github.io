import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Play, Download, Users, TrendingUp, Shield, Zap } from 'lucide-react';

const AITransformationGuide2025: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const transformationSteps = [
    {
      title: "Assessment & Strategy",
      description: "Evaluate current AI readiness and develop a comprehensive transformation roadmap",
      duration: "2-4 weeks",
      features: ["AI maturity audit", "Strategic roadmap", "ROI projections", "Risk assessment"]
    },
    {
      title: "Data Foundation",
      description: "Build robust data infrastructure and governance frameworks for AI success",
      duration: "4-8 weeks",
      features: ["Data architecture", "Quality frameworks", "Privacy compliance", "Integration setup"]
    },
    {
      title: "AI Implementation",
      description: "Deploy AI solutions and integrate them into existing business processes",
      duration: "8-16 weeks",
      features: ["Model development", "System integration", "Testing & validation", "Performance tuning"]
    },
    {
      title: "Scale & Optimize",
      description: "Expand AI across the organization and continuously optimize for maximum impact",
      duration: "Ongoing",
      features: ["Enterprise rollout", "Performance monitoring", "Continuous learning", "Innovation pipeline"]
    }
  ];

  const aiSolutions = [
    {
      icon: "🤖",
      title: "Intelligent Process Automation",
      description: "Automate repetitive tasks and workflows with AI-powered solutions",
      impact: "+300% efficiency",
      category: "Productivity"
    },
    {
      icon: "🧠",
      title: "Predictive Analytics",
      description: "Leverage AI to forecast trends and make data-driven decisions",
      impact: "+45% accuracy",
      category: "Decision Making"
    },
    {
      icon: "💬",
      title: "Conversational AI",
      description: "Deploy chatbots and virtual assistants for customer engagement",
      impact: "+80% satisfaction",
      category: "Customer Experience"
    },
    {
      icon: "🔍",
      title: "Intelligent Document Processing",
      description: "Extract insights from unstructured data and documents",
      impact: "+90% speed",
      category: "Data Processing"
    },
    {
      icon: "🎯",
      title: "Personalization Engines",
      description: "Create personalized experiences for customers and employees",
      impact: "+60% engagement",
      category: "User Experience"
    },
    {
      icon: "🛡️",
      title: "AI-Powered Security",
      description: "Detect and prevent threats with intelligent security systems",
      impact: "+95% detection",
      category: "Cybersecurity"
    }
  ];

  const caseStudies = [
    {
      company: "Fortune 500 Retailer",
      challenge: "Manual inventory management causing stockouts and overstock",
      solution: "AI-powered demand forecasting and automated reordering",
      results: ["40% reduction in stockouts", "25% decrease in inventory costs", "99.2% accuracy in demand prediction"]
    },
    {
      company: "Global Manufacturing",
      challenge: "Equipment failures causing production delays and maintenance costs",
      solution: "Predictive maintenance AI system with IoT integration",
      results: ["60% reduction in unplanned downtime", "35% decrease in maintenance costs", "15% increase in overall equipment effectiveness"]
    },
    {
      company: "Financial Services",
      challenge: "Manual loan processing taking weeks and prone to errors",
      solution: "AI-powered loan approval system with risk assessment",
      results: ["80% faster loan processing", "50% reduction in processing costs", "95% accuracy in risk assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI TRANSFORMATION GUIDE • 2025
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Transformation Guide 2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Your comprehensive roadmap to successfully implement AI and transform your business operations for maximum impact and ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center">
                Start Transformation <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center">
                <Download className="mr-2 w-5 h-5" />
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🚀 Your AI Transformation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our proven 4-step process to successfully implement AI in your organization
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {transformationSteps.map((step, index) => (
              <div key={index} className="mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <p className="text-gray-500">{step.duration}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setActiveStep(index)}
                      className="px-4 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors"
                    >
                      {activeStep === index ? 'Active' : 'View Details'}
                    </button>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{step.description}</p>
                  
                  {activeStep === index && (
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center p-3 bg-purple-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Showcase */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🎯 AI Solutions That Drive Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven AI technologies that deliver measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-300 rounded-full text-sm font-semibold">
                    {solution.category}
                  </span>
                  <span className="text-green-400 font-bold">{solution.impact}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              📈 Real-World Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading companies achieved remarkable results with our AI transformation approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 mb-4">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              💰 Calculate Your AI ROI
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              See the potential return on investment for your AI transformation
            </p>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">$2.4M</div>
                  <div className="text-gray-600">Average Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">340%</div>
                  <div className="text-gray-600">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">8.5</div>
                  <div className="text-gray-600">Months to Break Even</div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Get Your Custom ROI Analysis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform with AI?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of companies that have successfully transformed their operations with our AI solutions. Start your journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Start Free Consultation
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Download Complete Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITransformationGuide2025;