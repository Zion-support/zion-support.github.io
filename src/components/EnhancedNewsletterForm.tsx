
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useRef } from 'react';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { logErrorToProduction } from '@/utils/productionLogger';

export function EnhancedNewsletterForm() {
  const [email, setEmail] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const lastSubmit = useRef(0);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastSubmit.current < 1000) return;
    lastSubmit.current = now;


    const trimmed = email.trim();
    if (!EMAIL_REGEX.test(trimmed)) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address.',
        variant: 'destructive'
      });

      return;
    }

    setIsSubmitting(true);
    try {

      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed })
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        // Handle different success statuses
        if (data.status === 'already_subscribed') {
          toast({
            title: 'Already subscribed',
            description: data.message || "You're already subscribed!",
          });
        } else {
          toast({
            title: 'Success!',
            description: data.message || 'Thanks for subscribing!',
          });
        }
        setIsSubmitted(true);
        setEmail('');
      } else {
        // Handle error responses
        logErrorToProduction('Newsletter subscription failed:', { data: data });
        toast({
          title: 'Subscription failed',
          description: data.error || 'Please try again.',
          variant: 'destructive'
        });
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err });
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive'
      });

    } finally {
      setIsSubmitting(false);
    }
  };


  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Mail className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Thank you for subscribing!
        </h3>
        <p className="text-gray-600 mb-4">
          You'll receive our latest updates and exclusive content.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          size="sm"
        >
          Subscribe another email
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Stay Updated
        </h3>
        <p className="text-gray-600">
          Get the latest news, updates, and exclusive content delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

            required
            disabled={isSubmitting}
            className="flex-1"
          />
          <Button
            type="submit"

            disabled={isSubmitting || !email.trim()}
            className="px-6"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Subscribing...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Subscribe</span>
              </div>
            )}
          </Button>

        </div>
        
        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );

}

