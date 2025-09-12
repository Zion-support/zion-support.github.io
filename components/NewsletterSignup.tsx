import React, { useState } from 'react';
import { Mail, Check, AlertCircle, Send } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'banner';
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, you would call your newsletter API here
      setStatus('success');
      setMessage('Successfully subscribed! Check your email for confirmation.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const variants = {
    default: {
      container: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8',
      title: 'text-2xl font-bold mb-4',
      description: 'text-lg opacity-90 mb-6',
      form: 'flex flex-col sm:flex-row gap-4',
      input: 'flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
      button: 'px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center'
    },
    compact: {
      container: 'bg-white border border-gray-200 rounded-xl p-6 shadow-sm',
      title: 'text-lg font-semibold text-gray-900 mb-2',
      description: 'text-gray-600 mb-4',
      form: 'flex flex-col sm:flex-row gap-3',
      input: 'flex-1 px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
      button: 'px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center'
    },
    banner: {
      container: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-6',
      title: 'text-xl font-bold mb-2',
      description: 'text-sm opacity-90 mb-4',
      form: 'flex flex-col sm:flex-row gap-3',
      input: 'flex-1 px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
      button: 'px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center'
    }
  };

  const currentVariant = variants[variant];

  return (
    <div className={`${currentVariant.container} ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className={currentVariant.title}>
            {variant === 'banner' ? 'Stay Updated' : 'Stay Ahead with AI Insights'}
          </h3>
          <p className={currentVariant.description}>
            {variant === 'banner' 
              ? 'Get the latest AI news and insights delivered to your inbox.'
              : 'Get exclusive access to our latest research, case studies, and expert analysis delivered directly to your inbox.'
            }
          </p>
          
          <form onSubmit={handleSubmit} className={currentVariant.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={currentVariant.input}
              required
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading' || !email}
              className={currentVariant.button}
            >
              {status === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                  Subscribing...
                </>
              ) : (
                <>
                  Subscribe
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </form>
          
          {message && (
            <div className={`mt-4 flex items-center space-x-2 ${
              status === 'success' ? 'text-green-200' : 'text-red-200'
            }`}>
              {status === 'success' ? (
                <Check className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              <span className="text-sm">{message}</span>
            </div>
          )}
          
          {variant !== 'banner' && (
            <p className="text-xs opacity-75 mt-3">
              Join 50,000+ professionals who trust our insights. Unsubscribe at any time.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;