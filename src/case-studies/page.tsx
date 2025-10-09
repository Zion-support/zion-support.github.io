
import Link from 'next/link';

const CaseStudiesPage: React.FC = () => {
    return (
    <div>
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div>
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">Real results from real companies using our AI solutions</p>
              <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">Discover how leading companies across industries have transformed their operations
                and achieved remarkable ROI with our cutting-edge AI technology.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div>
            <div>
              {caseStudies.map((study) => (
                <div>
                  <div>
                    <div>
                      <div className="text-4xl mr-4">{study.image}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{study.title}</h3>
                        <p className="text-blue-600 font-semibold">{study.company}</p>
                        <p className="text-gray-500 text-sm">{study.industry}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{study.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Results:</h4>
                      <div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">{study.results.roi}</div>
                          <div className="text-sm text-gray-600">ROI</div>
                        </div>
                        <div>
                          <div>
                            {Object.values(study.results)[1]}
                          </div>
                          <div>
                            {Object.keys(study.results)[1].replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                      >Learn More</Link>
                      <div>
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span className="text-sm font-semibold">Verified Results</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Track Record</h2>
              <p className="text-xl text-gray-600">Our AI solutions deliver consistent, measurable results</p>
            </div>
            <div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">300%+</div>
                <div className="text-gray-600">Average ROI</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">$50M+</div>
                <div className="text-gray-600">Cost Savings Generated</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-blue-100">Join the companies that have transformed their business with our AI solutions</p>
            <div>
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >Start Your Project<TrendingUp className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >View Our Services</Link>
            </div>
          </div>
        </section>
      </div>);
}
export default CaseStudiesPage