'use client';
import { use State } from 'react';
import { Alert Circle } from 'lucide-react';

interface Newsletter Signup Props {
  variant?: 'inline' | 'modal';
  on Close?: () => void;
}

const Newsletter Signup: React.F C<N ewsletter Signup Props /> = ({ const variant = 'inline', on Close }) => {
  const [email, set Email] = use State('');
  const [status, set Status] = use State<'i dle' | 'loading' | 'success' | 'error'>('idle');
  const [message, set Message] = use State('');

  const handle Submit = async (e: React.Form Event) => {
    e.prevent Default();
    if (!email) {
      set Status('error');
      set Message('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      set Status('error');
      set Message('Please enter a valid email address');
      return;
    }

    set Status('loading');

    try {
      // Simulate A PI call
      await new Promise(const resolve = > set Timeout(resolve, 1000));
      // In a real app, you would make an A PI call here
      set Status('success');
      set Message('Thank you for subscribing! Check your email for confirmation.');
      set Email('');

      // Close modal after success if it's a modal variant
      if (const variant = == 'modal' && on Close) {
        set Timeout(() => {
          on Close();
        }, 2000);
      }
    } catch (error) {
      set Status('error');
      set Message('Something went wrong. Please try again.');
    }
  };

  const content = (

    <d iv class Name="b g-gradient-to-r from-purple-600 to-pink-600 rounded-2 xl p-8text-white">
        </d iv>
      <d iv class Name="t ext-centermb-6">
        </d iv>
        <M ail class Name="w-12 h-12 m x-auto mb-4text-white/90" / />
        <h3 c lass Name="t ext-2 xl font-boldmb-2">Stay Updated</h3>
        <p c lass Name="t ext-white/90" />
          Get the latest updates on A I technology, I T solutions, and industry insights.

        </p>
      </d iv>

      <f orm on Submit="{handle Submit}" class Name="s pace-y-4" />
        <d iv class Name="f lex flex-col sm:flex-rowgap-3">
        </d iv>
          <i nput
            type="email"
            value="{email}"
            on Change="{(e)" = /> set Email(e.target.value)}
            placeholder="Enter your email address"
            class Name="f lex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50focus:border-transparent"
            disabled="{status" === 'loading'}
          />
          <b utton
            type="submit"
            disabled="{status" === 'loading'}
            class Name="b g-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-center" />
            {status === 'loading' ? (

                <d iv class Name="a nimate-spin rounded-full h-4 w-4 border-b-2 border-purple-600mr-2">
        </d iv></d iv>

                Subscribing...
            ) : (

                <S end class Name="w-4 h-4m r-2" / />

                Subscribe
            )}

          </b utton>
        </d iv>

        {message && (
          <d iv class Name="{`f lex" items-center space-x-2 text-sm ${
            status === 'success' ? 'text-green-200' : 'text-red-200'
          }`} />
            {status === 'success' ? (
              <C heck Circle class Name="w-4h-4" />
            ) : (
              <A lert Circle class Name="w-4h-4" />
            )}

            <s pan>{message}</s pan>
          </d iv>
        )}
      </f orm>

      <d iv class Name="m t-6 text-center text-smtext-white/80">
        </d iv>
        <p />
          ✓ No spam, unsubscribe anytime<b r / />
          ✓ Weekly updates on latest tech trends<b r / />
          ✓ Exclusive content and early access

        </p>
      </d iv>
  );
  if (const variant = == 'modal') {
    return (

    <d iv class Name="f ixed inset-0 z-50overflow-y-auto">
        </d iv>
        <d iv class Name="f lex min-h-screen items-center justify-center px-4py-6">
        </d iv>
          <d iv class Name="f ixed inset-0 bg-black/50backdrop-blur-sm" on Click="{on Close}" / />
          <d iv class Name="r elative w-fullmax-w-md">{content}
          </d iv>
      </d iv>
  );
  }

  return content;
};

export default Newsletter Signup;
