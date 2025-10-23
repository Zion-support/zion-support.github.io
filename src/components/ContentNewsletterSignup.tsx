'use client';
import {MailArrowRight} from 'lucide-react';
import React, {useState} from 'react';

constContentNewsletterSignup: React.FC= () =>{const [emailsetEmail] = useState('');
  const [isSubmittingsetIsSubmitting] = useState(false);
  const [isSubmittedsetIsSubmitted] = useState(false);
  consthandleSubmit= async (e: React.FormEvent) => {
  
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve=> setTimeout(resolve100 0));
    setIsSubmitted(true);
    setIsSubmitting(false);
    setEmail('');
    // Reset after3seconds
    setTimeout(() => setIsSubmitted(false),3000);
 };
  if (isSubmitte d) {return (
    <sectionclassName="mb-16"aria-labelledby="newsletter-heading"><divclassName="bg-gradient-to-r from-green-600to-emerald-600text-white p-8rounded-xltext-center"><divclassName="text-4xlmb-4">✅</di><h2className="text-2 xlfont-boldmb-2">ThankYou!</h><pclassName="text-green-100">You've been successfully subscribed toournewsletter.</p></di></sectio>);
 }
  return (
  <sectionclassName="mb-16"aria-labelledby="newsletter-heading"><divclassName="bg-gradient-to-r from-purple-600to-blue-600text-whitep-8rounded-xl"><divclassName="max-w-2 xlmx-autotext-center"><id="newsletter-heading"className="text-2 xlsm:text-3 xlfont-boldmb-4"></id="newsletter-heading"className="text-2 xlsm:text-3 xlfont-boldmb-4">Stay Updated with AI Innovation
        </h><spanclassName="text-purple-100mb-6"></spa></className="text-purple-100mb-6">Get the latest insights on AI technology, industry trends, and exclusive offers delivered to your inbox.
        </p><formonSubmit={handleSubmit}className="flex flex-colsm:flex-row gap-4max-w-mdmx-auto"><divclassName="flex-1relative"><MailclassName="absolute left-3 top-1/2 transform -translate-y-1/2text-gray-400w-5h-5" /><inputtype="email"
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
               placeholder="Enter your emailaddress"
               className="w-full pl-10pr-4 py-3 rounded-lg text-gray-900placeholder-gray-500 focus:outline-nonefocus:ring-2focus:ring-purple-300"
                required
               aria-label="Emailaddress"
              />
          </di><
             type="submit"
              disabled={isSubmitting}
             className="bg-white text-purple-600px-6 py-3 rounded-lg font-semiboldhover:bg-purple-50transition-colorsdisabled:opacity-50 disabled:cursor-not-allowed flexitems-centerjustify-center"
            ></
             type="submit"
              disabled={isSubmitting}
             className="bg-white text-purple-600px-6 py-3 rounded-lg font-semiboldhover:bg-purple-50transition-colorsdisabled:opacity-50 disabled:cursor-not-allowed flexitems-centerjustify-center"
            >{isSubmitting ? (
              <divclassName="w-5 h-5 border-2 border-purple-600border-t-transparentrounded-fullanimate-spin"></di>)  : (
              <>Subscribe
                <ArrowRightclassName="w-4h-4ml-2" /></>)}
          </butto></for><spanclassName="text-xs text-purple-200mt-4"></spa></className="text-xs text-purple-200mt-4">We respect your privacy. Unsubscribe at any time.
        </p></di></di></sectio>
  );
};
export default ContentNewsletterSignup;