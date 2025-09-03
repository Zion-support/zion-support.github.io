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
  Cloud,
  Database,
  Users,
  Settings,
  Monitor,
  Network,
  FileText,
  Target,
  Calendar,
  Smartphone,
  Globe,
  Lock,
  TrendingUp,
  Clock,
  Star,
  Cpu,
  Wifi,
  Server,
  Code,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Rocket,
  Heart
} from "lucide-react"

export default function Home() {
  const title = "Zion Tech Group - Leading AI & Technology Solutions"
  const description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results."

  const services = [
    {
      title: "AI-Powered Business Automation",
      description: "Intelligent automation solutions that streamline operations and boost productivity",
      icon: Brain,
      features: ["Custom AI model development", "Process automation", "Predictive analytics", "Computer vision"],
      pricing: "$5,000 - $25,000/month",
      delivery: "4-8 weeks"
    },
    {
      title: "Enterprise Cloud Infrastructure",
      description: "Scalable, secure cloud solutions with 99.9% uptime guarantee",
      icon: Cloud,
      features: ["Multi-cloud architecture", "Auto-scaling", "Disaster recovery", "24/7 monitoring"],
      pricing: "$3,000 - $15,000/month",
      delivery: "2-6 weeks"
    },
    {
      title: "Advanced Cybersecurity Solutions",
      description: "Comprehensive security framework with threat detection and prevention",
      icon: Shield,
      features: ["Zero-trust architecture", "Threat detection", "Penetration testing", "Compliance"],
      pricing: "$2,500 - $12,000/month",
      delivery: "3-6 weeks"
    },
    {
      title: "Micro SaaS Development Platform",
      description: "Custom software-as-a-service applications tailored to your needs",
      icon: Code,
      features: ["Custom SaaS development", "Multi-tenant architecture", "API integration", "Analytics dashboard"],
      pricing: "$4,000 - $20,000/month",
      delivery: "6-12 weeks"
    },
    {
      title: "Intelligent Data Analytics Platform",
      description: "AI-driven business intelligence with real-time insights",
      icon: BarChart3,
      features: ["Real-time visualization", "Machine learning insights", "Predictive analytics", "Custom reporting"],
      pricing: "$2,000 - $10,000/month",
      delivery: "4-8 weeks"
    },
    {
      title: "Blockchain & Web3 Solutions",
      description: "Decentralized applications, smart contracts, and blockchain integration",
      icon: Network,
      features: ["Smart contract development", "DeFi platforms", "NFT development", "Cross-chain solutions"],
      pricing: "$8,000 - $50,000/month",
      delivery: "8-20 weeks"
    }
  ]

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Expert Team Members" }
  ]

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI services, cloud platforms, cybersecurity, micro SaaS, IT services, technology solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {" "}AI & Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI-powered solutions, cloud services, and innovative technology consulting. 
              Expert team delivering measurable results and guaranteed ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{service.delivery}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <DollarSign className="h-4 w-4" />
                    <span>{service.pricing}</span>
                  </div>
                </div>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our experts today to discuss how our services can drive your business forward with measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 hover:bg-gray-50 font-medium rounded-lg transition-colors"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Project
              </Link>
              <Link
                href="/request-quote"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium rounded-lg transition-colors"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch with Our Experts
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to discuss your project? Our team of experts is here to help you choose the right solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </Link>
              <Link
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </Link>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              <MapPin className="w-4 h-4 inline mr-1" />
              364 E Main St STE 1008, Middletown DE 19709
            </div>
          </div>
        </div>
      </section>
    </>
  )
}