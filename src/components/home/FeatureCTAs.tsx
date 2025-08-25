
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Settings, 
  Search, 
  MessageSquare, 
  Smartphone, 
  Calendar,
  BookOpen,
  Code,
  Building,
  Clock,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  PenTool,
  Link as LinkIcon,
  Shield,
  BarChart3
=======
  Brain,
  Server,
  TrendingUp,
  CheckCircle
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
=======
  Brain,
  Server,
  TrendingUp
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4df9
=======
  Brain,
  Shield,
  Cloud
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
  Sparkles
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
} from "lucide-react";

=======
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Phone, Mail, Globe, Brain, Shield, Zap, Database, Cloud, Lock, Leaf, DollarSign, Eye, Users, CheckCircle } from 'lucide-react';

const features = [
  {
    title: "AI-Powered Matching",
    description: "Advanced AI algorithms connect you with the perfect tech professionals and services",
    details: "Our intelligent matching system analyzes your requirements and preferences to find the ideal matches from our extensive network of verified professionals.",
    icon: <Brain className="h-8 w-8 text-zion-purple" />,
    link: "/ai-matcher",
    badge: "AI"
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade security protecting your data and transactions",
    details: "Bank-level encryption, secure payment processing, and comprehensive data protection ensure your information stays safe and confidential.",
    icon: <Shield className="h-8 w-8 text-zion-cyan" />,
    link: "/security",
    badge: "Secure"
  },
  {
    title: "Global Network",
    description: "Access to worldwide tech talent and innovative solutions",
    details: "Connect with professionals and companies from around the globe, bringing diverse perspectives and cutting-edge solutions to your projects.",
    icon: <Globe className="h-8 w-8 text-zion-blue" />,
    link: "/network",
    badge: "Global"
  },
  {
    title: "Real-time Analytics",
    description: "Comprehensive insights into your tech ecosystem performance",
    details: "Monitor project progress, track performance metrics, and gain valuable insights to optimize your technology investments and strategies.",
    icon: <Database className="h-8 w-8 text-zion-green" />,
    link: "/analytics",
    badge: "Analytics"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your tech needs",
    details: "Our dedicated support team is available 24/7 to help you with any questions, technical issues, or guidance you may need.",
    icon: <Users className="h-8 w-8 text-zion-orange" />,
    link: "/support",
    badge: "Support"
  },
  {
    title: "Innovation Hub",
    description: "Stay ahead with the latest tech trends and emerging solutions",
    details: "Access cutting-edge technologies, research insights, and innovative approaches to keep your business at the forefront of digital transformation.",
    icon: <Zap className="h-8 w-8 text-zion-yellow" />,
    link: "/innovation",
    badge: "Innovation"
  }
];

