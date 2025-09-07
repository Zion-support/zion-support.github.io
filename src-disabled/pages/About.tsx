import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Target } from 'lucide-react';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
 ;
  const values = [
    {
      icon: <Target className=\"w-8 h-8\" />,
      title: 'Innovation First',
  description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology and creative solutions.'}
   ,}
},
    {
      icon: <Users className=\"w-8 h-8\" />,
      title: 'Client-Centric',}
  description: 'Your success is our success. We build lasting partnerships based on trust, transparency, and results.'}
    },
    {
      icon: <Award className=\"w-8 h-8\" />,
      title: 'Excellence',}
  description: 'We maintain the highest standards in everything we do, from code quality to customer service.'}
    }
  ];

const team = [
    {
      name: 'Sarah Johnson',
  role: 'CEO & Founder',
      bio: '15+ years in AI and enterprise software. Former Google AI researcher.',
  image: '/team/sarah-johnson.jpg'}
   ,}
},
    {
      name: 'Mike Chen',
  role: 'CTO',
      bio: 'Expert in cloud architecture and scalable systems. Ex-AWS principal engineer.',
  image: '/team/mike-chen.jpg'}
   ,}
},
    {
      name: 'Emily Davis',
  role: 'Head of Design',
      bio: 'Award-winning UX designer with a focus on accessibility and user experience.',
  image: '/team/emily-davis.jpg'}
   ,}
}
  ];

const stats = [
    { number: '500+',}
  label: 'Projects Delivered',}
},
    { number: '100+',}
  label: 'Happy Clients',}
},
    { number: '5+',}
  label: 'Years Experience',}
},
    { number: '24/7',}
  label: 'Support Available',}
}
  ];

  return (
    <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900\" />
      <Header />
      
      <main />
        {/* Hero Section */}
        <section className=\"pt-20 pb-16 px-4\" />
          <div className=\"max-w-7xl mx-auto\" />
            <div className=\"text-center mb-16\" />
              <h1 className=\"text-5xl md: text-7xl font-bold text-white mb-6\" />
                About <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500\" />Zion Tech Group</span>
              </h1>
              <p className=\"text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed\" />
                We're a team of passionate technologists dedicated to transforming businesses;
through innovative AI and technology solutions.
              </p>
            </div>

            {/* Stats *,}
}
            <div className=\"grid grid-cols-2 md:grid-cols-4 gap-8 mb-16\" />
              {stats.map((stat, index) => (}
                <div key={index} className=\"text-center\" />
                  <div className=\"text-4xl md: text-5xl font-bold text-white mb-2\" />
                    {stat.number}
                  </div>
                  <div className=\"text-gray-400 text-sm md:text-base\" />
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section *,}
}
        <section className=\"py-20 bg-gray-900/50\" />
          <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\" />
            <div className=\"text-center mb-16\" />
              <h2 className=\"text-4xl md:text-5xl font-bold text-white mb-6\" />
                Our <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500\" />Mission</span>
              </h2>
              <p className=\"text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed\" />
                To democratize access to cutting-edge AI and technology solutions, 
                empowering businesses of all sizes to compete and thrive in the digital age.
              </p>
            </div>

            <div className=\"grid md:grid-cols-3 gap-8\" />
              {values.map((value, index) => (}
                <div key={index} className=\"text-center\" />
                  <Card className=\"p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover: bg-gray-800/70 transition-all duration-300 hover:border-cyan-400/50\" />
                    <div className=\"text-cyan-400 mb-4 flex justify-center\" />
                      {value.icon}
                    </div>
                    <h3 className=\"text-xl font-semibold text-white mb-4\" />
                      {value.title}
                    </h3>
                    <p className=\"text-gray-300 leading-relaxed\" />
                      {value.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section *,}
}
        <section className=\"py-20\" />
          <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\" />
            <div className=\"text-center mb-16\" />
              <h2 className=\"text-4xl md:text-5xl font-bold text-white mb-6\" />
                Meet Our <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500\" />Team</span>
              </h2>
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto\" />
                The brilliant minds behind our innovative solutions;
              </p>
            </div>

            <div className=\"grid md:grid-cols-3 gap-8\" />
              {team.map((member, index) => (}
                <div key={index} className=\"text-center group\" />
                  <Card className=\"p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover: bg-gray-800/70 transition-all duration-300 hover:border-cyan-400/50\" />
                    <div className=\"w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300\" />
                      <span className=\"text-black font-bold text-2xl\" />
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className=\"text-xl font-semibold text-white mb-2\" />
                      {member.name}
                    </h3>
                    <p className=\"text-cyan-400 mb-4 font-medium\" />
                      {member.role}
                    </p>
                    <p className=\"text-gray-300 leading-relaxed\" />
                      {member.bio}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=\"py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20\" />
          <div className=\"max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8\" />
            <h2 className=\"text-4xl md:text-5xl font-bold text-white mb-6\" />
              Ready to Work With Us?
            </h2>
            <p className=\"text-xl text-gray-300 mb-8 max-w-2xl mx-auto\" />
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\" />
              <Link;
to=\"/contact\"
                className=\"inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500\"
               />
                Get Started Today;
                <ArrowRight className=\"ml-2 h-5 w-5\" />
              </Link>
              <Link;
to=\"/services\"
                className=\"inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white\"
               />
                View Our Services;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};


export default About;