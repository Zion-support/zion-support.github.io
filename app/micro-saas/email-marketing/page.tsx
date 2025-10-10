import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, ArrowRight } from 'lucide-react'
const EmailMarketingSuitePage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title> Email Marketing Suite | Zion Tech Group - AI Email Campaigns </title>
        <meta name="description" content="AI-powered email marketing automation. Create, send, and optimize email campaigns with intelligent automation." /> " <link rel="canonical" href="https://ziontechgroup.com/micro-saas/email-marketing" />"
      </Helmet>
      <div>
        <section className="pt-24 pb-16 px-4"></section>"
          <div>
            <div>
              <Mail className="w-4 h-4" /> " <span>Email Marketing Suite</span>"
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text"></h1>"
              AI Email </h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400"></spa> Campaigns </span>"
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p> "
              AI-powered email marketing automation. Create, send, and optimize email campaigns
              with intelligent automation and personalization. </p>
            <div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2"></button> " <span>Get Started</span>"
                <ArrowRight className="w-5 h-5" />"
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all"></button> "
                View Demo </button>
            </div>
          </div>
        </section>
        <section className="py-16 px-4"></section> " <div>"
            <div>
              <h2 className="text-4xl font-bold text-white mb-4"></h> Coming Soon </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
                We're developing powerful email marketing solutions. Stay tuned for updates!'
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )]
    }
export default EmailMarketingSuitePage;
}