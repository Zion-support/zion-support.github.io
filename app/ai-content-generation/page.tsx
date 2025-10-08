import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentGenerationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Content Generation
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Create High-Quality Content at Scale with AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Generate engaging, SEO-optimized content 10x faster with our advanced AI writing tools. 
            From blog posts to social media, create content that converts and engages your audience.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Content Generation Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-4">Blog & Article Writing</h3>
              <p className="text-gray-300 mb-4">
                Generate comprehensive blog posts, articles, and long-form content with perfect SEO optimization.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• SEO-optimized content</li>
                <li>• Multiple writing styles</li>
                <li>• Research integration</li>
                <li>• Plagiarism-free content</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-4">Social Media Content</h3>
              <p className="text-gray-300 mb-4">
                Create engaging posts for all social platforms with platform-specific optimization.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Platform-specific formatting</li>
                <li>• Hashtag optimization</li>
                <li>• Visual content suggestions</li>
                <li>• Engagement optimization</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-white mb-4">Email Marketing</h3>
              <p className="text-gray-300 mb-4">
                Craft compelling email campaigns that drive opens, clicks, and conversions.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Subject line optimization</li>
                <li>• Personalization at scale</li>
                <li>• A/B testing variants</li>
                <li>• Call-to-action optimization</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold text-white mb-4">E-commerce Content</h3>
              <p className="text-gray-300 mb-4">
                Generate product descriptions, reviews, and marketing copy that sells.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Product descriptions</li>
                <li>• Category pages</li>
                <li>• Review responses</li>
                <li>• Ad copy generation</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Ad Copy & Landing Pages</h3>
              <p className="text-gray-300 mb-4">
                Create high-converting ad copy and landing page content that drives sales.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Google Ads copy</li>
                <li>• Facebook Ads content</li>
                <li>• Landing page copy</li>
                <li>• Conversion optimization</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Technical Documentation</h3>
              <p className="text-gray-300 mb-4">
                Generate clear, comprehensive technical documentation and user guides.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• API documentation</li>
                <li>• User manuals</li>
                <li>• Help center articles</li>
                <li>• Knowledge base content</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Models Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Advanced AI Models
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">GPT-4 Turbo Integration</h3>
              <p className="text-gray-300 mb-6">
                Powered by the latest GPT-4 Turbo model for superior content quality and creativity.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>✓ 128k context window</li>
                <li>✓ Advanced reasoning capabilities</li>
                <li>✓ Multimodal content generation</li>
                <li>✓ Real-time web access</li>
              </ul>
            </div>
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Custom Fine-tuned Models</h3>
              <p className="text-gray-300 mb-6">
                Specialized models trained on your industry and brand voice for consistent, on-brand content.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Industry-specific training</li>
                <li>✓ Brand voice consistency</li>
                <li>✓ Custom terminology</li>
                <li>✓ Continuous learning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$49/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ 50,000 words/month</li>
                <li>✓ 5 content templates</li>
                <li>✓ Basic SEO optimization</li>
                <li>✓ Email support</li>
                <li>✓ Standard integrations</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card border-2 border-cyan-400">
              <div className="text-center mb-4">
                <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$149/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ 200,000 words/month</li>
                <li>✓ 20+ content templates</li>
                <li>✓ Advanced SEO optimization</li>
                <li>✓ Priority support</li>
                <li>✓ Custom integrations</li>
                <li>✓ Brand voice training</li>
                <li>✓ Plagiarism checking</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$499/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Unlimited words</li>
                <li>✓ All content templates</li>
                <li>✓ Custom model training</li>
                <li>✓ 24/7 dedicated support</li>
                <li>✓ White-label options</li>
                <li>✓ API access</li>
                <li>✓ Team collaboration</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our AI Content Generation?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Proven Results</h3>
              <div className="space-y-6">
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
                  <div className="text-gray-300">Faster content creation</div>
                </div>
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
                  <div className="text-gray-300">Reduction in content costs</div>
                </div>
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
                  <div className="text-gray-300">Increase in content output</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>SEO-optimized content that ranks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Consistent brand voice across all content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Multiple content formats and styles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Plagiarism-free, original content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Scalable content production</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Start Creating Amazing Content Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 1,000+ content creators and marketers using our AI to produce high-quality content at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Trial
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIContentGenerationPage;