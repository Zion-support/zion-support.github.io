<<<<<<< HEAD
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
interface FormData {}
=======
import React, { useState } from 'react;

import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from lucide-react;

interface FormData {
>>>>>>> origin/main
  name: string;

  email: string;

  company: string;

  phone: string;

  service: string;

  message: string;

}

<<<<<<< HEAD
interface FormStatus {}
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
  messag,
    e: string}
;
const ContactForm: React.FC = () => {const [formData, setFormData] = useState<FormData>({}
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '')
  });
    message: ''
  })
;
const [status, setStatus] = useState<FormStatus>({}
  const [status, setStatus] = useState<FormStatus>({}
    type: 'idle',
    message: '')
  });
    message: ''
  })
=======
interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error;

  message: string;

};

const ContactForm: React.FC = () => {const [formData, setFormData] = useState<FormData>({
    name: ',
    email: ',
    company: ',
    phone: ',
    service: ',
    message: ')
  });

;

const [status, setStatus] = useState<FormStatus>({
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle,
    message: ')
  });

>>>>>>> origin/main
;

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;;

const { name, value } = e.target;
<<<<<<< HEAD
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
    const { name, value } = e.target;
    setFormData(prev = "> ({}"
      ...prev,
      [name]: value;
    }))
;
const handleSubmit = async (e: React.FormEvent) => {}
    e.preventDefault();
    setStatus({ typ,
    e: 'loading', message: 'Sending message...' });
    try {}
      /
      await new Promise(resolve = "> setTimeout(resolve, 2000));"
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {}
      // Simulate API call;
      await new Promise(resolve = "> setTimeout(resolve, 2000))"
      setStatus({}
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      })
      
      // Reset form;
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.')
      });
      /
      setFormData({}
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })} catch (error) {}
        message: '')
      });
    } catch (error) {}
      setStatus({}
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.')
      });
        message: 'Sorry, there was an error sending your message. Please try again.'
      })
  }
