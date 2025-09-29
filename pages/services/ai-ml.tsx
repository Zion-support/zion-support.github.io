import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function AIMLService(): JSX.Element {
  return (
    <>
      <Head>
        <title>AI & Machine Learning Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with cutting-edge artificial intelligence and machine learning solutions. Custom AI models, NLP, computer vision, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Navigation */}
        <nav className="border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4">
            <Link href="/services" className="text-xl font-bold text-blue-600">
              ← Back to Services
            </Link>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl mx-auto mb-6">
              🤖
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              AI & Machine Learning
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence and machine learning solutions. 
              From custom model development to production deployment, we help you harness the power of AI.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our AI Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Implementation</h3>
                <p className="text-gray-600">Get your AI solutions up and running in weeks, not months</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Business-Focused</h3>
                <p className="text-gray-600">Every solution is designed to deliver measurable business value</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise-Ready</h3>
                <p className="text-gray-600">Built with security, scalability, and compliance in mind</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI & ML Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Language Processing</h3>
                <p className="text-gray-600 mb-4">Build intelligent chatbots, document analysis, and language understanding systems</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Chatbot development</li>
                  <li>• Sentiment analysis</li>
                  <li>• Text classification</li>
                  <li>• Language translation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">👁️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Vision</h3>
                <p className="text-gray-600 mb-4">Extract insights from images and videos with advanced computer vision algorithms</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Object detection</li>
                  <li>• Image classification</li>
                  <li>• Facial recognition</li>
                  <li>• Medical imaging</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
                <p className="text-gray-600 mb-4">Forecast trends, predict outcomes, and optimize decision-making processes</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Demand forecasting</li>
                  <li>• Risk assessment</li>
                  <li>• Customer churn prediction</li>
                  <li>• Market analysis</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🎛️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Decision Making</h3>
                <p className="text-gray-600 mb-4">Build intelligent systems that make decisions based on data and rules</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Rule-based systems</li>
                  <li>• Expert systems</li>
                  <li>• Automated workflows</li>
                  <li>• Process optimization</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Model Development</h3>
                <p className="text-gray-600 mb-4">Develop tailored machine learning models for your specific business needs</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Deep learning models</li>
                  <li>• Ensemble methods</li>
                  <li>• Transfer learning</li>
                  <li>• Model optimization</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Integration & Deployment</h3>
                <p className="text-gray-600 mb-4">Seamlessly integrate AI solutions into your existing systems and workflows</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• API development</li>
                  <li>• Cloud deployment</li>
                  <li>• System integration</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Development Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Discovery & Planning</h3>
                <p className="text-gray-600">Understand your business goals and identify AI opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Analysis</h3>
                <p className="text-gray-600">Analyze your data quality and prepare datasets for training</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Model Development</h3>
                <p className="text-gray-600">Build, train, and validate custom AI models for your use case</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Deployment & Monitoring</h3>
                <p className="text-gray-600">Deploy to production and monitor performance continuously</p>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🏥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Healthcare Diagnostics</h3>
                    <p className="text-gray-600">Medical imaging analysis</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Developed a computer vision system that improved diagnostic accuracy by 35% 
                  and reduced analysis time from hours to minutes.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">95% Accuracy</span>
                  <span className="mx-2">•</span>
                  <span>35% Improvement</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🛒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">E-commerce Personalization</h3>
                    <p className="text-gray-600">Recommendation engine</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Built a recommendation system that increased customer engagement by 40% 
                  and boosted sales by 25% through personalized product suggestions.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">40% Engagement</span>
                  <span className="mx-2">•</span>
                  <span>25% Sales Increase</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies We Use</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Machine Learning</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PyTorch</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Scikit-learn</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">XGBoost</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cloud Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">AWS SageMaker</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Google AI Platform</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Azure ML</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Databricks</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Processing</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Apache Spark</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Pandas</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">NumPy</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Dask</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our AI and machine learning solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Get Started Today
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}