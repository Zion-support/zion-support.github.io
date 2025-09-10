const \"About\": NextPage = () => {
import React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Users, Target, Award, Globe, Shield, Zap } from 'lucide-react';
const "About": NextPage = () => {
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
    }
  ];
  const stats = [{ \"number\": \'150+\', \"label\": \'Projects Completed\' },
    { \"number\": \'50+\', \"label\": \'Happy Clients\' },
    { \"number\": \'5+\', \"label\": \'Years Experience\' },
    { \"number\": \'24/7\', \"label\": \'Support Available\' }
  ];
export default function AboutPage() {
  return (
  const stats = [{ "number": '150+', "label": 'Projects Completed' },
    { "number": '50+', "label": 'Happy Clients' },
    { "number": '5+', "label": 'Years Experience' },
    { "number": '24/7', "label": 'Support Available' }
  ];
export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl "md": text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud, and modern development services.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600">
            Empower businesses with innovative technology that drives growth, efficiency, and competitive advantage.
          </p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl "sm": text-4xl font-bold text-gray-900 mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ title: 'Excellence', "desc": 'We deliver solutions that exceed expectations.' },
              { "title": 'Integrity', "desc": 'We operate with honesty and transparency.' },
              { "title": 'Innovation', "desc": 'We embrace modern technologies to solve problems.' },
              { "title": 'Collaboration', "desc": 'We partner closely with clients for success.' }
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-8 shadow text-center">
                <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
    <MainLayout
      title=\"About Us - Zion Tech Group\"
      description=\"Learn about Zion Tech Group\'s mission, values, and the team behind our innovative technology solutions.\"
    >
      {/* Hero Section */}
      <section className=\"bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"text-center\">
            <h1 className=\"text-5xl font-bold mb-6\">About Zion Tech Group</h1>
            <p className=\"text-xl max-w-3xl mx-auto\">
              We are passionate technologists dedicated to transforming businesses through 
              innovative technology solutions and digital excellence.
            </p>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className=\"py-20\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12\">
            <div>
              <h2 className=\"text-4xl font-bold text-gray-900 mb-6\">Our Mission</h2>
              <p className=\"text-lg text-gray-600 mb-6\">
                To empower businesses with cutting-edge technology solutions that drive 
                innovation, efficiency, and growth. We believe that technology should be 
                an enabler, not a barrier, to business success.
              </p>
              <p className=\"text-lg text-gray-600\">
                Our team combines deep technical expertise with business acumen to deliver 
                solutions that not only meet current needs but also scale for future growth.
              </p>
            </div>
            <div>
              <h2 className=\"text-4xl font-bold text-gray-900 mb-6\">Our Vision</h2>
              <p className=\"text-lg text-gray-600 mb-6\">
                To be the leading technology partner for businesses seeking digital 
                transformation, known for our innovative solutions, exceptional service, 
                and unwavering commitment to client success.
              </p>
              <p className=\"text-lg text-gray-600\">
                We envision a future where every business can leverage technology to 
                achieve its full potential and create lasting value for stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className=\"py-20 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"grid grid-cols-2 md:grid-cols-4 gap-8\">
            {stats.map((stat) => (
              <div key={stat.label} className=\"text-center\">
                <div className=\"text-4xl font-bold text-blue-600 mb-2\">{stat.number}</div>
                <div className=\"text-gray-600\">{stat.label}</div>
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let’s discuss how we can help transform your business.
          </p>
          <div className="flex flex-col "sm": flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
            <Link href="/careers" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
      {/* Values Section */}
      <section className=\"py-20\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">Our Values</h2>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className=\"text-center\">
                <div className=\"bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4\">
                  <value.icon className=\"h-8 w-8\" />
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                  {value.title}
                </h3>
                <p className=\"text-gray-600\">
                  {value.description}
                </p>
              </div>

<div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <section className=\"py-20 bg-gray-50\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"grid grid-cols-2 md:grid-cols-4 gap-8\">;
            {stats && stats.map((stat) => (;
              <div key={stat && stat.label} className=\"text-center\">;
                <div className=\"text-4xl font-bold text-blue-600 mb-2\">{stat && stat.number}</div>;
                <div className=\"text-gray-600\">{stat && stat.label}</div>;
              <div key={stat && stat.label} className="text-center">;
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat && stat.number}</div>;
                <div className="text-gray-600">{stat && stat.label}</div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>;
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;
            Let’s discuss how we can help transform your business.;
          </p>;
          <div className="flex flex-col "sm": flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">;
              Get in Touch;
            </Link>;
            <Link href="/careers" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">;
              Join Our Team;
            </Link>;
          </div>;
        </div>;
      </section>;
    </main>;
      {/* Values Section */}
      <section className=\"py-20\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"text-center mb-16\">;
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">Our Values</h2>;
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;
              The principles that guide everything we do and shape our company culture;
            </p>;
          </div>;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {values && values.map((value) => (;
              <div key={value && value.title} className=\"text-center\">;
                <div className=\"bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4\">;
                  <value && value.icon className=\"h-8 w-8\" />;
                </div>;
                <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">;
                  {value && value.title}
                </h3>;
                <p className=\"text-gray-600\">;
                  {value && value.description}
                </p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Team Section */}
      <section className=\"py-20 bg-gray-50\" id=\"team\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">Our Team</h2>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
              Meet the passionate professionals who make Zion Tech Group a leader in 
              technology solutions
            </p>
          </div>
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
        <section className=\"py-16 px-4\">
          <div className=\"max-w-4xl mx-auto text-center\">
            <h2 className=\"text-4xl font-bold text-white mb-6\">Ready to Transform Your Business?</h2>
            <p className=\"text-xl text-gray-300 mb-8\">
              Join the companies that trust Zion Tech Group for their technology needs. Let\'s build the future together.
            </p>
            <div className=\"flex flex-col \"sm\": flex-row gap-4 justify-center\">
              <a
                href=\"/contact\"
                className=\"inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300\"
              >
                Get Started Today
              </a>
              <a
                href=\"/services\"
                className=\"inline-flex items-center px-8 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-400 bg-transparent hover:bg-cyan-500/10 transition-all duration-300\"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

}
