import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { 
  Brain, 
  Link as LinkIcon, 
  Settings as Wifi, 
  Shield, 
  Zap, 
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap as Cpu,
  Cloud,
  Database,
  Users,
  BarChart3,
  PenTool,
  Eye,
  Lock,
  AlertTriangle,
  TrendingUp as Activity,
  Smartphone,
  Network,
  DollarSign as Coins,
  Wallet
} from "lucide-react"
import { TrustedBySection } from "@/components/TrustedBySection"
const serviceCategories = [
  {
    id: "ai-services",
    title: "AI & Machine Learning Services",
    description: "Transform your business with cutting-edge artificial intelligence solutions",
    icon: <Brain className="h-12 w-12" />,
    color: "from-blue-500 to-purple-600",
    services: [
      {
        title: "AI Content Generation",
        description: "Automated content creation for blogs, social media, and marketing materials",
        price: 299,
        period: "/month",
        features: ["Unlimited content", "Multi-language support", "SEO optimization", "Brand voice customization"],
        link: "/ai-services"
      },
      {
        title: "AI-Powered Customer Support Bot",
        description: "Intelligent chatbot with natural language processing for 24/7 support",
        price: 450,
        period: "/month",
        features: ["NLP capabilities", "Multi-channel integration", "Lead qualification", "Analytics dashboard"],
        link: "/ai-services"
      },
      {
        title: "AI-Powered Video Analytics",
        description: "Computer vision platform for surveillance and behavioral analysis",
        price: 1800,
        period: "/month",
        features: ["Real-time detection", "Facial recognition", "Behavioral analysis", "Custom training"],
        link: "/ai-services"
      },
      {
        title: "Predictive Analytics Dashboard",
        description: "Business intelligence with predictive modeling for forecasting",
        price: 800,
        period: "/month",
        features: ["Predictive modeling", "Real-time dashboards", "Custom algorithms", "Data visualization"],
        link: "/ai-services"
      }
    ]
  },
  {
    id: "blockchain-services",
    title: "Blockchain & Web3 Solutions",
    description: "Build the future with decentralized technology and smart contracts",
    icon: <LinkIcon className="h-12 w-12" />,
    color: "from-orange-500 to-red-600",
    services: [
      {
        title: "Smart Contract Development",
        description: "Custom smart contracts for DeFi, NFTs, and enterprise solutions",
        price: 3500,
        period: "/project",
        features: ["Custom development", "Security auditing", "Gas optimization", "Multi-chain deployment"],
        link: "/blockchain-services"
      },
      {
        title: "DeFi Platform Development",
        description: "Complete DeFi platform with DEX, lending, and yield farming",
        price: 15000,
        period: "/platform",
        features: ["DEX development", "Lending protocols", "Yield farming", "Security audits"],
        link: "/blockchain-services"
      },
      {
        title: "NFT Marketplace Development",
        description: "Custom NFT marketplace with minting, trading, and auctions",
        price: 8000,
        period: "/marketplace",
        features: ["NFT minting", "Auction system", "Royalty distribution", "Multi-chain support"],
        link: "/blockchain-services"
      },
      {
        title: "Enterprise Blockchain Solutions",
        description: "Private blockchain networks for supply chain and identity management",
        price: 25000,
        period: "/solution",
        features: ["Private blockchain", "Consensus mechanisms", "Identity management", "Integration APIs"],
        link: "/blockchain-services"
      }
    ]
  },
  {
    id: "iot-services",
    title: "IoT & Edge Computing",
    description: "Connect and optimize your world with intelligent IoT solutions",
    icon: <Wifi className="h-12 w-12" />,
    color: "from-green-500 to-teal-600",
    services: [
      {
        title: "IoT Device Management Platform",
        description: "Complete IoT solution with device provisioning and monitoring",
        price: 1200,
        period: "/month",
        features: ["Device provisioning", "Real-time monitoring", "Data collection", "Analytics dashboard"],
        link: "/iot-services"
      },
      {
        title: "IoT Data Analytics & Insights",
        description: "Advanced analytics for IoT data processing and predictive maintenance",
        price: 800,
        period: "/month",
        features: ["Real-time processing", "Machine learning", "Predictive maintenance", "Custom dashboards"],
        link: "/iot-services"
      },
      {
        title: "Edge Computing Platform",
        description: "Distributed edge computing for real-time data processing",
        price: 2000,
        period: "/month",
        features: ["Edge deployment", "Local processing", "Real-time analytics", "Edge AI models"],
        link: "/iot-services"
      },
      {
        title: "IoT System Integration",
        description: "Seamless integration with existing enterprise systems",
        price: 3000,
        period: "/project",
        features: ["System integration", "API development", "Data mapping", "Workflow automation"],
        link: "/iot-services"
      }
    ]
  },
  {
    id: "cybersecurity-services",
    title: "Cybersecurity & Compliance",
    description: "Protect your business with enterprise-grade security solutions",
    icon: <Shield className="h-12 w-12" />,
    color: "from-red-500 to-pink-600",
    services: [
      {
        title: "AI-Powered Threat Detection",
        description: "Advanced cybersecurity with machine learning threat detection",
        price: 1200,
        period: "/month",
        features: ["Real-time detection", "Behavioral analysis", "Automated response", "24/7 SOC support"],
        link: "/cybersecurity-services"
      },
      {
        title: "Zero-Trust Security Framework",
        description: "Zero-trust architecture with identity verification and monitoring",
        price: 4200,
        period: "/month",
        features: ["Identity verification", "Micro-segmentation", "Continuous monitoring", "Access control"],
        link: "/cybersecurity-services"
      },
      {
        title: "Penetration Testing & Assessment",
        description: "Comprehensive security testing and vulnerability assessment",
        price: 2500,
        period: "/assessment",
        features: ["External testing", "Internal assessment", "Web app testing", "Social engineering"],
        link: "/cybersecurity-services"
      },
      {
        title: "Incident Response & Forensics",
        description: "Rapid response to security incidents with digital forensics",
        price: 3500,
        period: "/incident",
        features: ["24/7 response", "Digital forensics", "Evidence preservation", "Recovery planning"],
        link: "/cybersecurity-services"
      }
    ]
  },
  {
    id: "traditional-it",
    title: "Traditional IT & Infrastructure",
    description: "Reliable IT services for modern business needs",
    icon: <Cpu className="h-12 w-12" />,
    color: "from-gray-500 to-blue-600",
    services: [
      {
        title: "Cloud Infrastructure Management",
        description: "24/7 monitoring and management of cloud infrastructure",
        price: 3000,
        period: "/month",
        features: ["24/7 monitoring", "Performance optimization", "Security management", "Cost efficiency"],
        link: "/services"
      },
      {
        title: "IT Infrastructure Modernization",
        description: "Transform legacy systems into modern, agile infrastructure",
        price: 8500,
        period: "/project",
        features: ["Digital transformation", "Legacy modernization", "Infrastructure upgrade", "Training & support"],
        link: "/services"
      },
      {
        title: "API Gateway & Management",
        description: "Enterprise-grade API management with rate limiting and monitoring",
        price: 650,
        period: "/month",
        features: ["API management", "Rate limiting", "Authentication", "Developer portal"],
        link: "/services"
      },
      {
        title: "Multi-Cloud Cost Optimization",
        description: "Automated cost optimization across AWS, Azure, and Google Cloud",
        price: 550,
        period: "/month",
        features: ["Cost optimization", "Resource scaling", "Automation", "Multi-cloud support"],
        link: "/services"
      }
    ]
  }
]
const benefits = [
  {
    title: "Innovation First",
    description: "Cutting-edge technology solutions that keep you ahead of the competition",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Expert Team",
    description: "Certified professionals with deep expertise in their respective domains",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Scalable Solutions",
    description: "Services that grow with your business and adapt to changing needs",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support and monitoring for critical services",
    icon: <Globe className="h-6 w-6" />
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { 
  Brain, 
      {/* Benefits Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg">
              Comprehensive solutions backed by expertise and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan rounded-full mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Categories</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet your business needs
            </p>
          </div>
          
          {serviceCategories.map((category) => (
            <div key={category.id} className="mb-16">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} rounded-full mb-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-zion-purple">
                          ${service.price}
                        </span>
                        <span className="text-muted-foreground text-sm">{service.period}</span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full">
                        <Link to={service.link}>
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Choose from our comprehensive portfolio of technology services and start your digital transformation journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Contact Our Experts
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>📞 <strong>Mobile:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { SEO } from "@/components/SEO"
import { GradientHeading } from "@/components/GradientHeading"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Shield, 
  Cloud, 
  BarChart3, 
  Zap, 
  Eye, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
  Database,
  Code,
  Lock
} from "lucide-react"
import { SERVICE_CATEGORIES, PRICING_TIERS } from "@/data/comprehensiveServices"
export default function ServicesOverviewPage() {
  const getCategoryIcon = (icon: string) => {
    return <span className="text-4xl">{icon}</span>
  }
  const getCategoryColor = (color: string) => {
    return `bg-gradient-to-br ${color}`
  }
  return (
    <>
        title="Services Overview - Zion Tech Group" 
        description="Explore our comprehensive range of AI, cybersecurity, cloud, and digital transformation services. Expert solutions for every business need."
        keywords="AI services, cybersecurity, cloud solutions, digital transformation, IT services overview"
        canonical="https://ziontechgroup.com/services-overview"
      />
      
      
        {/* Hero Section */}
              Complete Service Portfolio
              From AI-powered automation to enterprise cybersecurity, discover our comprehensive suite of 
              technology services designed to transform your business and drive innovation.
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              >
                  Get Free Consultation
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              >
                  Call +1 302 464 0950

        {/* Contact Info Banner */}
                  <p className="text-zion-slate-light text-sm">Headquarters</p>
                  <p className="text-white font-medium">364 E Main St STE 1008, Middletown DE 19709</p>
                  <p className="text-zion-slate-light text-sm">Contact</p>
                  <p className="text-white font-medium">+1 302 464 0950</p>
                  <p className="text-zion-slate-light text-sm">Email</p>
                  <p className="text-white font-medium">kleber@ziontechgroup.com</p>

        {/* Service Categories Overview */}
              <GradientHeading>Service Categories</GradientHeading>
                Explore our comprehensive range of technology services across multiple domains
            
              {SERVICE_CATEGORIES.map((category) => (
                    {getCategoryIcon(category.icon)}
                  
                      {category.name}
                    
                      {category.description}
                    
                        {category.services.length} Services Available
                        {category.services.slice(0, 3).map((service) => (
                            {service.title.split(' ').slice(0, 2).join(' ')}
                        ))}
                        {category.services.length > 3 && (
                            +{category.services.length - 3} more
                        )}
                    
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                      asChild
                    >
                        Explore Services
              ))}

        {/* Key Benefits */}
              <GradientHeading>Why Choose Our Services?</GradientHeading>
                We deliver exceptional value through innovation, expertise, and proven results
            
                <h3 className="text-xl font-bold text-white mb-2">AI-Powered</h3>
                <p className="text-zion-slate-light">Leverage cutting-edge AI technologies for competitive advantage</p>
              
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-zion-slate-light">Bank-grade security and compliance for critical systems</p>
              
                <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
                <p className="text-zion-slate-light">Quick implementation with minimal business disruption</p>
              
                <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
                <p className="text-zion-slate-light">24/7 technical support and dedicated account management</p>

        {/* Pricing Tiers */}
              <GradientHeading>Flexible Pricing Options</GradientHeading>
                Choose the service level that best fits your business needs and budget
            
              {PRICING_TIERS.map((tier, index) => (
                  index === 1 ? 'border-zion-purple scale-105 shadow-xl shadow-zion-purple/20' : 'border-zion-blue-light'
                }`}>
                  {index === 1 && (
                      Most Popular
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">{tier.price}</div>
                  <p className="text-zion-slate-light mb-6">{tier.description}</p>
                  
                    {tier.features.map((feature) => (
                        <span className="text-zion-slate-light">{feature}</span>
                    ))}
                  
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                    asChild
                  >
                      Get Started
              ))}

        {/* Service Highlights */}
              <GradientHeading>Service Highlights</GradientHeading>
                Key features and capabilities that set our services apart
            
                <h3 className="text-xl font-bold text-white mb-3">Scalable Solutions</h3>
                <p className="text-zion-slate-light">Our services grow with your business, from startup to enterprise scale</p>
              
                <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
                <p className="text-zion-slate-light">Services available worldwide with local compliance and support</p>
              
                <h3 className="text-xl font-bold text-white mb-3">Data-Driven</h3>
                <p className="text-zion-slate-light">Analytics and insights to optimize performance and ROI</p>
              
                <h3 className="text-xl font-bold text-white mb-3">Custom Development</h3>
                <p className="text-zion-slate-light">Tailored solutions designed specifically for your business needs</p>
              
                <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
                <p className="text-zion-slate-light">Enterprise-grade security built into every solution</p>
              
                <h3 className="text-xl font-bold text-white mb-3">Future-Ready</h3>
                <p className="text-zion-slate-light">Built with emerging technologies and forward-thinking architecture</p>

        {/* CTA Section */}
              Ready to Get Started?
              Contact our team today for a free consultation and discover how our comprehensive services 
              can transform your business and drive innovation.
            
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              >
                  Schedule Free Consultation
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              >
                  Call +1 302 464 0950
            
              <h3 className="text-xl font-bold text-white mb-4">Visit Our Office</h3>
                364 E Main St STE 1008, Middletown DE 19709
                Monday - Friday: 9:00 AM - 6:00 PM EST
      
    </>
      {/* Hero Section */}
        <div className="absolute inset-0 bg-black/20"></div>
            Our Services & Solutions
            Comprehensive technology services to transform your business. From AI development to IT infrastructure, 
            digital marketing to business consulting - we provide end-to-end solutions for the modern enterprise.
              Explore All Services
              Get Free Consultation
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  TrendingUp, 
  Users, 
  Globe,
  Database,
  Network,
  Monitor,
  Code,
  Target,
  Lightbulb,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
} from 'lucide-react'
import Wifi from 'lucide-react/dist/esm/icons/wifi'
import Target from 'lucide-react/dist/esm/icons/target'
import Rocket from 'lucide-react/dist/esm/icons/rocket'
import { SEO } from '@/components/SEO'
const categoryIcons = {
  "AI & Machine Learning": Brain,
  "Cybersecurity": Shield,
  "Cloud & DevOps": Cloud,
  "Data & Analytics": BarChart3,
  "Digital Transformation": RefreshCw,
  "IoT & Smart Solutions": Wifi,
  "Blockchain & Web3": Link
}
const categoryColors = {
  "AI & Machine Learning": "from-purple-500 to-pink-500",
  "Cybersecurity": "from-red-500 to-orange-500",
  "Cloud & DevOps": "from-blue-500 to-cyan-500",
  "Data & Analytics": "from-green-500 to-emerald-500",
  "Digital Transformation": "from-indigo-500 to-purple-500",
  "IoT & Smart Solutions": "from-yellow-500 to-orange-500",
  "Blockchain & Web3": "from-gray-500 to-blue-500"
}
export default function ServicesOverviewPage() {
  const getServicesByCategory = (category: string) => {
    return ENHANCED_SERVICES.filter(service => service.category === category)
  }
  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`
    }
    return `$${price}`
  }
  return (
        title="Complete IT & AI Services Overview - Zion Tech Group"
        description="Explore our comprehensive suite of AI, cybersecurity, cloud, and digital transformation services. Expert solutions for every business need."
        keywords="AI services, cybersecurity, cloud solutions, digital transformation, IT consulting, blockchain, IoT, enterprise solutions"
        canonical="https://ziontechgroup.com/services-overview"
      />

      {/* Hero Section */}
            Complete Technology Solutions
            From AI-powered automation to enterprise cybersecurity, we provide comprehensive technology services
            that transform businesses and drive innovation across all industries.
              Call +1 302 464 0950
              Email kleber@ziontechgroup.com

      {/* Contact Banner */}
            <span className="text-lg font-medium">Global IT Services • 24/7 Support • Enterprise Solutions</span>
              <span>+1 302 464 0950</span>
              <span>kleber@ziontechgroup.com</span>
              <span>Middletown, DE 19709</span>

      {/* Services Overview Tabs */}
              Our Service Categories
              Explore our comprehensive range of technology services designed to meet every business need

              {SERVICE_CATEGORIES.map((category) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons]
                return (
                    key={category}
                    value={category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}
                    className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-zion-blue data-[state=active]:text-white"
                  >
                    <span className="text-xs text-center">{category}</span>
                )
              })}

            {SERVICE_CATEGORIES.map((category) => {
              const services = getServicesByCategory(category)
              const Icon = categoryIcons[category as keyof typeof categoryIcons]
              const gradient = categoryColors[category as keyof typeof categoryColors]
              return (
                  key={category}
                  value={category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}
                  className="space-y-8"
                >
                  {/* Category Header */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{category}</h3>
                      {category === "AI & Machine Learning" && "Transform your business with cutting-edge AI solutions that automate processes and unlock new insights."}
                      {category === "Cybersecurity" && "Protect your digital assets with enterprise-grade security solutions and zero-trust architecture."}
                      {category === "Cloud & DevOps" && "Accelerate development and optimize cloud infrastructure with modern DevOps practices."}
                      {category === "Data & Analytics" && "Turn your data into actionable insights with real-time analytics and business intelligence."}
                      {category === "Digital Transformation" && "Modernize your business processes and technology infrastructure for the digital age."}
                      {category === "IoT & Smart Solutions" && "Connect and monitor your devices with intelligent IoT platforms and smart city solutions."}
                      {category === "Blockchain & Web3" && "Embrace the future with blockchain solutions, DeFi applications, and Web3 innovation."}

                  {/* Services Grid */}
                    {services.map((service) => (
                              {service.subcategory}
                              Save {service.savings}%
                          <CardTitle className="text-xl mb-3 leading-tight">{service.title}</CardTitle>
                            {service.description}

                          {/* Key Benefits */}
                              Key Benefits
                              {service.benefits.slice(0, 3).map((benefit, index) => (
                                  <span>{benefit}</span>
                              ))}

                          {/* Use Cases */}
                              Use Cases
                              {service.useCases.slice(0, 3).map((useCase, index) => (
                                  {useCase}
                              ))}

                          {/* Target Audience */}
                              Target Audience
                              {service.targetAudience.slice(0, 2).map((audience, index) => (
                                  {audience}
                              ))}

                          {/* Pricing & Metrics */}
                                  {formatPrice(service.price)}
                                  {service.pricingModel === 'subscription' ? '/month' : 'one-time'}
                                  {formatPrice(service.marketPrice)}
                                  Save {service.savings}%

                                <span>{service.rating}</span>
                                <span>{service.aiScore}</span>
                                <span>{service.deliveryTime}</span>

                          {/* Action Buttons */}
                              Learn More
                    ))}

                  {/* Category CTA */}
                      Get Started with {category}
              )
            })}

      {/* Why Choose Zion Tech Section */}
              Why Choose Zion Tech Group?
              We combine cutting-edge technology with proven expertise to deliver exceptional results

              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Expertise</h3>
                Over 15 years of experience in delivering enterprise technology solutions across industries

              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Solutions</h3>
                Cutting-edge AI and machine learning technologies that deliver measurable business impact

              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
                Worldwide IT services with local expertise and 24/7 support across all time zones

              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Success</h3>
                Dedicated support teams and proven methodologies that ensure project success

      {/* Contact CTA Section */}
            Ready to Transform Your Business?
            Our expert team is ready to help you implement cutting-edge technology solutions that drive growth,
            efficiency, and competitive advantage.

              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-zion-slate-light mb-4">Speak directly with our experts</p>
              <div className="text-2xl font-bold">+1 302 464 0950</div>

              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-zion-slate-light mb-4">Get detailed information</p>
              <div className="text-lg font-semibold">kleber@ziontechgroup.com</div>

              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light mb-4">Meet our team in person</p>
              <div className="text-sm font-semibold">364 E Main St STE 1008<br />Middletown, DE 19709</div>

              Start Your Project
              Schedule Consultation
  )
}</div></div></div></Link>