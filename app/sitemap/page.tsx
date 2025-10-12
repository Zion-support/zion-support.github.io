import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../layout';

const SitemapPage: React.FC = () => {
  return (
    <Layout
      title="Sitemap - Zion Tech Group"
      description="Navigate our website easily with our comprehensive sitemap of all pages and services."
      keywords="sitemap, navigation, website map, pages, services"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
              Website <span className="text-cyan-400">Sitemap</span>
            </h1>
            <p className="text-xl text-gray-300 mb-16 text-center">
              Find all our pages and services organized for easy navigation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Main Pages</h2>
                <ul className="space-y-3">
                  <li><a href="/" className="text-cyan-400 hover:text-cyan-300">Home</a></li>
                  <li><a href="/about" className="text-cyan-400 hover:text-cyan-300">About Us</a></li>
                  <li><a href="/contact" className="text-cyan-400 hover:text-cyan-300">Contact</a></li>
                  <li><a href="/pricing" className="text-cyan-400 hover:text-cyan-300">Pricing</a></li>
                  <li><a href="/blog" className="text-cyan-400 hover:text-cyan-300">Blog</a></li>
                  <li><a href="/careers" className="text-cyan-400 hover:text-cyan-300">Careers</a></li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">AI Services</h2>
                <ul className="space-y-3">
                  <li><a href="/ai-services" className="text-cyan-400 hover:text-cyan-300">AI Services Overview</a></li>
                  <li><a href="/ai-analytics" className="text-cyan-400 hover:text-cyan-300">AI Analytics</a></li>
                  <li><a href="/ai-automation" className="text-cyan-400 hover:text-cyan-300">AI Automation</a></li>
                  <li><a href="/ai-chatbot-builder" className="text-cyan-400 hover:text-cyan-300">AI Chatbot Builder</a></li>
                  <li><a href="/ai-cybersecurity" className="text-cyan-400 hover:text-cyan-300">AI Cybersecurity</a></li>
                  <li><a href="/ai-content-generation" className="text-cyan-400 hover:text-cyan-300">AI Content Generation</a></li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">IT Services</h2>
                <ul className="space-y-3">
                  <li><a href="/it-services" className="text-cyan-400 hover:text-cyan-300">IT Services Overview</a></li>
                  <li><a href="/cloud-infrastructure" className="text-cyan-400 hover:text-cyan-300">Cloud Infrastructure</a></li>
                  <li><a href="/cybersecurity-solutions" className="text-cyan-400 hover:text-cyan-300">Cybersecurity Solutions</a></li>
                  <li><a href="/web-development" className="text-cyan-400 hover:text-cyan-300">Web Development</a></li>
                  <li><a href="/mobile-development" className="text-cyan-400 hover:text-cyan-300">Mobile Development</a></li>
                  <li><a href="/api-development" className="text-cyan-400 hover:text-cyan-300">API Development</a></li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">5G Solutions</h2>
                <ul className="space-y-3">
                  <li><a href="/5g-implementation" className="text-cyan-400 hover:text-cyan-300">5G Implementation</a></li>
                  <li><a href="/5g-smart-city-solutions" className="text-cyan-400 hover:text-cyan-300">5G Smart City Solutions</a></li>
                  <li><a href="/5g-network-infrastructure" className="text-cyan-400 hover:text-cyan-300">5G Network Infrastructure</a></li>
                  <li><a href="/5g-iot-solutions" className="text-cyan-400 hover:text-cyan-300">5G IoT Solutions</a></li>
                  <li><a href="/5g-edge-computing" className="text-cyan-400 hover:text-cyan-300">5G Edge Computing</a></li>
                  <li><a href="/5g-private-networks" className="text-cyan-400 hover:text-cyan-300">5G Private Networks</a></li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Micro SAAS</h2>
                <ul className="space-y-3">
                  <li><a href="/micro-saas" className="text-cyan-400 hover:text-cyan-300">Micro SAAS Overview</a></li>
                  <li><a href="/zion-analytics-pro" className="text-cyan-400 hover:text-cyan-300">Zion Analytics Pro</a></li>
                  <li><a href="/zion-chat-ai" className="text-cyan-400 hover:text-cyan-300">Zion Chat AI</a></li>
                  <li><a href="/zion-security-shield" className="text-cyan-400 hover:text-cyan-300">Zion Security Shield</a></li>
                  <li><a href="/zion-cloud-vault" className="text-cyan-400 hover:text-cyan-300">Zion Cloud Vault</a></li>
                  <li><a href="/zion-content-studio" className="text-cyan-400 hover:text-cyan-300">Zion Content Studio</a></li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Resources</h2>
                <ul className="space-y-3">
                  <li><a href="/tutorials" className="text-cyan-400 hover:text-cyan-300">Tutorials</a></li>
                  <li><a href="/case-studies" className="text-cyan-400 hover:text-cyan-300">Case Studies</a></li>
                  <li><a href="/consultation" className="text-cyan-400 hover:text-cyan-300">Free Consultation</a></li>
                  <li><a href="/demo" className="text-cyan-400 hover:text-cyan-300">Live Demo</a></li>
                  <li><a href="/support" className="text-cyan-400 hover:text-cyan-300">Support</a></li>
                  <li><a href="/faq" className="text-cyan-400 hover:text-cyan-300">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SitemapPage;