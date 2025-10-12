import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Link } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
'use client'

interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>
    text: string;
  }>
  onSubscribe?: (email: string) => void;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps />= ({
  
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

    setIsSubmitting(true)
    try {
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1000))
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
    return (</ContentNewsletterSignupProps>
    <div></div>
              <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
            </div>
            <h2 className="w-5h-5ml-2" />Thank You for Subscribing!</h2>
            </h2>
            <p className="w-5h-5ml-2">You'll receive our latest insights and updates soon.</p>
            </p>
            <button;
              onClick="{()" =  />setIsSubscribed(false)}
              className="text-blue-400hover:text-blue-300 transition-colors"</button>
            ></button>
              Subscribe another email;</button>
            </button>
          </div>
      </div>
    )

export default function ContentNewsletterSignup() {
  return (
    <div>) : (</div>
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

export default ContentNewsletterSignup;

}}}