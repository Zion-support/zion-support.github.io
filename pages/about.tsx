import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Globe,
  Shield,
  Zap,
  Target,
  Heart,
  Building,
  Rocket,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Car,
  Sprout,
  Mail,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  Truck,
  Factory,
  Banknote,
  Calendar,
  MapPin,
  Phone,
  Headphones,
  Wrench,
  Cog,
  Layers,
  GitBranch,
  Terminal,
  Plus,
  Minus,
  DollarSign,
  CreditCard,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero
} from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      expertise: "AI Strategy, Cloud Architecture",
      experience: "15+ years",
      image: "/team/kleber-santos.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      expertise: "Software Engineering, DevOps",
      experience: "12+ years",
      image: "/team/sarah-johnson.jpg"
    },
    {
      name: "Michael Chen",
      role: "Head of AI",
      expertise: "Machine Learning, Data Science",
      experience: "10+ years",
      image: "/team/michael-chen.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Security",
      expertise: "Cybersecurity, Compliance",
      experience: "8+ years",
      image: "/team/emily-rodriguez.jpg"
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.",
      icon: Rocket
    },
    {
      title: "Client Success",
      description: "Our success is measured by our clients' success. We go above and beyond to ensure every project delivers exceptional value.",
      icon: Target
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service and project delivery.",
      icon: Award
    },
    {
      title: "Collaborative Approach",
      description: "We work closely with our clients as partners, ensuring transparency, communication, and alignment throughout every project.",
      icon: Users
    }
  ];

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions that transform data into actionable insights",
      icon: Brain,
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      icon: Cloud,
      features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Cost Optimization"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: Shield,
      features: ["Security Audits", "Threat Detection", "Compliance", "Incident Response"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies and implementation",
      icon: Settings,
      features: ["Process Automation", "System Integration", "Change Management", "Training"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>About Us | Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology solutions provider specializing in AI, cloud services, and digital transformation. Meet our expert team and discover our mission." />
        <meta name="keywords" content="about zion tech group, technology company, AI experts, cloud specialists, Delaware tech company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              We are a leading technology solutions provider dedicated to transforming businesses 
              through innovative AI, cloud services, and digital transformation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation. We believe technology should be accessible, reliable, 
                and transformative for organizations of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of expert engineers, data scientists, and consultants work tirelessly 
                to deliver solutions that not only meet but exceed our clients' expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                  Work With Us
                </Link>
                <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg mb-6">
                To be the world's most trusted technology partner, known for delivering 
                innovative solutions that transform businesses and create lasting value.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Innovation-driven solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Client-first approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Continuous learning and growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Global impact through technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth 
              and drive digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional technology solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-2">{member.role}</div>
                <div className="text-gray-600 text-sm mb-2">{member.expertise}</div>
                <div className="text-gray-500 text-sm">{member.experience}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help transform your business 
            with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Get Started Today
            </Link>
            <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;