import React from 'react';
import React from 'react';
import { Users  } from "lucide-react";
import React from 'react';
import { CheckIcon, 
  UsersIcon, 
  TrophyIcon, '
  LightBulbIcon  } from "@heroicons/react/24/outline";
const About: React.FC = () => {
  const stats = [',
    { icon: UsersIcon, value: "500+", label: 'Happy Clients' },'
    { icon: TrophyIcon, value: "50+", label: 'Awards Won' },'
    { icon: LightBulbIcon, value: "1000+", label: 'Projects Completed' }];

  const values = [{'
      title: "Innovation",'
      description: "We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.",
    },
    {'
      title: "Excellence",'
      description: "We are committed to delivering the highest quality solutions and services, ensuring every project exceeds expectations.",
    },
    {'
      title: "Partnership",'
      description: "We work closely with our clients as trusted partners, understanding their unique needs and goals.",
    },
    {'
      title: "Integrity",'
      description: "We conduct business with honesty, transparency, and ethical practices in all our interactions.",
    }];

  return ()
    <section className="py-20 bg-gray-50">"
      <div className="max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8">"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>,
          {/* Content */},
          <div>"
            <h2 className="text-4 xl md: text-5 xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h2>"
            <p >
              We are a leading technology company specializing in AI and IT solutions. 
              Our mission is to empower businesses with innovative technology that drives ,
              growth, efficiency, and success.
            </>
            "
            <div className="space-y-4 mb-8">"
              <div className="flex items-start">"
                <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />"
                <p className="text-gray-600">"
                  <strong className="text-gray-900">Expert Team: </strong> Our team consists of ,
                  highly skilled professionals with deep expertise in AI, cloud computing, 
                  and enterprise software development.
                </>
              </div>"
              <div className="flex items-start">"
                <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />"
                <p className="text-gray-600">"
                  <strong className="text-gray-900">Proven Track Record: </strong> We have 
                  successfully delivered hundreds of projects for clients across various 
                  industries and company sizes.
                </>
              </div>"
              <div className="flex items-start">"
                <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />"
                <p className="text-gray-600">"
                  <strong className="text-gray-900">Cutting-Edge Technology:</strong> We 
                  leverage the latest technologies and best practices to deliver 
                  innovative solutions that give our clients a competitive advantage.
                </>
              </>
            </>
,
            {/* Stats */}"
            <div></>
              {stats.map((stat, index) => ("
                <div key={index} className="text-center">"
                  <div className="flex justify-center mb-2">"
                    <stat .icon className="h-8 w-8 text-blue-600" />
                  </div>"
                  <div className="text-2 xl font-bold text-gray-900">{stat.value}</div>"
                  <div>{stat.label}</>
                </>
              ))},
            </>
          </>
          {/* Image/Visual */}"
          <div className="relative">"
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2 xl p-8 text-white">"
              <h3 className="text-2 xl font-bold mb-4">Our Mission</h3>"
              <p >
                To democratize access to advanced technology and AI solutions,
                enabling businesses of all sizes to compete and thrive in the
                digital economy.
              </>
              "
              <div className="space-y-4">"
                <div className="flex items-center">"
                  <div></>
                  <span>Innovation-driven approach</>
                </div>"
                <div className="flex items-center">"
                  <div></>
                  <span>Client-focused solutions</>
                </div>"
                <div className="flex items-center">"
                  <div></>
                  <span>Sustainable growth strategies</>
                </>
              </>
            </>
          </>
        </>
        {/* Values Section */}"
        <div className="mt-20">"
          <h3 className="text-3 xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h3>"
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
            {values.map((value, index) => ("
              <div key={index} className="text-center">"
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <div></>
                </div>"
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title},
                </h4>"
                <p >
                  {value.description},
                </>
              </>
            ))},
          </>
        </>
      </>
    </>
  );
};
"'
export default About;
ursor/fix-errors-and-merge-to-main-94 a7
