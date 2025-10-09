'use client';

import React, { useState, useEffect, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Star, 
  CheckCircle, 
  Play, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Clock,
  Target,
  BarChart,
  Cpu,
  Globe,
  Lock,
  Database,
  Smartphone,
  Code,
  MessageSquare,
  Eye,
  Settings,
  Wifi,
  Server,
  HardDrive,
  FileText,
  PieChart,
  Activity,
  Lightning,
  Rocket,
  Layers,
  Workflow,
  Bot,
  Headphones,
  Monitor,
  Mobile,
  Laptop,
  Tablet,
  Watch,
  Camera,
  Mic,
  Headset,
  Gamepad2,
  Network,
  Security,
  Data,
  Analytics,
  Growth,
  Team,
  Achievement,
  Rating,
  Time,
  Goal,
  Success,
  Next,
  Start,
  Magic,
  Call,
  Email,
  Location,
  Send,
  User,
  Building,
  MessageSquare as Message
} from 'lucide-react';

// Contact Form Component
const ContactForm = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 2000);
  };

  return (
    <div className="cyber-card p-8">
      <h2 className="text-2xl font-bold text-white mb-6 cyber-text">
        <span className="holographic-text">Get In Touch</span>
      </h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
          <div className="flex items-center text-green-400">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">Thank you! We'll get back to you within 24 hours.</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="your.email@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="Your company name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Service Interest
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              <option value="">Select a service</option>
              <option value="ai-services">AI Services</option>
              <option value="it-services">IT Services</option>
              <option value="micro-saas">Micro SAAS Solutions</option>
              <option value="consulting">IT Consulting</option>
              <option value="cloud-migration">Cloud Migration</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Timeline
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-month">Within 1 month</option>
              <option value="3-months">Within 3 months</option>
              <option value="6-months">Within 6 months</option>
              <option value="planning">Just planning</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Project Budget
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
          >
            <option value="">Select budget range</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-50k">$10,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k-500k">$100,000 - $500,000</option>
            <option value="over-500k">Over $500,000</option>
            <option value="discuss">Let's discuss</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            placeholder="Tell us about your project, goals, and how we can help..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cyber-button py-4 text-lg font-bold group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="flex items-center justify-center">
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                Send Message
              </>
            )}
          </span>
        </button>
      </form>
    </div>
  );
});

// Contact Info Component
const ContactInfo = memo(() => (
  <div className="space-y-8">
    <div>
      <h2 className="text-2xl font-bold text-white mb-6 cyber-text">
        <span className="holographic-text">Contact Information</span>
      </h2>
    </div>

    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <Phone className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
          <p className="text-gray-300 mb-1">+1 (302) 464-0950</p>
          <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
          <p className="text-gray-300 mb-1">kleber@ziontechgroup.com</p>
          <p className="text-sm text-gray-400">We respond within 24 hours</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
          <p className="text-gray-300 mb-1">364 E Main St STE 1008</p>
          <p className="text-gray-300 mb-1">Middletown, DE 19709</p>
          <p className="text-sm text-gray-400">United States</p>
        </div>
      </div>
    </div>

    <div className="cyber-card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
      <div className="space-y-3">
        {[
          '300% average ROI on projects',
          '99.9% uptime guarantee',
          '24/7 expert support',
          '50+ countries served',
          '500+ successful projects',
          'Enterprise-grade security'
        ].map((benefit, index) => (
          <div key={index} className="flex items-center text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
            {benefit}
          </div>
        ))}
      </div>
    </div>
  </div>
));

// FAQ Component
const FAQComponent = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How quickly can you start a project?',
      answer: 'We can typically begin most projects within 1-2 weeks of contract signing. For urgent projects, we offer expedited start options.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. Our micro SAAS solutions are perfect for small businesses.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including project-based, retainer, and subscription options. Contact us for a customized quote based on your specific needs.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive ongoing support including 24/7 monitoring, maintenance, updates, and technical assistance for all our solutions.'
    },
    {
      question: 'Are your solutions secure?',
      answer: 'Security is our top priority. All our solutions are built with enterprise-grade security, comply with industry standards, and undergo regular security audits.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes, we specialize in seamless integration with existing systems and can work with virtually any technology stack or platform.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
            <span className="holographic-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our services and processes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="cyber-card">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <ArrowRight className={`w-5 h-5 text-cyan-400 transition-transform ${
                    openIndex === index ? 'rotate-90' : ''
                  }`} />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

// Main Contact Page Component
export default function ContactPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Us - Zion Tech Group',
    description: 'Get in touch with Zion Tech Group for AI services, IT solutions, and technology consulting',
    mainEntity: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      telephone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US',
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get AI & IT Solutions Quote</title>
        <meta
          name="description"
          content="Contact Zion Tech Group for AI services, IT solutions, and technology consulting. Call (302) 464-0950 or email kleber@ziontechgroup.com for a free consultation."
        />
        <meta
          name="keywords"
          content="contact zion tech group, AI services contact, IT consulting contact, technology services, free consultation"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 cyber-grid neural-network-bg overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 cyber-text">
              <span className="holographic-text neon-pulse">Contact Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Ready to transform your business with AI and technology? Let's discuss your project 
              and create a solution that drives real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-bold group"
              >
                <span className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Call (302) 464-0950
                </span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 text-lg font-bold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
              >
                <span className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Email Us
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQComponent />

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
              <span className="holographic-text">Ready to Get Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Don't wait to transform your business. Contact us today for a free consultation 
              and discover how our AI and technology solutions can drive your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-bold group"
              >
                <span className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Call (302) 464-0950
                </span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 text-lg font-bold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
              >
                <span className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Email kleber@ziontechgroup.com
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}