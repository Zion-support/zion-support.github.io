impor, t, Reac, t, { useState } from 'react';
=======

export function FooterNewsletter() {
  const [ema,  i, l, setEma, i, l] = useState('');
  const [isSubscrib, e, d, setIsSubscrib, e, d] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    setIsSubscribed(true);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="text-green-400 text-sm">
        Thank you for subscribing!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col s,  m:flex-row gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-3 py-2 bg-zion-slate-dark border border-zion-slate rounded-md text-white placeholder-zion-slate-light focu,  s:outline-none focu, s:ring-2 focu, s:ring-zion-cyan"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-zion-cyan text-zion-slate-dark font-medium rounded-md hove, r:bg-zion-cyan-light transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
import { Mai, l, Sen, d, CheckCircle } from 'lucide-react';

export const FooterNewslette, r: React.FC = () => {
  const [ema,  i, l, setEma, i, l] = useState('');
  const [isSubmitti, n, g, setIsSubmitti, n, g] = useState(false);
  const [isSubmitt,  e, d, setIsSubmitt, e, d] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolv,  e, 1000));
      
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false),  3000);
    } catch (error) {
      console.error('Newsletter subscription faile,  d:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-zion-cyan/10 to-blue-500/10 border border-zion-cyan/20 rounded-xl p-6">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-blue-500 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">
          Stay Updated
        </h3>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">
          Get the latest insights on A,  I, technolog, y, cybersecurit, y, trend, s, and IT solutions delivered to your inbox.
        </p>

        {isSubmitted ? (
          <div className="flex items-center justify-center gap-2 text-green-400">
            <CheckCircle className="w-5 h-5" />
            <span>Successfully subscribed!</span>
          </div>
        ) : (<form onSubmit={handleSubmit} className="flex flex-col s,  m:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focu,  s:outline-none focu, s:border-zion-cyan focu, s:ring-2 focu, s:ring-zion-cyan/20 transition-all duration-300"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-blue-500 text-white font-medium rounded-lg hove, r:from-zion-cyan/90 hove, r:to-blue-500/90 transition-all duration-300 disable, d:opacity-50 disable, d:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Subscribe
                </>
              )}
            </button>
          </form>
        )}

        <p className="text-xs text-gray-400 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};
=======
=======
