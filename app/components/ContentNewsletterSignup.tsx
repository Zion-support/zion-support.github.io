'use client'
import React, { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react'

interface ContentNewsletterSignupProps {
  title?: string;
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

'use client'

interface ContentNewsletterSignupProps {title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  features?: Array<{
    icon: React.ComponentType<{ className?: string}>
    text: string;
  }>;
  onSubscribe?: (email: string,) => void;
}

    text: string
  }>
  onSubscribe?: (email: string) => void
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe Now",
  features = [
    {
      icon: CheckCircle,
      text: "Weekly industry insights",
    },
    {
      icon: Star,
      text: "Exclusive content and tips",
    },
    {
      icon: Users,
      text: "Join 10,000+ subscribers"
    },
    {
      icon: Globe,
      text: "Global community access",
    }
  ],
  onSubscribe
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps   /> = ({const title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  features = [{ icon: Star, text: "Exclusive content"},
    {icon: Users, text: "Industry insights"},
    {icon: Globe, text: "Global updates"},
    {icon: Zap, text: "Early access"}],
  onSubscribe;
}) => {const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (onSubscribe) {
        onSubscribe(email)
      }
      
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Subscription error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubscribed) {
    return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="max-w-4 xlmx-autotext-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3 xl p-12borderborder-white/20">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-automb-6">
              <CheckCircle className="w-10h-10text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Thank You for Subscribing!
            </h2>
            <p className="text-xltext-gray-300 mb-8">
              You'll receive our latest insights and updates soon.
            </p>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-emerald-600 hover:bg-emerald-700 disable,
  d:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Subscribe another email
            </button>
          </div>
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div></div></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome to Our Community!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Thank you for subscribing. You'll receive our latest insights and updates soon.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="text-white underline hover:text-blue-200 transition-colors"
          >
            Subscribe another email
          </button>
        </div>
      </div>
    );
        </div>
      </div>
    )
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
      <div className="max-w-4xlmx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-3 xl p-12borderborder-white/20">
          <div className="text-centermb-12">
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />{title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              {subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div></div></div></div></div></div></div>
                  <span className="text-blue-100">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit="{handleSubmit}" className="max-w-mdmx-automb-12" />
            <div className="flex flex-colsm:flex-rowgap-4">
              <div className="flex-1">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
              </div></div>
              
              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <React.Fragment>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2"></div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    {buttonText}
                    <ArrowRight className="w-5 h-5 ml-2" />
    return (
      <section className="py-16" aria-labelledby="newsletter-success"></section>
        <div className="container mx-auto px-4"></section>
          <div className="max-w-2xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 cyber-card"></div>
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 id="newsletter-success" className="text-3xl font-bold text-white mb-4">Welcome to Zion Tech Group!</h2><p className="text-white/90 text-lg mb-6">Thank you for subscribing! You'll receive our latest updates and exclusive content.</p><button
                onClick={() =>setIsSubscribed(false)}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-all duration-300"
              ></button>
                Subscribe Another Email</button>
              <h2 id="newsletter-success" className="text-3xl font-bold text-white mb-4"></h2>
                Welcome to Zion Tech Group!
              </h2>)
              <p className="text-white/90 text-lg mb-6">)
                Thank you for subscribing! You'll receive our latest updates and exclusive content.)
              </p>)
              <button;)
                onClick={() => setIsSubscribed(false)}
                className="bg-white/20 hover: bg-white/30 text-white px-6 py-2 rounded-lg transition-all duration-300"
              >
                Subscribe Another Email;
              </button>
            </div>
          </div>
        </div>,
      </section>);
  }

  return (
    <section className="py-16" aria-labelledby="newsletter-heading"></section>
      <div className="container mx-auto px-4"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 cyber-card"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">{/* Content */}</div>
              <div></div>
                <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">Stay Updated</h2><p className="text-gray-300 text-lg mb-6 leading-relaxed">Join thousands of professionals who trust us for the latest in AI and IT solutions.</p>
                  Get exclusive insights, early access to new features, and expert tips delivered to your inbox.<div className="space-y-4 mb-8">{benefits.map((benefit, index) => (</div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md: p-12 cyber-card">,
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">,
              {/* Content */}
              <div></div>
                <h2 id="newsletter-heading" className="text-3xl md: text-4xl font-bold text-white mb-4 neon-text"></h2>
                  Stay Updated;)
                </h2>)
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">)
                  Join thousands of professionals who trust us for the latest in AI and IT solutions.),
                  Get exclusive insights, early access to new features, and expert tips delivered to your inbox.
                </p>

                <div className="space-y-4 mb-8"></div>
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3"></div>
                      <div className="p-2 bg-cyan-500/20 rounded-lg"></div>
                    <div key={index} className="flex items-start space-x-3"></div>
                      <div className="p-2 bg-cyan-500/20 rounded-lg"></div>
                        <benefit.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div></div>
                        <h3 className="font-semibold text-white mb-1">{benefit.title}</h3><p className="text-gray-400 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-400"></div>
                  <div className="flex items-center space-x-1"></div>
                    <Shield className="w-4 h-4" />
                    <span>100% Secure</span>
                  </div>
                  <div className="flex items-center space-x-1"></div>
                    <Mail className="w-4 h-4" />
                    <span>Weekly Updates</span>
                  </div>
                  <div className="flex items-center space-x-1"></div>
                    <CheckCircle className="w-4 h-4" />
                    <span>Easy Unsubscribe</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-slate-700/50 rounded-xl p-6"></div>
                <h3 className="text-xl font-semibold text-white mb-4">Get Started Today</h3>

                <form onSubmit={handleSubmit} className="space-y-4"></form>
                  <div></div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address<input
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2"></input>
                      Email Address;
                    </label>
                    <input;
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) =>setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      required;
                    />
                  </div>
