'use client'
import React from 'react'
<<<<<<< HEAD
'use client'
import React, { useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import {
Phone,
Mail,
MapPin,
Clock,
Send,
CheckCircle;
import { Phone, Mail, CheckCircle, Helmet } from 'lucide-react';
}
} from 'lucide-react'
const [formData, setFormData] = useState({
name: '',
email: '',
company: '',
phone: '',
service: '',
budget: '',
timeline: '',
message: ''
})
const [isSubmitting, setIsSubmitting] = useState(false)
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
const { name, value } = e.target
setFormData(prev => ({
...prev,
[name]: value;}
}))
}, [])
const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault()
setIsSubmitting(true)
setSubmitStatus('idle')
try {
// Simulate form submission
await new Promise(resolve => setTimeout(resolve, 1000))
setSubmitStatus('success')
setFormData({
name: '',
email: '',
company: '',
phone: '',
service: '',
budget: '',
timeline: '',
message: '';}
})
} catch (error) {
setSubmitStatus('error');}
} finally {
setIsSubmitting(false);  );
};
}
const services = [
'AI Solutions',
'Cloud Computing',
'Mobile App Development',
'Web Development',
'Data Analytics',
'Cybersecurity',
'DevOps',
'Consulting',
'Other'
]
const contactInfo = [
{
icon: Phone,
title: 'Phone',
details: '+1 (302) 464-0950',
description: 'Mon-Fri 9AM-6PM EST'
},
{
icon: Mail,
title: 'Email',
details: 'kleber@ziontechgroup.com',
description: 'We respond within 24 hours'
},
{
icon: MapPin,
title: 'Address',
details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
description: 'Visit our office'
},
{
icon: Clock,
title: 'Business Hours',
details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
description: 'Eastern Time'
}
]
return (
    <>
      <Helmet>
<title>Contact Us - Zion Tech Group | Get in Touch</title>
<meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." />
<meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch" />
</Helmet><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
<div className="container mx-auto px-4">{/* Header */}</div><div className="text-center mb-16">
<h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Get in</h1><span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">{' '}Touch</span></h1><p className="text-xl text-gray-300 max-w-3xl mx-auto">Ready to transform your business? Let's discuss your project and explore</p></p></div></section><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">{/* Contact Form */}</div><div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
<h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2><div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
<CheckCircle className="w-5 h-5 text-green-400" />
<span className="text-green-400">Message sent successfully! We'll get back to you soon.</span></div><div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3">
<span className="text-red-400">Failed to send message. Please try again.</span></div><form onSubmit={handleSubmit} className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-300 mb-2">
Full Name *
</label><div className="relative">
<User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
<input
type="text"
name="name"
value={formData.name}
onChange={handleInputChange}
required
className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
placeholder="Your full name"
/>
</div></div><div>
<label className="block text-sm font-medium text-gray-300 mb-2">
Email Address *
</label><div className="relative">
<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
<input
type="email"
name="email"
value={formData.email}
onChange={handleInputChange}
required
className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
placeholder="your@email.com"
/>
</div></div></div><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-300 mb-2">
Company
</
<div className="relative"><Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
<input
type="text"
name="company"
value={formData.company}
onChange={handleInputChange}
className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
placeholder="Your company"
/>
</div></div><div>
<label className="block text-sm font-medium text-gray-300 mb-2">
Phone Number
</
<div className="relative"><Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
<input
type="tel"
name="phone"
value={formData.phone}
onChange={handleInputChange}
className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
placeholder="+1 (555) 123-4567"
/>
</div></div></div><div>
<label className="block text-sm font-medium text-gray-300 mb-2">
Service Interest
</
<div className="relative"><Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
<select
name="service"
value={formData.service}
onChange={handleInputChange}
className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500">
<option value="">Select a service</option><option key={service} value={service}>
{service}
</option></select></div></div><div>
<label className="block text-sm font-medium text-gray-300 mb-2">
Message *
</label><div className="relative">
<MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
<textarea
name="message"
value={formData.message}
onChange={handleInputChange}
required
rows={6}
className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 resize-none"
placeholder="Tell us about your project, goals, or any questions you have..."
/>
</div></div><button
type="submit"
disabled={isSubmitting}
className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2" aria-label="Action button">{isSubmitting ? (</button><>
<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div><span>Sending...</span></>
) : (
<>
<Send className="w-5 h-5" />
<span>Send Message</span></>
)}
</button></form></div><div className="space-y-8">
<div>
<h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2><p className="text-lg text-gray-300 mb-8">We're here to help! Reach out to us through any of these channels</p></p></div><div className="space-y-8">
<div>
<h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2><p className="text-gray-300 mb-8">We're here to help you transform your business with cutting-edge AI and technology solutions.</p></div><div className="space-y-6">
<div className="flex items-center">
<div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
<Phone className="w-6 h-6 text-white" />
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-1">$3</h3>
<p className="text-cyan-400 font-medium mb-1">{info.details}</p>p>
<p className="text-gray-300 text-sm">{info.description}</p>p>
</div>
</div>
<div className="flex items-center">
<div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
<Mail className="w-6 h-6 text-white" />
</div><div>
<h3 className="text-lg font-semibold text-white">Email</h3><p className="text-gray-300">info@ziontechgroup.com</p></div></div><div className="flex items-center">
<div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
<MapPin className="w-6 h-6 text-white" />
</div><div>
<h3 className="text-lg font-semibold text-white">Address</h3><p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p></div></div><div className="flex items-center">
<div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
<Clock className="w-6 h-6 text-white" />
</div>
<div>
<h3 className="text-lg font-semibold text-white">Business Hours</h3>
<p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
)
}
export default ContactPage
=======
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'

const PageBroken2Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Broken2Page
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PageBroken2Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-280f
