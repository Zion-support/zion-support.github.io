import { ArrowRight, Zap, Shield, Cloud, BarChart3, Users, MessageSquare, Eye, FileText, Cpu, Lock, Star, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "Advanced business analytics platform with AI-powered insights, real-time dashboards, and predictive analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$299/month",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "API access"],
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro"
    },
    {
      title: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring and protection with AI-powered threat detection and automated response.",
      icon: <Shield className="w-8 h-8" />,
      price: "$199/month",
      features: ["Threat detection", "Automated response", "Security monitoring", "Compliance reports"],
      color: "from-red-500 to-pink-500",
      link: "/zion-security-shield"
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage and file management solution with advanced encryption and collaboration features.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$149/month",
      features: ["Secure storage", "File sharing", "Version control", "Team collaboration"],
      color: "from-green-500 to-emerald-500",
      link: "/zion-cloud-vault"
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation and management platform for blogs, social media, and marketing materials.",
      icon: <FileText className="w-8 h-8" />,
      price: "$179/month",
      features: ["AI content generation", "SEO optimization", "Multi-format support", "Content scheduling"],
      color: "from-purple-500 to-pink-500",
      link: "/zion-content-studio"
    },
    {
      title: "Zion Data Sync",
      description: "Automated data synchronization and integration platform for seamless data flow between systems.",
      icon: <Cpu className="w-8 h-8" />,
      price: "$229/month",
      features: ["Real-time sync", "Multiple integrations", "Data transformation", "Error handling"],
      color: "from-orange-500 to-red-500",
      link: "/zion-data-sync"
    },
    {
      title: "Zion Lead Magnet",
      description: "Advanced lead generation and nurturing platform with AI-powered lead scoring and automation.",
      icon: <Users className="w-8 h-8" />,
      price: "$249/month",
      features: ["Lead scoring", "Email automation", "CRM integration", "Analytics dashboard"],
      color: "from-indigo-500 to-purple-500",
      link: "/zion-lead-magnet"
    },
    {
      title: "Zion Project Master",
      description: "Comprehensive project management solution with AI-powered insights and team collaboration tools.",
      icon: <Zap className="w-8 h-8" />,
      price: "$199/month",
      features: ["Project tracking", "Team collaboration", "Resource management", "Progress analytics"],
      color: "from-teal-500 to-cyan-500",
      link: "/zion-project-master"
    },
    {
      title: "Zion Email Automation",
      description: "Intelligent email marketing platform with AI-powered personalization and automated campaigns.",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "$159/month",
      features: ["Email automation", "Personalization", "A/B testing", "Analytics"],
      color: "from-yellow-500 to-orange-500",
      link: "/zion-email-automation"
    },
    {
      title: "Zion Social Scheduler",
      description: "AI-powered social media management platform with content scheduling and performance analytics.",
      icon: <Eye className="w-8 h-8" />,
      price: "$129/month",
      features: ["Content scheduling", "Multi-platform posting", "Analytics", "Hashtag optimization"],
      color: "from-pink-500 to-rose-500",
      link: "/zion-social-scheduler"
    },
    {
      title: "Zion Workflow Automation",
      description: "No-code workflow automation platform to streamline business processes and increase efficiency.",
      icon: <Cpu className="w-8 h-8" />,
      price: "$189/month",
      features: ["Visual workflow builder", "API integrations", "Conditional logic", "Process monitoring"],
      color: "from-cyan-500 to-blue-500",
      link: "/zion-workflow-automation"
    },
    {
      title: "Zion Invoice Genius",
      description: "Smart invoicing and payment management platform with automated billing and financial tracking.",
      icon: <FileText className="w-8 h-8" />,
      price: "$139/month",
      features: ["Automated invoicing", "Payment tracking", "Financial reports", "Tax calculations"],
      color: "from-emerald-500 to-green-500",
      link: "/zion-invoice-genius"
    },
    {
      title: "Zion Inventory Smart",
      description: "AI-powered inventory management system with demand forecasting and automated reordering.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$219/month",
      features: ["Inventory tracking", "Demand forecasting", "Automated reordering", "Analytics"],
      color: "from-violet-500 to-purple-500",
      link: "/zion-inventory-smart"
    },
    {
      title: "Zion Compliance Manager",
      description: "Automated compliance monitoring and reporting platform for regulatory requirements and standards.",
      icon: <Lock className="w-8 h-8" />,
      price: "$279/month",
      features: ["Compliance monitoring", "Automated reporting", "Risk assessment", "Documentation"],
      color: "from-slate-500 to-gray-500",
      link: "/zion-compliance-manager"
    },
    {
      title: "Zion Performance Monitor",
      description: "Real-time performance monitoring and optimization platform for applications and infrastructure.",
      icon: <Cpu className="w-8 h-8" />,
      price: "$169/month",
      features: ["Real-time monitoring", "Performance alerts", "Optimization suggestions", "Detailed reports"],
      color: "from-amber-500 to-yellow-500",
      link: "/zion-performance-monitor"
    },
    {
      title: "Zion Customer Insights",
      description: "AI-powered customer analytics platform with sentiment analysis and behavior prediction.",
      icon: <Users className="w-8 h-8" />,
      price: "$239/month",
      features: ["Customer analytics", "Sentiment analysis", "Behavior prediction", "Segmentation"],
      color: "from-rose-500 to-pink-500",
      link: "/ai-customer-insights"
    }
  ];

  const benefits = [
    "Deploy in minutes, not months",
    "No technical expertise required",
    "Scalable from startup to enterprise",
    "24/7 automated support",
    "Regular updates and new features",
    "Secure and compliant by design"
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta
          name="description"
          content="Deploy powerful business tools instantly with our micro SAAS solutions. Analytics, security, content management, and more. Starting from $129/month."
        />
        <meta
          name="keywords"
          content="micro SAAS, business software, analytics platform, security tools, content management, workflow automation, business solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Deploy powerful business tools instantly with our pre-built micro SAAS solutions. 
              No development time, no technical expertise required - just powerful tools that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SAAS solutions are designed for immediate deployment and maximum impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of ready-to-deploy business solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
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
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Deploy Your First Micro SAAS?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and discover how our micro SAAS solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}