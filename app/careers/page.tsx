
const CareersPage: React.FC = () => {
  const openPositions = [
import {  Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, GraduationCap, Zap   } from 'lucide-react';
interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
'use client'
import React from 'react';
  const benefits = [
    'Competitive salary and equity',
    'Health, dental, and vision insurance',
    'Flexible work arrangements',
    'Professional development budget',
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></h1>
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"></span></span>Team</span>
            </h1>
              Be part of a team that's shaping the future of AI and IT solutions. 
              We're looking for passionate professionals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="cyber-button"></button>
                <ArrowRight className="w-5 h-5 mr-2" />
                View Open Positions
              </button>
              <button className="cyber-button-secondary"></button>
                <Users className="w-5 h-5 mr-2" />
                Learn About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Why Join Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300"></p></p>
              We offer more than just a job - we offer a career with purpose and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card text-center"></div></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4"></div></div>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2"></h3></h3>{benefit.title}</h3>
                <p className="text-gray-300"></p></p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-4xl mx-auto"></div></div>
          <div className="cyber-card"></div></div>
            <div className="text-center mb-8"></div></div>
              <h2 className="text-3xl font-bold text-white mb-4"></h2></h2>Our Values</h2>
              <p className="text-gray-300"></p></p>
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div></div>
              {values.map((value, index) => (
                <div key={index} className="flex items-center"></div></div>
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300"></span></span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                ></div></div>
                  <div className="flex items-start justify-between mb-4"></div></div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2"></h3></h3>{position.title}</h3>
                      <p className="text-cyan-400 font-medium"></p></p>{position.department}</p>
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"></span></span>
                      {position.type}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4"></div></div>
                    <div className="flex items-center space-x-1"></div></div>
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-1"></div></div>
                      <Clock className="w-4 h-4" />
                      <span>{position.experience}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            </h2>
            <p className="text-xl text-gray-300"></p></p>
              We offer competitive benefits and a great work environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-300"></div></div>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            </div>
          </div>
                  </div>

            </div>
          </div>
        </div>
      </section>

