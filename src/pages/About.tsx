import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Globe, 
  Shield, 
  Zap, 
  Heart, 
  Building, 
  Cpu, 
  Lock, 
  Star, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  Lightbulb,
  Rocket,
  Eye,
  Handshake,
  Code,
  Cloud,
  Brain,
  Database,
  Network,
  Smartphone,
  Server,
  Monitor,
  ShieldCheck,
  Globe2,
  Zap as Lightning,
  Users2,
  Award as Trophy,
  Clock,
  MapPin,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';

interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  avatar: string;
  linkedin?: string;
  github?: string;
}

interface Achievement {
  title: string;
  value: string;
  description: string;
  icon: any;
  color: string;
}

interface Value {
  title: string;
  description: string;
  icon: any;
  color: string;
}

interface Service {
  title: string;
  description: string;
  icon: any;
  color: string;
}

const About: React.FC = () => {
  const values: Value[] = [
    {
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible, embracing emerging technologies and creative solutions to solve complex challenges.",
      icon: Lightbulb,
      color: "from-zion-cyan to-zion-blue"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results for our clients.",
      icon: Award,
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships, working closely with clients and stakeholders to achieve shared success.",
      icon: Users,
      color: "from-zion-blue to-zion-purple"
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices, building trust with our clients and partners.",
      icon: Shield,
      color: "from-zion-cyan to-zion-neon"
    }
  ];

  const achievements: Achievement[] = [
    {
      title: "Projects Delivered",
      value: "500+",
      description: "Successfully completed projects across industries",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Client Satisfaction",
      value: "99%",
      description: "Exceptional client satisfaction and retention",
      icon: Star,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Team Members",
      value: "50+",
      description: "Expert engineers and consultants",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Years Experience",
      value: "15+",
      description: "Decades of combined industry expertise",
      icon: Clock,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const services: Service[] = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      color: "from-zion-cyan to-zion-blue"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      icon: Shield,
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern business needs",
      icon: Cloud,
      color: "from-zion-blue to-zion-purple"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation",
      icon: Rocket,
      color: "from-zion-cyan to-zion-neon"
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Kleber Oliveira",
      role: "CEO & Chief Technology Officer",
      expertise: ["AI/ML", "Cybersecurity", "Cloud Architecture", "Digital Transformation"],
      avatar: "/images/team/kleber-oliveira.jpg",
      linkedin: "https://linkedin.com/in/kleber-oliveira",
      github: "https://github.com/kleber-oliveira"
    },
    {
      name: "Sarah Chen",
      role: "Chief Innovation Officer",
      expertise: ["Emerging Technologies", "Product Strategy", "AI Ethics", "Research & Development"],
      avatar: "/images/team/sarah-chen.jpg",
      linkedin: "https://linkedin.com/in/sarah-chen"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Security Officer",
      expertise: ["Cybersecurity", "Threat Intelligence", "Compliance", "Incident Response"],
      avatar: "/images/team/marcus-rodriguez.jpg",
      linkedin: "https://linkedin.com/in/marcus-rodriguez"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Data Scientist",
      expertise: ["Machine Learning", "Data Analytics", "Predictive Modeling", "AI Research"],
      avatar: "/images/team/emily-watson.jpg",
      linkedin: "https://linkedin.com/in/emily-watson"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* SEO Head */}
      <SEOHead 
        title="About Us"
        description="Learn about Zion Tech Group's mission to empower businesses with cutting-edge technology solutions. Meet our expert team and discover our innovative approach."
        keywords={['about us', 'team', 'mission', 'values', 'expertise', 'leadership']}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Empowering businesses with cutting-edge technology solutions",
          "url": "https://ziontechgroup.com/about",
          "foundingDate": "2010",
          "numberOfEmployees": "50+",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          }
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-32 px-4 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/10 rounded-full blur-xl animate-float" />
            <div className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-40 left-20 w-20 h-20 bg-zion-blue/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                About <span className="animate-gradient-x bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">Zion Tech Group</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
              >
                Empowering businesses with cutting-edge technology solutions. We're a team of innovators, 
                engineers, and strategists dedicated to transforming how organizations operate in the digital age.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href="#contact"
                  className="btn-primary group"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#team"
                  className="btn-secondary group"
                >
                  Meet Our Team
                  <Users className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-zion-slate">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission & Vision
                </h2>
                <p className="text-zion-slate-light text-lg mb-6 leading-relaxed">
                  At Zion Tech Group, we believe that technology should be a force for good, driving innovation, 
                  efficiency, and growth for businesses of all sizes. Our mission is to democratize access to 
                  cutting-edge technology solutions.
                </p>
                <p className="text-zion-slate-light text-lg mb-6 leading-relaxed">
                  We envision a future where every organization, regardless of size or industry, can leverage 
                  the power of AI, cybersecurity, and cloud technologies to achieve their full potential.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-zion-cyan">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Innovation-Driven</span>
                  </div>
                  <div className="flex items-center space-x-2 text-zion-purple">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Client-Focused</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/20">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-zion-slate-light">
                      To be the leading force in democratizing advanced technology solutions, 
                      making innovation accessible to businesses worldwide.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-zion-slate-dark">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Core Values
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                The principles that guide everything we do and every decision we make.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-zion-slate/20 rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-zion-slate">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                What We Do
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business operations and drive growth.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-zion-slate-dark/50 rounded-xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed mb-6">{service.description}</p>
                  <a
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-zion-slate-dark">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Achievements
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Numbers that tell the story of our success and impact.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{achievement.value}</div>
                  <div className="text-lg font-semibold text-zion-cyan mb-2">{achievement.title}</div>
                  <div className="text-zion-slate-light">{achievement.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-zion-slate">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                Meet Our Leadership Team
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Experienced professionals passionate about technology and committed to your success.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
                  <p className="text-zion-cyan text-center mb-4">{member.role}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-3 mt-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zion-slate/20 rounded-lg text-zion-cyan hover:bg-zion-cyan/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zion-slate/20 rounded-lg text-zion-cyan hover:bg-zion-cyan/20 transition-colors"
                      >
                        <Code className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-20 bg-zion-slate-dark">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Let's discuss how our technology solutions can drive innovation and growth for your organization.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/services"
                  className="btn-secondary group"
                >
                  Explore Services
                  <Zap className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
