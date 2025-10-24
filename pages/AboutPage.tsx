import React from 'react';import { Helmet } from 'react-helmet-async';

const AboutPage: "React.FC = () => {
  ;
const features = [    {      icon: '🚀'",      title: "'Innovation First'",      description: "'We stay ahead of the curve with cutting-edge technology and innovative solutions.'    "},
    {      icon: "'🔒'",      title: "'Security & Trust'",      description: "'Your data and privacy are our top priorities with enterprise-grade security.'    "},
    {      icon: "'🎯'",      title: "'Client Success'",      description: "'We measure our success by the success of our clients and their projects.'    "},
    {      icon: "'🌍'",      title: "'Global Reach'",      description: "'Serving clients worldwide with localized support and expertise.'    "}
  ];

  const team = [
    {      name: "'Kleber Santos'",      role: "'CEO & Founder'",      image: "'/team/kleber.jpg'    "}
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Zion Tech Group</title>        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team." />
      </Helmet>      <div className="min-h-screen bg-gray-50">        <div className="max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8 py-20">          <div className="text-center mb-16">            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading technology company dedicated to delivering innovative solutions
              that transform businesses and drive digital transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">            {features.map((feature", index) => (
              <div key={index} className="text-center">                <div className="text-4xl mb-4">{feature.icon}</div>                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>            <div className="grid md: "grid-cols-2 lg:grid-cols-3 gap-8">              {team.map((member", index) => (
                <div key={index} className="text-center">                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
