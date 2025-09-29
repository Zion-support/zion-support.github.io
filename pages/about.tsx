import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in technology and business strategy. Passionate about driving digital transformation.",
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Expert in cloud architecture and AI development. Led technical teams at Fortune 500 companies.",
      image: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Creative director specializing in user experience and interface design. Award-winning designer with 10+ years experience.",
      image: "👩‍🎨"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Full-stack developer and DevOps specialist. Expert in modern web technologies and cloud platforms.",
      image: "👨‍🔧"
    },
    {
      name: "Lisa Thompson",
      role: "Head of Security",
      bio: "Cybersecurity expert with certifications in ethical hacking and compliance. Protects businesses from digital threats.",
      image: "👩‍🔒"
    },
    {
      name: "Alex Martinez",
      role: "Data Scientist",
      bio: "AI and machine learning specialist. Transforms data into actionable insights for business growth.",
      image: "👨‍🔬"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service and project delivery.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their success is our success through transparent communication.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices, building trust with every interaction.",
      icon: "🛡️"
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years of Experience" },
    { number: "15+", label: "Technology Certifications" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>About Us - Zion Tech Solutions</title>
        <meta name="description" content="Learn about Zion Tech Solutions - our mission, team, values, and commitment to delivering exceptional technology solutions." />
      </Head>
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Zion Tech Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            We are a team of passionate technologists dedicated to transforming businesses through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Founded in 2019, Zion Tech Solutions began with a simple mission: to bridge the gap between cutting-edge technology and business success. 
                  Our founders, having witnessed the challenges businesses face in digital transformation, set out to create a company that truly understands 
                  both the technical and business sides of technology implementation.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a comprehensive technology solutions provider, serving clients 
                  from startups to Fortune 500 companies. We've maintained our core values of innovation, excellence, and client success throughout our journey.
                </p>
                <p>
                  Today, we're proud to be at the forefront of technology trends, helping businesses leverage AI, cloud computing, and modern development 
                  practices to achieve their goals and stay competitive in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading technology partner that businesses trust to transform their digital presence and achieve sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl max-w-3xl mx-auto">The talented individuals who make our success possible</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="text-6xl mb-6">{member.image}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-300 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl max-w-3xl mx-auto">Numbers that speak to our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{achievement.number}</div>
                <div className="text-gray-300 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-4xl font-bold text-white mb-8">Why Choose Zion Tech?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-green-400 text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Proven Expertise</h3>
                    <p className="text-gray-300">Our team brings years of experience from top technology companies and successful projects.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-300">We stay ahead of technology trends and use the latest tools and frameworks.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Client-Focused Approach</h3>
                    <p className="text-gray-300">We prioritize your success and work as an extension of your team.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Ongoing Support</h3>
                    <p className="text-gray-300">We provide continuous support and maintenance to ensure your success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Work With Us?</h3>
              <p className="text-xl mb-8 leading-relaxed">
                Let's discuss how our team can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 text-center">
                  Get Started Today
                </Link>
                <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;