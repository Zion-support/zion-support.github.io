<<<<<<< HEAD
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Code, 
  Database, 
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Integration"],
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/zion-security-shield",
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reports"],
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-cloud-vault",
      features: ["End-to-end Encryption", "Unlimited Storage", "File Sharing", "Version Control"]
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/zion-ai-crm-pro",
      features: ["Lead Scoring", "Automated Follow-ups", "Sales Analytics", "Integration Hub"]
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      price: "From $149/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/zion-ai-marketing-automation-pro",
      features: ["Content Generation", "Multi-channel Campaigns", "A/B Testing", "Performance Analytics"]
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      price: "From $99/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/zion-ai-project-manager-pro",
      features: ["Task Automation", "Resource Optimization", "Progress Tracking", "Team Collaboration"]
    }
  ];

  const benefits = [
    {
      title: "Ready to Use",
      description: "Deploy immediately with pre-configured solutions",
      icon: <Zap className="w-6 h-6" />,
      stat: "Instant deployment"
    },
    {
      title: "Cost Effective",
      description: "Affordable pricing with no hidden costs",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "Up to 70% savings"
    },
    {
      title: "Scalable",
      description: "Grow with your business needs",
      icon: <Cloud className="w-6 h-6" />,
      stat: "Unlimited scaling"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions</title>
        <meta name="description" content="Discover our comprehensive range of micro SAAS solutions designed to streamline your business operations with ready-to-use software tools." />
        <meta name="keywords" content="micro SAAS, software solutions, business tools, analytics, CRM, project management, marketing automation" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business operations with our comprehensive suite of micro SAAS solutions. 
            Ready-to-use software tools that integrate seamlessly with your existing workflow.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 mb-3">{benefit.description}</p>
              <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
            </div>
          ))}
        </div>

        {/* Micro SAAS Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSaasProducts.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              {product.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </span>
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {product.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {product.name}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {product.description}
              </p>
              
              <div className="text-2xl font-bold text-cyan-400 mb-4">
                {product.price}
              </div>
              
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                Get Started
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team can create a custom micro SAAS solution tailored to your specific business needs. 
              Let's discuss your requirements and build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Discuss Your Needs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Live Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-c4da
