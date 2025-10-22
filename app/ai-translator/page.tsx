import React from 'react'
import SEOHead from '../components/SEOHead'
const AITranslatorPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Translator - Zion Tech Group"
        description="Advanced AI-powered translation service supporting 100+ languages with context-aware translations and real-time processing."
        keywords="AI translator, translation service, multilingual, language processing, real-time translation"
        canonicalUrl="https://ziontechgroup.com/ai-translator"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              AI Translator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Break language barriers with our advanced AI translation service supporting 100+ languages with context-aware accuracy.
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">100+ Languages</h3>
              <p className="text-gray-300">Support for major world languages with regional dialects and variations.</div>
            
            <div className="bg-slate-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Real-time Processing</h3>
              <p className="text-gray-300">Instant translations with context-aware accuracy and natural language flow.</div>
            
            <div className="bg-slate-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Context-Aware</h3>
              <p className="text-gray-300">Understands context and provides culturally appropriate translations.</div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Supported Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Portuguese', 'Russian', 'Italian', 'Dutch'].map((lang) => (
                <div key={lang} className="bg-slate-700 rounded-lg p-3 text-center">
                  <span className="text-gray-300">{lang}
              ))}
            </div>
          
          <div className="text-center">
            <a
              href="/contact?service=ai-translator"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              Start Translating
            </div>
    </>
  )
  }
export default AITranslatorPage
                        </span>
                      </div>
                    </div>
                  </p>
                </span>
              </p>
            </span>
          </p>
        </span>
      </div>
    </p>
  </div>
</div>