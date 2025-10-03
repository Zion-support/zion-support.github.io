import { Link } from 'react-router-dom';


export default function AIResumeScreeningServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
            <span className="text-3xl">📄</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Resume Screening Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your hiring process with our intelligent AI resume screening platform. 
            Automate candidate evaluation, reduce bias, and identify top talent faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link 
              href="#demo" 
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Keyword Matching</h3>
            <p className="text-gray-600">Advanced NLP algorithms match candidate skills and experience with job requirements for accurate screening.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚖️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Bias Detection & Prevention</h3>
            <p className="text-gray-600">Built-in bias detection algorithms ensure fair and objective candidate evaluation based on merit.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Candidate Scoring</h3>
            <p className="text-gray-600">Comprehensive scoring system ranks candidates based on qualifications, experience, and cultural fit.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">HR Software Integration</h3>
            <p className="text-gray-600">Seamlessly integrate with popular HR systems like Workday, BambooHR, and Greenhouse.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
            <p className="text-gray-600">Track hiring metrics, time-to-hire, and screening effectiveness with detailed analytics.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Data Security</h3>
            <p className="text-gray-600">Enterprise-grade security with encryption, access controls, and compliance with data protection regulations.</p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Flexible Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Small Business</h3>
              <div className="text-3xl font-bold mb-4">$500<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 100 resumes/month</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic AI screening</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Standard integrations</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic analytics</li>
              </ul>
              <Link href="/contact" className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold text-center block hover:bg-gray-200 transition-colors">
                Get Started
              </Link>
            </div>

            <div className="border-2 border-indigo-500 rounded-xl p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional</h3>
              <div className="text-3xl font-bold mb-4">$1,500<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 1,000 resumes/month</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced AI screening</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Bias detection</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom scoring models</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced integrations</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Detailed analytics</li>
              </ul>
              <Link href="/contact" className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold text-center block hover:bg-indigo-600 transition-colors">
                Start Free Trial
              </Link>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">$5,000<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited resumes</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom AI models</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-label solution</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API access</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced reporting</li>
              </ul>
              <Link href="/contact" className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold text-center block hover:bg-purple-600 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our AI Screening Service?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-indigo-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reduce Screening Time by 80%</h3>
                  <p className="text-gray-600">Automate the initial screening process and focus your time on interviewing the most qualified candidates.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Eliminate Unconscious Bias</h3>
                  <p className="text-gray-600">Our AI focuses on qualifications and skills, helping you build more diverse and inclusive teams.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Improve Hiring Quality</h3>
                  <p className="text-gray-600">Data-driven candidate evaluation helps identify the best matches for your roles and company culture.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Perfect for Every Industry</h3>
            <p className="mb-6">Our AI screening service adapts to your industry requirements and hiring standards.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Technology & Software</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Healthcare & Medical</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Finance & Banking</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Manufacturing</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Retail & E-commerce</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Professional Services</span>
              </div>
            </div>
            <Link href="/contact" className="mt-6 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100 transition-colors">
              Start Your Free Trial
            </Link>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Calculate Your ROI</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">80%</div>
              <p className="text-lg">Time Savings</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50%</div>
              <p className="text-lg">Cost Reduction</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3x</div>
              <p className="text-lg">Faster Hiring</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25%</div>
              <p className="text-lg">Better Matches</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg mb-4">Ready to see how much you can save?</p>
            <Link href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Your ROI Report
            </Link>
          </div>
        </div>

        {/* Integration Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Seamless HR Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <p className="text-sm font-medium">Workday</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <p className="text-sm font-medium">BambooHR</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <p className="text-sm font-medium">Greenhouse</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🔗</span>
              </div>
              <p className="text-sm font-medium">LinkedIn</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <p className="text-sm font-medium">Indeed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <p className="text-sm font-medium">ZipRecruiter</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring Process?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact our team to learn more about our AI Resume Screening Service</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Call: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors">
              Email: kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}