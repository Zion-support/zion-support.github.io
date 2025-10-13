import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Mail, 
  Calendar, 
  FileText, 
  Users, 
  CreditCard,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Lock
} from "lucide-react";

const MicroSAASPage = () => {
  const microSAASServices = [
    {
      id: "ai-email-automation",
      title: "AI Email Automation Pro",
      description: "Intelligent email marketing automation with AI-powered personalization, A/B testing, and advanced analytics.",
      features: [
        "AI-powered email personalization",
        "Advanced segmentation",
        "Automated drip campaigns",
        "Real-time analytics dashboard",
        "A/B testing suite",
        "Integration with 50+ platforms"
      ],
      pricing: {
        starter: "$29/month",
        pro: "$79/month",
        enterprise: "$199/month"
      },
      icon: <Mail className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-email-automation",
      popular: true
    },
    {
      id: "smart-calendar-scheduler",
      title: "Smart Calendar Scheduler",
      description: "AI-powered scheduling assistant that handles complex meeting coordination, time zone management, and conflict resolution.",
      features: [
        "AI meeting optimization",
        "Multi-timezone support",
        "Conflict resolution",
        "Integration with all major calendars",
        "Smart buffer time management",
        "Team availability insights"
      ],
      pricing: {
        starter: "$19/month",
        pro: "$49/month",
        enterprise: "$129/month"
      },
      icon: <Calendar className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-smart-calendar",
      popular: false
    },
    {
      id: "invoice-generator-ai",
      title: "AI Invoice Generator",
      description: "Automated invoice generation with AI-powered expense categorization, tax calculation, and payment tracking.",
      features: [
        "AI expense categorization",
        "Automatic tax calculations",
        "Multi-currency support",
        "Payment tracking",
        "Custom branding",
        "Integration with accounting software"
      ],
      pricing: {
        starter: "$15/month",
        pro: "$39/month",
        enterprise: "$99/month"
      },
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/ai-invoice-generator",
      popular: false
    },
    {
      id: "social-media-scheduler",
      title: "Social Media Scheduler Pro",
      description: "AI-powered social media management with content optimization, posting automation, and performance analytics.",
      features: [
        "AI content optimization",
        "Multi-platform posting",
        "Optimal timing suggestions",
        "Hashtag research",
        "Performance analytics",
        "Content calendar management"
      ],
      pricing: {
        starter: "$25/month",
        pro: "$59/month",
        enterprise: "$149/month"
      },
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/social-media-scheduler",
      popular: true
    },
    {
      id: "expense-tracker-ai",
      title: "AI Expense Tracker",
      description: "Smart expense tracking with receipt scanning, categorization, and financial insights powered by AI.",
      features: [
        "Receipt scanning with OCR",
        "AI categorization",
        "Budget tracking",
        "Financial insights",
        "Tax preparation support",
        "Multi-account sync"
      ],
      pricing: {
        starter: "$12/month",
        pro: "$29/month",
        enterprise: "$79/month"
      },
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      link: "/expense-tracker-ai",
      popular: false
    },
    {
      id: "team-collaboration-hub",
      title: "Team Collaboration Hub",
      description: "All-in-one team collaboration platform with AI-powered project management, communication, and productivity tools.",
      features: [
        "AI project management",
        "Real-time collaboration",
        "Task automation",
        "Team analytics",
        "File sharing & storage",
        "Video conferencing integration"
      ],
      pricing: {
        starter: "$39/month",
        pro: "$89/month",
        enterprise: "$199/month"
      },
      icon: <Users className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/team-collaboration-hub",
      popular: true
    }
  ];

  const benefits = [
    {
      title: "Immediate Deployment",
      description: "Ready-to-use solutions that can be deployed in minutes, not months.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Cost Effective",
      description: "Affordable pricing starting from $12/month with no setup fees or long-term contracts.",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      title: "AI-Powered",
      description: "Built with cutting-edge AI technology for maximum efficiency and automation.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Grow with your business with flexible plans and enterprise features.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Ready-to-use micro SAAS solutions for immediate deployment. AI-powered tools for email automation, scheduling, invoicing, and more."
        />
        <meta
          name="keywords"
          content="micro saas, saas solutions, business automation, AI tools, productivity software"
        />
      </Helmet>

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
            Ready-to-use software solutions that can be deployed immediately. 
            AI-powered tools designed to streamline your business operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses that need powerful tools without the complexity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
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
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered business tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">Starting from</div>
                  <div className="text-2xl font-bold text-white">
                    {service.pricing.starter}
                  </div>
                </div>
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
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
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our micro SAAS solutions today and see immediate results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Contact Us Now
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
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;