import React from 'react';
import { ArrowRight, CheckCircle, Star, Package, Shield, BarChart3, Cloud, Users, Zap, Mail } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 1,
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Integration"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      id: 2,
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reports"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      featured: true
    },
    {
      id: 3,
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      features: ["End-to-End Encryption", "Unlimited Storage", "File Sharing", "Backup & Recovery"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      featured: true
    },
    {
      id: 4,
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      price: "From $199/month",
      features: ["Lead Scoring", "Automation", "Pipeline Management", "Customer Insights"],
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      featured: false
    },
    {
      id: 5,
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform for marketing teams",
      price: "From $149/month",
      features: ["AI Content Generation", "Brand Guidelines", "Collaboration Tools", "Publishing Calendar"],
      icon: <Package className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      featured: false
    },
    {
      id: 6,
      name: "Zion Workflow Automation",
      description: "Streamline business processes with intelligent automation and workflow management",
      price: "From $179/month",
      features: ["Process Automation", "Workflow Builder", "Integration Hub", "Performance Analytics"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      featured: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data insights. We've seen a 40% improvement in decision-making speed.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The security features in Zion Security Shield are outstanding. We feel completely protected.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Cloud Vault has simplified our file management. The unlimited storage is a game-changer.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Tools"
        description="Discover our comprehensive suite of micro SAAS solutions designed to accelerate your business growth. From AI analytics to cybersecurity, we have the tools you need."
        keywords="micro SAAS, business software, AI tools, analytics, cybersecurity, cloud storage, CRM, automation"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready-to-use software solutions that can transform your business operations immediately. 
            No complex setup, no lengthy implementation - just powerful tools that work from day one.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {microSaasProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                product.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {product.featured && (
                <div className="absolute -top-3 -right-3">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              )}

              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center text-white mr-4`}>
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <p className="text-cyan-400 font-semibold">{product.price}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group">
              <Mail className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;