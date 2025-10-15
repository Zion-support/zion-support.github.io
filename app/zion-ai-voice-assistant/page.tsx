import React from 'react';
import SEOHead from '../components/SEOHead';

const ZionAIVoiceAssistantPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion AI Voice Assistant - Intelligent Conversational AI"
        description="Create powerful voice assistants with natural language processing, speech recognition, and multi-language support. Perfect for customer service, smart homes, and business automation."
        keywords="voice assistant, conversational AI, speech recognition, natural language processing, voice automation, smart assistant, voice AI, speech synthesis, voice commands"
        canonicalUrl="https://ziontechgroup.com/zion-ai-voice-assistant"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Zion AI Voice Assistant</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Build intelligent voice assistants with advanced speech recognition, natural language understanding, and seamless multi-platform integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#demo" 
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Try Voice Demo
                </a>
                <a 
                  href="/contact?service=zion-ai-voice-assistant" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Build Your Assistant
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Voice AI Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Create sophisticated voice assistants with cutting-edge AI technology and natural conversation capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Speech Recognition</h3>
              <p className="text-gray-600 mb-4">
                Advanced speech-to-text with 99%+ accuracy, supporting multiple languages and accents for global deployment.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-language support</li>
                <li>• Accent recognition</li>
                <li>• Noise cancellation</li>
                <li>• Real-time processing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Language Understanding</h3>
              <p className="text-gray-600 mb-4">
                Deep learning models that understand context, intent, and sentiment to provide intelligent responses.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Context awareness</li>
                <li>• Intent recognition</li>
                <li>• Sentiment analysis</li>
                <li>• Entity extraction</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Text-to-Speech</h3>
              <p className="text-gray-600 mb-4">
                Natural-sounding voice synthesis with customizable voices, emotions, and speaking styles.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Natural voice synthesis</li>
                <li>• Multiple voice options</li>
                <li>• Emotional expression</li>
                <li>• Custom voice training</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conversation Management</h3>
              <p className="text-gray-600 mb-4">
                Intelligent conversation flow management with memory, context retention, and multi-turn dialogues.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Conversation memory</li>
                <li>• Context retention</li>
                <li>• Multi-turn dialogues</li>
                <li>• Conversation branching</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">API Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamless integration with existing systems, databases, and third-party services through robust APIs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• RESTful APIs</li>
                <li>• Webhook support</li>
                <li>• Database integration</li>
                <li>• Third-party connectors</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Platform Support</h3>
              <p className="text-gray-600 mb-4">
                Deploy across multiple platforms including mobile apps, web browsers, smart speakers, and IoT devices.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mobile apps</li>
                <li>• Web browsers</li>
                <li>• Smart speakers</li>
                <li>• IoT devices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Voice Assistant Applications</h2>
              <p className="text-lg text-gray-600">Transform your business with intelligent voice interactions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Service</h3>
                <p className="text-gray-600 text-sm">24/7 voice support with natural conversations and instant problem resolution</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Home</h3>
                <p className="text-gray-600 text-sm">Control smart devices, manage schedules, and automate home tasks with voice commands</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-gray-600 text-sm">Patient assistance, appointment scheduling, and medical information retrieval</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-600 text-sm">Interactive learning, language practice, and educational content delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Voice Assistant Pricing</h2>
              <p className="text-lg text-gray-600">Choose the plan that fits your voice AI needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-2">$99</div>
                <div className="text-gray-600 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>1,000 voice interactions/month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Basic speech recognition</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Standard voice synthesis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Email support</span>
                  </li>
                </ul>
                <a 
                  href="/contact?service=zion-ai-voice-assistant&plan=starter" 
                  className="w-full bg-indigo-600 text-white text-center py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors block"
                >
                  Start Free Trial
                </a>
              </div>

              <div className="bg-indigo-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold mb-2">$299</div>
                <div className="text-indigo-100 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>10,000 voice interactions/month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Advanced speech recognition</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Natural voice synthesis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Multi-language support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <a 
                  href="/contact?service=zion-ai-voice-assistant&plan=professional" 
                  className="w-full bg-white text-indigo-600 text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors block"
                >
                  Start Free Trial
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-2">$999</div>
                <div className="text-gray-600 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Unlimited voice interactions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Custom voice training</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>White-label solution</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Dedicated infrastructure</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>24/7 dedicated support</span>
                  </li>
                </ul>
                <a 
                  href="/contact?service=zion-ai-voice-assistant&plan=enterprise" 
                  className="w-full bg-indigo-600 text-white text-center py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors block"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div id="demo" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Try Our Voice Assistant</h2>
              <p className="text-lg text-gray-600">Experience natural voice interactions with our AI assistant</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Voice Interaction Demo</h3>
                  <p className="text-gray-600 mb-6">
                    Click the microphone button and speak naturally. Our AI will understand and respond to your voice commands.
                  </p>
                  <div className="space-y-4">
                    <div className="text-center">
                      <button className="w-20 h-20 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center mx-auto">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                        </svg>
                      </button>
                      <p className="text-sm text-gray-500 mt-2">Click to start voice interaction</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-gray-900 mb-2">Voice Commands You Can Try:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• "What's the weather like today?"</li>
                        <li>• "Schedule a meeting for tomorrow at 2 PM"</li>
                        <li>• "Tell me about your services"</li>
                        <li>• "Help me with customer support"</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Conversation History</h3>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800"><strong>You:</strong> What services do you offer?</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-800"><strong>Assistant:</strong> We offer AI-powered voice assistants, fraud detection, predictive analytics, code assistance, image generation, and many more services. How can I help you today?</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800"><strong>You:</strong> Tell me about pricing</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-800"><strong>Assistant:</strong> Our pricing starts at $99/month for basic voice interactions. We also have Professional ($299/month) and Enterprise ($999/month) plans. Would you like me to schedule a call with our sales team?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Voice Assistant?</h2>
            <p className="text-xl mb-8">
              Create intelligent voice experiences that engage your customers and automate your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=zion-ai-voice-assistant" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Building Today
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIVoiceAssistantPage;