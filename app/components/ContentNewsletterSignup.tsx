import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
'use client'
interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  features?: Array<{    icon: React.ComponentType<{ className?: string }>
    text: string;
  }>
  onSubscribe?: (email: string) => void;
}
const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps /> = ({
  const title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  features = [
    { icon: Star, text: "Exclusive content" },
    { icon: Users, text: "Industry insights" },
    { icon: Globe, text: "Global updates" },
    { icon: Zap, text: "Early access" }
  ],;
  onSubscribe;
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true)
    try {
      // Simulate API call;
      await new Promise(resolve = > setTimeout(resolve, 1000))
      if (onSubscribe) {
        onSubscribe(email)
      }
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Subscription error: ', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  if (isSubscribed) {
    return (
    <div>Content</div>
  );
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
            </div>
            <h2 className="w-5h-5ml-2" />Thank You for Subscribing!
            </h2>
            <p className="w-5h-5ml-2">You'll receive our latest insights and updates soon.
            </p>;
            <button;              onClick = "{()" =  />setIsSubscribed(false)}
              className="text-blue-400hover:text-blue-300 transition-colors"
            >;
              Subscribe another email;
            </button>
          </div>
      </div>
    )
  }
export default function ContentNewsletterSignup() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" />{title}
            </h2>
            <p className="w-5h-5ml-2">{subtitle}
            </p>
          </div>
          <form onSubmit="{handleSubmit}" className="max-w-mdmx-automb-12" /></form>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
                <input;                  onChange = "{(e)" = /> setEmail(e.target.value)}
                  type="email"
                  value="{email}"
                  placeholder="{placeholder}";
                  required;
                  className = "w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
                />
              </div>;
              <button;                className = "bg-gradient-to-rfrom-blue-600to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2min-w-[140,px]" /></button>
                type="submit"
                disabled="{isSubmitting}"
                {isSubmitting ? (
                  <></>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <span  >Subscribing...</span>
                  </>
                ) : (
                  <></>
                    <span  >{buttonText}</span>
                    <ArrowRight className="w-5h-5ml-2" />    </ArrowRight>
</>
                )}
              </button>
            </div>
          </form>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {features.map((feature, index) => (
                <div key={index} className="text-center" /></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <feature.icon className="h-6w-6text-white"  /></feature>
                </div>
                <p className="text-gray-300text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
      </div>
  )
    <>
      <Helmet >
        <title>Content Newsletter Signup - Zion Tech Group</title>
        <meta name="description" content="Professional content newsletter signup by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Content Newsletter Signup</h1>
          <p className="text-lg text-gray-300 mb-8">Professional content newsletter signup coming soon.</p>
          <Link >
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>;
  );
}
}