const services = []
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    'DevOps',
    'IT Consulting',
    'Other'
  ];
  return (
    <div className=""max-w-2xl mx-auto"></div>"
      <div className=""bg-white rounded-lg shadow-lg p-8"></div>"
        <div className=""text-center mb-8"></div>"
          <h2 className=""text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>"
          <p className=""text-gray-600"></p>"
            Ready to transform your business? Let's discuss your project and how we can help.
          </p>
        </div>
        <form onSubmit={handleSubmit} className=""space-y-6"></form>"
          <div className=""grid md:grid-cols-2 gap-6"></div>"
            <div></div>
              <label htmlFor="name" className=""block text-sm font-medium text-gray-700 mb-2"></label>"
                Full Name *
              </label>
              <
              <input type=""text"></input>"
                id=""name""
                name=""name""
                value="{formData.name}"
                onChange="{handleChange}"
                required;
                className=""w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                placeholder=""Your full name""
              />
            </div>
                value = "{ formData.name };"
                onChange = "{ handleChange };"
                className=""w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focu,""
    s:border-transparent transition-all duration-200"
                placeholder=""Your full name""
            <

            <div></div>
              <label htmlFor="email" className=""block text-sm font-medium text-gray-700 mb-2"></label>"
                Email Address *
              <
              <input type=""email"></input>"
                id=""email""
                name=""email""
                value="{formData.email}"
                onChange="{handleChange}"
                required;
                className=""w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                placeholder=""your.email@example.com""
              />
            </div>
          </div>
          <div className=""grid md:grid-cols-2 gap-6"></div>"
                value = "{ formData.email };"
                onChange = "{ handleChange };"
                className=""w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200""
                placeholder=""your.email@company.com""
            <

          <div className=""grid grid-cols-1 m,"></div>"
    d:grid-cols-2 gap-6">
            <div></div>
              <label htmlFor="company" className=""block text-sm font-medium text-gray-700 mb-2"></label>"
              <
              <input type=""text"></input>"
                id=""company""
                name=""company""
                value="{formData.company}"
                onChange="{handleChange}"
                className=""w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                placeholder=""Your company name""
              />
            </div>
                value = "{ formData.company };"
                onChange = "{ handleChange };"
                className=""w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focu,""
    s:border-transparent transition-all duration-200"
                placeholder=""Your company name""
            <

            <div></div>
              <label htmlFor="phone" className=""block text-sm font-medium text-gray-700 mb-2"></label>"
                Phone Number;
              <
              <input type=""tel"></input>"
                id=""phone""
                name=""phone""
                value="{formData.phone}"
                onChange="{handleChange}"
                className=""w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                value = "{ formData.phone };"
                onChange = "{ handleChange };"
                className=""w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focu,""
    s:border-transparent transition-all duration-200"
                placeholder=""+1 (555) 123-4567""
            <
          <

          <div></div>
            <label htmlFor="service" className=""block text-sm font-medium text-gray-700 mb-2"></label>"
              Service Interest;
            <
            <select id=""service"></select>"
              name=""service""
              value="{formData.service}"
              onChange="{handleChange}"
              className=""w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">"
              <option value=""">Select a service</option>"
              {services.map((service) => (
                <option key={service} value = "{service}></option>"
=======

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

const handleSubmit = async (e: React.FormEvent) => {;;

    e.preventDefault();

    setStatus({ typ,
    e: 'loading', message: Sending message... });

    try {
      /
      await new Promise(resolve => setTimeout(resolve, 2000));

      setStatus({
        type: 'success,
        message: 'Thank you! Your message has been sent successfully.
      })
      
      // Reset form
      setFormData({        name: ',
        email: ',
        company: ',
        phone: ',
        service: ',
        message: 
      })} catch (error) {
      setStatus({        type: 'error,
        message: 'Sorry, there was an error sending your message. Please try again.)
      });

  }

const services = [;;

    'AI & Machine Learning,
    'Cloud Computing,
    'Cybersecurity,
    'Web Development,
    'Mobile Development,
    'Data Analytics,
    'DevOps,
    'IT Consulting,
    Other
  ];

  return (

    <div className="max-w-2xl mx-auto>
      <div className="bg-white rounded-lg shadow-lg p-8>
        <div className="text-center mb-8>
          <h2 className="text-3xl font-bold text-gray-900 mb-4>Get In Touch</h2>
          <p className="text-gray-600>
            Ready to transform your business? Lets discuss your project and how we can help.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6>
          <div className="grid md:grid-cols-2 gap-6>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2>
                Full Name *
              </label>
              <input                type="text
                id="name
                name="name
                value={formData.name}

                onChange={handleChange}

                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                placeholder="Your full name
              />
            </div>
            <div>              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2>
                Email Address *
              <
              <input
                type="email
                id="email
                name="email
                value={formData.email}

                onChange={handleChange}

                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                placeholder="your.email@example.com
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6>
            <div>              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2>

              <
              <input
                type="text
                id="company
                name="company
                value={formData.company}

                onChange={handleChange}

                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                placeholder="Your company name
              />
            </div>
            <div>              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2>
                Phone Number
              <
              <input
                type="tel
                id="phone
                name="phone
                value={formData.phone}

                onChange={handleChange}

                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                placeholder="+1 (555) 123-4567              
            <
          <

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2>
              Service Interest
            <
            <select
              id="service
              name="service
              value={formData.service}

              onChange={handleChange}

              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
            >
              <option value=">Select a service</option>
              {services.map((service) => (

                <option key={service} value={service}>
>>>>>>> origin/main
                  {service}

                </option>
              ))
            </select>
          </div>
<<<<<<< HEAD
              value = "{ formData.service };"
              onChange = "{ handleChange };"
              className=""w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focu,""
    s:border-transparent transition-all duration-200">
              ) : (<div className=""h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin")></div>"
              )}
              <span className=""text-sm font-medium">{status.message}<"
            <
          )}

          <div></div>
            <label htmlFor="message" className=""block text-sm font-medium text-gray-700 mb-2"></label>"
              Message *
            </label>
            <textarea id=""message"></textarea>"
              name=""message""
              value="{formData.message}"
              onChange="{handleChange}"
              required;
              rows="{5}"
              className=""w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
              placeholder=""Tell us about your project and how we can help...""
=======
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2>
              Message *
            </label>
            <textarea
              id="message
              name="message
              value={formData.message}

              onChange={handleChange}

              required
              rows={5}

              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
              placeholder="Tell us about your project and how we can help...
>>>>>>> origin/main
            />
          </div>
          {status.message && (
<<<<<<< HEAD
            <div className="{`p-4 rounded-lg flex items-center ${></div>"
              status.type === 'success' 
                ? 'bg-green-100 text-green-800' 
                : status.type === 'error'
                ? 'bg-red-100 text-red-800'
                : 'bg-blue-100 text-blue-800'
            }`}>
              {status.type === 'success' ? (
                <CheckCircle className=""w-5 h-5 mr-2" /></CheckCircle>"
              ) : status.type === 'error' ? (
                <AlertCircle className=""w-5 h-5 mr-2" /></AlertCircle>"
=======

            <div className={p-4 rounded-lg flex items-center ${
              status.type === 'success 
                ? 'bg-green-100 text-green-800 
                : status.type === error
                ? bg-red-100 text-red-800
                : bg-blue-100 text-blue-800
            }}>
              {status.type === 'success ? (

                <CheckCircle className="w-5 h-5 mr-2 />
              ) : status.type === 'error ? (

                <AlertCircle className="w-5 h-5 mr-2 />
>>>>>>> origin/main
              ) : null}

              <span>{status.message}</span>
<<<<<<< HEAD
            </div>
          <button type=""submit"></button>"
            disabled={status.type === 'loading'}
            className=""w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">"
            {status.type === 'loading' ? (
              <>
                <div className=""animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>"
=======
            </div>          <button
            type="submit
            disabled={status.type === 'loading}

            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center
          >
            {status.type === 'loading ? (

              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2></div>
>>>>>>> origin/main
                Sending...
              </>
            ) : (

              <>
<<<<<<< HEAD
                Send Message;
                <Send className=""w-5 h-5 ml-2" /></Send>"
=======
                Send Message
                <Send className="w-5 h-5 ml-2 />
>>>>>>> origin/main
              </>);

          </button>
        </form>
<<<<<<< HEAD
        <div className=""mt-8 pt-8 border-t border-gray-200"></div>"
          <div className=""grid md:grid-cols-3 gap-6 text-center"></div>"
            <div className=""flex flex-col items-center"></div>"
              <Mail className=""w-6 h-6 text-blue-600 mb-2" /></Mail>"
              <span className=""text-sm font-medium text-gray-900">Email</span>"
              <span className=""text-sm text-gray-600">contact@ziontech.com</span>"
            </div>
            <div className=""flex flex-col items-center"></div>"
              <Phone className=""w-6 h-6 text-blue-600 mb-2" /></Phone>"
              <span className=""text-sm font-medium text-gray-900">Phone</span>"
              <span className=""text-sm text-gray-600">+1 (555) 123-4567</span>"
            </div>
            <div className=""flex flex-col items-center"></div>"
              <MapPin className=""w-6 h-6 text-blue-600 mb-2" /></MapPin>"
              <span className=""text-sm font-medium text-gray-900">Location</span>"
              <span className=""text-sm text-gray-600">San Francisco, CA</span>"
=======

        <div className="mt-8 pt-8 border-t border-gray-200>
          <div className="grid md:grid-cols-3 gap-6 text-center>
            <div className="flex flex-col items-center>
              <Mail className="w-6 h-6 text-blue-600 mb-2 />
              <span className="text-sm font-medium text-gray-900>Email</span>
              <span className="text-sm text-gray-600>contact@ziontech.com</span>
            </div>
            <div className="flex flex-col items-center>
              <Phone className="w-6 h-6 text-blue-600 mb-2 />
              <span className="text-sm font-medium text-gray-900>Phone</span>
              <span className="text-sm text-gray-600>+1 (555) 123-4567</span>
            </div>
            <div className="flex flex-col items-center>
              <MapPin className="w-6 h-6 text-blue-600 mb-2 />
              <span className="text-sm font-medium text-gray-900>Location</span>
              <span className="text-sm text-gray-600>San Francisco, CA</span>
>>>>>>> origin/main
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
            disabled = { status.type === 'loading' };
            className=""w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disable,""
    d:cursor-not-allowed flex items-center justify-center space-x-2">
            {status.type === 'loading' ? (<>
                <div className=""h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>"
                <span>Sending...<
              <)
            ) : (<>
                <Send className=""h-5 w-5"></Send>"
                <span>Send Message<
              <)
            )}
          <
        <

        <div className=""mt-8 pt-8 border-t border-gray-200"></div>"
          <div className=""grid grid-cols-1 md:grid-cols-3 gap-6 text-center"></div>"
            <div className=""flex flex-col items-center space-y-2"></div>"
              <div className=""p-3 bg-blue-100 rounded-full"></div>"
                <p className=""font-semibold text-gray-900">Phone<"
                <p className=""text-sm text-gray-600">+1 (555) 123-4567<"
              <
            <

            <div className=""flex flex-col items-center space-y-2"></div>"
              <div className=""p-3 bg-green-100 rounded-full"></div>"
                <p className=""font-semibold text-gray-900">Email<"
                <p className=""text-sm text-gray-600">hello@ziontechgroup.com<"
              <
            <

            <div className=""flex flex-col items-center space-y-2"></div>"
              <div className=""p-3 bg-purple-100 rounded-full"></div>"
                <p className=""font-semibold text-gray-900">Office<"
                <p className=""text-sm text-gray-600">New York, NY<"
              <
            <
          <
        <
    <
  );
}
export default ContactForm;
=======
  );}

export default ContactForm;
>>>>>>> origin/main
