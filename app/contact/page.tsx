export const metadata = { 
  title: 'Contact | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.',
};

export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-8">
                <ContactItem
                  icon="📞"
                  title="Phone"
                  content="+1 302 464 0950"
                  subtitle="Available 9 AM - 6 PM EST"
                  href="tel:+13024640950"
                />
                <ContactItem
                  icon="✉️"
                  title="Email"
                  content="kleber@ziontechgroup.com"
                  subtitle="We respond within 24 hours"
                  href="mailto:kleber@ziontechgroup.com"
                />
                <ContactItem
                  icon="📍"
                  title="Office"
                  content="364 E Main St STE 1008\nMiddletown, DE 19709"
                  subtitle="By appointment only"
                />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="font-bold text-green-900 mb-2">Quick Response Guarantee</h3>
                  <p className="text-green-800 leading-relaxed">
                    We understand that time is critical in business. That's why we guarantee a response within 24 hours for all inquiries, and same-day response for urgent matters.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="font-bold text-purple-900 mb-2">Free Consultation</h3>
                  <p className="text-purple-800 leading-relaxed">
                    Book a free 30-minute consultation to discuss your project requirements and get expert advice on the best technology solutions for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="First Name"
                  id="firstName"
                  type="text"
                  required
                />
                <FormField
                  label="Last Name"
                  id="lastName"
                  type="text"
                  required
                />
              </div>
              
              <FormField
                label="Email"
                id="email"
                type="email"
                required
              />

              <FormField
                label="Company"
                id="company"
                type="text"
              />
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="ai-services">AI Services & Machine Learning</option>
                  <option value="micro-saas">Micro SaaS Development</option>
                  <option value="it-services">IT Services & Cloud Migration</option>
                  <option value="emerging-tech">Emerging Technology</option>
                  <option value="consulting">Technology Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="over-500k">Over $500,000</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
                <span className="ml-2">→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get to market 3x faster with our agile development process</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security and compliance for all our solutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
              <p className="text-gray-600">Reduce operational costs by up to 40% with our optimized solutions</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com"
              className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Visit Main Website
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, content, subtitle, href }: {
  icon: string;
  title: string;
  content: string;
  subtitle: string;
  href?: string;
}) {
  const contentElement = href ? (
    <a 
      href={href} 
      className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
    >
      {content}
    </a>
  ) : (
    <span className="text-gray-700 font-medium whitespace-pre-line">{content}</span>
  );

  return (
    <div className="flex items-start space-x-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
        <div className="text-gray-700 mb-1">{contentElement}</div>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}

function FormField({ label, id, type, required }: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        required={required}
      />
    </div>
  );
}