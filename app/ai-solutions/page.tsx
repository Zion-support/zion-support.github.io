import React from "react";"
import { Helmet } from "react-helmet-async";
const PagePage = () => {
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>Page - Zion Tech Group</title>"
        <meta name="description" content="Page - Zion Tech Group" />
      </Helmet>"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>"
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </section>
      {/* AI Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {aiServices.map((service, _index) => {
              const Icon = service.icon
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:from-purple-800 hover:to-blue-800 transition-all duration-300 border border-gray-700 hover:border-purple-500"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  {/* Pricing */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Link
                      to={service.href}
                      className={`flex-1 inline-flex items-center justify-center gap-2 text-${service.color.split(' ')[1].split('-')[1]}-400 hover:text-${service.color.split(' ')[1].split('-')[1]}-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg`}
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-white hover:text-gray-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>9763
        </div>
      </section>
      {/* Why Choose Our AI Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technology and designed for enterprise-scale performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Algorithms</h3>
              <p className="text-gray-300">
                State-of-the-art AI algorithms and models trained on massive datasets for superior performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Processing</h3>
              <p className="text-gray-300">
                Lightning-fast AI processing with sub-second response times for real-time applications.
              </p>11423
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with encryption, compliance, and privacy protection built-in.
              </p>11980
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored AI solutions designed specifically for your business needs and use cases.
              </p>12520
            </div>
          </div>
        </div>
      </section>
      {/* AI Implementation Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Implementation Process
            </h2>12931
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful AI implementation and deployment
            </p>13070
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Discovery & Analysis</h3>
              <p className="text-gray-300">
                We analyze your business processes, data, and requirements to identify AI opportunities.
              </p>13701
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Solution Design</h3>
              <p className="text-gray-300">
                We design custom AI solutions tailored to your specific needs and business objectives.
              </p>14253
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Development & Training</h3>
              <p className="text-gray-300">
                Our AI experts develop and train models using your data for optimal performance.
              </p>14814
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Deployment & Support</h3>
              <p className="text-gray-300">
                We deploy your AI solution and provide ongoing support, monitoring, and optimization.
              </p>15367
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Harness the Power of AI?
            </h2>15812
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our AI solutions can transform your business and drive innovation'
            </p>15955
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/"
                className=""
              >
                Get Free AI Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className=""
              >
                Schedule AI Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PagePage;"
