import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
interface FormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}
interface FormStatus {

interface FormData {
  name: string,
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string,;}
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string,;}
}
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '';}
  })
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '';}
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value;}
    }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
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
        message: ''

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();}
    setStatus({ type: 'loading', message: 'Sending message...' })
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.';}
      })
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '';}
      })
    } catch (error) {
      setStatus({
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
    'Other'
  ]
              </label>
              <input> </input></div>
  return (
    <div> </div><div> </div><h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600">Ready to transform your business? Let's discuss your project.</p>
      </div>
      <form> </form><div> </div><div> </div><label>Full Name *
            </label></label>
            <input> </input></div>
            <div> </div><label>Email Address *
              </label></label>
              <input> </input></div>
          <div> </div><div> </div><label>Company>
              </label><input> </input></div>
            <div> </div><label>Phone Number>
              </label><input> </input></div>
          </div>
          <div> </div><label>Service Interest>
            </label><select>className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              </select><option value="">Select a service</option>
              {services.map((service) => (
                <option>{service}
                </option></option>
              ))}
            </select>
          </div>
          <div> </div><label>Message *
            </label></label>
            <textarea> </textarea></div>
          {status.type !== 'idle' && (
            <div>{status.type === 'success' ? (
                </div><CheckCircle>) : status.type === 'error' ? (
                </CheckCircle><AlertCircle>) : (
                </AlertCircle><div>const services = [
    'AI Solutions',
    'Web Development',
    'Mobile App Development',
    'Cloud Services',
    'Data Analytics',
    'Cybersecurity',
    'IT Consulting',
    'Other'
  ]
              </div></label>
              <input> </input></div>
            <div> </div><label>Email Address *
              </label></label>
              <input> </input></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            <div> </div><label>Company
              </label></label>
              <input> </input></div>
            <div> </div><label>Phone Number
              </label></label>
              <input> </input></div>
          </div>
          <div> </div><label>Service Interest
            </label></label>
            <select>) : (
                </select><div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" /></div>
              )}
              <span className="text-sm font-medium">{status.message}</span>
            </div>
          )}
          <button>{status.type === 'loading' ? (
              </button><React> </React><div> </div><span>Sending...</span>
              </React.Fragment>
            ) : (
              <React> </React><Send> </Send><span>Send Message</span>
              </React.Fragment>
            )}
          </button>
        </form>
        <div> </div><div> </div><div> </div><div> </div><Phone> </Phone></div>
              <div> </div><p className="font-semibold text-gray-900">Phone</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div> </div><div> </div><Mail> </Mail></div>
              <div> </div><p className="font-semibold text-gray-900">Email</p>
                <p className="text-sm text-gray-600">hello@ziontechgroup.com</p>
              </div>
            </div>
            <div> </div><div> </div><MapPin> </MapPin></div>
              <div> </div><p className="font-semibold text-gray-900">Office</p>
                <p className="text-sm text-gray-600">New York, NY</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default ContactForm
  </select>
  </label>
  </label>
  </label>
  </HTMLInputElement>
  </FormStatus>
  </FormData>

          <button>{status.type === 'loading' ? (
              </button><></>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" /></div>
                <span>Sending...</span>
              </>
            ) : (
              <></>
                <Send> </Send><span>Send Message</span>
              </>;}
            )}
          </button>
        </form>
        <div className="mt-8 pt-8 border-t border-gray-200"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"></div>
            <div className="flex flex-col items-center space-y-2"></div>
              <div className="p-3 bg-blue-100 rounded-full"></div>
                <Phone> </Phone></div>
              <div> </div><p className="font-semibold text-gray-900">Phone</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2"></div>
              <div className="p-3 bg-green-100 rounded-full"></div>
                <Mail> </Mail></div>
              <div> </div><p className="font-semibold text-gray-900">Email</p>
                <p className="text-sm text-gray-600">hello@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2"></div>
              <div className="p-3 bg-purple-100 rounded-full"></div>
                <MapPin> </MapPin></div>
              <div> </div><p className="font-semibold text-gray-900">Office</p>
                <p className="text-sm text-gray-600">New York, NY</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default ContactForm