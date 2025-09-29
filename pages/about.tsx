import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI & Machine Learning',
      experience: '12 years',
      image: '👩‍💻'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Cloud Architect',
      expertise: 'Cloud Infrastructure',
      experience: '10 years',
      image: '👨‍💼'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Data Science',
      expertise: 'Data Analytics & AI',
      experience: '15 years',
      image: '👩‍🔬'
    },
    {
      name: 'James Park',
      role: 'Security Director',
      expertise: 'Cybersecurity',
      experience: '14 years',
      image: '👨‍🔒'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>About Us - Zion Tech Solutions | Leading Technology Company</title>
        <meta name="description" content="Learn about Zion Tech Solutions, a leading technology company specializing in AI development, cloud computing, cybersecurity, and innovative digital solutions." />
        <meta name="keywords" content="about us, technology company, AI experts, cloud specialists, cybersecurity professionals, team" />
      </Head>
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Zion Tech Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses 
              through innovative digital solutions and cutting-edge technology expertise.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in the digital landscape.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe technology should be accessible, reliable, and transformative. 
                  Our mission is to bridge the gap between complex technology and practical business needs.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  To be the leading technology partner for businesses seeking to leverage 
                  artificial intelligence, cloud computing, and emerging technologies for sustainable growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We envision a future where every business can harness the power of technology 
                  to create meaningful impact and drive positive change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our diverse team of technology experts brings together decades of experience 
                across various domains to deliver exceptional solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-2">{member.expertise}</p>
                  <p className="text-sm text-gray-500">{member.experience} experience</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and shape how we work with our clients and each other.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We constantly explore new technologies and methodologies to deliver cutting-edge solutions.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
                <p className="text-gray-600">
                  We maintain the highest standards in everything we do, from code quality to customer service.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We work closely with our clients as partners, ensuring solutions meet their unique needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;