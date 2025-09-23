import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { apiClient } from '@/utils/apiClient';
import { Loader2 } from 'lucide-react';
export function FooterNewsletter() {
  const [email, setEmail] = useState($2);
  const [honeypot, setHoneypot] = useState($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
  const { toast } = useToast($2);
  const handleSubmit = async (e) => {
    e.preventDefault($2);
    if (honeypot) return, // ignore bots
    setIsSubmitting($2);
    try {
      const res = await apiClient('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      }),

      if (res.ok) {
        toast.success($2);
        setEmail('')
      } else {
        const data = $2;
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
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2"
    >
      <Input
        type="email"
        placeholder="Enter your email"
        className="flex-grow bg-zion-blue-light text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {/* Honeypot field */}
      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex="-1"
        autoComplete="off"
        style={{ display: 'none' }}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Subscribing...
          </>
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
  )
}
