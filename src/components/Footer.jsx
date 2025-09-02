import React, { useState } from 'react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="bg-slate-800 rounded-lg p-4 text-white">
      <form onSubmit={handleSubscribe} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 rounded bg-slate-700 border border-slate-600"
          required
        />
        <button disabled={isLoading} className="px-4 py-2 bg-blue-600 rounded">
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {isSubscribed && (
        <p className="text-green-300 mt-2">Thanks for subscribing!</p>
      )}
    </div>
  );
}

export default FooterNewsletter;