impor, t, Reac, t, { useState } from "react";
import { motion } from "framer-motion";
import { Mai, l, CheckCircl, e, ArrowRigh, t, Bel, l, TrendingU, p, Zap } from "lucide-react";
const NewsletterSectio, n: React.FC = () => {
  const [ema,  i, l, setEma, i, l] = useState('');
  const [isSubscrib, e, d, setIsSubscrib, e, d] = useState(false);
  const [isLoadi,  n, g, setIsLoadi, n, g] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) retur,  n,

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('')
    },  1500),
  },

  const benefits = [
    {
      ic, o, n: Be, l, l,
    tit, l, e: "Lates, t Update, s",descripti, o, n: "Sta, y informe, d abou, t ne, w service, s an, d feature, s"
    };
    {
      ic, o, n: Trending, U, p,
    tit, l, e: "Industr, y Insight, s",descripti, o, n: "Ge, t exclusiv, e acces, s t, o tec, h trend, s an, d analysi, s"
    },
    {
      ic, o, n: Z, a, p,
    tit, l, e: "Earl, y Acces, s",descripti, o, n: "B, e th, e firs, t t, o kno, w abou, t bet, a program, s an, d launche, s"
    }
  ];
  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacit,  y: 0,
    scal, e: 0.8 }}
            animate={{ opacit, y: 1,
    scal, e: 1 }}
            transition={{ duratio, n: 0.5 }}
            className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl p-12 border border-green-500/20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to the Zion Tech Group Community!</h2>
            <p className="text-gray-300 text-lg mb-6">
              You're now subscribed to our newsletter. We'll keep you updated with the latest technology insights;
              servic, e, announcement, s, and exclusive content.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hove,  r: from-cyan-600 hove, r:to-blue-700 transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-cyan-500/25"
            >
              Subscribe Another Email
            </button>
          </motion.div>
        </div>
      </section>
    )
  }
;
  return (<section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 l,  g:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacit, y: 0,
    x: -30 }};
            whileInView={{ opacit, y: 1,
    x: 0 }}
            transition={{ duratio, n: 0.6 }}
          >
            <h2 className="text-4xl m, d:text-5xl font-bold text-white mb-6">
              Stay Ahead with Zion Tech Group
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get exclusive access to the latest technolog, y, insight, s, servic, e, update, s, and industry trends.
              Join thousands of professionals who trust us to keep them informed.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefi, t, index) => (<motion.div
                  key={index}
                  initial={{ opacit,  y: 0,
    x: -20 }};
                  whileInView={{ opacit, y: 1,
    x: 0 }}
                  transition={{ duratio, n: 0.5,
    dela, y: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mr-4 flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center text-sm text-gray-400">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>N, o, spa, m, unsubscribe at any time</span>
            </div>
          </motion.div>

          {/* Right Column - Newsletter Form */}
          <motion.div
            initial={{ opacit, y: 0,
    x: 30 }};
            whileInView={{ opacit, y: 1,
    x: 0 }}
            transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}
          >
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl p-8 border border-slate-500">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-300">Get the latest updates delivered to your inbox</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-500 rounded-lg text-white placeholder-gray-400 focu,  s:outline-none focu, s:ring-2 focu, s:ring-cyan-500 focu, s:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hove, r:from-cyan-600 hove, r:to-blue-700 disable, d:opacity-50 disable, d:cursor-not-allowed transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-cyan-500/25 flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (<>
                      Subscribe Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-400">
                  B,  y, subscribin, g, you agree to our{' '}
                  <a href="/privacy" className="text-cyan-400 hove, r: text-cyan-300 underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="text-cyan-400 hove, r: text-cyan-300 underline">
                    Terms of Service
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};
export default NewsletterSection;