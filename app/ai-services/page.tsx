"use client";
import React, { useState } from "react";
import {
  CheckCircle,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  ArrowRight,
  Sparkles,
  Cpu,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  Settings,
  Calendar,
  FileText,
  MessageSquare,
  Star,
  Award,
  Clock,
  DollarSign,
  Award as AwardIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  TrendingUp as TrendingUpIcon,
} from "lucide-react";

export default function AIServicesPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const aiServices = [
    {
      category: "AI Automation",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      services: [
        {
          name: "AI Workflow Automation",
          description:
            "Automate complex business processes with intelligent workflows",
          features: [
            "Process Optimization",
            "Error Reduction",
            "Cost Savings",
            "Scalability",
          ],
          pricing: "Starting at $5,000/month",
          roi: "200-400% ROI",
        },
        {
          name: "AI Customer Support",
          description:
            "24/7 intelligent customer support with natural language processing",
          features: [
            "24/7 Availability",
            "Multi-language Support",
            "Sentiment Analysis",
            "Escalation Management",
          ],
          pricing: "Starting at $3,000/month",
          roi: "150-300% ROI",
        },
        {
          name: "AI Sales Automation",
          description: "Intelligent sales processes and lead qualification",
          features: [
            "Lead Scoring",
            "Automated Follow-ups",
            "Sales Forecasting",
            "CRM Integration",
          ],
          pricing: "Starting at $4,000/month",
          roi: "250-500% ROI",
        },
      ],
    },
    {
      category: "AI Analytics & Intelligence",
      icon: BarChart,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      services: [
        {
          name: "AI Data Analytics",
          description: "Advanced analytics and insights from your data",
          features: [
            "Predictive Analytics",
            "Real-time Insights",
            "Data Visualization",
            "Custom Dashboards",
          ],
          pricing: "Starting at $6,000/month",
          roi: "300-600% ROI",
        },
        {
          name: "AI Business Intelligence",
          description: "Transform data into actionable business insights",
          features: [
            "KPI Tracking",
            "Trend Analysis",
            "Performance Metrics",
            "Strategic Planning",
          ],
          pricing: "Starting at $7,000/month",
          roi: "400-700% ROI",
        },
        {
          name: "AI Predictive Analytics",
          description: "Forecast future trends and outcomes",
          features: [
            "Demand Forecasting",
            "Risk Assessment",
            "Market Analysis",
            "Scenario Planning",
          ],
          pricing: "Starting at $8,000/month",
          roi: "500-800% ROI",
        },
      ],
    },
    {
      category: "AI Content & Marketing",
      icon: FileText,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      services: [
        {
          name: "AI Content Generation",
          description: "Create high-quality content at scale",
          features: [
            "Blog Posts",
            "Social Media",
            "Email Campaigns",
            "Product Descriptions",
          ],
          pricing: "Starting at $2,000/month",
          roi: "100-300% ROI",
        },
        {
          name: "AI Email Marketing",
          description: "Intelligent email campaigns and personalization",
          features: [
            "Personalization",
            "A/B Testing",
            "Send Time Optimization",
            "Performance Analytics",
          ],
          pricing: "Starting at $3,500/month",
          roi: "200-400% ROI",
        },
        {
          name: "AI SEO Optimization",
          description: "Automated SEO analysis and optimization",
          features: [
            "Keyword Research",
            "Content Optimization",
            "Technical SEO",
            "Competitor Analysis",
          ],
          pricing: "Starting at $4,500/month",
          roi: "250-500% ROI",
        },
      ],
    },
    {
      category: "AI Industry Solutions",
      icon: Target,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      services: [
        {
          name: "AI Healthcare Solutions",
          description: "AI-powered healthcare and medical solutions",
          features: [
            "Medical Imaging",
            "Diagnosis Support",
            "Patient Monitoring",
            "Drug Discovery",
          ],
          pricing: "Starting at $15,000/month",
          roi: "400-800% ROI",
        },
        {
          name: "AI Fintech Solutions",
          description: "Financial technology and banking AI solutions",
          features: [
            "Fraud Detection",
            "Risk Assessment",
            "Algorithmic Trading",
            "Credit Scoring",
          ],
          pricing: "Starting at $12,000/month",
          roi: "300-600% ROI",
        },
        {
          name: "AI E-commerce Solutions",
          description: "E-commerce optimization and personalization",
          features: [
            "Product Recommendations",
            "Price Optimization",
            "Inventory Management",
            "Customer Insights",
          ],
          pricing: "Starting at $5,000/month",
          roi: "200-500% ROI",
        },
      ],
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description:
        "Our clients see an average ROI of 300% within the first year",
      stat: "300%",
    },
    {
      icon: Clock,
      title: "Time Savings",
      description:
        "Reduce manual work by up to 90% with intelligent automation",
      stat: "90%",
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description:
        "Lower operational costs by 70% through process optimization",
      stat: "70%",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with 99.9% uptime guarantee",
      stat: "99.9%",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Analysis",
      description:
        "We analyze your business processes and identify AI opportunities",
      duration: "1-2 weeks",
    },
    {
      step: 2,
      title: "Strategy & Planning",
      description: "Develop a comprehensive AI strategy tailored to your needs",
      duration: "2-3 weeks",
    },
    {
      step: 3,
      title: "Development & Integration",
      description:
        "Build and integrate AI solutions into your existing systems",
      duration: "4-12 weeks",
    },
    {
      step: 4,
      title: "Testing & Optimization",
      description: "Thorough testing and performance optimization",
      duration: "2-4 weeks",
    },
    {
      step: 5,
      title: "Deployment & Support",
      description:
        "Deploy solutions and provide ongoing support and monitoring",
      duration: "Ongoing",
    },
  ];

  const caseStudies = [
    {
      company: "TechCorp Inc.",
      industry: "Technology",
      challenge: "Manual data processing taking 40 hours per week",
      solution: "AI-powered data processing automation",
      results: ["95% time reduction", "300% ROI", "Zero errors"],
      image: "/images/case-studies/techcorp.jpg",
    },
    {
      company: "HealthPlus Medical",
      industry: "Healthcare",
      challenge: "Patient diagnosis accuracy and speed",
      solution: "AI diagnostic assistance system",
      results: ["40% faster diagnosis", "25% accuracy improvement", "200% ROI"],
      image: "/images/case-studies/healthplus.jpg",
    },
    {
      company: "FinanceFlow Bank",
      industry: "Banking",
      challenge: "Fraud detection and risk assessment",
      solution: "AI fraud detection and risk analysis",
      results: [
        "99.5% fraud detection",
        "60% false positive reduction",
        "400% ROI",
      ],
      image: "/images/case-studies/financeflow.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions. From
              automation to analytics, we deliver intelligent systems that drive
              real results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">300% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">
                  Enterprise Security
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade solutions that deliver
              measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve real business
              challenges
            </p>
          </div>
          <div className="space-y-16">
            {aiServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <h4 className="text-xl font-bold text-white mb-3">
                        {service.name}
                      </h4>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">
                          Key Features:
                        </h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center space-x-2 text-sm text-gray-300"
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">
                            Pricing:
                          </span>
                          <span className="text-sm font-medium text-white">
                            {service.pricing}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">
                            Expected ROI:
                          </span>
                          <span className="text-sm font-medium text-green-400">
                            {service.roi}
                          </span>
                        </div>
                      </div>
                      <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all">
                        Learn More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {process.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                  >
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">
                        Step {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      <div className="text-sm text-cyan-400 font-medium">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">
                    {study.company
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {study.company}
                </h3>
                <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">
                      Challenge:
                    </h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">
                      Solution:
                    </h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">
                      Results:
                    </h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-center space-x-2 text-sm text-green-400"
                        >
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their
            operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
