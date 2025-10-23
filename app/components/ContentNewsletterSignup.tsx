import React, { useState } from 'react';

export default function Page() {

const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email.includes('@')) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        setError('Please enter a valid email address');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-16 px-4" loading="lazy">
        <div className="max-w-4xl mx-auto text-center" loading="lazy">
          <div className="text-6xl mb-6" loading="lazy">🎉</div><h2 className="text-3xl font-bold text-gray-900 mb-4" loading="lazy">Welcome to Our Content Community!</h2><p className="text-xl text-gray-600 mb-8" loading="lazy">You'll receive our latest AI insights, enterprise transformation guides, and breakthrough content directly in your inbox.</p><div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto" loading="lazy">
            <h3 className="text-lg font-semibold text-gray-900 mb-2" loading="lazy">What's Next?</h3><ul className="text-left text-gray-600 space-y-2" loading="lazy">
              <li>✅ Weekly AI trend reports</li><li>✅ Exclusive enterprise case studies</li><li>✅ Early access to new content</li><li>✅ Invitation to expert webinars</li></ul></div></div></div><div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 px-4" loading="lazy">
      <div className="max-w-4xl mx-auto text-center" loading="lazy">
        <div className="text-6xl mb-6" loading="lazy">📧</div><h2 className="text-4xl font-bold text-white mb-4" loading="lazy">Stay Ahead with AI Insights</h2><p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto" loading="lazy">Get exclusive access to our latest AI breakthroughs, enterprise transformation guides, </p></p><div className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto" loading="lazy">
          <h3 className="text-2xl font-bold text-gray-900 mb-6" loading="lazy">Join 10,000+ Enterprise Leaders</h3><form onSubmit={handleSubmit} className="space-y-4" loading="lazy">
            <div className="flex flex-col sm:flex-row gap-4" loading="lazy">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" loading="lazy"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" loading="lazy"
               aria-label="Action button">{isSubmitting ? 'Subscribing...' : 'Get Free Content'}</button></div><p className="text-red-600 text-sm" loading="lazy">{error}</p></form><div className="mt-6 text-sm text-gray-600" loading="lazy">
            <p>🔒 We respect your privacy. Unsubscribe at any time.</p></div><div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left" loading="lazy">
            <div className="flex items-start space-x-3" loading="lazy">
              <div className="text-2xl" loading="lazy">🚀</div><div>
                <h4 className="font-semibold text-gray-900" loading="lazy">Latest AI Trends</h4><p className="text-sm text-gray-600" loading="lazy">Weekly insights on breakthrough technologies</p></div></div><div className="flex items-start space-x-3" loading="lazy">
              <div className="text-2xl" loading="lazy">💼</div><div>
                <h4 className="font-semibold text-gray-900" loading="lazy">Enterprise Guides</h4><p className="text-sm text-gray-600" loading="lazy">Proven strategies from Fortune 500 companies</p></div></div><div className="flex items-start space-x-3" loading="lazy">
              <div className="text-2xl" loading="lazy">🎯</div><div>
                <h4 className="font-semibold text-gray-900" loading="lazy">Exclusive Content</h4><p className="text-sm text-gray-600" loading="lazy">Early access to premium resources</p></div></div></div></div><div className="mt-12 text-center" loading="lazy">
          <p className="text-indigo-100 mb-4" loading="lazy">Trusted by leading enterprises</p><div className="flex justify-center items-center space-x-8 opacity-60" loading="lazy">
            <div className="text-white font-bold text-lg" loading="lazy">Fortune 500</div><div className="text-white font-bold text-lg" loading="lazy">Global 2000</div><div className="text-white font-bold text-lg" loading="lazy">Enterprise</div></div></div></div></div>
  );
};