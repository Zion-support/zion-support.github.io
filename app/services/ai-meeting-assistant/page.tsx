import Link from 'next/link';

export const metadata = {
  title: 'AI Meeting Assistant | Zion Tech Group',
  description: 'Revolutionary AI meeting platform with real-time transcription, intelligent summaries, and action item extraction. Transform your meetings with 95% accuracy and 50% time savings.',
  keywords: 'AI meeting assistant, meeting transcription, meeting summaries, action items, meeting analytics, virtual meetings'
};

export default function AIMeetingAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Meeting Assistant
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your meetings with AI-powered transcription, action items, and intelligent insights
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Transcription</h3>
              <p className="text-gray-600 mb-4">Accurate real-time transcription with 95% accuracy.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Summaries</h3>
              <p className="text-gray-600 mb-4">AI-generated meeting summaries and key points extraction.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Action Items</h3>
              <p className="text-gray-600 mb-4">Automatically extract and track action items from meetings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Meetings?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can revolutionize your meeting productivity.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}