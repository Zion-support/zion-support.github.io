import { Helmet } from 'react-helmet-async'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

interface FormStatus {
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
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
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
        message: 'Thank you! Your message has been sent successfully.' 
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch {
      setStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again.' 
      })
    }
  }

const services = [
    'AI Solutions',
    'Web Development',
    'Mobile Development',
    'Cloud Services',
    'Data Analytics',
    'Cybersecurity',
    'IT Consulting',
    'Other'
  ]

  return (
    <div>

    <div>
  
      <div>
  
        <div>
  
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p>
  
            Ready to transform your business? Let's discuss your project.
          </p>
        </div>

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
              {services.map((service) => (
                <option>
  
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
  
            <label>
  
              Message *
            </label>
            <textarea>
  
          </div>

          {status.message && (
            <div>
  
              {status.type === 'success' && <CheckCircle className="h-5 w-5 text-green-400" />}
              {status.type === 'error' && <AlertCircle className="h-5 w-5 text-red-400" />}
              <span>
  
                {status.message}
              </span>
            </div>
          )}

          <button>
  
            {status.type === 'loading' ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send>
  
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

        <div>
  
          <div>
  
            <div>
  
              <Mail>
  
              <span>contact@ziontechgroup.com</span>
            </div>
            <div>
  
              <Phone>
  
              <span>+1 (555) 123-4567</span>
            </div>
            <div>
  
              <MapPin>
  
              <span>New York, NY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm