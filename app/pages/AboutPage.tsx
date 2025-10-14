import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom
import { 
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,'
  StarIcon,;';}
  PhoneIcon,';}
  EnvelopeIcon,';}
  MapPinIcon'}
} from '@heroicons/react/24/outline
const AboutPage: React.FC = () => {'
  const values = [']
    {'}
      title: 'Innovation','}
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.',}
      icon: CpuChipIcon}
    },
    {'}
      title: 'Security','}
      description: 'Your data and systems are protected with enterprise-grade security measures.',}
      icon: ShieldCheckIcon}
    },
    {'
      title: 'Reliability','
      description: 'We deliver consistent', high-quality solutions that you can depend on.',]
      icon: CloudIcon;]}
  ];}
}
  const stats = ['}
    { number: '50+', label: 'Projects Completed' },'
    { number: '25+', label: 'Happy Clients' },'
    { number: '99%', label: 'Success Rate' },']
    { number: '4+', label: 'Years Experience' }]
  ]
  const team = [
    {'
      name: 'Kleber Santos','}
      role: 'Founder & CEO','}
      description: 'Technology visionary with 10+ years in AI and IT solutions.','}
      image: '/team/kleber.jpg'}
    },
    {'
      name: 'Sarah Johnson','}
      role: 'CTO','}
      description: 'Expert in cloud architecture and cybersecurity solutions.','}
      image: '/team/sarah.jpg'}
    },
    {'
      name: 'Michael Chen','}
      role: 'Lead AI Engineer','}
      description: 'Specialist in machine learning and artificial intelligence.','}
      image: '/team/michael.jpg'}]
    }]
  ]
  return (
    <></>
      <Helmet>title</Helmet>
      <title>About Us - Zion Tech Group</title>'
        <meta>meta</meta>
      <meta></meta>

      </Helmet>

      {/* Hero Section */}
      <section>div</section>
      <div></div>
        </div>
        
        <div>h1</div>
      <h1></h1>
              About Zion Tech Group)
            </h1>
            <p className="text-xl" md:text-2xl text-gray-300 mb-8 leading-relaxed></p>
              Pioneering the Future of Technology
            </p>
            <p className="text-lg" text-gray-400 mb-12 max-w-3xl mx-auto></p>
              Founded in 2020", Zion Tech Group has been at the forefront of technological innovation, 
              delivering cutting-edge AI and IT solutions that transform businesses and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section>div</section>
      <div></div>
            <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
              Our Mission
            </h2>
            <p className="text-xl" text-gray-300 max-w-4xl mx-auto leading-relaxed></p>
              To empower businesses with innovative technology solutions that drive digital transformation", 
              enhance security, and accelerate growth in an ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section>div</section>
      <div></div>
            <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
              Our Values
            </h2>
            <p className="text-xl" text-gray-300 max-w-3xl mx-auto></p>
              The principles that guide everything we do
            </p>
          </div>
          )
          <div className="grid" md:grid-cols-3 gap-8></div>)
            {values.map((value", index) => (}
              <div>value</div>
      <value></value>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>)
              </div>)
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>div</section>
      <div></div>
            <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
              Our Impact
            </h2>
            <p className="text-xl" text-gray-300 max-w-3xl mx-auto></p>
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid" grid-cols-2 md:grid-cols-4 gap-8></div>
            {stats.map((stat", index) => (}
              <div></div>
                  {stat.number"}
                </div>
                <div className="text-gray-300 text-lg"></div>
                  {stat.label}
                </div>)
              </div>)
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>div</section>
      <div></div>
            <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
              Meet Our Team
            </h2>
            <p className="text-xl" text-gray-300 max-w-3xl mx-auto></p>
              The experts behind our innovative solutions
            </p>
          </div>
          
          <div className="grid" md:grid-cols-3 gap-8></div>
            {team.map((member", index) => (}
              <div>UserGroupIcon</div>
      <UserGroupIcon></UserGroupIcon>
                </div>
                <h3 className="text-2xl" font-bold text-white mb-2>{member.name"}</h3>
                <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>

      {/* CTA Section */}
      <section>div</section>
      <div>h2</div>
      <h2>
            Ready to Work With Us?
          </h2>
          <p className="text-xl" text-gray-300 mb-8></p>'
            Let's discuss how we can help transform your business with our technology solutions)
          </p>
          <div>Link</div>
      <Link></Link>
              Get In Touch
            </Link>
            <Link
              to=/careers
              className="border-2" border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300
            ></Link>
              Join Our Team
            </Link>
          </div>
        </div>
      </section>)
    </>)
  )
"}
export default AboutPage
'