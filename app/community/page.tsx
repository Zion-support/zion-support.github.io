import React from 'react';
import { Helmet } from 'react-helmet-async';

const CommunityPage = () => {
  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, share knowledge, and get support." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Community
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of developers, engineers, and innovators building the future with AI and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Discord Server</h3>
              <p className="text-gray-300 mb-6">
                Join our active Discord community for real-time discussions, support, and networking.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Real-time chat</li>
                <li>• Technical support</li>
                <li>• Project showcases</li>
                <li>• Networking events</li>
              </ul>
              <a
                href="#"
                className="inline-block mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Join Discord
              </a>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">GitHub</h3>
              <p className="text-gray-300 mb-6">
                Contribute to open-source projects and collaborate with developers worldwide.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Open source projects</li>
                <li>• Code contributions</li>
                <li>• Issue discussions</li>
                <li>• Pull requests</li>
              </ul>
              <a
                href="#"
                className="inline-block mt-4 bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                View GitHub
              </a>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Stack Overflow</h3>
              <p className="text-gray-300 mb-6">
                Get help and share knowledge on Stack Overflow with our community tags.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Q&A discussions</li>
                <li>• Expert answers</li>
                <li>• Community voting</li>
                <li>• Reputation system</li>
              </ul>
              <a
                href="#"
                className="inline-block mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Ask Questions
              </a>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Meetups</h3>
              <p className="text-gray-300 mb-6">
                Join local and virtual meetups to learn, network, and share experiences.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Local meetups</li>
                <li>• Virtual events</li>
                <li>• Technical talks</li>
                <li>• Networking sessions</li>
              </ul>
              <a
                href="#"
                className="inline-block mt-4 bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Find Events
              </a>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Blog</h3>
              <p className="text-gray-300 mb-6">
                Read the latest insights, tutorials, and case studies from our team and community.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Technical articles</li>
                <li>• Case studies</li>
                <li>• Industry insights</li>
                <li>• Guest posts</li>
              </ul>
              <a
                href="/blog"
                className="inline-block mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Read Blog
              </a>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Newsletter</h3>
              <p className="text-gray-300 mb-6">
                Stay updated with the latest news, updates, and community highlights.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Weekly updates</li>
                <li>• Product announcements</li>
                <li>• Community spotlights</li>
                <li>• Exclusive content</li>
              </ul>
              <a
                href="#"
                className="inline-block mt-4 bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Subscribe
              </a>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Community Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Be Respectful</h3>
                <p className="text-gray-300">
                  Treat all community members with respect and kindness. We welcome diverse perspectives and encourage constructive discussions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Share Knowledge</h3>
                <p className="text-gray-300">
                  Help others learn and grow by sharing your knowledge, experiences, and insights. We all benefit from collective learning.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Stay On Topic</h3>
                <p className="text-gray-300">
                  Keep discussions relevant to AI, IT solutions, and related technologies. Off-topic discussions may be moved or removed.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Follow Rules</h3>
                <p className="text-gray-300">
                  Adhere to our community rules and guidelines. Violations may result in warnings or removal from the community.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Join Our Community?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with like-minded professionals and be part of the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/blog"
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Read Our Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPage;