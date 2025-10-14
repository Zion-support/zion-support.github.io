import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';import { Badge  } from '@/components/ui/badge';
import { Link  } from 'react-router-dom';import { Brain, 
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
  Wallet;
 } from 'lucide-react';
import { TrustedBySection  } from '@/components/TrustedBySection';const serviceCategories = [
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';import { Badge  } from '@/components/ui/badge';
import { Link  } from 'react-router-dom';import {Brain, 
      {/* Benefits Section */}
                <section className="py-16 bg-zion-blue"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg"></p>
              Comprehensive solutions backed by expertise and innovation
            </p>
                </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
                {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6"></div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan rounded-full mb-4"></div>
                  <div className="text-white"></div>
                {benefit.icon}
                </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2"></h3>
                {benefit.title}
                </h3>
                <p className="text-zion-slate-light"></p>
                {benefit.description}
                </p>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Service Categories */}
                <section className="py-16"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl font-bold mb-4">Our Service Categories</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto"></p>
              Explore our comprehensive range of technology services designed to meet your business needs
            </p>
                </div>
                {serviceCategories.map((category) => (
            <div key={category.id} className="mb-16"></div>
              <div className="text-center mb-8"></div>
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} rounded-full mb-4`}></div>
                  <div className="text-white"></div>
                {category.icon}
                </div>
                </div>
                <h3 className="text-2xl font-bold mb-2"></h3>
                {category.title}
                </h3>
                <p className="text-muted-foreground"></p>
                {category.description}
                </p>
                </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
                {category.services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300"></Card>
                    <CardHeader className="pb-3"></CardHeader>
                      <CardTitle className="text-lg"></CardTitle>
                {service.title}
                </CardTitle>
                      <CardDescription className="text-sm"></CardDescription>
                {service.description}
                </CardDescription>
                </CardHeader>
                    <CardContent className="pb-4"></CardContent>
                      <div className="mb-4"></div>
                        <span className="text-2xl font-bold text-zion-purple"></span>
                          ${service.price}
                </span>
                        <span className="text-muted-foreground text-sm"></span>
                {service.period}
                </span>
                </div>
                      <ul className="space-y-2 mb-4"></ul>
                {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm"></li>
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span></span>
                {feature}
                </span>
                </li>
                        ))}
                </ul>
                      <Button asChild className="w-full"></Button>
                        <Link to={service.link}></Link>
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
                <section className="py-16 bg-zion-blue"></section>
        <div className="container mx-auto px-4 text-center"></div>
          <div className="max-w-3xl mx-auto"></div>
            <h2 className="text-3xl font-bold text-white mb-4"></h2>
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8"></p>
              Choose from our comprehensive portfolio of technology services and start your digital transformation journey
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <Link to="/request-quote"></Link>
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3"></Button>
                  Get Started Today
                </Button>
                </Link>
              <Link to="/contact"></Link>
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3"></Button>
                  Contact Our Experts
                </Button>
                </Link>
            </div>
            <div className="mt-8 text-zion-slate-light"></div>
              <p>📞 <strong>Mobile:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
                </div>
          </div>
                </div>
      </section>

      <TrustedBySection />
    </div>;
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';import { SEO  } from '@/components/SEO';
import { GradientHeading  } from '@/components/GradientHeading';import { Button  } from '@/components/ui/button';
import { Card  } from '@/components/ui/card';import { Badge  } from '@/components/ui/badge';
import { Brain, 
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
  Lock;
 } from 'lucide-react';import { SERVICE_CATEGORIES, PRICING_TIERS } from "@/data/comprehensiveServices"
export default function ServicesOverviewPage() {const getCategoryIcon = (icon: string) =>
                {
    return <span className="text-4xl"></span>
                {icon}
                </span>
  }
  const getCategoryColor = (color: string) =>
                {
    return `bg-gradient-to-br ${color}`
  }
  return (
    <>
      <SEO 
        title="Services Overview - Zion Tech Group" 
        description="Explore our comprehensive range of AI, cybersecurity, cloud, and digital transformation services. Expert solutions for every business need."
        keywords="AI services, cybersecurity, cloud solutions, digital transformation, IT services overview"
        canonical="https://ziontechgroup.com/services-overview"
      />
      
      <Header />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20"></main>
                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-zion-blue to-zion-blue-dark"></section>
          <div className="container mx-auto px-4 text-center"></div>
            <GradientHeading className="text-5xl md:text-6xl mb-6"></GradientHeading>
              Complete Service Portfolio
            </GradientHeading>
            <p className="text-zion-slate-light text-xl md:text-2xl mb-8 max-w-4xl mx-auto"></p>
              From AI-powered automation to enterprise cybersecurity, discover our comprehensive suite of 
              technology services designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              ></Button>
                <a href="mailto:kleber@ziontechgroup.com"></a>
                  <Mail className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </a>
                </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              ></Button>
                <a href="tel:+13024640950"></a>
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
                </Button>
            </div>
                </div>
        </section>
                {/* Contact Info Banner */}
                <section className="py-8 bg-zion-blue-light border-b border-zion-blue-light"></section>
          <div className="container mx-auto px-4"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"></div>
              <div className="flex items-center gap-4"></div>
                <div className="bg-zion-purple/20 p-2 rounded-full"></div>
                  <MapPin className="h-5 w-5 text-zion-purple" />
                </div>
                <div></div>
                  <p className="text-zion-slate-light text-sm">Headquarters</p>
                  <p className="text-white font-medium">364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
              <div className="flex items-center gap-4"></div>
                <div className="bg-zion-cyan/20 p-2 rounded-full"></div>
                  <Phone className="h-5 w-5 text-zion-cyan" />
                </div>
                <div></div>
                  <p className="text-zion-slate-light text-sm">Contact</p>
                  <p className="text-white font-medium">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center gap-4"></div>
                <div className="bg-zion-purple/20 p-2 rounded-full"></div>
                  <Mail className="h-5 w-5 text-zion-purple" />
                </div>
                <div></div>
                  <p className="text-zion-slate-light text-sm">Email</p>
                  <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                </div>
              </div>
                </div>
          </div>
                </section>
                {/* Service Categories Overview */}
                <section className="py-20 bg-zion-blue"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <GradientHeading>Service Categories</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto"></p>
                Explore our comprehensive range of technology services across multiple domains
              </p>
                </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {SERVICE_CATEGORIES.map((category) => (
                <Card key={category.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20 group"></Card>
                  <div className={`${getCategoryColor(category.color)} p-8 rounded-t-lg flex items-center justify-center`}></div>
                {getCategoryIcon(category.icon)}
                </div>
                  
                  <div className="p-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors"></h3>
                {category.name}
                </h3>
                    
                    <p className="text-zion-slate-light mb-6"></p>
                {category.description}
                </p>
                    
                    <div className="mb-6"></div>
                      <p className="text-zion-cyan font-medium mb-2"></p>
                {category.services.length} Services Available
                      </p>
                      <div className="flex flex-wrap gap-2"></div>
                {category.services.slice(0, 3).map((service) => (
                          <Badge key={service.id} variant="secondary" className="bg-zion-blue-light text-zion-slate-light text-xs"></Badge>
                {service.title.split(' ').slice(0, 2).join(' ')}
                </Badge>
                        ))}
                        {category.services.length > 3 && (
                          <Badge variant="outline" className="border-zion-purple/30 text-zion-purple text-xs"></Badge>
                            +{category.services.length - 3} more
                          </Badge>
                        )}
                </div>
                </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                      asChild
                    ></Button>
                      <a href={`/comprehensive-services?category=${category.id}`}></a>
                        Explore Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                </Button>
                  </div>
                </Card>
              ))}
                </div>
                </div>
        </section>
                {/* Key Benefits */}
                <section className="py-20 bg-zion-blue-dark"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <GradientHeading>Why Choose Our Services?</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto"></p>
                We deliver exceptional value through innovation, expertise, and proven results
              </p>
                </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center"></div>
                  <Brain className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI-Powered</h3>
                <p className="text-zion-slate-light">Leverage cutting-edge AI technologies for competitive advantage</p>
                </div>
              
              <div className="text-center"></div>
                <div className="bg-zion-cyan/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center"></div>
                  <Shield className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-zion-slate-light">Bank-grade security and compliance for critical systems</p>
                </div>
              
              <div className="text-center"></div>
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center"></div>
                  <Zap className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
                <p className="text-zion-slate-light">Quick implementation with minimal business disruption</p>
                </div>
              
              <div className="text-center"></div>
                <div className="bg-zion-cyan/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center"></div>
                  <Users className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
                <p className="text-zion-slate-light">24/7 technical support and dedicated account management</p>
                </div>
            </div>
                </div>
        </section>
                {/* Pricing Tiers */}
                <section className="py-20 bg-zion-blue"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <GradientHeading>Flexible Pricing Options</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto"></p>
                Choose the service level that best fits your business needs and budget
              </p>
                </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
                {PRICING_TIERS.map((tier, index) => (
                <Card key={tier.name} className={`bg-zion-blue-dark border p-8 text-center relative ${
                  index === 1 ? 'border-zion-purple scale-105 shadow-xl shadow-zion-purple/20' : 'border-zion-blue-light'
                }`}></Card>
                {index === 1 && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zion-purple text-white px-4 py-1"></Badge>
                      Most Popular
                    </Badge>
                  )}
                <h3 className="text-2xl font-bold text-white mb-2"></h3>
                {tier.name}
                </h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2"></div>
                {tier.price}
                </div>
                  <p className="text-zion-slate-light mb-6"></p>
                {tier.description}
                </p>
                  
                  <ul className="space-y-3 mb-8 text-left"></ul>
                {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3"></li>
                        <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light"></span>
                {feature}
                </span>
                </li>
                    ))}
                </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                    asChild
                  ></Button>
                    <a href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry"></a>
                      Get Started
                    </a>
                </Button>
                </Card>
              ))}
                </div>
                </div>
        </section>
                {/* Service Highlights */}
                <section className="py-20 bg-zion-blue-dark"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <GradientHeading>Service Highlights</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto"></p>
                Key features and capabilities that set our services apart
              </p>
                </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6"></div>
                <div className="bg-zion-purple/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center"></div>
                  <TrendingUp className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Scalable Solutions</h3>
                <p className="text-zion-slate-light">Our services grow with your business, from startup to enterprise scale</p>
                </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6"></div>
                <div className="bg-zion-cyan/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center"></div>
                  <Globe className="h-8 w-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
                <p className="text-zion-slate-light">Services available worldwide with local compliance and support</p>
                </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6"></div>
                <div className="bg-zion-purple/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center"></div>
                  <Database className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data-Driven</h3>
                <p className="text-zion-slate-light">Analytics and insights to optimize performance and ROI</p>
                </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6"></div>
                <div className="bg-zion-cyan/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center"></div>
                  <Code className="h-8 w-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Development</h3>
                <p className="text-zion-slate-light">Tailored solutions designed specifically for your business needs</p>
                </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6"></div>
                <div className="bg-zion-purple/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center"></div>
                  <Lock className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
                <p className="text-zion-slate-light">Enterprise-grade security built into every solution</p>
                </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6"></div>
                <div className="bg-zion-cyan/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center"></div>
                  <Zap className="h-8 w-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Future-Ready</h3>
                <p className="text-zion-slate-light">Built with emerging technologies and forward-thinking architecture</p>
                </div>
            </div>
                </div>
        </section>
                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue"></section>
          <div className="container mx-auto px-4 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto"></p>
              Contact our team today for a free consultation and discover how our comprehensive services 
              can transform your business and drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8"></div>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              ></Button>
                <a href="mailto:kleber@ziontechgroup.com"></a>
                  <Mail className="mr-2 h-5 w-5" />
                  Schedule Free Consultation
                </a>
                </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              ></Button>
                <a href="tel:+13024640950"></a>
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
                </Button>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-2xl mx-auto"></div>
              <h3 className="text-xl font-bold text-white mb-4">Visit Our Office</h3>
              <p className="text-zion-slate-light mb-2"></p>
                <MapPin className="inline h-4 w-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-zion-slate-light"></p>
                <Clock className="inline h-4 w-4 mr-2" />
                Monday - Friday: 9:00 AM - 6:00 PM EST
              </p>
                </div>
          </div>
                </section>
      </main>
      
      <Footer />
    </>
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate"></div>
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan py-20"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center"></div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
            Our Services & Solutions
          </h1>
          <p className="text-xl text-zion-cyan-light max-w-4xl mx-auto mb-8"></p>
            Comprehensive technology services to transform your business. From AI development to IT infrastructure, 
            digital marketing to business consulting - we provide end-to-end solutions for the modern enterprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4"></div>
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate font-semibold"></Button>
              <Search className="h-5 w-5 mr-2" />
              Explore All Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"></Button>
              <MessageSquare className="h-5 w-5 mr-2" />
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
  DollarSign
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
  const getServicesByCategory = (category: string) =>
                {
    return ENHANCED_SERVICES.filter(service => service.category === category)
  }
  const formatPrice = (price: number) =>
                {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`
    }
    return `$${price}`
  }
  return (
    <div className="min-h-screen bg-background"></div>
      <SEO
        title="Complete IT & AI Services Overview - Zion Tech Group"
        description="Explore our comprehensive suite of AI, cybersecurity, cloud, and digital transformation services. Expert solutions for every business need."
        keywords="AI services, cybersecurity, cloud solutions, digital transformation, IT consulting, blockchain, IoT, enterprise solutions"
        canonical="https://ziontechgroup.com/services-overview"
      />
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark text-white py-24"></div>
        <div className="container mx-auto px-4 text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8"></h1>
            Complete Technology Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"></p>
            From AI-powered automation to enterprise cybersecurity, we provide comprehensive technology services
            that transform businesses and drive innovation across all industries.
          </p>
          <div className="flex flex-wrap justify-center gap-6"></div>
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light text-lg px-8 py-6"></Button>
              <Phone className="mr-3 h-6 w-6" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue text-lg px-8 py-6"></Button>
              <Mail className="mr-3 h-6 w-6" />
              Email kleber@ziontechgroup.com
            </Button>
                </div>
        </div>
                </div>
                {/* Contact Banner */}
                <div className="bg-zion-blue-dark py-6 px-4 md:px-8 border-b border-zion-blue-light"></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white"></div>
          <div className="flex items-center gap-4"></div>
            <Globe className="h-6 w-6 text-zion-cyan" />
            <span className="text-lg font-medium">Global IT Services • 24/7 Support • Enterprise Solutions</span>
                </div>
          <div className="flex flex-wrap items-center gap-6 text-sm"></div>
            <div className="flex items-center gap-2"></div>
              <Phone className="h-4 w-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
                </div>
            <div className="flex items-center gap-2"></div>
              <Mail className="h-4 w-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
                </div>
            <div className="flex items-center gap-2"></div>
              <Target className="h-4 w-4 text-zion-cyan" />
              <span>Middletown, DE 19709</span>
                </div>
          </div>
                </div>
      </div>
                {/* Services Overview Tabs */}
                <div className="py-16 bg-gray-50"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"></h2>
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
              Explore our comprehensive range of technology services designed to meet every business need
            </p>
                </div>

          <Tabs defaultValue="ai-ml" className="w-full"></Tabs>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8"></TabsList>
                {SERVICE_CATEGORIES.map((category) =>
                {
                const Icon = categoryIcons[category as keyof typeof categoryIcons]
                return (
                  <TabsTrigger
                    key={category}
                    value={category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}
                    className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-zion-blue data-[state=active]:text-white"
                  ></TabsTrigger
>
                    <Icon className="h-6 w-6" />
                    <span className="text-xs text-center"></span>
                {category}
                </span>
                </TabsTrigger>
                )
              })}
                </TabsList>
                {SERVICE_CATEGORIES.map((category) =>
                {
              const services = getServicesByCategory(category)
              const Icon = categoryIcons[category as keyof typeof categoryIcons]
              const gradient = categoryColors[category as keyof typeof categoryColors]
              return (
                <TabsContent
                  key={category}
                  value={category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}
                  className="space-y-8"
                ></TabsContent
>
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${gradient} text-white rounded-2xl p-8 text-center`}></div>
                    <div className="flex justify-center mb-4"></div>
                      <div className="bg-white/20 rounded-full p-4"></div>
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4"></h3>
                {category}
                </h3>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto"></p>
                {category === "AI & Machine Learning" && "Transform your business with cutting-edge AI solutions that automate processes and unlock new insights."}
                      {category === "Cybersecurity" && "Protect your digital assets with enterprise-grade security solutions and zero-trust architecture."}
                      {category === "Cloud & DevOps" && "Accelerate development and optimize cloud infrastructure with modern DevOps practices."}
                      {category === "Data & Analytics" && "Turn your data into actionable insights with real-time analytics and business intelligence."}
                      {category === "Digital Transformation" && "Modernize your business processes and technology infrastructure for the digital age."}
                      {category === "IoT & Smart Solutions" && "Connect and monitor your devices with intelligent IoT platforms and smart city solutions."}
                      {category === "Blockchain & Web3" && "Embrace the future with blockchain solutions, DeFi applications, and Web3 innovation."}
                </p>
                </div>
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {services.map((service) => (
                      <Card key={service.id} className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg"></Card>
                        <CardHeader className="pb-4"></CardHeader>
                          <div className="flex items-start justify-between mb-3"></div>
                            <Badge variant="secondary" className="text-xs"></Badge>
                {service.subcategory}
                </Badge>
                            <Badge className="bg-green-100 text-green-800 text-xs"></Badge>
                              Save {service.savings}%
                            </Badge>
                </div>
                          <CardTitle className="text-xl mb-3 leading-tight"></CardTitle>
                {service.title}
                </CardTitle>
                          <CardDescription className="text-sm leading-relaxed"></CardDescription>
                {service.description}
                </CardDescription>
                </CardHeader>

                        <CardContent className="pb-4"></CardContent>
                {/* Key Benefits */}
                <div className="mb-4"></div>
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-gray-700"></h4>
                              <TrendingUp className="h-4 w-4 text-green-500" />
                              Key Benefits
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1"></ul>
                {service.benefits.slice(0, 3).map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2"></li>
                                  <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span></span>
                {benefit}
                </span>
                </li>
                              ))}
                </ul>
                </div>
                {/* Use Cases */}
                <div className="mb-4"></div>
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-gray-700"></h4>
                              <Lightbulb className="h-4 w-4 text-yellow-500" />
                              Use Cases
                            </h4>
                            <div className="flex flex-wrap gap-1"></div>
                {service.useCases.slice(0, 3).map((useCase, index) => (
                                <Badge key={index} variant="outline" className="text-xs"></Badge>
                {useCase}
                </Badge>
                              ))}
                </div>
                </div>
                {/* Target Audience */}
                <div className="mb-4"></div>
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-gray-700"></h4>
                              <Users className="h-4 w-4 text-blue-500" />
                              Target Audience
                            </h4>
                            <div className="flex flex-wrap gap-1"></div>
                {service.targetAudience.slice(0, 2).map((audience, index) => (
                                <Badge key={index} variant="secondary" className="text-xs"></Badge>
                {audience}
                </Badge>
                              ))}
                </div>
                </div>
                        </CardContent>

                        <CardContent className="pt-0"></CardContent>
                {/* Pricing & Metrics */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4"></div>
                            <div className="flex items-center justify-between mb-3"></div>
                              <div className="text-center"></div>
                                <div className="text-2xl font-bold text-zion-blue"></div>
                {formatPrice(service.price)}
                </div>
                                <div className="text-sm text-gray-500"></div>
                {service.pricingModel === 'subscription' ? '/month' : 'one-time'}
                </div>
                </div>
                              <div className="text-right"></div>
                                <div className="text-sm text-gray-500 line-through"></div>
                {formatPrice(service.marketPrice)}
                </div>
                                <div className="text-sm font-semibold text-green-600"></div>
                                  Save {service.savings}%
                                </div>
                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center text-xs"></div>
                              <div className="flex items-center gap-1 justify-center"></div>
                                <Star className="h-3 w-3 text-yellow-500" />
                                <span></span>
                {service.rating}
                </span>
                </div>
                              <div className="flex items-center gap-1 justify-center"></div>
                                <Zap className="h-3 w-3 text-blue-500" />
                                <span></span>
                {service.aiScore}
                </span>
                </div>
                              <div className="flex items-center gap-1 justify-center"></div>
                                <Clock className="h-3 w-3 text-green-500" />
                                <span></span>
                {service.deliveryTime}
                </span>
                </div>
                            </div>
                </div>
                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3"></div>
                            <Button className="w-full" size="sm"></Button>
                              <Phone className="mr-2 h-4 w-4" />
                              Contact
                            </Button>
                            <Button variant="outline" className="w-full" size="sm"></Button>
                              <ArrowRight className="mr-2 h-4 w-4" />
                              Learn More
                            </Button>
                </div>
                        </CardContent>
                </Card>
                    ))}
                </div>
                {/* Category CTA */}
                <div className="text-center py-8"></div>
                    <Button size="lg" className="bg-zion-blue hover:bg-zion-blue-dark text-white px-8 py-6"></Button>
                      <Rocket className="mr-3 h-6 w-6" />
                      Get Started with {category}
                </Button>
                </div>
                </TabsContent>
              )
            })}
                </Tabs>
                </div>
      </div>
                {/* Why Choose Zion Tech Section */}
                <div className="py-20 bg-white"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"></h2>
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"></div>
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Expertise</h3>
              <p className="text-gray-600"></p>
                Over 15 years of experience in delivering enterprise technology solutions across industries
              </p>
                </div>

            <div className="text-center"></div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"></div>
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Solutions</h3>
              <p className="text-gray-600"></p>
                Cutting-edge AI and machine learning technologies that deliver measurable business impact
              </p>
                </div>

            <div className="text-center"></div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"></div>
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-600"></p>
                Worldwide IT services with local expertise and 24/7 support across all time zones
              </p>
                </div>

            <div className="text-center"></div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"></div>
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Success</h3>
              <p className="text-gray-600"></p>
                Dedicated support teams and proven methodologies that ensure project success
              </p>
                </div>
          </div>
                </div>
      </div>
                {/* Contact CTA Section */}
                <div className="bg-gradient-to-r from-zion-blue to-zion-purple py-20 text-white"></div>
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8"></h2>
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto"></p>
            Our expert team is ready to help you implement cutting-edge technology solutions that drive growth,
            efficiency, and competitive advantage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"></div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"></div>
              <Phone className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-zion-slate-light mb-4">Speak directly with our experts</p>
              <div className="text-2xl font-bold">+1 302 464 0950</div>
                </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"></div>
              <Mail className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-zion-slate-light mb-4">Get detailed information</p>
              <div className="text-lg font-semibold">kleber@ziontechgroup.com</div>
                </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"></div>
              <Target className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light mb-4">Meet our team in person</p>
              <div className="text-sm font-semibold">364 E Main St STE 1008<br />Middletown, DE 19709</div>
                </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6"></div>
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light text-lg px-8 py-6"></Button>
              <Rocket className="mr-3 h-6 w-6" />
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue text-lg px-8 py-6"></Button>
              <Phone className="mr-3 h-6 w-6" />
              Schedule Consultation
            </Button>
                </div>
        </div>
                </div>
    </div>
  )
}
                </div>
                </div></div>
                </Link>;