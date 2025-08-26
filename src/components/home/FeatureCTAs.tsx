  MessageSquare, 
  Smartphone, 
  Calendar,
  BookOpen,
  Code,
  Building,
  Clock,
  Network,
  Monitor,
  Server,
  Bot,
  TrendingUp,
  FileText,
  Video,
  BarChart3,
  AlertTriangle,
  Eye,
  PieChart
  BarChart3,
  PenTool,
  Shield,
  Cloud
} from "lucide-react";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
=======
import { AnimatedBackground, NeonBorder } from "@/components/ui/AnimatedBackground";
>>>>>>> origin/main

export interface FeatureCTAsProps extends React.HTMLAttributes<HTMLElement> {}

export function FeatureCTAs({ className, style, ...props }: FeatureCTAsProps) {
  const features = [
    // Existing features
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
    },
    {
      title: "AI Services Hub",
      description: "Cutting-edge AI solutions including chatbots, image generation, video editing, and data analytics.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/ai-services",
      badge: "New",
      details: "From AI chatbots to advanced analytics, our AI services help businesses leverage artificial intelligence for competitive advantage."
    },
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: "/equipment",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
    },
    {
      title: "Community Hub",
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
    },
    {
      title: "Mobile Experience",
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/mobile-launch",
      badge: "Featured",
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."
    },
    {
      title: "IT Services Hub",
      description: "Comprehensive IT solutions including cloud migration, cybersecurity, network infrastructure, and 24/7 support.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/it-services",
      details: "From cloud migration to cybersecurity audits, our IT services help businesses modernize their infrastructure and enhance security."
    },
    {
      title: "Developer Tools",
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support."
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology."
    },
    {
      title: "Project Management",
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/dashboard/projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion."
    },
    {
      title: "Micro SAAS Hub",
      description: "Affordable software solutions for growing businesses including CRM, project management, and marketing tools.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/micro-saas",
      badge: "New",
      details: "Discover powerful, affordable software solutions designed to help your business scale without breaking the bank."
    },
    {
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/zion-hire-ai",
      badge: "Premium",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
    },
    // New Micro SAAS Services
    {
      title: "AI Content Generator",
      description: "Generate high-quality content, code, and documentation using advanced AI models tailored to your industry.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700" />,
      link: "/ai-content-generator",
      badge: "AI-Powered",
      details: "Create engaging content, technical documentation, and marketing copy with our AI-powered content generation platform. Starting at $29/month."
    },
    {
      title: "Cybersecurity Suite",
      description: "Comprehensive security monitoring, threat detection, and incident response for businesses of all sizes.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-red-100 to-orange-100 text-red-700" />,
      link: "/cybersecurity-suite",
      badge: "Security",
      details: "24/7 threat monitoring, automated incident response, and compliance reporting. Enterprise-grade security starting at $199/month."
    },
    {
      title: "Cloud Cost Optimizer",
      description: "AI-driven cloud cost optimization and resource management across AWS, Azure, and Google Cloud.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700" />,
      link: "/cloud-optimizer",
      badge: "Cost-Saving",
      details: "Reduce cloud costs by up to 40% with intelligent resource allocation and automated optimization. Plans from $49/month."
    },
    {
      title: "Data Analytics Platform",
      description: "Real-time business intelligence and predictive analytics powered by machine learning algorithms.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/analytics-platform",
      badge: "Analytics",
      details: "Transform raw data into actionable insights with interactive dashboards and predictive modeling. Starting at $79/month."
    },
    {
      title: "API Gateway & Management",
      description: "Secure, scalable API gateway with rate limiting, authentication, and comprehensive monitoring.",
      icon: <Network className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700" />,
      link: "/api-gateway",
      badge: "Developer",
      details: "Enterprise-grade API management with advanced security features and developer portal. Plans from $99/month."
    },
    {
      title: "DevOps Automation Platform",
      description: "Streamline CI/CD pipelines, infrastructure as code, and deployment automation.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-orange-100 to-red-100 text-orange-700" />,
      link: "/devops-platform",
      badge: "DevOps",
      details: "Automate your entire development workflow with intelligent deployment strategies and monitoring. Starting at $149/month."
    },
    {
      title: "AI Model Training Service",
      description: "Custom AI model development and training using your proprietary data and business requirements.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-violet-100 to-purple-100 text-violet-700" />,
      link: "/ai-training",
      badge: "Custom AI",
      details: "Develop bespoke AI models tailored to your specific use case with expert guidance. Project-based pricing from $5,000."
    },
    {
      title: "Blockchain Development Suite",
      description: "Complete blockchain infrastructure, smart contract development, and DApp deployment platform.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-700" />,
      link: "/blockchain-suite",
      badge: "Web3",
      details: "Build, deploy, and manage blockchain applications with enterprise-grade security. Plans from $199/month."
    },
    {
      title: "Video AI Processing",
      description: "AI-powered video editing, enhancement, and content generation for creators and businesses.",
      icon: <Video className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-pink-100 to-rose-100 text-pink-700" />,
      link: "/video-ai",
      badge: "Media AI",
      details: "Transform video content with AI-powered editing, enhancement, and automated generation. Starting at $39/month."
    },
    {
      title: "IoT Management Platform",
      description: "Comprehensive IoT device management, data collection, and analytics platform.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-slate-100 to-gray-100 text-slate-700" />,
      link: "/iot-platform",
      badge: "IoT",
      details: "Manage thousands of IoT devices with real-time monitoring and predictive maintenance. Plans from $89/month."
    },
    {
      title: "AI Chatbot Builder",
      description: "Create intelligent chatbots and virtual assistants without coding knowledge.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700" />,
      link: "/chatbot-builder",
      badge: "No-Code",
      details: "Build AI-powered chatbots for customer service, sales, and support. Drag-and-drop interface starting at $19/month."
    },
    {
      title: "Data Privacy Compliance",
      description: "Automated GDPR, CCPA, and privacy compliance management with audit trails.",
      icon: <Lock className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-700" />,
      link: "/privacy-compliance",
      badge: "Compliance",
      details: "Ensure data privacy compliance with automated monitoring and reporting tools. Starting at $129/month."
    },
    {
      title: "AI-Powered SEO Suite",
      description: "Comprehensive SEO optimization using AI to improve search rankings and drive organic traffic.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-lime-100 to-green-100 text-lime-700" />,
      link: "/seo-suite",
      badge: "Marketing",
      details: "AI-driven SEO analysis, keyword research, and content optimization. Plans from $59/month."
    },
    {
      title: "Code Quality Analyzer",
      description: "Automated code review, quality assessment, and security vulnerability detection.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700" />,
      link: "/code-analyzer",
      badge: "Quality",
      details: "Improve code quality with automated analysis, security scanning, and performance optimization. Starting at $69/month."
    },
    {
      title: "AI-Powered Testing",
      description: "Intelligent test automation and quality assurance using machine learning.",
      icon: <Monitor className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-violet-100 text-purple-700" />,
      link: "/ai-testing",
      badge: "QA",
      details: "Automate testing with AI-generated test cases and intelligent bug detection. Plans from $79/month."
    },
    {
      title: "Customer Success Platform",
      description: "AI-driven customer success management with predictive analytics and automated workflows.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-700" />,
      link: "/customer-success",
      badge: "CX",
      details: "Improve customer retention with predictive analytics and automated success workflows. Starting at $89/month."
    },
    {
      title: "AI Legal Assistant",
      description: "AI-powered legal document review, contract analysis, and compliance checking.",
      icon: <FileText className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-amber-100 to-yellow-100 text-amber-700" />,
      link: "/legal-ai",
      badge: "Legal Tech",
      details: "Streamline legal processes with AI-powered document analysis and contract review. Plans from $149/month."
    },
    {
      title: "AI Translation Service",
      description: "Real-time multilingual translation and localization for global business communication.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-sky-100 to-blue-100 text-sky-700" />,
      link: "/ai-translation",
      badge: "Global",
      details: "Break language barriers with AI-powered translation supporting 100+ languages. Starting at $29/month."
    },
    {
      title: "AI-Powered HR Suite",
      description: "Intelligent recruitment, employee management, and performance analytics platform.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-rose-100 to-pink-100 text-rose-700" />,
      link: "/hr-suite",
      badge: "HR Tech",
      details: "Transform HR operations with AI-powered recruitment and employee management. Plans from $99/month."
    },
    {
      title: "AI Financial Advisor",
      description: "Personalized financial planning and investment recommendations using machine learning.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/financial-ai",
      badge: "FinTech",
      details: "Get personalized financial advice and investment strategies powered by AI. Starting at $39/month."
    },
    {
      title: "AI Design Assistant",
      description: "AI-powered design tools for logos, graphics, and visual content creation.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-violet-100 to-purple-100 text-violet-700" />,
      link: "/design-ai",
      badge: "Creative",
      details: "Create professional designs with AI-powered tools and templates. Plans from $19/month."
    {
      title: "AI Analytics Dashboard",
      description: "Transform your business data into actionable intelligence with AI-powered analytics and insights.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/ai-analytics-dashboard",
      badge: "New",
      details: "Get real-time insights, predictive analytics, and custom dashboards to drive data-driven business decisions."
    },
    {
      title: "AI Content Generator",
      description: "Create engaging content with AI-powered writing tools for blogs, social media, and marketing.",
      icon: <PenTool className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/ai-content-generator",
      badge: "Featured",
      details: "Generate high-quality content in seconds while maintaining your brand voice and SEO optimization."
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions including penetration testing, audits, and incident response.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/cybersecurity-services",
      badge: "Secure",
      details: "Protect your business with enterprise-grade cybersecurity services and 24/7 threat monitoring."
    },
    {
      title: "Cloud Migration Services",
      description: "Expert cloud migration to AWS, Azure, and Google Cloud with zero downtime guarantee.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/cloud-migration-services",
      badge: "Cloud",
      details: "Seamless migration to the cloud with cost optimization, security, and performance improvements."
    {
      title: "Comprehensive Services",
      description: "Access our complete range of micro SAAS, IT services, and AI solutions in one platform.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/comprehensive-services",
      badge: "New",
      details: "Discover 30+ professional services including AI development, cloud migration, cybersecurity, and more."
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
<<<<<<< HEAD
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Key Features</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover the comprehensive range of services and solutions we offer to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-zion-blue-light rounded-lg p-6 border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <div className="text-white text-xl font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-zion-slate-light mb-4">{feature.description}</p>
              <Link 
                to={feature.link}
                className="inline-block bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {ctaFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-br ${feature.bgColor} border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* CTA Button */}
              <Link
                to={feature.ctaPath}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${feature.color} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-${feature.color.split('-')[1]}/25 transition-all duration-300 group`}
              >
                {feature.ctaText}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help you achieve your technology goals and drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
=======

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Explore our complete suite of micro SAAS services and find the perfect solution for your business needs. 
              Get in touch with our experts for personalized consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 text-lg"
              >
                <Link to="/micro-saas-services">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore All Services
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3 text-lg"
              >
                <Link to="/contact">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Consultation
=======

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-zion-purple/10 to-zion-blue/10 rounded-2xl p-8 border border-zion-purple/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore Our Complete Service Portfolio?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              From AI-powered solutions to comprehensive IT services, discover how Zion Tech Group can transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">
                <Link to="/micro-saas-services">
                  <Globe className="h-5 w-5 mr-2" />
                  View All Services
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Link to="/contact">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Get in Touch
=======

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 border border-zion-purple/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore Our Micro SAAS Services?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Discover our comprehensive suite of AI, IT, and business automation solutions designed to accelerate your digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-zion-cyan text-zion-slate hover:bg-zion-cyan/90">
                <Link to="/micro-saas-services">
                  <Sparkles className="h-5 w-5 mr-2" />
                  View All Services
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                <Link to="/request-quote">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Get Custom Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
        >
          {ctaItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <div className={`${item.bgColor} ${item.borderColor} border-2 p-8 rounded-2xl h-full hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{item.description}</p>
                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${item.color} hover:scale-105 transition-transform duration-200`}
                >
                  <Link to={item.href} className="flex items-center justify-center gap-2">
                    {item.action}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-sm rounded-3xl p-12 border border-zion-purple/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Our team is here to help you get started and make the most of Zion's powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
              >
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg px-8 py-4"
              >
                <Link to="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </motion.div>
=======
=======
=======
      badge: "Premium",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
    }
  ];

  return (
    <section
      className={cn(
        "py-16 bg-gradient-to-b from-background to-background/90",
        className
      )}
      style={style}
      {...props}
    >
      <div className="container mx-auto px-4">
=======
    <section className="relative py-16 bg-gradient-to-b from-background to-background/90">
      <AnimatedBackground variant="section" />
      <div className="container mx-auto px-4 relative z-10">
>>>>>>> origin/main
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            Discover Zion's Comprehensive Tech Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Explore our extensive suite of micro SAAS services, AI solutions, and IT services designed to transform how you work, innovate, and grow in the digital age.
    <section className="py-16 bg-gradient-to-b from-background to-background/90 cyber-grid relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 to-zion-cyan/5"></div>
      <div className="relative container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3 glow">Discover Zion's Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 group">
              <AnimatedBackground variant="card" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:neon-pulse group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 text-zion-purple border-zion-purple/30">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-4 text-lg group-hover:text-zion-cyan transition-colors duration-300">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-sm">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.details}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-purple/25">
                <Button asChild className="w-full gap-1 hover:neon-pulse transition-all duration-300">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { ArrowRight, Play, Download, Users, Zap } from 'lucide-react';

export const FeatureCTAs: React.FC = () => {
  const ctaItems = [
    {
      title: "Watch Demo",
      description: "See our solutions in action",
      icon: Play,
      href: "/demo",
      color: "from-blue-600 to-cyan-600",
      hoverColor: "from-blue-700 to-cyan-700"
    },
    {
      title: "Download Brochure",
      description: "Get detailed information",
      icon: Download,
      href: "/brochure",
      color: "from-green-600 to-teal-600",
      hoverColor: "from-green-700 to-teal-700"
    },
    {
      title: "Meet Our Team",
      description: "Connect with experts",
      icon: Users,
      href: "/team",
      color: "from-purple-600 to-pink-600",
      hoverColor: "from-purple-700 to-pink-700"
    },
    {
      title: "Get Started",
      description: "Start your project today",
      icon: Zap,
      href: "/contact",
      color: "from-orange-600 to-red-600",
      hoverColor: "from-orange-700 to-red-700"
    }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your next step and begin your journey with Zion Tech Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctaItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                {item.description}
              </p>
              
              <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white font-medium rounded-lg hover:bg-gradient-to-r ${item.hoverColor} transition-all duration-300`}>
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Need help choosing? Our experts are here to guide you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Talk to an Expert
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
