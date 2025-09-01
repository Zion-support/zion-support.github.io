import { Link  } from 'react-router-dom';
export default function Page() {
,
    {
      number: '99%',
      label: 'Client Satisfaction',
      description: 'Consistent high-quality delivery',
    },
  ];

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { ContactSection } from "@/components/ContactSection";
import Link from "next/link";

  const teamMembers = [{
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15 + years in technology innovation and business transformation.',
      expertise: [
        'AI Strategy',
        'Digital Transformation',
        'Business Innovation',
      ],
      image: '/images / team / kleber - santos.jpg',
    },
    {
      name: 'Dr.Sarah Chen',
      role: 'CTO & AI Research Lead',
      bio: 'PhD in Computer Science with expertise in machine learning and artificial intelligence.',
      expertise: ['Machine Learning', 'AI Research', 'Technical Architecture'],
      image: '/images / team / sarah-chen.jpg',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cloud & DevOps',
      bio: 'Cloud infrastructure expert with certifications in AWS, Azure, and Google Cloud.',
      expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure'],
      image: '/images / team / marcus - rodriguez.jpg',
    },
    {
      name: 'Dr.Emily Watson',
      role: 'Cybersecurity Director',
      bio: 'Former government cybersecurity specialist with expertise in threat intelligence.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management'],
      image: '/images / team / emily - watson.jpg',
    },
  ];

  const milestones = [{
      year: '2018',
      title: 'Company Founded',
      description:
        'Zion Tech Group established with a vision to democratize AI technology.',
    },
    {
      year: '2020',
      title: 'AI Breakthrough',
      description:
        'Developed first autonomous AI research assistant for enterprise clients.',
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description:
        'Expanded services to 25 + countries with localized solutions.',
    },
    {
      year: '2024',
      title: 'Quantum Leap',
      description:
        'Launched quantum computing services and AI - powered solutions.',
    },
    {
      year: '2025',
      title: 'Future Forward',
      description:
        'Leading the next generation of AI and technology innovation.',
    },
  ];

  const technologies = [{
      name: 'Artificial Intelligence',
      icon: Brain,
      color: 'from - purple - 500 to - pink - 500',
    },
    {
      name: 'Quantum Computing',
      icon: Cpu,
      color: 'from - blue - 500 to - cyan - 500',
    },
    {
      name: 'Cloud Infrastructure',
      icon: Cloud,
      color: 'from - green - 500 to - emerald - 500',
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from - red - 500 to - orange - 500',
    },
    {
      name: 'Blockchain & Web3',
      icon: Lock,
      color: 'from - indigo - 500 to - purple - 500',
    },
    {
      name: 'IoT & Edge Computing',
      icon: Zap,
      color: 'from - yellow-500 to - orange - 500',
    },
  ];

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center content-section">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-zion-slate-light text-lg mb-6">
                At Zion, we're on a mission to democratize access to cutting-edge AI and technology solutions. 
                We believe that innovation thrives when barriers are removed and connections are made.
              </p>
              <p className="text-zion-slate-light text-lg mb-6">
                Our platform brings together talented AI specialists, innovative companies, and the latest 
                technological solutions in one seamless ecosystem.
              </p>
              <p className="text-zion-slate-light text-lg">
                By connecting talent with opportunity and innovation with implementation, we're creating 
                a global community where the future of technology is being built today.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Team collaboration"
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse content-section">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-zion-slate-light text-lg mb-6">
                We envision a world where AI and technology are accessible to all, regardless of geographical 
                or financial constraints. A world where the best minds can collaborate to solve the most 
                challenging problems.
              </p>
              <p className="text-zion-slate-light text-lg mb-6">
                Zion is building that world by creating a transparent, ethical, and inclusive platform 
                that puts people at the center of technological advancement.
              </p>
              <p className="text-zion-slate-light text-lg">
                Our goal is to become the premier destination for AI and tech innovation, fostering 
                a community that shapes the future of how we live, work, and interact with technology.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden lg:order-first relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Tech innovation"
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="text-center content-section">
            <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-zion-slate-light">
                  We embrace cutting-edge technologies and creative thinking to push the boundaries of what's possible.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Community</h3>
                <p className="text-zion-slate-light">
                  We believe in the power of collaboration and fostering an inclusive ecosystem where everyone can thrive.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Trust</h3>
              <p className="text-zion-slate-light">
                  We maintain the highest standards of integrity, transparency, and ethical practices in everything we do.
                </p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Company Timeline</h2>
            <ol className="relative border-l border-zion-blue-light pl-6 max-w-3xl mx-auto">
              {timeline.map((event) => (
                <li key={event.year} className="mb-10 ml-4">
                  <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-zion-cyan" />
                  <time className="font-semibold text-white">{event.year}</time>
                  <p className="text-zion-slate-light mt-2">{event.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="content-section text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center space-y-3">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <p className="text-white font-bold">{member.name}</p>
                  <p className="text-zion-slate-light">{member.role}</p>
                  <p className="text-zion-slate-light text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-section text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Press Kit</h2>
            <p className="text-zion-slate-light mb-4">Download our logos, color palette and press release templates.</p>
            <a
              href="/toolkit_assets/media_kit.zip"
              download
              className="text-zion-cyan underline"
            >
              <div className="text-3xl md:text-4xl font - bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-cyan - 400 font - semibold mb-1">
                {stat.label}
              </div>
              <div className="text-gray - 300 text-sm">{stat.description}</div>
            </motion.div>) ) }
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid - cols - 2 gap-12 mb-20"
        >
          <div className="bg-white / 10 backdrop - blur - lg rounded-2xl p - 8 border border-white / 20">
            <div className="w-16 h-16 bg-gradient - to - r from - cyan - 500 to - blue - 500 rounded-full flex items - center justify - center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font - bold text-white mb-4">Our Mission</h2>
            <p className="text-gray - 300 text-lg leading -relaxed">
              To democratize advanced technology and empower organizations with
              AI - powered solutions that drive innovation, efficiency, and
              competitive advantage in the digital age.</p>
          </div>

          <div className="bg-white / 10 backdrop - blur - lg rounded-2xl p - 8 border border-white / 20">
            <div className="w-16 h-16 bg-gradient - to - r from - blue - 500 to - purple - 500 rounded-full flex items - center justify - center mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font - bold text-white mb-4">Our Vision</h2>
            <p className="text-gray - 300 text-lg leading -relaxed">
              To be the global leader in AI - powered technology solutions,
              shaping the future of business through innovation, sustainability,
              and human - centric design.</p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font - bold text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap-6">
            {values.map((value, index) => (<motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient - to - r ${value.color} rounded-full flex items - center justify - center mx - auto mb-4`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font - bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray - 300 text-sm leading -relaxed">
                  {value.description}
                </p>
              </motion.div>) ) }
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font - bold text-white text-center mb-12">
            Our Technology Expertise
          </h2>
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap-6">
            {technologies.map((tech, index) => (<motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20 text-center hover:bg-white / 20 transition - all duration -300"
              >
                <div
                  className={`w-16 h-16 bg-gradient - to - r ${tech.color} rounded-full flex items - center justify - center mx - auto mb-4`}
                >
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font - bold text-white">{tech.name}</h3>
              </motion.div>) ) }
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <h2 className="text-4xl font - bold text-white text-center mb-12">
            Meet Our Leadership Team
          </h2>
          <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap-6">
            {teamMembers.map((member, index) => (<motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20 text-center"
              >
                <div className="w-24 h-24 bg-gradient - to - r from - cyan - 500 to - blue - 500 rounded-full flex items - center justify - center mx - auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font - bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-cyan - 400 font - semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray - 300 text-sm mb-4">{member.bio}</p>
                <div className="space - y-1">
                  {member.expertise.map((skill, skillIndex) => (<div
                      key={skillIndex}
                      className="text-xs text-gray - 400 bg-white / 5 rounded px-2 py-1"
                    >
                      {skill}
                    </div>) ) }
                </div>
              </motion.div>) ) }
          </div>
        </motion.div>

        {/* Company Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font - bold text-white text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left - 1/2 transform - translate - x-px h-full w-0.5 bg-gradient - to - b from - cyan - 500 to - purple -500"></div>
            <div className="space - y-8">
              {milestones.map((milestone, index) => (<motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className={`flex items - center ${index % 2 === 0 ? 'flex - row' : 'flex - row-reverse'}`}
                >
                  <div className="w-1/2 flex justify -center">
                    <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20 max - w-sm">
                      <div className="text-2xl font - bold text-cyan - 400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font - bold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray - 300 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient - to - r from - cyan - 500 to - purple - 500 rounded-full border-4 border-slate -900"></div>
                  <div className="w-1/2"></div>
                </motion.div>) ) }
            </div>
          </div>
        </motion.div>

        <div className="content-section text-center">
          <p className="text-zion-slate-light text-lg">
            Ready to work with us? Explore our{' '}
            <Link href="/services"><a className="text-zion-cyan underline">AI & IT services</a></Link>{' '}
            or <Link href="/contact"><a className="text-zion-cyan underline">get in touch</a></Link>. For the latest updates, visit our{' '}
            <Link href="/blog"><a className="text-zion-cyan underline">blog</a></Link>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
