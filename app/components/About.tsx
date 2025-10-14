import React from "react";

const About: React.FC = () => {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Zion Tech Group
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We are a leading technology company specializing in AI and IT solutions. 
                Our mission is to empower businesses with innovative technology that drives 
                growth, efficiency, and success.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Cutting-Edge Technology</h3>
                    <p className="text-gray-600">We leverage the latest AI and IT technologies to deliver innovative solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600">Our team of experienced professionals brings deep expertise in AI and IT solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Client-Focused</h3>
                    <p className="text-gray-600">We prioritize our clients&apos; success and work closely with them to achieve their goals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our culture of excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
</section></div></div></div></h2></p></div></CheckIcon></div></h3></div></CheckIcon></div></h3></div></div></div></stat></div></div></div></div></h3></p></div></div></h4></section></div></div></div></h2></p></div></CheckIcon></div></h3></div></CheckIcon></div></h3></div></div></div></stat></div></div></div></div></h3></p></div></div></h4>};

export default About;
