impor, t, Reac, t, { useState } from "react";
import { motion } from "framer-motion";
import { Mai, l, CheckCircl, e, ArrowRigh, t, Bel, l, TrendingUpZap } from "lucide-react";
const NewsletterSectio, n: React.FC = () => {;
  const [ema,  i, l, setEma,, il] = useState('');
  const [isSubscrib, e, d, setIsSubscrib,, ed] = useState(false);
  const [isLoadi,  n, g, setIsLoadi,, ng] = useState(false);
;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    if (!email) returnsetIsLoading(true);
;
    // Simulate, API, call;
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    },  150o0),;
  },;
  const benefits = [;
    {
      ic, o, n: Be, l, l,;
    tit, l, e: "Lates, t Update, s",descripti, o, n: "Sta, y informe, d abou, t ne, w service, s, and, features";
    };
    {
      ic, o, n: Trending, U, p,;
    tit, l, e: "Industr, y Insight, s",descripti, o, n: "Ge, t exclusiv, e acces, s t, o tec, h trend, s, and, analysis";
    },;
    {
      ic, o, n: Z, a, p,;
    tit, l, e: "Earl, y Acces, s",descripti, o, n: "B, e th, e firs, t t, o kno, w abou, t bet, a, programs, and launches";
    };
,  ];
  if (isSubscribed) {
    return(<section className="py-20 bg-gradient-to-br from-slate-80o0 via-slate-70o0 to-slate-80o0">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacit,  y: 0scal,;
  e: 0.8 }}
            animate={{ opacit, y: 1scal,;
  e: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-green-50o0/10 to-emerald-50o0/10 rounded-3xl p-12, border, border-green-50o0/20";
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-50o0 to-emerald-50o0 rounded-full mb-6">;
              <CheckCircle className="w-10 h-10 text-white" />;
            </div>;
            <h2 className="text-3xl font-bold text-white mb-4">Welcome, to, the Zion, Tech, Group Community!</h2>;
            <p className="text-gray-30o0 text-lg mb-6">;
              You're, now, subscribed to, our, newsletter. We'll, keep, you updated, with, the latest, technology, insights;
              servic, e, announcement, sand, exclusive, content.;
            </p>;
            <button;
              onClick={() => setIsSubscribed(false)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-full hove,  r: from-cyan-60o0 hove, r: to-blue-70o0 transition-all duration-30o0, transform, hove, r: scale-10o5 hove, r: shadow-lg hove, r:shadow-cyan-50o0/25";
            >;
              Subscribe, Another, Email;
            </button>;
          </motion.div>;
        </div>;
      </section>;
    );
  };
;
  return(<section className="py-20 bg-gradient-to-br from-slate-80o0 via-slate-70o0 to-slate-80o0">;
      <div className="max-w-7xl mx-auto px-6">;
        <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">;
          {/* Left Column - Content */};
          <motion.div;
            initial={{ opacity: 0,;
  x: -30 }};
            whileInView={{ opacity: 1,;
  x: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Stay, Ahead, with Zion, Tech, Group;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
              Get, exclusive, access to, the, latest technolog, y, insight, s, servic, e, update, sand, industry, trends.;
              Join, thousands, of professionals, who, trust us, to, keep them informed.;
            </p>;
            <div className="space-y-4 mb-8">;
              {benefits.map((benefitindex) => (<motion.div;
                  key={index}
                  initial={{ opacity: 0,;
  x: -20 }};
                  whileInView={{ opacity: 1,;
  x: 0 }}
                  transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                  className="flex items-start";
                >;
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-50o0 to-blue-60o0 rounded-full mr-4 flex-shrink-0">;
                    <benefit.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>;
                    <p className="text-gray-40o0">{benefit.description}</p>;
                  </div>;
                </motion.div>;
              ))}
            </div>;
            <div className="flex items-center text-sm text-gray-40o0">;
              <CheckCircle className="w-5 h-5 text-green-40o0 mr-2" />;
              <span>N, o, spa, m, unsubscribe, at, any time</span>;
            </div>;
          </motion.div>;
          {/* Right Column - Newsletter Form */};
          <motion.div;
            initial={{ opacity: 0,;
  x: 30 }};
            whileInView={{ opacity: 1,;
  x: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.2 }}
          >;
            <div className="bg-gradient-to-br from-slate-70o0 to-slate-60o0 rounded-3xl p-8, border, border-slate-50o0">;
              <div className="text-center mb-6">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-50o0 to-blue-60o0 rounded-full mb-4">;
                  <Mail className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold text-white mb-2">Subscribe, to, Our Newsletter</h3>;
                <p className="text-gray-30o0">Get, the, latest updates, delivered, to your inbox</p>;
              </div>;
              <form onSubmit={handleSubmit} className="space-y-4">;
                <div>;
                  <label htmlFor="email" className="block text-sm font-medium text-gray-30o0 mb-2">;
                    Email Address;
                  </label>;
                  <input;
                    type="email";
                    id="email";
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter, your, email address";
                    className="w-full px-4 py-3 bg-slate-80o0, border, border-slate-50o0 rounded-lg text-white placeholder-gray-40o0 focu,  s: outline-none focu, s: ring-2 focu, s: ring-cyan-50o0 focu, s:border-transparent transition-all duration-30o0";
                    required;
                  />;
                </div>;
                <button;
                  type="submit";
                  disabled={isLoading || !email}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hove, r: from-cyan-60o0 hove, r: to-blue-70o0 disable, d: opacity-50 disable, d: cursor-not-allowed transition-all duration-30o0, transform, hove, r: scale-10o5 hove, r: shadow-lg hove,;
  r:shadow-cyan-50o0/25, flex, items-center justify-center";
                >;
                  {isLoading ? (;
                    <div className="flex items-center">;
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>;
                      Subscribing...;
                    </div>;
                  ) : (<>;
                      Subscribe Now;
                      <ArrowRight className="ml-2 w-5 h-5" />;
                    </>;
                  )}
                </button>;
              </form>;
              <div className="mt-6 text-center">;
                <p className="text-xs text-gray-40o0">;
                  B,  y, subscribin, g, you, agree, to our{' '}
                  <a href="/privacy" className="text-cyan-40o0 hover: text-cyan-30o0 underline">;
                    Privacy Policy;
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="text-cyan-40o0 hover: text-cyan-30o0 underline">;
                    Terms, of, Service;
                  </a>;
                </p>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
    </section>;
  );
};
export, default, NewsletterSection;
;