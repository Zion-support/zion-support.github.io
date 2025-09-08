React, { useState } from
  'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from
  'lucide-react';''
  'interface FormData {name: string;'email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

const [formData, setFormData] = useState<FormData>({;

name:, ', email: ', '    company:,'
  ', service: ',
, message: '});'  const [isSubmitting, setIsSubmitting] = useState(false);'  const [isSubmitted, setIsSubmitted] = useState(false);'
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const services = [;

  'AI & Machine Learning', 'Cloud & DevOps',
  '    'Cybersecurity
  ', 'Web Development
  ',' 
  'Mobile Development', 'Data Analytics',
  '    'Digital Transformation
  ', 'Other
  ','  ];''
  const validateForm = (): boolean => {;const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {

newErrors.name =
  'Name is required';'    }'
  ''
    if (!formData.email.trim()) {

      newErrors.email = 'Email is required'
  ';'    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  ''
      newErrors.email = 'Email is invalid'
  ';'    }
  ''
    if (!formData.message.trim()) {

      newErrors.message = 'Message is required'
  ';'    }
  'setErrors(newErrors);'return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e: React.FormEvent) => {;e.preventDefault();

    if (!validateForm()) {

      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {

      setIsSubmitted(false)
      setFormData({

name:, ', email: ', '        company:,'
  ', service: ',
, message: '});'    }, 3000);'  };'const handleChange = (;e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {

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
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
className="bg-green-50 border border-green-200 rounded-xl p-8 text-center""      >"        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />"        <h3 className="text-2xl font-bold text-green-800 mb-2">"          Message Sent!"        </h3>"
        <p className="text-green-600">"          Thank you for reaching out. We&apos;ll get back to you within 24 hours.''"
  '        </p>'      </motion.div>);
  }

  return (
<div className="bg-white rounded-xl shadow-xl p-8">"      <div className="text-center mb-8">"        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>"        <p className="text-gray-600 max-w-2xl mx-auto">"          Ready to transform your business? Let&apos;s discuss how our technology''
  '          solutions can drive your success.'        </p></div>

      <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 mb-8">"        <div>"          <h3 className="text-xl font-semibold text-gray-900 mb-4">"            Contact Information"          </h3>
          <div className="space-y-4">"            <div className="flex items-center space-x-3">"              <Mail className="w-5 h-5 text-blue-600" />"              <div>"                <p className="font-medium text-gray-900">Email</p>"                <p className="text-gray-600">kleber@ziontechgroup.com</p>"              </div>"            </div>"
            <div className="flex items-center space-x-3">"              <Phone className="w-5 h-5 text-blue-600" />"              <div>"                <p className="font-medium text-gray-900">Phone</p>"                <p className="text-gray-600">+1 (302) 464-0950</p>"              </div>"            </div>
            <div className="flex items-center space-x-3">"              <MapPin className="w-5 h-5 text-blue-600" />"              <div>"                <p className="font-medium text-gray-900">Address</p>"                <p className="text-gray-600">"                  364 E Main St STE 1008"                  <br />Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your.email@company.com"
            aria-describedby="email-error"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a service</option>
          <option value="micro-saas">Micro SaaS Products</option>
          <option value="ai-services">AI Services</option>
          <option value="it-services">IT & Cloud Services</option>
          <option value="consulting">Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
          placeholder="Tell us about your project requirements..."
          aria-describedby="message-error"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300" role="alert">
          Thank you for your message! We&apos;ll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300" role="alert">
          There was an error sending your message. Please try again or contact us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-lg font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        aria-describedby="submit-status"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <LoadingSpinner size="sm" />
            Sending Message...
          </div>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};

export default ContactForm;