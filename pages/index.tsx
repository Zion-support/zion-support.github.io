import React from "react"
import Head from "next/head"
import Link from "next/link"
import { 
  ArrowRight, 
  Award, 
  BarChart3, 
  Bot, 
  Brain, 
  CheckCircle, 
  Eye, 
  MessageSquare, 
  Shield, 
  Zap,
  Cpu,
  Database,
  Network,
  Settings,
  Users,
  Globe,
  Lock,
  TrendingUp,
  Target,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Code,
  Server,
  Cloud,
  HardDrive,
  Wifi,
  Monitor,
  Smartphone,
  Laptop,
  Router,
  Building2,
  FileText,
  HelpCircle,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  ExternalLink,
  Play,
  ChevronRight,
  Sparkles,
  Rocket,
  Lightbulb,
  Handshake,
  Heart
} from "lucide-react"
import Navigation from "../src/components/Navigation"
import Footer from "../src/components/Footer"

export default function Home() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Expert Team Members" }
  ]

  const coreServices = [
    {
      title: "AI Services",
      description: "Transform your business with cutting-edge artificial intelligence solutions including machine learning, NLP, and computer vision.",
      icon: Brain,
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Automation",
        "Intelligent Chatbots"
      ],
      href: "/ai-services",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Custom software-as-a-service applications designed to solve specific business challenges with scalable, secure solutions.",
      icon: Code,
      features: [
        "Custom SaaS Development",
        "API Integration",
        "User Management",
        "Payment Processing",
        "Analytics Dashboard",
        "White-label Solutions"
      ],
      href: "/micro-saas",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "IT Services",
      description: "Comprehensive IT infrastructure and support services including cloud migration, cybersecurity, and network management.",
      icon: Server,
      features: [
        "Cloud Infrastructure",
        "Cybersecurity Solutions",
        "Network Management",
        "IT Support & Helpdesk",
        "DevOps & CI/CD",
        "Data Management"
      ],
      href: "/it-services",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Our certified professionals have years of experience in cutting-edge technologies and proven track records."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "We deliver solutions quickly without compromising on quality, meeting your business deadlines."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Industry-leading security practices and compliance standards to protect your business data."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support and monitoring to ensure your systems are always running optimally."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      name: "Michael Chen",
      company: "InnovateLabs",
      role: "CEO",
      content: "Their micro SaaS solutions helped us scale our operations efficiently. Highly recommended!",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      name: "Emily Rodriguez",
      company: "DataFlow Inc",
      role: "IT Director",
      content: "Professional IT services with excellent support. Our infrastructure has never been more reliable.",
      rating: 5,
      image: "/api/placeholder/100/100"
    }
  ]

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI & Technology Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      <Navigation />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Cutting-Edge Technology
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Leading provider of AI solutions, micro SaaS applications, and comprehensive IT services. 
                We help businesses thrive in the digital age with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/demo"
                  className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-blue-900 font-medium rounded-lg transition-colors text-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We provide comprehensive technology solutions to help your business thrive in the digital age. 
                From innovative micro SaaS applications to cutting-edge AI services and enterprise IT solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to delivering exceptional results and building long-term partnerships with our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients say about working with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already transformed their operations with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 font-medium rounded-lg transition-colors text-lg"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/demo"
                className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-blue-900 font-medium rounded-lg transition-colors text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-blue-800">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center text-blue-100">
                  <Phone className="h-5 w-5 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center text-blue-100">
                  <Mail className="h-5 w-5 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center text-blue-100">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}