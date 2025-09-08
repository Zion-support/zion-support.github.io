import React from 'react';
import Head from 'next/head';
import Link from 'next/link';



export default function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness' }, {
      icon: Globe,
      title: 'Global Impact' ];

  const openPositions = [

      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead AI model development and implementation for enterprise clients.'
    }, {'
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build scalable web applications using modern technologies.'
    }, {'
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement cloud infrastructure solutions.'
    }, {'
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for our technology solutions.'
    }, {'
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      description: 'Technical sales support and client relationship management.'
    }, {'
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create intuitive and engaging user experiences for our products.'
    }
  ];

  const values = ['
    'Innovation and creativity in everything we do',
    'Collaboration and teamwork across all departments',
    'Continuous learning and professional growth',
    'Client success as our primary focus',
    'Transparency and open communication',
    'Work-life balance and employee well-being'


  ];

  return (

      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and help build the future of technology. Explore career opportunities at Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Head>


            </div>

          </div>
        </section>


          </div>
        </div>
      </section>

      {/* Open Positions */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current openings and find the perfect role for your
              career goals.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className="p-6 hover: shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="mr-4">{position.location}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{position.type}</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      {position.department}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{position.description}</p>

                <Button className="w-full">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive,
              learn, and make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Values
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">
                      We encourage creative thinking and embrace new ideas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Collaboration
                    </h4>
                    <p className="text-gray-600">
                      We work together as a team to achieve common goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence</h4>
                    <p className="text-gray-600">
                      We strive for the highest quality in everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Team
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to start your journey with us? We&apos;re always looking
                for talented individuals ' who share our passion for technology
                and innovation.
              </p>
              <div className="space-y-4">
                <Link href="/contact">
                  <Button className="w-full">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Send Your Resume
                </Button>
              </div>

              </p>
            </div>

                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>"
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>"
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}


            </div>
          </div>
        </section>


                <p className="text-lg text-gray-600 mb-8">
                  We foster an environment where innovation thrives, collaboration is encouraged, and every team member has the opportunity to grow and make a meaningful impact.
                </p>"
                <div className="space-y-4">
                  {values.map((value, index) => ("
                    <div key={index} className="flex items-center">"
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>"
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>"
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">"
                <h3 className="text-2xl font-bold mb-6">Join Our Mission</h3>"
                <p className="text-lg mb-6">"
                  We're not just building software – we're building the future. Every project we work on has the potential to transform entire industries and improve how businesses operate.
                </p>'
                <div className="space-y-4">"
                  <div className="flex items-center">"
                    <Users className="w-5 h-5 mr-3" />
                    <span>Collaborative team environment</span>
                  </div>"
                  <div className="flex items-center">"
                    <Briefcase className="w-5 h-5 mr-3" />
                    <span>Exciting project opportunities</span>
                  </div>"
                  <div className="flex items-center">"
                    <Award className="w-5 h-5 mr-3" />
                    <span>Recognition and growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}"
        <section className="py-20">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>"
              <p className="text-lg text-gray-600">
                Explore our current openings and find the perfect role for you.

              </p>
            </div>

                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {position.type}
                    </span>
                  </div>
                  "
                  <div className="space-y-2 mb-4">"
                    <div className="flex items-center text-gray-600">"
                      <Briefcase className="w-4 h-4 mr-2" />"
                      <span className="text-sm">{position.department}</span>
                    </div>"
                    <div className="flex items-center text-gray-600">"
                      <MapPin className="w-4 h-4 mr-2" />"
                      <span className="text-sm">{position.location}</span>
                    </div>
                  </div>
                  "
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  
                  <Link "
                    href="/contact" "
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                  >
                    Apply Now
                  </Link>

          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Find your next career opportunity with us
              </p>
            </div>
            
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <position.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                        <p className="text-gray-600 mb-2">{position.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {position.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {position.type}
                          </div>
                          <div className="flex items-center">
                            <Award className="w-4 h-4 mr-1" />
                            {position.experience}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </button>
                    </Link>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>


              Don't See Your Perfect Role?
            </h2>'
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">"
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
            </p>'
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Send Resume
              </Link>"
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-blue-600 transition-colors">
                Learn More About Us

              </Link>
            </div>
          </div>
        </section>
      </main>



