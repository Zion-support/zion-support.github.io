import { Users } from 'lucide-react''
import React from 'react'
import { CheckIcon
  UsersIcon
  TrophyIcon'
  LightBulbIcon } from '@heroicons/react/24/outline'
const About: React.FC = () => {
  const stats = ['
    { icon: UsersIcon, value: '500+', label: 'Happy Clients' }'
    { icon: TrophyIcon, value: '50+', label: 'Awards Won' }'
    { icon: LightBulbIcon, value: '1000+', label: 'Projects Completed' }
  ]
  const values = [
    {'
      title: 'Innovation''
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.'
    }
    {'
      title: 'Excellence''
      description: 'We are committed to delivering the highest quality solutions and services, ensuring every project exceeds expectations.'
    }
    {'
      title: 'Partnership''
      description: 'We work closely with our clients as trusted partners, understanding their unique needs and goals.'
    }
    {'
      title: 'Integrity''
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'
    }
  ]
  return (
    <section className="py-20 bg-gray-50">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>"
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h2>"
            <p className="text-xl text-gray-600 mb-8">
              We are a leading technology company specializing in AI and IT solutions. 
              Our mission is to empower businesses with innovative technology that drives 
              growth, efficiency, and success.
            </p>
            "
            <div className="space-y-4 mb-8">"
              <div className="flex items-start">"
                <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />"
                <p className="text-gray-600">"
                  <strong className="text-gray-900">Expert Team: </strong> Our team consists of 
                  highly skilled professionals with deep expertise in AI, cloud computing
                  and enterprise software development.
                </p>
              </div>"
              <div className="flex items-start">"
                <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />"
                <p className="text-gray-600">"
                  <strong className="text-gray-900">Proven Track Record: </strong> We have successfully 
                  delivered over 1000 projects for clients across various industries.
                </p>
              </div>"
              <div className="flex items-start">"
                <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />"
                <p className="text-gray-600">"
                  <strong className="text-gray-900">Cutting-Edge Technology: </strong> We leverage the 
                  latest technologies and methodologies to deliver innovative solutions.
                </p>
              </div>
            </div>
"
            <div className="flex flex-col sm:flex-row gap-4">"
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>"
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Stats */}"
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => ("
              <div key={index} className="text-center">"
                <div className="flex justify-center mb-4">"
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>"
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>"
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}"
        <div className="mt-20">"
          <div className="text-center mb-12">"
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          "
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => ("
              <div key={index} className="text-center">"
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>"
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default About'"