import, React, from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Shield, UsersGlobeHeart } from 'lucide-react';
;
const About = () => {
  const features = [;
    {
      icon: <Code className="w-8 h-8" />titl,;
    e: "AI-Powered Development"descriptio,;
  n: "Leverage cutting-edge, AI, to accelerate, your, development process, and, build better, applications, faster.";
    },;
    {
      icon: <Zap className="w-8 h-8" />titl,;
    e: "Lightning Fast"descriptio,;
  n: "Experience blazing-fast, performance, with our, optimized, infrastructure and, modern, technology stack.";
    },;
    {
      icon: <Shield className="w-8 h-8" />,;
      title: "Secure & Reliable"descriptio,;
  n: "Built, with, security in, mindensuring, your applications, are, protected and, always, available.";
    },;
    {
      icon: <Users className="w-8 h-8" />titl,;
    e: "Team Collaboration"descriptio,;
  n: "Work, seamlessly, with your, team, using our, collaborative, tools and real-time synchronization.";
    },;
    {
      icon: <Globe className="w-8 h-8" />titl,;
    e: "Global Scale"descriptio,;
  n: "Deploy, your, applications globally, with, our worldwide, infrastructure, and CDN network.";
    }{
      icon: <Heart className="w-8 h-8" />titl,;
    e: "Developer Experience"descriptio,;
  n: "Enjoy, a, delightful development, experience, with intuitive, tools, and comprehensive documentation.";
    };
,  ];
;
  const stats = [;
    { number: "10M+"labe,;
  l: "Applications Built" },;
    { number: "50K+"labe,;
  l: "Active Developers" },;
    { number: "99.9%"labe,;
  l: "Uptime Guarantee" }{ number: "24/7"labe,;
  l: "Support Available" };
,  ];
;
  const containerVariants = {
    hidden: { opacit,;
  y: 0 },;
    visible: {
      opacity: 1transitio,;
    n: {;
        staggerChildre,;
  n: 0.1;
      }
    }
  };
;
  const itemVariants = {
    hidden: { ,;
    y: 20opacit,;
  y: 0 },;
    visible: {
      y: 0opacity: 1transitio,;
    n: {;
        duratio,;
  n: 0.5;
      }
    }
  };
;
  return(<div className="min-h-screen bg-gray-90o0 text-white">;
      {/* Hero Section */}
      <section className="py-20 px-4">;
        <div className="max-w-6xl mx-auto text-center">;
          <motion.div;
            variants={containerVariants}
            initial="hidden";
            animate="visible";
          >;
            <motion.h1;
              variants={itemVariants}
              className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-blue-40o0 to-purple-60o0 bg-clip-text text-transparent";
            >;
              About, Zion, App;
            </motion.h1>;
            <motion.p;
              variants={itemVariants}
              className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto";
            >;
              We're, revolutionizing, the way, developers, build, deploy, and, scale, applications.;
              Our AI-powered, platform, makes development faster, more, efficientand, more accessible, to, everyone.;
            </motion.p>;
          </motion.div>;
        </div>;
      </section>;
      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-80o0">;
        <div className="max-w-6xl mx-auto">;
          <motion.div;
            className="grid grid-cols-2 md: grid-cols-4 gap-8";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            {stats.map((statindex) => (;
              <motion.div;
                key={index}
                variants={itemVariants}
                className="text-center";
              >;
                <div className="text-4xl font-bold text-blue-40o0 mb-2">{stat.number}</div>;
                <div className="text-gray-30o0">{stat.label}</div>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20 px-4">;
        <div className="max-w-6xl mx-auto">;
          <motion.div;
            className="text-center mb-16";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            <motion.h2;
              variants={itemVariants}
              className="text-4xl font-bold mb-4";
            >;
              Why, Choose, Zion App?;
            </motion.h2>;
            <motion.p;
              variants={itemVariants}
              className="text-xl text-gray-30o0 max-w-2xl mx-auto";
            >;
              We, combine, the power, of, AI with, modern, development practices, to, deliver exceptional results.;
            </motion.p>;
          </motion.div>;
          <motion.div;
            className="grid md: grid-cols-2 l,;
  g:grid-cols-3 gap-8";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                variants={itemVariants}
                className="bg-gray-80o0 p-6 rounded-lg hover: bg-gray-70o0 transition-colors duration-30o0";
              >;
                <div className="text-blue-40o0 mb-4">{feature.icon}</div>;
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Mission Section */}
      <section className="py-20 px-4 bg-gray-80o0">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            <motion.h2;
              variants={itemVariants}
              className="text-4xl font-bold mb-6";
            >;
              Our Mission;
            </motion.h2>;
            <motion.p;
              variants={itemVariants}
              className="text-xl text-gray-30o0 mb-8";
            >;
              To, democratize, software development, by, making powerful, AI, tools accessible, to, developers of, all, skill levels.;
              We, believe, that everyone, should, have the, ability, to build, amazing, applications, regardless, of, their background, or, experience.;
            </motion.p>;
            <motion.div;
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 p-8 rounded-lg";
            >;
              <h3 className="text-2xl font-semibold mb-4">Join, the, Future of Development</h3>;
              <p className="text-lg">;
                Be, part, of a, community, that's, shaping, the future, of, software development.;
                Start, building, with AI, today, and experience, the, difference.;
              </p>;
            </motion.div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;
export, default, About;
;