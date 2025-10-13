import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Clock, 
  Shield,
  Brain,
  BarChart3,
  Users,
  Award,
  FileText,
  TrendingUp,
  Scale,
  Heart,
  Home,
  Target,
  Calendar,
  Cloud,
  Code,
  Database,
  Mail,
  MessageSquare,
  PieChart,
  Settings,
  Sparkles
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';

const MicroSaasPage = () => {
  const categories = [
    {
      name: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: "AI Analytics Pro", path: "/zion-ai-analytics-pro", price: "$299/month" },
        { name: "AI Content Generator", path: "/zion-ai-content-generator", price: "$149/month" },
        { name: "AI Video Generator", path: "/zion-ai-video-generator", price: "$199/month" },
        { name: "AI Voice Assistant Pro", path: "/zion-ai-voice-assistant-pro", price: "$249/month" },
        { name: "AI Document Processor", path: "/zion-ai-document-processor", price: "$99/month" },
        { name: "AI Sales Forecaster", path: "/zion-ai-sales-forecaster", price: "$199/month" }
      ]
    },
    {
      name: "Business Intelligence",
      description: "Data-driven insights and analytics for smarter decisions",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "Zion Analytics Pro", path: "/zion-ai-analytics-pro", price: "$299/month" },
        { name: "Data Analytics Dashboard", path: "/data-analytics", price: "$199/month" },
        { name: "Financial Analytics Pro", path: "/ai-financial-analytics-pro", price: "$249/month" },
        { name: "Customer Insights", path: "/zion-ai-customer-insights", price: "$179/month" },
        { name: "Performance Monitor", path: "/zion-performance-monitor", price: "$149/month" }
      ]
    },
    {
      name: "Customer Experience",
      description: "Enhance customer relationships and support",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "AI CRM Pro", path: "/zion-ai-crm-pro", price: "$199/month" },
        { name: "Customer Support Pro", path: "/zion-ai-customer-support-pro", price: "$179/month" },
        { name: "Sentiment Tracker", path: "/zion-ai-customer-sentiment-tracker", price: "$149/month" },
        { name: "Email Analyzer", path: "/zion-ai-email-analyzer", price: "$99/month" },
        { name: "Voice Assistant Pro", path: "/zion-ai-voice-assistant-pro", price: "$249/month" }
      ]
    },
    {
      name: "Industry Solutions",
      description: "Specialized solutions for specific industries",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      services: [
        { name: "HR Assistant", path: "/zion-ai-hr-assistant", price: "$149/month" },
        { name: "Legal Assistant", path: "/zion-ai-legal-assistant", price: "$299/month" },
        { name: "Healthcare Assistant", path: "/zion-ai-healthcare-assistant", price: "$399/month" },
        { name: "Real Estate Analyzer", path: "/zion-ai-real-estate-analyzer", price: "$199/month" },
        { name: "Financial Forecaster", path: "/zion-ai-financial-forecaster", price: "$249/month" }
      ]
    },
    {
      name: "Marketing & Sales",
      description: "Automate and optimize your marketing efforts",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-purple-500",
      services: [
        { name: "Marketing Automation", path: "/zion-ai-marketing-automation", price: "$149/month" },
        { name: "Email Automation", path: "/zion-email-automation", price: "$99/month" },
        { name: "Social Media Manager", path: "/zion-ai-social-media-manager", price: "$179/month" },
        { name: "Content Studio", path: "/zion-content-studio", price: "$199/month" },
        { name: "Sales Forecaster", path: "/zion-ai-sales-forecaster", price: "$199/month" }
      ]
    },
    {
      name: "Productivity & Operations",
      description: "Streamline workflows and boost productivity",
      icon: <Zap className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      services: [
        { name: "Project Manager Pro", path: "/project-management-pro", price: "$99/month" },
        { name: "Task Scheduler", path: "/zion-ai-task-scheduler", price: "$79/month" },
        { name: "Workflow Automation", path: "/ai-workflow-automation", price: "$149/month" },
        { name: "Code Reviewer", path: "/zion-ai-code-reviewer", price: "$199/month" },
        { name: "Performance Optimizer", path: "/zion-ai-performance-optimizer", price: "$179/month" }
      ]
    }
  ];

  const featuredServices = [
    {
      name: "Zion AI Analytics Pro",
      description: "Advanced business intelligence with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-analytics-pro",
      rating: 5,
      users: "5,000+",
      category: "AI & Machine Learning"
    },
    {
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI-powered insights",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      rating: 5,
      users: "3,500+",
      category: "Customer Experience"
    },
    {
      name: "Zion AI Document Processor",
      description: "Intelligent document processing with 99.8% OCR accuracy",
      price: "From $99/month",
      icon: <FileText className="w-8 h-8" />,
      link: "/zion-ai-document-processor",
      rating: 5,
      users: "2,800+",
      category: "AI & Machine Learning"
    },
    {
      name: "Zion AI HR Assistant",
      description: "Complete HR management with AI-powered recruitment and analytics",
      price: "From $149/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-hr-assistant",
      rating: 5,
      users: "2,200+",
      category: "Industry Solutions"
    },
    {
      name: "Zion AI Legal Assistant",
      description: "Intelligent legal technology with contract analysis and compliance",
      price: "From $299/month",
      icon: <Scale className="w-8 h-8" />,
      link: "/zion-ai-legal-assistant",
      rating: 5,
      users: "1,800+",
      category: "Industry Solutions"
    },
    {
      name: "Zion AI Healthcare Assistant",
      description: "AI-powered healthcare technology for patient monitoring and diagnostics",
      price: "From $399/month",
      icon: <Heart className="w-8 h-8" />,
      link: "/zion-ai-healthcare-assistant",
      rating: 5,
      users: "1,500+",
      category: "Industry Solutions"
    }
  ];

  const stats = [
    { number: "100+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "25,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <FuturisticBackgroundEnhanced>
      <EnhancedSEO
        title="Micro SAAS Solutions - AI-Powered Business Tools | Zion Tech Group"
        description="Discover our comprehensive collection of micro SAAS solutions. AI-powered tools for analytics, CRM, HR, legal, healthcare, and more. Boost your business efficiency."
        keywords="micro SAAS, business tools, AI solutions, productivity software, business automation, software as a service"
        canonical="https://ziontechgroup.com/micro-saas"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">100+ Micro SAAS Solutions</span>
            </div>
            
            <FuturisticText
              variant="display"
              size="6xl"
              gradient={true}
              animated={true}
              glow={true}
              neon={true}
              className="mb-6 leading-tight"
            >
              Micro SAAS Solutions
            </FuturisticText>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
              Discover our comprehensive collection of AI-powered micro SAAS solutions. 
              From analytics to automation, we have the tools to transform your business operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={Sparkles}
                iconPosition="left"
                glowColor="cyan"
                neon={true}
                animated={true}
              >
                Get Started Today
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={ArrowRight}
                iconPosition="left"
                glowColor="purple"
                neon={true}
                animated={true}
              >
                View All Solutions
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

        {/* Featured Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our most popular and powerful micro SAAS solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <FuturisticCard
                  key={index}
                  glowColor={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'purple' : 'pink'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="cursor-pointer"
                >
                  <Link
                    to={service.link}
                    className="block"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {[...Array(service.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">{service.users} users</span>
                    </div>
                    <div className="text-xs text-gray-400 mb-4">{service.category}</div>
                    <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the perfect solution for your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <FuturisticCard
                  key={index}
                  glowColor={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'purple' : 'pink'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 text-center mb-6 leading-relaxed text-sm md:text-base">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-between text-sm">
                        <Link
                          to={service.path}
                          className="text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          {service.name}
                        </Link>
                        <span className="text-cyan-400 font-medium">{service.price}</span>
                      </div>
                    ))}
                    {category.services.length > 3 && (
                      <div className="text-center pt-2">
                        <Link
                          to={`/micro-saas?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                        >
                          View All {category.name} Solutions →
                        </Link>
                      </div>
                    )}
                  </div>
                </FuturisticCard>
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
              Join thousands of businesses already using our micro SAAS solutions to boost efficiency and growth.
              Start your free trial today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                glowColor="cyan"
                neon={true}
                animated={true}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={Sparkles}
                iconPosition="right"
                glowColor="purple"
                neon={true}
                animated={true}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </section>
      </main>
    </FuturisticBackgroundEnhanced>
  );
};

export default MicroSaasPage;