import React from &apos;react&apos;;
import { Helmet } from &apos;react-helmet-async&apos;;
import {
  CpuChipIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  UserGroupIcon
} from &apos;@heroicons/react/24/outline&apos;;



const stats = [
    {label: &apos;Projects Completed&apos;, value: &apos;500+&apos;, number: &apos;500+&apos},
    {label: &apos;Happy Clients&apos;, value: &apos;200+&apos;, number: &apos;200+&apos},
    {label: &apos;Team Members&apos;, value: &apos;50+&apos;, number: &apos;50+&apos},
    {label: &apos;Years Experience&apos;, value: &apos;10+&apos;, number: &apos;10+&apos}
  ];

  const AboutPage: React.FC = () => {const values = [
    {
      icon: CpuChipIcon,
      title: &apos;Innovation First&apos;,
      description: &apos;We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges.&apos},
    {icon: ShieldCheckIcon,
      title: &apos;Security & Trust&apos;,
      description: &apos;Your data and systems are protected with enterprise-grade security measures and compliance standards.&apos},
    {icon: UserGroupIcon,
      title: &apos;Client-Centric&apos;,
      description: 'We prioritize our clients\' success, working closely with them to understand their unique needs and deliver tailored solutions.&apos},
    {icon: RocketLaunchIcon,
      title: &apos;Results-Driven&apos;,
      description: &apos;We measure our success by the tangible results and value we deliver to our clients\' businesses.&apos}
  ];

  const team = [
    {name: &apos;Dr. Kleber Santos&apos;,
      role: &apos;Founder & CEO&apos;,
      description: &apos;AI and Machine Learning expert with 15+ years of experience in technology leadership.&apos;,
      image: &apos;/team/kleber.jpg&apos},
    {name: &apos;Sarah Johnson&apos;,
      role: &apos;CTO&apos;,
      description: &apos;Cloud architecture specialist with expertise in scalable system design and implementation.&apos;,
      image: &apos;/team/sarah.jpg&apos},
    {name: &apos;Michael Chen&apos;,
      role: &apos;Head of AI Research&apos;,
      description: &apos;PhD in Computer Science, leading our AI research and development initiatives.&apos;,
      image: &apos;/team/michael.jpg&apos},
    {name: &apos;Emily Rodriguez&apos;,
      role: &apos;Cybersecurity Director&apos;,
      description: &apos;Cybersecurity expert with certifications in ethical hacking and security architecture.&apos;,
      image: &apos;/team/emily.jpg&apos}
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group&apos;s mission, team, and commitment to delivering cutting-edge AI and IT solutions." />
        <meta name="keywords" content="about us, team, mission, AI experts, IT professionals, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a team of passionate AI and IT experts dedicated to transforming businesses 
              through innovative technology solutions.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth. We believe technology should be accessible, secure, and 
                transformative for organizations of all sizes.
              </p>
              
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our approach to client success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                cloud computing, cybersecurity, and business transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <UserGroupIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-purple-400 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our team can help transform your business with 
              cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </div>
    </>;
  );
};

export default AboutPage;