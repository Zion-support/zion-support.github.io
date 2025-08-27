import type { NextPage } from 'next';
import Head from 'next/head';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  TrendingUp, 
  CheckCircle,
  Brain,
  Cloud,
  Lock,
  Rocket,
  Star,
  Heart,
  Lightbulb,
  Cpu,
  Network,
  Database
} from 'lucide-react';

const About: NextPage = () => {
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of technology to create solutions that don\'t just solve today\'s problems, but anticipate tomorrow\'s challenges.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Security is at the core of everything we build. We implement enterprise-grade security measures to protect your data and systems.',
      color: 'from-red-600 to-orange-600'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We work closely with clients to understand their needs and deliver solutions that exceed expectations.',
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project, from initial concept to final delivery and ongoing support.',
      color: 'from-yellow-600 to-orange-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Heart },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Users }
  ];

  const technologies = [
    { name: 'AI & Machine Learning', icon: Brain, description: 'Custom AI models, NLP, computer vision, and predictive analytics' },
    { name: 'Cloud & DevOps', icon: Cloud, description: 'AWS, Azure, GCP, Kubernetes, Docker, and CI/CD automation' },
    { name: 'Cybersecurity', icon: Lock, description: 'Penetration testing, security audits, compliance, and threat detection' },
    { name: 'Web Development', icon: Globe, description: 'React, Next.js, Node.js, and modern web technologies' },
    { name: 'Mobile Development', icon: Cpu, description: 'iOS, Android, React Native, and Flutter applications' },
    { name: 'Blockchain & Web3', icon: Network, description: 'Smart contracts, DeFi, NFTs, and decentralized applications' },
    { name: 'Data Analytics', icon: Database, description: 'Business intelligence, data visualization, and predictive analytics' },
    { name: 'IoT & Edge Computing', icon: Zap, description: 'Connected devices, edge processing, and real-time analytics' }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      expertise: 'AI, Cloud Architecture, Strategic Leadership',
      experience: '15+ years in technology leadership and innovation',
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'AI Development Team',
      role: 'Machine Learning Engineers',
      expertise: 'Custom AI Models, NLP, Computer Vision',
      experience: 'Advanced AI research and production deployment',
      image: '/team/ai-team.jpg'
    },
    {
      name: 'Cloud & DevOps Team',
      role: 'Infrastructure Specialists',
      expertise: 'Cloud Migration, Kubernetes, CI/CD',
      experience: 'Enterprise-scale infrastructure and automation',
      image: '/team/devops-team.jpg'
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity Experts',
      expertise: 'Penetration Testing, Compliance, Threat Detection',
      experience: 'Enterprise security and regulatory compliance',
      image: '/team/security-team.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Innovation</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company specializing in AI, cloud, cybersecurity, and innovative solutions. Discover our mission, values, and team." />
        <meta name="keywords" content="Zion Tech Group, about us, technology company, AI development, cloud services, cybersecurity, team" />
      </Head>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            We are a forward-thinking technology company dedicated to transforming businesses 
            through innovative AI, cloud, and cybersecurity solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+13024640950" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              ✉️ Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              To democratize cutting-edge technology and make AI, cloud, and cybersecurity solutions 
              accessible to businesses of all sizes. We believe that innovation should drive growth 
              for everyone, not just the largest corporations.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Through our comprehensive suite of services and products, we empower organizations to 
              leverage the latest technological advancements, streamline operations, and achieve 
              sustainable competitive advantages in an increasingly digital world.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading force in democratizing advanced technology, creating a future where 
                every business can harness the power of AI, cloud computing, and cybersecurity to 
                achieve unprecedented growth and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Stats */}
        <div className="mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technology Expertise */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Technology Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-300 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 mb-3"><strong>Expertise:</strong> {member.expertise}</p>
                    <p className="text-gray-300 text-sm"><strong>Experience:</strong> {member.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation Leadership</h3>
                <p className="text-gray-300 text-sm">We stay ahead of technology trends and bring cutting-edge solutions to market first.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Track Record</h3>
                <p className="text-gray-300 text-sm">Hundreds of successful projects delivered across diverse industries and technologies.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Client-Centric Approach</h3>
                <p className="text-gray-300 text-sm">Your success is our priority. We work closely with you to ensure optimal outcomes.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300 text-sm">Bank-level security measures and compliance standards for all our solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
                <p className="text-gray-300 text-sm">Quick implementation and deployment with minimal disruption to your operations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ongoing Support</h3>
                <p className="text-gray-300 text-sm">24/7 support and continuous improvement to ensure your solutions evolve with your needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how Zion Tech Group can help transform your business with cutting-edge 
              technology solutions. We offer free consultations and custom solution design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+13024640950" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                ✉️ Schedule Consultation
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="text-white font-semibold mb-2">📍 Location</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">🌐 Website</h3>
                <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                  https://ziontechgroup.com
                </a>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">⏰ Business Hours</h3>
                <p className="text-gray-300">Mon-Fri: 9AM-6PM EST<br />Sat: 10AM-2PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
