'use client'
import React, { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
interface ContentNewsletterSignupProps {
  title?: string
  description?: string
  placeholder?: string
  buttonText?: string
  onSubscribe?: (email: string) => Promise<void>
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = 'Stay Updated'
  description = 'Get the latest news and updates delivered to your inbox.'
  placeholder = 'Enter your email address'
  buttonText = 'Subscribe'
  onSubscribe
}) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    setStatus('loading')
    setMessage('Subscribing...')
    try {
      if (onSubscribe) {
        await onSubscribe(email)
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      
      setStatus('success')
      setMessage('Successfully subscribed!')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Failed to subscribe. Please try again.')
    }
  }
  return (
    <div className="...">
      <div className="...">
        <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-blue-100">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="...">
        <div className="...">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="...">
            {status === 'loading' ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
            ) : (
              buttonText
            )}
          </button>
        </div>

        {message && (
          <div className={`mt-4 p-3 rounded-lg flex items-center space-x-2 ${
            status === 'success' ? 'bg-green-100 text-green-800' :
            status === 'error' ? 'bg-red-100 text-red-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {status === 'success' && <CheckCircle className="w-5 h-5" />}
            {status === 'error' && <AlertCircle className="w-5 h-5" />}
            <span className="text-sm">{message}</span>
          </div>
        )}
      </form>

      <p className="...">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  )
}
export default ContentNewsletterSignup