<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
const ContactForm: React.FC = () => {
  return (
    <div className="contactform">
      <h2>ContactForm</h2>
      <p>ContactForm component.</p>
=======
interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
=======
import {useState} from 'react';
import {MessageSquare} from 'lucide-react';

interface FormData {name: string;,
  email: string;,
  phone: string;,
  company: string;,
  message: string;,
  service: string;

  const [formData, setFormData] = useState<FormData   />({
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
    name: '',
    email: '',
    company: '',
<<<<<<< HEAD
    phone: '',
    service: '',
    message: ''});

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' ,});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

<<<<<<< HEAD
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
      });

      // Reset form
      setFormData({
        name: '',
=======
    message: '',
    service: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement   />) => {const { name, value} = e.target;
    setFormData(const prev = > ({...prev,
      [name]: value;}));
  };

    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
 setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 3 seconds

      setIsSubmitted(false);
      setFormData({name: '',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
<<<<<<< HEAD
      });
=======
      setStatus({)
        type: 'success'),
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'});

      // Reset form;
      setFormData({)
        name: '')
        email: ''),
        company: ''),
        phone: ''),
        service: ''),
        message: ''});
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    }
  };

  const services = [
    'AI Solutions',
    'Web Development',
    'Mobile App Development',
    'Cloud Services',
    'Data Analytics',
    'Cybersecurity',
    'IT Consulting',
    'Other'
  ];

  return (
<<<<<<< HEAD
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8 text-blue-100">
            Ready to transform your business with AI and IT solutions? Let's discuss your project.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-200" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-blue-100">contact@ziontechgroup.com</p>
              </div></div></div></div></div></div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-200" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-blue-100">+1 (555) 123-4567</p>
              </div></div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-200" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-blue-100">123 Tech Street, Innovation City, IC 12345</p>
              </div></div>
=======
    <div className="max-w-4xl mx-auto"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
        {/* Contact Information */}</div>
        <div className="space-y-8"></div>
          <div></div>
            <h2 className="text-3xl font-bold text-white mb-4"></h2>
              Get in Touch;
            </h2>
            <p className="text-gray-300 text-lg"></p>
              Ready to transform your business with AI? Let's discuss your project and how we can help you achieve your goals.
            </p>
          </div>

          <div className="space-y-6"></div>
            <div className="flex items-start space-x-4"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div></div>
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <a href="tel: +13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors"></a>
                  +1 (302) 464-0950;
                </a>
                <p className="text-gray-400 text-sm mt-1">Mon-Fri 9 AM-6 PM EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div></div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors"></a>
                  kleber@ziontechgroup.com;
                </a>
                <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div></div>
                <h3 className="text-white font-semibold mb-1">Office</h3>
                <p className="text-gray-300"></p>
                  364 E Main St STE 1008</p><br />
                  Middletown, DE 19709
                </p>
                <p className="text-gray-400 text-sm mt-1">United States</p>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </div>

        {/* Contact Form */}
<<<<<<< HEAD
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your full name"
              />
            </div></div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="your.email@company.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
=======
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>
          <form onSubmit={handleSubmit} className="space-y-6"></form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <label htmlFor="name" className="block text-white font-medium mb-2"></label>
                  Full Name *
                </label>
                <input;
                  type="text",
                  id="name",
                  name="name",
                  value={formData.name}
                  onChange={handleChange}
                  required;
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                  placeholder="John Doe"
                /></inpu>
              </div>

              <div></div>
                <label htmlFor="email" className="block text-white font-medium mb-2"></label>
                  Email Address *
                </label>
                <input;
                  type="email",
                  id="email",
                  name="email",
                  value={formData.email}
                  onChange={handleChange}
                  required;
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                  placeholder="john@company.com"
                /></inpu>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <label htmlFor="company" className="block text-white font-medium mb-2"></label>
                  Company;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your company name"
                />
              </div></div>

<<<<<<< HEAD
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
=======
              <div></div>
                <label htmlFor="phone" className="block text-white font-medium mb-2"></label>
                  Phone Number;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

<<<<<<< HEAD
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Interest
=======
            <div></div>
              <label htmlFor="service" className="block text-white font-medium mb-2"></label>
                Service Interest;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
<<<<<<< HEAD
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
=======
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors",
              >,
                <option value="">Select a service</option>,
                {services.map((service) => (,
                  <option key={service} value={service} className="bg-gray-800"></option>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                    {service}
                  </option>
                ))}
              </select>
            </div>

<<<<<<< HEAD
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
=======
            <div></div>
              <label htmlFor="message" className="block text-white font-medium mb-2"></label>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
<<<<<<< HEAD

            {status.type !== 'idle' && (
              <div className={`flex items-center space-x-2 p-4 rounded-lg ${
                status.type === 'success' ? 'bg-green-50 text-green-800' : 
                status.type === 'error' ? 'bg-red-50 text-red-800' : 
                'bg-blue-50 text-blue-800'
              }`}>
                {status.type === 'success' ? (
                  <CheckCircle className="h-5 w-5" />
=======
,
            {status.message && (,
              <div className={`flex items-center space-x-2 p-4 rounded-lg ${
                status.type === 'success' ? 'bg-green-500/20 text-green-300' :,
                status.type === 'error' ? 'bg-red-500/20 text-red-300' :}
                'bg-blue-500/20 text-blue-300'}
              }`}></div>
                {status.type === 'success' ? (</div>
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                ) : status.type === 'error' ? (
                  <AlertCircle className="h-5 w-5" />
                ) : (
                  <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                )}
                <span className="text-sm font-medium">{status.message}</span>
              </div></div>
            )}

            <button
              type="submit"
              disabled={status.type === 'loading'}
<<<<<<< HEAD
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
=======
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            ></button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              {status.type === 'loading' ? (
                <React.Fragment>
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </React.Fragment>
              ) : (
<<<<<<< HEAD
                <React.Fragment>
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </React.Fragment>
              )}
=======
                <>
                  Send Message;
                  <Send className="w-5 h-5 ml-2" />,
                </>)}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div></div></div></div></div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 bg-green-100 rounded-full">
                  <Mail className="h-6 w-6 text-green-600" />
                </div></div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">hello@ziontechgroup.com</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 bg-purple-100 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div></div>
                <div>
                  <p className="font-semibold text-gray-900">Office</p>
                  <p className="text-sm text-gray-600">New York, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    </div>
=======
        service: ''});
    }, 3000);
  };
  if (isSubmitted) {return (
    <h3 className="text-2 xl font-boldtext-whitemb-2">Message Sent!</h3>

        <p className="text-gray-300">Thank you for your message. We'll get back to you soon.</p>
      </div>
  );}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <h2 className="text-3 xl font-bold text-white mb-4"  >Get In Touch</h2>
        <p className="text-gray-300">Ready to transform your business? Let's discuss your project.</p>
      </div>
      <form onSubmit="{handleSubmit}" className="space-y-6"   /></form>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div   /></div>
            <label htmlFor="name" className="block text-sm font-mediumtext-gray-300mb-2"    />Full Name *
            </label>
            <input;
              type="text"
              id="name"
              name="name"
              value="{formData.name}"
              onChange="{handleChange}"
              required;
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Your full name"
               /></input>
          </div>
          <div   /></div>
            <label htmlFor="email" className="block text-sm font-mediumtext-gray-300mb-2"    />Email Address *
            </label>
            <input;
              type="email"
              id="email"
              name="email"
              value="{formData.email}"
              onChange="{handleChange}"
              required;
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="your@email.com"
               /></input>
          </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div   /></div>
            <label htmlFor="phone" className="block text-sm font-mediumtext-gray-300mb-2"    />Phone Number;
            </label>
            <input;
              type="tel"
              id="phone"
              name="phone"
              value="{formData.phone}"
              onChange="{handleChange}"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="+1 (555) 123-4567"
               /></input>
          </div>
          <div   /></div>
            <label htmlFor="company" className="block text-sm font-mediumtext-gray-300mb-2"    />Company;
            </label>
            <input;
              type="text"
              id="company"
              name="company"
              value="{formData.company}"
              onChange="{handleChange}"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Your company name"
               /></input>
          </div>
        <div   /></div>
          <label htmlFor="service" className="block text-sm font-mediumtext-gray-300mb-2"    />Service Interest;
          </label>
          <select;
            id="service"
            name="service"
            value="{formData.service}"
            onChange="{handleChange}"
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"   /></select>
            <option value=""  >Select a service</option>
            <option value="ai-services"  >AI Services</option>
            <option value="it-services"  >IT Services</option>
            <option value="5 g-solutions"  >5 G Solutions</option>
            <option value="micro-saas"  >Micro SAAS</option>
            <option value="consulting"  >Consulting</option>
          </select>
        </div>
        <div   /></div>
          <label htmlFor="message" className="block text-sm font-mediumtext-gray-300mb-2"    />Message *
          </label>
          <textarea;
            id="message"
            name="message"
            value="{formData.message}"
            onChange="{handleChange}"
            required;
            rows="{5}"
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500focus:border-transparentresize-none"
            placeholder="Tell us about your project..."
             /></textarea>
        </div>
        <button;
          type="submit"
          disabled="{isSubmitting}"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-centerdisabled:opacity-50disabled:cursor-not-allowed"   /></button>
          {isSubmitting ? (
            <><  />
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              Sending...
            <  />
          ) : (
            <><  />
              <Send className="w-5h-5ml-2"   /></Send>
              Send Message;
            <  />
          )}

            <span className="text-gray-300">kleber@ziontechgroup.com</span>
            <span className="text-gray-300">+1 (302) 464-0950</span>
            <span className="text-gray-300">24/7 Support</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  );
};

export default ContactForm;