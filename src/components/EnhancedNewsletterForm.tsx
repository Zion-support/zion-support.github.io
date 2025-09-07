import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useRef } from 'react';
import { Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { logErrorToProduction } from '@/utils/productionLogger';

export function EnhancedNewsletterForm() {
  const [email, setEmail] = useState("");
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

    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      logErrorToProduction('Newsletter subscription failed', error);
      toast({
        title: "Subscription failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
        <div className="text-green-600 dark:text-green-400 mb-2">
          <Mail className="h-8 w-8 mx-auto" />
        </div>
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-1">
          Thank you for subscribing!
        </h3>
        <p className="text-green-600 dark:text-green-400">
          You'll receive our latest updates and insights.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-blue-100">
          Get the latest insights, tips, and updates delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 text-gray-900"
            disabled={isSubmitting}
            required
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-blue-600 hover:bg-gray-100 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <span>Subscribing...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Subscribe</span>
              </div>
            )}
          </Button>
        </div>
        
        <p className="text-xs text-blue-100 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}