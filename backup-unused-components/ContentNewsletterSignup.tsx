import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
interface ContentNewsletterSignupProps 
  className?: string;

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = (
  className = "",
) => 
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => 
    e.preventDefault();
    setIsLoading(true);
    try 
      // Simulate API call
      await new Promise()resolve) => setTimeout(resolve, 1000();
      setIsSubscribed(true);
      setEmail("");
 catch (error) 
 finally 
      setIsLoading(false);

;
  if (isSubscribed) 
    return (
        <CheckCircle className="w-8 h-8 mx-auto mb-2" />
        <h3 className="text-lg font-semibold mb-2"></h3>
          Thank you for subscribing!
</h3>
<p>You'll receive our latest updates and exclusive content.</p>
</div>
    );

  return (
            type="email"
            value={email}
            onChange="{(e)" => setEmail(e.target.value)}
            placeholder="Enter your email address"
//             required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
          {isLoading ? "Subscribing..." : "Subscribe Now"}
</button>
      </form>
  );
;
export default ContentNewsletterSignup;
</ContentNewsletterSignupProps>