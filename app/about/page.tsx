import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Target, Users, Award, ArrowRight, CheckCircle, Zap, Shield, Brain } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {}
  const features = [;
    {}
      icon: Target
      title: 'Innovation First'
      descriptio,
      n: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers and developing cutting-edge solutions.'
    },
    {}
      icon: Users
      title: 'Client-Centric'
      descriptio,
      n: 'Our success is measured by our clients\' success. We build lasting partnerships and deliver solutions that drive real business value.'
    },
    {}
      icon: Award
      title: 'Excellence'
      descriptio,
      n: 'We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results every time.'
    }
  ]

  const values = [;
    {}
      icon: CheckCircle
      title: 'Innovation'
      descriptio,
      n: 'We constantly push the boundaries of what\'s possible with AI and technology.'
    },
    {}
      icon: Users
      title: 'Collaboration'
      descriptio,
      n: 'We work closely with our clients to understand their unique challenges and goals.'
    },
    {}
      icon: Shield
      title: 'Integrity'
      descriptio,
      n: 'We maintain the highest ethical standards in all our business practices.'
    }
  ]

  const team = [;
    {}
      name: 'Dr. Sarah Johnson'
      role: 'Chief Technology Officer'
      bi,
      o: 'Leading AI researcher with 15+ years of experience in machine learning and neural networks.'
    },
    {}
      name: 'Michael Chen'
      role: 'Head of Engineering'
      bi,
      o: 'Full-stack developer and system architect specializing in scalable cloud solutions.'
    },
    {}
      name: 'Emily Rodriguez'
      role: 'Head of Design'
      bi,
      o: 'UX/UI expert focused on creating intuitive and engaging user experiences.'
    }
  ]

  return ()
    <>
      <Helmet></Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts in AI and technology solutions." /></meta>
      <Navigation /></Navigation>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section>
          <div className="container mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              We are a team of passionate technologists dedicated to transforming businesses through innovative AI and technology solutions.



        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="container mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Drives Us</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our core principles guide everything we do


            <div className="grid grid-cols-1 m,
      d:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => {}
                const Icon = feature.icon;
                return ()
                  <div key={index} className="text-center"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                      <Icon className="w-8 h-8 text-white" /></Icon>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>

                );
              })},
    {/* Values Section */}
        <section className="py-20 px-4 bg-slate-800/50"></section>
          <div className="container mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                The principles that guide our work


            <div className="grid grid-cols-1 m,
      d:grid-cols-3 gap-8"></div>
              {values.map((value, index) => {}
                const Icon = value.icon;
                return ()
                  <div key={index} className="text-center"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                      <Icon className="w-8 h-8 text-white" /></Icon>
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>

                );
              })},
    {/* Mission Section */}
        <section className="py-20 px-4"></section>
          <div className="container mx-auto text-center"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto"></p>
              We focus on creating solutions that make a positive difference in the world and our clients' businesses.



        {/* Team Section */}
        <section className="py-20 px-4 bg-slate-800/50"></section>
          <div className="container mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                The experts behind our innovative solutions


            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-3 gap-8"></div>
              {team.map((member, index) => ()
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>

              ))}




      <Footer /></Footer>
    </>
  );
};

export default AboutPage;