<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { useState } from "react",
import { Mail } from "lucide-react",
export function EnhancedNewsletterForm() {
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),
=======
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { useState } from &quot;react&quot;;
import { Mail } from &quot;lucide-react&quot;;

export function EnhancedNewsletterForm() {
  const [email, setEmail] = useState("&quot;);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate API call
    setTimeout(() => {
<<<<<<< HEAD
      setIsSubmitting(false),
      setIsSubmitted(true),
      setEmail("")
    }, 1000)
  },
=======
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("&quot;);
    }, 1000);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div className=&quot;w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6&quot;>
      <div className=&quot;flex items-center mb-4&quot;>
        <div className=&quot;p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3&quot;>
          <Mail className=&quot;h-6 w-6&quot; />
        </div>
        <div>
          <h4 className=&quot;text-lg font-bold text-white&quot;>Stay Updated</h4>
          <p className=&quot;text-zion-slate-light text-sm&quot;>Get exclusive offers, trending AI news, and early access to best deals</p>
        </div>
      </div>
      
      {isSubmitted ? (
        <div className=&quot;text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40&quot;>
          <p className=&quot;text-white font-medium&quot;>Thank you for subscribing!</p>
          <p className=&quot;text-zion-slate-light mt-1&quot;>We'll keep you updated with the latest from Zion.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className=&quot;flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2&quot;>
          <Input
            type=&quot;email&quot;
            placeholder=&quot;Enter your email&quot;
            className=&quot;flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple&quot;
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <Button 
            type=&quot;submit&quot; 
            disabled={isSubmitting}
            className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple&quot;
          >
            {isSubmitting ? &quot;Subscribing...&quot; : &quot;Subscribe&quot;}
          </Button>
        </form>
      )}
      
      <div className=&quot;mt-4 flex items-center text-xs text-zion-slate-light&quot;>
        <div className=&quot;flex -space-x-1 mr-2&quot;>
          {[...Array(3)].map((_, i) => (
            <div key={i} className=&quot;h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan&quot;>
=======
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { useState } from "react",;
import { Mail } from "lucide-react",;
export function EnhancedNewsletterForm() {;
  const [email, setEmail] = useState(""),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isSubmitted, setIsSubmitted] = useState(false),;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    setIsSubmitting(true),;
    // Simulate API call;
    setTimeout(() => {;
      setIsSubmitting(false),;
      setIsSubmitted(true);
      setEmail("");
    }, 1000);
  };
  return (;
    <div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">;
      <div className="flex items-center mb-4">;
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3">;
          <Mail className="h-6 w-6" />;
        </div>;
        <div>;
          <h4 className="text-lg font-bold text-white">Stay Updated</h4>;
          <p className="text-zion-slate-light text-sm">Get exclusive offers, trending AI news, and early access to best deals</p>;
        </div>;
      </div>;
      {isSubmitted ? (;
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">;
          <p className="text-white font-medium">Thank you for subscribing!</p>;
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>;
        </div>;
      ) : (;
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">;
          <Input;
            type="email";
            placeholder="Enter your email";
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple";
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required;
          />;
          <Button;
            type="submit";
            disabled={isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
          >;
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>;
        </form>;
      )}
;
      <div className="mt-4 flex items-center text-xs text-zion-slate-light">;
        <div className="flex -space-x-1 mr-2">;
          {[...Array(3)].map((_, i) => (;
            <div key={i} className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              {String.fromCharCode(65 + i)}
            </div>;
          ))}
        </div>;
        <span>Join 10,000+ tech professionals who already subscribe</span>;
      </div>;
    </div>;
  );
}