import React, { useState } from &apos;react&apos;;
import { motion } from &apos;framer-motion&apos;;
import { Mail, Phone, MapPin, Send, CheckCircle } from &apos;lucide-react&apos;;

interface FormData {

  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({

    name: &apos;&apos;,
    email: &apos;&apos;,
    company: &apos;&apos;,
    service: &apos;&apos;,
    message: &apos;&apos;});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const services = [
    &apos;AI & Machine Learning&apos;,
    &apos;Cloud & DevOps&apos;,
    &apos;Cybersecurity&apos;,
    &apos;Web Development&apos;,
    &apos;Mobile Development&apos;,
    &apos;Data Analytics&apos;,
    &apos;Digital Transformation&apos;,
    &apos;Other&apos;,
  ];

  const validateForm = (): boolean => {

    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {

      newErrors.name = &apos;Name is required&apos;;
    }

    if (!formData.email.trim()) {

      newErrors.email = &apos;Email is required&apos;;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {

      newErrors.email = &apos;Email is invalid&apos;;
    }

    if (!formData.message.trim()) {

      newErrors.message = &apos;Message is required&apos;;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

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

      setIsSubmitted(false);
      setFormData({

        name: &apos;&apos;,
        email: &apos;&apos;,
        company: &apos;&apos;,
        service: &apos;&apos;,
        message: &apos;&apos;});
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {

    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {

      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className=&quot;bg-green-50 border border-green-200 rounded-xl p-8 text-center&quot;
      >
        <CheckCircle className=&quot;w-16 h-16 text-green-500 mx-auto mb-4&quot; />
        <h3 className=&quot;text-2xl font-bold text-green-800 mb-2&quot;>
          Message Sent!
        </h3>
        <p className=&quot;text-green-600&quot;>
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className=&quot;bg-white rounded-xl shadow-xl p-8&quot;>
      <div className=&quot;text-center mb-8&quot;>
        <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>Get In Touch</h2>
        <p className=&quot;text-gray-600 max-w-2xl mx-auto&quot;>
          Ready to transform your business? Let&apos;s discuss how our technology
          solutions can drive your success.
        </p>
      </div>

      <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8&quot;>
        <div>
          <h3 className=&quot;text-xl font-semibold text-gray-900 mb-4&quot;>
            Contact Information
          </h3>
          <div className=&quot;space-y-4&quot;>
            <div className=&quot;flex items-center space-x-3&quot;>
              <Mail className=&quot;w-5 h-5 text-blue-600&quot; />
              <div>
                <p className=&quot;font-medium text-gray-900&quot;>Email</p>
                <p className=&quot;text-gray-600&quot;>kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className=&quot;flex items-center space-x-3&quot;>
              <Phone className=&quot;w-5 h-5 text-blue-600&quot; />
              <div>
                <p className=&quot;font-medium text-gray-900&quot;>Phone</p>
                <p className=&quot;text-gray-600&quot;>+1 (302) 464-0950</p>
              </div>
            </div>
            <div className=&quot;flex items-center space-x-3&quot;>
              <MapPin className=&quot;w-5 h-5 text-blue-600&quot; />
              <div>
                <p className=&quot;font-medium text-gray-900&quot;>Address</p>
                <p className=&quot;text-gray-600&quot;>
                  364 E Main St STE 1008
                  <br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <div>
              <label
                htmlFor=&quot;name&quot;
                className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;
              >
                Full Name *
              </label>
              <input
                type=&quot;text&quot;
                id=&quot;name&quot;
                name=&quot;name&quot;
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${

                  errors.name ? &apos;border-red-500&apos; : &apos;border-gray-300&apos;
                }`}
                placeholder=&quot;John Doe&quot;
              />
              {errors.name && (
                <p className=&quot;text-red-500 text-sm mt-1&quot;>{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor=&quot;email&quot;
                className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;
              >
                Email Address *
              </label>
              <input
                type=&quot;email&quot;
                id=&quot;email&quot;
                name=&quot;email&quot;
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${

                  errors.email ? &apos;border-red-500&apos; : &apos;border-gray-300&apos;
                }`}
                placeholder=&quot;john@company.com&quot;
              />
              {errors.email && (
                <p className=&quot;text-red-500 text-sm mt-1&quot;>{errors.email}</p>
              )}
            </div>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <div>
              <label
                htmlFor=&quot;company&quot;
                className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;
              >
                Company
              </label>
              <input
                type=&quot;text&quot;
                id=&quot;company&quot;
                name=&quot;company&quot;
                value={formData.company}
                onChange={handleChange}
                className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                placeholder=&quot;Your Company&quot;
              />
            </div>

            <div>
              <label
                htmlFor=&quot;service&quot;
                className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;
              >
                Service Interest
              </label>
              <select
                id=&quot;service&quot;
                name=&quot;service&quot;
                value={formData.service}
                onChange={handleChange}
                className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
              >
                <option value=&quot;&quot;>Select a service</option>
                {services.map(service => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor=&quot;message&quot;
              className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;
            >
              Message *
            </label>
            <textarea
              id=&quot;message&quot;
              name=&quot;message&quot;
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${

                errors.message ? &apos;border-red-500&apos; : &apos;border-gray-300&apos;
              }`}
              placeholder=&quot;Tell us about your project and how we can help...&quot;
            />
            {errors.message && (
              <p className=&quot;text-red-500 text-sm mt-1&quot;>{errors.message}</p>
            )}
          </div>

          <motion.button
            type=&quot;submit&quot;
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 ${

              isSubmitting ? &apos;opacity-50 cursor-not-allowed&apos; : &apos;&apos;
            }`}
          >
            {isSubmitting ? (
              <>
                <div className=&quot;animate-spin rounded-full h-5 w-5 border-b-2 border-white&quot;></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className=&quot;w-5 h-5&quot; />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
