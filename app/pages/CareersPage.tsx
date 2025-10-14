
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom
import { BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckIcon,'
  UserGroupIcon,;';}
  CpuChipIcon,';}
  ShieldCheckIcon,';}
  CloudIcon'}
} from '@heroicons/react/24/outline
const CareersPage: React.FC = () => {'
  const positions = [']
    {'
      title: 'Senior AI Engineer','
      location: 'Remote / Middletown', DE','
      type: 'Full-time','
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['
        '5+ years experience in AI/ML','
        'Proficiency in Python, TensorFlow, PyTorch','}
        'Experience with cloud platforms','}]
        'Strong problem-solving skills'}]
      ]}
    },
    {'
      title: 'Cybersecurity Specialist','
      location: 'Remote / Middletown', DE','
      type: 'Full-time','
      description: 'Protect our clients\' digital assets with advanced security solutions.',
      requirements: ['
        '3+ years in cybersecurity','
        'Certifications (CISSP, CISM, etc.)','}
        'Experience with security tools','}]
        'Knowledge of compliance standards'}]
      ]}
    },
    {'
      title: 'Cloud Solutions Architect','
      location: 'Remote / Middletown', DE','
      type: 'Full-time','
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: ['
        '4+ years cloud experience','
        'AWS/Azure/GCP certifications','}
        'Infrastructure as Code','}]
        'DevOps practices'}]
      ]}
    }
  ]
  const benefits = [
    {'}
      title: 'Competitive Salary','}
      description: 'Above-market compensation packages',}
      icon: BriefcaseIcon}
    },
    {'}
      title: 'Remote Work','}
      description: 'Flexible work arrangements',}
      icon: MapPinIcon}
    },
    {'}
      title: 'Learning & Development','}
      description: 'Continuous learning opportunities',}
      icon: ClockIcon}
    },
    {'
      title: 'Health Benefits','
      description: 'Comprehensive health coverage',]
      icon: "UserGroupIcon;]
  ]
  return (
    <></>
      <Helmet>title</Helmet>
      <title>Careers - Zion Tech Group</title>
        <meta name="description" content="404 - Zion Tech Group" />"}
        <meta name="keywords" content="careers, jobs, AI engineer, cybersecurity, cloud architect, technology careers" /></meta>}
      </Helmet>}
}
      {/* Hero Section */}
      <section>div</section>
      <div></div>
        </div>
        
        <div>h1</div>
      <h1></h1>
              Join Our Team)
            </h1>
            <p className="text-xl" md:text-2xl text-gray-300 mb-8 leading-relaxed></p>
              Shape the Future of Technology
            </p>
            <p className="text-lg" text-gray-400 mb-12 max-w-3xl mx-auto></p>'
              Be part of a dynamic team that's revolutionizing the way businesses use technology. '
              We're looking for passionate individuals who want to make a real impact.
            </p>
            <Link
              to=/contact
              className="bg-gradient-to-r" from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2
            ></Link>
              Apply Now
              <ArrowRightIcon className="w-5" h-5 /></ArrowRightIcon>
            </Link>

          </div>
        </div>
      </section>

      {/* Open Positions Section */"}
      <section>div</section>
      <div></div>
            <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
              Open Positions
            </h2>
            <p className="text-xl" text-gray-300 max-w-3xl mx-auto></p>
              Find your next career opportunity with us
            </p>
          </div>
          )
          <div className="space-y-8"></div>)
            {positions.map((position", index) => (}
              <div>h3</div>
      <h3>{position.title"}</h3>
                    <div>MapPinIcon</div>
      <MapPinIcon></MapPinIcon>
                        {position.location}
                      </div>
                      <div>ClockIcon</div>
      <ClockIcon></ClockIcon>
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <Link)
                    to="/contact"
                    className="mt-4 md: "mt-0 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2
                  ></Link>
                    Apply Now
                    <ArrowRightIcon className="w-4" h-4 /></ArrowRightIcon>
                  </Link>
                </div>
                
                <p className="text-gray-300" mb-6>{position.description"}</p>
                
                <div>h4</div>
      <h4>Requirements: "</h4>)
                  <ul className="space-y-2"></ul>)
                    {position.requirements.map((requirement", reqIndex) => (}
                      <li>CheckIcon</li>
      <CheckIcon></CheckIcon>
                        {requirement})
                      </li>)
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>div</section>
      <div></div>
            <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
              Why Work With Us?
            </h2>
            <p className="text-xl" text-gray-300 max-w-3xl mx-auto></p>
              We offer more than just a job - we offer a career with purpose
            </p>
          </div>
          
          <div className="grid" md:grid-cols-2 lg:grid-cols-4 gap-8></div>
            {benefits.map((benefit", index) => (}
              <div>benefit</div>
      <benefit></benefit>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
              <h3>h3</h3>
                  Culture)
                </h3>
                <p></p>
                  Collaborative, innovative, and inclusive work environment.
                </p>
              </div>
            </div>
            <div>button</div>
      <button></button>
                View Open Positions
              </button>
            </div>)
          </div>;)
const CareersPage: "React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
    </>
        <title>CareersPage - Zion Tech Group</title>
        <meta name=description content=CareersPage - Zion Tech Group />
      </Helmet>
      <div>h1</div>
      <h1>CareersPage</h1>
          <p>This page is under construction.</p>"}
        </div>}
      </section>}
}
      {/* CTA Section */}
      <section>div</section>
      <div>h2</div>
      <h2>'
            Don't See Your Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p>'
            We're always looking for talented individuals. Send us your resume and let's talk about opportunities.
          </p>
          <Link)
            to="/contact"
            className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
          ></Link>
            Send Resume
            <ArrowRightIcon className="w-5 h-5" /></ArrowRightIcon>
          </Link>
        </div>
      </section>)
    </>)
  )
export default CareersPage
'