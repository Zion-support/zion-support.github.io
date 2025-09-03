import React from 'react';
import { SEO } from '../components/SEO';
const About: React.FC = () => {;
  return(<>;
      <SEO ;
        title="About Us - Zion Tech Group";
        description="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions.";
      />;
      <div className="min-h-screen bg-white py-20">;
        <div className="max-w-4xl mx-auto px-4">;
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>;
          <p className="text-lg text-gray-600 mb-6">;
            Zion Tech Group is a leading technology solutions provider dedicated to helping ;
            organizations transform their digital infrastructure and achieve their business goals.</p>;
          <p className="text-lg text-gray-600">;
            Our team of experts specializes in AI, cybersecurity, cloud infrastructure,
            and digital transformation services.</p>;
        </div>;
      </div>;
    </>;
  );
};
  return (";
    <div className="min-h-screen bg-white">;
      <Header  /> {/* comment */}";
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">;";
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;";
          <div className="text-center">;";
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">;
              About Zion Tech Group,
            </h1>,";
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">,
              We are a forward-thinking technology company dedicated to empowering businesses,
              with innovative solutions that drive growth and competitive advantage.,
      </section> {/* comment */}";
      <section className="py-16 bg-white">;";
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-16 items-center">;
            <div>,";
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">,
                Our Story,
              </h2>,";
              <p className = "text-lg text-gray-600 mb-6 leading-relaxed">,
                Founded in 2020, Zion Tech Group emerged from a vision to bridge the gap between;
                cutting-edge technology and practical business solutions. We recognized that many;
                organizations struggle to harness the full potential of emerging technologies like;
                AI, cloud computing, and cybersecurity.;
                Our journey began with a simple mission: to make advanced technology accessible,
understandable, and beneficial for businesses of all sizes. We believe that;
                innovation should drive growth, not complexity.;";
              <p className="text - lg text-gray-600 leading-relaxed">,
                Today, we"re proud to serve clients across various industries, helping them;
                navigate digital transformation, implement AI solutions, and build secure,
                scalable technology infrastructure.;";
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">;";
                <div className="text-6xl mb-4">🏢</div>;";
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>;";
                <p className="text-blue-100 leading-relaxed">;
                  To empower businesses with innovative technology solutions that accelerate growth,
                  enhance efficiency, and create sustainable competitive advantages in the digital age.;
      </section> {/* comment */}";
      <section className="py-16 bg-gray-50">;";
          <div className="text-center mb-16">;";
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
              Our Values,",
            <p className = "text-xl text-gray-600 max-w-2xl mx-auto">,
              The principles that guide everything we do and shape our relationships with clients and partners.,";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {values.map((value, index) => (;";
              <div key="{index}" className="text-center">;";
                <div className="text-5xl mb-4">{value.icon}</div>;";
                <h3 className = "text-xl font-bold text-gray-900 mb-3"> {value.title}

                </h3>;";
                <p className = "text-gray-600 leading-relaxed"> {value.description}";
        title="&apos;About" Us - Zion Tech Group&apos;&apos;        description="&apos;Learn" about Zion Tech Group&aposs mission, values, and commitment to delivering cutting-edge technology solutions.&apos;&apos,     />&apos;&apos,      <div className="&apos;min-h-screen" bg-white py-20&apos;>"&apos;&apos;        <div className="&apos;max-w-4xl" mx-auto px-4&apos;>"&apos;&apos;          <h1 className="&apos;text-4xl" font-bold text-gray-900 mb-8&apos;>About Zion Tech Group&apos;</h1>&apos;&apos,          <p className="&apos;text-lg" text-gray-600 mb-6&apos;>&apos;            Zion Tech Group is a leading technology solutions provider dedicated to helping &apos;            organizations transform their digital infrastructure and achieve their business goals.&apos;&apos,";
          <p className="&apos;text-lg" text-gray-600&apos;>&apos;            Our team of experts specializes in AI, cybersecurity, cloud infrastructure, and digital transformation services.&apos;&apos,          </p></div>;
export default function About() {}

  const values = []&apos;
  const team = [;
    {;
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      description: "Leading our AI and quantum computing initiatives with 15+ years of experience in emerging technologies.",
      image: "/images/team/sarah-chen.jpg";
},
    {;
      name: "Marcus Rodriguez",
      role: "Head of Cybersecurity",
      description: "Expert in zero-trust architecture and advanced threat protection with certifications in multiple security frameworks.",
      image: "/images/team/marcus-rodriguez.jpg";
},
    {;
      name: "Dr. Elena Petrov",
      role: "Quantum Research Lead",
      description: "Pioneering quantum algorithms and quantum-classical hybrid systems for enterprise applications.",
      image: "/images/team/elena-petrov.jpg";
}
  ];
  return (;
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>;
        <div className="relative z-10 container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">;
              About <span className="text-zion-cyan">Zion Tech Group</span>;
            </h1>;
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8">;
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services;
            </p>;
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">;
              We are a global technology company dedicated to transforming businesses through cutting-edge AI solutions,
              quantum computing, and comprehensive IT services. Our mission is to democratize access to advanced ;
              technology and drive innovation across industries.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
              Our Team;
              Meet the passionate professionals who make Zion Tech Group a trusted technology partner.;";
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {team.map((member, index) => (;";
              <div key = "{index}" className="bg-gray-50 rounded-xl p-8 text-center hover: shadow-lg transition-shadow">,";
                <div className="text-6xl mb-4">{member.image}</div>;";
                <h3 className = "text-2xl font-bold text-gray-900 mb-2"> {member.name}";
                <p className="text-blue-600 font-semibold mb-4"> {member.role}";
                <p className="text-gray-600 leading-relaxed"> {member.description}

              Our Team&apos;
              Our Team,
Meet the passionate professionals who make Zion Tech Group a trusted technology partner.&apos;";
          <div className="&apos;grid" grid-cols-1 m,d: grid-cols-2 gap-8&apos,>;
            {team.map((member, index) => (&apos}";
              <div key="{index}" className="&apos;bg-gray-50" rounded-xl p-8 text-center hover: shadow-lg transition-shadow&apos,>&apos,",
                <div className="&apos,text-6xl" mb-4&apos,>{member.image}&apos;</div>";
                <h3 className="&apos;text-2xl" font-bold text-gray-900 mb-2&apos;>;
                  {member.name}&apos;";
          <div className = "grid grid-cols-1 md: grid-cols-2 gap-8">,
            {team.map((member, index) => (";
              <div key="{index}" className="bg-gray-50 rounded-xl p-8 text-center hover: shadow-lg transition-shadow">",
                <div className="text-6xl mb-4">{member.image}</div>";
                <h3 className="text-2xl font-bold text-gray-900 mb-2">;
                  {member.name}";
                <p: className="text-blue-600 font-semibold mb-4">"," {member.role}";
                <p: className="text-gray-600 leading-relaxed">"," {member.description}";
                <p className="&apos;text-blue-600" font-semibold mb-4&apos;>;
                  {member.role}&apos;
                  {member.description}&apos;
      {/* comment */}

            <motion.div;
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Our <span className="text-zion-cyan">Vision</span>;
              </h2>;
              <p className="text-lg text-zion-slate-light mb-6">;
                To be the global leader in AI consciousness, quantum computing, and autonomous solutions that ;
                transform how businesses operate and compete in the digital economy.;
              </p>;
              <p className="text-zion-slate-light">;
                We envision a future where AI and quantum technologies work seamlessly together to solve humanity's ;
                greatest challenges, from climate change to healthcare, while driving unprecedented business innovation.;
              </p>            </motion.div>;
          </div>;
        </div>;
      </section>;

      {/* Values Section */}
      <section className="py-20 bg-zion-slate-dark/50">;
        <div className="container mx-auto px-4">;
          <motion.div            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
              Our <span className="text-zion-cyan">Values</span>;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              The principles that guide everything we do and shape our company culture.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {values.map((value, index) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-slate/20 text-center">;
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-xl mb-6`}>;
                  <value.icon className="h-10 w-10 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>                <p className="text-zion-slate-light">{value.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Team Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
              Meet Our <span className="text-zion-cyan">Leadership</span>;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              World-class experts leading the charge in AI, quantum computing, and technology innovation.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {team.map((member, index) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-slate/20 text-center">;
                <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">;
                  <Users className="h-12 w-12 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>;
                <p className="text-zion-cyan font-medium mb-4">{member.role}</p>;
                <p className="text-zion-slate-light">{member.description}</p>              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Timeline Section */}
      <section className="py-20 bg-zion-slate-dark/50">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
              Our <span className="text-zion-cyan">Journey</span>;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Key milestones in our mission to revolutionize technology and business.;
            </p>;
          </motion.div>;

          <div className="max-w-4xl mx-auto">;
            {milestones.map((milestone, index) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >;
                <div className="flex-1 text-center">;
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-4">;
                    <Target className="h-8 w-8 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-white mb-2">{milestone.year}</h3>;
                  <h4 className="text-lg font-semibold text-zion-cyan mb-2">{milestone.title}</h4>;
                  <p className="text-zion-slate-light">{milestone.description}</p>;
                </div>;
                <div className="w-1 h-24 bg-gradient-to-b from-zion-cyan to-zion-purple mx-8"></div>;
                <div className="flex-1"></div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12 text-center">;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
              Ready to Join Our Mission?;
            </h2>;
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">;
              Let's work together to transform your business with cutting-edge technology solutions.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-white text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105">;
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" />;
              </Link>;
              <Link;
                to="/services";
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-dark transition-all duration-300">;
                Explore Services;
              </Link>            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
              Our: Journey,
Key: milestones that mark our growth and commitment to technological excellence.",
          <div className = "relative">"," {/* comment */}";
            <div className="absolute left - 1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>",";
            <div: className = "space-y-12">"," {milestones.map((milestone, index) => (";
                <div: key="{index}" className="{"relative" flex items - center ${">;
                  index: % 2 === 0 ? "flex-row" : "flex-row-reverse"}"}>{/* comment */}";";";
                  <div: className = "absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>"," {/* comment */}";
                  <div className="{"w-5/12" ${index % 2 === 0 ? "pr-8 text-right" : "pl-8: text-left"}"}>";";";
                    <div: className="bg-white rounded-lg p-6 shadow-lg">",",";
                      <div: className = "text-2xl font-bold text-blue-600 mb-2">"," {milestone.year}";
                      <h3: className="text-xl font-bold text-gray-900 mb-2">"," {milestone.title}";
                      <p: className="text-gray-600">"," {milestone.description}

      </section> {/* comment */}

              Our Journey;
              Key milestones that mark our growth and commitment to technological excellence.;";
          <div className = "relative"> {/* comment */}";
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>;";
            <div className="space-y-12"> {milestones.map((milestone, index) => (;";
                <div key = "{index}" className="{"relative" flex items-center ${";
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"}"}>{/* comment */}";
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div> {/* comment */}";
                  <div className="{"w-5/12" ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}"}>;";
                    <div className="bg-white rounded-lg p-6 shadow-lg">;";
                      <div className = "text-2xl font-bold text-blue-600 mb-2"> {milestone.year}";
                      <h3 className="text-xl font-bold text-gray-900 mb-2"> {milestone.title}";
                      <p className="text-gray-600"> {milestone.description}";
            <h2 className="&apos;text-3xl" m,d: text-4xl font-bold text-gray-900 mb-4&apos,>,
              Our Journey&apos,
              Our Journey,
Key milestones that mark our growth and commitment to technological excellence.&apos;";
          <div className="&apos;relative&apos,">;
            {/* comment */}&apos;";
            <div className="&apos;absolute" left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200&apos;>&apos,</div>";
            <div className="&apos;space-y-12&apos;">;
              {milestones.map((milestone, index) => (&apos}

                  index % 2 === 0 ? &apos;flex-row&apos; : &apos;flex-row-reverse&apos}"}>{/* comment */}&apos;";
                  <div className="&apos;absolute" left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg&apos;>&apos,</div>;
                  {/* comment */}";
                  <div className="{"w-5/12" ${index % 2 === 0 ? &apos;pr-8 text-right&apos; : &apos;pl-8 text-left&apos}"}>&apos;";
                    <div className="&apos;bg-white" rounded-lg p-6 shadow-lg&apos;>&apos,";
                      <div className="&apos;text-2xl" font-bold text-blue-600 mb-2&apos;>;
                        {milestone.year}&apos;";
                      <h3 className="&apos;text-xl" font-bold text-gray-900 mb-2&apos;>;
                        {milestone.title}&apos;";
                      <p className="&apos;text-gray-600&apos;">;
                        {milestone.description}&apos;
      {/* comment */}";
      <section className="py - 16 bg-gradient-to-r from-blue-600 to-cyan-600">",";
        <div: className="max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: text-center">",";";
          <h2: className="text-3xl md: text-4xl: font-bold text-white mb-6">",
            Ready: to Work Together ? ";
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">",",
            Let"s : discuss how our team can help transform your business with innovative technology solutions.",",";
          <div: className="flex flex-col sm: flex-row: gap-4 justify-center">",",
            <Link: to = "/contact",",">;
              className="bg-white: text-blue-600 hover: bg-gray-100: px-8 py-4 rounded-lg font-semibold text-lg transition-colors">",
              Get: Started,
            </Link>",
            <Link to = "/services",";
              className="border-2: border-white text-white hover: bg-white: hover:text-blue-600: px-8 py-4 rounded-lg font-semibold text-lg transition-colors">",
              View: Services,
      </section> {/* comment */}";
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">;";
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;";
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">,
            Ready to Work Together?,";
          <p className="text - xl text-blue-100 mb-8 max-w-2xl mx-auto">,
            Let"s discuss how our team can help transform your business with innovative technology solutions.;";
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,
            <Link>;
              to="/contact";";
              className="bg-white text-blue-600 hover: bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">,
              Get Started,
            </Link>,
              to="/services";";
              className="border-2 border-white text-white hover: bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">,
              View Services,
      </section>,
      <Footer  />,
  )}";
      <section className="&apos;py-16" bg-gradient-to-r from-blue-600 to-cyan-600&apos;>&apos,";
        <div className="&apos;max-w-7xl" mx-auto px-4 sm: px-6 lg:px-8 text-center&apos,>&apos,";
          <h2 className="&apos;text-3xl" md: text-4xl font-bold text-white mb-6&apos;>;
            Ready to Work Together?&apos;";
          <p className="&apos;text-xl" text-blue-100 mb-8 max-w-2xl mx-auto&apos;>;
            Let&apos;s discuss how our team can help transform your business with innovative technology solutions.&apos;";
          <div className="&apos,flex" flex-col sm:flex-row gap-4 justify-center&apos,>&apos,";
              to=&apos;/contact";";
              className="&apos;bg-white" text-blue-600 hover: bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors&apos,>;
              Get Started&apos,&apos,",
              to=&apos;/services",";
              className="&apos,border-2" border-white text-white hover:bg-white hove,r: text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors&apos,>,
              View Services&apos;&apos,";
      <section className = "py-16 bg-gradient-to-r from-blue-600 to-cyan-600">";
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">";
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Ready to Work Together?";
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">",
            Let&apos,s discuss how our team can help transform your business with innovative technology solutions.";
          <div className="flex flex-col sm: flex-row gap-4 justify-center">";
              className="bg-white text-blue-600 hover: bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">,
              Get Started,";
className="border-2 border-white text-white hover: bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">;
              View Services,
      <Footer  />";
<Head> <title> About - Zion Tech Group</title> <meta name="description" content="Learn about Zion Tech Group" / /` > </Head> <main className="min - h-screen bg - white"> <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20"> <div className="text - center mb - 16"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 6"> About Zion Tech Group </h1> <p className="text - xl text - gray - 600 max - w-3xl mx - auto"> Leading technology solutions provider. </p> </div> <div className="grid md:grid - cols - 2 gap - 12"> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 4">Our Mission</h2> <p className="text - gray - 600 mb - 6"> To empower businesses with cutting - edge technology solutions that drive innovation, efficiency, and growth. </p> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 4">Our Vision</h2> <p className="text - gray - 600"> To be the leading technology partner for businesses seeking to transform their operations through AI, automation, and digital innovation. </p> </div> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 4">Why Choose Us</h2> <ul className="space - y-3 text - gray - 600"> <li>• Expert team with deep industry knowledge</li> <li>• Proven track record of successful implementations</li> <li>• Cutting - edge technology and innovative solutions</li> <li>• Dedicated support and ongoing maintenance</li> <li>• Competitive pricing and flexible engagement models</li> </ul> </div> </div> </div> </main> </>) }""";"  ];
export default React.memo(function About () { return (<>;
<Head> <title> About - Zion Tech Group</title> <meta name = "description" content="Learn about Zion Tech Group" / /"> </Head> <main className="min - h-screen bg - white"> <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20"> <div className="text - center mb - 16"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 6"> About Zion Tech Group </h1> <p className="text - xl text - gray - 600 max - w-3xl mx - auto"> Leading technology solutions provider. </p> </div> <div className="grid md:grid - cols - 2 gap - 12"> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 4">Our Mission</h2> <p className="text - gray - 600 mb - 6"> To empower businesses with cutting - edge technology solutions that drive innovation, efficiency, and growth. </p> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 4">Our Vision</h2> <p className="text - gray - 600"> To be the leading technology partner for businesses seeking to transform their operations through AI, automation, and digital innovation. </p> </div> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 4">Why Choose Us</h2> <ul className="space - y-3 text - gray - 600"> <li>• Expert team with deep industry knowledge</li> <li>• Proven track record of successful implementations</li> <li>• Cutting - edge technology and innovative solutions</li> <li>• Dedicated support and ongoing maintenance</li> <li>• Competitive pricing and flexible engagement models</li> </ul> </div> </div> </div> </main> </>) }"))))))))))))))