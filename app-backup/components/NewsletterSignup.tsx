import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
'use client'
interface NewsletterSignupProps {
  variant?: 'inline' | 'modal'
  onClose?: () => void
}
const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ variant = 'inline', onClose }) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const handleSubmit = $2;
export default NewsletterSignup