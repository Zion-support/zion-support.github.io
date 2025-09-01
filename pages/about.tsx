import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';

const AboutPage: NextPage = () => {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.",
      icon: "🚀"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We measure our performance by the tangible business outcomes we deliver for our clients.",
      icon: "🎯"
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards of quality in every project, ensuring robust, scalable, and maintainable solutions.",
      icon: "⭐"
    },
    {
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, fostering open communication and collaboration throughout the project lifecycle.",
      icon: "🤝"
    }
  ];

  const expertise = [
    {
      category: "Artificial Intelligence & Machine Learning",
      skills: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Model Development"]
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS/Azure/GCP", "Microservices Architecture", "DevOps & CI/CD", "Container Orchestration", "Serverless Computing"]
    },
    {
      category: "Web & Mobile Development",
      skills: ["React/Next.js", "Node.js/Python", "Mobile App Development", "Progressive Web Apps", "API Development"]
    },
    {
      category: "Data & Analytics",
      skills: ["Big Data Processing", "Data Warehousing", "Business Intelligence", "Real-time Analytics", "Data Pipeline Engineering"]
    },
    {
      category: "Security & Compliance",
      skills: ["Cybersecurity", "Penetration Testing", "Compliance Management", "Identity & Access Management", "Security Auditing"]
    },
    {
      category: "Emerging Technologies",
      skills: ["Blockchain Development", "IoT Platforms", "AR/VR Applications", "Edge Computing", "Quantum Computing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>About Us - Zion Tech Group | Technology Innovation Leaders</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology solutions provider with expertise in AI, cloud computing, and digital transformation. Discover our mission, values, and commitment to client success." />
        <meta name="keywords" content="about Zion Tech Group, technology company, AI experts, cloud specialists, digital transformation consultants" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to helping businesses 
            harness the power of innovation to achieve digital transformation and competitive advantage.
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to democratize advanced technology solutions, Zion Tech Group 
                has grown from a small startup to a trusted technology partner for businesses across industries.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that every organization, regardless of size, deserves access to cutting-edge 
                technology solutions that can transform their operations and drive growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced engineers, designers, and consultants work collaboratively 
                to deliver innovative solutions that solve real business problems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
              <p className="text-lg opacity-90">
                Transforming businesses through innovative technology solutions
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with innovative technology solutions that drive digital transformation, 
              improve operational efficiency, and create sustainable competitive advantages in the digital economy.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading technology partner for businesses seeking to leverage AI, cloud computing, 
              and emerging technologies to achieve breakthrough innovation and market leadership.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">
            Our Impact in Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.category}</h3>
                <ul className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600 flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Our diverse team of technology experts brings together decades of combined experience 
            in software development, AI research, cloud architecture, and business consulting.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Engineering Team</h3>
              <p className="text-gray-600">Full-stack developers, AI engineers, and DevOps specialists</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Team</h3>
              <p className="text-gray-600">UX/UI designers and product strategists</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consulting Team</h3>
              <p className="text-gray-600">Business analysts and technology consultants</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Let's discuss how our expertise can help transform your business
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">📱 Mobile</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">✉️ Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📍 Address</h3>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
=======
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, ShieldCheck, Rocket, Sparkles, Globe, Cpu, Brain } from 'lucide-react';

const About: NextPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in technology.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building long-term relationships based on reliability and transparency.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients to achieve shared success.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering the highest quality solutions that exceed expectations.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize business technology.'
    },
    {
      year: '2016',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level AI solution.'
    },
    {
      year: '2018',
      title: 'Cloud Division Launch',
      description: 'Expanded into cloud architecture and infrastructure services.'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Opened offices in multiple countries and served clients worldwide.'
    },
    {
      year: '2022',
      title: 'Innovation Hub',
      description: 'Launched our research and development center for emerging technologies.'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a top technology solutions provider in the industry.'
    }
  ];

  return (
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, values, and journey in transforming businesses through innovative technology solutions."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            About
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We are a team of passionate technologists dedicated to transforming businesses 
            through innovative technology solutions and cutting-edge digital experiences.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the leading technology partner for businesses worldwide, known for 
                delivering transformative solutions that shape the future of digital business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
                <div className="text-center">
                  <Target className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">What We Believe</h3>
                  <p className="text-gray-300">
                    Technology should be an enabler, not a barrier. We believe in creating 
                    solutions that are intuitive, powerful, and transformative.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
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
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, here&apos;s how we&apos;ve grown and evolved.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black z-10" />
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              business, and innovation to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Chief Executive Officer',
                description: 'Visionary leader with 15+ years in technology leadership.'
              },
              {
                name: 'Michael Chen',
                role: 'Chief Technology Officer',
                description: 'Expert in emerging technologies and system architecture.'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Head of Innovation',
                description: 'Driving creative solutions and cutting-edge developments.'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500/30 transition-colors duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-blue-400 font-medium mb-3">{member.role}</div>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
>>>>>>> 3c1dda747d3aa200ea8a4e49d78b84af83a4d328
