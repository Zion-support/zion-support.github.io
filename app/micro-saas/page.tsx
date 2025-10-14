import React from "react";
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Database, Mail, Users, Globe, Smartphone, TrendingUp, Settings, Monitor, MessageSquare, Share, Award, Cpu, Video, Calculator, Grid, Star as StarIcon, Package, Receipt, Workflow } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      title: "Project Management Pro",
      description: "Advanced project management with AI-powered insights and automation",
      icon: <Workflow className="w-8 h-8 text-cyan-400" />,
      features: ["AI Task Assignment", "Real-time Collaboration", "Progress Tracking", "Resource Management"],
      href: "/project-management-pro",
      price: "$29/month",
      popular: true
    },
    {
      title: "AI CRM Pro",
      description: "Intelligent customer relationship management with predictive analytics",
      icon: <Users className="w-8 h-8 text-purple-400" />,
      features: ["AI Lead Scoring", "Automated Follow-ups", "Sales Forecasting", "Customer Insights"],
      href: "/zion-ai-crm-pro",
      price: "$39/month",
      popular: false
    },
    {
      title: "Inventory Smart",
      description: "Smart inventory management with demand forecasting and optimization",
      icon: <Package className="w-8 h-8 text-green-400" />,
      features: ["Demand Forecasting", "Auto Reordering", "Stock Optimization", "Analytics Dashboard"],
      href: "/zion-inventory-smart",
      price: "$24/month",
      popular: false
    },
    {
      title: "Financial Analytics Pro",
      description: "Advanced financial reporting and analysis with AI insights",
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      features: ["AI Financial Insights", "Automated Reports", "Cash Flow Analysis", "Risk Assessment"],
      href: "/ai-financial-analytics-pro",
      price: "$34/month",
      popular: false
    },
    {
      title: "Performance Monitor",
      description: "Employee performance tracking and analytics platform",
      icon: <Monitor className="w-8 h-8 text-orange-400" />,
      features: ["Performance Metrics", "Goal Tracking", "Team Analytics", "Feedback System"],
      href: "/zion-performance-monitor",
      price: "$19/month",
      popular: false
    },
    {
      title: "Email Automation",
      description: "Intelligent email marketing and automation platform",
      icon: <Mail className="w-8 h-8 text-pink-400" />,
      features: ["AI Email Templates", "Automated Campaigns", "A/B Testing", "Analytics Dashboard"],
      href: "/zion-email-automation",
      price: "$29/month",
      popular: false
    }
  ];

  const features = [
    {
      title: "AI-Powered Automation",
      description: "Leverage artificial intelligence to automate repetitive tasks and optimize workflows",
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards",
      icon: <Shield className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud-based solutions that grow with your business",
      icon: <Cloud className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive analytics and reporting for data-driven decisions",
      icon: <BarChart3 className="w-6 h-6 text-green-400" />
    },
    {
      title: "Mobile Access",
      description: "Access your tools anywhere with our responsive mobile interface",
      icon: <Smartphone className="w-6 h-6 text-orange-400" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support and technical assistance",
      icon: <Users className="w-6 h-6 text-pink-400" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions transformed our operations. The AI-powered insights helped us increase efficiency by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      role: "CTO",
      content: "The project management tool is incredible. It's like having a personal AI assistant for every project.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "GrowthCorp",
      role: "Operations Manager",
      content: "The inventory management system saved us thousands in costs and reduced stockouts by 60%.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro Saas - Zion Tech Group</title>
        <meta name="description" content="Professional micro saas services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Micro Saas</h1>
          <p className="text-lg text-gray-300 mb-8">Professional micro saas services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

                </div>
              </div>
            ))}
          </div>
        </div>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your journey with our micro SAAS solutions today and experience the power of AI-driven automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
        <title>Page - Zion Tech Group</title>

              </p>"
              <div className="flex justify-center space-x-4"></div>
                <a "
                  href="/" "
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Go Home
                </a>
                <a "
                  href="/contact" "
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-green-900 mb-2">"
                Custom Implementation;
              </h3>
              <p className="text-green-700">"
                Tailored page implementations for your specific requirements.;
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-purple-900 mb-2">"
                24/7 Support;
              </h3>
              <p className="text-purple-700">"
                Round-the-clock support for all your page needs.;
              </p>
            </div>
          </div>
          <div className="mt-12">"
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">"
              Get Started Today;
            </button>
>>>>>>> origin/main
          </div>
>>>>>>> origin/main
        </div>
      </div>
    </div>
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
