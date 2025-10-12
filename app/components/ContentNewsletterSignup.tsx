import { useState   } from 'react';
import { ArrowRight   } from 'lucide-react';
'useclient'

interfaceContentNewsletterSignupProps {
  title?: stringsubtitle?: stringplaceholder?: stringbuttonText?: stringfeatures?: Array<{
    icon: React.ComponentType<{ className?: string }>
    text: string
  }>
  onSubscribe?: (email: string) => void
}

constContentNewsletterSignup: React.FC<ContentNewsletterSignupProps /> = ({
  consttitle = "StayUpdatedwithOurLatestInsights",
  subtitle = "Getexclusivecontent, industryinsights, andearlyaccesstonewfeaturesdeliveredtoyourinbox.",
  placeholder = "Enteryouremailaddress",
  buttonText = "Subscribe",
  features = [
    { icon: Star, text: "Exclusivecontent" },
    { icon: Users, text: "Industryinsights" },
    { icon: Globe, text: "Globalupdates" },
    { icon: Zap, text: "Earlyaccess" }
  ],
  onSubscribe
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  consthandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) returnsetIsSubmitting(true)
    try {
      // SimulateAPIcallawaitnewPromise(resolve => setTimeout(resolve, 1000))
      if (onSubscribe) {
        onSubscribe(email)
      }
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Subscriptionerror: ', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubscribed) {
    return (
    <divclassName="p y-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
        <divclassName="m a x-w-4 xlmx-autotext-center">
          <divclassName="b g-white/5 backdrop-blur-smrounded-3 xlp-12borderborder-white/20">
            <divclassName="w-20 h-20 b g-gradient-to-rfrom-green-500 to-emerald-600 rounded-fullflexitems-centerjustify-centermx-automb-6">
              <CheckCircleclassName="w-10h-10t e xt-white" />
            </div>
            <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"  />ThankYouforSubscribing!
            </h2>
            <pclassName="t e xt-xltext-gray-300 mb-8">You'llreceiveourlatestinsightsandupdatessoon.</p>
            <buttononClick="{()" =  />setIsSubscribed(false)}
              className="t e xt-blue-400hover:text-blue-300transition-colors">
              Subscribeanotheremail
    <>
            </button>
          </div>
      </div>
    )
  }

  return (
    <divclassName="p y-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
      <divclassName="m a x-w-4xlmx-auto">
        <divclassName="b g-white/5 backdrop-blur-smrounded-3 xlp-12borderborder-white/20">
          <divclassName="t e xt-centermb-12">
            <h2 className="t e xt-3 xlmd:text-4xlfont-boldtext-whitemb-4"  />{title}
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-2xlmx-auto">
              {subtitle}
    <>
            </p>
          </div>
    <>
          <formonSubmit="{handleSubmit}" className="m a x-w-mdmx-automb-12" />
            <divclassName="f l exflex-colsm:flex-rowgap-4">
              <divclassName="f l ex-1">
                <inputtype="email"
                  value="{email}"
                  onChange="{(e)" = /> setEmail(e.target.value)}
                  placeholder="{placeholder}"
                  requiredclassName="w-f u llpx-6 py-4 bg-white/10 borderborder-white/20 rounded-lgtext-whiteplaceholder-gray-400 focus:outline-nonefocus:ring-2focus:ring-blue-500focus:border-transparent"
                />
              </div>
              <buttontype="submit"
                disabled="{isSubmitting}"
                className="b g-gradient-to-rfrom-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-whitefont-semiboldpx-8 py-4 rounded-lgtransition-allduration-300 flexitems-centerjustify-centerspace-x-2min-w-[140,px]" />
                {isSubmitting ? (
    <>
                  <>
                    <divclassName="a n imate-spinrounded-fullh-5 w-5border-b-2border-white"></div>
                    <span  >Subscribing...</span>
                  </>
                ) : (
    <>
                  <>
                    <span>{buttonText}</span>
                    <ArrowRightclassName="h-5w-5" />
                  </>
                )}
    <>
              </button>
            </div>
          </form>
          <divclassName="g r idgrid-cols-2md:grid-cols-4gap-6">
            {features.map((feature, index) => (

    <>
                <divkey="{index}" className="t e xt-center" />
                <divclassName="w-12 h-12 b g-gradient-to-rfrom-blue-500 to-purple-600 rounded-fullflexitems-centerjustify-centermx-automb-3">
                  <feature.iconclassName="h-6w-6t e xt-white" />
                </div>
                <pclassName="t e xt-gray-300text-sm">{feature.text}</p>
              </div>
            ))}
    <>
          </div>
      </div>
  )
}

exportdefaultContentNewsletterSignup;
    </>
