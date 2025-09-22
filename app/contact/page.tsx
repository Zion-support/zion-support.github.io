import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Button from '../components/Button'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      details: 'contact@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team',
      details: '+1 (555) 123-4567',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters',
      details: 'San Francisco, CA',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'When we\'re available',
      details: 'Mon-Fri: 9AM-6PM PST',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const services = [
    'AI Solutions & Machine Learning',
    'Cloud Infrastructure & Migration',
    'Cybersecurity & Compliance',
    'Digital Transformation',
    'Data Analytics & Business Intelligence',
    'IoT & Edge Computing Solutions',
    'Blockchain Technology',
    'Custom Software Development'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get In{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                variant="glass"
                hover
                className="p-6 border-white/20 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{info.description}</p>
                <p className="text-blue-400 font-medium">{info.details}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card variant="glass" className="p-8 border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Services & Info */}
            <div className="space-y-8">
              <Card variant="glass" className="p-8 border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card variant="glass" className="p-8 border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                      <p className="text-gray-300 text-sm">Certified professionals with deep industry expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Proven Results</h4>
                      <p className="text-gray-300 text-sm">Track record of successful implementations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
                      <p className="text-gray-300 text-sm">Round-the-clock technical assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Scalable Solutions</h4>
                      <p className="text-gray-300 text-sm">Technology that grows with your business</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}