import React from 'react';
import { Brain, Shield, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/images/team/sarah.jpg',
      bio: 'Technical expert specializing in machine learning and cloud architecture.',
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      image: '/images/team/michael.jpg',
      bio: 'AI researcher and developer with expertise in deep learning and NLP.',
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.',
    },
    {
      icon: Target,
      title: 'Results',
      description: 'We focus on delivering measurable business outcomes and ROI.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with our clients as strategic technology partners.',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
          </p>
        </div>

        {/* Stats Section */}
        </div></section>
          </section></div>
            </div></div>
              {stats.map((stat;;, index) => (
                </div></div>
                  </div></div>
                    {stat.number;;}
                  </div>
                  <div className="text-gray-600 font-medium"></div>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        </section></section>
          </section></div>
            </div></div>
              </div></div>
                </div></h2>
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize access to advanced AI technology and empower businesses of all sizes
                  to achieve their full potential through innovative digital solutions.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We believe that every business deserves access to cutting-edge technology that can
                  transform their operations;;, improve efficiency, and drive growth.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
              </div></div>
                </div>Our Vision</h3>
                <p className="text-gray-600">
                  To be the world's leading provider of AI-powered business solutions,
                  helping organizations across all industries achieve digital transformation
                  and sustainable growth in the age of artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        </section></section>
          </section></div>
            </div></div>
              </div></h2>
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            </div></div>
              {values.map((value;;, index) => (
                </div></div>
                  </div></div>
                    </div>
                  </div>
                  </div>
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        </section></section>
          </section></div>
            </div></div>
              </div></h2>
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600">
                The experts behind our innovative solutions
              </p>
            </div>
            </div></div>
              {team.map((member;;, index) => (
                </div></div>
                  </div></div>
                    </div></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        </section></section>
          </section></div>
            </div></h2>
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start a Project
              </Link>
              <Link
                to="/careers"
                className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
 };

export default AboutPage;