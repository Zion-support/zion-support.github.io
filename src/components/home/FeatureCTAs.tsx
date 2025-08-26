<<<<<<< HEAD

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
<<<<<<< HEAD
  Users, 
  Briefcase, 
  Settings, 
  ArrowRight,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';

const featureCTAs = [
  {
    title: 'AI Talent Matcher',
    description: 'Find the perfect match using advanced AI algorithms',
    icon: Search,
    link: '/match',
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    iconColor: 'text-zion-purple',
    features: ['Smart matching', 'Skill validation', 'Instant results']
  },
  {
    title: 'Global Talent Pool',
    description: 'Access skilled professionals from around the world',
    icon: Users,
    link: '/talent',
    color: 'from-zion-cyan to-zion-blue',
    bgColor: 'bg-zion-cyan/10',
    iconColor: 'text-zion-cyan',
    features: ['150+ countries', 'Verified profiles', 'Diverse skills']
  },
  {
    title: 'IT Services Network',
    description: '24/7 global IT support and technical services',
    icon: Settings,
    link: '/it-onsite-services',
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    iconColor: 'text-zion-blue',
    features: ['24/7 support', 'Global coverage', 'Certified techs']
  },
  {
    title: 'Professional Services',
    description: 'Comprehensive business and technical solutions',
    icon: Briefcase,
    link: '/services',
    color: 'from-zion-green to-zion-green-dark',
    bgColor: 'bg-zion-green/10',
    iconColor: 'text-zion-green',
    features: ['Custom solutions', 'Expert teams', 'Quality guarantee']
  }
];

export function FeatureCTAs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
=======
  MessageSquare, 
  Smartphone, 
  Calendar,
  BookOpen,
  Code,
  Building,
  Clock,
  Shield,
  Cloud,
  Database,
  Globe,
  Brain,
  Lock,
  Server,
  BarChart3,
  FileText,
  Video,
  FileImage,
  TrendingUp,
  MessageCircle,
  Heart
} from "lucide-react";

