import React from "react"
import Head from "next/head"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Star,
  Users,
  Award,
  Globe,
  Building2
} from "lucide-react"
import Navigation from "../src/components/Navigation"
import Footer from "../src/components/Footer"

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 302 464 0950",
      href: "tel:+13024640950",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com",
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      href: "#",
      description: "Visit our office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      href: "#",
      description: "We're here to help during business hours"
    }
  ]

  const services = [
    "AI Services & Machine Learning",
    "Micro SaaS Solutions",
    "IT Services & Infrastructure",
    "Cybersecurity & Compliance",
    "Cloud Migration & DevOps",
    "Data Analytics & Business Intelligence",
    "Custom Software Development",
    "Digital Transformation Consulting"
  ]

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI services, micro SaaS solutions, and IT consulting. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Contact our team of experts 
              to discuss your AI, micro SaaS, or IT service needs.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <a 
                    href={info.href}
                    className="text-blue-600 hover:text-blue-700 font-medium block mb-2"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
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

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Company Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Expert Team</h3>
                        <p className="text-gray-600 text-sm">Certified professionals with years of experience</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Proven Results</h3>
                        <p className="text-gray-600 text-sm">Track record of successful implementations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                        <p className="text-gray-600 text-sm">Round-the-clock assistance and monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Competitive Pricing</h3>
                        <p className="text-gray-600 text-sm">Transparent pricing with no hidden costs</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900 text-white rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
                  <p className="text-blue-100 mb-6">
                    Don't wait to transform your business. Contact us today for a free consultation 
                    and discover how our solutions can help you achieve your goals.
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="tel:+13024640950"
                      className="block w-full bg-white text-blue-900 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                    >
                      Call Now: +1 302 464 0950
                    </a>
                    <a 
                      href="mailto:kleber@ziontechgroup.com"
                      className="block w-full border border-white text-white hover:bg-white hover:text-blue-900 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                    >
                      Email: kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}