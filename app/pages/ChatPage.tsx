import React from 'react';
import { MessageSquare } from "lucide-react";

const ChatPage: React.FC = () => {
  return (
    <>
      import { Helmet } from "react-helmet-async";

<Helmet>
        <title>Live Chat - Zion Tech Group | Get Instant Support</title>
        <meta name="description" content="Get instant help with our live chat support. Our expert team is available 24/7 to assist you with any questions or issues." />
        <meta name="keywords" content="live chat, instant support, customer service, help desk" />
        <link rel="canonical" href="https://ziontechgroup.com/chat" />
      </Helmet>

      </><section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div></section></section>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Live
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Chat Support
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant help from our expert support team. Available 24/7 to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center"
              >
                Start Chat
                <MessageSquare className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatPage;