'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cookie, Settings, Shield, Eye } from 'lucide-react';
const CookiesPage: React.FC = () => {

  const features = [
    {
      icon: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']},
    {icon: Settings,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'User settings', 'Remember me']},
    {icon: Eye,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Page views', 'User behavior', 'Performance metrics']},
    {icon: Shield,
      title: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
      examples: ['Ad targeting', 'Campaign tracking', 'Conversion tracking']}
  ]

  return (
    <>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      <Navigation />
      <main $1>
        {/* Hero Section */}
      </main>
          </div>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 1>
                  Cookie Policy
                </h1>
            </h1>
            <p Learn about how we use cookies and similar technologies to improve your experience on our website.>
                  $2
                </p>
            </p>
          </div>
      
      <Footer />
    </>
        </section>

        <section className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                Key Features
              </h2>
              <p  >
                  $2
                </p>
            <div $1>
            {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  <div className="flex items-center mb-4"
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3"
                    <h3 className="text-xl font-semibold text-gray-900"
                  </div>
      <Footer />
    </>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul $1>
            {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex}>• {example}</li>
                    )
    </>
  )
                  </ul>
                </div>
      
      <Footer />
    </>
              ))}
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        <section className="py-20 bg-gray-100"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                Why Choose Us
              </h2>
              <p  >
                  $2
                </p>
            <div $1>
            {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg"
                  <div className="flex items-center"
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3"
                    <span className="text-lg font-medium text-gray-900"
                  </div>
      <Footer />
    </>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Cookie Consent</h4>
                    <p When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.>
                  $2
                </p>
                    </p>
                  </div>
      
      <Footer />
    </>
                </div>
      
      <Footer />
    </>
              </div>
      
      <Footer />
    </>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h3>
                <p Some cookies on our website are set by third-party services that appear on our pages. We don't control these cookies and you should check the third-party websites for more information about their cookies and how to manage them.>
                  $2
                </p>
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Google Analytics - for website analytics</li>
                  <li>• Social media platforms - for social sharing features</li>
                  <li>• Advertising networks - for targeted advertising</li>
                </ul>
              </div>
      
      <Footer />
    </>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h3>
                <p We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.>
                  $2
                </p>
                </p>
              </div>
        </section>
      <Footer />
    </>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        <section className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                Contact Us
              </a>
              <a privacy@ziontechgroup.com>
                  $2
                </a>
              </a>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
      </main>
      
      <Footer />
    </div>
      
      <Footer />
    </>
  );
};

export default CookiesPage;
