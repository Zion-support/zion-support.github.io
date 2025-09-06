
import { Button } from '@/components/ui/button';
// import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export function FooterNewsletter(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // toast({
      //   title: "Success!",
      //   description: "You've been subscribed to our newsletter.",
      // });
      alert("Success! You've been subscribed to our newsletter.");
      setEmail('');
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: "Failed to subscribe. Please try again.",
      //   variant: "destructive",
      // });
      alert("Error: Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>

