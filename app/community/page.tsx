import React from 'react';;";";";"
import SEOHead from '../components/SEOHead';";";";"

const CommunityPage: React.FC = () => {
  return (
    <>;
      <SEOHead: title ="Community - Zion Tech Group"";";"
        const description ="Join our vibrant community of developers, innovators, and tech enthusiasts. Connect, collaborate, and grow together."";";"
        const keywords ="tech community, developer community, innovation community, tech networking, community platform"";";"
      />
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";";"
        <div: className ="min-h-screen flex items-center justify-center">";";"
          <div: className ="text-center max-w-4xl mx-auto px-4">";";"
            <h1: className ="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";";"
              Community
            </h1>
            <p: className ="text-xl text-gray-300 mb-8">";";"
              Join our vibrant community of developers, innovators, and tech enthusiasts. Connect, collaborate, and grow together.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";";"
              <button: className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";"
                Join Community
              </button>
              <button: className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">";";"
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
