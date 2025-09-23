import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact2030() {
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
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const services = [
    'Quantum AI Neural Interface Platform',
    'Autonomous AI Business Ecosystem',
    'Holographic AI Collaboration Platform',
    'Quantum AI Cybersecurity Sentinel',
    'AI-Powered Metaverse Development Suite',
    'Quantum Financial Trading Bot',
    'AI-Powered Content Creation Studio',
    'Smart Home Automation Hub',
    'AI-Powered Learning Management System',
    'Quantum Supply Chain Optimizer',
    'Quantum Cloud Infrastructure Platform',
    'AI-Powered DevOps Automation Suite',
    'Blockchain Infrastructure as a Service',
    'Edge Computing Intelligence Platform',
    'Zero-Trust Security Architecture',
    'Custom Enterprise Solution',
    'Other'
  ];

  const budgets = [
    'Under $1,000/month',
    '$1,000 - $5,000/month',
    '$5,000 - $10,000/month',
    '$10,000 - $25,000/month',
    '$25,000 - $50,000/month',
    '$50,000+/month',
    'Enterprise - Custom Pricing'
  ];

  const timelines = [
    'Immediate (This week)',
    'Next 30 days',
    'Next 3 months',
    'Next 6 months',
    'Next year',
    'No specific timeline'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
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
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Contact Zion Tech Group 2030 - Get Started with Revolutionary AI & IT Solutions</title>
        <meta name="description" content="Contact Zion Tech Group for revolutionary 2030 AI services, micro SaaS solutions, and cutting-edge IT infrastructure. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact Zion Tech Group, AI services contact, micro SaaS contact, IT services contact, quantum computing contact" />
        <link rel="canonical" href="https://ziontechgroup.com/contact-2030" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black text-white">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-mesh opacity-20 animate-gradient-shift"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-zion-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
        </div>

        {/* Header */}
        <header className="relative z-10 bg-black/20 backdrop-blur-md border-b border-zion-cyan/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-gradient">
                Zion Tech Group
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-zion-cyan hover:text-white transition-colors">Home</Link>
                <Link href="/services-showcase-2030" className="text-zion-cyan hover:text-white transition-colors">Services</Link>
                <Link href="/pricing-2030" className="text-zion-cyan hover:text-white transition-colors">Pricing</Link>
                <Link href="/contact-2030" className="text-zion-cyan hover:text-white transition-colors">Contact</Link>
              </nav>
              <div className="flex items-center space-x-4">
                <a href={`tel:${contactInfo.mobile}`} className="text-zion-cyan hover:text-white transition-colors">
                  {contactInfo.mobile}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="bg-zion-cyan hover:bg-zion-cyan-light text-black px-4 py-2 rounded-lg transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ready to transform your business with revolutionary 2030 technology? Let's discuss your needs.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="relative z-10 pb-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {/* Phone Contact */}
              <div className="bg-black/40 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-8 text-center hover:border-zion-cyan hover:shadow-neon transition-all duration-300">
                <div className="text-6xl mb-6">📞</div>
                <h3 className="text-2xl font-bold text-white mb-4">Call Us</h3>
                <p className="text-zion-cyan/70 mb-6">
                  Speak directly with our technology experts
                </p>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-black px-8 py-4 rounded-lg text-xl font-semibold transition-colors hover:shadow-neon block"
                >
                  {contactInfo.mobile}
                </a>
                <p className="text-zion-cyan/60 text-sm mt-3">
                  Available 24/7 for urgent inquiries
                </p>
              </div>

              {/* Email Contact */}
              <div className="bg-black/40 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-8 text-center hover:border-zion-cyan hover:shadow-neon transition-all duration-300">
                <div className="text-6xl mb-6">✉️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
                <p className="text-zion-cyan/70 mb-6">
                  Send us a detailed message about your project
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-black px-8 py-4 rounded-lg text-xl font-semibold transition-colors hover:shadow-neon block"
                >
                  {contactInfo.email}
                </a>
                <p className="text-zion-cyan/60 text-sm mt-3">
                  Response within 2 hours
                </p>
              </div>

              {/* Office Visit */}
              <div className="bg-black/40 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-8 text-center hover:border-zion-cyan hover:shadow-neon transition-all duration-300">
                <div className="text-6xl mb-6">🏢</div>
                <h3 className="text-2xl font-bold text-white mb-4">Visit Our Office</h3>
                <p className="text-zion-cyan/70 mb-6">
                  Schedule an in-person meeting
                </p>
                <div className="text-zion-cyan font-semibold mb-4">
                  {contactInfo.address}
                </div>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-black px-8 py-4 rounded-lg text-xl font-semibold transition-colors hover:shadow-neon block"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="relative z-10 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                  Get Started Today
                </h2>
                <p className="text-xl text-zion-cyan">
                  Tell us about your project and we'll create a custom solution for your business
                </p>
              </div>

              {submitSuccess ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-green-400 mb-4">
                    Thank you for contacting Zion Tech Group. We'll get back to you within 2 hours.
                  </p>
                  <p className="text-zion-cyan/70">
                    In the meantime, feel free to call us at {contactInfo.mobile} for immediate assistance.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-zion-cyan font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/50 rounded-lg text-white placeholder-zion-cyan/50 focus:border-zion-cyan focus:outline-none focus:shadow-neon transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-zion-cyan font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/50 rounded-lg text-white placeholder-zion-cyan/50 focus:border-zion-cyan focus:outline-none focus:shadow-neon transition-all"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-zion-cyan font-semibold mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/50 rounded-lg text-white placeholder-zion-cyan/50 focus:border-zion-cyan focus:outline-none focus:shadow-neon transition-all"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-zion-cyan font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/50 rounded-lg text-white placeholder-zion-cyan/50 focus:border-zion-cyan focus:outline-none focus:shadow-neon transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="service" className="block text-zion-cyan font-semibold mb-2">
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/50 rounded-lg text-white focus:border-zion-cyan focus:outline-none focus:shadow-neon transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-zion-cyan font-semibold mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/50 rounded-lg text-white focus:border-zion-cyan focus:outline-none focus:shadow-neon transition-all"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget, index) => (
                          <option key={index} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="timeline" className="block text-zion-cyan font-semibold mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/50 rounded-lg text-white focus:border-zion-cyan focus:outline-none focus:shadow-neon transition-all"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-zion-cyan font-semibold mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/40 border border-zion-cyan/50 rounded-lg text-white placeholder-zion-cyan/50 focus:border-zion-cyan focus:outline-none focus:shadow-neon transition-all resize-none"
                      placeholder="Tell us about your project, goals, and specific requirements..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-zion-cyan hover:bg-zion-cyan-light disabled:bg-zion-cyan/50 text-black px-12 py-4 rounded-lg text-xl font-semibold transition-colors hover:shadow-neon disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </button>
                    <p className="text-zion-cyan/60 text-sm mt-3">
                      We'll respond within 2 hours • No spam, ever
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative z-10 py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
                We're not just another technology company. We're pioneers of the future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">First-to-Market</h3>
                <p className="text-zion-cyan/70">
                  Revolutionary services that don't exist anywhere else
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
                <p className="text-zion-cyan/70">
                  Setup in days, not months. Results in weeks, not years.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
                <p className="text-zion-cyan/70">
                  Average customers see 400-1200% ROI within 6-18 months
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-zion-cyan/70">
                  Bank-level security and compliance for all solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-cyan mb-12 max-w-3xl mx-auto">
              Don't wait for the future. Build it with us today.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-zion-cyan hover:bg-zion-cyan-light text-black px-8 py-4 rounded-lg text-xl font-semibold transition-colors hover:shadow-neon"
              >
                Call {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-black px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
              >
                Email {contactInfo.email}
              </a>
            </div>
            <div className="text-zion-cyan/70">
              <p>{contactInfo.address}</p>
              <p className="mt-2">
                <a href={contactInfo.website} className="hover:text-zion-cyan transition-colors">
                  {contactInfo.website}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 bg-black/40 border-t border-zion-cyan/20">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-zion-cyan/70">
                  Revolutionary technology solutions for the future
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-zion-cyan/70">
                  <li><Link href="/services-showcase-2030#ai" className="hover:text-zion-cyan transition-colors">AI Services</Link></li>
                  <li><Link href="/services-showcase-2030#micro-saas" className="hover:text-zion-cyan transition-colors">Micro SaaS</Link></li>
                  <li><Link href="/services-showcase-2030#it" className="hover:text-zion-cyan transition-colors">IT Services</Link></li>
                  <li><Link href="/services-showcase-2030#quantum" className="hover:text-zion-cyan transition-colors">Quantum Computing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-zion-cyan/70">
                  <li><Link href="/about" className="hover:text-zion-cyan transition-colors">About Us</Link></li>
                  <li><Link href="/careers" className="hover:text-zion-cyan transition-colors">Careers</Link></li>
                  <li><Link href="/news" className="hover:text-zion-cyan transition-colors">News</Link></li>
                  <li><Link href="/partners" className="hover:text-zion-cyan transition-colors">Partners</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-zion-cyan/70">
                  <p>{contactInfo.mobile}</p>
                  <p>{contactInfo.email}</p>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="border-t border-zion-cyan/20 mt-8 pt-8 text-center text-zion-cyan/60">
              <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}