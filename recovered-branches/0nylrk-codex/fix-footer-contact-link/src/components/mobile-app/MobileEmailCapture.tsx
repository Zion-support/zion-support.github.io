
import React, {_useState} from "react";

export const MobileEmailCapture: React.FC = () => {_const [email, _setEmail] = useState("");
  const [isSubmitting, _setIsSubmitting] = useState(false);
  const [isSuccess, _setIsSuccess] = useState(false);

  const _handleSubmit = async (_e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // In a real implementation, _this would connect to a backend service
      // For now, _we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, _1000));
      setIsSuccess(true);
      setEmail("");
      
      setTimeout__(() => {
        setIsSuccess(false);}, 5000);
    } catch (error) {} finally {_setIsSubmitting(false);}
  };

  return (_<section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Early Access to New Features
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.
          </p>
          
          <form onSubmit={_handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={_email}
              onChange={_(e) => setEmail(e.target.value)}
              className="flex-grow bg-zion-blue-dark/70 text-white border-zion-purple/30 placeholder:text-gray-400"
              required
            />
            <Button 
              type="submit" 
              disabled={_isSubmitting || isSuccess}
              className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium"
            >
              {_isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};
