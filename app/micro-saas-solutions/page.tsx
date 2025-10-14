'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "AI-Powered Analytics Dashboard Pro",
      description: "Advanced business intelligence platform with real-time AI insights, predictive analytics, and automated reporting.",
      icon: ChartBarIcon,
      features: [
        "Real-time data processing",
        "AI-powered predictive insights",
        "Custom interactive dashboards",
        "Automated report generation",
        "Advanced data visualization",
        "Multi-source data integration",
        "Custom KPI tracking",
        "Mobile-responsive design"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "$299/month",
      benefits: ["50% faster decision making", "30% cost reduction", "Real-time insights"],
      useCases: ["Business intelligence", "Performance tracking", "Data analysis", "Executive reporting"],
      href: "/micro-saas/analytics-dashboard-pro"
    },
    {
      title: "AI Content Generator Studio",
      description: "Professional content creation suite with AI-powered writing, SEO optimization, and multi-platform publishing.",
      icon: DocumentTextIcon,
      features: [
        "AI content generation for 20+ formats",
        "Advanced SEO optimization",
        "Brand voice training & consistency",
        "Content calendar management",
        "Multi-language support",
        "Plagiarism detection",
        "Performance analytics",
        "Team collaboration tools"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$199/month",
      benefits: ["10x content output", "40% SEO improvement", "Brand consistency"],
      useCases: ["Content marketing", "Social media", "Blog management", "Email campaigns"],
      href: "/micro-saas/content-generator-studio"
    },
    {
      title: "AI Customer Support Suite Pro",
      description: "Comprehensive customer support platform with AI chatbots, sentiment analysis, and omnichannel management.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Advanced NLP chatbots",
        "24/7 multilingual support",
        "Sentiment analysis & mood tracking",
        "Omnichannel integration",
        "Ticket automation & routing",
        "Knowledge base management",
        "Performance analytics",
        "Custom training & learning"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$399/month",
      benefits: ["80% faster response times", "24/7 availability", "95% customer satisfaction"],
      useCases: ["Customer service", "Lead qualification", "FAQ automation", "Support analytics"],
      href: "/micro-saas/ai-customer-support-suite"
    },
    {
      title: "AI Project Manager Enterprise",
      description: "Intelligent project management platform with AI task optimization, resource allocation, and risk prediction.",
      icon: CogIcon,
      features: [
        "AI-powered task optimization",
        "Smart resource allocation",
        "Risk prediction & mitigation",
        "Team collaboration tools",
        "Automated scheduling",
        "Progress tracking & reporting",
        "Integration with 50+ tools",
        "Custom workflow automation"
      ],
      color: "from-orange-500 to-red-500",
      price: "$249/month",
      benefits: ["25% faster project delivery", "Better resource utilization", "Risk mitigation"],
      useCases: ["Project management", "Team coordination", "Task automation", "Resource planning"],
      href: "/micro-saas/ai-project-manager-enterprise"
    },
    {
      title: "AI Inventory Optimizer Pro",
      description: "Advanced inventory management with predictive analytics, demand forecasting, and automated reordering.",
      icon: EyeIcon,
      features: [
        "Predictive demand forecasting",
        "Automated reorder optimization",
        "Multi-location inventory sync",
        "Supplier performance tracking",
        "Seasonal trend analysis",
        "Integration with 100+ systems",
        "Real-time stock alerts",
        "Cost optimization algorithms"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "$349/month",
      benefits: ["30% inventory reduction", "40% less stockouts", "Optimized cash flow"],
      useCases: ["Inventory management", "Supply chain", "Retail operations", "E-commerce"],
      href: "/micro-saas/ai-inventory-optimizer"
    },
    {
      title: "AI Expense Tracker Plus",
      description: "Intelligent expense management with automated categorization, receipt OCR, and tax preparation.",
      icon: CurrencyDollarIcon,
      features: [
        "AI-powered categorization",
        "Advanced receipt OCR",
        "Automated tax preparation",
        "Multi-currency support",
        "Budget tracking & alerts",
        "Expense policy compliance",
        "Integration with accounting software",
        "Mobile receipt capture"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$129/month",
      benefits: ["90% time savings", "100% tax compliance", "Better expense tracking"],
      useCases: ["Expense management", "Financial tracking", "Tax preparation", "Budget control"],
      href: "/micro-saas/ai-expense-tracker-plus"
    },
    {
      title: "AI Code Assistant Pro",
      description: "Advanced coding assistant with AI code generation, debugging, optimization, and documentation.",
      icon: CodeBracketIcon,
      features: [
        "AI code generation for 20+ languages",
        "Intelligent bug detection",
        "Performance optimization suggestions",
        "Automated documentation generation",
        "Code review assistance",
        "Security vulnerability scanning",
        "Integration with popular IDEs",
        "Team knowledge sharing"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "$179/month",
      benefits: ["40% faster development", "50% fewer bugs", "Better code quality"],
      useCases: ["Software development", "Code review", "Bug fixing", "Documentation"],
      href: "/micro-saas/ai-code-assistant-pro"
    },
    {
      title: "AI Marketing Automation Hub",
      description: "Comprehensive marketing automation platform with AI-driven campaigns and customer segmentation.",
      icon: PresentationChartLineIcon,
      features: [
        "AI-powered campaign optimization",
        "Advanced customer segmentation",
        "Automated A/B testing",
        "Multi-channel campaign management",
        "ROI tracking & analytics",
        "Lead scoring & nurturing",
        "Email & SMS automation",
        "Social media scheduling"
      ],
      color: "from-pink-500 to-rose-500",
      price: "$299/month",
      benefits: ["3x campaign efficiency", "50% higher conversion", "Better targeting"],
      useCases: ["Marketing automation", "Lead generation", "Customer retention", "Campaign optimization"],
      href: "/micro-saas/ai-marketing-automation"
    },
    {
      title: "AI HR Management Suite",
      description: "Intelligent HR platform with AI recruitment, employee analytics, and performance tracking.",
      icon: UserGroupIcon,
      features: [
        "AI-powered candidate screening",
        "Employee performance analytics",
        "Engagement tracking & surveys",
        "Automated onboarding workflows",
        "Skills gap analysis",
        "Compliance monitoring",
        "Benefits administration",
        "Payroll integration"
      ],
      color: "from-violet-500 to-purple-500",
      price: "$229/month",
      benefits: ["50% faster hiring", "30% better retention", "Compliance assurance"],
      useCases: ["Recruitment", "Performance management", "Employee engagement", "HR analytics"],
      href: "/micro-saas/ai-hr-management"
    },
    {
      title: "AI Sales Predictor Pro",
      description: "Advanced sales forecasting with AI predictions, lead scoring, and pipeline optimization.",
      icon: ChartBarIcon,
      features: [
        "AI-powered sales forecasting",
        "Advanced lead scoring",
        "Pipeline analysis & optimization",
        "Revenue prediction models",
        "Customer lifetime value analysis",
        "Sales performance tracking",
        "CRM integration",
        "Custom reporting dashboards"
      ],
      color: "from-amber-500 to-orange-500",
      price: "$199/month",
      benefits: ["25% more accurate forecasts", "40% better lead quality", "Increased revenue"],
      useCases: ["Sales forecasting", "Lead qualification", "Pipeline management", "Revenue optimization"],
      href: "/micro-saas/ai-sales-predictor"
    },
    {
      title: "AI Quality Assurance Pro",
      description: "Automated QA platform with AI testing, bug detection, and performance monitoring.",
      icon: BeakerIcon,
      features: [
        "Automated test case generation",
        "AI-powered bug detection",
        "Performance monitoring & optimization",
        "Regression testing automation",
        "Cross-browser compatibility testing",
        "API testing automation",
        "Load testing & stress testing",
        "Test coverage analysis"
      ],
      color: "from-lime-500 to-green-500",
      price: "$189/month",
      benefits: ["90% test coverage", "60% faster releases", "Higher quality assurance"],
      useCases: ["Software testing", "Quality assurance", "Performance testing", "Bug detection"],
      href: "/micro-saas/ai-quality-assurance"
    },
    {
      title: "AI Compliance Monitor Pro",
      description: "Automated compliance platform with AI risk assessment and regulatory reporting.",
      icon: LockClosedIcon,
      features: [
        "AI-powered risk assessment",
        "Automated regulatory reporting",
        "Compliance audit trails",
        "Policy violation detection",
        "Multi-framework support (GDPR, HIPAA, SOX)",
        "Document management",
        "Training & certification tracking",
        "Incident management"
      ],
      color: "from-red-500 to-pink-500",
      price: "$279/month",
      benefits: ["100% compliance assurance", "50% risk reduction", "Automated reporting"],
      useCases: ["Compliance management", "Risk assessment", "Regulatory reporting", "Audit preparation"],
      href: "/micro-saas/ai-compliance-monitor"
    },
    {
      title: "AI Social Media Manager",
      description: "Intelligent social media management with AI content creation, scheduling, and analytics.",
      icon: DevicePhoneMobileIcon,
      features: [
        "AI content generation for social media",
        "Optimal posting time optimization",
        "Hashtag research & optimization",
        "Engagement rate analysis",
        "Multi-platform scheduling",
        "Influencer identification",
        "Crisis management alerts",
        "ROI tracking & reporting"
      ],
      color: "from-sky-500 to-blue-500",
      price: "$149/month",
      benefits: ["3x engagement increase", "50% time savings", "Better brand presence"],
      useCases: ["Social media management", "Content creation", "Brand awareness", "Community management"],
      href: "/micro-saas/ai-social-media-manager"
    },
    {
      title: "AI Email Marketing Pro",
      description: "Advanced email marketing platform with AI personalization, segmentation, and automation.",
      icon: EnvelopeIcon,
      features: [
        "AI-powered email personalization",
        "Advanced segmentation algorithms",
        "Automated drip campaigns",
        "A/B testing optimization",
        "Deliverability optimization",
        "Subject line optimization",
        "Send time optimization",
        "Advanced analytics & reporting"
      ],
      color: "from-indigo-500 to-blue-500",
      price: "$169/month",
      benefits: ["40% higher open rates", "60% better click-through", "Personalized experiences"],
      useCases: ["Email marketing", "Lead nurturing", "Customer retention", "Newsletter management"],
      href: "/micro-saas/ai-email-marketing"
    },
    {
      title: "AI Data Cleaner Pro",
      description: "Intelligent data cleaning and validation platform with AI-powered data quality improvement.",
      icon: WrenchScrewdriverIcon,
      features: [
        "AI-powered data validation",
        "Automated duplicate detection",
        "Data format standardization",
        "Missing data imputation",
        "Data quality scoring",
        "Integration with 200+ data sources",
        "Real-time data monitoring",
        "Custom data rules engine"
      ],
      color: "from-slate-500 to-gray-500",
      price: "$139/month",
      benefits: ["95% data accuracy", "80% time savings", "Better data quality"],
      useCases: ["Data cleaning", "Data validation", "Data migration", "Data quality assurance"],
      href: "/micro-saas/ai-data-cleaner"
    },
    {
      title: "AI Meeting Assistant Pro",
      description: "Intelligent meeting management with AI transcription, action items, and follow-up automation.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "AI-powered meeting transcription",
        "Automatic action item extraction",
        "Meeting summary generation",
        "Follow-up email automation",
        "Calendar integration",
        "Meeting analytics & insights",
        "Multi-language support",
        "Custom meeting templates"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$119/month",
      benefits: ["100% meeting coverage", "50% time savings", "Better follow-up"],
      useCases: ["Meeting management", "Note taking", "Action tracking", "Team collaboration"],
      href: "/micro-saas/ai-meeting-assistant"
    },
    {
      title: "AI Document Processor Pro",
      description: "Advanced document processing with AI extraction, classification, and workflow automation.",
      icon: DocumentTextIcon,
      features: [
        "AI document classification",
        "Automated data extraction",
        "OCR with 99% accuracy",
        "Document workflow automation",
        "Version control & tracking",
        "Integration with 100+ systems",
        "Custom extraction rules",
        "Batch processing capabilities"
      ],
      color: "from-emerald-500 to-green-500",
      price: "$189/month",
      benefits: ["90% automation", "99% accuracy", "Massive time savings"],
      useCases: ["Document processing", "Data extraction", "Workflow automation", "Compliance"],
      href: "/micro-saas/ai-document-processor"
    },
    {
      title: "AI Lead Generator Pro",
      description: "Intelligent lead generation platform with AI prospecting, qualification, and nurturing.",
      icon: UserIcon,
      features: [
        "AI-powered lead identification",
        "Automated lead qualification",
        "Multi-channel lead capture",
        "Lead scoring algorithms",
        "Automated nurturing sequences",
        "CRM integration",
        "Lead source tracking",
        "Conversion optimization"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "$219/month",
      benefits: ["5x more qualified leads", "60% higher conversion", "Automated nurturing"],
      useCases: ["Lead generation", "Prospecting", "Lead qualification", "Sales pipeline"],
      href: "/micro-saas/ai-lead-generator"
    },
    {
      title: "AI Workflow Automator",
      description: "Comprehensive workflow automation platform with AI-powered process optimization and integration.",
      icon: Cog6ToothIcon,
      features: [
        "AI process discovery",
        "Workflow optimization suggestions",
        "No-code automation builder",
        "Integration with 500+ apps",
        "Custom automation rules",
        "Process monitoring & analytics",
        "Error handling & recovery",
        "Team collaboration tools"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "$199/month",
      benefits: ["80% process automation", "50% efficiency gain", "Error reduction"],
      useCases: ["Process automation", "Workflow optimization", "Task automation", "Integration"],
      href: "/micro-saas/ai-workflow-automator"
    },
    {
      title: "AI Performance Monitor",
      description: "Advanced performance monitoring with AI insights, alerting, and optimization recommendations.",
      icon: EyeIcon,
      features: [
        "AI-powered performance insights",
        "Automated alerting & notifications",
        "Performance trend analysis",
        "Capacity planning recommendations",
        "Multi-system monitoring",
        "Custom dashboards & reports",
        "Integration with monitoring tools",
        "Predictive performance analysis"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "$159/month",
      benefits: ["Proactive issue detection", "30% performance improvement", "Reduced downtime"],
      useCases: ["Performance monitoring", "System optimization", "Capacity planning", "Issue prevention"],
      href: "/micro-saas/ai-performance-monitor"
    }
  ];

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to automate and optimize your business processes.",
      icon: CpuChipIcon
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business, from startup to enterprise scale.",
      icon: CloudIcon
    },
    {
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows.",
      icon: CogIcon
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: UserGroupIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SaaS solutions designed to streamline your business operations." />
        <meta name="keywords" content="micro SaaS, AI solutions, business automation, productivity tools" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of micro SaaS solutions designed to streamline 
              your business operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Micro SaaS Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="mb-4">
                    <p className="text-blue-600 font-semibold">{solution.price}</p>
                  </div>
                  <Link 
                    to={solution.href}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our micro SaaS solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;
