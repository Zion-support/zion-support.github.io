

import { Helmet } from 'react-helmet-async';'
const CareersPage: React.FC = () => {}
  const openPositions = [

                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */};
        <div className ="py-24 bg-slate-800/50">";"
          <div className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";"
            <div className ="text-center mb-16">";"
              <h2 className ="text-4xl font-bold mb-4">Why Work With Us</h2>";"
              <p className ="text-xl text-gray-300">We offer competitive benefits and a supportive work environment</p>";"
            </div>
            
            <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">","
              {benefits.map((benefit, index) => (
                <div key ={index} className="bg-slate-700/50 p-6 rounded-lg hover: bg-slate-700/70 transition-colors">","
                  <div className ="text-blue-400 mb-4">{benefit.icon}</div>";"
                  <h3 className ="text-xl font-semibold mb-2">{benefit.title}</h3>";"
                  <p className ="text-gray-300">{benefit.description}</p>";"
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div className ="py-24">";"
          <div className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";"
            <div className ="text-center mb-16">";"
              <h2 className ="text-4xl font-bold mb-4">Open Positions</h2>";"
              <p className ="text-xl text-gray-300">Find your next opportunity with us</p>";"
            </div>
            
            <div className ="space-y-8">","
              {openPositions.map((position) => (
                <div key ={position.id} className="bg-slate-700/50 p-8 rounded-lg hover: bg-slate-700/70 transition-colors">";"
                  <div className ="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">","
                    <div>
                      <h3 className ="text-2xl font-semibold mb-2">{position.title}</h3>";"
                      <div className ="flex flex-wrap gap-4 text-sm text-gray-300">";"
                        <span className ="flex items-center gap-1">";"
                          <Briefcase className ="w-4 h-4" />";"
                          {position.department}
                        </span>
                        <span className ="flex items-center gap-1">";"
                          <MapPin className ="w-4 h-4" />";"
                          {position.location}
                        </span>
                        <span className ="flex items-center gap-1">";"
                          <Clock className ="w-4 h-4" />";"
                          {position.type}
                        </span>
                        <span className ="flex items-center gap-1">";"
                          <Users className ="w-4 h-4" />";"
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <button className ="mt-4 lg: mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">","
                      Apply Now
                    </button>
                  </div>
                  
                  <p className ="text-gray-300 mb-4">{position.description}</p>";"
                  
                  <div>
                    <h4 className ="font-semibold mb-2">Requirements: </h4>";"
                    <ul className ="space-y-1">","
                      {position.requirements.map((req, index) => (
                        <li key ={index} className="flex items-start gap-2 text-sm text-gray-300">";"
                          <CheckCircle className ="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />";"
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className ="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">";"
          <div className ="max-w-4xl mx-auto text-center px-4 sm: px-6 lg:px-8">";"
            <h2 className ="text-4xl font-bold mb-4">Don't See Your Role?</h2>";"
            <p className ="text-xl text-gray-300 mb-8">";"
              We're always looking for talented individuals. Send us your resume and let's start a conversation.";"
            </p>
            <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";"
              Send Your Resume
            </button>
          </div>
        </div>
      </div>
    </>
  ),
};

export default CareersPage;
