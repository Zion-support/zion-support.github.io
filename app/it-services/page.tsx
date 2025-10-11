'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cloud, Shield, Code, Smartphone, Globe, Settings, Monitor, BarChart, Database, Wifi, Package, Lock, Calendar, Cpu, Link, ShoppingCart, Zap, CheckCircle, ArrowRight, Star, Award, TrendingUp, Users, Target, FileText, MessageCircle, Heart, DollarSign, Eye, Mic, Workflow, CheckSquare, Mail, Brain } from 'lucide-react'

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      features: ['AWS, Azure, GCP', 'Auto-scaling', 'Disaster recovery', 'Cost optimization'],
      pricing: 'From $199/month',
      href: '/cloud-infrastructure',
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Threat detection', 'Data protection', 'Compliance', 'Incident response'],
      pricing: 'From $299/month',
      href: '/cybersecurity-solutions',
      popular: true
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific requirements.',
      features: ['Web applications', 'Mobile apps', 'API development', 'System integration'],
      pricing: 'From $149/hour',
      href: '/custom-software',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native development', 'Cross-platform', 'App store deployment', 'Maintenance'],
      pricing: 'From $99/hour',
      href: '/mobile-development',
      popular: false
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications with cutting-edge technologies.',
      features: ['Responsive design', 'Performance optimization', 'SEO friendly', 'Security'],
      pricing: 'From $79/hour',
      href: '/web-development',
      popular: false
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration for faster delivery.',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring', 'Automation'],
      pricing: 'From $179/month',
      href: '/devops-cicd',
      popular: false
    },
    {
      icon: Monitor,
      title: 'IT Support',
      description: '24/7 technical support and maintenance for your IT infrastructure.',
      features: ['24/7 support', 'Remote assistance', 'Preventive maintenance', 'Quick response'],
      pricing: 'From $99/month',
      href: '/it-support',
      popular: false
    },
    {
      icon: BarChart,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights and business intelligence.',
      features: ['Data visualization', 'Business intelligence', 'Real-time analytics', 'Reporting'],
      pricing: 'From $149/month',
      href: '/data-analytics-bi',
      popular: false
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize and maintain your databases for peak performance.',
      features: ['Performance tuning', 'Backup & recovery', 'Security', 'Monitoring'],
      pricing: 'From $129/month',
      href: '/database-management',
      popular: false
    },
    {
      icon: Wifi,
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure.',
      features: ['Network design', 'Security implementation', 'Performance monitoring', 'Troubleshooting'],
      pricing: 'From $199/month',
      href: '/network-infrastructure',
      popular: false
    },
    {
      icon: Package,
      title: 'IT Asset Management',
      description: 'Complete lifecycle management of your IT assets and resources.',
      features: ['Asset tracking', 'Lifecycle management', 'Cost optimization', 'Compliance'],
      pricing: 'From $79/month',
      href: '/it-asset-management',
      popular: false
    },
    {
      icon: Lock,
      title: 'IT Security Services',
      description: 'Comprehensive security assessment and monitoring services.',
      features: ['Security audits', 'Vulnerability assessment', 'Penetration testing', 'Compliance'],
      pricing: 'From $249/month',
      href: '/it-security-services',
      popular: false
    }
  ]

  const technologies = [
    { name: 'Cloud Platforms', icon: Cloud, items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'] },
    { name: 'Programming Languages', icon: Code, items: ['Python', 'JavaScript', 'Java', 'C#', 'Go', 'Rust'] },
    { name: 'Frameworks', icon: Settings, items: ['React', 'Angular', 'Vue.js', 'Node.js', '.NET', 'Django'] },
    { name: 'Databases', icon: Database, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
    { name: 'DevOps Tools', icon: Zap, items: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible'] },
    { name: 'Security Tools', icon: Shield, items: ['OWASP', 'Nessus', 'Burp Suite', 'Wireshark', 'Metasploit'] }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Build systems that grow with your business needs.',
      stat: '99.9% uptime guarantee'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with industry best practices.',
      stat: 'SOC 2 compliant'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile development methodology for rapid deployment.',
      stat: '50% faster delivery'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience.',
      stat: '100+ certified experts'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan.',
      icon: Brain
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'We design the optimal solution architecture for your needs.',
      icon: Settings
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We develop and thoroughly test your solution.',
      icon: Code
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support.',
      icon: CheckCircle
    }
  ]

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CTO, TechCorp',
      content: 'Zion\'s cloud infrastructure solutions have transformed our scalability. We can now handle 10x more traffic.',
      rating: 5,
      avatar: 'JS'
    },
    {
      name: 'Maria Garcia',
      role: 'IT Director, Enterprise Solutions',
      content: 'Their cybersecurity implementation saved us from a major breach. The security team is exceptional.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'David Lee',
      role: 'CEO, StartupHub',
      content: 'The custom development team delivered exactly what we needed, on time and within budget.',
      rating: 5,
      avatar: 'DL'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Award className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">Certified IT Solutions Provider</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to power your digital transformation. 
              From cloud infrastructure to cybersecurity, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Portfolio
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-gray-300">Certified Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">IT Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`cyber-card group relative ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                    <div className="text-cyan-400 font-bold">{service.pricing}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies We <span className="text-cyan-400">Work With</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use the latest technologies and tools to deliver cutting-edge solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="cyber-card group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose <span className="text-cyan-400">Our IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven expertise and measurable business impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-cyan-400 font-bold text-sm">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Development Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful IT project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="cyber-card text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by <span className="text-cyan-400">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our IT services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our IT services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Cloud className="w-5 h-5 mr-2" />
              Start Your IT Journey
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ItServicesPage