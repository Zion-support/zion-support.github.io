
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
  Brain,
  Server,
  TrendingUp,
  CheckCircle,
  Network,
  Monitor,
  Bot,
  FileText,
  Video,
  BarChart3,
  AlertTriangle,
  Eye,
  PieChart,
  PenTool,
  Shield,
  Cloud,
  Globe,
  Lock,
  Sparkles,
  Rocket,
  Target,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

export function FeatureCTAs() {
  const features = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.",
      icon: <Brain className="h-12 w-12 p-2 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700" />,
      link: "/ai-services",
      badge: "Most Popular",
      details: "Leverage machine learning algorithms to uncover hidden patterns, predict trends, and make data-driven decisions that drive business growth.",
      benefits: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "Automated Insights"]
    },
    {
      title: "Enterprise Cybersecurity Suite",
      description: "Comprehensive security solutions including threat detection, incident response, compliance management, and 24/7 monitoring.",
      icon: <Shield className="h-12 w-12 p-2 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 text-red-700" />,
      link: "/cybersecurity",
      badge: "Enterprise",
      details: "Protect your business with enterprise-grade cybersecurity that adapts to evolving threats and ensures compliance with industry standards.",
      benefits: ["Threat Detection", "Incident Response", "Compliance Management", "24/7 Monitoring"]
    },
    {
      title: "Cloud Migration & Optimization",
      description: "Seamlessly migrate to the cloud with our proven methodology. Optimize costs, improve performance, and enhance scalability.",
      icon: <Cloud className="h-12 w-12 p-2 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700" />,
      link: "/cloud-services",
      badge: "Cost-Saving",
      details: "Our cloud experts ensure zero-downtime migration while optimizing your infrastructure for maximum efficiency and cost savings.",
      benefits: ["Zero-downtime Migration", "Cost Optimization", "Performance Tuning", "Auto-scaling"]
    },
    {
      title: "AI Talent Matching Platform",
      description: "Connect with the perfect AI and tech specialists using our intelligent matching algorithm. Find talent that fits your project needs.",
      icon: <Search className="h-12 w-12 p-2 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700" />,
      link: "/talent",
      badge: "AI-Powered",
      details: "Our AI matching system analyzes skills, experience, and project requirements to create perfect connections between clients and talent.",
      benefits: ["Smart Matching", "Skill Verification", "Portfolio Review", "Direct Communication"]
    },
    {
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to modernize your business operations, implement automation, and leverage emerging technologies for growth.",
      icon: <Rocket className="h-12 w-12 p-2 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/consulting",
      badge: "Strategic",
      details: "Transform your business with expert guidance on digital strategy, process optimization, and technology implementation.",
      benefits: ["Digital Strategy", "Process Optimization", "Change Management", "ROI Tracking"]
    },
    {
      title: "IoT & Smart City Solutions",
      description: "Build connected ecosystems with our IoT platform. Monitor, analyze, and optimize operations in real-time.",
      icon: <Network className="h-12 w-12 p-2 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-700" />,
      link: "/iot-solutions",
      badge: "Innovation",
      details: "Create intelligent systems that collect data, provide insights, and automate processes across your infrastructure.",
      benefits: ["Real-time Monitoring", "Predictive Analytics", "Automated Control", "Data Integration"]
    },
    {
      title: "Blockchain & Web3 Development",
      description: "Build decentralized applications, smart contracts, and blockchain infrastructure for the future of digital business.",
      icon: <Code className="h-12 w-12 p-2 rounded-xl bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-700" />,
      link: "/blockchain",
      badge: "Future-Ready",
      details: "Stay ahead of the curve with blockchain solutions that provide transparency, security, and new business opportunities.",
      benefits: ["Smart Contracts", "DApp Development", "DeFi Solutions", "NFT Platforms"]
    },
    {
      title: "AI Content Generation",
      description: "Create high-quality content, code, and documentation using advanced AI models tailored to your industry and brand voice.",
      icon: <PenTool className="h-12 w-12 p-2 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 text-pink-700" />,
      link: "/ai-content",
      badge: "Productivity",
      details: "Generate engaging content, technical documentation, and marketing copy while maintaining your unique brand identity.",
      benefits: ["Content Creation", "Code Generation", "Documentation", "Brand Consistency"]
    },
    {
      title: "Data Privacy & Compliance",
      description: "Ensure your business meets GDPR, CCPA, and other privacy regulations with automated compliance tools and expert guidance.",
      icon: <Lock className="h-12 w-12 p-2 rounded-xl bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-700" />,
      link: "/compliance",
      badge: "Compliance",
      details: "Navigate complex privacy regulations with automated tools, audit trails, and expert compliance consulting.",
      benefits: ["GDPR Compliance", "CCPA Compliance", "Audit Trails", "Expert Guidance"]
    },
    {
      title: "AI-Powered Testing & QA",
      description: "Automate your testing processes with intelligent test case generation, bug detection, and quality assurance workflows.",
      icon: <Monitor className="h-12 w-12 p-2 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 text-violet-700" />,
      link: "/ai-testing",
      badge: "Quality",
      details: "Improve software quality with AI-driven testing that identifies issues faster and ensures comprehensive coverage.",
      benefits: ["Test Automation", "Bug Detection", "Coverage Analysis", "Performance Testing"]
    },
    {
      title: "Financial AI & Analytics",
      description: "Get personalized financial insights, investment recommendations, and risk assessment using advanced machine learning algorithms.",
      icon: <BarChart3 className="h-12 w-12 p-2 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 text-sky-700" />,
      link: "/financial-ai",
      badge: "FinTech",
      details: "Make informed financial decisions with AI-powered analytics, risk modeling, and predictive financial insights.",
      benefits: ["Risk Assessment", "Investment Analysis", "Financial Planning", "Market Insights"]
    },
    {
      title: "Healthcare AI Solutions",
      description: "Transform healthcare delivery with AI-powered diagnostic tools, patient monitoring, and clinical decision support systems.",
      icon: <Target className="h-12 w-12 p-2 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 text-rose-700" />,
      link: "/healthcare-ai",
      badge: "Healthcare",
      details: "Improve patient outcomes with AI solutions that enhance diagnostic accuracy and streamline clinical workflows.",
      benefits: ["Diagnostic Support", "Patient Monitoring", "Clinical Decision Support", "HIPAA Compliance"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 text-zion-cyan rounded-full text-sm font-medium border border-zion-cyan/20 mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Technology Solutions
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive suite of technology solutions designed to transform your business, 
            accelerate growth, and drive innovation in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-zion-cyan/25 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-zion-blue-light/20 group-hover:bg-zion-cyan/20 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    {feature.badge && (
                      <Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <p className="text-zion-slate-light/80 text-sm leading-relaxed mb-4">
                    {feature.details}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2">
                    <h4 className="text-zion-cyan text-sm font-semibold mb-2">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-xs text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Link
                    to={feature.link}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-zion-blue-dark/80 to-zion-purple-dark/80 backdrop-blur-sm rounded-3xl p-12 border border-zion-blue-light/30 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-12 h-12 text-zion-cyan mr-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Transform Your Business?
              </h3>
            </div>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful companies that have revolutionized their operations with Zion Tech Group. 
              Our expert team is ready to guide you through every step of your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-bold rounded-xl hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
