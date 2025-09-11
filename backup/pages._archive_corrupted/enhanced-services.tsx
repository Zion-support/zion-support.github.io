import React from "react";
import Head from "next/head";
import Link from "next/link";
import React from "react"
import Head from "next/head"
import Link from "next/link"
import { 
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
import React from "react"""
import Head from "next/head"""
import Link from "next/link""
  // TODO: Implement
}
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
const PageTransition = ({ children }: { "children": React.ReactNode }) => <div>{children}</div>
}

export default function EnhancedServices() {
  const title = "Enhanced Services — Zion Tech Group"
  const description = "Comprehensive AI services, cloud platforms, cybersecurity solutions, and innovative micro SaaS applications. Transform your business with cutting-edge technology and expert implementation."
  const enhancedServices = [{
      "title": "AI-Powered Business Automation",
      "description": "Intelligent automation solutions that streamline operations and boost productivity with machine learning and AI",
      "icon": Brai n,
      "features": [
        "Custom AI model development and training",
        "Process automation with intelligent decision making",
        "Natural language processing and chatbot integration",
        "Predictive analytics and forecasting",
        "Computer vision and image recognition",
        "Real-time data processing and insights"
      ],
      "pricing": "$5,000 - $25,000/month",
      "delivery": "4-8 weeks",
      "category": "AI Services",
      "benefits": "Reduce operational costs by 40% and increase efficiency by 60%",
      "marketPrice": "Average market price: $8,000-30,000/month",
      "roi": "ROI: 30 0% within 12 months"
    },
    {
      "title": "Enterprise Cloud Infrastructure",
      "description": "Scalable, secure cloud solutions with 99.9% uptime guarantee and comprehensive monitoring",
      "icon": Clou d,
      "features": ["Multi-cloud architecture design and implementation",
        "Auto-scaling and load balancing",
        "Disaster recovery and backup solutions",
        "Security compliance (SOC 2, GDPR, HIPAA)",
        "24/7 monitoring and support",
        "Cost optimization and resource management"
      ],
      "pricing": "$3,000 - $15,000/month",
      "delivery": "2-6 weeks",
      "category": "Cloud Services",
      "benefits": "Improve scalability by 200% and reduce infrastructure costs by 35%",
      "marketPrice": "Average market price: $5,000-20,000/month",
      "roi": "ROI: 25 0% within 18 months"
    },
    {
      "title": "Advanced Cybersecurity Solutions",
      "description": "Comprehensive security framework with threat detection, prevention, and incident response",
      "icon": Shiel d,
      "features": ["Zero-trust security architecture",
        "Advanced threat detection and response",
        "Penetration testing and vulnerability assessments",
        "Security awareness training and compliance",
        "Identity and access management (IAM)",
        "Data encryption and privacy protection"
      ],
      "pricing": "$2,500 - $12,000/month",
      "delivery": "3-6 weeks",
      "category": "Security Services",
      "benefits": "Reduce security incidents by 90% and ensure compliance",
      "marketPrice": "Average market price: $4,000-15,000/month",
      "roi": "ROI: 40 0% through risk mitigation"
    },
    {
      "title": "Micro SaaS Development Platform",
      "description": "Custom software-as-a-service applications tailored to your specific business needs",
      "icon": Cod e,
      "features": ["Custom SaaS application development",
        "Multi-tenant architecture and scalability",
        "API development and integration",
        "User management and authentication",
        "Payment processing and billing",
        "Analytics and reporting dashboard"
      ],
      "pricing": "$4,000 - $20,000/month",
      "delivery": "6-12 weeks",
      "category": "Micro SaaS",
      "benefits": "Generate recurring revenue and scale your business model",
      "marketPrice": "Average market price: $6,000-25,000/month",
      "roi": "ROI: 50 0% through recurring revenue"
    },
    {
      "title": "Intelligent Data Analytics Platform",
      "description": "AI-driven business intelligence with real-time insights and predictive analytics",
      "icon": BarChart 3,
      "features": ["Real-time data visualization and dashboards",
        "Machine learning-powered insights",
        "Predictive analytics and forecasting",
        "Data integration from multiple sources",
        "Custom reporting and automated alerts",
        "Mobile-responsive analytics interface"
      ],
      "pricing": "$2,000 - $10,000/month",
      "delivery": "4-8 weeks",
      "category": "Analytics Services",
      "benefits": "Improve decision-making speed by 70% and data accuracy by 85%",
      "marketPrice": "Average market price: $3,500-12,000/month",
      "roi": "ROI: 35 0% through better decisions"
    },
    {
      "title": "Blockchain & Web3 Solutions",
      "description": "Decentralized applications, smart contracts, and blockchain integration services",
      "icon": Networ k,
      "features": ["Smart contract development and auditing",
        "DeFi and NFT platform development",
        "Blockchain integration and consulting",
        "Cryptocurrency wallet development",
        "Tokenomics and governance design",
        "Cross-chain interoperability solutions"
      ],
      "pricing": "$8,000 - $50,000/month",
      "delivery": "8-20 weeks",
      "category": "Blockchain Services",
      "benefits": "Future-proof your business with decentralized technology",
      "marketPrice": "Average market price: $12,000-60,000/month",
      "roi": "ROI: 60 0% through innovation leadership"
    },
    {
      "title": "IoT Device Management Platform",
      "description": "Comprehensive IoT monitoring, management, and analytics for connected devices",
      "icon": Wif i,
      "features": ["Real-time device monitoring and alerts",
        "Remote device configuration and updates",
        "Data collection and analytics dashboard",
        "Predictive maintenance scheduling",
        "Security monitoring and threat detection",
        "Integration with cloud platforms"
      ],
      "pricing": "$3,000 - $15,000/month",
      "delivery": "6-12 weeks",
      "category": "IoT Services",
      "benefits": "Reduce device downtime by 50% and improve operational efficiency",
      "marketPrice": "Average market price: $5,000-18,000/month",
      "roi": "ROI: 28 0% through operational optimization"
    },
    {
      "title": "AI-Powered Customer Support",
      "description": "Intelligent customer service with chatbots, sentiment analysis, and automated workflows",
      "icon": MessageSquar e,
      "features": ["AI chatbot with natural language processing",
        "Multi-channel support integration",
        "Sentiment analysis and customer insights",
        "Automated ticket routing and prioritization",
        "Knowledge base and FAQ automation",
        "Performance analytics and optimization"
      ],
      "pricing": "$1,500 - $8,000/month",
      "delivery": "3-6 weeks",
      "category": "Customer Support AI",
      "benefits": "Handle 80% of inquiries automatically and improve satisfaction by 45%",
      "marketPrice": "Average market price: $2,500-10,000/month",
      "roi": "ROI: 32 0% through efficiency gains"

    }
  ]
  const stats = [{ "number": "500+", "label": "Projects Completed" },
    { "number": "99.9%", "label": "Uptime Guarantee" },
    { "number": "24/7", "label": "Support Available" },
    { "number": "50+", "label": "Expert Team Members" }
  ]
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}  />
        <meta name="keywords" content="AI services, cloud platforms, cybersecurity, micro SaaS, IT services, technology solutions, blockchain, IoT"  />
        <meta name="viewport" content="width=device-width, initial-scale=1"  />
        <link rel="canonical" href=""https": //ziontechgroup.com/enhanced-services"  />
      </Head>
      <PageTransition>
        {/* Header Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 "sm": p y-32">
          <div className="mx-auto max-w-7xl px-6 lg: p x-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2"  />
                <span className="text-base font-semibold leading-7 text-blue-600">
                  Enhanced Services
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm: tex t-4xl">
                Comprehensive Technology Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Transform your business with our comprehensive suite of AI, cloud, cybersecurity, and micro SaaS services. 
                Expert implementation with guaranteed results and measurable ROI.
              </p>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 "lg": p x-8">
            <div className="grid grid-cols-2 gap-8 md: gri d-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-24 "sm": p y-32">
          <div className="mx-auto max-w-7xl px-6 lg: p x-8">
            <div className="grid gap-8 lg: gri d-cols-2">
              {enhancedServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm "hover": shado w-lg transition-all duration-300 hover: borde r-blue-300"
                >
                  <div className="flex items-center gap-x-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover: b g-blue-700 transition-colors">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h2>
                      <p className="text-sm text-blue-600 font-medium">
                        {service.category}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-x-3">
                        <CheckCircle className="h-4 w-4 text-blue-600"  />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4"  />
                      <span>{service.delivery}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <DollarSign className="h-4 w-4"  />
                      <span>{service.pricing}</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-green-800 font-medium mb-1">Key "Benefits": </p>
                    <p className="text-sm text-green-700">{service.benefits}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-blue-800 font-medium mb-1">Market "Pricing": </p>
                    <p className="text-sm text-blue-700">{service.marketPrice}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-purple-800 font-medium mb-1">Expected "ROI": </p>
                    <p className="text-sm text-purple-700">{service.roi}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium text-blue-600 "hover": tex t-blue-500"
                    >
                      Get Started
                      <ArrowRight className="ml-1 h-4 w-4"  />
                    </Link>
                    <Link
                      href="/request-quote"
                      className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 hover: b g-blue-50 font-medium rounded-lg transition-colors"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="mx-auto max-w-7xl px-6 "lg": p x-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact our experts today to discuss how our enhanced services can drive your business forward with measurable results.
              </p>
              <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 hover: b g-gray-50 font-medium rounded-lg transition-colors"
                >
                  <Rocket className="w-5 h-5 mr-2"  />
                  Start Your Project
                </Link>
                <Link
                  href="/request-quote"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover: b g-white hover: tex t-blue-600 font-medium rounded-lg transition-colors"
                >
                  <DollarSign className="w-5 h-5 mr-2"  />
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 "lg": p x-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch with Our Experts
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Ready to discuss your project? Our team of experts is here to help you choose the right solutions for your business needs.
              </p>
              <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 hover: b g-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2"  />
                  +1 302 464 0950
                </Link>
                <Link
                  href="mailto: klebe r@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover: b g-blue-50 font-medium rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2"  />
                  kleber@ziontechgroup.com
                </Link>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                <MapPin className="w-4 h-4 inline mr-1"  />
                364 E Main St STE 1008, Middletown DE 19709
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </>
  )

import React from "react" import Head from "next/head" import Link from "next/link" import { ArrowRight,Award,BarChart3,Bot,Brain,CheckCircle,Eye,MessageSquare,Shield,Zap,Cloud,Database,Users,Settings,Monitor,Network,FileText,Target,Calendar,Smartphone,Globe,Lock,TrendingUp,Clock,Star,Cpu,Wifi,Server,Code,Mail,Phone,MapPin,DollarSign,Rocket,Heart } from "lucide-react" const PageTransition = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}

export default function EnhancedServices() { const title = "Enhanced Services — Zion Tech Group" const description = "Comprehensive AI services,cloud platforms,cybersecurity solutions,and innovative micro SaaS applications. Transform your business with cutting-edge technology and expert implementation." const enhancedServices = [ { title: "AI-Powered Business Automation",description: "Intelligent automation solutions that streamline operations and boost productivity with machine learning and AI",icon: Brai n,features: [ "Custom AI model development and training","Process automation with intelligent decision making","Natural language processing and chatbot integration","Predictive analytics and forecasting","Computer vision and image recognition","Real-time data processing and insights" ],pricing: "$5,000 - $25,000/month",delivery: "4-8 weeks",category: "AI Services",benefits: "Reduce operational costs by 40% and increase efficiency by 60%",marketPrice: "Average market price: $8,000-30,000/month",roi: "ROI: 30 0% within 12 months" },{ title: "Enterprise Cloud Infrastructure",description: "Scalable,secure cloud solutions with 99.9% uptime guarantee and comprehensive monitoring",icon: Clou d,features: [ "Multi-cloud architecture design and implementation","Auto-scaling and load balancing","Disaster recovery and backup solutions","Security compliance (SOC 2,GDPR,HIPAA)","24/7 monitoring and support","Cost optimization and resource management" ],pricing: "$3,000 - $15,000/month",delivery: "2-6 weeks",category: "Cloud Services",benefits: "Improve scalability by 200% and reduce infrastructure costs by 35%",marketPrice: "Average market price: $5,000-20,000/month",roi: "ROI: 25 0% within 18 months" },{ title: "Advanced Cybersecurity Solutions",description: "Comprehensive security framework with threat detection,prevention,and incident response",icon: Shiel d,features: [ "Zero-trust security architecture","Advanced threat detection and response","Penetration testing and vulnerability assessments","Security awareness training and compliance","Identity and access management (IAM)","Data encryption and privacy protection" ],pricing: "$2,500 - $12,000/month",delivery: "3-6 weeks",category: "Security Services",benefits: "Reduce security incidents by 90% and ensure compliance",marketPrice: "Average market price: $4,000-15,000/month",roi: "ROI: 40 0% through risk mitigation" },{ title: "Micro SaaS Development Platform",description: "Custom software-as-a-service applications tailored to your specific business needs",icon: Cod e,features: [ "Custom SaaS application development","Multi-tenant architecture and scalability","API development and integration","User management and authentication","Payment processing and billing","Analytics and reporting dashboard" ],pricing: "$4,000 - $20,000/month",delivery: "6-12 weeks",category: "Micro SaaS",benefits: "Generate recurring revenue and scale your business model",marketPrice: "Average market price: $6,000-25,000/month",roi: "ROI: 50 0% through recurring revenue" },{ title: "Intelligent Data Analytics Platform",description: "AI-driven business intelligence with real-time insights and predictive analytics",icon: BarChart 3,features: [ "Real-time data visualization and dashboards","Machine learning-powered insights","Predictive analytics and forecasting","Data integration from multiple sources","Custom reporting and automated alerts","Mobile-responsive analytics interface" ],pricing: "$2,000 - $10,000/month",delivery: "4-8 weeks",category: "Analytics Services",benefits: "Improve decision-making speed by 70% and data accuracy by 85%",marketPrice: "Average market price: $3,500-12,000/month",roi: "ROI: 35 0% through better decisions" },{ title: "Blockchain & Web3 Solutions",description: "Decentralized applications,smart contracts,and blockchain integration services",icon: Networ k,features: [ "Smart contract development and auditing","DeFi and NFT platform development","Blockchain integration and consulting","Cryptocurrency wallet development","Tokenomics and governance design","Cross-chain interoperability solutions" ],pricing: "$8,000 - $50,000/month",delivery: "8-20 weeks",category: "Blockchain Services",benefits: "Future-proof your business with decentralized technology",marketPrice: "Average market price: $12,000-60,000/month",roi: "ROI: 60 0% through innovation leadership" },{ title: "IoT Device Management Platform",description: "Comprehensive IoT monitoring,management,and analytics for connected devices",icon: Wif i,features: [ "Real-time device monitoring and alerts","Remote device configuration and updates","Data collection and analytics dashboard","Predictive maintenance scheduling","Security monitoring and threat detection","Integration with cloud platforms" ],pricing: "$3,000 - $15,000/month",delivery: "6-12 weeks",category: "IoT Services",benefits: "Reduce device downtime by 50% and improve operational efficiency",marketPrice: "Average market price: $5,000-18,000/month",roi: "ROI: 28 0% through operational optimization" },{ title: "AI-Powered Customer Support",description: "Intelligent customer service with chatbots,sentiment analysis,and automated workflows",icon: MessageSquar e,features: [ "AI chatbot with natural language processing","Multi-channel support integration","Sentiment analysis and customer insights","Automated ticket routing and prioritization","Knowledge base and FAQ automation","Performance analytics and optimization" ],pricing: "$1,500 - $8,000/month",delivery: "3-6 weeks",category: "Customer Support AI",benefits: "Handle 80% of inquiries automatically and improve satisfaction by 45%",marketPrice: "Average market price: $2,500-10,000/month",roi: "ROI: 32 0% through efficiency gains" } ] const stats = [ { number: "500+",label: "Projects Completed" },{ number: "99.9%",label: "Uptime Guarantee" },{ number: "24/7",label: "Support Available" },{ number: "50+",label: "Expert Team Members" } ] return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content="AI services,cloud platforms,cybersecurity,micro SaaS,IT services,technology solutions,blockchain,IoT" /> <meta name="viewport" content="width=device-width,initial-scale=1" /> <link rel="canonical" href="https: </Head> <PageTransition> {} <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm: p y-32"> <div className="mx-auto max-w-7xl px-6 lg: p x-8"> <div className="mx-auto max-w-2xl text-center"> <div className="flex items-center justify-center mb-4"> <Award className="h-6 w-6 text-blue-600 mr-2" /> <span className="text-base font-semibold leading-7 text-blue-600"> Enhanced Services </span> </div> <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm: tex t-4xl"> Comprehensive Technology Solutions </h1> <p className="mt-6 text-lg leading-8 text-gray-600"> Transform your business with our comprehensive suite of AI,cloud,cybersecurity,and micro SaaS services. Expert implementation with guaranteed results and measurable ROI. </p> </div> </div> </section> {} <section className="py-16 bg-white"> <div className="mx-auto max-w-7xl px-6 lg: p x-8"> <div className="grid grid-cols-2 gap-8 md: gri d-cols-4"> {stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div> <div className="text-sm text-gray-600">{stat.label}</div> </div> ))} </div> </div> </section> {} <section className="py-24 sm: p y-32"> <div className="mx-auto max-w-7xl px-6 lg: p x-8"> <div className="grid gap-8 lg: gri d-cols-2"> {enhancedServices.map((service,index) => ( <div key={index} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover: shado w-lg transition-all duration-300 hover: borde r-blue-300" > <div className="flex items-center gap-x-3 mb-6"> <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover: b g-blue-700 transition-colors"> <service.icon className="h-7 w-7 text-white" /> </div> <div> <h2 className="text-xl font-semibold text-gray-900"> {service.title} </h2> <p className="text-sm text-blue-600 font-medium"> {service.category} </p> </div> </div> <p className="text-gray-600 mb-6"> {service.description} </p> <ul className="space-y-3 mb-6"> {service.features.map((feature,featureIndex) => ( <li key={featureIndex} className="flex items-center gap-x-3"> <CheckCircle className="h-4 w-4 text-blue-600" /> <span className="text-sm text-gray-700">{feature}</span> </li> ))} </ul> <div className="flex items-center justify-between mb-4"> <div className="flex items-center space-x-2 text-sm text-gray-500"> <Clock className="h-4 w-4" /> <span>{service.delivery}</span> </div> <div className="flex items-center space-x-2 text-sm text-gray-500"> <DollarSign className="h-4 w-4" /> <span>{service.pricing}</span> </div> </div> <div className="bg-green-50 p-4 rounded-lg mb-4"> <p className="text-sm text-green-800 font-medium mb-1">Key Benefits:</p> <p className="text-sm text-green-700">{service.benefits}</p> </div> <div className="bg-blue-50 p-4 rounded-lg mb-4"> <p className="text-sm text-blue-800 font-medium mb-1">Market Pricing:</p> <p className="text-sm text-blue-700">{service.marketPrice}</p> </div> <div className="bg-purple-50 p-4 rounded-lg mb-6"> <p className="text-sm text-purple-800 font-medium mb-1">Expected ROI:</p> <p className="text-sm text-purple-700">{service.roi}</p> </div> <div className="flex items-center justify-between"> <Link href="/contact" className="inline-flex items-center text-sm font-medium text-blue-600 hover: tex t-blue-500" > Get Started <ArrowRight className="ml-1 h-4 w-4" /> </Link> <Link href="/request-quote" className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 hover: b g-blue-50 font-medium rounded-lg transition-colors" > Request Quote </Link> </div> </div> ))} </div> </div> </section> {} <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16"> <div className="mx-auto max-w-7xl px-6 lg: p x-8"> <div className="text-center"> <h2 className="text-3xl font-bold text-white mb-4"> Ready to Transform Your Business? </h2> <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"> Contact our experts today to discuss how our enhanced services can drive your business forward with measurable results. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-white text-blue-600 hover: b g-gray-50 font-medium rounded-lg transition-colors" > <Rocket className="w-5 h-5 mr-2" /> Start Your Project </Link> <Link href="/request-quote" className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover: b g-white hover: tex t-blue-600 font-medium rounded-lg transition-colors" > <DollarSign className="w-5 h-5 mr-2" /> Get Custom Quote </Link> </div> </div> </div> </section> {} <section className="bg-gray-50 py-16"> <div className="mx-auto max-w-7xl px-6 lg: p x-8"> <div className="text-center"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Get in Touch with Our Experts </h2> <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"> Ready to discuss your project? Our team of experts is here to help you choose the right solutions for your business needs. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-blue-600 hover: b g-blue-700 text-white font-medium rounded-lg transition-colors" > <Phone className="w-5 h-5 mr-2" /> +1 302 464 0950 </Link> <Link href="mailto: klebe r@ziontechgroup.com" className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover: b g-blue-50 font-medium rounded-lg transition-colors" > <Mail className="w-5 h-5 mr-2" /> kleber@ziontechgroup.com </Link> </div> <div className="mt-6 text-sm text-gray-500"> <MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008,Middletown DE 19709 </div> </div> </div> </section> </PageTransition> </> ) }
}

export default function EnhancedServices() { const title = "Enhanced Services — Zion Tech Group" const description = "Comprehensive AI services,cloud platforms,cybersecurity solutions,and innovative micro SaaS applications. Transform your business with cutting-edge technology and expert implementation." const enhancedServices = [ { title: "AI-Powered Business Automation",description: "Intelligent automation solutions that streamline operations and boost productivity with machine learning and AI",icon: Brai n,features: [ "Custom AI model development and training","Process automation with intelligent decision making","Natural language processing and chatbot integration","Predictive analytics and forecasting","Computer vision and image recognition","Real-time data processing and insights" ],pricing: "$5,000 - $25,000/month",delivery: "4-8 weeks",category: "AI Services",benefits: "Reduce operational costs by 40% and increase efficiency by 60%",marketPrice: "Average market price: $8,000-30,000/month",roi: "ROI: 30 0% within 12 months" },{ title: "Enterprise Cloud Infrastructure",description: "Scalable,secure cloud solutions with 99.9% uptime guarantee and comprehensive monitoring",icon: Clou d,features: [ "Multi-cloud architecture design and implementation","Auto-scaling and load balancing","Disaster recovery and backup solutions","Security compliance (SOC 2,GDPR,HIPAA)","24/7 monitoring and support","Cost optimization and resource management" ],pricing: "$3,000 - $15,000/month",delivery: "2-6 weeks",category: "Cloud Services",benefits: "Improve scalability by 200% and reduce infrastructure costs by 35%",marketPrice: "Average market price: $5,000-20,000/month",roi: "ROI: 25 0% within 18 months" },{ title: "Advanced Cybersecurity Solutions",description: "Comprehensive security framework with threat detection,prevention,and incident response",icon: Shiel d,features: [ "Zero-trust security architecture","Advanced threat detection and response","Penetration testing and vulnerability assessments","Security awareness training and compliance","Identity and access management (IAM)","Data encryption and privacy protection" ],pricing: "$2,500 - $12,000/month",delivery: "3-6 weeks",category: "Security Services",benefits: "Reduce security incidents by 90% and ensure compliance",marketPrice: "Average market price: $4,000-15,000/month",roi: "ROI: 40 0% through risk mitigation" },{ title: "Micro SaaS Development Platform",description: "Custom software-as-a-service applications tailored to your specific business needs",icon: Cod e,features: [ "Custom SaaS application development","Multi-tenant architecture and scalability","API development and integration","User management and authentication","Payment processing and billing","Analytics and reporting dashboard" ],pricing: "$4,000 - $20,000/month",delivery: "6-12 weeks",category: "Micro SaaS",benefits: "Generate recurring revenue and scale your business model",marketPrice: "Average market price: $6,000-25,000/month",roi: "ROI: 50 0% through recurring revenue" },{ title: "Intelligent Data Analytics Platform",description: "AI-driven business intelligence with real-time insights and predictive analytics",icon: BarChart 3,features: [ "Real-time data visualization and dashboards","Machine learning-powered insights","Predictive analytics and forecasting","Data integration from multiple sources","Custom reporting and automated alerts","Mobile-responsive analytics interface" ],pricing: "$2,000 - $10,000/month",delivery: "4-8 weeks",category: "Analytics Services",benefits: "Improve decision-making speed by 70% and data accuracy by 85%",marketPrice: "Average market price: $3,500-12,000/month",roi: "ROI: 35 0% through better decisions" },{ title: "Blockchain & Web3 Solutions",description: "Decentralized applications,smart contracts,and blockchain integration services",icon: Networ k,features: [ "Smart contract development and auditing","DeFi and NFT platform development","Blockchain integration and consulting","Cryptocurrency wallet development","Tokenomics and governance design","Cross-chain interoperability solutions" ],pricing: "$8,000 - $50,000/month",delivery: "8-20 weeks",category: "Blockchain Services",benefits: "Future-proof your business with decentralized technology",marketPrice: "Average market price: $12,000-60,000/month",roi: "ROI: 60 0% through innovation leadership" },{ title: "IoT Device Management Platform",description: "Comprehensive IoT monitoring,management,and analytics for connected devices",icon: Wif i,features: [ "Real-time device monitoring and alerts","Remote device configuration and updates","Data collection and analytics dashboard","Predictive maintenance scheduling","Security monitoring and threat detection","Integration with cloud platforms" ],pricing: "$3,000 - $15,000/month",delivery: "6-12 weeks",category: "IoT Services",benefits: "Reduce device downtime by 50% and improve operational efficiency",marketPrice: "Average market price: $5,000-18,000/month",roi: "ROI: 28 0% through operational optimization" },{ title: "AI-Powered Customer Support",description: "Intelligent customer service with chatbots,sentiment analysis,and automated workflows",icon: MessageSquar e,features: [ "AI chatbot with natural language processing","Multi-channel support integration","Sentiment analysis and customer insights","Automated ticket routing and prioritization","Knowledge base and FAQ automation","Performance analytics and optimization" ],pricing: "$1,500 - $8,000/month",delivery: "3-6 weeks",category: "Customer Support AI",benefits: "Handle 80% of inquiries automatically and improve satisfaction by 45%",marketPrice: "Average market price: $2,500-10,000/month",roi: "ROI: 32 0% through efficiency gains" } ] const stats = [ { number: "500+",label: "Projects Completed" },{ number: "99.9%",label: "Uptime Guarantee" },{ number: "24/7",label: "Support Available" },{ number: "50+",label: "Expert Team Members" } ] return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content="AI services,cloud platforms,cybersecurity,micro SaaS,IT services,technology solutions,blockchain,IoT" /> <meta name="viewport" content="width=device-width,initial-scale=1" /> <link rel="canonical" href="https: </Head> <PageTransition> {} <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm: p y-32"> <div className="mx-auto max-w-7xl px-6 lg: p x-8"> <div className="mx-auto max-w-2xl text-center"> <div className="flex items-center justify-center mb-4"> <Award className="h-6 w-6 text-blue-600 mr-2" /> <span className="text-base font-semibold leading-7 text-blue-600"> Enhanced Services </span> </div> <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm: tex t-4xl"> Comprehensive Technology Solutions </h1> <p className="mt-6 text-lg leading-8 text-gray-600"> Transform your business with our comprehensive suite of AI,cloud,cybersecurity,and micro SaaS services. Expert implementation with guaranteed results and measurable ROI. </p> </div> </div> </section> {} <section className="py-16 bg-white"> <div className="mx-auto max-w-7xl px-6 lg: p x-8"> <div className="grid grid-cols-2 gap-8 md: gri d-cols-4"> {stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div> <div className="text-sm text-gray-600">{stat.label}</div> </div> ))} </div> </div> </section> {} <section className="py-24 sm: p y-32"> <div className="mx-auto max-w-7xl px-6 lg: p x-8"> <div className="grid gap-8 lg: gri d-cols-2"> {enhancedServices.map((service,index) => ( <div key={index} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover: shado w-lg transition-all duration-300 hover: borde r-blue-300" > <div className="flex items-center gap-x-3 mb-6"> <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover: b g-blue-700 transition-colors"> <service.icon className="h-7 w-7 text-white" /> </div> <div> <h2 className="text-xl font-semibold text-gray-900"> {service.title} </h2> <p className="text-sm text-blue-600 font-medium"> {service.category} </p> </div> </div> <p className="text-gray-600 mb-6"> {service.description} </p> <ul className="space-y-3 mb-6"> {service.features.map((feature,featureIndex) => ( <li key={featureIndex} className="flex items-center gap-x-3"> <CheckCircle className="h-4 w-4 text-blue-600" /> <span className="text-sm text-gray-700">{feature}</span> </li> ))} </ul> <div className="flex items-center justify-between mb-4"> <div className="flex items-center space-x-2 text-sm text-gray-500"> <Clock className="h-4 w-4" /> <span>{service.delivery}</span> </div> <div className="flex items-center space-x-2 text-sm text-gray-500"> <DollarSign className="h-4 w-4" /> <span>{service.pricing}</span> </div> </div> <div className="bg-green-50 p-4 rounded-lg mb-4"> <p className="text-sm text-green-800 font-medium mb-1">Key Benefits:</p> <p className="text-sm text-green-700">{service.benefits}</p> </div> <div className="bg-blue-50 p-4 rounded-lg mb-4"> <p className="text-sm text-blue-800 font-medium mb-1">Market Pricing:</p> <p className="text-sm text-blue-700">{service.marketPrice}</p> </div> <div className="bg-purple-50 p-4 rounded-lg mb-6"> <p className="text-sm text-purple-800 font-medium mb-1">Expected ROI:</p> <p className="text-sm text-purple-700">{service.roi}</p> </div> <div className="flex items-center justify-between"> <Link href="/contact" className="inline-flex items-center text-sm font-medium text-blue-600 hover: tex t-blue-500" > Get Started <ArrowRight className="ml-1 h-4 w-4" /> </Link> <Link href="/request-quote" className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 hover: b g-blue-50 font-medium rounded-lg transition-colors" > Request Quote </Link> </div> </div> ))} </div> </div> </section> {} <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16"> <div className="mx-auto max-w-7xl px-6 lg: p x-8"> <div className="text-center"> <h2 className="text-3xl font-bold text-white mb-4"> Ready to Transform Your Business? </h2> <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"> Contact our experts today to discuss how our enhanced services can drive your business forward with measurable results. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-white text-blue-600 hover: b g-gray-50 font-medium rounded-lg transition-colors" > <Rocket className="w-5 h-5 mr-2" /> Start Your Project </Link> <Link href="/request-quote" className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover: b g-white hover: tex t-blue-600 font-medium rounded-lg transition-colors" > <DollarSign className="w-5 h-5 mr-2" /> Get Custom Quote </Link> </div> </div> </div> </section> {} <section className="bg-gray-50 py-16"> <div className="mx-auto max-w-7xl px-6 lg: p x-8"> <div className="text-center"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Get in Touch with Our Experts </h2> <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"> Ready to discuss your project? Our team of experts is here to help you choose the right solutions for your business needs. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-blue-600 hover: b g-blue-700 text-white font-medium rounded-lg transition-colors" > <Phone className="w-5 h-5 mr-2" /> +1 302 464 0950 </Link> <Link href="mailto: klebe r@ziontechgroup.com" className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover: b g-blue-50 font-medium rounded-lg transition-colors" > <Mail className="w-5 h-5 mr-2" /> kleber@ziontechgroup.com </Link> </div> <div className="mt-6 text-sm text-gray-500"> <MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008,Middletown DE 19709 </div> </div> </div> </section> </PageTransition> </> ) }
;