export function FeatureCTAs() {
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
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/services",
      badge: "New",
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews."
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
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
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
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/zion-hire-ai",
      badge: "Premium",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
    },

    // NEW MICRO SAAS SERVICES - AI & Machine Learning
    {
      title: "AI Content Generator Pro",
      description: "Generate high-quality content, code, and creative assets with our advanced AI models.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700" />,
      link: "/services/ai-content-generation",
      badge: "Hot",
      details: "Create blog posts, marketing copy, code snippets, and creative content in seconds. Starting at $29/month with API access."
    },
    {
      title: "AI Image & Video Editor",
      description: "Professional-grade AI-powered image and video editing tools for creators and businesses.",
      icon: <FileImage className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-blue-100 text-green-700" />,
      link: "/services/ai-media-editing",
      badge: "Trending",
      details: "Remove backgrounds, enhance quality, generate variations, and create stunning visuals. Plans from $19/month."
    },
    {
      title: "AI Code Assistant",
      description: "Intelligent code completion, debugging, and optimization powered by advanced language models.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-orange-100 to-red-100 text-orange-700" />,
      link: "/services/ai-code-assistant",
      badge: "Developer Favorite",
      details: "Write, review, and optimize code in 50+ programming languages. IDE integrations available. Starting at $39/month."
    },
    {
      title: "AI Data Analytics Platform",
      description: "Transform raw data into actionable insights with our AI-powered analytics suite.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700" />,
      link: "/services/ai-analytics",
      badge: "Enterprise",
      details: "Advanced data visualization, predictive analytics, and automated reporting. Custom pricing for enterprise clients."
    },

    // NEW MICRO SAAS SERVICES - Cybersecurity
    {
      title: "AI Threat Detection",
      description: "Real-time cybersecurity threat detection and response using advanced AI algorithms.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-red-100 to-orange-100 text-red-700" />,
      link: "/services/ai-threat-detection",
      badge: "Security",
      details: "24/7 monitoring, instant alerts, and automated response to cyber threats. Starting at $99/month for small businesses."
    },
    {
      title: "Zero Trust Security Suite",
      description: "Comprehensive zero-trust security implementation for modern enterprise environments.",
      icon: <Lock className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-gray-100 to-slate-100 text-gray-700" />,
      link: "/services/zero-trust-security",
      badge: "Enterprise",
      details: "Identity verification, network segmentation, and continuous monitoring. Custom enterprise pricing available."
    },
    {
      title: "Penetration Testing as a Service",
      description: "Regular security assessments and vulnerability scanning for continuous protection.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-700" />,
      link: "/services/penetration-testing",
      badge: "Compliance",
      details: "Monthly security assessments, detailed reports, and remediation guidance. Plans from $299/month."
    },

    // NEW MICRO SAAS SERVICES - Cloud & Infrastructure
    {
      title: "Multi-Cloud Management",
      description: "Unified management platform for AWS, Azure, Google Cloud, and hybrid environments.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700" />,
      link: "/services/multi-cloud-management",
      badge: "Cloud",
      details: "Cost optimization, security compliance, and unified monitoring across all cloud platforms. Starting at $79/month."
    },
    {
      title: "DevOps Automation Platform",
      description: "Streamline CI/CD pipelines, infrastructure as code, and deployment automation.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/services/devops-automation",
      badge: "DevOps",
      details: "Automated testing, deployment, and infrastructure management. Plans from $49/month with unlimited pipelines."
    },
    {
      title: "Edge Computing Solutions",
      description: "Deploy and manage applications at the edge for improved performance and reduced latency.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-violet-100 text-purple-700" />,
      link: "/services/edge-computing",
      badge: "Edge",
      details: "Global edge network, real-time processing, and IoT integration. Custom pricing based on usage and locations."
    },

    // NEW MICRO SAAS SERVICES - Business Intelligence
    {
      title: "AI-Powered CRM",
      description: "Intelligent customer relationship management with predictive analytics and automation.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-pink-100 to-rose-100 text-pink-700" />,
      link: "/services/ai-crm",
      badge: "Sales",
      details: "Lead scoring, sales forecasting, and automated follow-ups. Starting at $39/user/month with AI features included."
    },
    {
      title: "Business Process Automation",
      description: "Automate repetitive tasks and workflows to improve efficiency and reduce costs.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-yellow-100 to-amber-100 text-yellow-700" />,
      link: "/services/business-automation",
      badge: "Automation",
      details: "Workflow automation, document processing, and integration with 100+ business applications. Plans from $29/month."
    },
    {
      title: "AI Market Research",
      description: "Comprehensive market analysis and competitive intelligence powered by AI.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700" />,
      link: "/services/ai-market-research",
      badge: "Research",
      details: "Real-time market monitoring, competitor analysis, and trend prediction. Starting at $199/month for comprehensive insights."
    },

    // NEW MICRO SAAS SERVICES - Communication & Collaboration
    {
      title: "AI Meeting Assistant",
      description: "Intelligent meeting transcription, summarization, and action item tracking.",
      icon: <MessageCircle className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700" />,
      link: "/services/ai-meeting-assistant",
      badge: "Productivity",
      details: "Real-time transcription, smart summaries, and automated follow-ups. Plans from $19/month with unlimited meetings."
    },
    {
      title: "Virtual Event Platform",
      description: "Host engaging virtual events, webinars, and conferences with AI-powered features.",
      icon: <Video className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700" />,
      link: "/services/virtual-events",
      badge: "Events",
      details: "Interactive features, analytics, and AI-powered engagement tools. Starting at $99/month for up to 1000 attendees."
    },
    {
      title: "AI Translation Service",
      description: "Real-time translation and localization for global communication and content.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700" />,
      link: "/services/ai-translation",
      badge: "Global",
      details: "Support for 100+ languages, real-time translation, and cultural adaptation. Plans from $29/month with API access."
    },

    // NEW MICRO SAAS SERVICES - Specialized Tools
    {
      title: "AI Legal Document Review",
      description: "Automated legal document analysis, contract review, and compliance checking.",
      icon: <FileText className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-slate-100 to-gray-100 text-slate-700" />,
      link: "/services/ai-legal-review",
      badge: "Legal",
      details: "Contract analysis, risk assessment, and compliance monitoring. Starting at $149/month for law firms and businesses."
    },
    {
      title: "AI Financial Advisor",
      description: "Personalized financial planning and investment recommendations powered by AI.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/services/ai-financial-advisor",
      badge: "Finance",
      details: "Portfolio optimization, risk assessment, and financial goal planning. Plans from $39/month with personalized advice."
    },
    {
      title: "AI Healthcare Assistant",
      description: "Intelligent health monitoring, symptom analysis, and wellness recommendations.",
      icon: <Heart className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-red-100 to-pink-100 text-red-700" />,
      link: "/services/ai-healthcare",
      badge: "Healthcare",
      details: "Health tracking, symptom analysis, and wellness coaching. HIPAA compliant. Starting at $29/month for individuals."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8757
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
<<<<<<< HEAD
    <section className="py-20 bg-gradient-to-b from-background to-zion-slate/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to Succeed
          </h2>
          
          <p className="text-lg md:text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Discover the tools and services that make Zion the ultimate platform for 
            talent acquisition and business growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {featureCTAs.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <Link to={feature.link} className="block h-full">
                  <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-purple/10">
                    {/* Background glow effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Header with icon */}
                    <div className="relative z-10 flex items-start gap-6 mb-6">
                      <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg`}>
                        <IconComponent className={`w-10 h-10 ${feature.iconColor}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-zion-slate-light leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Feature list */}
                    <div className="relative z-10 mb-6">
                      <div className="grid grid-cols-1 gap-3">
                        {feature.features.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                            <span className="text-zion-slate-light text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA button */}
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 text-zion-cyan font-medium group-hover:text-zion-cyan-light transition-colors duration-300">
                        <span>Explore {feature.title}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className={`absolute top-6 right-6 w-4 h-4 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                    
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left`}></div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-zion-purple/10 via-zion-cyan/10 to-zion-blue/10 border border-white/10 backdrop-blur-xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zion-purple via-zion-cyan to-zion-blue"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Globe className="w-10 h-10 text-zion-cyan" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to Transform Your Business?
                </h3>
                <Zap className="w-10 h-10 text-zion-purple" />
              </div>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of companies already using Zion to find top talent, 
                access global IT services, and scale their operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/signup"
                  className="px-10 py-5 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25 flex items-center gap-2 justify-center"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-10 py-5 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
                >
                  <span>Contact Sales</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
=======
    <section className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-purple-light bg-clip-text text-transparent">
            Discover Zion's Comprehensive Suite of Micro SAAS Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Explore our extensive collection of AI-powered tools, cybersecurity solutions, cloud services, and business automation platforms designed to transform your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 hover:border-zion-purple/50 hover:scale-105 group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white border-0">
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
                <Button asChild className="w-full gap-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white border-0 group-hover:shadow-lg group-hover:shadow-zion-purple/25 transition-all duration-300">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8757
      </div>
    </section>
  );
}
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
