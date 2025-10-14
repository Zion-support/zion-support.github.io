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
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
    {
      icon: Cpu Chip Icon
      title: 'Innovation First'
      description: 'We stay at the forefront of technology, constantly exploring new A I and I T solutions to solve complex business challenges.'
    }
    {
      icon: Shield Check Icon
      title: 'Security & Trust'
      description: 'Your data and systems are protected with enterprise-grade security measures and compliance standards.'
    }
    {
      icon: User Group Icon
      title: 'Client-Centric'
      description: 'We prioritize our clients\', success, working closely with them to understand their unique needs and deliver tailored solutions.'
    }
    {
      icon: Rocket Launch Icon
      title: 'Results-Driven'
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

      <div className="min-h-screen bg-slate-90 0text-white">
        
        {/* Hero Section */}
  )
        <section>
        
          <div className="containermx-autopx-4text-center">
        
            <h1>
          
              About Zion Tech Group
            </h1>
            <p>
          
              We are a team of passionate A I and I T experts dedicated to transforming businesses 
              through innovative technology solutions.
            </p>
            </div>
        </section>

        {/* Mission Section */}
  )
        <section>
        
          <div className="containermx-autopx-4">
        
            <div className="max-w-4xl mx-autotext-center">
        
              <h2>
          
                Our Mission
              </h2>
              <p>
          
                To empower businesses with cutting-edge A I and I T solutions that drive innovation
                efficiency, and growth. We believe technology should be accessible, secure, and 
                transformative for organizations of all sizes.
              </p>
              
              <div className="gridmd:grid-cols-4 gap-8">
        
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    </div><div className="text-4xlfont-boldtext-purple-40 0mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
        </div>
                ))}
  )
                </div>
              </div>
            </div>
        </section>

        {/* Values Section */}
  )
        <section>
        
          <div className="containermx-autopx-4">
        
            <div className="text-center mb-16">
        
              <h2>
          
                Our Values
              </h2>
              <p>
          
                These core values guide everything we do and shape our approach to client success.
              </p>
              </div>
            
            <div className="gridmd:grid-cols-2lg:grid-cols-4 gap-8">
        
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  </div><div className="w-1 6 h-1 6 bg-gradient-to-r from-purple-5 0 0to-cyan-5 0 0rounded-lgflexitems-center justify-centermx-automb-6">
        
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
  )
        <section>
        
          <div className="containermx-autopx-4">
        
            <div className="text-center mb-16">
        
              <h2>
          
                Meet Our Team
              </h2>
              <p>
          
                Our diverse team of experts brings together decades of experience in A I
                cloud computing, cybersecurity, and business transformation.
              </p>
              </div>
            
            <div className="gridmd:grid-cols-2lg:grid-cols-4 gap-8">
        
              {team.map((member, index) => (
                <div key={index} className="bg-slate-8 00 rounded-xlp-6text-centerborderborder-slate-7 00hover:border-purple-5 0 0transition-all duration-300">
                  </div><div className="w-2 4 h-2 4 bg-gradient-to-r from-purple-5 0 0to-cyan-5 0 0rounded-fullmx-auto mb-4flexitems-center justify-center">
        
                    <User Group Icon className="w-1 2h-1 2 text-white" />
                    </div>
                  <h3 className="text-xlfont-boldtext-whitemb-2">{member.name}</h3>
                  <div className="text-purple-40 0font-semiboldmb-3">{member.role}</div>
                  <p className="text-gray-300text-sm">{member.description}</p>
                  </div>
              ))}
  )
              </div>
            </div>
        </section>

        {/* CT A Section */}
  )
        <section>
        
          <div className="containermx-autopx-4text-center">
        
            <h2>
          
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8max-w-3xl mx-auto">
              Let&apos;s discuss how our team can help transform your business with 
              cutting-edge A I and I T solutions.
            </p>
            <div className="flex flex-colsm:flex-rowgap-4 justify-center">
        
              <button className="bg-gradient-to-r from-purple-6 00 to-cyan-6 00 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-7 00 hover:to-cyan-7 00 transition-all duration-300transformhover:scale-1 0 5flexitems-center justify-centergap-2">
                Get Started
                <ArrowRight Icon className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9 0 0transition-all duration-300">
                View Our Work
              </button>
              </div>
            </div>
        </section>
      </div>
    </>
  )
  }
  )
export default About;; Page