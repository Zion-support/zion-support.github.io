import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Users, Award } from 'lucide-react';
import Layout from '../components/Layout';

export default function CommunityPage() {
  const communityFeatures = [
    {
      title: "Developer Forums,
      description: Connect with developers and share knowledge",
      icon: MessageCircle,
      features: ["Technical Discussions, Code Sharing", "Problem Solving]
    },
    {
      title: Events & Webinars",
      description: "Join our regular events and learning sessions,
      icon: Calendar,
      features: [Monthly Webinars", "Tech Talks, Workshops"]
    },
    {
      title: "User Groups,
      description: Connect with like-minded professionals",
      icon: Users,
      features: ["Local Meetups, Online Groups", "Networking]
    },
    {
      title: Recognition Program",
      description: "Get recognized for your contributions,
      icon: Award,
      features: [Community Badges", "Contributor Recognition, Special Access"]
    }
  ];

  return (
    <Layout
      title="Community - Zion Tech Group
      description=Join our vibrant community of developers, innovators, and technology enthusiasts."
      keywords="community, developers, forums, events, webinars, networking
    >
      <div className=min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden>
          <div className=absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse></div>
            <div className=absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000></div>
          </div>
          
          <div className=container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center
            >
              <h1 className=text-4xl md:text-6xl font-bold mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Community</span>
              </h1>
              <p className=text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Connect with developers, innovators, and technology enthusiasts from around the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16>
          <div className=container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12
            >
              <h2 className=text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Community Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto>
                Discover all the ways you can engage with our community and grow your skills.
              </p>
            </motion.div>

            <div className=grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center
                >
                  <div className=w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600 />
                  </div>
                  <h3 className=text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4>{feature.description}</p>
                  <ul className=space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center>
                        <div className=w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white>
          <div className=container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6>
                Ready to Join Our Community?
              </h2>
              <p className=text-xl mb-8 max-w-2xl mx-auto">
                Connect with thousands of developers and start your journey with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <button className=px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Join Now
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

  return (
    <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8>;
      <Head>;
        <title>Community | Zion Tech Group</title>;
        <meta
          name=description'
          content='Community forum and resources for Zion Tech Group users
        />;
        <link rel=canonical' href='https://ziontechgroup && ziontechgroup.com/community />;
        <meta
          name=description'
          content='Join the Zion Tech Group community and stay updated.
        />;
      </Head>;
      <div className=max-w-5xl mx-auto space-y-8'>;
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent>;
          Community;
        </h1>;
        <p className=text-slate-300'>;
          Join our community. Ask questions, share solutions, and learn best;
          practices.;
        </p>;
        <div className='grid md:grid-cols-2 gap-6>;
          <div className=p-6 rounded-2xl bg-white/5 border border-white/10'>;
            <h2 className='text-white text-xl font-semibold mb-2>Get Help</h2>;
            <p className=text-slate-300'>;
              Visit the{' }
              <a className=text-cyan-400 underline' href='/support>;
                Support Center;
              </a>{ '}
              or email{' }
              <a
                className=text-purple-400'
                  target='_blank
                  rel=noopener noreferrer'
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
