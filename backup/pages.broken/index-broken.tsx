import React from "react" ;
import Link from 'next/link' ;
import { motion } from 'framer-motion' ;
import { Brain, Network, Cloud, ArrowRight, CheckCircle, Star, Users, Award, Phone, Mail, MapPin } from 'lucide-react' ;
import Layout from '../components/Layout' ;
;
const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Expert Team Members' }
] 

const services = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions for modern businesses",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    pricing: "Starting at $2,000/month",
    count: "25+ AI Solutions",
    popular: true
  },
  {
    title: "IT Services",
    description: "Comprehensive IT solutions to power your digital transformation",
    icon: Network,
    href: "/it-services",
    features: ["Cloud Migration", "Cybersecurity", "Infrastructure Management", "Digital Transformation"],
    pricing: "Starting at $1,500/month",
    count: "18+ IT Solutions",
    popular: true
  },
  {
    title: "Micro SaaS",
    description: "Innovative software as a service solutions for specialized business needs",
    icon: Cloud,
    href: "/micro-saas",
    features: ["AI Content Marketing", "Smart Lead Management", "Analytics Dashboard", "Workflow Automation", "Customer Support Bot", "Inventory Management", "Email Marketing", "Project Management"],
    pricing: "Starting at $19/month",
    count: "20+ Products",
    popular: true
  }
] 

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Team",
    description: "Certified professionals with years of experience"
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes"
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock technical support"
  },
  {
    icon: Award,
    title: "Fast Delivery",
    description: "Agile development with rapid deployment"
  }
] 

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We analyze your requirements and propose the best solution"
  },
  {
    step: "02",
    title: "Planning",
    description: "Detailed project planning with clear milestones and timelines"
  },
  {
    step: "03",
    title: "Development",
    description: "Build and implement your solution with regular updates"
  },
  {
    step: "04",
    title: "Deployment",
    description: "Launch your solution with full support and training"
  }
]
}

export default function HomePage() {
  
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={ opacity: 0, y: 30 }
              animate={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI & Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We deliver cutting-edge AI solutions, cloud services, and technology consulting to help your business thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

<MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
<div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
                  </div>
                  <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000">
                  </div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000">
                  </div>
                  </div>
                  <div className="container mx-auto px-4 relative z-10">
                  <motion.div
            initial={ opacity: 0, y: 30 }
            animate={ opacity: 1, y: 0 }
            transition={ duration: 0.8 }
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI & Technology
              </span>
</h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services. 
              <br className="hidden md:block" />
                  <span className="text-blue-300 font-semibold">Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">ursor/add-new-services-and-deploy-updates-1b90
                Get Started Today
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Explore Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={ opacity: 0, y: 30 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon 
                
                  >
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-12 w-12 text-blue-600 mr-4" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-blue-600 font-semibold">{service.count}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="mb-4">
                      <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                ) 
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={ opacity: 0, y: 30 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven track record speaks for itself
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={ opacity: 0, y: 30 }
                  whileInView={ opacity: 1, y: 0 }
                  transition={ duration: 0.8, delay: index * 0.1 }
                  viewport={ once: true }
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={ opacity: 0, y: 30 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={ opacity: 0, y: 30 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ready to start your next project? Contact our expert team for a free consultation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center p-6 bg-white rounded-lg shadow-lg"
                initial={ opacity: 0, y: 30 } 
                whileInView={ opacity: 1, y: 0 } 
                transition={ duration: 0.8, delay: 0.1 } 
                viewport={ once: true } 
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our technical experts</p>
                <a href="tel:+13024640950" className="text-blue-600 font-semibold hover:text-blue-700">
                  +1 302 464 0950 
                </a>
              </motion.div>

              <motion.div 
                className="text-center p-6 bg-white rounded-lg shadow-lg"
                initial={ opacity: 0, y: 30 } 
                whileInView={ opacity: 1, y: 0 } 
                transition={ duration: 0.8, delay: 0.2 } 
                viewport={ once: true } 
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your project details</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 font-semibold hover:text-green-700">
                  kleber@ziontechgroup.com 
                </a>
              </motion.div>

              <motion.div 
                className="text-center p-6 bg-white rounded-lg shadow-lg"
                initial={ opacity: 0, y: 30 } 
                whileInView={ opacity: 1, y: 0 } 
                transition={ duration: 0.8, delay: 0.3 } 
                viewport={ once: true } 
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Our headquarters in Delaware</p>
                <address className="text-purple-600 font-semibold not-italic">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709 
                </address>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
