import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Database, Code, Smartphone, Brain, Cloud, Lock, BarChart3, Users, Settings, Target, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "Advanced business intelligence and analytics platform with real-time dashboards, predictive analytics, and automated reporting.",
      features: ["Real-time dashboards", "Predictive analytics", "Automated reporting", "Custom KPI tracking", "Data visualization"],
      price: "$99/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro"
    },
    {
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring and threat detection system with automated incident response and compliance reporting.",
      features: ["Threat detection", "Automated response", "Compliance reporting", "Security monitoring", "Incident management"],
      price: "$149/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/zion-security-shield"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform with automated content generation, SEO optimization, and social media scheduling.",
      features: ["AI content generation", "SEO optimization", "Social scheduling", "Content calendar", "Brand voice consistency"],
      price: "$79/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      link: "/zion-content-studio"
    },
    {
      name: "Zion Project Master",
      description: "Complete project management solution with AI-powered task automation, resource optimization, and real-time collaboration tools.",
      features: ["AI task automation", "Resource optimization", "Team collaboration", "Progress tracking", "Risk management"],
      price: "$89/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-project-master"
    },
    {
      name: "Zion Email Automation",
      description: "Advanced email marketing automation with AI-driven personalization, A/B testing, and comprehensive analytics.",
      features: ["AI personalization", "A/B testing", "Email analytics", "List segmentation", "Automated workflows"],
      price: "$69/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      link: "/zion-email-automation"
    },
    {
      name: "Zion Invoice Genius",
      description: "Smart invoicing and payment processing system with automated billing, payment tracking, and financial reporting.",
      features: ["Automated billing", "Payment tracking", "Financial reporting", "Tax calculations", "Client portal"],
      price: "$59/month",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/zion-invoice-genius"
    }
  ];

  const aiServices = [
    {
      name: "AI Business Intelligence Pro",
      description: "Advanced AI-powered business intelligence with machine learning insights, predictive analytics, and automated decision support.",
      features: ["ML insights", "Predictive analytics", "Decision support", "Data mining", "Trend analysis"],
      price: "$199/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/ai-business-intelligence-pro"
    },
    {
      name: "AI Cybersecurity Suite Pro",
      description: "Next-generation AI cybersecurity with behavioral analysis, threat hunting, and automated incident response.",
      features: ["Behavioral analysis", "Threat hunting", "Incident response", "Vulnerability scanning", "Compliance monitoring"],
      price: "$299/month",
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/ai-cybersecurity-suite-pro"
    },
    {
      name: "AI Content Generation Pro",
      description: "Enterprise-grade AI content creation with multi-language support, brand voice training, and content optimization.",
      features: ["Multi-language", "Brand voice training", "Content optimization", "Plagiarism detection", "SEO integration"],
      price: "$179/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/ai-content-generation-pro"
    },
    {
      name: "AI Customer Support Bot",
      description: "Intelligent customer support automation with natural language processing, sentiment analysis, and human handoff capabilities.",
      features: ["NLP processing", "Sentiment analysis", "Human handoff", "Multi-channel support", "Learning capabilities"],
      price: "$129/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-customer-support-chatbot"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure Solutions",
      description: "Complete cloud migration and infrastructure management with 24/7 monitoring, security, and optimization.",
      features: ["Cloud migration", "Infrastructure management", "24/7 monitoring", "Security hardening", "Cost optimization"],
      price: "Starting at $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      link: "/cloud-infrastructure"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity services including penetration testing, security audits, and incident response.",
      features: ["Penetration testing", "Security audits", "Incident response", "Vulnerability assessment", "Compliance consulting"],
      price: "Starting at $1,500/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/cybersecurity-solutions"
    },
    {
      name: "Custom Software Development",
      description: "Bespoke software solutions tailored to your business needs with modern technologies and agile development.",
      features: ["Custom development", "Modern technologies", "Agile methodology", "Quality assurance", "Ongoing support"],
      price: "Starting at $150/hour",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/custom-software"
    },
    {
      name: "5G Network Implementation",
      description: "Complete 5G network design, implementation, and optimization for enterprise and smart city applications.",
      features: ["Network design", "5G implementation", "Performance optimization", "IoT integration", "Smart city solutions"],
      price: "Starting at $5,000/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/5g-implementation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services, IT solutions, and micro SAAS products. Transform your business with our cutting-edge technology solutions."
        />
        <meta
          name="keywords"
          content="AI services, IT solutions, micro SAAS, business intelligence, cybersecurity, cloud infrastructure, 5G solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </section>

        {/* Micro SAAS Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions for immediate deployment. No setup required, start using today.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions to transform your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">{service.price}</span>
                    <Link
                      to={service.link}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions for modern businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">{service.price}</span>
                    <Link
                      to={service.link}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and discover how our solutions can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
