import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Users, Target, Eye, Heart, Award, Globe, Zap, Shield } from 'lucide-react';

const About: NextPage = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to ensure their success is our success."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical business practices."
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "Founder & CEO",
      description: "Technology visionary with over 15 years of experience in software development and business strategy.",
      expertise: ["AI/ML", "Cloud Architecture", "Business Strategy"]
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Expert in emerging technologies with a passion for scalable solutions and innovation.",
      expertise: ["DevOps", "Cybersecurity", "System Architecture"]
    },
    {
      name: "Michael Chen",
      role: "Head of AI",
      description: "Machine learning specialist focused on practical AI applications for business transformation.",
      expertise: ["Machine Learning", "Data Science", "AI Ethics"]
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries"
    },
    {
      number: "50+",
      label: "Happy Clients",
      description: "Long-term partnerships with satisfied customers"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and maintenance"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and service delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - our mission, values, team, and commitment to delivering cutting-edge technology solutions." />
        <meta name="keywords" content="about Zion Tech Group, technology company, AI solutions, cloud services, cybersecurity" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are a leading technology solutions provider dedicated to transforming businesses 
            through innovative AI, cloud, and cybersecurity solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <p className="text-gray-600">
                We believe that technology should be an enabler, not a barrier. Our mission is to 
                make advanced technology accessible and practical for businesses of all sizes.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To be the trusted technology partner for businesses worldwide, known for innovation, 
                reliability, and exceptional client success.
              </p>
              <p className="text-gray-600">
                We envision a future where every business can leverage the power of AI, cloud, and 
                cybersecurity to achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our relationships with clients, 
              partners, and team members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts who drive our innovation and ensure your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</div>
                <div className="text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help transform your business and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-block">
                Get Started Today
              </span>
            </Link>
            <Link href="/services">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-block">
                Explore Our Services
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Zion Tech Group, we're on a mission to democratize cutting-edge technology 
                  and make AI, cloud computing, and cybersecurity accessible to businesses of all sizes.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We believe that every organization deserves access to enterprise-grade technology 
                  solutions that can transform their operations, enhance security, and drive growth.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Outcome-Driven</h3>
                    <p className="text-gray-600">We measure success by your business results</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-zion-blue to-zion-purple rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Zion Tech Group?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <span>Real, battle-tested implementations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <span>Transparent pricing and fast onboarding</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <span>Enterprise-grade security and compliance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <span>ROI-focused delivery and measurable outcomes</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape how we deliver value to our clients.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Areas of Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in cutting-edge technologies that drive business transformation and innovation.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-zion-slate-light mb-8"
            >
              Let's discuss how our AI, cloud, and cybersecurity solutions can drive your success.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="/contact" 
                className="px-8 py-3 bg-white text-zion-blue-dark rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get Started Today
              </a>
              <a 
                href="/services" 
                className="px-8 py-3 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                Explore Our Services
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}