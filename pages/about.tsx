import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in enterprise technology, former CTO at Fortune 500 companies.",
      image: "👩‍💼",
      expertise: ["Strategic Leadership", "Technology Vision", "Business Development"]
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "AI and machine learning expert with PhD in Computer Science from MIT.",
      image: "👨‍💻",
      expertise: ["AI/ML", "Cloud Architecture", "System Design"]
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Award-winning UX designer with focus on enterprise applications.",
      image: "👩‍🎨",
      expertise: ["UX/UI Design", "User Research", "Design Systems"]
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in scalable web applications.",
      image: "👨‍🔧",
      expertise: ["Full-Stack Development", "DevOps", "API Design"]
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new solutions and approaches.",
      icon: "💡"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real business value.",
      icon: "🎯"
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to project delivery.",
      icon: "⭐"
    },
    {
      title: "Collaborative Partnership",
      description: "We work closely with our clients as true partners, not just vendors.",
      icon: "🤝"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>About Us - Zion Tech Solutions</title>
        <meta name="description" content="Learn about Zion Tech Solutions - our mission, team, values, and commitment to delivering cutting-edge technology solutions for modern businesses." />
        <meta name="keywords" content="about zion tech, company story, technology team, our mission, company values" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            About Zion Tech Solutions
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            We are a team of passionate technologists dedicated to transforming businesses 
            through innovative technology solutions. Our mission is to help companies 
            embrace digital transformation and achieve their full potential.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2019, Zion Tech Solutions began with a simple vision: to bridge the gap 
                  between cutting-edge technology and real-world business needs. Our founders, having 
                  experienced the challenges of digital transformation firsthand, set out to create 
                  a company that truly understands both the technical and business sides of technology.
                </p>
                <p>
                  Today, we've grown into a trusted partner for businesses of all sizes, from startups 
                  to Fortune 500 companies. Our team of experts brings together decades of experience 
                  in AI, cloud computing, cybersecurity, and software development.
                </p>
                <p>
                  What sets us apart is our commitment to understanding your unique challenges and 
                  crafting solutions that not only meet your current needs but also scale with your 
                  future growth.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading technology partner that businesses trust to navigate 
                their digital transformation journey and achieve sustainable success.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-300 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mr-1 mb-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Zion Tech Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Delivery</h3>
                <p className="text-gray-300">We deliver high-quality solutions quickly using agile methodologies and proven frameworks.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Our team consists of industry experts with deep knowledge in cutting-edge technologies.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and maintenance to ensure your systems run smoothly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get in Touch
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;