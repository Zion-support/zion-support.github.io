import { ArrowRight, Zap, Shield, Globe, Database, Code, Smartphone, Brain, BarChart3, FileText, Users, Target, TrendingUp, Mail, Bot, Star, CheckCircle, Clock, DollarSign, Eye, Cpu, Layers, Workflow, MessageSquare, Search, Settings, PieChart, Activity, Lightbulb, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI Analytics Dashboard Pro",
      description: "Advanced AI-powered business intelligence platform with real-time analytics, predictive modeling, and automated insights generation. Transform complex data into actionable business strategies.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-analytics-dashboard-pro",
      color: "from-blue-500 to-cyan-500",
      price: "From $299/month",
      originalPrice: "$499/month",
      discount: "40% OFF",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App"],
      benefits: ["40% faster decision making", "99.9% uptime SLA", "24/7 support"],
      category: "Analytics",
      rating: 4.9,
      users: "15,000+"
    },
    {
      title: "AI Content Generator Pro",
      description: "Revolutionary AI content creation platform that generates high-quality blog posts, articles, social media content, and marketing materials in minutes. SEO-optimized and brand-consistent.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generator",
      color: "from-purple-500 to-pink-500",
      price: "From $149/month",
      originalPrice: "$249/month",
      discount: "40% OFF",
      features: ["AI Writing Assistant", "SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Check"],
      benefits: ["10x faster content creation", "SEO optimized", "Brand consistent"],
      category: "Content",
      rating: 4.8,
      users: "25,000+"
    },
    {
      title: "AI Cybersecurity Suite Pro",
      description: "Next-generation AI-powered cybersecurity platform with advanced threat detection, automated incident response, and real-time monitoring. Protect your business from evolving cyber threats.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity-suite-pro",
      color: "from-red-500 to-orange-500",
      price: "From $399/month",
      originalPrice: "$699/month",
      discount: "43% OFF",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Penetration Testing"],
      benefits: ["99.8% threat detection rate", "Zero false positives", "SOC 2 compliant"],
      category: "Security",
      rating: 4.9,
      users: "8,000+"
    },
    {
      title: "AI Customer Support Chatbot",
      description: "Intelligent customer service automation with natural language processing, sentiment analysis, and seamless human handoff. Provide 24/7 support with AI-powered chatbots.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support-chatbot",
      color: "from-green-500 to-emerald-500",
      price: "From $199/month",
      originalPrice: "$349/month",
      discount: "43% OFF",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "Knowledge Base"],
      benefits: ["80% faster response times", "24/7 availability", "Multilingual support"],
      category: "Customer Service",
      rating: 4.7,
      users: "20,000+"
    },
    {
      title: "AI Code Assistant Pro",
      description: "Advanced AI-powered code generation, review, and optimization platform. Support for 50+ programming languages with automated testing, debugging, and documentation generation.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant-pro",
      color: "from-yellow-500 to-orange-500",
      price: "From $129/month",
      originalPrice: "$219/month",
      discount: "41% OFF",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Multi-language Support"],
      benefits: ["50% faster development", "Reduced bugs", "Better code quality"],
      category: "Development",
      rating: 4.8,
      users: "18,000+"
    },
    {
      title: "AI Business Intelligence Pro",
      description: "Comprehensive AI-driven business intelligence platform with advanced analytics, forecasting, and strategic insights. Make data-driven decisions with confidence.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-business-intelligence-pro",
      color: "from-indigo-500 to-purple-500",
      price: "From $349/month",
      originalPrice: "$599/month",
      discount: "42% OFF",
      features: ["Advanced Analytics", "Predictive Forecasting", "Strategic Insights", "Custom Reports", "Data Visualization"],
      benefits: ["60% better forecasting", "Strategic insights", "Custom dashboards"],
      category: "Business Intelligence",
      rating: 4.9,
      users: "12,000+"
    },
    {
      title: "AI Marketing Automation",
      description: "End-to-end AI-powered marketing automation platform with intelligent campaign optimization, audience segmentation, and performance analytics. Maximize your marketing ROI.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing",
      color: "from-pink-500 to-rose-500",
      price: "From $199/month",
      originalPrice: "$349/month",
      discount: "43% OFF",
      features: ["Campaign Optimization", "Audience Segmentation", "A/B Testing", "Performance Analytics", "Email Automation"],
      benefits: ["40% higher conversion rates", "Automated optimization", "Better targeting"],
      category: "Marketing",
      rating: 4.8,
      users: "22,000+"
    },
    {
      title: "AI Project Management",
      description: "Intelligent project management platform with AI-powered task optimization, resource allocation, and automated reporting. Streamline your project workflows.",
      icon: <Workflow className="w-8 h-8" />,
      path: "/ai-project-management",
      color: "from-teal-500 to-cyan-500",
      price: "From $179/month",
      originalPrice: "$299/month",
      discount: "40% OFF",
      features: ["Task Optimization", "Resource Allocation", "Automated Reporting", "Team Collaboration", "Progress Tracking"],
      benefits: ["30% faster delivery", "Better resource utilization", "Real-time visibility"],
      category: "Project Management",
      rating: 4.7,
      users: "16,000+"
    },
    {
      title: "AI Data Analytics",
      description: "Advanced AI-powered data processing and visualization platform with machine learning models, automated insights, and interactive dashboards for comprehensive data analysis.",
      icon: <Database className="w-8 h-8" />,
      path: "/ai-data-analytics",
      color: "from-cyan-500 to-blue-500",
      price: "From $179/month",
      originalPrice: "$299/month",
      discount: "40% OFF",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing", "Automated Insights"],
      benefits: ["Real-time insights", "Automated analysis", "Better data quality"],
      category: "Data Analytics",
      rating: 4.8,
      users: "14,000+"
    },
    {
      title: "AI Email Automation",
      description: "Intelligent email marketing platform with AI-driven personalization, behavioral triggers, and comprehensive analytics. Boost your email marketing performance.",
      icon: <Mail className="w-8 h-8" />,
      path: "/ai-email-automation",
      color: "from-emerald-500 to-green-500",
      price: "From $99/month",
      originalPrice: "$169/month",
      discount: "41% OFF",
      features: ["AI Personalization", "Behavioral Triggers", "A/B Testing", "Analytics", "List Management"],
      benefits: ["40% higher open rates", "60% more clicks", "Automated workflows"],
      category: "Email Marketing",
      rating: 4.7,
      users: "28,000+"
    },
    {
      title: "AI Computer Vision",
      description: "Advanced computer vision platform with image recognition, object detection, and visual analysis capabilities. Automate visual tasks and extract insights from images and videos.",
      icon: <Eye className="w-8 h-8" />,
      path: "/ai-computer-vision",
      color: "from-violet-500 to-purple-500",
      price: "From $249/month",
      originalPrice: "$419/month",
      discount: "41% OFF",
      features: ["Image Recognition", "Object Detection", "Visual Analysis", "Video Processing", "API Integration"],
      benefits: ["95% accuracy", "Real-time processing", "Multi-format support"],
      category: "Computer Vision",
      rating: 4.9,
      users: "9,000+"
    },
    {
      title: "AI Recommendation Engine",
      description: "Powerful AI recommendation system that provides personalized suggestions for products, content, and services. Increase engagement and conversion rates with intelligent recommendations.",
      icon: <Lightbulb className="w-8 h-8" />,
      path: "/ai-recommendation-engine",
      color: "from-amber-500 to-yellow-500",
      price: "From $159/month",
      originalPrice: "$269/month",
      discount: "41% OFF",
      features: ["Personalized Recommendations", "Real-time Processing", "A/B Testing", "Analytics", "API Integration"],
      benefits: ["35% higher engagement", "25% more conversions", "Real-time personalization"],
      category: "Recommendations",
      rating: 4.8,
      users: "13,000+"
    },
    {
      title: "AI Workflow Automation",
      description: "No-code AI workflow automation platform that connects your apps and automates complex business processes with intelligent triggers and actions. Save time and reduce errors.",
      icon: <Zap className="w-8 h-8" />,
      path: "/ai-workflow-automation",
      color: "from-rose-500 to-pink-500",
      price: "From $119/month",
      originalPrice: "$199/month",
      discount: "40% OFF",
      features: ["Visual Workflow Builder", "App Integrations", "Conditional Logic", "Error Handling", "Analytics"],
      benefits: ["80% time savings", "Zero coding required", "Unlimited workflows"],
      category: "Automation",
      rating: 4.9,
      users: "17,000+"
    },
    {
      title: "AI Sales Automation",
      description: "Intelligent sales automation platform with AI-powered lead scoring, sales forecasting, and automated follow-ups. Accelerate your sales process and close more deals.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-sales-automation",
      color: "from-slate-500 to-gray-500",
      price: "From $229/month",
      originalPrice: "$389/month",
      discount: "41% OFF",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration", "Pipeline Management"],
      benefits: ["3x more qualified leads", "50% higher conversion", "Automated nurturing"],
      category: "Sales",
      rating: 4.8,
      users: "11,000+"
    },
    {
      title: "AI Fraud Detection",
      description: "Advanced AI fraud detection system with real-time monitoring, pattern recognition, and automated alerts. Protect your business from fraudulent activities and financial losses.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-fraud-detection",
      color: "from-red-500 to-pink-500",
      price: "From $299/month",
      originalPrice: "$499/month",
      discount: "40% OFF",
      features: ["Real-time Monitoring", "Pattern Recognition", "Automated Alerts", "Risk Assessment", "Compliance Reporting"],
      benefits: ["99.5% fraud detection", "Real-time alerts", "Reduced false positives"],
      category: "Fraud Detection",
      rating: 4.9,
      users: "7,000+"
    },
    {
      title: "AI Healthcare Assistant",
      description: "Specialized AI healthcare platform with medical data analysis, patient monitoring, and diagnostic assistance. Improve healthcare outcomes with AI-powered insights.",
      icon: <Activity className="w-8 h-8" />,
      path: "/ai-healthcare",
      color: "from-green-500 to-teal-500",
      price: "From $399/month",
      originalPrice: "$699/month",
      discount: "43% OFF",
      features: ["Medical Data Analysis", "Patient Monitoring", "Diagnostic Assistance", "Compliance", "Integration"],
      benefits: ["Improved diagnostics", "Better patient care", "HIPAA compliant"],
      category: "Healthcare",
      rating: 4.9,
      users: "5,000+"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI services including analytics, automation, content generation, customer service, marketing, and project management solutions."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, automation, analytics, content generation, customer service, marketing AI"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we provide comprehensive AI services that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
