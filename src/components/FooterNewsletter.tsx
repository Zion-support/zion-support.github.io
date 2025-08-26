import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

export const FooterNewsletter = () => {
=======
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail } from 'lucide-react';

export function FooterNewsletter() {
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    if (!email) return;
=======
    if (!email.trim()) return;
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974

    setIsLoading(true);
    
    // Simulate API call
<<<<<<< HEAD
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
=======
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
  };

  if (isSubscribed) {
    return (
<<<<<<< HEAD
      <div className="bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl p-6 text-center">
        <CheckCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
        <h4 className="text-lg font-semibold text-white mb-2">Successfully Subscribed!</h4>
        <p className="text-zion-slate-light">
          Thank you for subscribing to our newsletter. You'll receive updates soon!
=======
      <div className="text-center p-4 bg-zion-purple/10 rounded-lg border border-zion-purple/20">
        <p className="text-zion-cyan text-sm font-medium">
          Thank you for subscribing! 🎉
        </p>
        <p className="text-zion-slate-light text-xs mt-1">
          You'll receive our latest updates soon.
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
        </p>
      </div>
    );
  }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/build-and-fix-errors-c9ef

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-zion-slate-light" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="block w-full pl-10 pr-4 py-3 bg-zion-blue-light/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-200"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !email}
          className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Subscribe
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </>
          )}
        </button>
      </div>
      <p className="text-xs text-zion-slate-light mt-3 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
<<<<<<< HEAD
<<<<<<< HEAD
};
<<<<<<< HEAD
=======
};
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
};
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
          required
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading || !email.trim()}
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