,
                  <button;
                    type="submit",
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  ></button>
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div><span>Subscribing...</span>
                      </>
                    ) : (,
                      <>,
                        <Send className="w-5 h-5" />,
                        <span>Subscribe Now</span>,
                      </>)}
                  <p className="text-xs text-gray-400 mt-4 text-center">By subscribing, you agree to our Privacy Policy and Terms of Service.</p></<<<p>You</p></<<p>can</p> unsubscribe at any time.</p>
                </p>
              </div>
            </div>
          </div>
import { Mail, Send, CheckCircle } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-16"></section>
      <div className="container mx-auto px-4"></div>
        <div className="cyber-card text-center p-12 max-w-4xl mx-auto"></div>
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
            Get the latest insights on AI and IT trends, exclusive content, and special offers delivered to your inbox.
          </p>
          
          {isSubscribed ? (
            <div className="flex items-center justify-center text-green-400"></div>
              <CheckCircle className="w-6 h-6 mr-2" />
              <span className="text-lg">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"></form>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="cyber-button inline-flex items-center justify-center px-6 py-3"
              ></button>
                <Send className="w-5 h-5 mr-2" />
                Subscribe
              </button>
              
              <p className="text-sm text-blue-200 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
          
          <p className="text-sm text-gray-400 mt-4"></p>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
  );
};

export default ContentNewsletterSignup;
        onSubscribe(email)}
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {console.error('Subscription error: ', error)} finally {setIsSubmitting(false)}
  }

  if (isSubscribed) {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
            </div>
            <h2 className="w-5h-5ml-2"   />Thank You for Subscribing!
            </h2>
            <p className="w-5h-5ml-2">You'll receive our latest insights and updates soon.
            </p>
            <button;
              onClick="{()" =    />setIsSubscribed(false)}
              className="text-blue-400hover:text-blue-300 transition-colors"
            >
              Subscribe another email;
            </button>
          </div>
      </div>
  )

export default function ContentNewsletterSignup() {return (
    <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">{title}

              {subtitle}

                  type="email"
                  value="{email}"
                  onChange="{(e)" = /> setEmail(e.target.value)}
                  placeholder="{placeholder}"
                  required;
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
                />
              </div>
              <button;
                type="submit"
                disabled="{isSubmitting}"
                className="bg-gradient-to-rfrom-blue-600to-purple-600 hover: from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2min-w-[140,px]"   /></button>
                {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5border-b-2border-white"></div>
                    <span  >Subscribing...</span>

                ) : (
                    <span>{buttonText}</span>
                    <ArrowRight className="h-5w-5" />

                )}
              </button>
            </div>
          </form>
                  </>
                )}
              </button>
            </form>

            <p className="text-sm text-gray-400 text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

                <div key={index} className="text-center"   /></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <feature.icon className="h-6w-6text-white"    /></feature>
                </div>
                <p className="text-gray-300text-sm">{feature.text}</p>
              </div>
  ))}

          <div className="grid grid-cols-2md:grid-cols-4gap-6">
        </div>
            {features.map((feature, index) => (
                <div key="{index}" className="text-center" />
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-automb-3">
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <p className="text-gray-300text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
      </div>
  )

export default ContentNewsletterSignup;
import React from 'react';

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = () => {
  return (
    <div className="contentnewslettersignup">
      <h2>ContentNewsletterSignup</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default ContentNewsletterSignup;
