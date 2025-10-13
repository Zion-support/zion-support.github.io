import React from 'react';
import { Helmet } from 'react-helmet-async';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" content="Advanced support solutions by Zion Tech Group"container mx-auto px-4 py-16"text-center"text-4 xl font-bold text-gray-900 mb-4"text-xl text-gray-600 mb-8"min-h-screen pt-20"
<div className="
<div className="text-center"text-4 xl md:text-6 xl font-bold text-white mb-6"
<span className="
<p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"w-5 h-5"
      link: '/community''
    }
  ]

    <>
</>
<Helmet>
<title>Support - Zion Tech Group | Technical Support & Help</title>
<meta name=" content="Get technical support and help for your AI and IT solutions. 24/7 support, documentation, and expert assistance from Zion Tech Group."
<meta name="keywords"technical support, AI support, IT help, customer service, documentation, troubleshooting" /></Helmet>"relative py-20 px-4 overflow-hidden"
<div className="
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"relative max-w-7 xl mx-auto text-center"
<h1 className="
            How Can We
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"text-xl text-gray-300 mb-8 max-w-3 xl mx-auto leading-relaxed"
            Our dedicated support team is here to help you succeed with our AI and IT solutions.
            Find answers, get assistance, and access resources.
          </p></div>
</section>

      {/* Search Section */}
      <section className="
<div className="max-w-4 xl mx-auto"text-center mb-12"
<h2 className="
<p className="text-gray-300"relative"
<Search className="
<input
              type="text"
              placeholder="Search for help, questions, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"py-16 px-4"
<div className="
<div className="text-center mb-16"text-4 xl font-bold text-white mb-4"
<p className="
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
<div className="
<channel.icon className="w-8 h-8 text-white"text-xl font-semibold text-white mb-3"
<p className="
<p className="text-cyan-400 font-semibold mb-2"text-sm text-gray-400"
            ))}
          </div></div>
</section>

      {/* FAQ Section */}
      <section className="
<div className="max-w-4 xl mx-auto"text-center mb-16"
<h2 className="
<p className="text-xl text-gray-300"space-y-6"
            {filteredFaqs.map((faq, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="flex items-start justify-between"flex-1"
<div className="
<span className="bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-2 py-1 rounded-full mr-3"text-xl font-semibold text-white mb-3"
<p className="
</div></div>
            ))}

  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"pt-20 pb-16 px-4 sm:px-6 lg:px-8"
<div className="
<div className="text-center"text-4 xl md:text-6 xl font-bold text-white mb-6"
<span className="
            </h1>
<p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"py-16 px-4 sm:px-6 lg:px-8"
<div className="
<div className="cyber-card"text-center mb-8"
<h2 className="
<p className="text-gray-300"flex flex-col sm:flex-row gap-4 mb-6"
<div className="
<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"text""Search for help...""w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
</div>
<select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="
              >
<option value="all"
<option value="General"
<option value="Technical"
<option value="Billing"
</div>
          </div></div>
</section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"max-w-7 xl mx-auto"
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"text-xl text-gray-300"
              Choose the support channel that works best for you.
            </p></div>
<div className="
            {supportChannels.map((channel, index) => (
  // TODO: Add parameters
)
              <div key={index} className="cyber-card text-center"w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4"
<channel.icon className="
              ))}
            </div></div>
</div></section>
<div className="max-w-7 xl mx-auto"text-center mb-12"
<h2 className="
                Get in Touch
              </h2>
<p className="text-gray-300 max-w-3 xl mx-auto"grid grid-cols-1 md:grid-cols-3 gap-8"
              {supportChannels.map((channel, index) => (
  // TODO: Add parameters
)
                <div key={index} className="
<div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4"w-8 h-8 text-white"
<h3 className="
<p className="text-gray-300 mb-4"text-cyan-400 font-medium"
<p className="
              ))}
            </div>
          ))
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4"max-w-4 xl mx-auto"
<div className="
<h2 className="text-4 xl font-bold text-white mb-4"text-xl text-gray-300"
<div className="
              {faqs.map((faq, index) => (
  // TODO: Add parameters
)
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"text-lg font-semibold text-white mb-3"
<p className="
              ))}
            ))
          </div></div>
</section></div>
  );
};
;
export default SupportPage;
            </div></div>
</div></section>
<Footer /></div>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap } from 'lucide-react';
export default function PagePage() {
  const features = [
    {
      title: "Advanced Technology"Cutting-edge solutions powered by the latest technology",
      icon: <Brain className="Secure & Reliable",
      description: ",
      icon: <Shield className="w-8 h-8",
      description: "Quick deployment and implementation for immediate results"w-8 h-8"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"description" content=" />
      </Helmet>
      
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
            Advanced  solutions by Zion Tech Group
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">{feature.title}</h3>
              <p className="text-gray-300">
        <div className="text-center">
            Support
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced support solutions by Zion Tech Group.
          </p>

        </div>
      </div>
    </div>
  );

