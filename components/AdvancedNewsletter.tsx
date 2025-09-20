<<<<<<< HEAD
=======
"use client";
'use client';

import React{ useState } from 'react';
import { motion } from 'framer-motion';
MailSendCheckCircle

export default function AdvancedNewsletter() {
  const [emailsetEmail] = useState('');
  const [isSubscribedsetIsSubscribed] = useState(false);
  const [isLoadingsetIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail(', ');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-12 w-12 text-purple-400 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Stay Updated
            </h2>
          </div>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get the latest insightsupdatesand exclusive content delivered to your inbox. 
            Join thousands of professionals who trust us for cutting-edge AI knowledge.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-200"
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0scale: 0.8 }}
              animate={{ opacity: 1scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 max-w-md mx-auto"
            >
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Successfully Subscribed!
              </h3>
              <p className="text-white/80">
                Thank you for subscribing. 'You', 'll receive our latest updates soon.
              </p>
            </motion.div>
          )}

          <div className="mt-8 text-white/60 text-sm">
            <p>
              By subscribingyou agree to our privacy policy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
