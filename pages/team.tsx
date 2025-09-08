import React from 'react';



export default function Team() {
  const teamMembers = [

    }, {
      name: 'Sarah Johnson', role: 'CTO',
      expertise: 'Cloud Architecture', description: 'Expert in scalable cloud solutions and enterprise architecture.',
      icon: Globe, linkedin: 'https://linkedin.com/in/sarah-johnson'
    }, {
      name: 'Michael Chen', role: 'Lead AI Engineer',
      expertise: 'Machine Learning', description: 'Specialist in deep learning and autonomous systems development.',
      icon: Brain, linkedin: 'https://linkedin.com/in/michael-chen'
    }, {
      name: 'Emily Rodriguez', role: 'Security Director',
      expertise: 'Cybersecurity', description: 'Cybersecurity expert with focus on zero-trust architecture.',
      icon: Shield, linkedin: 'https://linkedin.com/in/emily-rodriguez'
    }, {
      name: 'David Kim', role: 'DevOps Lead',
      expertise: 'Infrastructure', description: 'DevOps specialist with expertise in automation and scaling.',
      icon: Code, linkedin: 'https://linkedin.com/in/david-kim'
    }, {
      name: 'Lisa Thompson', role: 'Product Manager',
      expertise: 'SaaS Solutions', description: 'Product strategist focused on micro SaaS and user experience.',
      icon: Users, linkedin: 'https://linkedin.com/in/lisa-thompson'
    }
  ];


  const values = [

      description: 'We push the boundaries of technology to deliver cutting-edge solutions.'
    }, {
      icon: Users,
      title: 'Client Success', description: 'Your success is our success. We\'re committed to delivering exceptional results.'
    }, {
      icon: Shield, title: 'Security & Trust',
      description: 'We maintain the highest security standards and build trust through transparency.'
    }, {
      icon: Zap,
      title: 'Agile Delivery', description: 'Fast, efficient delivery without compromising on quality or security.'

    }
  ];

const Page = () => {
  return (
    <>
      <Head>
        <title>Our Team — Zion Tech Group</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group. Experienced professionals dedicated to delivering innovative technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https: //ziontechgroup.com/team" />
      </Head>
      

            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600">
                Experienced professionals leading innovation in technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover: shadow-md transition-shadow border border-gray-100">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <member.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-4">{member.expertise}</p>
                    <p className="text-gray-600 mb-6">{member.description}</p>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Connect on LinkedIn
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our expert team can help transform your business with innovative technology solutions.'
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get In Touch
              </Link>
              <Link href="/careers" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
</>
  )}