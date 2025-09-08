
const AboutPage: NextPage = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Award className="w-8 h-8" /> }, { number: '50+', label: 'Happy Clients', icon: <Users className="w-8 h-8" /> }, { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-8 h-8" /> }, { number: '24/7', label: 'Support Available', icon: <Globe className="w-8 h-8" /> } ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value.'
    }, {
      icon: <Heart className="w-8 h-8" />,
      title: 'Customer Focus',
      description: 'Our clients\' success is our success. We build lasting partnerships based on trust, transparency, and mutual growth.'
    }, {
      icon: <Zap className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from code to customer service.'
    }, {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that directly impact your business growth and efficiency.'
    }
  ];

  const team = [
    {
      name: 'Kleber Silva',
      role: 'Founder & CEO',
      bio: 'Technology visionary with over 15 years of experience in software development and business transformation.',
      image: '/team/kleber.jpg'
    }, {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Expert in cloud architecture and AI/ML solutions with a passion for scalable, innovative technology.',
      image: '/team/sarah.jpg'
    }, {
      name: 'Michael Chen',
      role: 'Head of Engineering',
      bio: 'Full-stack development specialist focused on creating robust, user-centric applications.',
      image: '/team/michael.jpg'
    }, {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'UX/UI expert dedicated to creating intuitive, beautiful, and functional user experiences.',
      image: '/team/emily.jpg'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize technology solutions for businesses of all sizes.'
    }, {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise AI solution, marking the beginning of our growth journey.'
    }, {
      year: '2022',
      title: 'Micro SaaS Launch',
      description: 'Introduced our first suite of micro SaaS solutions, helping small businesses scale efficiently.'
    }, {
      year: '2023',
      title: 'Team Expansion',
      description: 'Grew our team to 20+ experts and expanded our service offerings to include comprehensive IT services.'
    }, {
      year: '2024',
      title: 'Global Reach',
      description: 'Serving clients across multiple countries and industries, with a focus on AI and digital transformation.'
    }
    "icon": Users,
    "title": 'Collaboration','
    "description": 'We work closely with our clients as partners, understanding their unique challenges and delivering tailored solutions.''
  },
  {
    }
    "icon": Target,
    "title": 'Excellence','
    "description": '$1''
  }];
const team = [;
  {
    }
    "name": 'John Smith','
    "role": 'CEO & Founder','
    "expertise": 'Strategic Leadership','
    "experience": '15+ years in technology leadership''
  },
  {
    }
    "name": 'Sarah Johnson','
    "role": 'CTO','
    "expertise": 'Technical Innovation','
    "experience": '12+ years in AI and cloud technologies''
  },
  {
    }
    "name": 'Mike Chen','
    "role": 'Lead Developer','
    "expertise": 'Full-Stack Development','
    "experience": '10+ years in modern web technologies''

];
const achievements = [;
  {
    }
    "stat": '500+','
    "title": 'Projects Completed','
    "description": 'Successfully delivered projects across various industries','
    "icon": CheckCircle
  },
  {
    }
    "stat": '99.9%','
    "title": 'Client Satisfaction','
    "description": 'Consistently high client satisfaction ratings','
    "icon": Star
  },
  {
    }
    "stat": '24/7','
    "title": 'Support Available','
    "description": 'Round-the-clock support for all our clients','
    "icon": Clock
  },
  {
    }
    "stat": '50+','
    "title": 'Team Members','
    "description": 'Expert professionals dedicated to your success','
    "icon": Users

];
export default function AboutPage() {
}
return (;
    <MainLayout,
title="About Us - Zion Tech Group""
      description="Learn about Zion Tech Group's mission, values, and team. We're dedicated to delivering cutting-edge technology solutions.""
      keywords="about us, company, team, mission, values, technology solutions""
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
        <div className="container mx-auto px-4 py-16">"
          <motion.div,
initial={{ "opacity": 0, "y": 20 }}
            animate={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.6 }}
            className="text-center mb-16""
          >
            <h1 className="text-5xl font-bold text-white mb-6">"
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              We are a leading technology company dedicated to transforming businesses,
through innovative AI solutions, IT services, and micro SaaS applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-4 gap-8 mb-16">"
            {achievements.map((achievement, index) => (
              <motion.div
}
key={index}
                initial={{ "opacity": 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6, "delay": index * 0.1 }}
                className="text-center""
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{achievement.stat}</div>"
                <div className="text-white font-semibold mb-2">{achievement.title}</div>"
                <div className="text-gray-300 text-sm">{achievement.description}</div>"
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 "md":grid-cols-2 gap-8 mb-16">"
            {values.map((value, index) => (
              <motion.div
}
key={index}
                initial={{ "opacity": 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6, "delay": index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20""
              >
                <div className="flex items-center mb-4">"
                  <value.icon className="h-8 w-8 text-blue-400 mr-3" />"
                  <h3 className="text-2xl font-bold text-white">{value.title}</h3>"
                </div>
                <p className="text-gray-300">{value.description}</p>"
              </motion.div>
            ))}
          </div>

          <motion.div,
initial={{ "opacity": 0, "y": 20 }}
            animate={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.6, "delay": 0.8 }}
            className="bg-blue-600 rounded-xl p-8 text-center""
          >
            <h2 className="text-3xl font-bold text-white mb-4">"
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">"
              Contact us today to discuss your project and see how we can help.
            </p>
            <div className="flex flex-col "sm":flex-row items-center justify-center space-y-4 "sm":space-y-0 "sm":space-x-8">"
              <div className="flex items-center text-white">"
                <Phone className="h-5 w-5 mr-2" />"
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-white">"
                <Mail className="h-5 w-5 mr-2" />"
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-white">"
                <MapPin className="h-5 w-5 mr-2" />"
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  )};

  ];
