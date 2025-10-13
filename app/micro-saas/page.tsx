import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Users, 
  Target, 
  Calendar,
  Mail,
  Smartphone,
  Monitor,
  Brain,
  Settings,
  Globe,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  ExternalLink,
  Play,
  Download,
  Eye,
  Heart,
  MessageSquare,
  FileText,
  Database,
  Lock,
  Cpu,
  Wifi,
  Smartphone as Phone,
  CreditCard,
  PieChart,
  Activity,
  Layers,
  Workflow,
  Bot,
  Search,
  Filter,
  RefreshCw,
  Plus,
  Minus,
  ChevronRight
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group - Micro SAAS Solutions",
    "url": "https://ziontechgroup.com/micro-saas",
    "description": "Comprehensive collection of ready-to-use micro SAAS solutions for businesses of all sizes. AI-powered tools, analytics, automation, and productivity solutions.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Zion Analytics Pro",
        "description": "AI-powered business intelligence platform",
        "price": "299",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer", 
        "name": "Zion Security Shield",
        "description": "Advanced cybersecurity protection",
        "price": "499",
        "priceCurrency": "USD"
      }
    ]
  };

  const microSaasCategories = [
    {
      title: "AI-Powered Analytics",
      description: "Intelligent data analysis and business intelligence solutions",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Zion Analytics Pro",
          description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform raw data into actionable insights.",
          price: "From $299/month",
          features: ["Real-time dashboards", "Predictive analytics", "Automated reporting", "Custom metrics", "API integration", "White-label options"],
          icon: <BarChart3 className="w-6 h-6" />,
          link: "/zion-analytics-pro",
          featured: true,
          rating: 4.9,
          users: "2,500+",
          category: "Analytics"
        },
        {
          name: "Zion AI Data Warehouse",
          description: "Advanced data storage and management solution with AI-powered data processing, ETL automation, and real-time analytics capabilities.",
          price: "From $199/month",
          features: ["Unlimited storage", "AI data processing", "ETL automation", "Real-time sync", "Data governance", "Compliance tools"],
          icon: <Database className="w-6 h-6" />,
          link: "/zion-ai-data-warehouse",
          rating: 4.8,
          users: "1,800+",
          category: "Data Management"
        },
        {
          name: "Zion AI Customer Insights",
          description: "Deep customer analytics platform that provides 360-degree customer views, behavior analysis, and personalized engagement recommendations.",
          price: "From $149/month",
          features: ["Customer 360 view", "Behavior analysis", "Segmentation", "Predictive modeling", "Engagement scoring", "ROI tracking"],
          icon: <Users className="w-6 h-6" />,
          link: "/zion-ai-customer-insights",
          rating: 4.7,
          users: "3,200+",
          category: "Customer Analytics"
        }
      ]
    },
    {
      title: "Security & Compliance",
      description: "Advanced cybersecurity and compliance management solutions",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "Zion Security Shield",
          description: "Comprehensive cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring for complete business security.",
          price: "From $499/month",
          features: ["AI threat detection", "Automated response", "24/7 monitoring", "Vulnerability scanning", "Compliance reporting", "Incident response"],
          icon: <Shield className="w-6 h-6" />,
          link: "/zion-security-shield",
          featured: true,
          rating: 4.9,
          users: "1,500+",
          category: "Cybersecurity"
        },
        {
          name: "Zion AI Fraud Detection Pro",
          description: "Advanced fraud prevention system using machine learning to detect and prevent fraudulent activities in real-time across all business channels.",
          price: "From $399/month",
          features: ["Real-time detection", "ML algorithms", "Multi-channel monitoring", "Risk scoring", "Automated blocking", "Compliance reporting"],
          icon: <Lock className="w-6 h-6" />,
          link: "/zion-ai-fraud-detection-pro",
          rating: 4.8,
          users: "2,100+",
          category: "Fraud Prevention"
        },
        {
          name: "Zion Compliance Manager",
          description: "Automated compliance management solution that helps businesses stay compliant with GDPR, HIPAA, SOX, and other regulatory requirements.",
          price: "From $299/month",
          features: ["Regulatory compliance", "Automated reporting", "Risk assessment", "Audit trails", "Policy management", "Training modules"],
          icon: <CheckCircle className="w-6 h-6" />,
          link: "/zion-compliance-manager",
          rating: 4.7,
          users: "1,200+",
          category: "Compliance"
        }
      ]
    },
    {
      title: "Productivity & Automation",
      description: "Streamline workflows and boost productivity with intelligent automation",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "Zion AI Workflow Automation",
          description: "Intelligent workflow automation platform that streamlines business processes, reduces manual work, and increases operational efficiency.",
          price: "From $199/month",
          features: ["Process automation", "AI decision making", "Integration hub", "Custom workflows", "Performance analytics", "Scalable architecture"],
          icon: <Workflow className="w-6 h-6" />,
          link: "/zion-ai-workflow-automation",
          featured: true,
          rating: 4.8,
          users: "2,800+",
          category: "Automation"
        },
        {
          name: "Zion AI Meeting Assistant",
          description: "AI-powered meeting management tool that schedules meetings, takes notes, generates summaries, and provides actionable insights.",
          price: "From $99/month",
          features: ["Smart scheduling", "AI transcription", "Meeting summaries", "Action items", "Calendar integration", "Team collaboration"],
          icon: <Calendar className="w-6 h-6" />,
          link: "/zion-ai-meeting-assistant",
          rating: 4.6,
          users: "4,500+",
          category: "Meeting Management"
        },
        {
          name: "Zion AI Document Processor",
          description: "Intelligent document processing solution that extracts, analyzes, and organizes information from various document types automatically.",
          price: "From $149/month",
          features: ["Document extraction", "OCR technology", "Data validation", "Template matching", "Batch processing", "API integration"],
          icon: <FileText className="w-6 h-6" />,
          link: "/zion-ai-document-processor",
          rating: 4.7,
          users: "1,900+",
          category: "Document Management"
        }
      ]
    },
    {
      title: "Marketing & Sales",
      description: "AI-powered marketing and sales optimization tools",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      services: [
        {
          name: "Zion AI Marketing Automation Pro",
          description: "Comprehensive marketing automation platform with AI-powered campaign optimization, lead scoring, and personalized customer journeys.",
          price: "From $299/month",
          features: ["Campaign automation", "Lead scoring", "Personalization", "A/B testing", "ROI tracking", "Multi-channel marketing"],
          icon: <Target className="w-6 h-6" />,
          link: "/zion-ai-marketing-automation-pro",
          featured: true,
          rating: 4.8,
          users: "3,500+",
          category: "Marketing Automation"
        },
        {
          name: "Zion AI Lead Scoring",
          description: "Advanced lead qualification system that uses machine learning to score and prioritize leads, improving conversion rates and sales efficiency.",
          price: "From $149/month",
          features: ["ML lead scoring", "Behavior tracking", "Predictive analytics", "CRM integration", "Custom scoring models", "Performance insights"],
          icon: <TrendingUp className="w-6 h-6" />,
          link: "/zion-ai-lead-scoring",
          rating: 4.7,
          users: "2,200+",
          category: "Lead Management"
        },
        {
          name: "Zion AI Email Optimizer",
          description: "AI-powered email marketing optimization tool that improves open rates, click-through rates, and overall email campaign performance.",
          price: "From $99/month",
          features: ["Subject line optimization", "Send time optimization", "Content suggestions", "A/B testing", "Performance analytics", "List segmentation"],
          icon: <Mail className="w-6 h-6" />,
          link: "/zion-ai-email-optimizer",
          rating: 4.6,
          users: "5,200+",
          category: "Email Marketing"
        }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and infrastructure management",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      services: [
        {
          name: "Zion Cloud Vault",
          description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced file management capabilities.",
          price: "From $99/month",
          features: ["Unlimited storage", "End-to-end encryption", "File versioning", "Collaboration tools", "API access", "99.9% uptime"],
          icon: <Cloud className="w-6 h-6" />,
          link: "/zion-cloud-vault",
          featured: true,
          rating: 4.8,
          users: "6,500+",
          category: "Cloud Storage"
        },
        {
          name: "Zion AI Backup Manager",
          description: "Intelligent backup and disaster recovery solution with automated scheduling, incremental backups, and instant recovery capabilities.",
          price: "From $149/month",
          features: ["Automated backups", "Incremental sync", "Instant recovery", "Cross-platform", "Encryption", "Monitoring alerts"],
          icon: <Database className="w-6 h-6" />,
          link: "/zion-ai-backup-manager",
          rating: 4.7,
          users: "2,800+",
          category: "Backup & Recovery"
        },
        {
          name: "Zion AI API Manager",
          description: "Comprehensive API management platform with rate limiting, authentication, monitoring, and developer portal capabilities.",
          price: "From $199/month",
          features: ["API gateway", "Rate limiting", "Authentication", "Monitoring", "Developer portal", "Documentation"],
          icon: <Settings className="w-6 h-6" />,
          link: "/zion-ai-api-manager",
          rating: 4.6,
          users: "1,700+",
          category: "API Management"
        }
      ]
    },
    {
      title: "Mobile & Development",
      description: "Mobile app development and testing automation tools",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          name: "Zion AI Mobile App Builder",
          description: "No-code mobile app development platform with AI assistance, drag-and-drop interface, and instant deployment capabilities.",
          price: "From $399/month",
          features: ["No-code development", "AI assistance", "Drag-and-drop", "Instant deployment", "Cross-platform", "App store publishing"],
          icon: <Smartphone className="w-6 h-6" />,
          link: "/zion-ai-mobile-app-builder",
          featured: true,
          rating: 4.7,
          users: "1,400+",
          category: "App Development"
        },
        {
          name: "Zion AI Testing Automation",
          description: "Automated testing platform that uses AI to generate test cases, perform regression testing, and ensure application quality.",
          price: "From $249/month",
          features: ["AI test generation", "Automated testing", "Regression testing", "Performance testing", "Cross-browser testing", "CI/CD integration"],
          icon: <CheckCircle className="w-6 h-6" />,
          link: "/zion-ai-testing-automation",
          rating: 4.8,
          users: "2,100+",
          category: "Testing"
        },
        {
          name: "Zion AI Code Assistant Pro",
          description: "AI-powered coding assistant that helps developers write better code, debug issues, and improve development productivity.",
          price: "From $199/month",
          features: ["Code suggestions", "Bug detection", "Code review", "Documentation", "Refactoring", "Multi-language support"],
          icon: <Cpu className="w-6 h-6" />,
          link: "/zion-ai-code-assistant-pro",
          rating: 4.9,
          users: "3,800+",
          category: "Development Tools"
        }
      ]
    }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "25,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions transformed our operations. We've increased productivity by 60% and reduced costs by 40% in just 6 months.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI-powered analytics and automation tools are incredible. We've saved thousands of hours and improved our decision-making process significantly.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion's micro SAAS solutions have become essential to our daily operations.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions | Zion Tech Group - Ready-to-Use Business Tools"
        description="Discover our comprehensive collection of micro SAAS solutions. AI-powered analytics, automation, security, and productivity tools for businesses of all sizes. Start your free trial today!"
        keywords="micro SAAS, business software, AI tools, analytics, automation, productivity, cloud solutions, business intelligence, marketing automation, cybersecurity"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">60+ Micro SAAS Solutions Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Ready-to-use software solutions that can transform your business operations immediately. 
            From AI-powered analytics to advanced security, we have everything you need to scale and succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#solutions"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              Explore Solutions
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Solutions by Category */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Solutions by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive collection of micro SAAS solutions, organized by category for easy discovery.
            </p>
          </div>

          {microSaasCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-300 text-lg">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                  >
                    {service.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-cyan-400 font-medium">{service.price}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-gray-300 text-sm">{service.rating}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-300 text-sm">{service.users} users</span>
                      </div>
                      <div className="text-xs text-cyan-400 font-medium">{service.category}</div>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-white font-medium mb-2 text-sm">Key Features:</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <span key={featureIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs text-cyan-400 px-2 py-1">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        to={service.link}
                        className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors flex items-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <FuturisticButton
                        href="/contact"
                        variant="outline"
                        size="sm"
                        icon={<Play className="w-4 h-4" />}
                      >
                        Try Free
                      </FuturisticButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our micro SAAS solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
            Start your free trial today and experience the power of AI-driven business tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;