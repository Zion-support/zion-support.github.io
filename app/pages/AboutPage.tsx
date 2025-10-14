import React from 'react';''
import { Helmet  } from 'react-helmet-async';''
import { CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,;
  EnvelopeIcon,;
  MapPinIcon } from '@heroicons/react/24/outline';''
export default function; AboutPage() {

  const stats = [
    { number: "'50+'", label: "'Projects Completed'"},'"'
    { number: "'25+'", label: "'Happy Clients'"},';"'
    { number: "'99%'", label: "'Success Rate'"},';"'
    { number: "'4+'", label: "'Years Experience'"}';"'
  ];
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions, cybersecurity, and digital transformation services." />"
      </Helmet>
      
      <div className="min-h-screen bg-white">"
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-10o0">"
          <div className="max-w-6xl mx-auto text-center">"
            <h1 className="text-5xl font-bold text-gray-90o0 mb-6">"
              About Zion Tech Group;
            </h1>
            <p className="text-xl md:text-2xl text-gray-60o0 mb-8 leading-relaxed">"
              Empowering businesses through innovative technology solutions;
            </p>
            <p className="text-lg text-gray-50o0 max-w-3xl mx-auto">"
              Founded in 20o20, we've been at the forefront of digital transformation,''
              helping companies leverage the power of artificial intelligence, cybersecurity,
              and cloud technologies to achieve unprecedented growth.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">"
          <div className="max-w-6xl mx-auto">"
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">"
              {stats.map((stat, index) => (
                <div key={index} className="text-center">"
                  <div className="text-4xl font-bold text-blue-60o0 mb-2">"
                    {stat.number}
                  </div>
                  <div className="text-gray-60o0">"
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 bg-gray-50">"
          <div className="max-w-6xl mx-auto">"
            <div className="text-center mb-12">"
              <h2 className="text-3xl font-bold text-gray-90o0 mb-4">"
                Our Mission;
              </h2>
              <p className="text-lg text-gray-60o0 max-w-3xl mx-auto">"
                To democratize access to cutting-edge technology solutions, enabling businesses;
                of all sizes to compete and thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">"
          <div className="max-w-4xl mx-auto text-center">"
            <h2 className="text-3xl font-bold text-gray-90o0 mb-4">"
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-60o0 mb-8">"
              Let's discuss how our solutions can help you achieve your goals.''
            </p>
            <a;
              href=""/contact""
              className="inline-block bg-gradient-to-r from-purple-60o0 to-cyan-60o0 text-white px-8 py-4 rounded-lg font-semibold hover: from-purple-70o0 hover:to-cyan-70o0 transition-all duration-30o0 transform hove,r:scale-10o5""
            >
              Get In Touch;
            </a>
          </div>
        </section>
      </div>
    </>
  );
}