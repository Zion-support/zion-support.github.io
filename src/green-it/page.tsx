'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GreenITPage: React.FC = () =>{
  const [activeTab, setActiveTab] = useState('solutions')
              return (
    <>
      <Navigation />
      <div>
        <div>
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Green IT Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Transform your IT infrastructure into a sustainable, environmentally friendly system
              that reduces costs while protecting our planet.
            </p>
            <div>
              <div>
                <Leaf className="w-5 h-5 mr-2" />
                <span className="font-medium">Carbon Neutral Operations</span>
              </div>
              <div>
                <Zap className="w-5 h-5 mr-2" />
                <span className="font-medium">Energy Efficient</span>
              </div>
              <div>
                <Award className="w-5 h-5 mr-2" />
                <span className="font-medium">Certified Solutions</span>
              </div>
            </div>
          </div>
          {/* Stats */}
          <div>
            {stats.map((stat, index) => (
              <div>
                <div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Tabs */}
          <div>
            <div>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? `${tab.bgColor} ${tab.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Tab Content */}
          {activeTab === 'solutions' && (
            <div>
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Our Green IT Solutions</h2>
              <div>
                {greenSolutions.map((solution, index) => (
                  <div>
                    <div>
                      <div>
                        <solution.icon className={`w-6 h-6 ${solution.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{solution.description}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-300 flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-green-400 mb-1">Environmental Impact:</div>
                      <div className="text-sm text-gray-300">{solution.impact}</div>
                    </div>
                    <div>
                      <div>
                        {solution.pricing}
                      </div>
                      <a
                        href="/contact"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                      >Learn More<ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div>
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Benefits of Green IT</h2>
              <div>
                {benefits.map((benefit, index) => (
                  <div>
                    <div>
                      <div>
                        <benefit.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300 mb-4">{benefit.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-gray-300 flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div>
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Our Certifications</h2>
              <div>
                {certifications.map((cert, index) => (
                  <div>
                    <div>
                      <cert.icon className={`w-8 h-8 ${cert.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                    <div className="text-green-400 text-sm font-medium">{cert.status}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Case Studies */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Success Stories</h2>
            <div>
              {caseStudies.map((study, index) => (
                <div>
                  <div>
                    <div>
                      <study.icon className={`w-6 h-6 ${study.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{study.company}</h3>
                      <p className="text-gray-400 text-sm mb-3">{study.industry}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                    
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm mb-3">{study.solution}</p>
                    
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-gray-300 flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Go Green?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Start your journey towards sustainable IT operations. Get a free environmental
              assessment and discover how much you can save while protecting the planet.
            </p>
            <div>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Leaf className="w-5 h-5 mr-2" />Get Free Assessment</a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />(302) 464-0950</a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />Email Us</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>);
}
export default GreenITPage