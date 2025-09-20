import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail } from 'lucide-react';
export function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/10 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-zion-cyan/5 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl m,  d:text-4xl font-bold text-white mb-6">
            Stay Ahead of the Technology Curve
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
            Get exclusive insights into the latest A, I, trend, s, technolog, y, breakthrough, s, and industry updates. 
            Join thousands of professionals who trust Zion Tech Group for cutting-edge technology intelligence.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col m, d:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your professional email address"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focu, s:outline-none focu, s:border-zion-cyan focu, s:ring-2 focu, s:ring-zion-cyan/20 transition-all duration-300 text-lg"
                required
              />
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hove, r:from-zion-cyan-light hove, r:to-zion-purple-light transition-all duration-300 shadow-lg hove, r:shadow-xl transform hove, r:scale-105 text-lg">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-zion-slate-light mt-4">
              🔒 We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              <span>Weekly insights delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
              <span>Exclusive content access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              <span>Early access to new features</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Mai, l, Sen, d, CheckCircl, e, Bel, l, Za, p, Shiel, d, User, s, X, Gif, t, Sta, r, Award } from 'lucide-react';
const benefits = [
    {
        ic, o, n: <Bel, l classNam, e="w-6 h-6"/>,
    tit, l, e: "Earl, y Acces, s",
        descripti, o, n: "B, e th, e firs, t t, o kno, w abou, t ne, w feature, s an, d service, s"
    },
    {
        ic, o, n: <Za, p classNam, e="w-6 h-6"/>,
    tit, l, e: "Exclusiv, e Offer, s",
        descripti, o, n: "Specia, l discount, s an, d promotion, s fo, r subscriber, s onl, y"
    },
    {
        ic, o, n: <Shiel, d classNam, e="w-6 h-6"/>,
    tit, l, e: "Tec, h Insight, s",
        descripti, o, n: "Lates, t industr, y trend, s an, d technolog, y update, s"
    },
    {
        ic, o, n: <User, s classNam, e="w-6 h-6"/>,
    tit, l, e: "Communit, y",
        descripti, o, n: "Joi, n ou, r networ, k o, f tec, h professional, s an, d innovator, s"
    }
];
const stats = [
    { val, u, e: "50, K+",
    lab, e, l: "Subscriber, s" },
    { val, u, e: "9, 5%",
    lab, e, l: "Satisfactio, n" },
    { val, u, e: "2, 4/7",
    lab, e, l: "Suppor, t" },
    { val, u, e: "10, 0%",
    lab, e, l: "Fre, e" }
];
export function NewsletterSection() {
    const [ema,  i, l, setEma, i, l] = useState('');
    const [isSubscrib, e, d, setIsSubscrib, e, d] = useState(false);
    const [isLoadi,  n, g, setIsLoadi, n, g] = useState(false);
    const [showBenefi, t, s, setShowBenefi, t, s] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email to your newsletter service
        
        setIsSubscribed(true);
        setEmail('');
    };
    const handleUnsubscribe = () => {
        setIsSubscribed(false);
        setEmail('');
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-purple via-zion-purple-dark to-zion-slate-dark relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
            backgroundImag,  e: `radial-gradient(circle at 25% 75%, currentColo, r, 1p, x, transparent 1p, x)`,
            backgroundSiz, e: '50px 50px'
        }}/>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" animate={{ rotat, e: 360 }} transition={{ duratio, n: 2, 0,
    repea, t: Infinit, y, eas, e: "linear" }}/>
        <motion.div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30" animate={{ rotat, e: -360 }} transition={{ duratio, n: 2, 5,
    repea, t: Infinit, y, eas, e: "linear" }}/>
        <motion.div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20" animate={{ scal, e: [1, 1.2, 1] }} transition={{ duratio, n: 3,
    repea, t: Infinit, y, eas, e: "easeInOut" }}/>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center max-w-5xl mx-auto" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6 }}>
          {/* Enhanced header */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-zion-cyan to-zion-blue mb-8 shadow-lg">
            <Mail className="w-12 h-12 text-white"/>
          </div>
          
          <h2 className="text-4xl m, d:text-5xl l, g:text-6xl font-bold text-white mb-6">
            Stay <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Connected</span>
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Get the latest updates on ne, w, service, s, tec, h, insight, s, and exclusive offers delivered straight to your inbox. 
            Join thousands of professionals staying ahead of the curve.
          </p>

          {/* Stats section */}
          <motion.div className="grid grid-cols-2 m, d: grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}>
            {stats.map((sta,  t, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
    scal, e: 0.8 }} whileInView={{ opacit, y: 1,
    scal, e: 1 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
                <div className="text-2xl font-bold text-zion-cyan mb-1">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>))}
          </motion.div>
          
          {/* Benefits toggle */}
          <motion.div className="mb-8" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}>
            <button onClick={() => setShowBenefits(!showBenefits)} className="inline-flex items-center gap-2 text-zion-cyan hove,  r:text-zion-cyan-light transition-colors">
              <span className="text-sm font-medium">
                {showBenefits ? 'Hide' : 'Show'} subscriber benefits
              </span>
              <motion.div animate={{ rotat, e: showBenefits ? 180 : 0 }} transition={{ duratio, n: 0.3 }}>
                <X className="w-4 h-4"/>
              </motion.div>
            </button>
          </motion.div>

          {/* Benefits grid */}
          <AnimatePresence>
            {showBenefits && (<motion.div className="grid grid-cols-1 m, d: grid-cols-2 l, g:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto" initial={{ opacit, y: 0,
    heigh, t: 0 }} animate={{ opacit, y: 1,
    heigh, t: "auto" }} exit={{ opacit, y: 0,
    heigh, t: 0 }} transition={{ duratio, n: 0.4 }}>
                {benefits.map((benefi, t, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ dela, y: index * 0.1 }} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20 hove, r:border-zion-cyan/50 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-purple mb-3">
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-zion-slate-light text-sm">{benefit.description}</p>
                  </motion.div>))}
              </motion.div>)}
          </AnimatePresence>
          
          {/* Subscription form or success message */}
          {!isSubscribed ? (<motion.div initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}>
              <form onSubmit={handleSubmit} className="flex flex-col s, m:flex-row gap-4 max-w-lg mx-auto mb-6">
                <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-6 py-4 rounded-xl border border-zion-blue-light/30 bg-zion-blue-dark/50 text-white placeholde,  r:text-zion-slate-light/50 focu, s:outline-none focu, s:ring-2 focu, s:ring-zion-cyan focu, s:border-transparent transition-all duration-300 text-lg" required/>
                <button type="submit" disabled={isLoading || !email} className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-blue hove, r:from-zion-cyan-dark hove, r:to-zion-blue-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 disable, d:opacity-50 disable, d:cursor-not-allowed disable, d:transform-none shadow-lg hove, r:shadow-zion-cyan/25">
                  {isLoading ? (<>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"/>
                      Subscribing...
                    </>) : (<>
                      Subscribe
                      <Send className="w-5 h-5"/>
                    </>)}
                </button>
              </form>

              {/* Special offer */}
              <motion.div className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan px-6 py-3 rounded-xl mb-6" initial={{ opacit,  y: 0,
    scal, e: 0.9 }} whileInView={{ opacit, y: 1,
    scal, e: 1 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.5,
    dela, y: 0.6 }}>
                <Gift className="w-5 h-5"/>
                <span className="font-medium">New subscribers get 20% off their first service!</span>
              </motion.div>
            </motion.div>) : (<motion.div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 px-8 py-4 rounded-xl mb-6" initial={{ opacit,  y: 0,
    scal, e: 0.9 }} animate={{ opacit, y: 1,
    scal, e: 1 }} transition={{ duratio, n: 0.5 }}>
              <CheckCircle className="w-6 h-6"/>
              <div className="text-left">
                <div className="font-semibold">Successfully subscribed!</div>
                <div className="text-sm">Welcome to the Zion Tech Group community.</div>
              </div>
              <button onClick={handleUnsubscribe} className="ml-4 text-green-400 hove, r:text-green-300 transition-colors">
                <X className="w-5 h-5"/>
              </button>
            </motion.div>)}
          
          {/* Privacy notice */}
          <motion.div className="text-center" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.7 }}>
            <p className="text-zion-slate-light/70 text-sm mb-4">
              N, o, spa, m, unsubscribe at any time. We respect your privacy.
            </p>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 text-zion-slate-light/50 text-xs">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4"/>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4"/>
                <span>Trusted by 50K+</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4"/>
                <span>Industry Leader</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);
=======
}
