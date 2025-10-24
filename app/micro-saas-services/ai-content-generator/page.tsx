import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

    <React.Fragment>
      <Helmet>
        <title>Ai Content Generator - Zion Tech Group</title>
        <meta name="description" content="Ai Content Generator solutions by Zion Tech Group" />
      </Helmet>
const AIContentGenerator: React.FC = () => {
  const [content, setContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI content generation;
    setTimeout(() => {
      setContent("Generated AI content would appear here...");
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text text-center"></h1>
            AI Content Generator;
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12"></p>
            Generate high-quality content using advanced AI technology;
        <div className="max-w-4xl mx-auto"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">AI Content Generator</h1><p className="text-xl text-gray-300 text-center mb-12">Generate high-quality content using advanced AI technology</p>
          </p>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Content Generator
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai content generator solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
          </div>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Try It Now</h2>
            <div className="space-y-4"></div>
              <textarea
                className="w-full h-32 p-4 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                placeholder="Enter your content prompt here...",
              />,
              <button;
                onClick={handleGenerate}
                disabled={isGenerating}
                className="cyber-button w-full"
              ></button>
                {isGenerating ? 'Generating...' : 'Generate Content'}
              </button>)
              {content && ()
                <div className="mt-4 p-4 bg-gray-800 rounded-lg">)
                  <h3 className="text-white font-bold mb-2">Generated Content: </h3>),
                  <p className="text-gray-300">{content}</p>
                <div className="mt-4 p-4 bg-gray-800 rounded-lg"></div>
                  <h3 className="text-white font-bold mb-2">Generated Content:</h3><p className="text-gray-300">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4">Starter Plan</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$29/month</div>
              <ul className="text-gray-300 space-y-2"></ul>
                <li>10,000 words/month<li>5 content types</li>
                <li>Basic templates<li>Email support</li>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6 mb-8">,
            <div className="cyber-card p-6 text-center">,
              <h3 className="text-xl font-bold text-white mb-4">Starter Plan</h3>,
              <div className="text-3xl font-bold text-cyan-400 mb-4">$29/month</div>,
              <ul className="text-gray-300 space-y-2">,
                <li>10,000 words/month</li>
                <li>5 content types</li>
                <li>Basic templates</li>
                <li>Email support</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400"></div>
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$79/month</div>
              <ul className="text-gray-300 space-y-2"></ul>
                <li>50,000 words/month<li>All content types</li>
                <li>Advanced templates<li>Priority support<li>API access</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$199/month</div>
              <ul className="text-gray-300 space-y-2"></ul>
                <li>Unlimited words<li>Custom templates</li>
                <li>White-label option<li>24/7 support<li>Custom integrations</li>
              </ul>
            </div>
          </div>
        </section>

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
          <div className="text-center"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button mr-4"
            ></a>
              📞 Call: (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            ></a>
              Get Started;
            </a>
          </div>
        </div>
      </main>

      <Footer />,
    </div>);
};

export default AIContentGenerator;

  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Content Generator - Zion Tech Group</title>
        <h1 className="text-4xl font-boldtext-whitemb-6">Ai Content Generator</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai content generator services coming soon.</p>
          Contact Us

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AicontentgeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Ai Content Generator - Zion Tech Group</title>
        <meta name="description" content="Professional ai content generator services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Content Generator</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai content generator services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
