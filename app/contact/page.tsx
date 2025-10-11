'use client'
import { Helmet } from 'react-helmet-async'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [status, setStatus] = useState({
    type: 'idle',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })
    
    // Simulate API call
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Message sent successfully!' })
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 2000)
  }

const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'info@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      details: 'New York, NY',
      description: 'Visit our headquarters'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: '24/7 Support',
      description: 'We are always here to help'
    }
  ]

  return (
    <div>

    <div>
  
      <Helmet>
  
        <title>Contact Us - Zion Tech Group</title>
        <meta>
  
      </Helmet>
      
      <Navigation>
  
      <main>
  
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h1>
  
                Contact <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Us</span>
              </h1>
              <p>
  
                Ready to transform your business? Get in touch with our experts and let's discuss your project.
              </p>
            </div>

            <div>
  
              {/* Contact Form */}
              <div>
  
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                
                {status.type === 'success' && (
                  <div>
  
                    <CheckCircle>
  
                    {status.message}
                  </div>
                )}

                <form>
  
                  <div>
  
                    <div>
  
                      <label>
  
                        Full Name *
                      </label>
                      <input>
  
                    </div>
                    <div>
  
                      <label>
  
                        Email Address *
                      </label>
                      <input>
  
                    </div>
                  </div>

                  <div>
  
                    <div>
  
                      <label>
  
                        Company
                      </label>
                      <input>
  
                    </div>
                    <div>
  
                      <label>
  
                        Phone Number
                      </label>
                      <input>
  
                    </div>
                  </div>

                  <div>
  
                    <label>
  
                      Service Interest
                    </label>
                    <select>
  
                      <option value="">Select a service</option>
                      <option value="ai-services">AI Services</option>
                      <option value="it-services">IT Services</option>
                      <option value="cloud-services">Cloud Services</option>
                      <option value="micro-saas">Micro SAAS</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="5g-implementation">5G Implementation</option>
                    </select>
                  </div>

                  <div>
  
                    <label>
  
                      Message *
                    </label>
                    <textarea>
  
                  </div>

                  <button>
  
                    {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                    <Send>
  
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
  
                <div>
  
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
                  <p>
  
                    We're here to help you succeed. Reach out to us through any of the channels below, and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div>
  
                  {contactInfo.map((info, index) => (
                    <div>
  
                      <div>
  
                        {info.icon}
                      </div>
                      <div>
  
                        <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-900 font-medium">{info.details}</p>
                        <p className="text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer>
  
    </div>
  )
}
