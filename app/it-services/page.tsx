<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Settings, Cpu, Zap } from 'lucide-react'

export default function ITServicesPage() {
  const services = [
    {
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud services.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      link: '/cloud-services',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', '24/7 monitoring']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive security assessments and implementations.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/cybersecurity',
      features: ['Security audits', 'Threat detection', 'Compliance management', 'Incident response']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and monitoring.',
      icon: <Settings className="w-8 h-8 text-green-400" />,
      link: '/devops',
      features: ['Automated deployments', 'Infrastructure as code', 'Monitoring & alerting', 'Performance optimization']
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      icon: <Code className="w-8 h-8 text-purple-400" />,
      link: '/web-development',
      features: ['React, Next.js, Vue.js', 'Mobile-first design', 'SEO optimization', 'Performance tuning']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
      link: '/mobile-development',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'App store optimization', 'Push notifications']
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      link: '/data-analytics',
      features: ['Data visualization', 'Predictive analytics', 'Real-time dashboards', 'Machine learning']
    }
  ]

  const technologies = [
    { name: 'Cloud Platforms', items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'] },
    { name: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#'] },
    { name: 'Frameworks', items: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js'] },
    { name: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'] },
    { name: 'DevOps Tools', items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform'] },
    { name: 'Security Tools', items: ['OWASP', 'Nessus', 'Burp Suite', 'Wireshark', 'Splunk'] }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the optimal solution architecture for your needs.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build and thoroughly test your solution using best practices.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing maintenance and support.'
    }
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Server, 
  ArrowRight, 
  CheckCircle, 
  Cloud,
  Shield,
  Code,
  BarChart3,
  Database,
  Smartphone,
  Cpu,
  Phone,
  MapPin,
  Sparkles,
  Rocket,
  Target,
  TrendingUp,
  Wifi
} from 'lucide-react'
import FuturisticBackground from '../components/FuturisticBackground'
import { NeonText, NeonButton, NeonCard, PulsingDot, AnimatedGradient } from '../components/NeonEffects'
import { itServices } from '../data/services'

export default function ITServicesPage() {
  const iconMap: { [key: string]: React.ReactNode } = {
    'Cloud': <Cloud className="w-6 h-6" />,
    'Shield': <Shield className="w-6 h-6" />,
    'Code': <Code className="w-6 h-6" />,
    'BarChart3': <BarChart3 className="w-6 h-6" />,
    'Database': <Database className="w-6 h-6" />,
    'Smartphone': <Smartphone className="w-6 h-6" />,
    'Server': <Server className="w-6 h-6" />,
    'Wifi': <Wifi className="w-6 h-6" />
  }

  const stats = [
    { number: '100+', label: 'IT Projects Completed', icon: Server },
    { number: '99.9%', label: 'System Uptime', icon: Target },
    { number: '24/7', label: 'Support Available', icon: Rocket },
    { number: '50+', label: 'Enterprise Clients', icon: Cloud }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FuturisticBackground />
      <Helmet>
<<<<<<< HEAD
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, web development, and more. Transform your business with our expert solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, web development, mobile development, data analytics" />
=======
        <title>IT Services - Zion Tech Group | Enterprise Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, software development, and data analytics. Enterprise-grade solutions from Zion Tech Group." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, software development, data analytics, enterprise solutions, Zion Tech Group" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
      </Helmet>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <PulsingDot color="#3b82f6" size={12} className="inline-block mr-2" />
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Enterprise IT Solutions</span>
            <PulsingDot color="#1d4ed8" size={12} className="inline-block ml-2" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
<<<<<<< HEAD
            IT{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT solutions to modernize your infrastructure, enhance security, 
            and accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">{tech.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can help modernize your infrastructure and accelerate your digital transformation.
=======
            <NeonText className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent" intensity="high">
              IT Services
            </NeonText>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT solutions designed for enterprise-scale operations. 
            From cloud infrastructure to cybersecurity, we deliver technology that drives business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </NeonButton>
            <NeonButton 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/about'}
            >
              Learn More
            </NeonButton>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <NeonCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <NeonText intensity="medium">{stat.number}</NeonText>
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </NeonCard>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <NeonText intensity="medium">Our IT Services</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Enterprise-grade IT solutions designed to scale with your business and drive digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <NeonCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      {iconMap[service.icon] || <Server className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <p className="text-2xl font-bold text-blue-400">{service.price}</p>
                      {service.marketPrice && (
                        <p className="text-sm text-gray-400 line-through">{service.marketPrice}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Capabilities:</h4>
                    <ul className="space-y-1">
                      {service.capabilities.slice(0, 3).map((capability, capIndex) => (
                        <li key={capIndex} className="text-xs text-gray-400">
                          • {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex justify-between items-center text-sm">
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      📞 Call Now
                    </a>
                    <a 
                      href={`mailto:${service.contactInfo.email}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      ✉️ Email
                    </a>
                  </div>
                </div>
              </NeonCard>
            ))}
          </div>
        </section>

        {/* Why Choose Our IT Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                <NeonText intensity="medium">Why Choose Our IT Services?</NeonText>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We combine deep technical expertise with business acumen to deliver IT solutions that drive real results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Expertise</h3>
                <p className="text-gray-300">Deep experience working with enterprise clients and complex IT environments.</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
                <p className="text-gray-300">Security is built into every solution we design and implement.</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scalable Solutions</h3>
                <p className="text-gray-300">Architecture designed to grow with your business and adapt to changing needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <AnimatedGradient className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              <NeonText intensity="high">Ready to Transform Your IT Infrastructure?</NeonText>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss how our IT services can help your business achieve its technology goals 
              and drive digital transformation.
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton 
                variant="accent" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
<<<<<<< HEAD
                Start Your Project
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </div>
=======
                Get Free Consultation
              </NeonButton>
              <NeonButton 
                variant="secondary" 
                size="lg"
                onClick={() => window.location.href = '/pricing'}
                className="border-2 border-white text-white hover:bg-white/10"
              >
                View Pricing
              </NeonButton>
            </div>
            <div className="mt-8 text-center">
              <p className="text-white/80 text-sm mb-2">Contact us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  📞 +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ✉️ kleber@ziontechgroup.com
                </a>
              </div>
              <p className="text-white/60 text-xs mt-2">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </AnimatedGradient>
        </section>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
      </div>
    </div>
  )
}