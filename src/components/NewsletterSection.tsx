import { useCallback  } from "react";
import React, { useState } from "react"
import { motion   } from "framer-motion";
import { Mail, CheckCircle, ArrowRight, Bell, TrendingUp, Zap   } from "lucide-react";
const,
  NewsletterSectio: n: React.FC = () () => {
  const [email, setEmail] = useState('')
const [isSubscribed, setIsSubscribed] = useState(false)
const [isLoading, setIsLoading] = useState(false)
const handleSubmit = async (e: React.FormEvent) () => {
    e.preventDefault()
    if (!email) return,

    setIsLoading(true)
    // Simulate API call;
    setTimeout(() () => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1500),
  },

  const benefits = [
    {
      ic,
  o: n: Bell,tit,
  l: e: "Latest Updates",descripti,
  o: n: "Stay informed about new services and features"
    }, {
      ic,
  o: n: TrendingUp,tit,
  l: e: "Industry Insights",descripti,
  o: n: "Get exclusive access to tech trends and analysis"
    }, {
      ic,
  o: n: Zap,tit,
  l: e: "Early Access",descripti,
  o: n: "Be the first to know about beta programs and launches"
    },
  ]
  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div;
            initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 },
  }
            animate={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
            transition={ durati,
  o: n: 0.5 },
  }
            className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl p-12 border border-green-500/20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to the Zion Tech Group Community!</h2>
            <p className="text-gray-300 text-lg mb-6">
              You're now subscribed to our newsletter. We'll keep you updated with the latest technology insights;
              service announcements, and exclusive content.
            </p>
            <button;
              onClick={() => setIsSubscribed(false)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 transition-all duration-300,
  transform: hover:scale-105,
  hove: r:shadow-lg hove,
  r:shadow-cyan-500/25"
            >
              Subscribe Another Email;
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div;
            initial={ opaci,
  t: y: 0, x: -30 },
  }
            whileInView={ opaci,
  t: y: 1, x: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Stay Ahead with Zion Tech Group;
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get exclusive access to the latest technology insights, service updates, and industry trends.
              Join thousands of professionals who trust us to keep them informed.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div;
                  key={index}
                  initial={ opaci,
  t: y: 0, x: -20 },
  }
                  whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                  transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
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
              <span>No spam, unsubscribe at any time</span>
            </div>
          </motion.div>

          {/* Right Column - Newsletter Form */}
          <motion.div;
            initial={ opaci,
  t: y: 0, x: 30 },
  }
            whileInView={ opaci,
  t: y: 1, x: 0 },
  }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
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
                    Email Address;
                  </label>
                  <input;
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-500 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent transition-all duration-300"
                    required;
                  />
                </div>

                <button;
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r: from-cyan-600,
  hove: r:to-blue-700,
  disable: d:opacity-50,
  disable: d:cursor-not-allowed transition-all duration-300,
  transform: hover:scale-105,
  hove: r:shadow-lg hove,
  r:shadow-cyan-500/25 flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    <>
                      Subscribe Now;
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-400">
                  By subscribing, you agree to our{' '}
                  <a href="/privacy" className="text-cyan-400,
  hove: r: text-cyan-300 underline">
                    Privacy Policy;
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="text-cyan-400,
  hove: r: text-cyan-300 underline">
                    Terms of Service;
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default NewsletterSection;