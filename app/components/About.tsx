import React from "react";
import { CheckIcon, 
  UsersIcon, 
  TrophyIcon, 
  LightBulbIcon ;
   } from "@heroicons/react/24/outline"

const About: React.FC = () => {
  const stats = [
    { icon: UsersIcon, value: '500+', label: 'Happy Clients' },''
    { icon: TrophyIcon, value: '50+', label: 'Awards Won' },''
    { icon: LightBulbIcon, value: '1000+', label: 'Projects Completed' }''
  ];

  const values = [
    {
      title: 'Innovation',''
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.'''
    },
    {
      title: 'Excellence',''
      description: 'We are committed to delivering the highest quality solutions and services, ensuring every project exceeds expectations.'''
    },
    {
      title: 'Partnership',''
      description: 'We work closely with our clients as trusted partners, understanding their unique needs and goals.'''
    },
    {
      title: 'Integrity',''
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'''
    }
  ];

  return (
<>    <section className="py-20 bg-gray-50">""
      <div>""</div>
        <div>""
          {/* Content */}</div>
          <div></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">""
              About Zion Tech Group;
            </h2>
            <p>""
              We are a leading technology company specializing in AI and IT solutions. 
              Our mission is to empower businesses with innovative technology that drives ;
              growth, efficiency, and success.</p>
            </p>
            
            <div>""</div>
              <div>""</div>
                <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />""
                <p>""</p>
                  <strong className="text-gray-900">Expert Team:</strong> Our team consists of ""
                  highly skilled professionals with deep expertise in AI, cloud computing, 
                  and enterprise software development.
                </div>
    </>
              <div>""</div>
                <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />""
                <p>""</p>
                  <strong className="text-gray-900">Proven Track Record:</strong> We have ""
                  successfully delivered hundreds of projects for clients across various ;
                  industries and company sizes.
                </div>
              <div>""</div>
                <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />""
                <p>""</p>
                  <strong className="text-gray-900">Cutting-Edge Technology:</strong> We ""
                  leverage the latest technologies and best practices to deliver ;
                  innovative solutions that give our clients a competitive advantage.
                </div>

            {/* Stats */}
            <div>""
              {stats.map((stat, index) => (</div>
                <div>""</div>
                  <div>""</div>
                    <stat.icon className="h-8 w-8 text-blue-600" />""
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
              )})}
            </div>

          {/* Image/Visual */}
          <div>""</div>
            <div>""</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p>""
                To democratize access to advanced technology and AI solutions, 
                enabling businesses of all sizes to compete and thrive in the ;
                digital economy.</p>
              </p>
              
              <div>""</div>
                <div>""</div>
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Innovation-driven approach</div>
                <div>""</div>
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Client-focused solutions</div>
                <div>""</div>
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Sustainable growth strategies</div>

        {/* Values Section */}
        <div>""</div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">""
            Our Core Values;
          </h3>
          <div>""
            {values.map((value, index) => (</div>
              <div>""</div>
                <div>""</div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">""
                  {value.title}
                </h4>
                <p>""
                  {value.description}</p>
                </div>
            ))}
          </div>
      </section>
  );
};

export default About;