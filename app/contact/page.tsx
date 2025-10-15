  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange  = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })}
  const handleSubmit  = async (e: React.FormEvent) => {e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
await new Promise(resolve => setTimeout(resolve, 1000)
    setIsSubmitted(true)
    setIsSubmitting(false)}
  const contactInfo  = [
    {title: 'Phone'
      value: '+1 (555) 123-4567'
      description: '
      icon: 'Email'
      title: 'Email'
      value: 'contact@ziontechgroup.com'
      description: 'We respond within 24 hours'
      icon: 'Location'
      title: 'Address'
      value: '123 Tech Street, Suite 100'
      description: 'San Francisco, CA 94105'
      icon: 'Clock'
      description: '
      description: '9:00 AM - 6:00 PM EST'
  const subjects  = ['
                Thank you for contacting us. We'
                    name: '
                    email: '
                    company: '
                    phone: '
                    subject: '