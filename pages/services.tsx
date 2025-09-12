import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { 
  Brain, 
  Server, 
  Cloud, 
  Shield, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  TrendingUp,
  Users,
  Award,
  Globe,
  Target,
  Rocket,
  Lock,
  Cpu,
  Network,
  Monitor,
  Building,
  MessageSquare,
  Calendar,
  DollarSign,
  Clock,
  ThumbsUp,
  Lightbulb,
  Settings,
  Database,
  Code,
  Smartphone,
  Wifi,
  Eye,
  Heart,
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Revolutionary artificial intelligence solutions that transform your business operations",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "AI Chatbots & Virtual Assistants",
          description: "Intelligent conversational AI that handles customer inquiries 24/7",
          pricing: "Starting at $2,500/month",
          features: ["Natural Language Processing", "Multi-language Support", "Integration APIs", "Analytics Dashboard"],
          popular: true
        },
        {
          name: "Predictive Analytics",
          description: "Advanced data analysis to forecast trends and optimize decisions",
          pricing: "Starting at $3,000/month",
          features: ["Machine Learning Models", "Real-time Predictions", "Custom Algorithms", "Business Intelligence"],
          popular: false
        },
        {
          name: "Computer Vision Solutions",
          description: "Image and video analysis for automation and quality control",
          pricing: "Starting at $4,000/month",
          features: ["Object Detection", "Image Classification", "Video Analysis", "Custom Training"],
          popular: true
        },
        {
          name: "Natural Language Processing",
          description: "Text analysis and understanding for content and communication",
          pricing: "Starting at $2,000/month",
          features: ["Sentiment Analysis", "Text Classification", "Language Translation", "Content Generation"],
          popular: false
        }
      ]
    },
    {
      title: "IT Infrastructure & Cloud",
      description: "Comprehensive IT services and cloud solutions for modern businesses",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Cloud Migration & Management",
          description: "Seamless migration to AWS, Azure, or Google Cloud with ongoing management",
          pricing: "Starting at $1,500/month",
          features: ["Zero-downtime Migration", "Cost Optimization", "24/7 Monitoring", "Security Compliance"],
          popular: true
        },
        {
          name: "DevOps & CI/CD",
          description: "Automated development and deployment pipelines for faster delivery",
          pricing: "Starting at $2,000/month",
          features: ["Automated Testing", "Continuous Integration", "Container Orchestration", "Infrastructure as Code"],
          popular: true
        },
        {
          name: "Network Security & Firewall",
          description: "Advanced security measures to protect your digital assets",
          pricing: "Starting at $1,200/month",
          features: ["Firewall Management", "Intrusion Detection", "VPN Setup", "Security Audits"],
          popular: false
        },
        {
          name: "Database Management",
          description: "Optimized database performance and maintenance services",
          pricing: "Starting at $1,000/month",
          features: ["Performance Tuning", "Backup & Recovery", "Security Hardening", "Monitoring"],
          popular: false
        }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      description: "Custom software-as-a-service applications tailored to your business needs",
      icon: Cloud,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "Project Management Platform",
          description: "Comprehensive project tracking and team collaboration tools",
          pricing: "Starting at $800/month",
          features: ["Task Management", "Team Collaboration", "Time Tracking", "Reporting Dashboard"],
          popular: true
        },
        {
          name: "Customer Relationship Management",
          description: "Streamlined CRM system for managing customer relationships",
          pricing: "Starting at $1,200/month",
          features: ["Lead Management", "Sales Pipeline", "Customer Communication", "Analytics"],
          popular: true
        },
        {
          name: "E-commerce Platform",
          description: "Complete online store solution with payment processing",
          pricing: "Starting at $1,500/month",
          features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"],
          popular: false
        },
        {
          name: "Analytics Dashboard",
          description: "Real-time business intelligence and data visualization",
          pricing: "Starting at $1,000/month",
          features: ["Custom Reports", "Real-time Data", "Interactive Charts", "Export Capabilities"],
          popular: false
        }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Advanced security solutions to protect against evolving threats",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        {
          name: "Penetration Testing",
          description: "Comprehensive security assessment to identify vulnerabilities",
          pricing: "Starting at $3,000/project",
          features: ["Vulnerability Assessment", "Security Report", "Remediation Guidance", "Follow-up Testing"],
          popular: true
        },
        {
          name: "Compliance Management",
          description: "Ensure adherence to industry regulations and standards",
          pricing: "Starting at $2,500/month",
          features: ["GDPR Compliance", "HIPAA Compliance", "SOC 2 Audit", "Documentation"],
          popular: false
        },
        {
          name: "Security Monitoring",
          description: "24/7 monitoring and threat detection services",
          pricing: "Starting at $1,800/month",
          features: ["Real-time Monitoring", "Threat Detection", "Incident Response", "Security Reports"],
          popular: true
        },
        {
          name: "Data Encryption & Backup",
          description: "Secure data protection and disaster recovery solutions",
          pricing: "Starting at $1,000/month",
          features: ["End-to-end Encryption", "Automated Backups", "Disaster Recovery", "Data Retention"],
          popular: false
        }
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current systems, identify pain points, and understand your business objectives.",
      icon: Eye
    },
    {
      step: "02", 
      title: "Solution Design",
      description: "Our experts design a customized solution that addresses your specific needs and requirements.",
      icon: Lightbulb
    },
    {
      step: "03",
      title: "Implementation",
      description: "We implement the solution with minimal disruption to your ongoing operations.",
      icon: Settings
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Ongoing support, monitoring, and optimization to ensure maximum performance.",
      icon: TrendingUp
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Tech Group's AI solutions revolutionized our customer service. Response times improved by 90% and customer satisfaction increased significantly.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Kim",
      company: "Global Enterprises",
      role: "CTO", 
      content: "Their cloud migration service was flawless. We achieved 40% cost savings while improving performance and security.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      company: "Innovation Labs",
      role: "Founder",
      content: "The micro SaaS platform they built for us has been a game-changer. It's scalable, reliable, and exactly what we needed.",
      rating: 5,
      avatar: "LT"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group | AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, IT infrastructure, micro SaaS development, and cybersecurity. 130+ services to transform your business." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, cloud computing, cybersecurity, digital transformation, business automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive Technology
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                From AI-powered solutions to cloud infrastructure and micro SaaS platforms, 
                we provide 130+ comprehensive services to accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions across four main categories, each designed to address specific business needs.
              </p>
            </div>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-12 h-12 mr-4" />
                        <div>
                          <h3 className="text-3xl font-bold">{category.title}</h3>
                          <p className="text-lg text-white/90">{category.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        {category.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                              <h4 className="text-xl font-semibold text-gray-900">{service.name}</h4>
                              {service.popular && (
                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <div className="mb-4">
                              <span className="text-2xl font-bold text-green-600">{service.pricing}</span>
                            </div>
                            <ul className="space-y-2 mb-6">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <Link 
                              href="/contact" 
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum value for your investment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{step.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our services have helped businesses achieve their goals and drive growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Let's discuss your project requirements and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Start Your Project
              </Link>
              <Link href="tel:+13024640950" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call: +1 302 464 0950
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}