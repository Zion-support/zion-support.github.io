'use client'
import React, { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react'
interface ContentNewsletterSignupProps {
  title?: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>
    text: string
  }>
  onSubscribe?: (email: string) => void
}
const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  features = [
    { icon: Star, text: "Exclusive content" },
    { icon: Users, text: "Industry insights" },
    { icon: Globe, text: "Global updates" },
    { icon: Zap, text: "Early access" }
  ],
  onSubscribe
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsLoading(true)
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
      <div> </div><div> </div><div> </div><div> </div><CheckCircle> </CheckCircle></div>
            <h2>Thank You for Subscribing!
            </h2></h2>
            <p>You'll receive our latest insights and updates soon.
            </p></p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Subscribe another email
            </button>
          </div>
          <h2>Welcome to Our Community!
          </h2></h2>
          <p>Thank you for subscribing. You'll receive our latest insights and updates soon.
          </p></p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="text-white underline hover:text-blue-200 transition-colors">
            Subscribe another email>
        </div>
      </div>
    )
  }
  return (
    <div> </div><div> </div><div> </div><div> </div><h2>{title}
            </h2></h2>
            <p>{subtitle}
            </p></p>
            <div>{features.map((feature, index) => (
                </div><div> </div><div> </div><feature> </feature></div>
                  <span className="text-blue-100">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Newsletter Form */}
          <div> </div><form> </form><div> </div><label>Email Address>
          </label></div>
          <form> </form><div> </div><div> </div><Mail> </Mail><input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button>{isLoading ? (
                  </button><React> </React><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2"></div>
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div>Subscribing...
                  </div></React.Fragment>
                ) : (
                  <React>{buttonText}
                    </React><ArrowRight> </ArrowRight></React.Fragment>
                )}
              </button>
              <p>We respect your privacy. Unsubscribe at any time.
              </p></p>
            </form>
                    <ArrowRight> </ArrowRight></>
                )}
              </button>
            </div>
          </form>
          <div>{features.map((feature, index) => (
              </div><div> </div><div> </div><feature> </feature></div>
                <p className="text-gray-300 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentNewsletterSignup
  </label>
  </button>
  </ContentNewsletterSignupProps>
export default ContentNewsletterSignup