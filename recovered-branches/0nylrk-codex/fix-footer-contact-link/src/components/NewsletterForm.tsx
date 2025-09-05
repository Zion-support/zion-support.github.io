import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { useState } from "react",
export function NewsletterForm() {
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false),
      setIsSubmitted(true),
      setEmail("")
    }, 1000)
  },  };

  return (
    <div className=&quot;w-full max-w-md mx-auto&quot;>
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
            className=&quot;flex-grow bg-zion-blue-light text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple&quot;
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <Button 
            type=&quot;submit&quot; 
            disabled={isSubmitting}
            className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple&quot;
          >
            {isSubmitting ? &quot;Subscribing...&quot; : &quot;Subscribe&quot;}          </Button>
        </form>
      )}
    </div>
  )
}