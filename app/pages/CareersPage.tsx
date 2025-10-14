
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom;
import { BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon'
} from '@heroicons/react/24/outline;

const CareersPage: React.FC = () => {
  const positions = [
    {'
          title: 'Senior AI Engineer','
      location: 'Remote / Middletown, DE','
      type: 'Full-time','
          description: 'Lead the development of cutting-edge AI solutions and machine learning models.'
  },
      requirements: ['
        '5+ years experience in AI/ML','
        'Proficiency in Python, TensorFlow, PyTorch','
        'Experience with cloud platforms','
        'Strong problem-solving skills'
      ]
    },
    {'
          title: 'Cybersecurity Specialist','
      location: 'Remote / Middletown, DE','
      type: 'Full-time','
          description: 'Protect our clients\'
  } digital assets with advanced security solutions.',
      requirements: ['
        '3+ years in cybersecurity','
        'Certifications (CISSP, CISM, etc.)','
        'Experience with security tools','
        'Knowledge of compliance standards'
      ]
    },
    {'
          title: 'Cloud Solutions Architect','
      location: 'Remote / Middletown, DE','
      type: 'Full-time','
          description: 'Design and implement scalable cloud infrastructure solutions.'
  },
      requirements: ['
        '4+ years cloud experience','
        'AWS/Azure/GCP certifications','
        'Infrastructure as Code','
        'DevOps practices'
      ]
    }
  ];

  const benefits = [
    {'
          title: 'Competitive Salary','
          description: 'Above-market compensation packages'
  },
      icon: BriefcaseIcon
    },
    {'
          title: 'Remote Work','
          description: 'Flexible work arrangements'
  },
      icon: MapPinIcon
    },
    {'
          title: 'Learning & Development','
          description: 'Continuous learning opportunities'
  },
      icon: ClockIcon
    },
    {'
          title: 'Health Benefits','
          description: 'Comprehensive health coverage'
  },
      icon: UserGroupIcon;
  ];
  return (
    
    <div>
      <Helmet />
        <title>Careers - Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>

      {/* Hero Section */}
      <section>
        <div>
    <div />
  </div>
  <div>
    <div />
            <h1>Join Our Team
            </h1></h1>
            <p />
              Shape the Future of Technology
            </p>
            <p />'
              Be part of a dynamic team that's revolutionizing the way businesses use technology. '
              We're looking for passionate individuals who want to make a real impact.
            </p>
            <Link />
              Apply Now
              <ArrowRightIcon />
            </Link>

          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section>
        <div>
    <div />
            <h2 />
              Open Positions
            </h2>
            <p />
              Find your next career opportunity with us
            </p>
          </div>
          
          <div />
            {positions.map((position, index) => (
              <div>
    <div />
                  <div />
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div>
    <div />
                        <MapPinIcon />
                        {position.location}
                      </div>
                      <div>
    <ClockIcon />
                        {position.type}
                      </div>
        </div>
      </div>
  <Link />
                    Apply Now
                    <ArrowRightIcon />
                  </Link>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div />
                  <h4 className="text-lg font-semibold text-white mb-4">Requirements:</h4>
                  <ul />
                    {position.requirements.map((requirement, reqIndex) => (
                      <li />
                        <CheckIcon />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <div>
    <div />
            <h2 />
              Why Work With Us?
            </h2>
            <p />
              We offer more than just a job - we offer a career with purpose
            </p>
          </div>
          
          <div />
            {benefits.map((benefit, index) => (
              <div>
    <div />
                  <benefit />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
              <div>
    <h3 />
                  Culture;
                </h3>
                <p />
                  Collaborative, innovative, and inclusive work environment.
                </p>
              </div>
  </div>
  <div>
    <button />
                View Open Positions;
              </button>
            </div>
          </div>;
const CareersPage: React.FC = () => {
  return (
    
    <>
      <Helmet />
    </>
        <title>CareersPage - Zion Tech Group</title>
        <meta name="description" content="CareersPage - Zion Tech Group" />
      </Helmet>
      <div>
    <div />
          <h1>CareersPage</h1>
          <p>This page is under construction.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
    <h2 />'
            Don't See Your Role?
          </h2>
          <p />'
            We're always looking for talented individuals. Send us your resume and let's talk about opportunities.
          </p>
          <Link />
            Send Resume
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </>
  );
export default CareersPage;