import React from 'react'
import { Helmet } from 'react-helmet-async'
import {




  Cpu Chip Icon
  Shield Check Icon
  Rocket Launch Icon
  ArrowRight Icon
  User Group Icon
} from '@heroicons/react/24/outline'
const stats = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
    { label: 'Projects Completed', value: '500+', number: '500+', }
    { label: 'Happy Clients', value: '200+', number: '200+', }
    { label: 'Team Members', value: '50+', number: '50+', }
    { label: 'Years Experience', value: '10+', number: '10+', }]
  const About Page: React.FC = () => {
  

  const values = [
    {
      icon: CpuChipIcon,
    {
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges.',
    },
    {
      icon: ShieldCheckIcon,
    {
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security measures and compliance standards.',
    },
    {
      icon: UserGroupIcon,
    {
      title: 'Client-Centric',
      description: 'We prioritize our clients\', success, working closely with them to understand their unique needs and deliver tailored solutions.'
    }
    {
      icon: RocketLaunchIcon,
    {
      title: 'Results-Driven',
      description: 'We measure our success by the tangible results and value we deliver to our clients\', businesses.'
    }]
  const team = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
    {
      name: 'Dr. Kleber Santos'
      role: 'Founder & CE O'
      description: 'A I and Machine Learning expert with 15+ years of experience in technology leadership.'
      image: '/team/kleber.jpg'
    }
    {
      name: 'Sarah Johnson'
      role: 'CT O'
      description: 'Cloud architecture specialist with expertise in scalable system design and implementation.'
      image: '/team/sarah.jpg'
    }
    {
      name: 'Michael Chen'
      role: 'Head of A I Research'
      description: 'Ph D in Computer Science, leading our A I research and development initiatives.'
      image: '/team/michael.jpg'
    }
    {
      name: 'Emily Rodriguez'
      role: 'Cybersecurity Director'
      description: 'Cybersecurity expert with certifications in ethical hacking and security architecture.'
      image: '/team/emily.jpg'
    }]
  return (
    <>
      <div>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge A I and I T solutions." />
        <meta name="keywords" content="about us, team, mission, A I experts, I T professionals, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screenbg-slate-90 0 text-white">
        {/* Hero Section */}
        <section className="relative py-2 0 bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5 xl md:text-6xlfont-boldmb-6bg-gradient-to-r from-purple-400 to-cyan-400bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto">
              We are a team of passionate AI and IT experts dedicated to transforming businesses 
              through innovative technology solutions.
            </p>
            </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4 xl mx-auto text-center">
              <h2 className="text-4 xlmd:text-5xlfont-boldtext-whitemb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-1 2leading-relaxed">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth. We believe technology should be accessible, secure, and 
                transformative for organizations of all sizes.
              </p>
              
              <div className="gridmd:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    </div><div className="text-4 xlfont-boldtext-purple-40 0mb-2">{stat.number}</div>
                    <div className="text-gray-30 0">{stat.label}</div>
                    </div>
        </div>
                ))}
  )
                </div>
              </div>
            </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-8 0 0/5 0">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4 xlmd:text-5xlfont-boldtext-whitemb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto">
                These core values guide everything we do and shape our approach to client success.
              </p>
              </div>
            
            <div className="gridmd:grid-cols-2 lg:grid-cols-4gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  </div><div className="w-1 6 h-1 6 bg-gradient-to-r from-purple-5 0 0 to-cyan-5 0 0rounded-lgflexitems-centerjustify-centermx-automb-6">
                    <value.icon className="w-8 h-8 text-white" />
                    </div>
                  <h3 className="text-xlfont-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                  </div>
              ))}
  )
              </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4 xlmd:text-5xlfont-boldtext-whitemb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                cloud computing, cybersecurity, and business transformation.
              </p>
              </div>
            
            <div className="gridmd:grid-cols-2 lg:grid-cols-4gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-slate-8 00 rounded-xlp-6 text-centerborderborder-slate-7 00hover:border-purple-5 0 0transition-all duration-300">
                  </div><div className="w-2 4 h-2 4 bg-gradient-to-r from-purple-5 0 0 to-cyan-5 0 0rounded-fullmx-automb-4flexitems-centerjustify-center">
                    <UserGroupIcon className="w-1 2 h-1 2 text-white" />
                    </div>
                  <h3 className="text-xlfont-boldtext-whitemb-2">{member.name}</h3>
                  <div className="text-purple-40 0 font-semiboldmb-3">{member.role}</div>
                  <p className="text-gray-30 0 text-sm">{member.description}</p>
                  </div>
              ))}
  )
              </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-9 0 0/3 0to-cyan-9 0 0/3 0">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4 xlmd:text-5xlfont-boldtext-whitemb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto">
              Let&apos;s discuss how our team can help transform your business with 
              cutting-edge A I and I T solutions.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-6 00 to-cyan-6 00 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-7 00 hover:to-cyan-7 00 transition-all duration-300 transformhover:scale-1 0 5flexitems-centerjustify-centergap-2">
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9 0 0transition-all duration-300">
                View Our Work
              </button>
              </div>
            </div>
        </section>
      </div>
    </div> </section> {/* Mission Section */ }, <section className="py 20"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4"> <div className="max w 4-xl mx-auto text-center"> <h2 className="text 4 xlmd:text-5-xlfont-boldtext-whitemb-8"> Our Mission </h2> <p className="text xl text gray-300-mb-1-leading-relaxed"> Toempowerbusinesses with cutting-edge AI and IT solutionsthatdrive innovation, efficiency, and growth. Webelievetechnology shouldbeaccessible, secure, andtransformativefor organizationsofall sizes. </p> 
            <div className="grid md:grid cols 4-gap-8"> {stats.map ( (stat, index )=> (<div y= {index }className="text-center"> 
          </div><div className="text-4xl font-boldtext-purple-40-mb-2"> {stat.number }
          </div> <div className="text gray 30"> {stat.label }
          
        </div>
      </div>
    </div> ) )}, 
          
        </div>
      </div>
    </div> 
          
        </div>
      </div>
    </div> 
          </div> </section> {/* Values Section */ }, <section className="py 20 bg-slate-8/5 0"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4"> 
          <div className="text-center"> mb 126"> <h2 className="text 4 xlmd:text-5-xlfont-boldtext-whitemb-6"> Our Values </h2> <p className="text xl text gray-300-max-w-3xlmx-auto"> Thesecorevalues guideeverythingwe doandshape ourapproachto client success. </p> 
          </div> 
          </div> 
            <div className="grid md:grid cols 2-lg:grid-cols-4-gap-8"> {values.map ( (value, index )=> (<div y= {index }className="text-center"> 
          </div><div className="w 1 h 1 bg-gradient-to-r from-purple-5-to-cyan-5-rounded-lgflexitems-centerjustify-centermx-automb-6"> <value.iconclassName="w 8 h-8 text-white"/> 
          </div> 
          </div> <h3 className="text xlfont bold text-white mb-4"> {value.title }</h3> <p className="text gray 30"> {value.description }</p> 
          </div> 
          </div> ) )}, 
          
        </div>
      </div>
    </div> 
          </div> 
          </div> </section> {/* Team Section */ }, <section className="py 20"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4"> 
          <div className="text-center"> mb 126"> <h2 className="text 4 xlmd:text-5-xlfont-boldtext-whitemb-6"> Meet Our Team </h2> <p className="text xl text gray-300-max-w-3xlmx-auto"> Ourdiverseteam ofexpertsbrings togetherdecadesof experiencein AI, cloud computing, cybersecurity, andbusinesstransformation. </p> 
          </div> 
          </div> 
            <div className="grid md:grid cols 2-lg:grid-cols-4-gap-8"> {team.map ( (member, index )=> (<div y= {index }className="bg slate 8 rounded-xlp-6-text-centerborderborder-slate-7-hover:border-purple-5-transition-all duration-30000"> 
          </div><div className="w 2 h 2 bg-gradient-to-r from-purple-5-to-cyan-5-rounded-fullmx-automb-4-flexitems-centerjustify-center"> <User Group IconclassName="w 1 h-1 text-white"/> 
          </div> 
          </div> <h3 className="text xlfont boldtext-whitemb-2"> {member.name }</h3> <div className="text purple 40-font-semiboldmb-3"> {member.role }
          </div> <p className="text gray 30-text-sm"> {member.description }</p> 
          </div> 
          </div> ) )}, 
          
        </div>
      </div>
    </div> 
          </div> 
          </div> </section> {/* CTASection */ }, <section className="py 20 bg-gradient-to-rfrom-purple-9/3 0-to-cyan-9/3 0"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4-text-center"> <h2 className="text 4 xlmd:text-5-xlfont-boldtext-whitemb-6"> Readyto Work With Us? </h2> <p className="text xl text gray-300-mb-8-max-w-3xlmx-auto"> Let&apos;sdiscusshow ourteamcan helptransformyour businesswithcutting-edge AI and IT solutions. </p> <div className="flexflex colsm:flex rowgap-4-justify-center"> <button className="bg gradient to-r from-purple-6 to-cyan-6 text-white px-8 py-4 rounded-lg font-semiboldhover:from-purple-7-hover:to-cyan-7 transition-all duration-30000-transformhover:scale-1-flexitems-centerjustify-centergap-2"> Get Started <Arrow Right IconclassName="w 5 h-5"/> </button> <button className="border 2 border white text-white px-8-py-4-rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9-transition-all duration-30000"> View Our Work </button> 
          
        </div>
      </div>
    </div> 
          </div> 
          </div> </section> 
          </div> 
    </>
  )
  }
  )
export default About;; Page
