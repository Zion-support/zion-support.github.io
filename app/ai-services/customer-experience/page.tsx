import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Heart, MessageCircle, Star, ArrowRight, CheckCircle } from 'lucide-react';

const AICustomerExperiencePage: React.FC = () => {
  return (
    <><Helmet>
        <title>AI Customer Experience | Zion Tech Group - AI-Powered Customer Interactions</title>
        <meta name="description" content="Enhance customer experience with AI-powered solutions. Personalized interactions, intelligent support, and automated customer service." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services/customer-experience" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></></div>
        <section className="pt-24 pb-16 px-4">
          </section><div className="max-w-7xl mx-auto text-center"></div>
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Users className="w-4 h-4" />
              <span>AI Customer Experience</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text">
              AI-Powered Customer </h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Experience</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your customer interactions with AI-powered solutions that deliver personalized, 
              intelligent, and seamless experiences across all touchpoints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all">
                View Demo
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          </section><div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're working on amazing AI customer experience solutions. Stay tuned for updates!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICustomerExperiencePage;