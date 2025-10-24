<<<<<<< HEAD
'use client'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'
=======
import { ArrowRight }  from "lucide-react";
import React, { useState }  from "react";import { Mail, ArrowRight }  from "lucide-react";'use client'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-dbdf
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
const ContentNewsletterSignup: React.FC = () => {
  return(<div>
        </div>
        </div>
        </div>)
      const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)
    setEmail('')
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
    </div>
  )
}
  if (isSubmitted) {
<<<<<<< HEAD
    return (
      <section className=&quot;mb-16&quot; aria-labelledby=&quot;newsletter-heading&quot;></section>
        <div className=&quot;bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl text-center&quot;></div>
          <div className=&quot;text-4xl mb-4&quot;>✅</div>
          <h2 className=&quot;text-2xl font-bold mb-2&quot;>Thank You!</h2>
          <p className=&quot;text-green-100&quot;>You've been successfully subscribed to our newsletter.</p>
=======
  return(<section className="mb-16" aria-labelledby="newsletter-heading"></section>
<//section>
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl text-center"></div>
<//div>
          <div className="text-4xl mb-4">✅</div>
<//div>
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
<//h2>
          <p className="text-green-100">You've been successfully subscribed to our newsletter.</p>
<//p>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
        </div>

        <//div>
      </section>

      <//section>)
    )
<<<<<<< HEAD
  }
  return (
  <sectionclassName=&quot;mb-16&quot;aria-labelledby=&quot;newsletter-heading&quot;><divclassName=&quot;bg-gradient-to-r from-purple-600to-blue-600text-whitep-8rounded-xl&quot;><divclassName=&quot;max-w-2 xlmx-autotext-center&quot;><id=&quot;newsletter-heading&quot;className=&quot;text-2 xlsm:text-3 xlfont-boldmb-4&quot;></id=&quot;newsletter-heading&quot;className=&quot;text-2 xlsm:text-3 xlfont-boldmb-4&quot;>Stay Updated with AI Innovation
        </h><spanclassName=&quot;text-purple-100mb-6&quot;></spa></className=&quot;text-purple-100mb-6&quot;>Get the latest insights on AI technology, industry trends, and exclusive offers delivered to your inbox.
        </p><formonSubmit={handleSubmit}className=&quot;flex flex-colsm:flex-row gap-4max-w-mdmx-auto&quot;><divclassName=&quot;flex-1relative&quot;><MailclassName=&quot;absolute left-3 top-1/2 transform -translate-y-1/2text-gray-400w-5h-5&quot; /><inputtype=&quot;email&quot;
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
               placeholder=&quot;Enter your emailaddress&quot;
               className=&quot;w-full pl-10pr-4 py-3 rounded-lg text-gray-900placeholder-gray-500 focus:outline-nonefocus:ring-2focus:ring-purple-300&quot;
                required
               aria-label=&quot;Emailaddress&quot;
              />
          </di><
             type=&quot;submit&quot;
              disabled={isSubmitting}
              className=&quot;bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center&quot;
            ></button>
              {isSubmitting ? (
                <div className=&quot;w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin&quot;></div>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
=======
}
  return(<sectionclassName="mb-16"aria-labelledby="newsletter-heading"><divclassName="bg-gradient-to-r from-purple-600to-blue-600text-whitep-8rounded-xl"><divclassName="max-w-2 xlmx-autotext-center"><id="newsletter-heading"className="text-2 xlsm:text-3 xlfont-boldmb-4"></id="newsletter-heading"className="text-2 xlsm:text-3 xlfont-boldmb-4">Stay Updated with AI Innovation;
        </h><spanclassName="text-purple-100mb-6"></spa></className="text-purple-100mb-6">Get the latest insights on AI technology, industry trends, and exclusive offers delivered to your inbox.
        </p><formonSubmit={handleSubmit}className="flex flex-colsm: flex-row gap-4max-w-mdmx-auto"><divclassName="flex-1relative"><MailclassName="absolute left-3 top-1/2 transform -translate-y-1/2text-gray-400w-5h-5" /><inputtype="email"
                value={
  email
}
                onChange={)
  (e) =>setEmail(e.target.value)
}
               placeholder="Enter your emailaddress"
               className="w-full pl-10pr-4 py-3 rounded-lg text-gray-900placeholder-gray-500 focus: outline-nonefocus:ring-2focus:ring-purple-300"
                required;
               aria-label="Emailaddress"
              />
          </di><
             type="submit"
              disabled={
  isSubmitting
}
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            ></button>
<//button>
              {
  isSubmitting ? (
                <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
<//div>
              ) : (
                <>
         
      </>
                  Subscribe;
                  <ArrowRight className="w-4 h-4 ml-2" />
        </ArrowRight>
        </ArrowRight>
        </ArrowRight>
                  </ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                </>

                <//>
              )
}
            </button>

            <//button>
          </form>
<<<<<<< HEAD
          <p className=&quot;text-xs text-purple-200 mt-4&quot;>
=======

          <//form>
          <p className="text-xs text-purple-200 mt-4">
        </p>
        </p>
        </p>
        </div>
        </p>
          </p className="text-xs text-purple-200 mt-4">
        </div>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
            We respect your privacy. Unsubscribe at any time.
          </p>

          <//p>
        </div>

        <//div>
      </div>

      <//div>
    </section>

    <//section>
  )
}
export default ContentNewsletterSignup;
