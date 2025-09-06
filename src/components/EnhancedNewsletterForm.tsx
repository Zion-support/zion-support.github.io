import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState, useRef } from 'react'
import { Mail } from 'lucide-react'
import { useToast } from "@/hooks/use-toast";
import { logErrorToProduction } from '@/utils/productionLogger';

export function EnhancedNewsletterForm() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const lastSubmit = useRef(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const now = Date.now()
    if (now - lastSubmit.current < 1000) return;
    lastSubmit.current = now
    const trimmed = email.trim()
    if (!EMAIL_REGEX.test(trimmed)) {
      toast.error('Invalid email')
      return;
    }
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed })
      })
      if (res.ok) {
        setIsSubmitted(true)
        toast.success('Successfully subscribed!')
      } else {
        throw new Error('Failed to subscribe')
      }
    } catch (error) {
      logErrorToProduction(error, 'newsletter_subscription')
      toast.error('Failed to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Thank you for subscribing!
        </h3>
        <p className="text-green-600">
          You'll receive our latest updates and news.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="px-6"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </div>
      <p className="text-sm text-gray-500 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  )
}