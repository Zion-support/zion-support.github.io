import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Award, DollarSign, Globe, TrendingUp, Monitor, MessageSquare, Eye, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from '../components/SEOHead';

export default function AiPoweredDevops() {
  const features = [
    "AI-powered automated testing and quality assurance",
    "Intelligent deployment orchestration and rollback",
    "Predictive infrastructure scaling and optimization",
    "Automated security vulnerability detection and patching",
    "AI-driven performance monitoring and alerting",
    "Intelligent log analysis and anomaly detection",
    "Automated code review and optimization suggestions",
    "Smart resource allocation and cost optimization",
    "AI-powered incident response and resolution",
    "Automated compliance checking and reporting",
    "Intelligent capacity planning and forecasting",
    "AI-driven continuous integration and deployment"
  ];

  // const benefits = [
  //   "Reduce deployment time by 80%",
  //   "Eliminate 95% of manual DevOps tasks",
  //   "Improve system reliability by 99.9%",
  //   "Cut infrastructure costs by 40%"
  // ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$499",
      period: "/month",
      description: "Perfect for small development teams and startups",
      features: [
        "Up to 10 applications",
        "Basic AI automation",
        "Standard monitoring",
        "Email support",
        "Basic reporting",
        "5 team members",
        "Cloud deployment only"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing companies and development teams",
      features: [
        "Up to 100 applications",
        "Advanced AI automation",
        "Comprehensive monitoring",
        "Priority support",
        "Advanced analytics",
        "25 team members",
        "Multi-cloud deployment",
        "API access",
        "Custom integrations",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise Plus",
      price: "$4,999",
      period: "/month",
      description: "For large organizations with complex DevOps needs",
      features: [
        "Unlimited applications",
        "Full AI automation suite",
        "Enterprise monitoring",
        "24/7 dedicated support",
        "Custom analytics",
        "Unlimited team members",
        "Hybrid cloud deployment",
        "Advanced API access",
        "Custom AI model training",
        "Dedicated DevOps engineers",
        "White-label solution",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Tech Startup",
      role: "CTO",
      content: "AI-powered DevOps has transformed our development process. We've reduced deployment time by 85% and our system uptime is now 99.9%. The AI predictions are incredibly accurate.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Kim",
      company: "E-commerce Platform",
      role: "Head of Engineering",
      content: "The automated testing and deployment features are game-changing. We can now deploy multiple times per day with confidence, and our bug rate has dropped by 90%.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      company: "Financial Services",
      role: "DevOps Director",
      content: "The AI-driven security monitoring and compliance checking have been invaluable. We've achieved 100% compliance and our security incidents have dropped to zero.",
      rating: 5,
      avatar: "LT"
    }
  ];

  const capabilities = [
    {
      title: "Automated Testing",
      description: "AI generates and executes comprehensive test suites automatically",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Deployment",
      description: "Intelligent deployment strategies with automatic rollback capabilities",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Scaling",
      description: "AI predicts traffic patterns and scales infrastructure proactively",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Intelligent Monitoring",
      description: "AI-powered monitoring with anomaly detection and alerting",
      icon: <Eye className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];
  return (
    <>
      <SEOHead 
        title="AI-Powered DevOps - Zion Tech Group"
        description="Revolutionize your DevOps with AI-powered automation, intelligent monitoring, and predictive analytics for faster, more reliable deployments."
        keywords="AI DevOps, automated deployment, intelligent monitoring, DevOps automation, AI infrastructure"
      />
      <Helmet>
        <title>AI-Powered DevOps - Intelligent Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your DevOps with AI-powered automation. Reduce deployment time by 80%, eliminate manual tasks, and achieve 99.9% system reliability." />
        <meta name="keywords" content="AI DevOps, automated deployment, intelligent monitoring, DevOps automation, AI infrastructure, continuous integration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered DevOps
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your DevOps with AI-powered automation. Reduce deployment time by 80%, eliminate manual tasks, 
                and achieve 99.9% system reliability with intelligent monitoring and predictive analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Monitor className="mr-2 w-5 h-5" />
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Capabilities</h2>
              <p className="text-xl text-gray-300">Comprehensive DevOps automation with AI intelligence</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
              <p className="text-xl text-gray-300">Measurable impact on your DevOps operations</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">80%</h3>
                <p className="text-gray-300">Faster Deployments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">95%</h3>
                <p className="text-gray-300">Task Automation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">99.9%</h3>
                <p className="text-gray-300">System Reliability</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">40%</h3>
                <p className="text-gray-300">Cost Reduction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations using our AI-powered DevOps platform to achieve faster, more reliable deployments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiPoweredDevops;
