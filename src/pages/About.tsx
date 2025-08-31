import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Heart, 
  Truck, 
  Atom, 
  Cpu, 
  Cloud, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Lightbulb,
  Rocket,
  Sparkles,
  BarChart3,
  Award,
  Target,
  Zap,
  Eye,
  Lock,
  Database,
  Network,
  Package,
  Calendar,
  Search,
  Phone,
  Mail,
  MapPin,
  Clock,
  Building,
  Code,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Gauge,
  Workflow,
  MessageCircle,
  FileText,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Mountain,
  TreePine,
  Recycle,
  Battery,
  Wifi,
  Bluetooth,
  Radio,
  Telescope,
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Pill,
  Stethoscope,
  Syringe,
  HeartPulse,
  Activity,
  Thermometer,
  Droplet,
  EyeOff,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  CreditCard,
  Wallet,
  PiggyBank,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  AreaChart,
  CandlestickChart,
  GanttChart,
  Kanban,
  Timer,
  Stopwatch,
  Warehouse,
  Factory,
  Route,
  Compass,
  ExternalLink,
  ShoppingCart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function About() {
  const companyStats = [
    {
      value: "50+",
      label: "AI Solutions",
      description: "Cutting-edge artificial intelligence services"
    },
    {
      value: "25+",
      label: "IT Services",
      description: "Comprehensive technology solutions"
    },
    {
      value: "30+",
      label: "Micro SAAS",
      description: "Scalable software solutions"
    },
    {
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service delivery"
    },
    {
      value: "24/7",
      label: "Support",
      description: "Round-the-clock assistance"
    },
    {
      value: "500+",
      label: "Clients",
      description: "Trusted by businesses worldwide"
    }
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions that drive business transformation.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships and deliver solutions that exceed expectations.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable business value and ROI for our clients through strategic technology implementation.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Rigorous testing and quality assurance processes ensure reliable, secure, and scalable solutions.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We bring international expertise and diverse perspectives to solve complex business challenges.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service.",
      color: "from-cyan-500 to-purple-500"
    }
  ];

  const technologies = [
    {
      category: "Artificial Intelligence",
      items: [
        "Machine Learning & Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI-Powered Automation",
        "Quantum Computing Integration"
      ],
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        "AWS, Azure, Google Cloud",
        "Kubernetes & Docker",
        "Serverless Architecture",
        "Microservices",
        "DevOps & CI/CD",
        "Infrastructure as Code"
      ],
      icon: Cloud,
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Cybersecurity",
      items: [
        "Zero Trust Architecture",
        "Threat Detection & Response",
        "Compliance & Governance",
        "Penetration Testing",
        "Security Automation",
        "Incident Response"
      ],
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      category: "Data & Analytics",
      items: [
        "Big Data Processing",
        "Real-time Analytics",
        "Business Intelligence",
        "Data Warehousing",
        "ETL Pipelines",
        "Data Governance"
      ],
      icon: BarChart3,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "AI-powered risk management, fraud detection, and compliance solutions for banks, fintech, and insurance companies.",
      icon: CreditCard,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Healthcare",
      description: "Patient data security, AI diagnostics, and operational efficiency solutions for healthcare providers and pharma.",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Manufacturing",
      description: "IoT integration, predictive maintenance, and supply chain optimization for manufacturing and industrial companies.",
      icon: Factory,
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Retail & E-commerce",
      description: "Customer analytics, inventory management, and personalized experiences for retail and online businesses.",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Technology",
      description: "Scalable infrastructure, security, and automation solutions for tech companies and startups.",
      icon: Code,
      color: "from-purple-500 to-cyan-500"
    },
    {
      name: "Government",
      description: "Secure, compliant solutions for government agencies and public sector organizations.",
      icon: Building,
      color: "from-gray-500 to-slate-500"
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM EST"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="About Us | Zion Tech Group"
        description="Learn about Zion Tech Group - a leading technology company specializing in AI, IT services, and micro SAAS solutions. Discover our mission, values, and expertise."
        keywords="about Zion Tech Group, AI company, IT services, technology consulting, digital transformation, company mission, team expertise"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full">
                <Building className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We are a forward-thinking technology company dedicated to transforming businesses 
              through innovative AI solutions, comprehensive IT services, and scalable micro SAAS platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 8 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl w-fit mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize advanced technology and make cutting-edge AI, IT, and software solutions 
                accessible to businesses of all sizes. We believe that innovation should not be limited 
                to large corporations with massive budgets.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our mission is to bridge the gap between complex technology and practical business needs, 
                delivering solutions that drive real results and measurable ROI for our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl w-fit mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To be the leading technology partner for businesses seeking digital transformation, 
                recognized for our innovative solutions, exceptional service, and unwavering commitment 
                to client success.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We envision a future where every business, regardless of size or industry, 
                can leverage the power of AI and advanced technology to compete and thrive 
                in the digital economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`p-3 bg-gradient-to-r ${value.color} rounded-xl w-fit mb-6`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Technology Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our deep expertise spans the full spectrum of modern technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${tech.color} rounded-xl mr-4`}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{tech.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver tailored technology solutions for specific industries, understanding 
              the unique challenges and compliance requirements of each sector
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`p-3 bg-gradient-to-r ${industry.color} rounded-xl w-fit mb-6`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                <p className="text-gray-300 leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through innovation, expertise, and unwavering commitment to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Track Record",
                description: "Successfully delivered 500+ projects across diverse industries"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Specialists with years of experience and deep technical knowledge"
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                description: "Agile methodologies ensure quick time-to-market and rapid iteration"
              },
              {
                icon: ShieldCheck,
                title: "Security First",
                description: "Enterprise-grade security and compliance built into every solution"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our expertise can help transform your business and drive innovation
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