const milestones = [;
    {
      }
      "year": '2020','
      "title": 'Company Founded','
      "description": 'Zion Tech Group was established with a vision to revolutionize technology through AI and quantum computing.''
    };
    {
      }
      "year": '2021','
      "title": 'First AI Solutions','
      "description": 'Launched our first AI-powered business intelligence and automation solutions.''
    };
    {
      }
      "year": '2022','
      "title": 'Quantum Breakthrough','
      "description": 'Developed quantum-resistant cybersecurity solutions and quantum neural networks.''
    };
    {
      }
      "year": '2023','
      "title": 'Space Technology','
      "description": 'Expanded into space technology with AI-powered satellite management systems.''
    };
    {
      }
      "year": '2024','
      "title": 'Global Expansion','
      "description": 'Reached 50+ enterprise clients and expanded our service portfolio to 100+ solutions.''
    };
    {
      }
      "year": '2025','
      "title": 'Future Vision','
      "description": '$1''
  }];
import Button from '../components/ui/Button';'
export default function AboutPage() {
}
return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">"
      <Head>
        <title>About | Zion Tech Group</title>
        <meta name="description" content="About Zion Tech "Group": AI, micro SaaS, and enterprise IT innovators." />"
        <link rel="canonical" href=""https"://ziontechgroup.com/about" />"
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 "sm":px-6 "lg":px-8 bg-black text-white">"
        <div className="max-w-6xl mx-auto space-y-10">"
          <header className="text-center">"
            <h1 className="text-5xl "md":text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">About Zion Tech Group</h1>"
            <p className="text-gray-300 text-lg">We build real, outcome-oriented AI, micro SaaS, and enterprise IT solutions.</p>"
          </header>

          <section className="grid grid-cols-1 "md":grid-cols-3 gap-6">"
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">"
              <div className="text-sm text-gray-400 mb-2">What we do</div>"
              <div className="text-gray-200">200+ production-ready services across AI, DevOps, Security, Cloud, and Data.</div>"
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">"
              <div className="text-sm text-gray-400 mb-2">How we deliver</div>"
              <div className="text-gray-200">Template-driven deployments, SLAs, clear pricing, and measurable ROI.</div>"
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">"
              <div className="text-sm text-gray-400 mb-2">Who we serve</div>"
              <div className="text-gray-200">Startups to enterprises across healthcare, fintech, manufacturing, media, and public sector.</div>"
            </div>
          </section>

          <section className="grid grid-cols-1 "md": grid-cols-2 gap-6">"
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">"
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>"
              <ul className="text-gray-300 space-y-2">"
                <li>"Mobile": <a className="text-cyan-300" href=""tel":+13024640950">+1 302 464 0950</a></li>"
                <li>E-"mail": <a className="text-purple-300" href=""mailto":kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>"
                <li>"Address": <span className="text-gray-200">364 E Main St STE 1008 Middletown DE 19709</span></li>"
                <li>"Website": <a className="text-cyan-300" href=""https"://ziontechgroup.com">ziontechgroup.com</a></li>"
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">"
              <h2 className="text-2xl font-semibold mb-3">Get Started</h2>"
              <p className="text-gray-300 mb-4">Book a consultation to map your roadmap to shipped outcomes.</p>"
              <div className="flex gap-3">"
                <Button href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Talk to Sales</Button>"
                <Button href="/pricing" variant="outline" className="border border-gray-600 text-gray-200">Pricing</Button>"
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )

export default AboutPage;
import React from './react';'
import Layout from "../components / Layout";;"
export default /**
 * About - Function description
 */
function About() {
}
return (;
    <Layout;
      title="About Us - Zion Tech Group";"
      description="Learn about Zion Tech Group, our mission, team, and commitment to delivering cutting - edge technology solutions.";"
    >;
      <div className="min - h-screen bg - gray - 50 py - 20">;"
        <div className="container mx - auto px - 4">;"
          <div className="text - center mb - 12">;"
            <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">;"
              About Zion Tech Group;
            </h1>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;"
              Leading technology solutions provider specializing in AI,
              cybersecurity, and digital transformation.;
            </p>;
          </div>;
          <div className="text - center">;"
            <p className="text - gray - 600">About page is under construction.</p>;"
          </div>;
        </div>;
      </div>;
    </Layout>);