>>>>>>> origin/cursor/build-and-fix-errors-e276
export function FeatureCTAs() {
  const features = [
    {
      title: "AI Services & Solutions",
      description: "Comprehensive AI services from strategy to implementation, including custom model development and AI consulting.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/ai-services",
      badge: "New",
      details: "Transform your business with cutting-edge AI solutions including machine learning, computer vision, NLP, and strategic AI consulting."
    },
    {
      title: "IT Services & Infrastructure",
      description: "Complete IT solutions including cloud management, cybersecurity, DevOps, and infrastructure modernization.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/it-services",
      badge: "Popular",
      details: "From cloud migration to cybersecurity, our IT experts help you build robust, scalable, and secure technology infrastructure."
    },
    {
      title: "Digital Marketing Services",
      description: "Full-service digital marketing including SEO, PPC, social media, content marketing, and analytics.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/digital-marketing",
      badge: "Featured",
      details: "Drive growth with data-driven marketing strategies, conversion optimization, and comprehensive digital marketing solutions."
    },
    {
      title: "Business Solutions & Consulting",
      description: "Strategic business consulting, process optimization, and digital transformation services.",
      icon: <CheckCircle className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/business-solutions",
      details: "Our business consultants help you optimize operations, implement automation, and achieve sustainable growth through strategic planning."
    },
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
<<<<<<< HEAD
      icon: <Search className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg" />,
=======
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities.",
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
<<<<<<< HEAD
      icon: <Users className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg" />,
=======
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability.",
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
<<<<<<< HEAD
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",
      icon: <Zap className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg" />,
      link: "/services",
      badge: "New",
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews.",
      gradient: "from-cyan-500/20 to-cyan-600/20"
    },
    {
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg" />,
      link: "/equipment",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects.",
      gradient: "from-amber-500/20 to-amber-600/20"
    },
    {
      title: "Community Hub",
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
      icon: <MessageSquare className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg" />,
      link: "/community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events.",
      gradient: "from-emerald-500/20 to-emerald-600/20"
    },
    {
<<<<<<< HEAD
      title: "Mobile Experience",
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
      icon: <Smartphone className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg" />,
      link: "/mobile-launch",
      badge: "Featured",
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are.",
      gradient: "from-indigo-500/20 to-indigo-600/20"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-lg" />,
=======
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
      link: "/enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers.",
      gradient: "from-pink-500/20 to-pink-600/20"
    },
    {
<<<<<<< HEAD
      title: "Developer Tools",
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
      icon: <Code className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-gray-500 to-gray-600 text-white shadow-lg" />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support.",
      gradient: "from-gray-500/20 to-gray-600/20"
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
      icon: <BookOpen className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg" />,
      link: "/blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology.",
      gradient: "from-teal-500/20 to-teal-600/20"
    },
    {
      title: "Project Management",
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
      icon: <Calendar className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg" />,
      link: "/dashboard/projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion.",
      gradient: "from-red-500/20 to-red-600/20"
    },
    {
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg" />,
      link: "/zion-hire-ai",
<<<<<<< HEAD
      details: "Automate candidate screening, schedule interviews, and make data-driven hiring decisions with our AI assistant.",
      gradient: "from-violet-500/20 to-violet-600/20"
=======
      badge: "Premium",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // New innovative micro SAAS services
    {
      title: "AI Content Generation",
      description: "Automated content creation for blogs, social media, and marketing using advanced language models.",
      icon: <PenTool className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/ai-services",
      badge: "AI-Powered",
      details: "Generate high-quality, SEO-optimized content at scale with our AI writing platform that learns your brand voice."
    },
    {
      title: "Smart Contract Development",
      description: "Blockchain smart contract development and auditing for DeFi, NFTs, and enterprise solutions.",
      icon: <LinkIcon className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/blockchain-services",
      badge: "Blockchain",
      details: "Build secure, audited smart contracts with our expert blockchain developers and comprehensive security testing."
    },
    {
      title: "IoT Device Management",
      description: "Complete IoT platform for device provisioning, monitoring, and data analytics.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/iot-services",
      badge: "IoT",
      details: "Manage your connected devices with our comprehensive IoT platform featuring real-time monitoring and predictive analytics."
    },
    {
      title: "Zero-Trust Security",
      description: "Implement zero-trust security architecture with identity verification and continuous monitoring.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/cybersecurity-services",
      badge: "Security",
      details: "Protect your business with modern zero-trust security that verifies every user and device before granting access."
    },
    {
      title: "Predictive Analytics",
      description: "Real-time business intelligence with predictive modeling for forecasting and trend analysis.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/ai-services",
      badge: "Analytics",
      details: "Transform your data into actionable insights with our AI-powered predictive analytics platform."
    },
    {
      title: "Edge Computing Platform",
      description: "Distributed edge computing for real-time data processing and low-latency IoT applications.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/iot-services",
      badge: "Edge",
      details: "Process data closer to the source with our edge computing platform for faster response times and reduced latency."
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
=======
    {
      title: "AI Services & Solutions",
      description: "Comprehensive AI development, machine learning, and automation services for modern businesses.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/ai-services",
      badge: "New",
      details: "From custom AI models to computer vision solutions, we deliver cutting-edge artificial intelligence services."
    },
    {
      title: "IT Infrastructure Services",
      description: "Enterprise-grade IT solutions including cloud migration, cybersecurity, and managed services.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/it-services",
      badge: "Featured",
      details: "Transform your IT infrastructure with our comprehensive cloud, security, and DevOps solutions."
    },
    {
      title: "Digital Transformation",
      description: "Strategic consulting and implementation for business modernization and digital growth.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/digital-transformation",
      badge: "Premium",
      details: "Navigate the digital age with our comprehensive transformation strategies and implementation services."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4df9
=======
    {
      title: "Micro SAAS Services",
      description: "Comprehensive suite of micro SAAS solutions including AI tools, IT services, and business automation.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/micro-saas-services",
      badge: "New",
      details: "Transform your business with our cutting-edge micro SAAS solutions. From AI-powered tools to enterprise-grade services."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
=======
    {
      title: "AI Development Services",
      description: "Custom AI solutions including chatbots, content generation, and machine learning models tailored to your business needs.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/comprehensive-services",
      badge: "New",
      details: "From AI chatbots to predictive analytics, we build intelligent solutions that drive business growth and efficiency."
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services including audits, zero trust implementation, and 24/7 incident response.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/comprehensive-services",
      badge: "Featured",
      details: "Protect your business with enterprise-grade security solutions, compliance frameworks, and proactive threat detection."
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud migration, DevOps automation, and infrastructure management for scalable, secure operations.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/comprehensive-services",
      badge: "Popular",
      details: "Modernize your infrastructure with cloud-native solutions, automated CI/CD pipelines, and cost optimization strategies."
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
    {
      title: "Micro SAAS Services",
      description: "Comprehensive suite of micro SAAS solutions for AI, IT, development, analytics, security, and automation.",
      icon: <Sparkles className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-zion-purple to-zion-cyan text-white" />,
      link: "/micro-saas-services",
      badge: "New",
      details: "Transform your business with our cutting-edge micro SAAS solutions designed to solve specific challenges and drive growth."
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

<<<<<<< HEAD
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
=======
  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
>>>>>>> origin/cursor/build-and-fix-errors-e276
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
<<<<<<< HEAD
    <section className="py-24 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            Explore Our Platform
          </h2>
          <p className="text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools and services designed to revolutionize your tech experience
=======
    <section className="py-16 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark/20 via-zion-slate/10 to-zion-purple-dark/20"></div>
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
            Discover Zion's Powerful Features
          </h2>
          <p className="text-xl text-zion-cyan max-w-4xl mx-auto">
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
<<<<<<< HEAD
            <motion.div key={index} variants={itemVariants}>
              <Card className={`group bg-gradient-to-br ${feature.gradient} border-zion-blue-light/20 hover:border-zion-purple/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-zion-purple/20 transform hover:scale-105 backdrop-blur-sm`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    {feature.badge && (
                      <Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0 px-3 py-1 rounded-full text-xs font-medium">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <p className="text-zion-slate-light/80 text-sm leading-relaxed">
                    {feature.details}
                  </p>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white border-0 rounded-xl py-3 group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    <Link to={feature.link} className="flex items-center justify-center gap-2">
                      Explore {feature.title}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
=======
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.details}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
          ))}
        </motion.div>
=======
import React from 'react';
import { Link } from "react-router-dom";

export function FeatureCTAs() {
  const features = [
    {
      title: "AI & Automation",
      description: "Intelligent automation solutions to streamline your business processes",
      link: "/ai-services",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps services for modern businesses",
      link: "/enterprise-solutions",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and protection services to safeguard your digital assets",
      link: "/comprehensive-services",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics",
      link: "/comprehensive-services",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Micro SAAS",
      description: "Custom software solutions tailored to your specific business needs",
      link: "/micro-saas",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Comprehensive Solutions",
      description: "End-to-end technology solutions for enterprise transformation",
      link: "/comprehensive-services",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
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
        
        <div className="text-center mt-12">
          <Link 
            to="/comprehensive-services"
            className="inline-block bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
      </div>
    </section>
  );
}
