import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Shield, 
  Cloud, 
  FileText, 
  Database, 
  Users, 
  Calendar, 
  Mail, 
  Share2, 
  Workflow, 
  Receipt, 
  Package, 
  CheckCircle, 
  Activity,
  ArrowRight,
  Star,
  Zap,
  Globe,
  Lock,
  TrendingUp
} from "lucide-react";

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      title: "Zion Analytics Pro",
      description: "Advanced business intelligence and analytics platform with real-time dashboards, predictive analytics, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "$99/month",
      features: [
        "Real-time data visualization",
        "Predictive analytics",
        "Custom dashboard builder",
        "Automated report generation",
        "API integrations",
        "White-label options"
      ],
      benefits: [
        "Increase data-driven decisions by 300%",
        "Reduce reporting time by 80%",
        "Identify trends before competitors",
        "Scale with your business growth"
      ],
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      title: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring and threat detection system with automated incident response and compliance reporting.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      price: "$149/month",
      features: [
        "24/7 threat monitoring",
        "Automated incident response",
        "Compliance reporting (SOC2, GDPR)",
        "Vulnerability scanning",
        "Security awareness training",
        "Incident forensics"
      ],
      benefits: [
        "Prevent 99.9% of cyber attacks",
        "Reduce security incidents by 95%",
        "Ensure compliance automatically",
        "Protect customer data and reputation"
      ],
      link: "/zion-security-shield"
    },
    {
      id: "zion-cloud-vault",
      title: "Zion Cloud Vault",
      description: "Enterprise-grade cloud storage and backup solution with advanced encryption, version control, and disaster recovery.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "$79/month",
      features: [
        "Unlimited cloud storage",
        "End-to-end encryption",
        "Version control & history",
        "Automated backups",
        "Disaster recovery",
        "Team collaboration tools"
      ],
      benefits: [
        "Never lose important files",
        "Access files from anywhere",
        "Collaborate seamlessly",
        "Reduce storage costs by 60%"
      ],
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-content-studio",
      title: "Zion Content Studio",
      description: "AI-powered content creation platform with automated writing, design generation, and multi-channel publishing capabilities.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      price: "$129/month",
      features: [
        "AI content generation",
        "Multi-language support",
        "Brand voice consistency",
        "SEO optimization",
        "Social media scheduling",
        "Content analytics"
      ],
      benefits: [
        "Create 10x more content",
        "Maintain brand consistency",
        "Improve SEO rankings",
        "Save 70% on content costs"
      ],
      link: "/zion-content-studio"
    },
    {
      id: "zion-data-sync",
      title: "Zion Data Sync",
      description: "Intelligent data synchronization platform that connects all your business applications and maintains data consistency across systems.",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      price: "$89/month",
      features: [
        "Real-time data sync",
        "100+ app integrations",
        "Data transformation",
        "Conflict resolution",
        "Error handling & retry",
        "Custom mapping rules"
      ],
      benefits: [
        "Eliminate data silos",
        "Reduce manual data entry",
        "Improve data accuracy",
        "Save 20+ hours per week"
      ],
      link: "/zion-data-sync"
    },
    {
      id: "zion-lead-magnet",
      title: "Zion Lead Magnet",
      description: "Advanced lead generation and nurturing platform with automated email sequences, lead scoring, and conversion optimization.",
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "$119/month",
      features: [
        "Lead capture forms",
        "Automated email sequences",
        "Lead scoring & qualification",
        "A/B testing tools",
        "CRM integration",
        "Conversion tracking"
      ],
      benefits: [
        "Increase leads by 400%",
        "Improve conversion rates",
        "Automate follow-ups",
        "Generate qualified prospects"
      ],
      link: "/zion-lead-magnet"
    },
    {
      id: "zion-project-master",
      title: "Zion Project Master",
      description: "Comprehensive project management platform with AI-powered task allocation, resource optimization, and progress tracking.",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "$109/month",
      features: [
        "AI task allocation",
        "Resource optimization",
        "Progress tracking",
        "Team collaboration",
        "Time tracking",
        "Budget management"
      ],
      benefits: [
        "Complete projects 30% faster",
        "Reduce project costs",
        "Improve team productivity",
        "Meet deadlines consistently"
      ],
      link: "/zion-project-master"
    },
    {
      id: "zion-email-automation",
      title: "Zion Email Automation",
      description: "Advanced email marketing automation platform with behavioral triggers, personalization, and advanced analytics.",
      icon: <Mail className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "$79/month",
      features: [
        "Behavioral triggers",
        "Advanced personalization",
        "A/B testing",
        "Deliverability optimization",
        "Advanced analytics",
        "Template library"
      ],
      benefits: [
        "Increase email engagement by 250%",
        "Reduce unsubscribe rates",
        "Improve deliverability",
        "Generate more revenue"
      ],
      link: "/zion-email-automation"
    },
    {
      id: "zion-social-scheduler",
      title: "Zion Social Scheduler",
      description: "Multi-platform social media management tool with AI-powered content optimization and performance analytics.",
      icon: <Share2 className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      price: "$99/month",
      features: [
        "Multi-platform posting",
        "AI content optimization",
        "Optimal timing suggestions",
        "Performance analytics",
        "Hashtag research",
        "Competitor analysis"
      ],
      benefits: [
        "Grow social following by 300%",
        "Increase engagement rates",
        "Save 15+ hours per week",
        "Improve brand visibility"
      ],
      link: "/zion-social-scheduler"
    },
    {
      id: "zion-workflow-automation",
      title: "Zion Workflow Automation",
      description: "No-code workflow automation platform that connects your apps and automates repetitive business processes.",
      icon: <Workflow className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      price: "$139/month",
      features: [
        "Visual workflow builder",
        "200+ app integrations",
        "Conditional logic",
        "Error handling",
        "Performance monitoring",
        "Custom triggers"
      ],
      benefits: [
        "Automate 80% of repetitive tasks",
        "Reduce human errors",
        "Scale operations efficiently",
        "Save 25+ hours per week"
      ],
      link: "/zion-workflow-automation"
    },
    {
      id: "zion-invoice-genius",
      title: "Zion Invoice Genius",
      description: "Smart invoicing and payment processing platform with automated billing, payment tracking, and financial reporting.",
      icon: <Receipt className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      price: "$69/month",
      features: [
        "Automated invoicing",
        "Payment processing",
        "Late payment reminders",
        "Financial reporting",
        "Tax calculations",
        "Client portal"
      ],
      benefits: [
        "Get paid 40% faster",
        "Reduce late payments",
        "Automate billing processes",
        "Improve cash flow"
      ],
      link: "/zion-invoice-genius"
    },
    {
      id: "zion-inventory-smart",
      title: "Zion Inventory Smart",
      description: "AI-powered inventory management system with demand forecasting, automated reordering, and supply chain optimization.",
      icon: <Package className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      price: "$159/month",
      features: [
        "AI demand forecasting",
        "Automated reordering",
        "Multi-location tracking",
        "Supplier management",
        "Cost optimization",
        "Real-time alerts"
      ],
      benefits: [
        "Reduce stockouts by 90%",
        "Lower inventory costs",
        "Improve cash flow",
        "Optimize supply chain"
      ],
      link: "/zion-inventory-smart"
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive micro SAAS solutions for modern businesses. AI-powered tools, automation platforms, and productivity software to accelerate your growth."
        />
        <meta
          name="keywords"
          content="micro saas, business software, automation tools, AI solutions, productivity software, business intelligence"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="neon-cyan">Micro SAAS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, ready-to-use software solutions that transform your business operations. 
              From AI-powered analytics to automated workflows, we have the tools you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center neon-glow"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">Call: {contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.website}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="neon-purple">Micro SAAS</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of business software solutions, 
                each designed to solve specific business challenges and drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={service.id}
                  className="futuristic-card group p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Benefits:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-purple-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose <span className="neon-green">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We don't just provide software - we provide solutions that transform your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300 text-sm">
                  Our solutions have helped 1000+ businesses increase productivity by 300% on average.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300 text-sm">
                  Bank-level security with SOC2 compliance and end-to-end encryption.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300 text-sm">
                  Advanced AI and machine learning capabilities built into every solution.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300 text-sm">
                  Round-the-clock technical support and customer success management.
                </p>
              </div>
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
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center neon-glow"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}