import React from 'react'
import { Helmet } from 'react-helmet-async'
import {

} from 'lucide-react'

const About: React.FC = () => {
  const stats: [,
  ];

  const values: [,
    {
      icon: Target,,
      title= 'Innovation First',';,';,
      description: 'We stay ahead of technology trends to deliver solutions that give you a competitive edge in the market.',';,';,
      description: 'We stay ahead of technology trends to deliver solutions that give you a competitive edge in the market.',';,
    },
    {
      icon: Shield,,
      title= 'Enterprise Security',';,';,
      description: 'Bank-grade security measures protect your data and ensure compliance with industry standards.',';,';,
      description: 'Bank-grade security measures protect your data and ensure compliance with industry standards.',';,
    },
    {
      icon: TrendingUp,,
      title= 'Measurable Results',';,';,
      description: 'We deliver quantifiable outcomes with average 75% cost reduction and 10x efficiency gains.',';,';,
      description: 'We deliver quantifiable outcomes with average 75% cost reduction and 10x efficiency gains.',';,
    },
    {
      icon: Globe,,
      title= 'Global Reach',';,';,
      description: 'Serving clients worldwide with 24/7 support and localized solutions for international markets.',';,
    }
      description: 'Serving clients worldwide with 24/7 support and localized solutions for international markets.',';,
    }
  ];

  const team: [,
    {
      name: 'Kleber Santos',';,';,
      role: 'CEO & Founder',';,';,
      description: 'Technology visionary with 15+ years in AI and enterprise solutions.',';,';,
      email: 'kleber@ziontechgroup.com',';,';,
      email: 'kleber@ziontechgroup.com',';,
    },
    {
      name: 'AI Engineering Team',';,';,
      role: 'Machine Learning Specialists',';,';,
      description: 'Expert team of AI engineers specializing in cutting-edge machine learning technologies.',';,';,
      email: 'ai-team@ziontechgroup.com',';,';,
      email: 'ai-team@ziontechgroup.com',';,
    },
    {
      name: 'DevOps Specialists',';,';,
      role: 'Infrastructure Experts',';,';,
      description: 'Cloud and DevOps professionals ensuring scalable and secure infrastructure solutions.',';,';,
      email: 'devops@ziontechgroup.com',';,
    }
      email: 'devops@ziontechgroup.com',';,
    }
  ];

  return (
    <>
      <Helmet >
        <title>About Us - Zion Tech Group | Leading AI & Technology Solutions</title>
        <meta name="description", content ="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions that transform businesses worldwide." />"
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions that transform businesses worldwide." />
      </Helmet>
      
      <div className="text-left">
        <div className="text-left"
          {/* Header */}>
          <div className="text-left">
            <h1 className="text-left">,"
  About <span className="text-left">Zion Tech Group<"
            </h1>
            <p className="text-left">,"
      <div className="text-left">
        <div className="text-left">
          {/* Header */}
          <div className="text-left">
            <h1 className="text-left">,"
  About <span className="text-left">Zion Tech Group<"
            </h1>
            <p className="text-left">,"
  We are a leading provider of cutting-edge AI and IT solutions that transform businesses. 
              Our mission is to empower organizations with innovative technology that drives growth and success.
            </p>
          </div>

          {/* Stats */}
          <section className="text-left">
            <div className="text-left"
              {stats.map((stat, index) => {
                const Icon: stat.icon;,,
  return (
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="text-left">
            <div className="text-left">
              <div className="text-left">
                <div className="text-left">
                  <Target className="text-left" />"
                </div>
                <h2 className="text-left">Our Mission</h2>"
                <p className="text-left">,"
          <section className="text-left">
            <div className="text-left">
              <div className="text-left">
                <div className="text-left">
                  <Target className="text-left" />"
                </div>
                <h2 className="text-left">Our Mission</h2>"
                <p className="text-left">,"
  To democratize advanced AI and technology solutions, making them accessible and affordable 
                  for businesses of all sizes. We believe that cutting-edge technology should be a catalyst 
                  for growth, not a barrier to entry.
                </p>
              </div>
              <div className="text-left">
                <div className="text-left">
                  <Globe className="text-left" />"
                </div>
                <h2 className="text-left">Our Vision</h2>"
                <p className="text-left">,"
              <div className="text-left">
                <div className="text-left">
                  <Globe className="text-left" />"
                </div>
                <h2 className="text-left">Our Vision</h2>"
                <p className="text-left">,"
  To be the global leader in AI-powered business transformation, creating a world where 
                  every organization can leverage advanced technology to achieve unprecedented levels of 
                  efficiency, innovation, and success.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="text-left">
            <div className="text-left">
              <h2 className="text-left">Our Core Values</h2>"
              <p className="text-left">,"
  These principles guide everything we do and shape our commitment to excellence.
              </p>
            </div>
            <div className="text-left"
              {values.map((value, index) => {
                const Icon: value.icon;,,
  return (
                  <div key={index} className="text-left">
                    <div className="text-left">
                      <Icon className="text-left" />"
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Team */}
          <section className="text-left">
            <div className="text-left">
              <h2 className="text-left">Meet Our Team</h2>"
              <p className="text-left">,"
  Our diverse team of experts brings together decades of experience in AI, technology, and business transformation.
              </p>
            </div>
            <div className="text-left"
              {team.map((member, index) => (
                <div key={index} className="text-left">
                  <div className="text-left">
                    <Users className="text-left" />"
                  </div>
                  >
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Company Info */}
          <section className="text-left">
            <div className="text-left">
              <div className="text-left">
                <h2 className="text-left">Company Information</h2>"
                <p className="text-left">,"
  Zion Tech Group is headquartered in Delaware, USA, with a global presence serving clients worldwide.
                </p>
              </div>
              <div className="text-left">
                <div className="text-left">
                  <div className="text-left">
                    <MapPin className="text-left" />"
                  </div>
                  <h3 className="text-left">Headquarters</h3>
                  <p className="text-left">,"
          <section className="text-left">
            <div className="text-left">
              <div className="text-left">
                <h2 className="text-left">Company Information</h2>"
                <p className="text-left">,"
  Zion Tech Group is headquartered in Delaware, USA, with a global presence serving clients worldwide.
                </p>
              </div>
              <div className="text-left">
                <div className="text-left">
                  <div className="text-left">
                    <MapPin className="text-left" />"
                  </div>
                  <h3 className="text-left">Headquarters</h3>
                  <p className="text-left">,"
  364 E Main St STE 1008<br />
                    Middletown, DE 19709<br />
                    United States
                  </p>
                </div>
                <div className="text-left">
                  <div className="text-left">
                    <Phone className="text-left" />"
                  </div>
                  <h3 className="text-left">Contact</h3>
                  <p className="text-left">,"
                <div className="text-left">
                  <div className="text-left">
                    <Phone className="text-left" />"
                  </div>
                  <h3 className="text-left">Contact</h3>
                  <p className="text-left">,"
  Phone: +1 302 464 0950<br />,,
                    Email: kleber@ziontechgroup.com<br />,,
                    Available 24/7
                  </p>
                </div>
                <div className="text-left">
                  <div className="text-left">
                    <Award className="text-left" />"
                  </div>
                  <h3 className="text-left">Certifications</h3>
                  <p className="text-left">,"
                <div className="text-left">
                  <div className="text-left">
                    <Award className="text-left" />"
                  </div>
                  <h3 className="text-left">Certifications</h3>
                  <p className="text-left">,"
  AWS Certified<br />
                    Microsoft Partner<br />
                    Google Cloud Partner<br />
                    HIPAA Compliant
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
              </p>
              <div className="text-left">
                <a href="tel:+13024640950" ,"
  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center
                >
                  <Phone className="text-left" />,"
  Call +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" ,"
  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center
                >
                  <Mail className="text-left" />,"
          <section className="text-left">
            <div className="text-left">
              <h2 className="text-left">Ready to Work With Us?</h2>"
              <p className="text-left">,"
  Let's discuss how our technology solutions can transform your business.';';
              </p>
              <div className="text-left">
                <a href="tel:+13024640950" ,"
  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center
                >
                  <Phone className="text-left" />,"
  Call +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" ,"
  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center
                >
                  <Mail className="text-left" />,"
  Email Us Today
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;