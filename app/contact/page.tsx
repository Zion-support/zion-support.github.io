import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (302) 464-0950",
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "kleber@ziontechgroup.com",
      description: "Send us an email anytime"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "364 E Main St STE 1008",
      description: "Middletown, DE 19709, USA"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "EST (Emergency support 24/7)"
    }
  ];

  const services = [
    "AI & Machine Learning",
    "Cloud Infrastructure",
    "Cybersecurity Solutions",
    "5G Implementation",
    "Web Development",
    "Mobile Development",
    "Data Analytics",
    "Custom Software",
    "Other"
  ];

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $500,000",
    "$500,000+",
    "Not sure yet"
  ];

  return (
    <>
      <Helmet>
        <title>Contact Zion Tech Group - Get Your Free Consultation</title>
        <meta
          name="description"
          content="Contact Zion Tech Group for AI solutions, cloud infrastructure, cybersecurity, and digital transformation services. Get your free consultation today!"
        />
        <meta
          name="keywords"
          content="contact zion tech group, AI consultation, cloud services, cybersecurity consulting, digital transformation, technology consulting"
        />
        <meta property="og:title" content="Contact Zion Tech Group - Get Your Free Consultation" />
        <meta property="og:description" content="Ready to transform your business? Contact us for a free consultation on AI, cloud, and cybersecurity solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Zion Tech Group",
            "description": "Get in touch with our team for AI solutions, cloud infrastructure, and cybersecurity services",
            "mainEntity": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-302-464-0950",
                  "contactType": "customer service",
                  "email": "kleber@ziontechgroup.com",
                  "availableLanguage": "English"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge AI and IT solutions? 
              Let's discuss your project and create something amazing together.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 text-cyan-400">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Send us a Message
                </h2>
                <p className="text-gray-300 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-gray-800">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-gray-800">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Free initial consultation and project assessment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">24/7 support and maintenance</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Proven track record with 500+ successful projects</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Response Time
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Email inquiries</span>
                      <span className="text-cyan-400 font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Phone calls</span>
                      <span className="text-cyan-400 font-medium">Immediate</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Emergency support</span>
                      <span className="text-cyan-400 font-medium">24/7</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Schedule a free consultation call to discuss your project requirements and get a personalized quote.
                  </p>
                  <a
                    href="tel:+13024640950"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Call Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
