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
  DocumentTextIcon,
  ChartPieIcon,
  BeakerIcon,
  CodeBracketIcon,
  ServerIcon,
  WifiIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartLineIcon,
  CubeIcon,
  SparklesIcon,
  CommandLineIcon,
  DatabaseIcon,
  CpuIcon,
  MicrophoneIcon,
  CameraIcon,
  DocumentChartBarIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  HomeIcon,
  AcademicCapIcon,
  HeartIcon,
  TruckIcon,
  BuildingOfficeIcon,
  LightBulbIcon,
  PaintBrushIcon,
  MusicalNoteIcon,
  FilmIcon,
  GamepadIcon,
  GlobeAmericasIcon,
  MapIcon,
  SunIcon,
  BoltIcon,
  FireIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning Services",
      description: "Advanced artificial intelligence solutions powered by cutting-edge machine learning algorithms",
      icon: CpuChipIcon,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "AI Chatbot & Virtual Assistant",
          description: "Intelligent conversational AI that understands context and provides human-like responses",
          features: ["Natural Language Processing", "Multi-language Support", "24/7 Availability", "Integration APIs"],
          pricing: "Starting at $299/month",
          href: "/ai-chatbot-enterprise"
        },
        {
          name: "AI Content Generation Pro",
          description: "Generate high-quality content for blogs, social media, marketing materials, and more",
          features: ["SEO-Optimized Content", "Multiple Languages", "Brand Voice Training", "Plagiarism Detection"],
          pricing: "Starting at $199/month",
          href: "/ai-content-generation-pro"
        },
        {
          name: "AI Analytics Dashboard",
          description: "Advanced analytics and business intelligence powered by AI for data-driven decisions",
          features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "Automated Reports"],
          pricing: "Starting at $399/month",
          href: "/ai-analytics-dashboard-pro"
        },
        {
          name: "AI Cybersecurity Monitor",
          description: "AI-powered threat detection and security monitoring for comprehensive protection",
          features: ["Real-time Threat Detection", "Behavioral Analysis", "Automated Response", "Compliance Reporting"],
          pricing: "Starting at $599/month",
          href: "/ai-cybersecurity-monitor-pro"
        },
        {
          name: "AI Code Assistant Pro",
          description: "AI-powered coding assistant that helps developers write better code faster",
          features: ["Code Generation", "Bug Detection", "Code Review", "Documentation Generation"],
          pricing: "Starting at $149/month",
          href: "/ai-code-assistant-pro"
        },
        {
          name: "AI Customer Support Suite",
          description: "Complete customer support automation with AI-powered ticket routing and responses",
          features: ["Smart Ticket Routing", "Sentiment Analysis", "Knowledge Base Integration", "Performance Analytics"],
          pricing: "Starting at $349/month",
          href: "/ai-customer-support-chatbot"
        }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      description: "Specialized software-as-a-service applications designed for specific business needs",
      icon: GlobeAltIcon,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Zion AI CRM Pro",
          description: "AI-enhanced customer relationship management with predictive analytics",
          features: ["Lead Scoring", "Sales Forecasting", "Email Automation", "Pipeline Management"],
          pricing: "Starting at $49/user/month",
          href: "/zion-ai-crm-pro"
        },
        {
          name: "Zion AI Email Optimizer",
          description: "AI-powered email marketing optimization for better open rates and conversions",
          features: ["Subject Line Optimization", "Send Time Optimization", "A/B Testing", "Performance Analytics"],
          pricing: "Starting at $99/month",
          href: "/zion-ai-email-optimizer"
        },
        {
          name: "Zion AI Workflow Automation",
          description: "Automate business processes with AI-powered workflow management",
          features: ["Process Automation", "Task Assignment", "Progress Tracking", "Integration Hub"],
          pricing: "Starting at $199/month",
          href: "/zion-ai-workflow-automation"
        },
        {
          name: "Zion AI Mobile App Builder",
          description: "No-code AI-powered mobile app development platform",
          features: ["Drag & Drop Builder", "AI Design Suggestions", "Cross-platform", "App Store Publishing"],
          pricing: "Starting at $299/month",
          href: "/zion-ai-mobile-app-builder"
        },
        {
          name: "Zion AI Lead Scoring",
          description: "AI-powered lead qualification and scoring system",
          features: ["Behavioral Analysis", "Lead Prioritization", "Conversion Prediction", "ROI Tracking"],
          pricing: "Starting at $149/month",
          href: "/zion-ai-lead-scoring"
        },
        {
          name: "Zion AI Social Listener",
          description: "Monitor and analyze social media mentions and sentiment",
          features: ["Brand Monitoring", "Sentiment Analysis", "Competitor Tracking", "Crisis Alerts"],
          pricing: "Starting at $179/month",
          href: "/zion-ai-social-listener"
        }
      ]
    },
    {
      title: "IT Infrastructure & Cloud Services",
      description: "Comprehensive IT infrastructure solutions and cloud migration services",
      icon: CloudIcon,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "Cloud Migration Pro",
          description: "Complete cloud migration services with zero downtime and data integrity",
          features: ["Zero Downtime Migration", "Data Security", "Cost Optimization", "Performance Monitoring"],
          pricing: "Starting at $2,999/project",
          href: "/cloud-migration-pro"
        },
        {
          name: "IT Infrastructure Management",
          description: "Complete IT infrastructure setup, management, and optimization",
          features: ["Server Management", "Network Security", "Backup Solutions", "24/7 Monitoring"],
          pricing: "Starting at $499/month",
          href: "/it-infrastructure"
        },
        {
          name: "Database Management & Optimization",
          description: "Database design, optimization, and management services",
          features: ["Performance Tuning", "Security Hardening", "Backup & Recovery", "Scalability Planning"],
          pricing: "Starting at $299/month",
          href: "/database-management"
        },
        {
          name: "IoT Edge Computing Solutions",
          description: "Internet of Things and edge computing infrastructure for smart devices",
          features: ["Device Management", "Real-time Processing", "Data Analytics", "Security Protocols"],
          pricing: "Starting at $799/month",
          href: "/iot-edge-computing"
        }
      ]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced cybersecurity services to protect your digital assets",
      icon: ShieldCheckIcon,
      color: "from-red-500 to-orange-500",
      services: [
        {
          name: "Advanced Security Suite",
          description: "Comprehensive cybersecurity solution with AI-powered threat detection",
          features: ["Threat Detection", "Vulnerability Assessment", "Incident Response", "Compliance Management"],
          pricing: "Starting at $899/month",
          href: "/advanced-security-suite"
        },
        {
          name: "Cybersecurity Solutions",
          description: "Complete cybersecurity strategy and implementation",
          features: ["Security Audits", "Penetration Testing", "Security Training", "Policy Development"],
          pricing: "Starting at $1,299/month",
          href: "/cybersecurity-solutions"
        }
      ]
    },
    {
      title: "5G & Next-Gen Solutions",
      description: "Cutting-edge 5G technology solutions for ultra-fast connectivity",
      icon: WifiIcon,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          name: "5G Network Implementation",
          description: "Complete 5G network planning, deployment, and optimization",
          features: ["Network Planning", "Infrastructure Setup", "Performance Optimization", "IoT Integration"],
          pricing: "Starting at $4,999/project",
          href: "/5g-implementation"
        },
        {
          name: "5G IoT Solutions",
          description: "5G-powered Internet of Things solutions for smart cities and industries",
          features: ["Device Connectivity", "Real-time Analytics", "Edge Computing", "Smart City Integration"],
          pricing: "Starting at $2,499/month",
          href: "/5g-iot-solutions"
        },
        {
          name: "5G Smart City Solutions",
          description: "Comprehensive smart city infrastructure powered by 5G technology",
          features: ["Traffic Management", "Environmental Monitoring", "Public Safety", "Energy Management"],
          pricing: "Starting at $9,999/month",
          href: "/5g-smart-city-solutions"
        }
      ]
    },
    {
      title: "Industry-Specific Solutions",
      description: "Specialized solutions tailored for specific industries and use cases",
      icon: BuildingOfficeIcon,
      color: "from-yellow-500 to-orange-500",
      services: [
        {
          name: "AI Healthcare Solutions",
          description: "AI-powered healthcare management and diagnostic assistance",
          features: ["Medical Records Management", "Diagnostic Assistance", "Patient Monitoring", "HIPAA Compliance"],
          pricing: "Starting at $1,999/month",
          href: "/ai-healthcare"
        },
        {
          name: "AI Fintech Solutions",
          description: "Financial technology solutions with AI-powered fraud detection and analytics",
          features: ["Fraud Detection", "Risk Assessment", "Algorithmic Trading", "Regulatory Compliance"],
          pricing: "Starting at $2,499/month",
          href: "/ai-fintech-solutions"
        },
        {
          name: "AI E-commerce Solutions",
          description: "AI-enhanced e-commerce platform with personalized shopping experiences",
          features: ["Product Recommendations", "Price Optimization", "Inventory Management", "Customer Analytics"],
          pricing: "Starting at $1,499/month",
          href: "/ai-ecommerce-solutions"
        },
        {
          name: "AI Education Platform",
          description: "AI-powered learning management system with personalized education",
          features: ["Adaptive Learning", "Progress Tracking", "Automated Grading", "Content Generation"],
          pricing: "Starting at $799/month",
          href: "/ai-education-platform"
        },
        {
          name: "Property Management AI",
          description: "AI-powered property management system for real estate professionals",
          features: ["Tenant Screening", "Maintenance Scheduling", "Rent Optimization", "Market Analysis"],
          pricing: "Starting at $599/month",
          href: "/property-management-ai"
        },
        {
          name: "Supply Chain Optimizer",
          description: "AI-powered supply chain optimization and logistics management",
          features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Assessment"],
          pricing: "Starting at $1,799/month",
          href: "/supply-chain-optimizer"
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI and IT services including cybersecurity, cloud infrastructure, digital transformation, and more." />
        <meta name="keywords" content="AI services, cybersecurity, cloud computing, digital transformation, micro SaaS, 5G solutions, IT services" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From artificial intelligence to cybersecurity, we provide end-to-end technology services 
              that help businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={category.title} className="mb-20">
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <CategoryIcon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {category.title}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={service.name}
                      className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mb-6">
                        <div className="flex items-center text-purple-400 font-semibold mb-2">
                          <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                          <span>{service.pricing}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link 
                          to={service.href}
                          className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Learn More
                          <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                        <Link 
                          to="/contact"
                          className="flex-1 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Expertise</h3>
              <p className="text-gray-300">
                Over 4 years of experience delivering successful technology solutions across various industries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We stay ahead of the curve with the latest technologies and industry best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Measurable Results</h3>
              <p className="text-gray-300">
                We focus on delivering measurable business value and ROI for all our clients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
              <p className="text-gray-300">
                Security and compliance are built into every solution we design and implement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss your project and find the perfect solution for your business needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}