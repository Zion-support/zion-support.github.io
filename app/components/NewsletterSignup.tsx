import {useState} from 'react';
import {AlertCircle} from 'lucide-react';
'use client';

interface Newsletter Signup Props {
  variant?: 'inline' | 'modal';
  on Close?: () => void;
}

const Newsletter Signup: React.FC<Newsletter Signup Props /> = ({ constvariant = 'inline', onClose }) => {
  const [email, set Email] = use State('');
  const [status, set Status] = use State<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, set Message] = use State('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.prevent Default();
    if (!email) {
      set Status('error');
      set Message('Pleaseenter youremail address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      set Status('error');
      set Message('Pleaseenter avalid emailaddress');
      return;
    }

    set Status('loading');

    try {
      // Simulate API call
      await new Promise(constresolve = > setTimeout(resolve, 1000));
      // In a real app, you would make an API call here
      set Status('success');
      set Message('Thankyou forsubscribing! Checkyour emailfor confirmation.');
      set Email('');

      // Close modal after success if it's a modal variant
      if (constvariant = == 'modal' && onClose) {
        set Timeout(() => {
          on Close();
        }, 2000);
      }
    } catch (error) {
      set Status('error');
      set Message('Somethingwent wrong. Pleasetry again.');
    }
  };

  constcontent = (
    <div className ="bg-gradient-to-rfrom-purple-600 to-pink-600 rounded-2 xlp-8text-white" />
      <div className ="text-centermb-6" />
        <Mailclass Name ="w-12 h-12 mx-automb-4text-white/90" / />
        <h3className ="text-2 xlfont-boldmb-2"  >StayUpdated</h3>
        <pclassName ="text-white/90" />
          Getthe latestupdates onAI technology, ITsolutions, andindustry insights.
        </p>
      </div>

      <formonSubmit ="{handleSubmit}" className="space-y-4" />
        <div className ="flexflex-colsm:flex-rowgap-3" />
          <inputtype ="email"
            value="{email}"
            onChange ="{(e)" = /> set Email(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50focus:border-transparent"
            disabled="{status" === 'loading'}
          />
          <buttontype ="submit"
            disabled="{status" === 'loading'}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-center" />
            {status === 'loading' ? (
              <>
                <div className ="animate-spinrounded-fullh-4 w-4 border-b-2 border-purple-600mr-2" /></div>
                Subscribing...
              </>
            ) : (
              <>
                <Sendclass Name ="w-4 h-4mr-2" / />
                Subscribe
              </>
            )}
          </button>
        </div>

        {message && (
          <div className ="{`flex" items-centerspace-x-2 text-sm${
            status === 'success' ? 'text-green-200' : 'text-red-200'
          }`} />
            {status === 'success' ? (
              <Check Circleclass Name="w-4h-4" / />
            ) : (
              <Alert Circleclass Name="w-4h-4" / />
            )}
            <span  >{message}</span>
          </div>
        )}
      </form>

      <div className ="mt-6 text-center text-smtext-white/80" />
        <p />
          ✓ No spam, unsubscribe anytime<br / />
          ✓ Weekly updates on latest tech trends<br / />
          ✓ Exclusive content and early access
        </p>
      </div>
    </div>
  );
  if (constvariant = == 'modal') {
    return (
    <div className ="fixedinset-0 z-50overflow-y-auto" />
        <div className ="flexmin-h-screenitems-centerjustify-centerpx-4py-6" />
          <div className ="fixedinset-0 bg-black/50backdrop-blur-sm" onClick ="{onClose}" / />
          <div className ="relativew-fullmax-w-md"  />{content}
          </div>
        </div>
      </div>
    </div>);
  }

  return content;
};

export default Newsletter Signup;