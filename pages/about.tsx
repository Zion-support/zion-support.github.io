import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  const companyStats = [
    { value: '500+', label: 'Revolutionary Services', description: 'Cutting-edge technology solutions' },
    { value: '99.99%', label: 'Uptime Guarantee', description: 'Reliable infrastructure performance' },
    { value: '30+', label: 'Day Free Trials', description: 'Risk-free evaluation period' },
    { value: '24/7', label: 'AI Support', description: 'Round-the-clock assistance' },
    { value: '$100B+', label: 'Combined Market Value', description: 'Industry impact and reach' },
    { value: '1200%+', label: 'Average ROI', description: 'Proven business value' }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI, quantum computing, and emerging technologies.',
      icon: '🚀'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our performance by the value we deliver to your business.',
      icon: '🎯'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      icon: '⭐'
    },
    {
      title: 'Transparency',
      description: 'Clear communication, honest pricing, and open collaboration throughout our partnership.',
      icon: '🔍'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security and compliance built into every solution we deliver.',
      icon: '🔒'
    },
    {
      title: 'Sustainability',
      description: 'We build solutions that are not only powerful but also environmentally conscious.',
      icon: '🌱'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      bio: 'Visionary leader with expertise in AI, quantum computing, and emerging technologies.',
      expertise: ['AI Strategy', 'Quantum Computing', 'Technology Innovation']
    },
    {
      name: 'AI Engineering Team',
      role: 'AI & Machine Learning',
      bio: 'Expert engineers specializing in cutting-edge AI algorithms and neural network architectures.',
      expertise: ['Deep Learning', 'NLP', 'Computer Vision', 'AI Ethics']
    },
    {
      name: 'Quantum Team',
      role: 'Quantum Computing',
      bio: 'Pioneers in quantum algorithms and quantum-safe cybersecurity solutions.',
      expertise: ['Quantum Algorithms', 'Quantum Security', 'Quantum Machine Learning']
    },
    {
      name: 'Cloud Team',
      role: 'Cloud Infrastructure',
      bio: 'Architects of scalable, secure, and high-performance cloud solutions.',
      expertise: ['Cloud Architecture', 'DevOps', 'Security', 'Performance']
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Zion Tech Group was founded with a vision to democratize cutting-edge technology.'
    },
    {
      year: '2021',
      title: 'AI Breakthroughs',
      description: 'Developed revolutionary AI algorithms and launched first AI-powered solutions.'
    },
    {
      year: '2022',
      title: 'Quantum Innovation',
      description: 'Pioneered quantum computing applications and quantum-safe security protocols.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded services globally and established partnerships with leading enterprises.'
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Recognized as a leader in AI, quantum computing, and cybersecurity solutions.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to push boundaries with next-generation technology innovations.'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to democratize cutting-edge technology through AI, quantum computing, and innovative solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              We're on a mission to democratize cutting-edge technology, making AI, quantum computing, and advanced cybersecurity accessible to businesses of all sizes.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To accelerate the adoption of transformative technologies by providing enterprise-grade AI, quantum computing, and cybersecurity solutions that drive measurable business outcomes.
                </p>
                <p className="text-lg text-gray-300">
                  We believe that every business, regardless of size, should have access to the same cutting-edge technology that powers the world's most innovative companies.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To be the leading force in democratizing advanced technology, creating a future where AI, quantum computing, and cybersecurity are accessible, affordable, and transformative for all.
                </p>
                <p className="text-lg text-gray-300">
                  We envision a world where technology barriers are eliminated, and innovation becomes the driving force behind every successful business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">By the Numbers</h2>
              <p className="text-xl text-gray-300">
                Our impact in numbers
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the brilliant minds behind our innovative solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-blue-400 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-sm text-gray-400 bg-white bg-opacity-5 rounded px-2 py-1">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-gray-300">
                Key milestones in our company's evolution
              </p>
            </div>
            
            <div className="space-y-8">
              {timeline.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Ready to transform your business with cutting-edge technology? Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/services" 
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
