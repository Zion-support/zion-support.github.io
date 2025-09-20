
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Settings, 
<<<<<<< HEAD
  Search, 
  MessageSquare, 
  Smartphone, 
  Calendar,
  BookOpen,
  Code,
  Building,
  Clock
} from "lucide-react";

export function FeatureCTAs() {
  const features = [
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
    {
      title: "Micro SAAS Services",
      description: "Comprehensive suite of micro SAAS solutions including AI tools, IT services, and business automation.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/micro-saas-services",
      badge: "New",
      details: "Transform your business with our cutting-edge micro SAAS solutions. From AI-powered tools to enterprise-grade services."
=======
  Link as LinkIcon,
  Phone,
  Mail,
  Globe,
  Star,
  Users,
  Clock
} from "lucide-react";

const features = [
  {
    title: "AI & Machine Learning",
    description: "Transform your business with intelligent automation and data-driven insights",
    icon: <Brain className="w-8 h-8" />,
    link: "/comprehensive-services#ai-ml",
    color: "from-purple-500 to-indigo-600",
    cta: "Explore AI Services",
    badge: "Popular"
  },
  {
    title: "Cybersecurity",
    description: "Protect your organization with comprehensive security solutions and monitoring",
    icon: <Shield className="w-8 h-8" />,
    link: "/comprehensive-services#cybersecurity",
    color: "from-red-500 to-pink-600",
    cta: "Secure Your Business",
    badge: "Critical"
  },
  {
    title: "Cloud & Infrastructure",
    description: "Modernize your infrastructure with cloud solutions and DevOps automation",
    icon: <Cloud className="w-8 h-8" />,
    link: "/comprehensive-services#cloud-infrastructure",
    color: "from-blue-500 to-cyan-600",
    cta: "Cloud Solutions",
    badge: "Trending"
  },
  {
    title: "Data & Analytics",
    description: "Unlock business insights with advanced analytics and data engineering",
    icon: <Database className="w-8 h-8" />,
    link: "/comprehensive-services#data-analytics",
    color: "from-green-500 to-emerald-600",
    cta: "Data Insights",
    badge: "Essential"
  },
  {
    title: "Digital Transformation",
    description: "Accelerate your digital journey with strategic transformation services",
    icon: <Zap className="w-8 h-8" />,
    link: "/comprehensive-services#digital-transformation",
    color: "from-orange-500 to-red-600",
    cta: "Transform Now",
    badge: "Strategic"
  },
  {
    title: "Web & Mobile",
    description: "Build custom applications and digital experiences for your business",
    icon: <Code className="w-8 h-8" />,
    link: "/comprehensive-services#web-mobile",
    color: "from-indigo-500 to-purple-600",
    cta: "Build Apps",
    badge: "Custom"
  },
  {
    title: "IT Support & Management",
    description: "Ensure smooth IT operations with managed services and support",
    icon: <Settings className="w-8 h-8" />,
    link: "/comprehensive-services#it-support",
    color: "from-gray-500 to-slate-600",
    cta: "Get Support",
    badge: "24/7"
  },
  {
    title: "Blockchain & Web3",
    description: "Leverage decentralized technologies for innovation and transparency",
    icon: <LinkIcon className="w-8 h-8" />,
    link: "/comprehensive-services#blockchain-web3",
    color: "from-yellow-500 to-amber-600",
    cta: "Web3 Solutions",
    badge: "Innovation"
  }
];

const stats = [
  { number: "500+", label: "Projects Completed", icon: <Star className="w-5 h-5" /> },
  { number: "50+", label: "Expert Consultants", icon: <Users className="w-5 h-5" /> },
  { number: "24/7", label: "Support Available", icon: <Clock className="w-5 h-5" /> },
  { number: "99.9%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> }
];

export function FeatureCTAs() {
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

  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
>>>>>>> origin/ziontechgroup-improvements
    }
  ];

  return (
<<<<<<< HEAD
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
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
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
          ))}
        </div>
=======
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden" role="region" aria-labelledby="features-title">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-zion-purple rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-zion-cyan rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="features-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple">Technology Services</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of professional technology services designed to accelerate your business growth, 
            enhance security, and drive innovation across all aspects of your organization.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              variants={statsVariants}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-zion-cyan mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-zion-slate-light text-sm">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Link to={feature.link} className="block h-full">
                <div className="rounded-xl overflow-hidden h-full border border-zion-blue-light/30 bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm p-6 transition-all duration-500 hover:border-zion-purple/50 hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:scale-[1.02]">
                  {/* Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${feature.color} text-white`}>
                      {feature.badge}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10 group-hover:border-zion-cyan group-hover:text-zion-cyan-light transition-all duration-300 group-hover:scale-105"
                  >
                    {feature.cta}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/comprehensive-services">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg px-8 py-6 group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/25">
              View All Services
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-5xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 leading-relaxed">
              Our expert team is ready to help you implement the perfect technology solutions. 
              Get in touch today for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group transition-all duration-300 hover:scale-105">
                <Phone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Call +1 302 464 0950
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 group transition-all duration-300 hover:scale-105">
                <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Email kleber@ziontechgroup.com
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 group transition-all duration-300 hover:scale-105">
                <Globe className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Visit ziontechgroup.com
              </Button>
            </div>
            <div className="text-zion-slate-light text-sm bg-zion-blue-dark/50 rounded-lg p-4">
              <p className="font-medium">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="text-zion-slate-light/80 mt-1">Serving clients worldwide with 24/7 support</p>
            </div>
          </div>
        </motion.div>
>>>>>>> origin/ziontechgroup-improvements
      </div>
    </section>
  );
}
