import React from 'react';
import { ArrowRight, TrendingUp, Users, Target, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../content/case-studies';

const SuccessStoriesShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 text-green-600 text-sm font-medium mb-8 border border-green-500/20">
            <Award className="w-4 h-4 mr-2" />
            🏆 SUCCESS STORIES
            <Award className="w-4 h-4 ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Real Companies
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See how leading companies across industries are transforming their operations 
            with our AI solutions. These success stories showcase measurable results and 
            real business impact.
          </p>

          {/* Results Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">$50M+</div>
                <div className="text-sm text-gray-600">Cost Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">99.9%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.slice(0, 4).map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-blue-600 font-medium mb-1">{study.industry}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="p-6 border-b border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Our Solution</h4>
                <p className="text-gray-600 text-sm">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Key Results</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {study.metrics.slice(0, 4).map((metric, index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                      <div className="text-xs text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Technologies Used</h5>
                  <div className="flex flex-wrap gap-1">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {study.testimonial && (
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-gray-700 text-sm italic mb-2">
                      "{study.testimonial.quote}"
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                      <div className="text-gray-600">{study.testimonial.title}</div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <Link
                  to={`/case-studies/${study.id}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 group"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Impact */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Impact Across Industries
            </h3>
            <p className="text-gray-600">
              Our AI solutions are transforming operations across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">E-commerce</h4>
              <p className="text-sm text-gray-600 mb-3">
                99% reduction in processing time, $2.3M annual savings
              </p>
              <div className="text-2xl font-bold text-green-600">500+</div>
              <div className="text-xs text-gray-600">Projects Delivered</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Banking & Finance</h4>
              <p className="text-sm text-gray-600 mb-3">
                95% faster customer service, 80% automation rate
              </p>
              <div className="text-2xl font-bold text-blue-600">150+</div>
              <div className="text-xs text-gray-600">Financial Institutions</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Manufacturing</h4>
              <p className="text-sm text-gray-600 mb-3">
                70% waste reduction, 85% less downtime
              </p>
              <div className="text-2xl font-bold text-purple-600">200+</div>
              <div className="text-xs text-gray-600">Manufacturing Plants</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their operations with our AI solutions. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/case-studies"
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                View All Case Studies
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesShowcase;