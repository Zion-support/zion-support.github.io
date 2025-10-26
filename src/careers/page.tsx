import { CheckCircle, Link } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4"></section>"
        <div className="max-w-7xl mx-auto text-center"></div>"
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>"
            Join Our <span className="text-cyan-400">Team</span>"
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
            Be part of the future of AI and IT solutions. We're looking for passionate individuals who want to make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <Link,
to="#open-positions""
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors""
            ></Link>
              View Open Positions
            </Link>
            <Link,
to="/contact""
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors""
            ></Link>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white"></section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>"
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600"></p>"
              We offer more than just a job - we offer a career and a community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>"
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                  <benefit.icon className="w-8 h-8 text-white" />"
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>"
                <p className="text-gray-600">{benefit.description}</p>"
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50"></section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>"
            <div></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"></h2>"
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-8"></p>"
                At Zion Tech Group, we believe that great technology comes from great people. 
                We foster an environment where innovation thrives, collaboration is encouraged, 
                and everyone has the opportunity to grow and succeed.
              </p>
              <ul className="space-y-4"></ul>"
                {culture.map((item, index) => (
                  <li key={index} className="flex items-start"></li>"
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />"
                    <span className="text-gray-600">{item}</span>"
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8"></div>"
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h3>"
              <div className="grid grid-cols-2 gap-6"></div>"
                <div className="text-center"></div>"
                  <div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>"
                  <div className="text-gray-600">Team Members</div>"
                </div>
                <div className="text-center"></div>"
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>"
                  <div className="text-gray-600">Years Experience</div>"
                </div>
                <div className="text-center"></div>"
                  <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>"
                  <div className="text-gray-600">Countries</div>"
                </div>
                <div className="text-center"></div>"
                  <div className="text-3xl font-bold text-green-600 mb-2">99%</div>"
                  <div className="text-gray-600">Satisfaction</div>"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white"></section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>"
              Open Positions
            </h2>
            <p className="text-xl text-gray-600"></p>"
              Find your next career opportunity with us
            </p>
          </div>
          <div className="space-y-8"></div>"
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow"></div>"
                <div className="p-8"></div>"
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"></div>"
                    <div></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>"
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600"></div>"
                        <span className="flex items-center"></span>"
                          <Briefcase className="w-4 h-4 mr-1" />"
                          {position.department}
                        </span>
                        <span className="flex items-center"></span>"
                          <MapPin className="w-4 h-4 mr-1" />"
                          {position.location}
                        </span>
                        <span className="flex items-center"></span>"
                          <Clock className="w-4 h-4 mr-1" />"
                          {position.type}
                        </span>
                        <span className="flex items-center"></span>"
                          <Users className="w-4 h-4 mr-1" />"
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <Link,
to="/contact""
                      className="mt-4 md:mt-0 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center""
                    ></Link>
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />"
                    </Link>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{position.description}</p>"
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>"
                    <div></div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>"
                      <ul className="space-y-2"></ul>"
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600"></li>"
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />"
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div></div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>"
                      <ul className="space-y-2"></ul>"
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600"></li>"
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />"
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600"></section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>"
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"></p>"
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <Link,
to="/contact""
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300""
            ></Link>
              Send Us Your Resume
            </Link>
            <Link,
to="/team""
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300""
            ></Link>
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;