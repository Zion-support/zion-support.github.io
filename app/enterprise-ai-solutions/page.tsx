import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise AI Solutions - Zion Tech Group',
  description: 'Comprehensive enterprise AI solutions including agent orchestration, human-AI collaboration, and responsible AI implementation for large organizations.',
  keywords: ['Enterprise AI', 'AI Orchestration', 'Human-AI Collaboration', 'Responsible AI', 'Enterprise Solutions'],
};

export default function EnterpriseAISolutionsPage() {
  const solutions = [
    {
      title: "Enterprise Agent Orchestration",
      description: "Master the art of coordinating thousands of AI agents across your organization with proven orchestration patterns.",
      benefits: [
        "Scalable agent coordination across departments",
        "Hierarchical management structures",
        "Cross-agent communication protocols",
        "Resource allocation optimization",
        "Conflict resolution mechanisms"
      ],
      metrics: {
        label: "Agent Coordination",
        value: "1000+",
        description: "Agents managed simultaneously"
      },
      icon: "🎯",
      color: "blue"
    },
    {
      title: "Human-AI Symbiotic Intelligence",
      description: "Enable true symbiotic relationships where human creativity and AI processing power combine for unprecedented results.",
      benefits: [
        "Seamless thought-to-AI communication",
        "Collaborative decision-making frameworks",
        "Hybrid creative processes",
        "Enhanced problem-solving capabilities",
        "300% increase in creative output"
      ],
      metrics: {
        label: "Productivity Boost",
        value: "300%",
        description: "Increase in creative output"
      },
      icon: "🤝",
      color: "green"
    },
    {
      title: "Responsible AI Implementation",
      description: "Build AI systems that are ethical, transparent, and aligned with human values and organizational principles.",
      benefits: [
        "Ethical AI development frameworks",
        "Transparency and accountability measures",
        "Bias detection and mitigation",
        "Privacy protection protocols",
        "Stakeholder engagement processes"
      ],
      metrics: {
        label: "Ethics Compliance",
        value: "100%",
        description: "AI systems meeting ethical standards"
      },
      icon: "🛡️",
      color: "purple"
    },
    {
      title: "AI-Driven Business Model Innovation",
      description: "Create entirely new business models and value propositions powered by artificial intelligence capabilities.",
      benefits: [
        "Personalized service platforms",
        "Outcome-based pricing models",
        "Autonomous service ecosystems",
        "Real-time market adaptation",
        "Innovative revenue streams"
      ],
      metrics: {
        label: "Revenue Growth",
        value: "250%",
        description: "Average increase in revenue"
      },
      icon: "💡",
      color: "orange"
    },
    {
      title: "AI-Powered Customer Experience",
      description: "Transform customer interactions with AI-driven personalization, predictive service, and intelligent automation.",
      benefits: [
        "Real-time personalization engines",
        "Predictive service systems",
        "Intelligent chatbot networks",
        "Emotional AI interactions",
        "90% increase in satisfaction scores"
      ],
      metrics: {
        label: "Customer Satisfaction",
        value: "90%",
        description: "Increase in satisfaction scores"
      },
      icon: "💬",
      color: "pink"
    },
    {
      title: "AI Talent Development",
      description: "Build and retain the AI-skilled workforce needed for success in the artificial intelligence era.",
      benefits: [
        "Comprehensive upskilling programs",
        "AI role development pathways",
        "Mentorship and training initiatives",
        "Competitive talent acquisition",
        "Future-ready workforce building"
      ],
      metrics: {
        label: "Talent Retention",
        value: "95%",
        description: "AI-skilled employee retention rate"
      },
      icon: "👥",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        button: 'bg-blue-600 hover:bg-blue-700',
        badge: 'bg-blue-100 text-blue-700',
        metric: 'bg-blue-500'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        button: 'bg-green-600 hover:bg-green-700',
        badge: 'bg-green-100 text-green-700',
        metric: 'bg-green-500'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-700',
        button: 'bg-purple-600 hover:bg-purple-700',
        badge: 'bg-purple-100 text-purple-700',
        metric: 'bg-purple-500'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-700',
        button: 'bg-orange-600 hover:bg-orange-700',
        badge: 'bg-orange-100 text-orange-700',
        metric: 'bg-orange-500'
      },
      pink: {
        bg: 'bg-pink-50',
        border: 'border-pink-200',
        text: 'text-pink-700',
        button: 'bg-pink-600 hover:bg-pink-700',
        badge: 'bg-pink-100 text-pink-700',
        metric: 'bg-pink-500'
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        text: 'text-indigo-700',
        button: 'bg-indigo-600 hover:bg-indigo-700',
        badge: 'bg-indigo-100 text-indigo-700',
        metric: 'bg-indigo-500'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🏢 ENTERPRISE AI SOLUTIONS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Enterprise AI Transformation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI solutions designed for large organizations. From agent orchestration 
              to responsible AI implementation, we help enterprises leverage artificial intelligence at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Enterprise AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of enterprise AI solutions addresses every aspect of 
              artificial intelligence implementation in large organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const colors = getColorClasses(solution.color);
              return (
                <div 
                  key={index}
                  className={`${colors.bg} ${colors.border} border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{solution.icon}</div>
                    <div className={`${colors.metric} text-white px-3 py-1 rounded-lg text-sm font-bold`}>
                      {solution.metrics.value}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-white rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{solution.metrics.value}</div>
                      <div className="text-sm text-gray-600">{solution.metrics.label}</div>
                      <div className="text-xs text-gray-500">{solution.metrics.description}</div>
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className={`${colors.button} text-white px-6 py-2 rounded-lg font-medium transition-colors w-full text-center block`}
                  >
                    Learn More →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted by Leading Enterprises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our enterprise AI solutions have helped organizations across industries 
              achieve remarkable transformations and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Enterprise Clients</div>
              <div className="text-sm text-gray-600 mt-2">Fortune 500 companies</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Success Rate</div>
              <div className="text-sm text-gray-600 mt-2">Project completion</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">340%</div>
              <div className="text-gray-700 font-medium">Average ROI</div>
              <div className="text-sm text-gray-600 mt-2">Within 12 months</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Support</div>
              <div className="text-sm text-gray-600 mt-2">Enterprise support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise with AI?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Join the leading enterprises that are already leveraging our comprehensive AI solutions 
            to drive innovation, efficiency, and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Enterprise AI Journey
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}