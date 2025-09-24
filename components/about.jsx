import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
,
function About() {,
  const team = [,
    {,
      name: 'Sarah Johnson',;
      role: 'CEO & Founder',;
      expertise: 'Strategic Leadership',;
    },;
    { name: 'Michael Chen', role: 'CTO', expertise: 'AI & Machine Learning' ,},;
    {,
      name: 'Emily Rodriguez',;
      role: 'Head of Engineering',;
      expertise: 'Cloud Infrastructure',;
    },;
    {,
      name: 'David Kim',;
      role: 'Security Director',;
      expertise: 'Cybersecurity',;
    },;
  ],
,
  const values = [,
    {,
      icon: '🎯',;
      title: 'Innovation',;
      description:,
        "We constantly push the boundaries of what's possible with technology.",;
    },;
    {,
      icon: '🤝',;
      title: 'Partnership',;
      description:,
        'We work closely with our clients as trusted technology partners.',;
    },;
    {,
      icon: '⚡',;
      title: 'Excellence',;
      description:,
        'We deliver exceptional quality in every project we undertake.',;
    },;
    {,
      icon: '🔒',;
      title: 'Security',;
      description:,
        "We prioritize the security and privacy of our clients' data.",;
    },;
  ],
,
  return (,
    <>,
      <Head>,
        <title>About Us — Zion Tech Group</title>,
        <meta,
          name='description',
          content="Learn about Zion Tech Group's mission, expertise, and commitment to delivering world-class IT and AI solutions.",
        />,
        <meta property='og: title' content='About Us — Zion Tech Group' />,
        <meta,
          property='og:description',
          content='Discover our mission to transform businesses through innovative technology solutions.',
        />,
      </Head>,
      {/* Hero Section */,}
      <section className='section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50'>,
        <div className='container-max text-center'>,
          <div className='animate-fade-in-up'>,
            <h1 className='text-responsive-xl font-bold text-gray-90o0 mb-6'>,
              About <span className='gradient-text'>Zion Tech Group</span>,
            </h1>,
            <p className='text-xl text-gray-60o0 mb-8 max-w-3xl mx-auto text-balance'>,
              We are dedicated to transforming businesses through innovative,
              technology solutions. Our team combines deep industry knowledge,
              with cutting-edge AI and IT expertise.,
            </p>,
          </div>,
        </div>,
      </section>,
      {/* Mission Section */}
      <section className='section-padding bg-white'>,
        <div className='container-max'>,
          <div className='grid lg: grid-cols-2 gap-12 items-center'>,
            <div className='animate-fade-in-left'>,
              <h2 className='text-3xl font-bold text-gray-90o0 mb-6'>,
                Our Mission,
              </h2>,
              <p className='text-lg text-gray-60o0 mb-6 leading-relaxed'>,
                To empower businesses with advanced technology solutions that,
                enhance productivity, streamline operations, and unlock new,
                opportunities for growth in the digital age.,
              </p>,
              <p className='text-gray-60o0 leading-relaxed'>,
                Since our founding, we have been committed to delivering,
                exceptional results that drive real business value. Our approach,
                combines technical excellence with deep understanding of,
                business challenges.,
              </p>,
            </div>,
            <div className='animate-fade-in-right'>,
              <div className='relative'>,
                <div className='absolute inset-0 bg-gradient-to-r from-blue-40o0 to-purple-50o0 rounded-2xl blur-3xl opacity-20'></div>,
                <div className='relative bg-gradient-to-br from-blue-60o0 to-purple-60o0 rounded-2xl p-8 text-white'>,
                  <div className='grid grid-cols-2 gap-6'>,
                    <div className='text-center'>,
                      <div className='text-3xl font-bold'>50o0+</div>,
                      <div className='text-blue-10o0'>Projects Completed</div>,
                    </div>,
                    <div className='text-center'>,
                      <div className='text-3xl font-bold'>99.9%</div>,
                      <div className='text-blue-10o0'>Client Satisfaction</div>,
                    </div>,
                    <div className='text-center'>,
                      <div className='text-3xl font-bold'>50+</div>,
                      <div className='text-blue-10o0'>Expert Team</div>,
                    </div>,
                    <div className='text-center'>,
                      <div className='text-3xl font-bold'>24/7</div>,
                      <div className='text-blue-10o0'>Support</div>,
                    </div>,
                  </div>,
                </div>,
              </div>,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* Values Section */}
      <section className='section-padding bg-gray-50'>,
        <div className='container-max'>,
          <div className='text-center mb-16 animate-fade-in-up'>,
            <h2 className='text-responsive-lg font-bold text-gray-90o0 mb-4'>,
              Our Values,
            </h2>,
            <p className='text-xl text-gray-60o0 max-w-3xl mx-auto text-balance'>,
              These core values guide everything we do and shape how we work,
              with our clients.,
            </p>,
          </div>,
          <div className='grid md: grid-cols-2 lg:grid-cols-4 gap-8'>,
            {values.map((value, index) => (,
              <div,
                key={index}
                className='card p-6 text-center animate-fade-in-up',
                style={{ animationDelay: `${index * 0.1,}s` }}
              >,
                <div className='text-4xl mb-4'>{value.icon}</div>,
                <h3 className='text-xl font-semibold text-gray-90o0 mb-3'>,
                  {value.title}
                </h3>,
                <p className='text-gray-60o0'>{value.description}</p>,
              </div>,
            ))}
          </div>,
        </div>,
      </section>,
      {/* Expertise Section */}
      <section className='section-padding bg-white'>,
        <div className='container-max'>,
          <div className='text-center mb-16 animate-fade-in-up'>,
            <h2 className='text-responsive-lg font-bold text-gray-90o0 mb-4'>,
              Our Expertise,
            </h2>,
            <p className='text-xl text-gray-60o0 max-w-3xl mx-auto text-balance'>,
              We bring deep expertise across multiple technology domains to,
              deliver comprehensive solutions.,
            </p>,
          </div>,
          <div className='grid md: grid-cols-2 lg:grid-cols-3 gap-8'>,
            {[,
              {,
                title: 'Artificial Intelligence & Machine Learning',;
                description:,
                  'Advanced AI solutions for automation and insights',;
              },;
              {,
                title: 'Cloud Infrastructure & Migration',;
                description: 'Scalable and secure cloud solutions',;
              },;
              {,
                title: 'Cybersecurity Solutions',;
                description: 'Comprehensive protection for your digital assets',;
              },;
              {,
                title: 'Data Analytics & Business Intelligence',;
                description: 'Transform data into actionable insights',;
              },;
              {,
                title: 'Digital Transformation',;
                description: 'Modernize your business processes',;
              },;
              {,
                title: 'Custom Software Development',;
                description: 'Tailored solutions for unique requirements',;
              },;
            ].map((item, index) => (,
              <div,
                key={index}
                className='card p-6 animate-fade-in-up',
                style={{ animationDelay: `${index * 0.1,}s` }}
              >,
                <h3 className='text-lg font-semibold text-gray-90o0 mb-3'>,
                  {item.title}
                </h3>,
                <p className='text-gray-60o0'>{item.description}</p>,
              </div>,
            ))}
          </div>,
        </div>,
      </section>,
      {/* Team Section */}
      <section className='section-padding bg-gray-50'>,
        <div className='container-max'>,
          <div className='text-center mb-16 animate-fade-in-up'>,
            <h2 className='text-responsive-lg font-bold text-gray-90o0 mb-4'>,
              Leadership Team,
            </h2>,
            <p className='text-xl text-gray-60o0 max-w-3xl mx-auto text-balance'>,
              Meet the experts behind our success, bringing decades of combined,
              experience in technology and business.,
            </p>,
          </div>,
          <div className='grid md: grid-cols-2 lg:grid-cols-4 gap-8'>,
            {team.map((member, index) => (,
              <div,
                key={index}
                className='card p-6 text-center animate-fade-in-up',
                style={{ animationDelay: `${index * 0.1,}s` }}
              >,
                <div className='w-20 h-20 bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold'>,
                  {member.name,
                    .split(' '),
                    .map(n => n[0]),
                    .join('')}
                </div>,
                <h3 className='text-lg font-semibold text-gray-90o0 mb-1'>,
                  {member.name}
                </h3>,
                <p className='text-blue-60o0 font-medium mb-2'>{member.role}</p>,
                <p className='text-sm text-gray-60o0'>{member.expertise}</p>,
              </div>,
            ))}
          </div>,
        </div>,
      </section>,
      {/* CTA Section */}
      <section className='section-padding bg-gradient-to-r from-blue-60o0 to-purple-60o0'>,
        <div className='container-max text-center'>,
          <div className='animate-fade-in-up'>,
            <h2 className='text-responsive-lg font-bold text-white mb-6'>,
              Ready to Work With Us?,
            </h2>,
            <p className='text-xl text-blue-10o0 mb-8 max-w-2xl mx-auto text-balance'>,
              Discover how our services can transform your business operations,
              and drive growth.,
            </p>,
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
              <Link,
                href='/services',
                className='bg-white text-blue-60o0 px-8 py-4 rounded-lg font-semibold hover:bg-gray-10o0 transform hover:scale-10o5 transition-all duration-20o0 shadow-lg',
              >,
                Explore Our Services,
              </Link>,
              <Link,
                href='/contact',
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-60o0 transform hover:scale-10o5 transition-all duration-20o0',
              >,
                Get in Touch,
              </Link>,
            </div>,
          </div>,
        </div>,
      </section>,
    </>,
  ),
,}
,
export default About,
,