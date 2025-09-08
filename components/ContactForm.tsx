import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface FormData {
  name: string;
  email: string;
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
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
        message: '',
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
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"><option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-development">Mobile Development</option>
            <option value="ai-services">AI Services</option>
            <option value="cloud-solutions">Cloud Solutions</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your.email@company.com"
            aria-describedby="email-error"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200">{isSubmitting ? (
            <div className="flex items-center justify-center">
              <LoadingSpinner size="sm" />
              <span className="ml-2">Sending...</span>
            </div>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  )
};

export default ContactForm;
