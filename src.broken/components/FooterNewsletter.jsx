import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { apiClient } from '@/utils/apiClient';
import { Loader2 } from 'lucide-react';

export function FooterNewsletter() {

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubmit = e => {

    e.preventDefault();
    if (honeypot) return; // ignore bots
    setIsSubmitting(true);
    try {
      const res = await apiClient('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        toast.success('Subscribed!');
        setEmail('');
      } else {
        const data = await res.json().catch(() => ({}));
        toast.error(data.error || 'Subscription failed');
      }
    } catch (err) {
      toast.error(err.message || 'Subscription failed');
    } finally {
      setIsSubmitting(false);
    }
  };
  if(isSubscribed) {

    return ()
      <div className="text-green-400 text-sm">Thank you for subscribing!</div>
    );
  }
  return ("
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input"
        type="email"
        placeholder="Enter your email"
        className="flex-grow bg-zion-blue-light text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
        value={email}
        onChange={e => setEmail(e.target.value)}"
        placeholder="Enter your email"
        className="flex-1 px-3 py-2 bg-zion-slate-dark border border-zion-slate rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
        required
      />
      <button"
        type="submit"
        className="px-4 py-2 bg-zion-cyan text-zion-slate-dark font-medium rounded-md hover:bg-zion-cyan-light transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
'"