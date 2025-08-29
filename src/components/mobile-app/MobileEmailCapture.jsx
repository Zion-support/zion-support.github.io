import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export const MobileEmailCapture = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    }, 1000);
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-400" />;
      default:
        return <Mail className="h-5 w-5 text-blue-400" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'success':
        return 'Thank you! We\'ll notify you when the app launches.';
      case 'error':
        return 'Please enter a valid email address.';
      default:
        return 'Get early access and exclusive updates';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be the First to Know
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get early access to the Zion mobile app and receive exclusive updates, features, and special offers.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              {getStatusIcon()}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">
            {getStatusText()}
          </h3>
          
          {status === 'idle' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
              <p className="text-sm text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}

          {status === 'loading' && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mx-auto mb-4"></div>
              <p className="text-gray-300">Processing your request...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="text-center">
              <p className="text-green-400 mb-4">Successfully subscribed!</p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Subscribe Another Email
              </button>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center">
              <p className="text-red-400 mb-4">Invalid email address. Please try again.</p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Try Again
              </button>
            </div>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Early Access</h4>
            <p className="text-gray-400 text-sm">Be among the first to try new features</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">💎</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Exclusive Offers</h4>
            <p className="text-gray-400 text-sm">Special discounts and promotions</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📱</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">App Updates</h4>
            <p className="text-gray-400 text-sm">Stay informed about new releases</p>
          </div>
        </div>
      </div>
    </section>
  );
};
