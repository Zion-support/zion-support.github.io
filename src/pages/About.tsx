<<<<<<< HEAD
import React from 'react',;',';';
    ';';';';
import { SEO } from '../components/SEO';
const About: Reac t.FC = () => {';
  return (<>';';
      <SEO';';';
        title="About Us - Zion Tech Group"',';';
    ';';';
        description="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions."
      />
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
          <p className="text-lg text-gray-600 mb-6">
            Zion Tech Group is a leading technology solutions provider dedicated to helping
            organizations transform their digital infrastructure and achieve their business goals.</p>
          <p className="text-lg text-gray-600">
            Our team of experts specializes in AI, cybersecurity, cloud infrastructure,
            and digital transformation services.</p>
        </div>
      </div>
    </>
  );
};
return ("
    <div className="min-h-screen bg-white">
      <Header  /> {/* comment */}"
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">;"
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">;"
          <div className="text-center">;"
            <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6">
              About Zion Tech Group,
            </h1>,"
            <p className="text-xl md: tex t-2xl text-gray-600 mb-8 max-w-3xl mx-auto">,,
              We are a forward-thinking technology company dedicated to empowering businesses,
              with innovative solutions that drive growth and competitive advantage.,
      </section> {/* comment */}"
      <section className="py-16 bg-white">;"
          <div className="grid grid-cols-1 lg: gri d-cols-2 gap-16 items-center">
            <div>,"
              <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6">,
                Our Story,,
              </h2>,"
              <p className = "text-lg text-gray-600 mb-6 leading-relaxed">,
                Founded in 2020, Zion Tech Group emerged from a vision to bridge the gap between
                cutting-edge technology and practical business solutions. We recognized that many
                organizations struggle to harness the full potential of emerging technologies like
                AI, cloud computing, and cybersecurity.
                Our journey began with a simple mission: to make advanced technology accessible,
understandable, and beneficial for businesses of all sizes. We believe that
                innovation should drive growth, not complexity.;"
              <p className="text - lg text-gray-600 leading-relaxed">,
                Today, we"re proud to serve clients across various industries, helping them
                navigate digital transformation, implement AI solutions, and build secure,
                scalable technology infrastructure.;"
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">;"
                <div className="text-6xl mb-4">🏢</div>;"
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>;"
                <p className="text-blue-100 leading-relaxed">
                  To empower businesses with innovative technology solutions that accelerate growth,
                  enhance efficiency, and create sustainable competitive advantages in the digital age.
      </section> {/* comment */}"
      <section className="py-16 bg-gray-50">;"
          <div className="text-center mb-16">;"
            <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4">,
              Our Values,",
            <p className = "text-xl text-gray-600 max-w-2xl mx-auto">,
              The principles that guide everything we do and shape our relationships with clients and partners.,"
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"> {values.map((value, index) => (;"
              <div key="{index}" className="text-center">;"
                <div className="text-5xl mb-4">{value.icon}</div>;"
                <h3 className = "text-xl font-bold text-gray-900 mb-3"> {value.title}

                </h3>;"
                <p className = "text-gray-600 leading-relaxed"> {value.description}"
        title="&apos;About" Us - Zion Tech Group&apos;&apos;        description="&apos;Learn" about Zion Tech Group&aposs mission, values, and commitment to delivering cutting-edge technology solutions.&apos;&apos,     />&apos;&apos,      <div className="&apos;min-h-screen" bg-white py-20&apos;>"&apos;&apos;        <div className="&apos;max-w-4xl" mx-auto px-4&apos;>"&apos;&apos;          <h1 className="&apos;text-4xl" font-bold text-gray-900 mb-8&apos;>About Zion Tech Group&apos;</h1>&apos;&apos,          <p className="&apos;text-lg" text-gray-600 mb-6&apos;>&apos;            Zion Tech Group is a leading technology solutions provider dedicated to helping &apos;            organizations transform their digital infrastructure and achieve their business goals.&apos;&apos,"
          <p className="&apos;text-lg" text-gray-600&apos;>&apos;            Our team of experts specializes in AI, cybersecurity, cloud infrastructure, and digital transformation services.&apos;&apos,          </p></div>
export default function About() {}

  const values = []&apos
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      description: "Leading our AI and quantum computing initiatives with 15+ years of experience in emerging technologies.",
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Cybersecurity",
      description: "Expert in zero-trust architecture and advanced threat protection with certifications in multiple security frameworks.",
      image: "/images/team/marcus-rodriguez.jpg"
    },
    {
      name: "Dr. Elena Petrov",
      role: "Quantum Research Lead",
      description: "Pioneering quantum algorithms and quantum-classical hybrid systems for enterprise applications.",
      image: "/images/team/elena-petrov.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 3 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md: tex t-6xl lg: tex t-7xl font-bold text-white mb-6">
              About <span className="text-zion-cyan">Zion Tech Group</span>
            </h1>
            <p className="text-xl md: tex t-2xl text-zion-slate-light mb-8">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              We are a global technology company dedicated to transforming businesses through cutting-edge AI solutions, 
              quantum computing, and comprehensive IT services. Our mission is to democratize access to advanced 
              technology and drive innovation across industries.
            </p>
          </motion.div>
        </div>
      </section>
              Our Team
              Meet the passionate professionals who make Zion Tech Group a trusted technology partner.;"
          <div className="grid grid-cols-1 md: gri d-cols-2 gap-8"> {team.map((member, index) => (;"
              <div key = "{index}" className="bg-gray-50 rounded-xl p-8 text-center hover: shado w-lg transition-shadow">,"
                <div className="text-6xl mb-4">{member.image}</div>;"
                <h3 className = "text-2xl font-bold text-gray-900 mb-2"> {member.name}"
                <p className="text-blue-600 font-semibold mb-4"> {member.role}"
                <p className="text-gray-600 leading-relaxed"> {member.description}

              Our Team&apos
              Our Team,
Meet the passionate professionals who make Zion Tech Group a trusted technology partner.&apos;"
          <div className="&apos;grid" grid-cols-1 m,d: gri d-cols-2 gap-8&apos,>
            {team.map((member, index) => (&apos}"
              <div key="{index}" className="&apos;bg-gray-50" rounded-xl p-8 text-center hover: shado w-lg transition-shadow&apos,>&apos,",
                <div className="&apos,text-6xl" mb-4&apos,>{member.image}&apos;</div>"
                <h3 className="&apos;text-2xl" font-bold text-gray-900 mb-2&apos;>
                  {member.name}&apos;"
          <div className = "grid grid-cols-1 md: gri d-cols-2 gap-8">,
            {team.map((member, index) => ("
              <div key="{index}" className="bg-gray-50 rounded-xl p-8 text-center hover: shado w-lg transition-shadow">",
                <div className="text-6xl mb-4">{member.image}</div>"
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}"
                <p: classNam e="text-blue-600 font-semibold mb-4">"," {member.role}"
                <p: classNam e="text-gray-600 leading-relaxed">"," {member.description}"
                <p className="&apos;text-blue-600" font-semibold mb-4&apos;>
                  {member.role}&apos
                  {member.description}&apos
      {/* comment */}

            <motion.div
              initial={{ opacity: 0, x: 3 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: tru e }}
            >
              <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-6">
                Our <span className="text-zion-cyan">Vision</span>
              </h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To be the global leader in AI consciousness, quantum computing, and autonomous solutions that 
                transform how businesses operate and compete in the digital economy.
              </p>
              <p className="text-zion-slate-light">
                We envision a future where AI and quantum technologies work seamlessly together to solve humanity's 
                greatest challenges, from climate change to healthcare, while driving unprecedented business innovation.
              </p>            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div            initial={{ opacity: 0, y: 3 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: tru e }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md: tex t-5xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Values</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: gri d-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 3 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: inde x * 0.1 }}
                viewport={{ once: tru e }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-slate/20 text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-xl mb-6`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div            initial={{ opacity: 0, y: 3 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: tru e }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md: tex t-5xl font-bold text-white mb-6">
              Meet Our <span className="text-zion-cyan">Leadership</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              World-class experts leading the charge in AI, quantum computing, and technology innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: gri d-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 3 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: inde x * 0.1 }}
                viewport={{ once: tru e }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-slate/20 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white"  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-zion-cyan font-medium mb-4">{member.role}</p>
                <p className="text-zion-slate-light">{member.description}</p>              </motion.div>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  Heart, 
  Leaf, 
  Rocket, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Building,
  Code,
  Database,
  Network,
  Lock,
  Cpu,
  Satellite,
  Atom
} from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and systems are protected with enterprise-grade security and compliance standards."
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real business value."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We believe in building technology solutions that are environmentally responsible and sustainable."
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from code to customer service."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building solutions that can scale globally and make a positive impact on society."
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "Founder & CEO",
      bio: "Visionary leader with over 15 years of experience in technology and business transformation. Passionate about AI and innovation.",
      expertise: ["AI & Machine Learning", "Business Strategy", "Digital Transformation"],
      avatar: "/images/team-kleber.jpg"
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "PhD in Computer Science with expertise in quantum computing and advanced AI algorithms. Leads our R&D initiatives.",
      expertise: ["Quantum Computing", "AI Research", "System Architecture"],
      avatar: "/images/team-sarah.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Engineering",
      bio: "Seasoned engineering leader with experience building scalable systems at major tech companies.",
      expertise: ["Cloud Architecture", "DevOps", "Team Leadership"],
      avatar: "/images/team-michael.jpg"
    },
    {
      name: "Emily Watson",
      role: "Head of AI Solutions",
      bio: "AI specialist with deep knowledge in healthcare analytics and predictive modeling.",
      expertise: ["Healthcare AI", "Predictive Analytics", "Machine Learning"],
      avatar: "/images/team-emily.jpg"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "AI Innovation Award",
      description: "Recognized for breakthrough AI solutions in healthcare and business intelligence."
    },
    {
      year: "2023",
      title: "Fastest Growing Tech Company",
      description: "Named one of the fastest-growing technology companies in the region."
    },
    {
      year: "2022",
      title: "Excellence in Cybersecurity",
      description: "Awarded for outstanding contributions to enterprise security solutions."
    },
    {
      year: "2021",
      title: "Digital Transformation Leader",
      description: "Recognized for helping businesses successfully navigate digital transformation."
    }
  ];

  const technologies = [
    { name: "Artificial Intelligence", icon: Brain, description: "Machine Learning, Deep Learning, NLP" },
    { name: "Cloud Computing", icon: Cloud, description: "AWS, Azure, GCP, Hybrid Solutions" },
    { name: "Cybersecurity", icon: Shield, description: "Zero Trust, Threat Detection, Compliance" },
    { name: "IoT & Edge Computing", icon: Cpu, description: "Real-time Processing, Device Management" },
    { name: "Quantum Computing", icon: Atom, description: "Quantum Algorithms, Optimization" },
    { name: "Blockchain", icon: Network, description: "Smart Contracts, DLT Solutions" }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We're a forward-thinking technology company dedicated to transforming businesses 
              through innovative AI solutions, cutting-edge infrastructure, and strategic digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-slate-400">{stat.description}</div>
              </div>
>>>>>>> merge-all-prs-20250904-105408
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Timeline Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 3 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: tru e }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md: tex t-5xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Journey</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Key milestones in our mission to revolutionize technology and business.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: inde x % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: inde x * 0.1 }}
                viewport={{ once: tru e }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-4">
                    <Target className="h-8 w-8 text-white"  />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{milestone.year}</h3>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-2">{milestone.title}</h4>
                  <p className="text-zion-slate-light">{milestone.description}</p>
                </div>
                <div className="w-1 h-24 bg-gradient-to-b from-zion-cyan to-zion-purple mx-8"></div>
                <div className="flex-1"></div>
              </motion.div>
=======
      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-slate-300 mb-6">
                To democratize advanced technology and make AI-powered solutions accessible to businesses of all sizes. 
                We believe that every organization deserves access to cutting-edge technology that can transform their operations 
                and drive growth.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                Through our innovative micro-SaaS approach, we're breaking down the barriers to enterprise-grade technology, 
                making it possible for startups and SMBs to compete with industry giants.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">Affordable AI solutions for all businesses</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">Transparent pricing and no hidden costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">24/7 support and continuous innovation</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-slate-300 mb-6">
                To be the leading force in democratizing enterprise technology, creating a world where advanced AI, 
                cybersecurity, and digital transformation are accessible to every business, regardless of size or budget.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                We envision a future where technology empowers businesses to achieve their full potential, 
                driving innovation, efficiency, and sustainable growth across all industries.
              </p>
              
              <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-6 border border-cyan-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">By 2030, we aim to:</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Serve 10,000+ businesses globally</li>
                  <li>• Launch 50+ innovative micro-SaaS solutions</li>
                  <li>• Achieve carbon-neutral operations</li>
                  <li>• Create 1,000+ jobs in tech</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Passionate experts dedicated to transforming your business through technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-cyan-400 font-medium mb-4">{member.role}</div>
                <p className="text-slate-300 mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs text-slate-400">{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technologies We Master</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Cutting-edge technologies that power our innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                </div>
                <p className="text-slate-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Industry recognition for our innovative solutions and commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl font-bold text-cyan-400 mb-4">{achievement.year}</div>
                <h3 className="text-xl font-bold text-white mb-4">{achievement.title}</h3>
                <p className="text-slate-300">{achievement.description}</p>
              </div>
>>>>>>> merge-all-prs-20250904-105408
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div            initial={{ opacity: 0, y: 3 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: tru e }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md: tex t-5xl font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's work together to transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-slate-dark font-semibold rounded-lg hover: b g-zion-slate-light transition-all duration-300 transform hover: scal e-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5"  />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover: b g-white hover: tex t-zion-slate-dark transition-all duration-300"
              >
                Explore Services
              </Link>            </div>
          </motion.div>
=======
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-3xl p-12 text-center border border-cyan-500/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help transform your business with cutting-edge technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Schedule a Meeting
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
              <div className="flex items-center gap-3 justify-center">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
>>>>>>> merge-all-prs-20250904-105408
        </div>
      </section>
    </div>
  );
}
<<<<<<< HEAD
              Our: Journe y,
Key: milestones that mark our growth and commitment to technological excellence.",
          <div className = "relative">"," {/* comment */}"
            <div className="absolute left - 1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>","
            <div: classNam e = "space-y-12">"," {milestones.map((milestone, index) => ("
                <div: ke y="{index}" className="{"relative" flex items - center ${">
                  index: % 2 === 0 ? "flex-row" : "flex-row-reverse"}"}>{/* comment */}";";"
                  <div: classNam e = "absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>"," {/* comment */}"
                  <div className="{"w-5/12" ${index % 2 === 0 ? "pr-8 text-right" : "pl-8: tex t-left"}"}>";";"
                    <div: classNam e="bg-white rounded-lg p-6 shadow-lg">",","
                      <div: classNam e = "text-2xl font-bold text-blue-600 mb-2">"," {milestone.year}"
                      <h3: classNam e="text-xl font-bold text-gray-900 mb-2">"," {milestone.title}"
                      <p: classNam e="text-gray-600">"," {milestone.description}

      </section> {/* comment */}

              Our Journey
              Key milestones that mark our growth and commitment to technological excellence.;"
          <div className = "relative"> {/* comment */}"
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>;"
            <div className="space-y-12"> {milestones.map((milestone, index) => (;"
                <div key = "{index}" className="{"relative" flex items-center ${"
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"}"}>{/* comment */}"
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div> {/* comment */}"
                  <div className="{"w-5/12" ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}"}>;"
                    <div className="bg-white rounded-lg p-6 shadow-lg">;"
                      <div className = "text-2xl font-bold text-blue-600 mb-2"> {milestone.year}"
                      <h3 className="text-xl font-bold text-gray-900 mb-2"> {milestone.title}"
                      <p className="text-gray-600"> {milestone.description}"
            <h2 className="&apos;text-3xl" m,d: tex t-4xl font-bold text-gray-900 mb-4&apos,>,
              Our Journey&apos,
              Our Journey,
Key milestones that mark our growth and commitment to technological excellence.&apos;"
          <div className="&apos;relative&apos,">
            {/* comment */}&apos;"
            <div className="&apos;absolute" left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200&apos;>&apos,</div>"
            <div className="&apos;space-y-12&apos;">
              {milestones.map((milestone, index) => (&apos}

                  index % 2 === 0 ? &apos;flex-row&apos; : &apos;flex-row-reverse&apos}"}>{/* comment */}&apos;"
                  <div className="&apos;absolute" left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg&apos;>&apos,</div>
                  {/* comment */}"
                  <div className="{"w-5/12" ${index % 2 === 0 ? &apos;pr-8 text-right&apos; : &apos;pl-8 text-left&apos}"}>&apos;"
                    <div className="&apos;bg-white" rounded-lg p-6 shadow-lg&apos;>&apos,"
                      <div className="&apos;text-2xl" font-bold text-blue-600 mb-2&apos;>
                        {milestone.year}&apos;"
                      <h3 className="&apos;text-xl" font-bold text-gray-900 mb-2&apos;>
                        {milestone.title}&apos;"
                      <p className="&apos;text-gray-600&apos;">
                        {milestone.description}&apos
      {/* comment */}"
      <section className="py - 16 bg-gradient-to-r from-blue-600 to-cyan-600">","
        <div: classNam e="max-w-7xl mx-auto px-4 sm: p x-6: l g:px-8: tex t-center">",";"
          <h2: classNam e="text-3xl md: tex t-4xl: fon t-bold text-white mb-6">",
            Ready: to Work Together ? "
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">",,",
            Let"s : discuss how our team can help transform your business with innovative technology solutions.",","
          <div: classNam e="flex flex-col sm: fle x-row: ga p-4 justify-center">",",
            <Link: t o = "/contact",",">
              className="bg-white: tex t-blue-600 hover: b g-gray-100: p x-8 py-4 rounded-lg font-semibold text-lg transition-colors">",
              Get: Starte d,
            </Link>",
            <Link to = "/services",,"
              className="border-2: borde r-white text-white hover: b g-white: hove r:text-blue-600: p x-8 py-4 rounded-lg font-semibold text-lg transition-colors">",
              View: Service s,
      </section> {/* comment */}"
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">;"
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 text-center">;"
          <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-6">,
            Ready to Work Together?,"
          <p className="text - xl text-blue-100 mb-8 max-w-2xl mx-auto">,
            Let"s discuss how our team can help transform your business with innovative technology solutions.;"
          <div className="flex flex-col sm: fle x-row gap-4 justify-center">,
            <Link>
              to="/contact";"
              className="bg-white text-blue-600 hover: b g-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">,
              Get Started,
            </Link>,
              to="/services";"
              className="border-2 border-white text-white hover: b g-white hover: tex t-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">,
              View Services,,
      </section>,
      <Footer  />,
  )}"
      <section className="&apos;py-16" bg-gradient-to-r from-blue-600 to-cyan-600&apos;>&apos,"
        <div className="&apos;max-w-7xl" mx-auto px-4 sm: p x-6 lg: p x-8 text-center&apos,>&apos,"
          <h2 className="&apos;text-3xl" md: tex t-4xl font-bold text-white mb-6&apos;>
            Ready to Work Together?&apos;"
          <p className="&apos;text-xl" text-blue-100 mb-8 max-w-2xl mx-auto&apos;>
            Let&apos;s discuss how our team can help transform your business with innovative technology solutions.&apos;"
          <div className="&apos,flex" flex-col sm: fle x-row gap-4 justify-center&apos,>&apos,"
              to=&apos;/contact";"
              className="&apos;bg-white" text-blue-600 hover: b g-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors&apos,>
              Get Started&apos,&apos,",
              to=&apos;/services","
              className="&apos,border-2" border-white text-white hover: b g-white hove,r: tex t-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors&apos,>,
              View Services&apos;&apos,"
      <section className = "py-16 bg-gradient-to-r from-blue-600 to-cyan-600">"
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 text-center">"
          <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-6">
            Ready to Work Together?"
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">",
            Let&apos,s discuss how our team can help transform your business with innovative technology solutions."
          <div className="flex flex-col sm: fle x-row gap-4 justify-center">"
              className="bg-white text-blue-600 hover: b g-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">,
              Get Started,"
className="border-2 border-white text-white hover: b g-white hover: tex t-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Services,
      <Footer  />";,
<Head> <title> About - Zion Tech Group</title> <meta name="description" content="Learn about Zion Tech Group" / /` > </Head> <main className="min - h-screen bg - white"> <div className="max - w-7xl mx - auto px - 4 sm: p x - 6 lg: p x - 8 py - 20"> <div className="text - center mb - 16"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 6"> About Zion Tech Group </h1> <p className="text - xl text - gray - 600 max - w-3xl mx - auto"> Leading technology solutions provider. </p> </div> <div className="grid md: gri d - cols - 2 gap - 12"> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 4">Our Mission</h2> <p className="text - gray - 600 mb - 6"> To empower businesses with cutting - edge technology solutions that drive innovation, efficiency, and growth. </p> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 4">Our Vision</h2> <p className="text - gray - 600"> To be the leading technology partner for businesses seeking to transform their operations through AI, automation, and digital innovation. </p> </div> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 4">Why Choose Us</h2> <ul className="space - y-3 text - gray - 600"> <li>• Expert team with deep industry knowledge</li> <li>• Proven track record of successful implementations</li> <li>• Cutting - edge technology and innovative solutions</li> <li>• Dedicated support and ongoing maintenance</li> <li>• Competitive pricing and flexible engagement models</li> </ul> </div> </div> </div> </main> </>) }""";"  ]
export default React.memo(function About () { return (<>
<Head> <title> About - Zion Tech Group</title> <meta name = "description" content="Learn about Zion Tech Group" / /" > </Head> <main className="min - h-screen bg - white"> <div className="max - w-7xl mx - auto px - 4 sm: p x - 6 lg: p x - 8 py - 20"> <div className="text - center mb - 16"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 6"> About Zion Tech Group </h1> <p className="text - xl text - gray - 600 max - w-3xl mx - auto"> Leading technology solutions provider. </p> </div> <div className="grid md: gri d - cols - 2 gap - 12"> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 4">Our Mission</h2> <p className="text - gray - 600 mb - 6"> To empower businesses with cutting - edge technology solutions that drive innovation, efficiency, and growth. </p> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 4">Our Vision</h2> <p className="text - gray - 600"> To be the leading technology partner for businesses seeking to transform their operations through AI, automation, and digital innovation. </p> </div> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 4">Why Choose Us</h2> <ul className="space - y-3 text - gray - 600"> <li>• Expert team with deep industry knowledge</li> <li>• Proven track record of successful implementations</li> <li>• Cutting - edge technology and innovative solutions</li> <li>• Dedicated support and ongoing maintenance</li> <li>• Competitive pricing and flexible engagement models</li> </ul> </div> </div> </div> </main> </>) }"""
=======
>>>>>>> merge-all-prs-20250904-105408
