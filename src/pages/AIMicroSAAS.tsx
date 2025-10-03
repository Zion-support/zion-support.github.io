import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  FileText, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Settings,
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Lock, 
  TrendingUp, 
  Database 
} from "lucide-react";

const AIMicroSAAS: React.FC = () => {
  const microSaaSProducts = [
    {
      id: "ai-content-optimizer",
      name: "AI Content Optimizer Pro",
      blurb: "AI-powered content creation and optimization platform for marketing teams",
      price: "$299 - $1,499/month",
      eta: "1-2 weeks",
      category: "Content AI",
      icon: FileText,
      features: [
        "AI-generated blog posts, social media content, and email campaigns",
        "SEO optimization with real-time keyword analysis",
        "Brand voice consistency across all content",
        "A/B testing and performance analytics",
      ],
    },
    {
      id: "automated-workflow-engine",
      name: "Automated Workflow Engine",
      blurb: "Streamline business processes with intelligent workflow automation",
      price: "$299 - $1,299/month",
      eta: "2-3 weeks",
      category: "Automation",
      icon: Zap,
      features: [
        "Drag-and-drop workflow builder",
        "Integration with 100+ business tools",
        "Real-time process monitoring",
        "Custom automation triggers",
      ],
    },
    {
      id: "security-compliance-monitor",
      name: "Security & Compliance Monitor",
      blurb: "Automated security monitoring and compliance reporting for businesses",
      price: "$499 - $2,499/month",
      eta: "3-4 weeks",
      category: "Security",
      icon: Shield,
      features: [
        "Real-time security threat detection",
        "Automated compliance reporting",
        "Risk assessment and mitigation",
        "24/7 security monitoring",
      ],
    },
    {
      id: "analytics-dashboard-pro",
      name: "Analytics Dashboard Pro",
      blurb: "Advanced business intelligence and analytics platform",
      price: "$199 - $999/month",
      eta: "1-2 weeks",
      category: "Analytics",
      icon: BarChart3,
      features: [
        "Custom dashboard creation",
        "Real-time data visualization",
        "Predictive analytics",
        "Multi-source data integration",
      ],
    },
    {
      id: "team-collaboration-hub",
      name: "Team Collaboration Hub",
      blurb: "AI-enhanced team collaboration and project management platform",
      price: "$149 - $799/month",
      eta: "2-3 weeks",
      category: "Collaboration",
      icon: Users,
      features: [
        "Smart task assignment",
        "AI-powered meeting summaries",
        "Project timeline optimization",
        "Team performance insights",
      ],
    },
    {
      id: "infrastructure-monitor",
      name: "Infrastructure Monitor",
      blurb: "Comprehensive IT infrastructure monitoring and management",
      price: "$399 - $1,999/month",
      eta: "4-5 weeks",
      category: "Infrastructure",
      icon: Settings,
      features: [
        "Server and network monitoring",
        "Automated incident response",
        "Performance optimization",
        "Cost optimization recommendations",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Micro-SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our suite of AI-powered micro-SaaS solutions designed to streamline business operations and drive growth." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Micro-SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with our suite of intelligent, scalable micro-SaaS applications. 
              Each solution is designed to solve specific business challenges with cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Explore Solutions
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Our Micro-SaaS Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <product.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.blurb}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <div className="mb-6">
                    <span className="text-sm text-gray-500">ETA: </span>
                    <span className="text-sm font-medium text-gray-700">{product.eta}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 w-4 h-4 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Why Choose Our Micro-SaaS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Rapid Deployment</h3>
                <p className="text-gray-600">
                  Get up and running in weeks, not months. Our solutions are designed for quick implementation.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
                <p className="text-gray-600">
                  Bank-level security with SOC 2 compliance and end-to-end encryption.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Scalable Architecture</h3>
                <p className="text-gray-600">
                  Built to grow with your business, from startup to enterprise scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Seamless Integration
            </h2>
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Connect with Your Existing Tools</h3>
                <p className="text-gray-600 mb-6">
                  Our micro-SaaS solutions integrate seamlessly with your existing technology stack
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">CRM Systems</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Settings className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">Project Management</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">Communication Tools</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">Analytics Platforms</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  RESTful APIs, webhooks, and pre-built connectors for seamless integration with your existing tools
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Let's discuss how our AI micro-SaaS solutions can streamline your operations and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
';

export default AIMicroSAAS;