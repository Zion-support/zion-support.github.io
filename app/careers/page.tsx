'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Clock, ArrowRight, Users, Briefcase } from 'lucide-react';

const CareersPage: React.FC = () => {
<<<<<<< HEAD
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
=======
  const jobs = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years of experience in AI/ML',
        'Strong Python and TensorFlow skills',
        'Experience with cloud platforms',
        'PhD in Computer Science preferred'
      ]
    },
    {
      id: 2,
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        '7+ years of cloud architecture experience',
        'AWS/Azure/GCP certifications',
        'Strong DevOps knowledge',
        'Leadership experience'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      description: 'Protect our clients\' digital assets with advanced security solutions and threat detection.',
      requirements: [
        '4+ years of cybersecurity experience',
        'CISSP or similar certification',
        'Experience with SIEM tools',
        'Strong analytical skills'
      ]
    }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
<<<<<<< HEAD
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
=======
    'Unlimited PTO',
    'Stock options',
    '401(k) matching',
    'Gym membership'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of the future of AI and technology. Join our team of innovators and help shape the next generation of solutions.
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
            <div className="space-y-8">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                      <div className="flex items-center text-gray-400 text-sm space-x-4">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`/careers/${job.id}`}
                      className="mt-4 md:mt-0 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Apply Now
                      <ArrowRight className="ml-1" size={16} />
                    </a>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Role?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Send Resume
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
                Learn About Us
              </a>
            </div>
          </div>
<<<<<<< HEAD
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
=======
        </section>
      </main>
      
      <Footer />
    </div>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

export default CareersPage;
