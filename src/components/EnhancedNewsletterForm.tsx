import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";

const EnhancedNewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast("Please enter your email address", "error");
      return;
    }

    setIsLoading(true);
    try {
      // Mock subscription - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      toast("Successfully subscribed to our newsletter!", "success");
      setEmail("");
    } catch (error) {
      toast("Failed to subscribe. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="p-6 bg-gradient-to-br from-green-900 to-blue-900 text-white rounded-lg text-center">
        <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-400" />
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-300">You've successfully subscribed to our newsletter.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <div className="text-center mb-6">
        <Mail className="h-12 w-12 mx-auto mb-4 text-blue-400" />
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-gray-300">Get the latest news and updates delivered to your inbox.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            disabled={isLoading}
          />
        </div>
        
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
              Subscribing...
            </>
          ) : (
            <>
              <Mail className="h-4 w-4 mr-2" />
              Subscribe Now
            </>
          )}
        </Button>
      </form>
      
      <p className="text-xs text-gray-400 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default EnhancedNewsletterForm;