export const metadata = { 
  title: 'Contact | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.',
};

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Phone",
      description: "Call us directly for immediate assistance",
      value: "+1 302 464 0950",
      link: "tel:+13024640950",
      icon: "📞"
    },
    {
      title: "Email",
      description: "Send us a detailed message about your project",
      value: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com",
      icon: "✉️"
    },
    {
      title: "Address",
      description: "Visit our office for in-person consultations",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      link: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      icon: "📍"
    }
  ];

  const services = [
    "AI Solutions & Machine Learning",
    "Micro SaaS Development",
    "Cloud Migration & Architecture",
    "DevOps & SRE Implementation",
    "Cybersecurity Services",
    "Data Analytics & Insights",
    "API Development & Integration",
    "Infrastructure Management"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">Contact Zion Tech Group</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Ready to transform your business with cutting-edge AI, micro SaaS, and IT solutions? 
          Let's discuss how we can help you achieve your goals.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {contactMethods.map((method, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">{method.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
            <p className="text-gray-300 mb-4 text-sm">{method.description}</p>
            <a 
              href={method.link} 
              className="text-blue-400 hover:text-blue-300 font-medium"
              target={method.title === "Address" ? "_blank" : undefined}
            >
              {method.value}
            </a>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
          <p className="text-gray-300 mb-8">
            Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">First Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Last Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@company.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Company</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Company Name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Service Interest</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select a service</option>
                <option value="ai-solutions">AI Solutions & Machine Learning</option>
                <option value="micro-saas">Micro SaaS Development</option>
                <option value="cloud-migration">Cloud Migration & Architecture</option>
                <option value="devops">DevOps & SRE Implementation</option>
                <option value="cybersecurity">Cybersecurity Services</option>
                <option value="data-analytics">Data Analytics & Insights</option>
                <option value="api-development">API Development & Integration</option>
                <option value="infrastructure">Infrastructure Management</option>
                <option value="consulting">Consulting & Strategy</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Project Budget</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select budget range</option>
                <option value="under-10k">Under $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-500k">$100,000 - $500,000</option>
                <option value="over-500k">Over $500,000</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Project Description *</label>
              <textarea 
                rows={5}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please describe your project requirements, goals, and any specific challenges you're facing..."
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Information */}
        <div className="space-y-8">
          {/* Services We Offer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Services We Offer</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">🚀 Innovation First</h4>
                <p className="text-gray-300 text-sm">We stay at the forefront of technology, implementing the latest AI and cloud solutions.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">🔒 Enterprise Security</h4>
                <p className="text-gray-300 text-sm">Your data and systems are protected with enterprise-grade security measures.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">⚡ Rapid Deployment</h4>
                <p className="text-gray-300 text-sm">Get your solutions up and running quickly with our proven methodologies.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">📞 24/7 Support</h4>
                <p className="text-gray-300 text-sm">Round-the-clock support to ensure your systems run smoothly.</p>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Quick Response Guarantee</h3>
            <p className="text-gray-200 mb-4">
              We respond to all inquiries within 24 hours, with detailed proposals and custom quotes.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}