import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
interface FormData {
  name: string,
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string,}
}
interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string,}
}
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
  ]</$1></div>
                Email Address *</$1></$1></div></div>
                Company</$1></$1></div>
                Phone Number</$1></$1></$1></div>
              Service Interest</$1>
              ) : (</div>
              )}
              <span className="text-sm font-medium">{status.message}</span></$1>
          )}

            {status.type === 'loading' ? (
              <></></div>Sending...</span>
            ) : (
              <></>Send Message</span>;}
            )}
          </button></$1></div></div></div></div></$1></div>Phone</p>+1 (555) 123-4567</p></$1></$1></div></div></$1></div>Email</p>hello@ziontechgroup.com</p></$1></$1></div></div></$1></div>Office</p>New York, NY</p></$1></$1></$1></$1></$1>
  )
}

export default ContactForm