import { use State } from 'react';
import { ArrowRight } from 'lucide-react';
'use client'

interface Content Newsletter Signup Props {
  title?: string
  subtitle?: string
  placeholder?: string
  button Text?: string
  features?: Array<{
    i con: React.Component Type<{ class Name?: string }>
    text: string
  }>
  on Subscribe?: (email: string) => void
}

const Content Newsletter Signup: React.F C<C ontent Newsletter Signup Props /> = ({
  const title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  button Text = "Subscribe",
  features = [
    { icon: Star, text: "Exclusive content" },
    { icon: Users, text: "Industry insights" },
    { icon: Globe, text: "Global updates" },
    { icon: Zap, text: "Early access" }
  ],
  on Subscribe
}) => {
  const [email, set Email] = use State('')
  const [is Submitting, set Is Submitting] = use State(false)
  const [is Subscribed, set Is Subscribed] = use State(false)

  const handle Submit = async (e: React.Form Event) => {
    e.prevent Default()
    if (!email) return

    set Is Submitting(true)
    try {
      // Simulate A PI call
      await new Promise(resolve => set Timeout(resolve, 1000))
      if (on Subscribe) {
        on Subscribe(email)
      }
      set Is Subscribed(true)
      set Email('')
    } catch (error) {
      console.error('Subscription error: ', error)
    } finally {
      set Is Submitting(false)
    }
  }

  if (is Subscribed) {
    return (

    <d iv class Name="p y-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        <d iv class Name="m ax-w-4 xlmx-autotext-center">
        </d iv>
          <d iv class Name="b g-white/5 backdrop-blur-sm rounded-3 xl p-12borderborder-white/20">
        </d iv>
            <d iv class Name="w-20 h-20 b g-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-centermx-automb-6">
        </d iv>
              <C heck Circle class Name="w-10h-10t ext-white" / />
            </d iv>
            <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-4">Thank You for Subscribing!
            </h2>
            <p c lass Name="t ext-xltext-gray-300mb-8">
              You'll receive our latest insights and updates soon.
            </p>
            <b utton
              on Click="{()" =  />set Is Subscribed(false)}
              class Name="t ext-blue-400hover:text-blue-300transition-colors"
            >
              Subscribe another email

            </b utton>
          </d iv>
      </d iv>
    )
  }

  return (

    <d iv class Name="p y-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
      <d iv class Name="m ax-w-4xlmx-auto">
        </d iv>
        <d iv class Name="b g-white/5 backdrop-blur-sm rounded-3 xl p-12borderborder-white/20">
        </d iv>
          <d iv class Name="t ext-centermb-12">
        </d iv>
            <h2 c lass Name="t ext-3 xl md:text-4 xl font-boldtext-whitemb-4">{title}
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-2xlmx-auto">
              {subtitle}

            </p>
          </d iv>

          <f orm on Submit="{handle Submit}" class Name="m ax-w-mdmx-automb-12" />
            <d iv class Name="f lex flex-colsm:flex-rowgap-4">
        </d iv>
              <d iv class Name="f lex-1">
        </d iv>
                <i nput
                  type="email"
                  value="{email}"
                  on Change="{(e)" = /> set Email(e.target.value)}
                  placeholder="{placeholder}"
                  required
                  class Name="w-f ull px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
                />
              </d iv>
              <b utton
                type="submit"
                disabled="{is Submitting}"
                class Name="b g-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2min-w-[140,px]" />
                {is Submitting ? (

                    <d iv class Name="a nimate-spin rounded-full h-5 w-5border-b-2border-white">
        </d iv></d iv>
                    <s pan>Subscribing...</s pan>

                ) : (

                    <s pan>{button Text}</s pan>
                    <A rrow Right class Name="h-5w-5" />

                )}

              </b utton>
            </d iv>
          </f orm>

          <d iv class Name="g rid grid-cols-2md:grid-cols-4gap-6">
        </d iv>
            {features.map((feature, index) => (

                <d iv key="{index}" class Name="t ext-center" />
                <d iv class Name="w-12 h-12 b g-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-centermx-automb-3">
        </d iv>
                  <f eature.icon class Name="h-6w-6t ext-white" / />
                </d iv>
                <p c lass Name="t ext-gray-300text-sm">{feature.text}</p>
              </d iv>
            ))}

          </d iv>
      </d iv>
  )
}

export default Content Newsletter Signup;
