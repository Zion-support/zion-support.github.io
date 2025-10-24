import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  
}

  name: strin,g;,
    email: strin,g;,
  phone: strin,g;,
    company: strin,g;,
  message: strin,g;,
    service: string;
  }

const ContactForm: React.FC = () => ,{,
  const [formData, setFormData] = useState<FormData>
    </FormData>({
    name: ','
    email: ','
    company: ','
    phone: ','
    service: ''
  },)
  const [status, setStatus] = useState<FormStatus>
    </FormStatus>({
    type: 'idle,',
    message: ''
  },)
  const handleInputChange = ($2: any) => ,{
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev;
      [name]: value;
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => ,{
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission;
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Reset form after 3 seconds;
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData(
  {
)
        name: ',',
        email: ',',
        phone: ',',
        company: ',',
        message: ',',
        service: '')
      },)
    }, 3000)
  }

  const services = [
    'AI Solutions'
    'Web Development'
    'Mobile Development'
    'Cloud Migration'
    'Cybersecurity'
    'Data Analytics'
    'DevOps',
    'Consulting'
  ]

  if (isSubmitted) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
    </di> </div><CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
    </CheckCircl> </CheckCircle><h3 className="text-xl font-semibold text-white mb-2">
    </h>Message Sent!</h3>
        <p className="text-gray-300">Thank you for reaching out. We&apos;ll get back to you soon.</p>
      
    
  )
  }

  return (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
    </di> </div><h2 className="text-2xl font-bold text-white mb-6">
    </h>Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
    </for> </form><div className="grid md: grid-cols-2 gap-6">
    </di>
          <div></div> </div><label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
    </labe>Full Name *
            </label></label>
            <inpu,t;
)
              type="text"
              id="name"
              name="name"
              value={formData.name}

              onChange={handleInputChange}

              required;
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus: ring-cyan-500 focus:border-transparent",,
              placeholder="Your full name"
            />
    </inpu> </input></div>
          <div></div> </div><label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
    </labe>Email Address *
            </label></label>
            <input;
              type="email"
              id="email"
              name="email"
              value={formData.email}

              onChange={handleInputChange}

              required;
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus: ring-cyan-500 focus:border-transparent",,
              placeholder="your@email.com"
            />
    </inpu> </input></div>
        </div>

        <div className="grid md: grid-cols-2 gap-6">
    </di>
          <div></div> </div><label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
    </labe>Phone Number;
            </label></label>
            <inpu,t;
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}

              onChange={handleChange}

              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus: ring-cyan-500 focus:border-transparent",,
              placeholder="+1 (555) 123-4567"
            />
    </inpu> </input></div>
          <div></div> </div><label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
    </labe>Company;
            </label></label>
            <input;
              type="text"
              id="company"
              name="company"
              value={formData.company}

              onChange={handleChange}

              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus: ring-cyan-500 focus:border-transparent",,
              placeholder="Your company name"
            />
    </inpu> </input></div>
        </div>
        <div></div> </div><label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
    </labe>Service Interest;
          </label></label>
          <select;
            id="service"
            name="service"
            value={formData.service}

            onChange={handleChange}

            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus: ring-cyan-500 focus:border-transparent"
          >
    </selec> </select><option value="">
    </optio>Select a service</option>

            {services.map((service, index) => (
              <option key={index} value={service} className="bg-gray-800">
    </optio>{service}

              </option></option>
            ))}

          </select>
        </div>
        <div></div> </div><label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
    </labe>Message *
          </label></label>
          <textare,a;
            id="message"
            name="message"
            value={formData.message}

            onChange={handleInputChange}

            required;
            rows={6}

        {status.message && (
          <div className={`p-4 rounded-lg flex items-center space-x-2 ${
            status.type === 'success' ? 'bg-green-50 text-green-800' :
            status.type === 'error' ? 'bg-red-50 text-red-800' :
            'bg-blue-50 text-blue-800'
          }`}>
    </textare>
            {status.type === 'success' && <CheckCircle className="w-5 h-5" />
    </CheckCircle>}

            {status.type === 'error' && <AlertCircle className="w-5 h-5" />
    </AlertCircle>}

            <span>
    </spa>{status.message}</span>
          </div>
        )}

        <button;
          type="submit"
          disabled={status.type === 'loading'}

          className="...">
    </butto>
          {status.type === 'loading' ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white">
    </di></div>
              <span>
    </spa>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
    </Send>
              <span>
    </spa>Send Message</span>
            </>
          )}

        </button>
      </form>

      <div className="...">
    </di>
        <div className="...">
    </di>
          <div className="...">
    </di>
            <Mail className="w-8 h-8 text-blue-600 mb-2" />
    </Mail>
            <h3 className="font-semibold text-gray-900">
    </h>Email</h3>
            <p className="text-gray-600">contact@ziontechgroup.com</p>
          </div>
          <div className="...">
    </di>
            <Phone className="w-8 h-8 text-blue-600 mb-2" />
    </Phone>
            <h3 className="font-semibold text-gray-900">
    </h>Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="...">
    </di>
            <MapPin className="w-8 h-8 text-blue-600 mb-2" />
    </MapPin>
            <h3 className="font-semibold text-gray-900">
    </h>Office</h3>
            <p className="text-gray-600">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;