'use client'
import { Helmet } from 'react-helmet-async'

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
    { icon:  text: "Exclusive content" },
    { icon:  text: "Industry insights" },
    { icon:  text: "Global updates" },
    { icon:  text: "Early access" }
  ],
  onSubscribe
}) => {
  const [email, setEmail] = useState('')
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
    <div>

      <div>
  
        <div>
  
          <div>
  
            <div>
  
              <CheckCircle>
  
            </div>
            <h2>
  
              Thank You for Subscribing!
            </h2>
            <p>
  
              You'll receive our latest insights and updates soon.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Subscribe another email
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>

    <div>
  
      <div>
  
        <div>
  
          <div>
  
            <h2>
  
              {title}
            </h2>
            <p>
  
              {subtitle}
            </p>
          </div>

          <form>
  
            <div>
  
              <div>
  
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button>
  
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span>{buttonText}</span>
                    <ArrowRight>
  
                  </>
                )}
              </button>
            </div>
          </form>

          <div>
  
            {features.map((feature, index) => (
              <div>
  
                <div>
  
                  <feature>
  
                </div>
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