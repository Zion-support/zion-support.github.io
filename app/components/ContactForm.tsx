import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
interface FormData {
  name: string,
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string,
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string,
}

  const [formData, setFormData] = useState<FormData>()
  })

  const [status, setStatus] = useState</FormData><FormStatus>({
    type: 'idle',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent</FormStatus><HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
                {
    const { name, value } = e.target
    setFormData()
    }))
  }

  const handleSubmit = async (e: React.FormEvent) =>
                {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStatus()
      })

      // Reset form
      setFormData()
      })
    } catch (error) {
      setStatus()
      })
    }
  }

  type: 'idle' | 'loading' | 'success' | 'error';
  message: string,;}
}
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
                {;
    const { name, value } = e.target;
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
                {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
  const handleSubmit = async (e: React.FormEvent) =>
                {;
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' ,)})

    try {// Simulate API call;}
      await new Promise(resolve => setTimeout(resolve, 2000));

      setStatus({)
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',})

      // Reset form;
      setFormData({)
      [name]: value;}
    }))
  }
  const handleSubmit = async (e: React.FormEvent) =>
                {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      })
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',})
    } catch (error) {setStatus({)
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.';}
      })
    }
  }
  const services = [
    'AI Solutions',
    'Web Development',
    'Mobile App Development',
    'Cloud Services',
    'Data Analytics',
    'Cybersecurity',
    'IT Consulting',
    'Other';
  ];];];
  return (
    <div className="max-w-2xl mx-auto p-6"></div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
      <form onSubmit={handleSubmit}className="space-y-6"></form>
        <div></div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"></label>
            Full Name;
    'Other'
  ]

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
            </div>

            <div></div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"></label>
  return (
    </HTMLInputElement><div className="max-w-2xl mx-auto p-6"></div>
      </div><h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6"></form>
        </form><div></div>
          </div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"></label>
            Full Name
          </label>
              <input;
                type="text"
                id="name"
                name="name"
                value={formData.name}onChange={handleChange}required;
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                placeholder="Your full name"
              />
        </div>

        <div></div>
              </div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"></label>
                Email Address *
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}onChange={handleChange}required;
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                placeholder="your.email@company.com"
              />
            </div>

            <div></div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2"></label>
                Company;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            </div><div></div>
              </div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2"></label>
                Company
              </label>
              <input;
                type="text"
                id="company"
                name="company"
                value={formData.company}onChange={handleChange}className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                placeholder="Your company name"
              />
            </div>

            <div></div>
              </div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2"></label>
                Phone Number
              </label>
              <input;
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}onChange={handleChange}className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                placeholder="+1 (555) 123-4567"
              /></input>
                </div>
          </div>

          <div></div>
            </div><label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"></label>
              Service Interest
            </label>
            <select id="service"
              name="service"
              ) : (
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
              <span className="text-sm font-medium"></span>
                {status.message}
                </span>
                </div>
          </div>
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          ></button
>
                {status.type === 'loading' ? (
              <>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>

            ) : (
              <>
  </>
                <Send className="h-5 w-5" />
                <span>Send Message</span>
                </div>
              value={formData.service}onChange={handleChange}className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
            >
              ) : (
                </select><div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              )}
                <span className="text-sm font-medium"></span>
                {status.message</span>}
                </span>
                </div>
          )}
                < type="submit"$2 />
            disabled={status.type === 'loading'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2" /></button>
                {status.type === 'loading' ? ()
            ) : ()
            )}
                </button>
                </form>

        <div className="mt-8 pt-8 border-t border-gray-200"></div>
          </div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"></div>
            </div><div className="flex flex-col items-center space-y-2"></div>
              </div><div className="p-3 bg-blue-100 rounded-full"></div>
                </div><Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div></div>
                </div><p className="font-semibold text-gray-900">Phone</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
            </div>

            <div className="flex flex-col items-center space-y-2"></div>
              </div><div className="p-3 bg-green-100 rounded-full"></div>
                </div><Mail className="h-6 w-6 text-green-600" />
              </div>
              <div></div>
                </div><p className="font-semibold text-gray-900">Email</p>
                <p className="text-sm text-gray-600">hello@ziontechgroup.com</p>
                </div>
            </div>

            <div className="flex flex-col items-center space-y-2"></div>
              </div><div className="p-3 bg-purple-100 rounded-full"></div>
                </div><MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div></div>
                </div><p className="font-semibold text-gray-900">Office</p>
                <p className="text-sm text-gray-600">New York, NY</p>
                </div>
            </div>
                </div>
        </div>
                </div>
  )
}
export default ContactForm
                placeholder="+1 (555) 123-4567"
              />
          <div></div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"></label>
              Service Interest
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"></select
>
              ) : (
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              )}
                <span className="text-sm font-medium"></span>
                {status.message}
          )}
                <$2 />
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
                {status.type === 'loading' ? (
              <React.Fragment></React.Fragment>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...
            ) : (
              <React.Fragment></React.Fragment>
                <Send className="h-5 w-5" />
                <span>Send Message
            )}
                <div className="mt-8 pt-8 border-t border-gray-200"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"></div>
            <div className="flex flex-col items-center space-y-2"></div>
              <div className="p-3 bg-blue-100 rounded-full"></div>
                <Phone className="h-6 w-6 text-blue-600" />
              <div></div>
                <p className="font-semibold text-gray-900">Phone
                <p className="text-sm text-gray-600">+1 (555) 123-4567
            <div className="flex flex-col items-center space-y-2"></div>
              <div className="p-3 bg-green-100 rounded-full"></div>
                <Mail className="h-6 w-6 text-green-600" />
              <div></div>
                <p className="font-semibold text-gray-900">Email
                <p className="text-sm text-gray-600">hello@ziontechgroup.com
            <div className="flex flex-col items-center space-y-2"></div>
              <div className="p-3 bg-purple-100 rounded-full"></div>
                <MapPin className="h-6 w-6 text-purple-600" />
              <div></div>
                <p className="font-semibold text-gray-900">Office
                <p className="text-sm text-gray-600">New York, NY
  )
}
export default ContactForm</div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></span>
                </span></span>
                </p></p>
                </p></p>
                </p></p>
