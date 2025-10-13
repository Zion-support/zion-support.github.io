import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

interface ContentNewsletterSignupProps {
  className?: string;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  className = "",
}) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      setEmail("");
    } catch (error) {
console.error('Newsletter signup error:', error);

      console.error('Newsletter signup error:', error);

    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div
        className={`bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center ${className}`}
      >
        <CheckCircle className="w-8 h-8 mx-auto mb-2" />
        <h3 className="text-lg font-semibold mb-2">
          Thank you for subscribing!
        </h3>
        <p>You'll receive our latest updates and exclusive content.</p>
      </div>
    );
  }

  return (
    <div
      className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 ${className}`}
    >
      <div className="text-center mb-6">
        <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-gray-300">
          Get the latest AI and tech insights delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Subscribing..." : "Subscribe Now"}
        </button>
      </form>

      <p className="text-xs text-gray-400 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default ContentNewsletterSignup;
