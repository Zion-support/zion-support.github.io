import React from 'react'
export default function AboutSection() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Success Rate' }
  ]
  const values = [
    {
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      )
    },
    {
      title: 'Client Success',
      description: 'Your success is our mission. We build long-term partnerships based on trust and results.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    },
    {
      title: 'Quality Excellence',
      description: 'We deliver exceptional quality in every project, ensuring robust and scalable solutions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      )
    }
  ]
  return (
    <section id="about" className="py-20 relative"></section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
                {/* Section Header */}
                <div className="text-center mb-16"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
            <span className="holographic-text">About Zion Tech Group
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            We are a leading technology company specializing in AI and IT solutions 
            that transform businesses and drive digital innovation.
        {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"></div>
                {/* Left Content */}
                <div className="space-y-8"></div>
            <div className="cyber-card-advanced p-8"></div>
              <h3 className="text-2xl font-bold text-white mb-6"></h3>
                Our Mission
              <p className="text-gray-300 text-lg leading-relaxed mb-6"></p>
                To empower businesses with cutting-edge AI and IT solutions that drive 
                growth, efficiency, and innovation. We believe technology should be 
                accessible, powerful, and transformative.
              <p className="text-gray-300 text-lg leading-relaxed"></p>
                Our team of expert developers, data scientists, and IT professionals 
                work tirelessly to deliver solutions that not only meet your current 
                needs but also scale with your future ambitions.
            <div className="cyber-card-advanced p-8"></div>
              <h3 className="text-2xl font-bold text-white mb-6"></h3>
                Why Choose Us?
              <ul className="space-y-4"></ul>
                <li className="flex items-start"></li>
                  <svg className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  <span className="text-gray-300">Expert team with deep AI and IT expertise
                <li className="flex items-start"></li>
                  <svg className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  <span className="text-gray-300">Proven track record of successful projects
                <li className="flex items-start"></li>
                  <svg className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  <span className="text-gray-300">Cutting-edge technology and methodologies
                <li className="flex items-start"></li>
                  <svg className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  <span className="text-gray-300">24/7 support and maintenance
          {/* Right Content - Stats */}
                <div className="space-y-8"></div>
            <div className="grid grid-cols-2 gap-6"></div>
                {stats.map((stat, index) => (
                <div key={index} className="cyber-card-advanced p-6 text-center"></div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 neon-pulse mb-2"></div>
                {stat.number}
                <div className="text-gray-400 text-sm"></div>
                {stat.label}
              ))}
                <div className="cyber-card-advanced p-8"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3>
                Our Expertise
              <div className="space-y-3"></div>
                {['Artificial Intelligence', 'Machine Learning', 'Cloud Computing', 'Web Development', 'Mobile Apps', 'Data Analytics'].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between"></div>
                    <span className="text-gray-300"></span>
                {skill}
                <div className="w-24 bg-gray-700 rounded-full h-2"></div>
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                ))}
        {/* Values Section */}
                <div className="mb-16"></div>
          <h3 className="text-3xl font-bold text-white text-center mb-12"></h3>
            Our Core Values
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                {values.map((value, index) => (
              <div key={index} className="cyber-card-advanced p-8 text-center group hover:scale-105 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6 text-black group-hover:scale-110 transition-transform duration-300"></div>
                {value.icon}
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300"></h4>
                {value.title}
                <p className="text-gray-400 leading-relaxed"></p>
                {value.description}
            ))}
        {/* Team Section */}
                <div className="cyber-card-advanced p-8"></div>
          <h3 className="text-2xl font-bold text-white text-center mb-8"></h3>
            Meet Our Team
          <p className="text-gray-300 text-center text-lg max-w-3xl mx-auto mb-8"></p>
            Our diverse team of experts brings together decades of experience in AI, 
            machine learning, software development, and IT consulting. We're passionate 
            about technology and committed to delivering exceptional results.
          </p>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8"></div>
            <div className="text-center"></div>
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                <span className="text-black font-bold text-2xl">AI
              <h4 className="text-lg font-semibold text-white mb-2">AI Specialists
              <p className="text-gray-400 text-sm">Machine Learning Engineers & Data Scientists
            <div className="text-center"></div>
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                <span className="text-black font-bold text-2xl">DEV
              <h4 className="text-lg font-semibold text-white mb-2">Developers
              <p className="text-gray-400 text-sm">Full-Stack & Mobile App Developers
            <div className="text-center"></div>
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                <span className="text-black font-bold text-2xl">IT</span>
                </div>
              <h4 className="text-lg font-semibold text-white mb-2">IT Consultants</h4>
              <p className="text-gray-400 text-sm">Cloud & Infrastructure Experts</p>
                </div>
          </div>
                </div>
      </div>
                </section>
  ),
}
                </h3>
                </h3>
  </h3>
                </h3>
</div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </span></span>
                </span></span>
                </span></span>
                </span></span>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></h2>
                </h3></h4>
                </h4></h4>
                </ul></li>
                </li></li>
                </li>;