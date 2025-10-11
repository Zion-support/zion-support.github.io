import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Target, Users, Award, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers and developing cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our success is measured by our clients\' success. We build lasting partnerships and deliver solutions that drive real business value.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results every time.'

}
  ]

const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'AI researcher with 15+ years of experience in machine learning and quantum computing.',
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      bio: 'Full-stack architect specializing in scalable cloud infrastructure and microservices.',
      image: '/team/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of AI Research',
      bio: 'Leading expert in natural language processing and computer vision technologies.',
      image: '/team/priya-patel.jpg'
    }
  ]

  return (
    <></>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        </div><main className="pt-20">
        {/* Hero Section */}
        </main><section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're a team of passionate technologists dedicated to democratizing access to cutting-edge AI and IT solutions, empowering businesses to thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              </div>
<div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize access to cutting-edge AI and IT solutions, making advanced technology accessible to businesses of all sizes. We believe that every organization should have the tools to compete and thrive in the digital economy.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Through innovation, expertise, and a client-first approach, we're building the future of business technology, one solution at a time.
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                  Learn More About Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
<div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Our Impact</h3>
                </div>
<div className="space-y-4">
                  </div>
<div className="flex items-center">
                    </div>
<div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
<div>
                      </div>
<div className="text-2xl font-bold text-white">500+</div>
<div className="text-gray-300">Projects Completed</div>
                    </div>
                  </div>
<div className="flex items-center">
                    </div>
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
<div>
                      </div>
<div className="text-2xl font-bold text-white">200+</div>
<div className="text-gray-300">Happy Clients</div>
                    </div>
                  </div>
<div className="flex items-center">
                    </div>
<div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
<div>
                      </div>
<div className="text-2xl font-bold text-white">10+</div>
<div className="text-gray-300">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
</div>
          </div>
        </section>

{/* Values Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-800/50">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  </div>
<div key={index} className="text-center">
                    </div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                )
              })

</div>
          </div>
        </section>

{/* Team Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The brilliant minds behind our innovative solutions
              </p>
            </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                </div>
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  </div>
<div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
{/* Benefits Section */}
        <section className="py-20 px-4">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth
              </p>
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                </div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  </div>
<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
</div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<section className="py-20 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>
        </main>
      </div>
      
      <Footer />
    </>
  )
}

export default AboutPage