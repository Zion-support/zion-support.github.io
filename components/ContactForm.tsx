
=======
import React, { useState } from 'react;
import LoadingSpinner from ./LoadingSpinner';

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
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
    name: ',
    email: ',
    company: ',
    phone: ',
    service: ',
    message: '
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle | success' | 'error>(idle');


  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle | success' | 'error>(idle')
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
=======
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

        message: '
      })
    } catch {
      setSubmitStatus(error')


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus(success');
      setFormData({
        name: ',
        email: ',
        company: ',
        phone: ',
        service: ',
        message: '
      });
    } catch (error) {
      setSubmitStatus('error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto>
      <form onSubmit={handleSubmit} className=space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
          <div>
            <label htmlFor=name" className="block text-sm font-medium text-gray-700 mb-2>
              Full Name *
            </label>
            <input
              type=text"
              id="name
              name=name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            />
          </div>
          <div>
            <label htmlFor=email" className="block text-sm font-medium text-gray-700 mb-2>
              Email Address *
            </label>
            <input
              type=email"
              id="email
              name=email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            />
          </div>
        </div>

        <div className=grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company className=block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text
              id=company"
              name="company
              value={formData.company}
              onChange={handleChange}
              className=w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone className=block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel
              id=phone"
              name="phone
              value={formData.phone}
              onChange={handleChange}
              className=w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service className=block text-sm font-medium text-gray-700 mb-2">
            Service Interest
          </label>
          <select
            id="service
            name=service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          >
            <option value=">Select a service</option>
            <option value="ai-services>AI Services</option>
            <option value=micro-saas">Micro SaaS Development</option>
            <option value="cloud-solutions>Cloud Solutions</option>
            <option value=cybersecurity">Cybersecurity</option>
            <option value="data-analytics>Data Analytics</option>
            <option value=enterprise-support">Enterprise Support</option>
            <option value="other>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor=message" className="block text-sm font-medium text-gray-700 mb-2>
            Message *
          </label>
          <textarea
            id=message"
            name="message
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className=w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tell us about your project or requirements...
          />
        </div>

        {submitStatus === success' && (
          <div className=bg-green-50 border border-green-200 rounded-md p-4">
            <div className="flex>
              <div className=flex-shrink-0">
                <svg className="h-5 w-5 text-green-400 viewBox=0 0 20 20" fill="currentColor>
                  <path fillRule=evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z clipRule=evenodd" />
                </svg>
              </div>
              <div className="ml-3>
                <p className=text-sm font-medium text-green-800">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            </div>
          </div>
        )}

        {submitStatus === 'error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4>
            <div className=flex">
              <div className="flex-shrink-0>
                <svg className=h-5 w-5 text-red-400" viewBox="0 0 20 20 fill=currentColor">
                  <path fillRule="evenodd d=M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd />
                </svg>
              </div>
              <div className=ml-3">
                <p className="text-sm font-medium text-red-800>
                  Sorry, there was an error sending your message. Please try again.
                </p>
              </div>
            </div>
          </div>
        )}

        <button
          type=submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed
        >
          {isSubmitting ? (
            <>
              <LoadingSpinner />
              <span className=ml-2">Sending...</span>
            </>
          ) : (
            Send Message'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
          )}
        </button>;
      </form>;
    </div>;
  );

      setSubmitStatus('success);
    } catch {
      setSubmitStatus(error');
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
            <option value="consulting>Consulting</option>;
            <option value=other">Other</option>;
          </select>;
        </div>;
        <button
          type="submit
          disabled={isSubmitting}
          className=w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200">;
          {isSubmitting ? (;
            <div className="flex items-center justify-center>;
              <LoadingSpinner size=sm" />;
              <span className="ml-2>Sending...</span>;
            </div>;
          ) : (;
            'Send Message';
          )}
        </button>;
      </form>;
    </div>;
  );


  if (isSubmitted) {
    return (
      <div className=bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 />
        <h3 className=text-2xl font-bold text-green-800 mb-2">
          Message Sent!
        </h3>
        <p className="text-green-600>
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <div className=bg-white rounded-xl shadow-xl p-8">
      <div className="text-center mb-8>
        <h2 className=text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto>
          Ready to transform your business? Let&apos;s discuss how our
          technology solutions can drive your success.
        </p>
      </div>
      <div className=grid grid-cols-1 lg: grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4>
            Contact Information
          </h3>
          <div className=space-y-4">
            <div className="flex items-center space-x-3>
              <Mail className=w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900>Email</p>
                <p className=text-gray-600">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3>
              <Phone className=w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900>Phone</p>
                <p className=text-gray-600">+1 (302) 464-0950</p>
              </div>
            </div>
            <div className="flex items-center space-x-3>
              <MapPin className=w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900>Address</p>
                <p className=text-gray-600">
                  364 E Main St STE 1008
                  <br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6>
          <div className=grid grid-cols-1 md: grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name
                className=block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text
                id=name"
                name="name
                value={formData.name}
                onChange={handleChange}
                required
                className=w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name
              />
            </div>
            <div>
              <label
                htmlFor=email"
                className="block text-sm font-medium text-gray-700 mb-2
              >
                Email Address *
              </label>
              <input
                type=email"
                id="email
                name=email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                placeholder=your@email.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4>
            <div>
              <label
                htmlFor=company"
                className="block text-sm font-medium text-gray-700 mb-2
              >
                Company
              </label>
              <input
                type=text"
                id="company
                name=company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                placeholder=Your company name"
              />
            </div>
            <div>
              <label
                htmlFor="service
                className=block text-sm font-medium text-gray-700 mb-2"
              >
                Service Interest
              </label>
              <select
                id="service
                name=service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
              >
                <option value=">Select a service</option>
                <option value="ai-solutions>AI Solutions</option>
                <option value=cloud-services">Cloud Services</option>
                <option value="cybersecurity>Cybersecurity</option>
                <option value=consulting">Consulting</option>
                <option value="other>Other</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor=message"
              className="block text-sm font-medium text-gray-700 mb-2
            >
              Message *
            </label>
            <textarea
              id=message"
              name="message
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className=w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about your project or requirements...
            />
          </div>
          <button
            type=submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2
          >
            {isSubmitting ? (
              <>
                <div className=animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
  );
}

export default ContactForm;
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
