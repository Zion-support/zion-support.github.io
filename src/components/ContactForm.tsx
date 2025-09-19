import React, { useState } from 'react'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '', service: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-form-section" id="contact">
      <div className="contact-form-container">
        <h2>Get In Touch</h2>
        <p>Ready to start your next project? We'd love to hear from you.</p>
        
        {submitStatus === 'success' && (
          <div className="success-message">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="error-message">
            Something went wrong. Please try again later.
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-describedby="name-error"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-describedby="email-error"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Interest</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="ai">AI Solutions</option>
                <option value="blockchain">Blockchain Technology</option>
                <option value="it">IT Services</option>
                <option value="quantum">Quantum Computing</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud">Cloud Solutions</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              aria-describedby="message-error"
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
            aria-describedby="submit-status"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm