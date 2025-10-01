import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface EnhancedNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  showContentPreview?: boolean;
}

const EnhancedNewsletterSignup: React.FC<EnhancedNewsletterSignupProps> = ({
  title = 'Stay Updated',
  subtitle = 'Subscribe to our newsletter for the latest insights',
  showContentPreview = false
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white/80 mb-8">{subtitle}</p>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-zion-blue px-6 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnhancedNewsletterSignup;
