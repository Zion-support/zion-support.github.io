import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Target, 
  Calendar,
  CheckCircle,
  Star,
  Sparkles,
  Mail,
  Smartphone,
  Globe
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics for data-driven decisions.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro",
      price: "From $299/month",
      originalPrice: "$599/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      popular: true
    },
    {
      title: "Zion Security Shield Pro",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/zion-security-shield-pro",
      price: "From $499/month",
      originalPrice: "$999/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response", "Security Training"],
      popular: true
    },
    {
      title: "Zion Cloud Vault Pro",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced backup features.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/zion-cloud-vault-pro",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["End-to-end Encryption", "Unlimited Storage", "Auto Backup", "File Sharing", "Version Control", "Mobile Sync"],
      popular: true
    },
    {
      title: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automation, and sales forecasting.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-ai-crm-pro",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration", "Pipeline Management", "Performance Analytics"]
    },
    {
      title: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation, multi-channel orchestration, and advanced analytics.",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/zion-ai-marketing-automation-pro",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Personalization", "Analytics Dashboard"]
    },
    {
      title: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting.",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/zion-ai-project-manager-pro",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["Task Automation", "Resource Planning", "Progress Tracking", "Team Collaboration", "Risk Assessment", "Performance Metrics"]
    },
    {
      title: "Zion AI Video Generator Pro",
      description: "AI-powered video creation platform with automated editing, voice synthesis, and multi-format output capabilities.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      link: "/zion-ai-video-generator",
      price: "From $179/month",
      originalPrice: "$359/month",
      features: ["Auto Video Creation", "Voice Synthesis", "Multi-format Output", "Template Library", "Brand Customization", "Analytics"]
    },
    {
      title: "Zion AI Invoice Generator Pro",
      description: "Intelligent invoice generation with automated calculations, payment tracking, and financial reporting capabilities.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/zion-ai-invoice-generator",
      price: "From $79/month",
      originalPrice: "$159/month",
      features: ["Auto Invoice Generation", "Payment Tracking", "Financial Reports", "Tax Calculations", "Client Management", "Payment Reminders"]
    },
    {
      title: "Zion AI Customer Insights Pro",
      description: "Advanced customer analytics platform with sentiment analysis, behavior tracking, and predictive customer modeling.",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      link: "/zion-ai-customer-insights",
      price: "From $229/month",
      originalPrice: "$459/month",
      features: ["Sentiment Analysis", "Behavior Tracking", "Predictive Modeling", "Customer Segmentation", "Churn Prediction", "ROI Analysis"]
    }
  ];

  const benefits = [
    {
      title: "Ready to Deploy",
      description: "All solutions are pre-built and ready for immediate deployment",
      icon: <Zap className="w-6 h-6" />,
      stat: "Deploy in 24 hours"
    },
    {
      title: "Cost Effective",
      description: "Significantly lower costs compared to custom development",
      icon: <BarChart3 className="w-6 h-6" />,
      stat: "70% cost savings"
    },
    {
      title: "Scalable Solutions",
      description: "Grow with your business with flexible scaling options",
      icon: <Cloud className="w-6 h-6" />,
      stat: "Unlimited scaling"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We went from spending hours on reports to getting instant insights.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion AI Marketing Automation Pro increased our campaign effectiveness by 300%. The ROI was immediate and impressive.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions including analytics, security, CRM, marketing automation, and more. Deploy in 24 hours." />
        <meta name="keywords" content="micro SAAS, software solutions, business automation, analytics, CRM, marketing automation, cloud storage, project management" />
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
            Deploy powerful, ready-to-use software solutions in 24 hours. Our micro SAAS platform offers 
            comprehensive business tools that can transform your operations immediately.
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

        {/* Micro SAAS Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {microSaasServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* Pricing */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                    )}
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-xs text-cyan-400 text-center">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>
                
                <div className="mt-4 text-center">
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our micro SAAS solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Deploy Your First Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get started with our micro SAAS solutions today. Deploy in 24 hours and start seeing results immediately.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
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