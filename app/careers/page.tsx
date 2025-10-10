'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Users, 
  Award, 
  GraduationCap, 
  Star, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Heart,
  Zap,
  Shield,
  Brain
} from 'lucide-react'
const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ]
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years of cloud architecture experience',
        'Certifications in AWS, Azure, or GCP',
        'Experience with containerization and orchestration',
        'Strong understanding of security best practices'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced security solutions and threat monitoring.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years of cybersecurity experience',
        'Certifications in CISSP, CISM, or CEH',
        'Experience with SIEM tools and incident response',
        'Knowledge of compliance frameworks (SOC 2, ISO 27001)'
      ]
    },
    {
      id: 4,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex data sets to drive business decisions and innovation.',
      requirements: [
        'Master\'s degree in Data Science or related field',
        '3+ years of data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning algorithms',
        'Strong statistical and analytical skills'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Streamline development processes and ensure reliable deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Experience with CI/CD tools and practices',
        'Knowledge of infrastructure as code',
        'Strong scripting and automation skills'
      ]
    },
    {
      id: 6,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and development for our AI and IT solutions.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '5+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'MBA preferred'
      ]
    }
  ]
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      title: 'Learning & Development',
      description: 'Annual learning budget and access to conferences, courses, and certifications'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Retirement Planning',
      description: '401(k) with company matching and financial planning resources'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'Innovation Time',
      description: 'Dedicated time to work on personal projects and explore new technologies'
    },
    {
      icon: <Star className="w-8 h-8 text-orange-500" />,
      title: 'Recognition & Rewards',
      description: 'Performance bonuses, stock options, and recognition programs'
    }
  ]
  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-600" />, value: '50+', label: 'Team Members' },
    { icon: <Award className="w-8 h-8 text-green-600" />, value: '98%', label: 'Employee Satisfaction' },
    { icon: <GraduationCap className="w-8 h-8 text-purple-600" />, value: '100%', label: 'Learning & Development' },
    { icon: <Star className="w-8 h-8 text-yellow-600" />, value: '4.8/5', label: 'Glassdoor Rating' }
  ]
  return (
    <>
      <Helmet> </Helmet><title>Careers - Zion Tech Group | Join Our Team</title>
        <meta> </meta><meta> </meta></Helmet>

      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><div> </div><h1>Join Our </h1><span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Team</span>
              </h1>
              <p>Be part of a team that's shaping the future of technology. Work on cutting-edge AI and IT 
                solutions while enjoying a culture of innovation, growth, and collaboration.
              </p></p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section> </section><div> </div><div>{stats.map((stat, index) => (
                </div><div> </div><div>{stat.icon}
                  </div></div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section> </section><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
              <p>We offer competitive benefits and a culture that values innovation, growth, and work-life balance.
              </p></p>
            </div>

            <div>{benefits.map((benefit, index) => (
                </div><div> </div><div>{benefit.icon}
                    </div><h3 className="text-xl font-bold text-white ml-4">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section> </section><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
              <p>Explore our current job openings and find the perfect role for your skills and career goals.
              </p></p>
            </div>

            <div>{jobOpenings.map((job) => (
                </div><div> </div><div> </div><div> </div><h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div> </div><div> </div><MapPin> </MapPin><span>{job.location}</span>
                        </div>
                        <div> </div><Clock> </Clock><span>{job.type}</span>
                        </div>
                        <div> </div><Users> </Users><span>{job.department}</span>
                        </div>
                        <div> </div><Award> </Award><span>{job.experience}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                    </div>
                    <button>Apply Now
                      </button><ArrowRight> </ArrowRight></button>
                  </div>

                  <div> </div><h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul>{job.requirements.map((requirement, index) => (
                        </ul><li> </li><CheckCircle> </CheckCircle><span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section> </section><div> </div><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
                <p>At Zion Tech Group, we believe that great technology comes from great people. 
                  We foster a culture of innovation, collaboration, and continuous learning where 
                  every team member can thrive and make a meaningful impact.
                </p></p>
                <div> </div><div> </div><CheckCircle> </CheckCircle><div> </div><h3 className="text-lg font-semibold text-white mb-1">Innovation First</h3>
                      <p className="text-gray-300">We encourage experimentation and creative problem-solving</p>
                    </div>
                  </div>
                  <div> </div><CheckCircle> </CheckCircle><div> </div><h3 className="text-lg font-semibold text-white mb-1">Collaborative Environment</h3>
                      <p className="text-gray-300">Work with talented professionals from diverse backgrounds</p>
                    </div>
                  </div>
                  <div> </div><CheckCircle> </CheckCircle><div> </div><h3 className="text-lg font-semibold text-white mb-1">Growth Opportunities</h3>
                      <p className="text-gray-300">Continuous learning and career development support</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div> </div><h3 className="text-2xl font-bold text-white mb-6">Ready to Apply?</h3>
                <p>Don't see a position that matches your skills? We're always looking for talented 
                  individuals to join our team. Send us your resume and let us know how you can contribute.
                </p></p>
                <div> </div><a>Send Your Resume
                  </a></a>
                  <a>Email Us Directly
                  </a></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer> </Footer></>
  )
}
export default CareersPage