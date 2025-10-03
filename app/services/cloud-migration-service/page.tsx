import { Helmet } from 'react-helmet-async';
import { CheckCircle, Cloud, Shield, Zap, BarChart3, Database, Server } from 'lucide-react';
export default function CloudMigrationService() {
  return (
    <>
      <Helmet>
        <title>Cloud Migration Service | Zion Tech Group</title>
        <meta name="description" content="Expert cloud migration services for AWS, Azure, and Google Cloud. Seamless migration with zero downtime and cost optimization." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud-migration-service" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cloud Migration Service
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Expert cloud migration services for AWS, Azure, and Google Cloud. Seamless migration with zero downtime, cost optimization, and enhanced security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Pricing
                </a>
                <a href="/contact" className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Migration Services</h2>
              <p className="text-xl text-gray-300">End-to-end cloud migration solutions for every business need</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Cloud className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Multi-Cloud Strategy</h3>
                <p className="text-gray-300">Migrate to AWS, Azure, Google Cloud, or hybrid solutions with expert guidance.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Shield className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Zero Downtime Migration</h3>
                <p className="text-gray-300">Seamless migration with minimal business disruption using advanced techniques.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Database className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Database Migration</h3>
                <p className="text-gray-300">Migrate SQL Server, MySQL, PostgreSQL, and NoSQL databases to the cloud.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Server className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Application Migration</h3>
                <p className="text-gray-300">Lift-and-shift, refactor, or rebuild applications for optimal cloud performance.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <BarChart3 className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cost Optimization</h3>
                <p className="text-gray-300">Reduce cloud costs by up to 40% with intelligent resource optimization.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Zap className="h-12 w-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Performance Enhancement</h3>
                <p className="text-gray-300">Improve application performance and scalability with cloud-native solutions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Migration Service?</h2>
              <p className="text-xl text-gray-300">Proven expertise and comprehensive support for successful cloud adoption</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">100% Success Rate</h3>
                      <p className="text-gray-300">Over 500 successful migrations with zero data loss and minimal downtime.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Certified Experts</h3>
                      <p className="text-gray-300">AWS, Azure, and Google Cloud certified professionals with deep expertise.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                      <p className="text-gray-300">Round-the-clock support during and after migration with dedicated engineers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Cost Guarantee</h3>
                      <p className="text-gray-300">Guaranteed cost reduction or we'll optimize your infrastructure for free.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Migration Benefits</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-white">
                    <span>Average Cost Reduction:</span>
                    <span className="font-semibold">35%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Performance Improvement:</span>
                    <span className="font-semibold">60%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Downtime Reduction:</span>
                    <span className="font-semibold">90%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Security Enhancement:</span>
                    <span className="font-semibold">95%</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-white text-lg font-bold">
                      <span>ROI Timeline:</span>
                      <span className="text-green-300">6 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Migration Process Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process</h2>
              <p className="text-xl text-gray-300">Structured approach ensuring successful cloud adoption</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-white mb-3">Assessment</h3>
                <p className="text-gray-300">Comprehensive analysis of your current infrastructure, applications, and requirements.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-white mb-3">Planning</h3>
                <p className="text-gray-300">Detailed migration strategy, timeline, and resource allocation planning.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-white mb-3">Migration</h3>
                <p className="text-gray-300">Execute migration with minimal downtime using proven methodologies.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold text-white mb-3">Optimization</h3>
                <p className="text-gray-300">Post-migration optimization for performance, security, and cost efficiency.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
              <p className="text-xl text-gray-300">Flexible pricing options based on your migration complexity</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Small Business Plan */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Small Business</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">$5,000</div>
                  <div className="text-gray-300">one-time</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Up to 10 servers
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Basic applications
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Single cloud provider
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    30 days support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center">
                  Get Quote
                </a>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-lg border-2 border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-white mb-2">$25,000</div>
                  <div className="text-blue-100">one-time</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Up to 50 servers
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Complex applications
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Multi-cloud strategy
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    90 days support
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Performance optimization
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-white hover:bg-gray-100 text-blue-600 py-3 rounded-lg font-semibold transition-colors block text-center">
                  Get Quote
                </a>
              </div>
              
              {/* Custom Plan */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Custom</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">Custom</div>
                  <div className="text-gray-300">pricing</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Unlimited servers
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Legacy systems
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Hybrid cloud solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    6 months support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Dedicated team
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free migration assessment and discover how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Free Assessment
              </a>
              <a href="tel:+13024640950" className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}