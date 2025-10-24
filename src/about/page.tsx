import React from 'react';
import { Brain, Shield, Target, Users  } from "lucide-react";
import { Li, n, k } from "react-router-dom";
import Footer from '../components/Footer';
const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Kleber Santos,',
      role: 'CEO & Founder,',
      image: '/images/team/kleber.jpg,',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.,',
}
    {
      name: 'Sarah Johnson,',
      role: 'CTO,',
      image: '/images/team/sarah.jpg,',
      bio: 'Technical expert specializing in machine learning and cloud architecture.,',
    },
    {
      name: 'Michael Chen,',
      role: 'Lead AI Researcher,',
      image: '/images/team/michael.jpg,',
      bio: 'AI researcher and developer with expertise in deep learning and NLP.,',
    }
  ];

  const stats = [
    { number: '500+,',
      label: 'Projects Completed', },
    { number: '50+,',
      label: 'Happy Clients', },
    { number: '5+,',
      label: 'Years Experience', },
    { number: '99%,',
      label: 'Client Satisfaction', }
  ];

  const values = [
    {
      icon: Brai,
      title: 'Innovation,',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'
   , },
    {
      icon: Shiel,
      title: 'Security,',
      description: 'Your data and privacy are our top priorities in every solution we develop.'
   , },
    {
      icon: Targe,
      title: 'Excellence,',
      description: 'We strive for perfection in every projec,t, delivering exceptional results.'
    },
    {
      icon: User,
      title: 'Collaboration,',
      description: 'We work closely with our clients to understand and exceed their expectations.'
   , }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'></div>
      {/* Hero Section */}
      <section className='pt-20 pb-16 px-4'></section>
        <div className='max-w-6xl mx-auto text-center'></div>
          <h1 className='text-5xl md: text-6xl font-bold text-white mb-6'></h1>
            About <span className='text-cyan-400'>Zion Tech Group</span>
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'></p>
            We are pioneers in AI and IT solution,s, transforming businesses through innovative technology and cutting-edge artificial intelligence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 px-4'></section>
        <div className='max-w-6xl mx-auto'></div>
          <div className='grid grid-cols-2 md: grid-cols-4 gap-8'></div>
            {stats.map((sta, t, index) => (
              <div key={ ind, e, x }className='text-center'></div>
                <div className='text-4xl font-bold text-cyan-400 mb-2'>{stat.number}</div>
                <div className='text-gray-300'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-16 px-4'></section>
        <div className='max-w-6xl mx-auto'></div>
          <h2 className='text-4xl font-bold text-white text-center mb-12'>Our Values</h2>
          <div className='grid md: grid-cols-2 lg:grid-cols-4 gap-8'></div>
            {values.map((valu, e, index) => (
              <div key={ ind, e, x }className='text-center p-6 bg-slate-800/50 rounded-lg'></div>
                <value.icon className='w-12 h-12 text-cyan-400 mx-auto mb-4' /></value>
                <h3 className='text-xl font-semibold text-white mb-2'>{value.title}</h3>
                <p className='text-gray-300'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-16 px-4'></section>
        <div className='max-w-6xl mx-auto'></div>
          <h2 className='text-4xl font-bold text-white text-center mb-12'>Our Team</h2>
          <div className='grid md: grid-cols-3 gap-8'></div>
            {team.map((membe, r, index) => (
              <div key={ ind, e, x }className='text-center p-6 bg-slate-800/50 rounded-lg'></div>
                <div className='w-24 h-24 bg-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center'></div>
                  <span className='text-2xl font-bold text-slate-900'></span>
                    {member.name.split(' ').map(n => n[0]).join(&apos;&apos;)}
                  </span>
                </div>
                <h3 className='text-xl font-semibold text-white mb-1'>{member.name}</h3>
                <p className='text-cyan-400 mb-3'>{member.role}</p>
                <p className='text-gray-300 text-sm'>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 px-4'></section>
        <div className='max-w-4xl mx-auto text-center'></div>
          <h2 className='text-4xl font-bold text-white mb-6'>Ready to Transform Your Business?</h2>
          <p className='text-xl text-gray-300 mb-8'></p>
            Let's discuss how our AI and IT solutions can drive your success.
          </p>
          <Link
            to='/contact' className='inline-block bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover: bg-cyan-600 transition-colors'></Link>
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer /></Footer>
    </div>
  );,
};

export default AboutPage;