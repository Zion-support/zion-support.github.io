import Head from "next/head"
import React, { useState } from "react"
import Link from "next/link"
import { 
  Play,
  Clock,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Brain,
  Code,
  Server,
  Shield,
  Cloud,
  Zap,
  BarChart3,
  MessageSquare,
  Eye,
  Settings,
  Database,
  Network,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin
} from "lucide-react"
import Navigation from "../src/components/Navigation"
import Footer from "../src/components/Footer"

export default function Demo() {
  const [selectedDemo, setSelectedDemo] = useState("ai-services")

  const demos = [
    {
      id: "ai-services",
      title: "AI Services Demo",
      description: "Experience our cutting-edge artificial intelligence solutions in action",
      duration: "30 minutes",
      icon: Brain,
      features: [
        "AI Content Generation",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics"
      ],
      pricing: "Free Demo",
      benefits: "See how AI can transform your business operations"
    },
    {
      id: "micro-saas",
      title: "Micro SaaS Demo",
      description: "Explore our scalable software-as-a-service development capabilities",
      duration: "25 minutes",
      icon: Code,
      features: [
        "Custom SaaS Development",
        "API Integration",
        "User Management",
        "Payment Processing",
        "Analytics Dashboard"
      ],
      pricing: "Free Demo",
      benefits: "Discover how micro SaaS can solve your business challenges"
    },
    {
      id: "it-services",
      title: "IT Services Demo",
      description: "Explore our comprehensive IT infrastructure and support solutions",
      duration: "20 minutes",
      icon: Server,
      features: [
        "Cloud Migration",
        "Network Security",
        "System Monitoring",
        "Backup Solutions",
        "Performance Optimization"
      ],
      pricing: "Free Demo",
      benefits: "Learn how our IT services can optimize your infrastructure"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "The AI demo was incredible! We could see exactly how their solutions would integrate with our existing systems.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "InnovateLabs",
      role: "CEO",
      content: "The micro SaaS demo showed us possibilities we never considered. Highly recommend scheduling a demo.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "DataFlow Inc",
      role: "IT Director",
      content: "Their IT services demo was comprehensive and professional. We're excited to work with them.",
      rating: 5
    }
  ]

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo)

  return (
    <>
      <Head>
        <title>Request a Demo - Zion Tech Group</title>
        <meta name="description" content="Schedule a free demo of our AI services, micro SaaS solutions, and IT services. See how Zion Tech Group can transform your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/demo" />
      </Head>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              See Our Solutions in Action
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Schedule a free demo to experience our AI services, micro SaaS solutions, and IT services. 
              See how we can transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#demo-form"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
              <Link href="/contact"
                className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Demo Options */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Demo
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Select the type of demo that best matches your business needs and interests.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {demos.map((demo) => (
                <div 
                  key={demo.id}
                  className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 ${
                    selectedDemo === demo.id 
                      ? 'ring-2 ring-blue-500 shadow-xl' 
                      : 'hover:shadow-xl'
                  }`}
                  onClick={() => setSelectedDemo(demo.id)}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <demo.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{demo.title}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {demo.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{demo.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">What You'll See:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {demo.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Price:</span>
                      <span className="font-semibold text-green-600">{demo.pricing}</span>
                    </div>
                    <p className="text-xs text-gray-500">{demo.benefits}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Demo Details */}
            {selectedDemoData && (
              <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {selectedDemoData.title} Details
                    </h3>
                    <p className="text-gray-600 mb-6">{selectedDemoData.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Duration: {selectedDemoData.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Perfect for: Technical teams, decision makers</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-gray-700">Includes: Live Q&A, custom use cases</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Demo Agenda</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</div>
                        <div>
                          <h5 className="font-medium text-gray-900">Introduction & Overview</h5>
                          <p className="text-sm text-gray-600">5 minutes - Meet the team and understand your needs</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</div>
                        <div>
                          <h5 className="font-medium text-gray-900">Live Product Demo</h5>
                          <p className="text-sm text-gray-600">15-20 minutes - See the solution in action</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</div>
                        <div>
                          <h5 className="font-medium text-gray-900">Q&A & Discussion</h5>
                          <p className="text-sm text-gray-600">5-10 minutes - Address your specific questions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Demo Request Form */}
        <section id="demo-form" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Schedule Your Free Demo
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll contact you within 24 hours to schedule your personalized demo.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your job title"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="demoType" className="block text-sm font-medium text-gray-700 mb-2">
                    Demo Type *
                  </label>
                  <select
                    id="demoType"
                    name="demoType"
                    required
                    value={selectedDemo}
                    onChange={(e) => setSelectedDemo(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {demos.map((demo) => (
                      <option key={demo.id} value={demo.id}>{demo.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your specific needs or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Schedule My Demo
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600">
                Don't just take our word for it. Here's what clients say about our demos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to See Our Solutions?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Schedule your free demo today and discover how Zion Tech Group can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <p className="mt-6 text-sm">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}