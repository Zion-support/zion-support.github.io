import React from "react";
import { Helmet } from "react-helmet-async";import { Helmet } from "react-helmet-async";
import { CheckCircleIcon, UserGroupIcon, LightBulbIcon, ShieldCheckIcon, RocketLaunchIcon, HeartIcon, ArrowRightIcon, StarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"; export default function AboutPage() { return ( <>; <Helmet>; <title>About Us - Zion Tech Group</title>; <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions, cybersecurity, and digital transformation services." /> </Helmet> } ]; const AboutPage: React.FC = () => { const stats = [ { number: '500+', label: 'Projects Completed' }, { number: '50+', label: 'Happy Clients' }, { number: '99.9%', label: 'Uptime Guarantee' }, { number: '4+', label: 'Years Experience' } ]; const values = [ { icon: LightBulbIcon, title: 'Innovation', description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.' }, { icon: ShieldCheckIcon, title: 'Reliability', description: 'Our solutions are built with security and reliability as core principles.' }, { icon: HeartIcon, title: 'Customer Focus', description: 'We prioritize our clients\' success and satisfaction in everything we do.' }, { icon: RocketLaunchIcon, title: 'Excellence', description: 'We strive for excellence in every project, delivering quality that exceeds expectations.' } ]; const team = [ { name: 'Kleber Santos', role: 'Founder & CEO', description: 'Visionary leader with 15+ years in AI and technology innovation.', image: '/api/placeholder/300/300' }, { name: 'Sarah Johnson', role: 'CTO', description: 'Technical expert specializing in cloud infrastructure and AI systems.', image: '/api/placeholder/300/300' }, { name: 'Michael Chen', role: 'Lead AI Engineer', description: 'Machine learning specialist with expertise in NLP and computer vision.', image: '/api/placeholder/300/300' } ]; return ( <> <Helmet> <title>About Us - Zion Tech Group</title> <meta name="description" content="Learn about Zion Tech Group's mission and team" /> </Helmet> <div className="min-h-screen bg-white"> { /* Hero Section */ } <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
Empowering businesses through innovative technology solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Founded in 2020, we've been at the forefront of digital transformation, 
              helping companies leverage the power of artificial intelligence, cybersecurity, 
              and cloud technologies to achieve unprecedented growth.            </p>
            </p>
          </div>
        </section>
        { /* Stats Section */ }
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              { stats.map((stat, index) => (
                <div key={index } className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    { stat.number }
                  </div>
                  <div className="text-gray-600">{ stat.label }</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Values Section */ }
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              { values.map((value, index) => (
                <div key={index } className="text-center">
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    { value.title }
                  </h3>
                  <p className="text-gray-600">{ value.description }</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Work With Us?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help transform your business 
              and drive growth in the digital age.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutPage;
    </>
  );
};
export default AboutPage;
};
export default AboutPage;