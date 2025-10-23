import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Bot, ArrowRight } from 'lucide-react'
const SmartSupportBotPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Smart Support Bot | Zion Tech Group - AI Customer Service Automation</title>
        <meta name="description" content="AI-powered customer service automation with intelligent support bot. 24/7 customer assistance and automated responses." />
        <link> </link>Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center"></div>
            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Bot className="w-4 h-4" />
              <span>Smart Support Bot</span>
            </div>
            <h1>AI Customer Service </h1>
              <span>Automation</span>
            </h1>
            <p>AI-powered customer service automation with intelligent support bot.
              24/7 customer assistance and automated responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight> </ArrowRight>button>
              <button>View Demo
  </button>
            </div>
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Coming Soon</h2>
              <p>We're developing powerful AI support bot solutions. Stay tuned for updates!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default SmartSupportBotPage
  </button>