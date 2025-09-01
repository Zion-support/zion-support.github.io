import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { ; Users,; Globe,; Award,; Star,; CheckCircle,; TrendingUp,; Lightbulb,; Shield,; Zap,; Cloud,; Brain,; Database,; Server,; Lock,; BarChart3,; Code,; Rocket,; Target,; Heart,; Clock,; MapPin,; Phone,; Mail,; ArrowRight; } from 'lucide-react';
;
const About: React.FC = () => {;
  const stats = [;
    { icon: Users, number: '500+', label: 'Projects Completed', description: 'Successfully delivered' },;
    { icon: Globe, number: '25+', label: 'Countries Served', description: 'Global presence' },;
    { icon: Award, number: '99.9%', label: 'Uptime SLA', description: 'Enterprise reliability' },;
    { icon: Star, number: '4.9/5', label: 'Client Rating', description: 'Customer satisfaction' };
  ];
;
  const values = [;
    {;
      icon: Lightbulb,;
      title: 'Innovation First',;
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and approaches to solve complex problems.';
    },;
    {;
      icon: Shield,;
      title: 'Trust & Security',;
      description: 'Security is at the core of everything we do. We build solutions that protect your business and data.';
    },;
    {;
      icon: Users,;
      title: 'Client Success',;
      description: 'Your success is our success. We partner with you to achieve your goals and drive real business value.';
    },;
    {;
      icon: Zap,;
      title: 'Excellence',;
      description: 'We maintain the highest standards of quality in every project, delivering solutions that exceed expectations.';
    };
  ];
;
  const services = [;
    {;
      icon: Brain,;
      title: 'AI & Machine Learning',;
      description: 'Cutting-edge artificial intelligence solutions that transform business operations and drive innovation.';
    },;
    {;
      icon: Cloud,;
      title: 'Cloud & DevOps',;
      description: 'Scalable cloud infrastructure and streamlined development workflows that accelerate your digital transformation.';
    },;
    {;
      icon: Shield,;
      title: 'Cybersecurity',;
      description: 'Comprehensive security solutions that protect your business from evolving threats and ensure compliance.';
    },;
    {;
      icon: Database,;
      title: 'Data Analytics',;
      description: 'Turn your data into actionable insights with advanced analytics and business intelligence solutions.';
    },;
    {;
      icon: Server,;
      title: 'Infrastructure',;
      description: 'Robust, scalable infrastructure solutions that support your business growth and performance needs.';
    },;
    {;
      icon: Code,;
      title: 'Custom Development',;
      description: 'Tailored software solutions designed specifically for your business requirements and challenges.';
    };
  ];
;
  const team = [;
    {;
      name: 'Dr. Sarah Chen',;
      role: 'Chief Technology Officer',;
      bio: 'Leading our AI and machine learning initiatives with 15+ years of experience in advanced technology solutions.',;
      expertise: ['AI/ML', 'Cloud Architecture', 'Data Science', 'Strategic Planning'];
    },;
    {;
      name: 'Michael Rodriguez',;
      role: 'VP of Engineering',;
      bio: 'Expert in cloud infrastructure and DevOps practices, driving our technical excellence and innovation.',;
      expertise: ['Cloud Computing', 'DevOps', 'System Architecture', 'Team Leadership'];
    },;
    {;
      name: 'Alex Thompson',;
      role: 'Head of Cybersecurity',;
      bio: 'Cybersecurity specialist with deep expertise in threat detection, incident response, and compliance.',;
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance', 'Risk Management'];
    },;
    {;
      name: 'Emily Watson',;
      role: 'Director of Data Science',;
      bio: 'Data science leader helping businesses unlock the value of their data through advanced analytics.',;
      expertise: ['Data Science', 'Machine Learning', 'Business Intelligence', 'Analytics Strategy'];
    };
  ];
;
  const milestones = [;
    {;
      year: '2018',;
      title: 'Company Founded',;
      description: 'Zion Tech Group was established with a vision to democratize advanced technology solutions.';
    },;
    {;
      year: '2020',;
      title: 'AI Services Launch',;
      description: 'Launched our first AI-powered business intelligence platform, marking our entry into AI services.';
    },;
    {;
      year: '2022',;
      title: 'Global Expansion',;
      description: 'Expanded operations to 25+ countries, serving enterprise clients worldwide.';
    },;
    {;
      year: '2024',;
      title: 'Innovation Hub',;
      description: 'Established our innovation hub for research and development in emerging technologies.';
    },;
    {;
      year: '2025',;
      title: 'Future Forward',;
      description: 'Continuing to lead the industry with cutting-edge solutions and exceptional service.';
    };
  ];
;
  return (;
    <div className="min-h-screen bg-slate-900">;""
      <SEO";""
        title="About Us - Zion Tech Group";""
        description="Learn about Zion Tech Group's mission, values, and commitment to delivering innovative technology solutions that transform businesses worldwide.";""
        keywords="about us, Zion Tech Group, technology company, AI solutions, cloud services, cybersecurity";"
      />;""
      {/* Hero Section */}";""
      <section className="pt-32 pb-16 px-4">";""
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};"
            transition={{ duration: 0.6 }};""
          >";""
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">;"
              About Zion Tech Group;""
            </h1>";""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              We are a leading technology company dedicated to transforming businesses through innovative AI solutions,;
              cloud services, and cybersecurity expertise. Our mission is to make advanced technology accessible and;
              impactful for organizations of all sizes.;
            </p>;
          </motion.div>;
        </div>;"
      </section>;""
      {/* Stats Section */}";""
      <section className="py-16 px-4">";""
        <div className="max-w-7xl mx-auto">";""
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">;
            {stats.map((stat, index) => (;
              <motion.div;
                key={stat.label};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};"
                viewport={{ once: true }};""
                transition={{ duration: 0.6, delay: index * 0.1 }}";""
                className="text-center";""
              >";""
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">";""
                  <stat.icon className="w-8 h-8 text-white" />;""
                </div>";""
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>";""
                <div className="text-lg font-semibold text-cyan-400 mb-1">{stat.label}</div>";""
                <div className="text-gray-400 text-sm">{stat.description}</div>;
              </motion.div>;
            ))};
          </div>;
        </div>;"
      </section>;""
      {/* Mission & Vision */}";""
      <section className="py-16 px-4 bg-slate-800/30">";""
        <div className="max-w-7xl mx-auto">";""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">;
            <motion.div;
              initial={{ opacity: 0, x: -20 }};
              whileInView={{ opacity: 1, x: 0 }};
              viewport={{ once: true }};"
              transition={{ duration: 0.6 }};""
            >";""
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">";""
                <Target className="w-8 h-8 text-white" />;""
              </div>";""
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>";""
              <p className="text-gray-300 text-lg leading-relaxed mb-6">;
                To democratize advanced technology solutions and empower businesses to achieve their full potential;"
                through innovation, expertise, and unwavering commitment to excellence.;""
              </p>";""
              <p className="text-gray-300 leading-relaxed">;
                We believe that every organization, regardless of size, should have access to enterprise-grade;
                technology solutions that drive growth, efficiency, and competitive advantage.;
              </p>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, x: 20 }};
              whileInView={{ opacity: 1, x: 0 }};
              viewport={{ once: true }};"
              transition={{ duration: 0.6, delay: 0.2 }};""
            >";""
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">";""
                <Rocket className="w-8 h-8 text-white" />;""
              </div>";""
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>";""
              <p className="text-gray-300 text-lg leading-relaxed mb-6">;
                To be the global leader in AI-powered technology solutions, setting the standard for innovation,;"
                reliability, and client success in the digital transformation era.;""
              </p>";""
              <p className="text-gray-300 leading-relaxed">;
                We envision a future where technology seamlessly enhances human potential and creates sustainable;
                value for businesses and society as a whole.;
              </p>;
            </motion.div>;
          </div>;
        </div>;"
      </section>;""
      {/* Values Section */}";""
      <section className="py-16 px-4">";""
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};"
            viewport={{ once: true }};""
            transition={{ duration: 0.6 }}";""
            className="text-center mb-16";""
          >";""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;"
              Our Core Values;""
            </h2>";""
            <p className="text-gray-300 max-w-2xl mx-auto">;
              The principles that guide everything we do and shape our relationships with clients, partners, and each other.;
            </p>;"
          </motion.div>;";""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {values.map((value, index) => (;
              <motion.div;
                key={value.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};"
                viewport={{ once: true }};""
                transition={{ duration: 0.6, delay: index * 0.1 }}";""
                className="text-center";""
              >";""
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">";""
                  <value.icon className="w-8 h-8 text-white" />;""
                </div>";""
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>";""
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>;
              </motion.div>;
            ))};
          </div>;
        </div>;"
      </section>;""
      {/* Services Overview */}";""
      <section className="py-16 px-4 bg-slate-800/30">";""
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};"
            viewport={{ once: true }};""
            transition={{ duration: 0.6 }}";""
            className="text-center mb-16";""
          >";""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;"
              What We Do;""
            </h2>";""
            <p className="text-gray-300 max-w-2xl mx-auto">;
              Comprehensive technology solutions designed to address your most critical business challenges and opportunities.;
            </p>;"
          </motion.div>;";""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {services.map((service, index) => (;
              <motion.div;
                key={service.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};"
                viewport={{ once: true }};""
                transition={{ duration: 0.6, delay: index * 0.1 }}";""
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300";""
              >";""
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">";""
                  <service.icon className="w-8 h-8 text-white" />;""
                </div>";""
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>";""
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>;
              </motion.div>;
            ))};
          </div>;
        </div>;"
      </section>;""
      {/* Team Section */}";""
      <section className="py-16 px-4">";""
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};"
            viewport={{ once: true }};""
            transition={{ duration: 0.6 }}";""
            className="text-center mb-16";""
          >";""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;"
              Leadership Team;""
            </h2>";""
            <p className="text-gray-300 max-w-2xl mx-auto">;
              Meet the experienced professionals who are driving our mission and shaping the future of technology.;
            </p>;"
          </motion.div>;";""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {team.map((member, index) => (;
              <motion.div;
                key={member.name};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                viewport={{ once: true }};"
                transition={{ duration: 0.6, delay: index * 0.1 }};""
              >";""
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">";""
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">;"
                    {member.name.split(' ').map(n => n[0]).join('')};""
                  </div>";""
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>";""
                  <p className="text-cyan-400 text-center mb-4">{member.role}</p>";""
                  <p className="text-slate-300 text-center mb-4 text-sm">{member.bio}</p>";""
                  <div className="space-y-2">;""
                    {member.expertise.map((skill, idx) => (";""
                      <div key={idx} className="flex items-center text-sm text-slate-400">";""
                        <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />;
                        {skill};
                      </div>;
                    ))};
                  </div>;
                </div>;
              </motion.div>;
            ))};
          </div>;
        </div>;"
      </section>;""
      {/* Milestones Section */}";""
      <section className="py-20 bg-slate-800/50">";""
        <div className="max-w-7xl mx-auto px-4">;""
          <motion.div ";""
            className="text-center mb-16";
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};"
            transition={{ duration: 0.8 }};""
          >";""
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;"
              Our Journey;""
            </h2>";""
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Key milestones that have shaped our company and driven our growth;
            </p>;"
          </motion.div>;";""
          <div className="relative">";""
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>";""
            <div className="space-y-12">;
              {milestones.map((milestone, index) => (;
                <motion.div;
                  key={index};
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`};
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }};
                  whileInView={{ opacity: 1, x: 0 }};
                  viewport={{ once: true }};
                  transition={{ duration: 0.8, delay: index * 0.2 }};"
                >;""
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>";""
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">";""
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>";""
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>";""
                      <p className="text-slate-300">{milestone.description}</p>;"
                    </div>;""
                  </div>";""
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>;
                </motion.div>;
              ))};
            </div>;
          </div>;
        </div>;"
      </section>;""
      {/* CTA Section */}";""
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">";""
        <div className="max-w-4xl mx-auto text-center px-4">;""
          <motion.h2 ";""
            className="text-4xl md:text-5xl font-bold mb-6 text-white";
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.8 }};
          >;
            Ready to Work Together?;"
          </motion.h2>;""
          <motion.p ";""
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto";
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.8, delay: 0.2 }};
          >;
            Let's discuss how our expertise and innovative solutions can help transform your business and drive success.;"
          </motion.p>;""
          <motion.div ";""
            className="flex flex-col sm:flex-row gap-4 justify-center";
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.8, delay: 0.4 }};"
          >;""
            <a ";""
              href="/contact";""
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105";
            >;
              Get Started Today;"
            </a>;""
            <a ";""
              href="/services";""
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300";
            >;
              Explore Services;
            </a>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};"
;""
export default About;";""