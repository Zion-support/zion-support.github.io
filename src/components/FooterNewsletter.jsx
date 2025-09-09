import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-zion-slate-light mb-6 max-w-md mx-auto">
          You've been successfully subscribed to our newsletter. Look out for the latest updates on AI, 
          cybersecurity, and technology trends.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors duration-300"
        >
          Subscribe Another Email
        </button>
      </motion.div>
    );
  }

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
        <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
          Get the latest insights on AI, cybersecurity, cloud solutions, and digital transformation. 
          Join thousands of professionals staying ahead of the curve.
        </p>
      </motion.div>

      <motion.form 
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 bg-zion-slate-dark/50 border rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors ${
                error ? 'border-red-400' : 'border-zion-cyan/20'
              }`}
            />
            {error && (
              <p className="text-red-400 text-sm mt-2 flex items-center justify-start">
                <AlertCircle className="w-4 h-4 mr-1" />
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </div>
        
        <p className="text-zion-slate-light text-xs mt-3">
          By subscribing, you agree to our{' '}
          <a href="/privacy" className="text-zion-cyan hover:underline">Privacy Policy</a>
          {' '}and{' '}
          <a href="/terms" className="text-zion-cyan hover:underline">Terms of Service</a>.
          {' '}You can unsubscribe at any time.
        </p>
      </motion.form>

      <motion.div 
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div>
          <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Mail className="w-6 h-6 text-zion-cyan" />
          </div>
          <h4 className="text-white font-medium mb-2">Weekly Updates</h4>
          <p className="text-zion-slate-light text-sm">Get the latest tech news and insights every week</p>
        </div>
        <div>
          <div className="w-12 h-12 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-6 h-6 text-zion-purple" />
          </div>
          <h4 className="text-white font-medium mb-2">No Spam</h4>
          <p className="text-zion-slate-light text-sm">We respect your inbox and only send valuable content</p>
        </div>
        <div>
          <div className="w-12 h-12 bg-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Mail className="w-6 h-6 text-zion-blue" />
          </div>
          <h4 className="text-white font-medium mb-2">Easy Unsubscribe</h4>
          <p className="text-zion-slate-light text-sm">One-click unsubscribe whenever you want</p>
        </div>
      </motion.div>
    </div>
  );
}
