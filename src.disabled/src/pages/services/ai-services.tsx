import React from 'react';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export default function AIServices() {
  const aiServices = [
    {
      title: "AI Revenue Optimization Platform",
      description: "Increase revenue by 25-40% with AI-powered optimization that intelligently manages pricing, forecasting, and customer analytics.",
      price: "From $2,999/month",
      features: [
        "AI-Powered Revenue Forecasting",
        "Dynamic Pricing Optimization", 
        "Customer Lifetime Value Analysis",
        "Revenue Leakage Detection",
        "Market Trend Analysis",
        "Competitive Intelligence"
      ],
      benefits: [
        "Increase revenue by 25-40%",
        "Reduce revenue leakage by 60%",
        "Optimize pricing strategies",
        "Improve customer retention"
      ],
      href: "/services/ai-revenue-optimization-platform",
      color: "from-purple-400 to-pink-500",
      popular: true,
      marketPrice: "$5,000-15,000/month",
      implementationTime: "2-4 weeks"
    },
    {
      title: "AI Autonomous DevOps Platform",
      description: "Eliminate 95% of manual DevOps tasks and reduce deployment time by 80% with intelligent automation.",
      price: "From $1,999/month",
      features: [
        "Autonomous Code Deployment",
        "AI-Powered Infrastructure Management",
        "Intelligent Monitoring & Alerting",
        "Self-Healing Infrastructure",
        "Automated Security Scanning",
        "Performance Optimization"
      ],
      benefits: [
        "Reduce deployment time by 80%",
        "Eliminate 95% of manual tasks",
        "Improve reliability by 99.9%",
        "Reduce costs by 40%"
      ],
      href: "/services/ai-autonomous-devops-platform",
      color: "from-blue-400 to-cyan-500",
      marketPrice: "$3,000-12,000/month",
      implementationTime: "3-6 weeks"
    },
    {
      title: "AI Customer Experience Intelligence",
      description: "Transform customer interactions with AI-powered sentiment analysis, predictive support, and personalized experiences.",
      price: "From $1,499/month",
      features: [
        "Real-time Sentiment Analysis",
        "Predictive Customer Support",
        "Personalized Experience Engine",
        "Customer Journey Optimization",
        "Churn Prediction & Prevention",
        "Multi-channel Integration"
      ],
      benefits: [
        "Increase customer satisfaction by 45%",
        "Reduce support costs by 50%",
        "Improve retention rates by 35%",
        "Boost conversion rates by 30%"
      ],
      href: "/services/ai-customer-experience-intelligence",
      color: "from-green-400 to-emerald-500",
      marketPrice: "$2,500-8,000/month",
      implementationTime: "2-3 weeks"
    },
    {
      title: "AI Business Intelligence Dashboard",
      description: "Get actionable insights from your data with advanced AI analytics, predictive modeling, and automated reporting.",
      price: "From $999/month",
      features: [
        "Advanced Data Analytics",
        "Predictive Business Modeling",
        "Automated Report Generation",
        "Real-time KPI Monitoring",
        "Custom Dashboard Creation",
        "Data Visualization Tools"
      ],
      benefits: [
        "Make data-driven decisions 60% faster",
        "Identify opportunities 3x quicker",
        "Reduce manual reporting by 80%",
        "Improve forecast accuracy by 40%"
      ],
      href: "/services/ai-business-intelligence-dashboard",
      color: "from-orange-400 to-red-500",
      marketPrice: "$1,500-6,000/month",
      implementationTime: "1-2 weeks"
    },
    {
      title: "AI Cybersecurity Threat Intelligence",
      description: "Protect your organization with AI-powered threat detection, automated response, and predictive security analytics.",
      price: "From $2,499/month",
      features: [
        "AI Threat Detection",
        "Automated Incident Response",
        "Predictive Security Analytics",
        "Behavioral Analysis",
        "Zero-day Attack Prevention",
        "Compliance Monitoring"
      ],
      benefits: [
        "Detect threats 10x faster",
        "Reduce false positives by 85%",
        "Prevent 99.7% of attacks",
        "Comply with security standards"
      ],
      href: "/services/ai-cybersecurity-threat-intelligence",
      color: "from-red-400 to-pink-500",
      marketPrice: "$4,000-15,000/month",
      implementationTime: "4-8 weeks"
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Optimize your supply chain with AI-powered demand forecasting, inventory management, and logistics optimization.",
      price: "From $1,799/month",
      features: [
        "Demand Forecasting",
        "Inventory Optimization",
        "Logistics Route Planning",
        "Supplier Risk Assessment",
        "Cost Optimization",
        "Sustainability Tracking"
      ],
      benefits: [
        "Reduce inventory costs by 25%",
        "Improve delivery times by 40%",
        "Minimize supply chain disruptions",
        "Increase sustainability metrics"
      ],
      href: "/services/ai-supply-chain-optimization",
      color: "from-indigo-400 to-purple-500",
      marketPrice: "$2,500-10,000/month",
      implementationTime: "3-5 weeks"
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Brain className="w-5 h-5 mr-2" />
              Revolutionary AI Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI-Powered
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Business Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI services. From revenue optimization to autonomous DevOps, 
              our AI solutions deliver measurable results and competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#services" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Explore AI Services
              </Link>
              <Link 
                href="#contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to drive growth, efficiency, and innovation across your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                {service.popular && (
                  <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="text-2xl font-bold text-indigo-600 mb-4">{service.price}</div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <TrendingUp className="w-3 h-3 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.implementationTime}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span>Market: {service.marketPrice}</span>
                    </div>
                  </div>

                  <Link
                    to={service.href}
                    className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-semibold flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group AI Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge AI solutions with proven results and exceptional support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Average 300-500% ROI within 6 months across all our AI solutions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Implementation</h3>
              <p className="text-gray-600">Most AI solutions deployed within 2-8 weeks with minimal disruption</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2 compliant with enterprise-grade security and data protection</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">24/7 support from our team of AI and industry experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300">Contact our AI experts for a personalized consultation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-indigo-400 mr-3" />
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-indigo-400 mr-3" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-indigo-400 mr-3" />
                  <a href={contactInfo.website} className="text-gray-300 hover:text-white">
                    {contactInfo.website}
                  </a>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-indigo-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Schedule AI Consultation</h3>
              <p className="text-gray-600 mb-4">Get a personalized consultation to discuss your AI needs and discover the best solutions for your business</p>
              <Link 
                to="/contact" 
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}