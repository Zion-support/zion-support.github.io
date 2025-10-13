import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Shield, Server, Cloud, Database, Code, Network, Smartphone, Monitor, Headphones, Clock, DollarSign, Globe, Lock, Settings, Zap, BarChart3, Users, Award, Target, TrendingUp, Cpu, HardDrive, Wifi, Bluetooth, Usb, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Calendar, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";
import FuturisticBackground from "../components/FuturisticBackground";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

const ITServicesPage = () => {
  const itServices = [
    {
      title: "Cloud Infrastructure Solutions",
      description: "Comprehensive cloud migration, management, and optimization services. We help businesses leverage AWS, Azure, and Google Cloud for scalable, secure, and cost-effective infrastructure.",
      icon: <Cloud className="w-8 h-8" />,
      price: "From $2,500/month",
      features: [
        "Cloud migration & strategy",
        "Multi-cloud architecture design",
        "Infrastructure automation",
        "Cost optimization",
        "Security & compliance",
        "24/7 monitoring & support",
        "Disaster recovery planning",
        "Performance optimization"
      ],
      benefits: [
        "50% reduction in infrastructure costs",
        "99.9% uptime guarantee",
        "Scalable infrastructure",
        "Enhanced security posture"
      ],
      link: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced cybersecurity services including threat detection, incident response, compliance management, and security training. Protect your business from evolving cyber threats.",
      icon: <Shield className="w-8 h-8" />,
      price: "From $3,000/month",
      features: [
        "Security assessment & auditing",
        "Threat detection & response",
        "Vulnerability management",
        "Compliance consulting (SOC2, ISO27001)",
        "Security awareness training",
        "Penetration testing",
        "Incident response planning",
        "24/7 security monitoring"
      ],
      benefits: [
        "99.9% threat detection accuracy",
        "50% faster incident response",
        "Compliance assurance",
        "Reduced security risks"
      ],
      link: "/cybersecurity-solutions",
      color: "from-red-500 to-orange-500",
      popular: true
    },
    {
      title: "Web Development Services",
      description: "Custom web applications, e-commerce platforms, and responsive websites built with modern technologies. From concept to deployment, we create digital experiences that drive results.",
      icon: <Code className="w-8 h-8" />,
      price: "From $1,500/month",
      features: [
        "Custom web applications",
        "E-commerce platforms",
        "Responsive design",
        "Progressive Web Apps (PWA)",
        "API development & integration",
        "Performance optimization",
        "SEO optimization",
        "Maintenance & support"
      ],
      benefits: [
        "40% faster page load times",
        "Mobile-first design",
        "SEO optimized",
        "Scalable architecture"
      ],
      link: "/web-development",
      color: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. We create engaging, high-performance mobile apps that connect with your users and drive business growth.",
      icon: <Smartphone className="w-8 h-8" />,
      price: "From $2,000/month",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development",
        "UI/UX design",
        "App store optimization",
        "Push notifications",
        "Offline functionality",
        "API integration",
        "App maintenance & updates"
      ],
      benefits: [
        "Native performance",
        "Cross-platform compatibility",
        "App store optimization",
        "Regular updates & support"
      ],
      link: "/mobile-development",
      color: "from-green-500 to-emerald-500",
      popular: true
    },
    {
      title: "DevOps Solutions",
      description: "Streamline your development and deployment processes with our DevOps services. We implement CI/CD pipelines, infrastructure as code, and automated testing to accelerate delivery.",
      icon: <Settings className="w-8 h-8" />,
      price: "From $2,200/month",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code (IaC)",
        "Container orchestration",
        "Automated testing",
        "Monitoring & logging",
        "Configuration management",
        "Release automation",
        "Performance optimization"
      ],
      benefits: [
        "60% faster deployment",
        "Reduced deployment errors",
        "Automated processes",
        "Improved collaboration"
      ],
      link: "/devops-solutions",
      color: "from-indigo-500 to-blue-500",
      popular: false
    },
    {
      title: "Database Management",
      description: "Comprehensive database services including design, optimization, migration, and maintenance. We ensure your data is secure, accessible, and performing at its best.",
      icon: <Database className="w-8 h-8" />,
      price: "From $1,800/month",
      features: [
        "Database design & architecture",
        "Performance optimization",
        "Data migration services",
        "Backup & recovery",
        "Security hardening",
        "Monitoring & maintenance",
        "Cloud database management",
        "Data analytics setup"
      ],
      benefits: [
        "50% faster query performance",
        "99.9% data availability",
        "Automated backups",
        "Enhanced security"
      ],
      link: "/database-management",
      color: "from-teal-500 to-cyan-500",
      popular: false
    },
    {
      title: "Network Infrastructure",
      description: "Design, implement, and manage robust network infrastructure solutions. From LAN/WAN setup to wireless networks and security, we ensure reliable connectivity.",
      icon: <Network className="w-8 h-8" />,
      price: "From $1,200/month",
      features: [
        "Network design & planning",
        "LAN/WAN implementation",
        "Wireless network setup",
        "Network security",
        "VPN configuration",
        "Network monitoring",
        "Performance optimization",
        "24/7 network support"
      ],
      benefits: [
        "99.9% network uptime",
        "Enhanced security",
        "Optimized performance",
        "Scalable infrastructure"
      ],
      link: "/network-infrastructure",
      color: "from-orange-500 to-red-500",
      popular: false
    },
    {
      title: "IT Support & Helpdesk",
      description: "Comprehensive IT support services including helpdesk, technical support, and IT consulting. We provide 24/7 support to keep your business running smoothly.",
      icon: <Headphones className="w-8 h-8" />,
      price: "From $800/month",
      features: [
        "24/7 technical support",
        "Remote desktop assistance",
        "Hardware & software support",
        "User training & onboarding",
        "IT asset management",
        "Troubleshooting & maintenance",
        "Security updates",
        "IT consulting services"
      ],
      benefits: [
        "24/7 availability",
        "Quick response times",
        "Proactive maintenance",
        "Reduced downtime"
      ],
      link: "/it-support",
      color: "from-yellow-500 to-orange-500",
      popular: true
    }
  ];

  const pricingTiers = [
    {
      name: "Basic",
      price: "$1,200",
      period: "per month",
      description: "Essential IT services for small businesses",
      features: [
        "Basic IT support",
        "Email & calendar setup",
        "Basic security",
        "Monthly maintenance",
        "Phone support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$2,500",
      period: "per month",
      description: "Comprehensive IT solutions for growing businesses",
      features: [
        "Full IT support",
        "Cloud infrastructure",
        "Advanced security",
        "24/7 monitoring",
        "Priority support",
        "Regular updates",
        "Backup & recovery"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$5,000",
      period: "per month",
      description: "Complete IT solutions for large organizations",
      features: [
        "Dedicated IT team",
        "Custom solutions",
        "Enterprise security",
        "24/7 dedicated support",
        "Custom development",
        "SLA guarantees",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "Manufacturing Corp",
      role: "IT Director",
      content: "Zion's cloud infrastructure solutions reduced our IT costs by 50% while improving performance and security. Their team is incredibly knowledgeable and responsive.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Chen",
      company: "E-commerce Platform",
      role: "CTO",
      content: "The cybersecurity solutions provided by Zion Tech Group have been outstanding. We've had zero security incidents since implementation, and our compliance scores are perfect.",
      rating: 5,
      avatar: "LC"
    },
    {
      name: "Robert Martinez",
      company: "Healthcare Services",
      role: "Operations Manager",
      content: "Their IT support team is exceptional. 24/7 availability, quick response times, and proactive maintenance have kept our systems running smoothly without any major issues.",
      rating: 5,
      avatar: "RM"
    }
  ];

  const technologies = [
    {
      name: "Cloud Platforms",
      technologies: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode"],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      name: "Programming Languages",
      technologies: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Go", "Rust"],
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "Frameworks",
      technologies: ["React", "Vue.js", "Angular", "Node.js", "Django", "Spring", ".NET"],
      icon: <Settings className="w-6 h-6" />
    },
    {
      name: "Databases",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"],
      icon: <Database className="w-6 h-6" />
    },
    {
      name: "DevOps Tools",
      technologies: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Security Tools",
      technologies: ["Okta", "Auth0", "Cloudflare", "Splunk", "Qualys", "Nessus"],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <SEOOptimizer
        title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
        description="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, DevOps, and 24/7 support. Transform your business with our technology expertise."
        keywords="IT services, cloud infrastructure, cybersecurity, web development, mobile development, DevOps, database management, IT support, technology consulting"
        canonical="https://ziontechgroup.com/it-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Server className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 IT Solutions Provider 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              IT Services
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive technology solutions to power your business growth. From cloud infrastructure to cybersecurity, 
            our IT services are designed to optimize performance, enhance security, and drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Server className="w-5 h-5" />}
            >
              Get IT Consultation
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View IT Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              End-to-end technology solutions designed to solve complex business challenges and drive measurable results. 
              Each service is backed by our expertise and commitment to excellence.
            </p>
          </div>
          
          <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }}>
            {itServices.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer h-full"
                glowColor={service.color.includes('blue') ? 'cyan' : service.color.includes('purple') ? 'purple' : service.color.includes('green') ? 'green' : service.color.includes('red') ? 'red' : 'pink'}
              >
                <Link
                  to={service.link}
                  className="block p-6 h-full flex flex-col"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 4 && (
                        <span className="text-gray-400 text-xs">
                          +{service.features.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest technologies and tools to deliver cutting-edge solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your IT needs. All plans include 24/7 support and regular updates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  tier.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } relative overflow-hidden`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {tier.price}
                    <span className="text-lg text-gray-400 font-normal">/{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={tier.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {tier.popular ? "Get Started" : "Contact Sales"}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our IT services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our IT services to optimize performance, enhance security, and drive innovation. 
            Start your IT transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Server className="w-5 h-5" />}
            >
              Start IT Consultation
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
