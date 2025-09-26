import React, { useState } from "react"
import { motion } from "framer-motion"
import { Mail, CheckCircle, ArrowRight, Bell, TrendingUp, Zap } from "lucide-react"
const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState(''),;
  const [isSubscribed, setIsSubscribed] = useState(false),;
  const [isLoading, setIsLoading] = useState(false),;

  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault()
    if (!email) return,;

    setIsLoading(true),;

    //[^;]*
    setTimeout(() => {;
      setIsSubscribed(true),;
      setIsLoading(false),;
      setEmail('')
    }, 1500),;
  },;

  const benefits = [;
    {;
      icon: Bell,title: "Latest Updates",description: "Stay informed about new services and features"
    };
    {;
      icon: TrendingUp,title: "Industry Insights",description: "Get exclusive access to tech trends and analysis"
    };
    {;
      icon: Zap,title: "Early Access",description: "Be the first to know about beta programs and launches"
    };
  ];
  if (isSubscribed) {;
    return (
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }};
            animate={{ opacity: 1, scale: 1 }};
            transition={{ duration: 0.5 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6">;
              <[^>]*/>
            </[^>]*>
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to the Zion Tech Group Community!</[^>]*>
            <p className="text-gray-300 text-lg mb-6">;
              You're now subscribed to our newsletter. We'll keep you updated with the latest technology insights;
              service announcements, and exclusive content.;
            </[^>]*>
            <button;
              onClick={() => setIsSubscribed(false)};
              className="[^"]*"
            >;
              Subscribe Another Email;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">;
      <div className="max-w-7xl mx-auto px-6">;
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
          {/* Left Column - Content */};
          <motion.div
            initial={{ opacity: 0, x: -30 }};
            whileInView={{ opacity: 1, x: 0 }};
            transition={{ duration: 0.6 }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Stay Ahead with Zion Tech Group;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
              Get exclusive access to the latest technology insights, service updates, and industry trends.;
              Join thousands of professionals who trust us to keep them informed.;
            </[^>]*>

            <div className="space-y-4 mb-8">;
              {benefits.map((benefit, index) => (;
                <motion.div
                  key={index};
                  initial={{ opacity: 0, x: -20 }};
                  whileInView={{ opacity: 1, x: 0 }};
                  transition={{ duration: 0.5, delay: index * 0.1 }};
                  className="[^"]*"
                >;
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mr-4 flex-shrink-0">;
                    <[^>]*/>
                  </[^>]*>
                  <div>;
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</[^>]*>
                    <p className="text-gray-400">{benefit.description}</[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>

            <div className="flex items-center text-sm text-gray-400">;
              <[^>]*/>
              <span>No spam, unsubscribe at any time</[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Right Column - Newsletter Form */};
          <motion.div
            initial={{ opacity: 0, x: 30 }};
            whileInView={{ opacity: 1, x: 0 }};
            transition={{ duration: 0.6, delay: 0.2 }};
          >;
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl p-8 border border-slate-500">;
              <div className="text-center mb-6">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</[^>]*>
                <p className="text-gray-300">Get the latest updates delivered to your inbox</[^>]*>
              </[^>]*>

              <form onSubmit={handleSubmit} className="space-y-4">;
                <div>;
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">;
                    Email Address;
                  </[^>]*>
                  <input;
                    type="email"
                    id="email"
                    value={email};
                    onChange={(e) => setEmail(e.target.value)};
                    placeholder="Enter your email address"
                    className="[^"]*"
                    required;
                  />;
                </[^>]*>

                <button;
                  type="submit"
                  disabled={isLoading || !email}
                  className="[^"]*"
                >;
                  {isLoading ? (;
                    <div className="flex items-center">;
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></[^>]*>
                      Subscribing...;
                    </[^>]*>
                  ) : (;
                    <>;
                      Subscribe Now;
                      <[^>]*/>
                    </[^>]*>
                  )};
                </[^>]*>
              </[^>]*>

              <div className="mt-6 text-center">;
                <p className="text-xs text-gray-400">;
                  By subscribing, you agree to our{' '};
                  <a href="/privacy" className="text-cyan-400 hover: text-cyan-300 underline">;
                    Privacy Policy;
                  </a>{' '};
                  and{' '};
                  <a href="/terms" className="text-cyan-400 hover: text-cyan-300 underline">;
                    Terms of Service;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default NewsletterSection;