import { useState } from 'react',
import { Input } from '@/components/ui/input',
import { Button } from '@/components/ui/button',
import { useToast } from '@/hooks/use-toast',
import { apiClient } from '@/utils/apiClient',
import { Loader2 } from 'lucide-react',
export function FooterNewsletter() {
  const [email, setEmail] = useState(''),
  const [honeypot, setHoneypot] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { toast } = useToast(),

  const handleSubmit = async (e) => {
    e.preventDefault(),
    if (honeypot) return, // ignore bots
    setIsSubmitting(true),
    try {
      const res = await apiClient('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      }),

      if (res.ok) {
        toast.success('Subscribed!'),
        setEmail('')
      } else {
        const data = await res.json().catch(() => ({})),
        toast.error(data.error || 'Subscription failed')
      }
    } catch (err) {
      toast.error(err.message || 'Subscription failed')
    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <form
      onSubmit={handleSubmit}
      className=&quot;flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2&quot;
    >
      <Input
        type=&quot;email&quot;
        placeholder=&quot;Enter your email&quot;
        className=&quot;flex-grow bg-zion-blue-light text-black border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple&quot;
        value={email}
        onChange={(e) => setEmail(e.target.value)}        required
      />
      {_/* Honeypot field */}
      <input
        type=&quot;text&quot;
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex=&quot;-1&quot;
        autoComplete=&quot;off&quot;
        style={{ display: 'none' }}
      />
      <Button
        type=&quot;submit&quot;
        disabled={isSubmitting}
        className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple&quot;      >
        {_isSubmitting ? (
          <>
            <Loader2 className=&quot;h-4 w-4 mr-2 animate-spin&quot; />
            Subscribing...
          </>
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
  )
}
