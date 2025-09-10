

  const values = [{
      title: \'Innovation\',
      \"description\": \'We constantly push the boundaries of technology to deliver cutting-edge solutions.\',
      \"icon\": Zap
    },
    {
      \"title\": \'Excellence\',
      \"description\": \'We maintain the highest standards of quality in everything we do.\',
      \"icon\": Award
    },
    {
      \"title\": \'Integrity\',
      \"description\": \'We build trust through honest communication and ethical business practices.\',
      \"icon\": Shield
    },
    {
      \"title\": \'Collaboration\',
      \"description\": \'We work closely with our clients to ensure their success is our success.\',
      \"icon\": Users
    },
    {
      \"title\": \'Global Perspective\',
      \"description\": \'We bring international expertise and diverse perspectives to every project.\',
      \"icon\": Globe
    },
    {
      \"title\": \'Results-Driven\',
      \"description\": \'We focus on delivering measurable outcomes that drive business growth.\',
      \"icon\": Target
    }
  ];
  const team = [{
      \"name\": \'Sarah Johnson\',
      \"role\": \'CEO & Founder\',
      \"bio\": \'Visionary leader with 15+ years in technology consulting and digital transformation.\',
      \"image\": \'/team/sarah.jpg\'
    },
    {
      \"name\": \'Michael Chen\',
      \"role\": \'CTO\',
      \"bio\": \'Expert in cloud architecture and AI systems with deep technical expertise.\',
      \"image\": \'/team/michael.jpg\'
    },
    {
      \"name\": \'Emily Rodriguez\',
      \"role\": \'Head of Design\',
      \"bio\": \'Creative director specializing in user experience and digital product design.\',
      \"image\": \'/team/emily.jpg\'
    },
    {
      \"name\": \'David Kim\',
      \"role\": \'Lead Developer\',
      \"bio\": \'Full-stack developer with expertise in modern web technologies and frameworks.\',
      \"image\": \'/team/david.jpg\'
            {team.map((member) => (
              <div key={member.name} className=\"bg-white rounded-lg shadow-lg overflow-hidden\">
                <div className=\"h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center\">
                  <Users className=\"h-16 w-16 text-blue-600\" />
                </div>
                <div className=\"p-6\">
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-1\">
                    {member.name}
                  </h3>
                  <p className=\"text-blue-600 font-medium mb-3\">{member.role}</p>
                  <p className=\"text-gray-600 text-sm\">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Story Section */}
}
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
        <meta name=\"description\" content=\"Learn about Zion Tech Group, a leading provider of AI, cybersecurity, cloud infrastructure, and emerging technology solutions. Discover our mission, values, and team.\" />
        <meta name=\"keywords\" content=\"about zion tech group, technology company, AI solutions, cybersecurity, cloud services\" />
        <link rel=\"canonical\" href=\""https\": //ziontechgroup.com/about\" />
      </Helmet>
      <Helmet>;
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>;
        <meta name=\"description\" content=\"Learn about Zion Tech Group, a leading provider of AI, cybersecurity, cloud infrastructure, and emerging technology solutions. Discover our mission, values, and team.\" />;
        <meta name=\"keywords\" content=\"about zion tech group, technology company, AI solutions, cybersecurity, cloud services\" />;
        <link rel=\"canonical\" href=\""https\": //ziontechgroup && ziontechgroup.com/about\" />;
      </Helmet>;
        {/* Hero Section */}
        <section className=\"relative py-20 px-4\">;
          <div className=\"max-w-7xl mx-auto\">;
            <div className=\"text-center\">;
              <h1 className=\"text-5xl \"md\": text-6xl font-bold text-white mb-6\">;
                About <span className=\"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent\">Zion Tech Group</span>;
              </h1>;
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto mb-8\">;"
                Pioneering the future with cutting-edge technology solutions. We transform businesses through AI, cybersecurity, cloud infrastructure, and emerging technologies.;
              </p>;
            </div>;
          </div>;
        </section>;
        {/* Mission Section */}
        <section className=\"py-16 px-4\">;"
          <div className=\"max-w-7xl mx-auto\">;"
            <div className=\"grid grid-cols-1 \"lg\": grid-cols-2 gap-12 items-center\">;"
              <div>;
                <h2 className=\"text-4xl font-bold text-white mb-6\">Our Mission</h2>;"
                <p className=\"text-lg text-gray-300 mb-6\">;"
                  To empower businesses with transformative technology solutions that drive innovation, enhance security, and accelerate growth in the digital age.;
                </p>;
                <p className=\"text-lg text-gray-300 mb-8\">;"
                  We believe technology should be accessible, secure, and scalable. Our mission is to bridge the gap between cutting-edge innovation and practical business solutions.;
                </p>;
                <div className=\"flex items-center space-x-4\">;"
                  <div className=\"flex items-center space-x-2 text-cyan-400\">;"
                    <Target className=\"w-5 h-5\" />;"
                    <span className=\"font-semibold\">Mission-Driven</span>;"
                  </div>;
                  <div className=\"flex items-center space-x-2 text-blue-400\">;"
                    <Heart className=\"w-5 h-5\" />;"
                    <span className=\"font-semibold\">Client-Focused</span>;"
                  </div>;
                </div>;
              </div>;
              <div className=\"bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30\">;"
                <div className=\"grid grid-cols-2 gap-6\">;"
                  {stats && stats.map((stat, index) => (<div key={index} className=\"text-center\">;"
                      <div className=\"text-3xl font-bold text-cyan-400 mb-2\">{stat && stat.number}</div>;"
                      <div className=\"text-gray-300\">{stat && stat.label}</div>;"
                    </div>;
                  ))}
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Values Section */}
        <section className=\"py-16 px-4\">;"
          <div className=\"max-w-7xl mx-auto\">;"
            <div className=\"text-center mb-16\">;"
              <h2 className=\"text-4xl font-bold text-white mb-4\">Our Values</h2>;"
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto\">;"
                The principles that guide everything we do and shape our approach to technology and client relationships.;
              </p>;
            </div>;
            <div className=\"grid grid-cols-1 \"md\": grid-cols-2 "lg":grid-cols-4 gap-8\">;"
              {values && values.map((value, index) => (<div key={index} className=\"bg-slate-800/50 rounded-xl p-6 border border-slate-700 \"hover\": border-cyan-500/50 transition-all duration-300\">;"
                  <div className=\"w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4\">;"
                    <value && value.icon className=\"w-6 h-6 text-white\" />;"
                  </div>;
                  <h3 className=\"text-xl font-semibold text-white mb-3\">{value && value.title}</h3>;"
                  <p className=\"text-gray-300\">{value && value.description}</p>;"
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Team Section */}
        <section className=\"py-16 px-4\">;"
          <div className=\"max-w-7xl mx-auto\">;"
            <div className=\"text-center mb-16\">;"
              <h2 className=\"text-4xl font-bold text-white mb-4\">Our Team</h2>;"
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto\">;"
                A diverse group of experts, innovators, and problem-solvers dedicated to delivering exceptional technology solutions.;
              </p>;
            </div>;
            <div className=\"grid grid-cols-1 \"md\": grid-cols-3 gap-8\">;"
              <div className=\"bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center\">;"
                <div className=\"w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center\">;"
                  <Users className=\"w-10 h-10 text-white\" />;"
                </div>;
                <h3 className=\"text-xl font-semibold text-white mb-2\">Expert Engineers</h3>;"
                <p className=\"text-gray-300\">Certified professionals with deep expertise in AI, cloud, and cybersecurity technologies.</p>;"
              </div>;
              <div className=\"bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center\">;"
                <div className=\"w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center\">;"
                  <Award className=\"w-10 h-10 text-white\" />;"
                </div>;
                <h3 className=\"text-xl font-semibold text-white mb-2\">Industry Leaders</h3>;"
                <p className=\"text-gray-300\">Thought leaders and innovators who shape the future of technology and business.</p>;"
              </div>;
              <div className=\"bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center\">;"
                <div className=\"w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center\">;"
                  <Heart className=\"w-10 h-10 text-white\" />;"
                </div>;
                <h3 className=\"text-xl font-semibold text-white mb-2\">Client Advocates</h3>;"
                <p className=\"text-gray-300\">Dedicated professionals committed to your success and long-term partnership.</p>;"
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className=\"py-16 px-4\">;"
          <div className=\"max-w-4xl mx-auto text-center\">;"
            <h2 className=\"text-4xl font-bold text-white mb-6\">Ready to Transform Your Business?</h2>;"
            <p className=\"text-xl text-gray-300 mb-8\">;"
              Join the companies that trust Zion Tech Group for their technology needs. Let\'s build the future together.;'
            </p>;
