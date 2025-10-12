import {useState} from 'react';
import {ArrowRight} from 'lucide-react';
'use client'

interface Content Newsletter Signup Props {
  title?: string
  subtitle?: string
  placeholder?: string
  button Text?: string
  features?: Array<{
    icon: React.Component Type<{ class Name?: string }>
    text: string
  }>
  on Subscribe?: (email: string) => void
}

const Content Newsletter Signup: React.FC<Content Newsletter Signup Props /> = ({
  consttitle = "StayUpdated withOur LatestInsights",
  subtitle = "Getexclusive content, industryinsights, andearly accessto newfeatures deliveredto yourinbox.",
  placeholder = "Enteryour emailaddress",
  buttonText = "Subscribe",
  features = [
    { icon: Star, text: "Exclusivecontent" },
    { icon: Users, text: "Industryinsights" },
    { icon: Globe, text: "Globalupdates" },
    { icon: Zap, text: "Earlyaccess" }
  ],
  onSubscribe
}) => {
  const [email, set Email] = use State('')
  const [is Submitting, set Is Submitting] = use State(false)
  const [is Subscribed, set Is Subscribed] = use State(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.prevent Default()
    if (!email) return

    set Is Submitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      if (onSubscribe) {
        on Subscribe(email)
      }
      set Is Subscribed(true)
      set Email('')
    } catch (error) {
      console.error('Subscriptionerror: ', error)
    } finally {
      set Is Submitting(false)
    }
  }

  if (isSubscribed) {
    return (
    <div className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900" />
        <div className ="max-w-4 xlmx-autotext-center" />
          <div className ="bg-white/5 backdrop-blur-smrounded-3 xlp-12borderborder-white/20" />
            <div className ="w-20 h-20 bg-gradient-to-rfrom-green-500 to-emerald-600 rounded-fullflex items-centerjustify-centermx-automb-6" />
              <Check Circleclass Name="w-10h-10text-white" / />
            </div>
            <h2className ="text-3 xlfont-boldtext-whitemb-4"  />ThankYou forSubscribing!
            </h2>
            <pclassName ="text-xltext-gray-300mb-8" />
              You'llreceive ourlatest insightsand updatessoon.
            </p>
            <buttononClick ="{()" =  />set Is Subscribed(false)}
              className="text-blue-400hover:text-blue-300transition-colors"
            >
              Subscribe another email
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900" />
      <div className ="max-w-4xlmx-auto" />
        <div className ="bg-white/5 backdrop-blur-smrounded-3 xlp-12borderborder-white/20" />
          <div className ="text-centermb-12" />
            <h2className ="text-3 xlmd:text-4 xlfont-boldtext-whitemb-4"  />{title}
            </h2>
            <pclassName ="text-xltext-gray-300 max-w-2xlmx-auto" />
              {subtitle}
            </p>
          </div>

          <formonSubmit ="{handleSubmit}" className="max-w-mdmx-automb-12" />
            <div className ="flexflex-colsm:flex-rowgap-4" />
              <div className ="flex-1" />
                <inputtype ="email"
                  value="{email}"
                  onChange ="{(e)" = /> set Email(e.target.value)}
                  placeholder="{placeholder}"
                  requiredclassName ="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
                />
              </div>
              <buttontype ="submit"
                disabled="{is Submitting}"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2min-w-[140,px]" />
                {is Submitting ? (
                  <>
                    <div className ="animate-spinrounded-fullh-5 w-5border-b-2border-white" /></div>
                    <span  >Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span  >{buttonText}</span>
                    <Arrow Rightclass Name="h-5w-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className ="grid grid-cols-2md:grid-cols-4gap-6" />
            {features.map((feature, index) => (

                <divkey ="{index}" className="text-center" />
                <div className ="w-12 h-12 bg-gradient-to-rfrom-blue-500 to-purple-600 rounded-fullflex items-centerjustify-centermx-automb-3" />
                  <feature.iconclassName ="h-6w-6text-white" / />
                </div>
                <pclassName ="text-gray-300text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content Newsletter Signup;