import React, { useState } from "react"
import { MessageSquare } from "lucide-react"
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: ""
      });
    } catch (error) {
      console.error('Failed to submit contact form:', error);
    } finally {}
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
        <MessageSquare className="w-8 h-8 mx-auto mb-2" />
        <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
        <p>
          Your message has been sent successfully. We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>

        {/* Contact Form */}
        <div className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20&quot;></div>
          <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;></div>
              <div></div>
                <label htmlFor=&quot;name&quot; className=&quot;block text-white font-medium mb-2&quot;>
                  Full Name *
                </label>
                <input
                  type=&quot;text&quot;
                  id=&quot;name&quot;
                  name=&quot;name&quot;
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className=&quot;w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors&quot;
                  placeholder=&quot;John Doe&quot;
                />
              </div>

              <div></div>
                <label htmlFor=&quot;email&quot; className=&quot;block text-white font-medium mb-2&quot;>
                  Email Address *
                </label>
                <input
                  type=&quot;email&quot;
                  id=&quot;email&quot;
                  name=&quot;email&quot;
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className=&quot;w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors&quot;
                  placeholder=&quot;john@company.com&quot;
                />
              </div>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;></div>
              <div></div>
                <label htmlFor=&quot;company&quot; className=&quot;block text-white font-medium mb-2&quot;>
                  Company
                </label>
                <input
                  type=&quot;text&quot;
                  id=&quot;company&quot;
                  name=&quot;company&quot;
                  value={formData.company}
                  onChange={handleChange}
                  className=&quot;w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors&quot;
                  placeholder=&quot;Your Company&quot;
                />
              </div>

              <div></div>
                <label htmlFor=&quot;phone&quot; className=&quot;block text-white font-medium mb-2&quot;>
                  Phone Number
                </label>
                <input
                  type=&quot;tel&quot;
                  id=&quot;phone&quot;
                  name=&quot;phone&quot;
                  value={formData.phone}
                  onChange={handleChange}
                  className=&quot;w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors&quot;
                  placeholder=&quot;+1 (555) 123-4567&quot;
                />
              </div>
            </div>

            <div></div>
              <label htmlFor=&quot;service&quot; className=&quot;block text-white font-medium mb-2&quot;>
                Service Interest
              </label>
              <select
                id=&quot;service&quot;
                name=&quot;service&quot;
                value={formData.service}
                onChange={handleChange}
                className=&quot;w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors&quot;
              >
                <option value=&quot;">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service} className=&quot;bg-gray-800&quot;>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div></div>
              <label htmlFor=&quot;message&quot; className=&quot;block text-white font-medium mb-2&quot;>
                Message *
              </label>
              <textarea
                id=&quot;message&quot;
                name=&quot;message&quot;
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className=&quot;w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors resize-none&quot;
                placeholder=&quot;Tell us about your project and how we can help...&quot;
              />
            </div>

            {status.message && (
              <div className={`flex items-center space-x-2 p-4 rounded-lg ${
                status.type === 'success' ? 'bg-green-500/20 text-green-300' :
                status.type === 'error' ? 'bg-red-500/20 text-red-300' :
                'bg-blue-500/20 text-blue-300'
              }`}></div>
                {status.type === 'success' ? (
                  <CheckCircle className=&quot;w-5 h-5 flex-shrink-0&quot; />
                ) : status.type === 'error' ? (
                  <AlertCircle className=&quot;w-5 h-5 flex-shrink-0&quot; />
                ) : null}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type=&quot;submit&quot;
              disabled={status.type === 'loading'}
              className=&quot;w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center&quot;
            >
              {status.type === 'loading' ? (
                <>
                  <div className=&quot;animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2&quot;></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className=&quot;w-5 h-5 ml-2&quot; />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        >
          <option value="">Select a service</option>
          <option value="ai-solutions">AI Solutions</option>
          <option value="it-services">IT Services</option>
          <option value="micro-saas">Micro SAAS</option>
          <option value="consulting">Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          placeholder="Tell us about your project or requirements..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;