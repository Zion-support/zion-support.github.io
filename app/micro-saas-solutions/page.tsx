'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CogIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CpuChipIcon,
  CloudIcon,
  DatabaseIcon,
  LockClosedIcon,
  KeyIcon,
  EyeIcon,
  LightBulbIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  BeakerIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  HeartIcon,
  StarIcon,
  TrophyIcon,
  GiftIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Micro SaaS Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "description": "Specialized micro SaaS applications and platforms designed for specific business needs and workflows",
    "serviceType": "Software as a Service",
    "areaServed": "Worldwide"
  };

  const microSaaSServices = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence with AI-driven insights and predictive analytics for data-driven decision making. Transform your raw data into actionable insights with our advanced analytics platform.",
      icon: ChartBarIcon,
      price: "$1,500/month",
      features: [
        "Real-time data visualization",
        "AI-powered predictions",
        "Custom dashboard creation",
        "Multi-source data integration",
        "Automated reporting",
        "Mobile-responsive design",
        "API integration",
        "Role-based access control"
      ],
      benefits: [
        "30% faster decision making",
        "95% accuracy in predictions",
        "Real-time insights",
        "Reduced manual reporting by 80%"
      ],
      useCases: [
        "Sales performance tracking",
        "Customer behavior analysis",
        "Financial forecasting",
        "Marketing campaign optimization"
      ],
      technologies: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL", "Redis"],
      href: "/ai-analytics-dashboard"
    },
    {
      title: "Smart Customer Support Bot",
      description: "Intelligent chatbot with natural language processing for 24/7 customer support and lead qualification. Provide instant, accurate responses to customer inquiries while capturing valuable leads.",
      icon: ChatBubbleLeftRightIcon,
      price: "$800/month",
      features: [
        "24/7 availability",
        "Multi-language support",
        "Lead qualification",
        "Ticket management",
        "Analytics dashboard",
        "Integration with CRM",
        "Voice and text support",
        "Escalation to human agents"
      ],
      benefits: [
        "80% query resolution rate",
        "24/7 availability",
        "60% cost reduction",
        "Improved customer satisfaction"
      ],
      useCases: [
        "E-commerce support",
        "Lead generation",
        "FAQ automation",
        "Appointment scheduling"
      ],
      technologies: ["OpenAI GPT", "React", "Node.js", "WebSocket", "MongoDB", "Twilio"],
      href: "/ai-customer-support-bot"
    },
    {
      title: "Automated Content Management",
      description: "AI-powered content creation, optimization, and management system for marketing and documentation. Streamline your content workflow with intelligent automation and optimization.",
      icon: DocumentTextIcon,
      price: "$1,200/month",
      features: [
        "AI content generation",
        "SEO optimization",
        "Multi-language support",
        "Brand consistency",
        "Performance tracking",
        "Content scheduling",
        "Plagiarism detection",
        "Social media integration"
      ],
      benefits: [
        "70% time savings",
        "SEO optimized content",
        "Consistent brand voice",
        "Increased engagement"
      ],
      useCases: [
        "Blog content creation",
        "Social media posts",
        "Product descriptions",
        "Email marketing"
      ],
      technologies: ["GPT-4", "React", "Node.js", "Elasticsearch", "AWS S3", "Stripe"],
      href: "/ai-content-management"
    },
    {
      title: "Smart Inventory Management",
      description: "AI-driven inventory optimization with demand forecasting and automated reordering capabilities. Optimize your supply chain with intelligent inventory management.",
      icon: CogIcon,
      price: "$2,000/month",
      features: [
        "Demand forecasting",
        "Automated reordering",
        "Stock optimization",
        "Supplier management",
        "Analytics dashboard",
        "Multi-location support",
        "Barcode scanning",
        "Integration with POS"
      ],
      benefits: [
        "25% cost reduction",
        "Zero stockouts",
        "Optimized inventory levels",
        "Improved cash flow"
      ],
      useCases: [
        "Retail inventory",
        "Manufacturing",
        "E-commerce",
        "Warehouse management"
      ],
      technologies: ["Python", "React", "Node.js", "Machine Learning", "PostgreSQL", "Redis"],
      href: "/ai-inventory-management"
    },
    {
      title: "AI Security Monitoring",
      description: "Advanced threat detection and security monitoring with AI-powered anomaly detection and response. Protect your business with intelligent security monitoring.",
      icon: ShieldCheckIcon,
      price: "$2,500/month",
      features: [
        "Real-time threat detection",
        "Anomaly analysis",
        "Automated response",
        "Compliance monitoring",
        "Incident management",
        "Security dashboard",
        "Integration with SIEM",
        "Custom alert rules"
      ],
      benefits: [
        "99.9% threat detection",
        "Real-time alerts",
        "Automated response",
        "Compliance ready"
      ],
      useCases: [
        "Network security",
        "Application monitoring",
        "Data protection",
        "Compliance reporting"
      ],
      technologies: ["Python", "React", "Node.js", "Machine Learning", "Elasticsearch", "Docker"],
      href: "/ai-security-monitoring"
    },
    {
      title: "Smart Project Management",
      description: "AI-enhanced project management with predictive analytics, resource optimization, and risk assessment. Streamline your project workflows with intelligent automation.",
      icon: RocketLaunchIcon,
      price: "$1,800/month",
      features: [
        "Predictive analytics",
        "Resource optimization",
        "Risk assessment",
        "Timeline prediction",
        "Team collaboration",
        "Task automation",
        "Progress tracking",
        "Integration with tools"
      ],
      benefits: [
        "20% efficiency gain",
        "Risk reduction",
        "Better planning",
        "Improved delivery"
      ],
      useCases: [
        "Software development",
        "Marketing campaigns",
        "Construction projects",
        "Event planning"
      ],
      technologies: ["React", "Node.js", "Python", "Machine Learning", "PostgreSQL", "WebSocket"],
      href: "/ai-project-management"
    },
    {
      title: "AI Email Marketing Automation",
      description: "Intelligent email marketing platform with AI-powered personalization, segmentation, and optimization. Maximize your email marketing ROI with smart automation.",
      icon: EnvelopeIcon,
      price: "$1,000/month",
      features: [
        "AI-powered personalization",
        "Smart segmentation",
        "A/B testing automation",
        "Send time optimization",
        "Content recommendations",
        "Deliverability monitoring",
        "Analytics dashboard",
        "Integration with CRM"
      ],
      benefits: [
        "40% higher open rates",
        "60% more clicks",
        "Automated optimization",
        "Better deliverability"
      ],
      useCases: [
        "E-commerce marketing",
        "Lead nurturing",
        "Customer retention",
        "Newsletter campaigns"
      ],
      technologies: ["React", "Node.js", "Python", "Machine Learning", "MongoDB", "SendGrid"],
      href: "/ai-email-marketing"
    },
    {
      title: "Smart HR Management",
      description: "AI-powered human resources management system with automated screening, performance tracking, and employee engagement tools. Transform your HR processes with intelligent automation.",
      icon: UserGroupIcon,
      price: "$1,600/month",
      features: [
        "Resume screening AI",
        "Performance tracking",
        "Employee engagement",
        "Attendance management",
        "Payroll integration",
        "Training recommendations",
        "Analytics dashboard",
        "Mobile app"
      ],
      benefits: [
        "50% faster hiring",
        "Improved retention",
        "Better performance tracking",
        "Reduced HR workload"
      ],
      useCases: [
        "Recruitment automation",
        "Performance management",
        "Employee engagement",
        "Training optimization"
      ],
      technologies: ["React", "Node.js", "Python", "Machine Learning", "PostgreSQL", "AWS"],
      href: "/ai-hr-management"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$800",
      period: "per month",
      description: "Perfect for small businesses getting started with micro SaaS solutions",
      features: [
        "1 Micro SaaS application",
        "Basic AI features",
        "Email support",
        "Standard integrations",
        "Up to 1,000 users",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,500",
      period: "per month",
      description: "Ideal for growing businesses that need multiple micro SaaS tools",
      features: [
        "3 Micro SaaS applications",
        "Advanced AI features",
        "Priority support",
        "Advanced integrations",
        "Up to 10,000 users",
        "Advanced analytics",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "per month",
      description: "For large organizations requiring comprehensive micro SaaS solutions",
      features: [
        "Unlimited applications",
        "Full AI capabilities",
        "24/7 dedicated support",
        "Custom integrations",
        "Unlimited users",
        "Enterprise analytics",
        "White-label solution",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS applications and platforms designed for specific business needs and workflows. AI-powered solutions starting at $800/month." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, business automation, AI tools, software as a service, business intelligence, customer support, content management" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden particles">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              Micro <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SaaS Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Specialized Applications for Modern Business Needs
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your business with our collection of AI-powered micro SaaS applications. 
              Each solution is designed to solve specific business challenges with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#pricing" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                View Pricing
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SaaS Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive collection of specialized business applications powered by AI and modern technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-green-400 font-semibold text-xl mb-3">{service.price}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Benefits:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-green-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to={service.href} className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include 24/7 support and regular updates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift ${
                tier.popular 
                  ? 'border-purple-500 ring-2 ring-purple-500/20' 
                  : 'border-slate-600 hover:border-purple-500'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss which micro SaaS solutions are perfect for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="group bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Us: +1-302-464-0950
            </Link>
            <Link 
              to="/contact" 
              className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicroSaaSSolutionsPage;
