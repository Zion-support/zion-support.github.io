import type { NextPage } from &apos;next&apos;;
import Layout from &apos;../../components/Layout&apos;;
import Link from &apos;next/link&apos;;
import { Brain, Zap, Target, CheckCircle, ArrowRight, Users, Award, Globe } from &apos;lucide-react&apos;;

const AIDevelopment: NextPage = () => {
  return (
    <Layout
      title=&quot;AI Development Services - Zion Tech Group&quot;
      description=&quot;Custom AI solutions and machine learning models tailored to your business needs. Transform your business with cutting-edge artificial intelligence.&quot;
    >
      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <div className=&quot;w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
            <Brain className=&quot;w-10 h-10 text-white&quot; />
          </div>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            AI Development
            <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;> Services</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200&quot;>
            Transform your business with custom AI solutions and machine learning models tailored to your specific needs.
          </p>
          
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-4 mb-12&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Get Started Today
            </Link>
            <Link href=&quot;/services&quot; className=&quot;bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-20 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold text-gray-900 mb-4&quot;>Our AI Development Capabilities</h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              We build intelligent solutions that learn, adapt, and evolve with your business needs.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Brain className=&quot;w-8 h-8 text-blue-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Machine Learning Models</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Custom ML models for predictive analytics, pattern recognition, and intelligent decision making.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• Predictive Analytics</li>
                <li>• Pattern Recognition</li>
                <li>• Recommendation Systems</li>
                <li>• Anomaly Detection</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Zap className=&quot;w-8 h-8 text-purple-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Natural Language Processing</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Advanced NLP solutions for text analysis, language understanding, and automated communication.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• Text Analysis</li>
                <li>• Sentiment Analysis</li>
                <li>• Language Translation</li>
                <li>• Chatbots & Virtual Assistants</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Target className=&quot;w-8 h-8 text-green-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Computer Vision</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Image and video analysis solutions for visual recognition and automated processing.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• Image Recognition</li>
                <li>• Object Detection</li>
                <li>• Facial Recognition</li>
                <li>• Quality Control</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Users className=&quot;w-8 h-8 text-orange-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>AI Integration</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Seamless integration of AI capabilities into your existing systems and workflows.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• API Development</li>
                <li>• System Integration</li>
                <li>• Cloud Deployment</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Award className=&quot;w-8 h-8 text-red-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>AI Consulting</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Strategic guidance on AI implementation and digital transformation initiatives.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• AI Strategy</li>
                <li>• Technology Assessment</li>
                <li>• Implementation Planning</li>
                <li>• Training & Support</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Globe className=&quot;w-8 h-8 text-indigo-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>AI Automation</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Intelligent automation solutions to streamline processes and reduce manual work.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• Process Automation</li>
                <li>• Workflow Optimization</li>
                <li>• Data Processing</li>
                <li>• Smart Scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold text-gray-900 mb-4&quot;>Our AI Development Process</h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              We follow a proven methodology to deliver AI solutions that drive real business value.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>1</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Discovery & Analysis</h3>
              <p className=&quot;text-gray-600&quot;>We analyze your business needs and identify AI opportunities.</p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>2</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Strategy & Planning</h3>
              <p className=&quot;text-gray-600&quot;>We develop a comprehensive AI strategy and implementation plan.</p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>3</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Development & Testing</h3>
              <p className=&quot;text-gray-600&quot;>We build and rigorously test your AI solutions.</p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>4</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Deployment & Support</h3>
              <p className=&quot;text-gray-600&quot;>We deploy your AI solutions and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h2 className=&quot;text-4xl font-bold mb-6&quot;>Ready to Transform Your Business with AI?</h2>
          <p className=&quot;text-xl mb-8 max-w-3xl mx-auto&quot;>
            Let&apos;s discuss how AI can solve your specific business challenges and drive growth.
          </p>
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-4&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Schedule a Consultation
            </Link>
            <Link href=&quot;/services&quot; className=&quot;bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIDevelopment;