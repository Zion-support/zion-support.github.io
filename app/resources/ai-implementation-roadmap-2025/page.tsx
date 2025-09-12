import React from 'react';
import { Link } from 'react-router-dom';
import SEO from "../../components/SEO";
import Card from '../../../components/ui/Card';

export default function AIImplementationRoadmap2025() {
  const roadmapPhases = [
    {
      phase: "Phase 1: Foundation & Assessment",
      duration: "Weeks 1-4",
      status: "Planning",
      color: "bg-blue-500",
      items: [
        {
          title: "AI Readiness Assessment",
          description: "Evaluate current infrastructure, data quality, and team capabilities",
          duration: "Week 1",
          deliverables: ["Readiness report", "Gap analysis", "Recommendations"]
        },
        {
          title: "Data Infrastructure Audit",
          description: "Assess data quality, storage, and accessibility",
          duration: "Week 2",
          deliverables: ["Data audit report", "Quality metrics", "Improvement plan"]
        },
        {
          title: "Team Capability Assessment",
          description: "Evaluate current AI/ML skills and identify training needs",
          duration: "Week 3",
          deliverables: ["Skills assessment", "Training roadmap", "Hiring plan"]
        },
        {
          title: "Use Case Identification",
          description: "Identify and prioritize AI use cases with highest ROI potential",
          duration: "Week 4",
          deliverables: ["Use case inventory", "ROI analysis", "Priority matrix"]
        }
      ]
    },
    {
      phase: "Phase 2: Strategy & Planning",
      duration: "Weeks 5-8",
      status: "Design",
      color: "bg-green-500",
      items: [
        {
          title: "AI Strategy Development",
          description: "Create comprehensive AI strategy aligned with business goals",
          duration: "Week 5",
          deliverables: ["AI strategy document", "Vision statement", "Success metrics"]
        },
        {
          title: "Technology Stack Selection",
          description: "Choose appropriate AI tools, platforms, and frameworks",
          duration: "Week 6",
          deliverables: ["Technology roadmap", "Tool evaluation", "Vendor selection"]
        },
        {
          title: "Governance Framework",
          description: "Establish AI governance, ethics, and compliance frameworks",
          duration: "Week 7",
          deliverables: ["Governance policies", "Ethics guidelines", "Compliance checklist"]
        },
        {
          title: "Budget & Resource Planning",
          description: "Allocate budget and resources for AI initiatives",
          duration: "Week 8",
          deliverables: ["Budget allocation", "Resource plan", "Timeline"]
        }
      ]
    },
    {
      phase: "Phase 3: Infrastructure & Data",
      duration: "Weeks 9-16",
      status: "Development",
      color: "bg-yellow-500",
      items: [
        {
          title: "Data Pipeline Development",
          description: "Build robust data collection, processing, and storage systems",
          duration: "Weeks 9-10",
          deliverables: ["Data pipeline", "ETL processes", "Data warehouse"]
        },
        {
          title: "ML Infrastructure Setup",
          description: "Set up MLOps infrastructure for model development and deployment",
          duration: "Weeks 11-12",
          deliverables: ["MLOps platform", "Model registry", "Monitoring tools"]
        },
        {
          title: "Data Quality & Security",
          description: "Implement data quality controls and security measures",
          duration: "Weeks 13-14",
          deliverables: ["Quality controls", "Security protocols", "Compliance measures"]
        },
        {
          title: "Team Training & Development",
          description: "Train teams on AI/ML tools and methodologies",
          duration: "Weeks 15-16",
          deliverables: ["Training program", "Certifications", "Knowledge transfer"]
        }
      ]
    },
    {
      phase: "Phase 4: Pilot Implementation",
      duration: "Weeks 17-24",
      status: "Testing",
      color: "bg-purple-500",
      items: [
        {
          title: "Pilot Project Selection",
          description: "Choose low-risk, high-impact pilot projects",
          duration: "Week 17",
          deliverables: ["Pilot selection", "Success criteria", "Timeline"]
        },
        {
          title: "Model Development",
          description: "Develop and train initial AI models",
          duration: "Weeks 18-20",
          deliverables: ["Trained models", "Performance metrics", "Validation results"]
        },
        {
          title: "Integration & Testing",
          description: "Integrate models into existing systems and test",
          duration: "Weeks 21-22",
          deliverables: ["Integrated solution", "Test results", "Performance benchmarks"]
        },
        {
          title: "Pilot Deployment",
          description: "Deploy pilot projects and monitor performance",
          duration: "Weeks 23-24",
          deliverables: ["Deployed pilots", "Performance monitoring", "User feedback"]
        }
      ]
    },
    {
      phase: "Phase 5: Scale & Optimize",
      duration: "Weeks 25-32",
      status: "Production",
      color: "bg-red-500",
      items: [
        {
          title: "Scale Successful Pilots",
          description: "Scale successful pilots across the organization",
          duration: "Weeks 25-26",
          deliverables: ["Scaling plan", "Resource allocation", "Timeline"]
        },
        {
          title: "Advanced AI Implementation",
          description: "Implement more complex AI solutions and automation",
          duration: "Weeks 27-28",
          deliverables: ["Advanced solutions", "Automation workflows", "Integration"]
        },
        {
          title: "Performance Optimization",
          description: "Optimize AI models and processes for better performance",
          duration: "Weeks 29-30",
          deliverables: ["Optimized models", "Performance improvements", "Cost reduction"]
        },
        {
          title: "Continuous Improvement",
          description: "Establish continuous improvement processes and feedback loops",
          duration: "Weeks 31-32",
          deliverables: ["Improvement processes", "Feedback systems", "Future roadmap"]
        }
      ]
    }
  ];

  const keyMetrics = [
    { metric: "Time to Value", value: "8-12 weeks", description: "First AI benefits realized" },
    { metric: "ROI Achievement", value: "200-400%", description: "Expected ROI within 12 months" },
    { metric: "Success Rate", value: "85%+", description: "Successful AI implementations" },
    { metric: "Cost Reduction", value: "30-50%", description: "Operational cost savings" }
  ];

  const bestPractices = [
    {
      title: "Start Small, Scale Smart",
      description: "Begin with pilot projects to prove value before scaling across the organization.",
      icon: "🚀"
    },
    {
      title: "Data Quality First",
      description: "Ensure high-quality, clean data before implementing AI solutions.",
      icon: "📊"
    },
    {
      title: "Invest in People",
      description: "Train and develop your team's AI capabilities alongside technology investments.",
      icon: "👥"
    },
    {
      title: "Measure Everything",
      description: "Establish clear KPIs and metrics to track AI success and ROI.",
      icon: "📈"
    },
    {
      title: "Governance & Ethics",
      description: "Implement strong governance frameworks and ethical AI practices from day one.",
      icon: "⚖️"
    },
    {
      title: "Continuous Learning",
      description: "AI is evolving rapidly - maintain continuous learning and adaptation processes.",
      icon: "🔄"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Implementation Roadmap 2025 - Zion Tech Group"
        description="Complete 32-week AI implementation roadmap with phases, milestones, and best practices for successful AI transformation in 2025."
        keywords="AI implementation, AI roadmap, AI strategy, AI transformation, digital transformation, AI planning, AI deployment"
        url="/resources/ai-implementation-roadmap-2025"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🗺️ AI Implementation Roadmap 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Your complete 32-week guide to successful AI transformation with proven phases, milestones, and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/ai-readiness-assessment"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                🎯 Start Assessment
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                📞 Get Expert Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">📊 Expected Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold mb-2">{metric.metric}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Phases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">🚀 Implementation Phases</h2>
          <div className="space-y-12">
            {roadmapPhases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="relative">
                {/* Phase Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center text-white font-bold text-xl mr-6`}>
                    {phaseIndex + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-gray-600">{phase.duration}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        phase.status === 'Planning' ? 'bg-blue-100 text-blue-800' :
                        phase.status === 'Design' ? 'bg-green-100 text-green-800' :
                        phase.status === 'Development' ? 'bg-yellow-100 text-yellow-800' :
                        phase.status === 'Testing' ? 'bg-purple-100 text-purple-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Phase Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-22">
                  {phase.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">{item.duration}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Deliverables:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {item.deliverables.map((deliverable, delIndex) => (
                            <li key={delIndex} className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">💡 Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestPractices.map((practice, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl mb-4">{practice.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{practice.title}</h3>
                <p className="text-gray-600">{practice.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get personalized guidance and expert support to implement this roadmap successfully in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Schedule Consultation
            </Link>
            <Link
              href="/tools/ai-readiness-assessment"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              🎯 Take Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}