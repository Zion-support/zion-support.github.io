<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD:src_backup_temp/components/NewsletterSection.tsx
import React from 'react';
"description": "Get exclusive access to tech trends and analysis";
    }, {;
      "icon": "Za p",;";
      "title": "Early Access",;";
      "description": "Be the first to know about beta programs and launches"};
=======

>>>>>>> 51ecdee898e0f4ef436b73e6c8197c3d4a98485c
      description: "Get exclusive access to tech trends and analysis";
},    {;
      icon: Zap,";
      title: "Early Access",";
      description: "Be the first to know about beta programs and launches"};  ];
  if(isSubscribed) {;
    return (";
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">";
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <motion.div;
<<<<<<< HEAD
            initial = {;
=======
            initial = {;
<<<<<<< HEAD:src_backup_temp/components/NewsletterSection.tsx
  { "opacity": "0",;
  "scale": "0.8;
"}}
            animate = {;
  { "opacity": "1",;
  "scale": "1;
"}}
            transition={{ "duration": "0.5 "}}";
=======

  { opacity: 0,
  scale: 0.8;
}}
            animate = {;

  { opacity: 1,
  scale: 1;
}}
            transition={{ duration: 0.5 }}";
>>>>>>> origin/automation-fixes:src/components/NewsletterSection.tsx
            className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl p-12 border border-green-500/20";
";
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6">";
              <CheckCircle className="w-10 h-10 text-white"   />;
            </div>";
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to the Zion Tech Group Community!</h2>";
            <p className="text-gray-300 text-lg mb-6">;
              You're now subscribed to our newsletter.We'll keep you updated with the latest technology insights,              service announcements, and exclusive content.</p>;
            <button;
              onClick={() => setIsSubscribed(false)}";
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full "hover": "fro m-cyan-600 "hover": t o-blue-700 transition-all duration-300 transform "hover": scal e-105 "hover": shado w-lg "hover": shado w-cyan-500/25";
            >;
              Subscribe Another Email;
            </button>;
          </motion.div>;
        </div>;
      </section>;) "}
  return (";
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">";
      <div className="max-w-7xl mx-auto px-6">";
        <div className="grid grid-cols-1 "lg": "gri d-cols-2 gap-12 items-center">;
          {/* Left Column - Content */"}
          <motion.div;
            initial = {;
<<<<<<< HEAD:src_backup_temp/components/NewsletterSection.tsx
  { "opacity": "0",;
  "x": "-30;
"}}
            whileInView = {;
  { "opacity": "1",;
  "x": "0;
"}}
            transition={{ "duration": "0.6 "}}
=======

  { opacity: 0,
  x: -30;
}}
            whileInView = {;

  { opacity: 1,
  x: 0;
}}
            transition={{ duration: 0.6 }}
>>>>>>> origin/automation-fixes:src/components/NewsletterSection.tsx
";
            <h2 className="text-4xl "md": "tex t-5xl font-bold text-white mb-6">;
              Stay Ahead with Zion Tech Group;
            </h2>";
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
              Get exclusive access to the latest technology insights", service updates, and industry trends.Join thousands of professionals who trust us to keep them informed.</p>;
";
            <div className="space-y-4 mb-8">;
              {benefits.map((benefit, index) => (;
                <motion.div;
                  key={index}
                  initial = {;
<<<<<<< HEAD:src_backup_temp/components/NewsletterSection.tsx
  { "opacity": "0",;
  "x": "-20;
"}}
                  whileInView = {;
  { "opacity": "1",;
  "x": "0;
"}}
                  transition = {;
  { "duration": "0.5",;
  "delay": "inde x * 0.1;
"}}";
=======

  { opacity: 0,
  x: -20;
}}
                  whileInView = {;

  { opacity: 1,
  x: 0;
}}
                  transition = {;

  { duration: 0.5,
  delay: index * 0.1;
}}";
>>>>>>> origin/automation-fixes:src/components/NewsletterSection.tsx
                  className="flex items-start";
";
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mr-4 flex-shrink-0">";
                    <benefit.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>";
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>";
                    <p className="text-gray-400">{benefit.description}</p>;
                  </div>;}}"
                  className="flex items-start"
"
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mr-4 flex-shrink-0">"
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>"
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}"
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>;) ) }
            </div>;
";
            <div className="flex items-center text-sm text-gray-400">";
              <CheckCircle className="w-5 h-5 text-green-400 mr-2"   />              <span>No spam, unsubscribe at  time</span>;
            </div>;
          </motion.div>;
          {/* Right Column - Newsletter Form */}
          <motion.div;
            initial = {;
<<<<<<< HEAD:src_backup_temp/components/NewsletterSection.tsx
  { "opacity": "0",;
  "x": "3 0;
"}}
            whileInView = {;
  { "opacity": "1",;
  "x": "0;
"}}
            transition = {;
  { "duration": "0.6",;
  "delay": "0.2;
"}}
=======

  { opacity: 0,
  x: 30;
}}
            whileInView = {;

  { opacity: 1,
  x: 0;
}}
            transition = {;

  { duration: 0.6,
  delay: 0.2;
}}
>>>>>>> origin/automation-fixes:src/components/NewsletterSection.tsx
          >";
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl p-8 border border-slate-500">";
              <div className="text-center mb-6">";
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">";
                  <Mail className="w-8 h-8 text-white"   />;
                </div>";
                <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>"                <p className="text-gray-300">Get the latest updates delivered to your inbox</p>;
              </div>;
";
              <form onSubmit={handleSubmit} className="space-y-4">;
                <div>";
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">;
                    Email Address;
                  </label>;
                  <input";
                    type="email";
                    id="email";}}
          >"
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl p-8 border border-slate-500">"
              <div className="text-center mb-6">"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">"
                  <Mail className="w-8 h-8 text-white"   />
                </div>"
                <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter"                <p className="text-gray-300">Get the latest updates delivered to your inbox</p>
              </div>
"
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>"
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}";
                    placeholder="Enter your email address";
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-500 rounded-lg text-white placeholder-gray-400 "focus": "outlin e-none "focus": rin g-2 "focus": rin g-cyan-500 "focus": borde r-transparent transition-all duration-300";
                    required;
                  />;
                </div>;
                <button";
                  type="submit";
                  disabled={isLoading || !email"}";
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg "hover": "fro m-cyan-600 "hover": t o-blue-700 "disabled": opacit y-50 "disabled": curso r-not-allowed transition-all duration-300 transform "hover": scal e-105 "hover": shado w-lg "hover": shado w-cyan-500/25 flex items-center justify-center";
                  {isLoading ? (;";
                    <div className="flex items-center">";
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>;
                      Subscribing...;
                    </div>;
                  ) : (;
                    <>;
                      Subscribe Now";
                      <ArrowRight className="ml-2 w-5 h-5"   />                    </>;
                  )"}
                </button>;
              </form>;
";
              <div className="mt-6 text-center">";
                <p className="text-xs text-gray-400">;
                  By subscribing, you agree to our{' '}";
                  <a href="/privacy" className="text-cyan-400 "hover": "tex t-cyan-300 underline">;
                    Privacy Policy';
                  </a>{' '"}
                  and{' '}";
                  <a href="/terms" className="text-cyan-400 "hover": "tex t-cyan-300 underline">;
                    Terms of Service;
                  </a>;
                </p>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
<<<<<<< HEAD:src_backup_temp/components/NewsletterSection.tsx
    </section>;) "};
;
=======
    </section>;) };
>>>>>>> origin/automation-fixes:src/components/NewsletterSection.tsx
export default NewsletterSection}}}'";
</motion>;
</motion>;
</motion>;
</motion>
=======
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, Bell, Zap, Shield, Users, X, Gift, Star, Award } from 'lucide-react';
const benefits = [
    {
        icon: <Bell className="w-6 h-6"/>,
        title: "Early Access",
        description: "Be the first to know about new features and services"
    },
    {
        icon: <Zap className="w-6 h-6"/>,
        title: "Exclusive Offers",
        description: "Special discounts and promotions for subscribers only"
    },
    {
        icon: <Shield className="w-6 h-6"/>,
        title: "Tech Insights",
        description: "Latest industry trends and technology updates"
    },
    {
        icon: <Users className="w-6 h-6"/>,
        title: "Community",
        description: "Join our network of tech professionals and innovators"
    }
];
const stats = [
    { value: "50K+", label: "Subscribers" },
    { value: "95%", label: "Satisfaction" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Free" }
];
export function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showBenefits, setShowBenefits] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email to your newsletter service
        console.log('Newsletter subscription:', email);
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
            backgroundImage: `radial-gradient(circle at 25% 75%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
        }}/>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}/>
        <motion.div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}/>
        <motion.div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}/>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center max-w-5xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {/* Enhanced header */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-zion-cyan to-zion-blue mb-8 shadow-lg">
            <Mail className="w-12 h-12 text-white"/>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Stay <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Connected</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Get the latest updates on new services, tech insights, and exclusive offers delivered straight to your inbox. 
            Join thousands of professionals staying ahead of the curve.
          </p>

          {/* Stats section */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            {stats.map((stat, index) => (<motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
                <div className="text-2xl font-bold text-zion-cyan mb-1">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>))}
          </motion.div>
          
          {/* Benefits toggle */}
          <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <button onClick={() => setShowBenefits(!showBenefits)} className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors">
              <span className="text-sm font-medium">
                {showBenefits ? 'Hide' : 'Show'} subscriber benefits
              </span>
              <motion.div animate={{ rotate: showBenefits ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <X className="w-4 h-4"/>
              </motion.div>
            </button>
          </motion.div>

          {/* Benefits grid */}
          <AnimatePresence>
            {showBenefits && (<motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4 }}>
                {benefits.map((benefit, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300">
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
          {!isSubscribed ? (<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
                <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-6 py-4 rounded-xl border border-zion-blue-light/30 bg-zion-blue-dark/50 text-white placeholder:text-zion-slate-light/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 text-lg" required/>
                <button type="submit" disabled={isLoading || !email} className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-dark hover:to-zion-blue-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-zion-cyan/25">
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
              <motion.div className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan px-6 py-3 rounded-xl mb-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                <Gift className="w-5 h-5"/>
                <span className="font-medium">New subscribers get 20% off their first service!</span>
              </motion.div>
            </motion.div>) : (<motion.div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 px-8 py-4 rounded-xl mb-6" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <CheckCircle className="w-6 h-6"/>
              <div className="text-left">
                <div className="font-semibold">Successfully subscribed!</div>
                <div className="text-sm">Welcome to the Zion Tech Group community.</div>
              </div>
              <button onClick={handleUnsubscribe} className="ml-4 text-green-400 hover:text-green-300 transition-colors">
                <X className="w-5 h-5"/>
              </button>
            </motion.div>)}
          
          {/* Privacy notice */}
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.7 }}>
            <p className="text-zion-slate-light/70 text-sm mb-4">
              No spam, unsubscribe at any time. We respect your privacy.
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
}
>>>>>>> origin/backup-improvements-20250827-015311
>>>>>>> 51ecdee898e0f4ef436b73e6c8197c3d4a98485c
