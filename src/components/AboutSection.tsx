import React from 'react';;
export default function AboutSection() {;
const stats = [;
}

    { number: '500+'}, label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Success Rate' }

  ];
const values = [;
    {;,
title: 'Innovation First',;,
description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions.',;,
icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </path>
      )
    },
    {;,
title: 'Client Success',;,
description: 'Your success is our mission. We build long-term partnerships based on trust and results.',;,
icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </path>
      )
    },
    {;,
title: 'Quality Excellence',;,
description: 'We deliver exceptional quality in every project, ensuring robust and scalable solutions.',;,
icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </path>
      )
    }

  ];
return (;
    <section id="about" className="py-20 relative">
      <div>
        {/* Section Header */}

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="holographic-text">About Zion Tech Group
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
We are a leading technology company specializing in AI and IT solutions;
that transform businesses and drive digital innovation.
        {/* Main Content */}

        <div>
          {/* Left Content */}

          <div>
          <div>
              <h3 className="text-2xl font-bold text-white mb-6">;
Our Mission
              <p className="text-gray-300 text-lg leading-relaxed mb-6">;
To empower businesses with cutting-edge AI and IT solutions that drive;
growth, efficiency, and innovation. We believe technology should be;
accessible, powerful, and transformative.
              <p className="text-gray-300 text-lg leading-relaxed">;
Our team of expert developers, data scientists, and IT professionals;
work tirelessly to deliver solutions that not only meet your current;
needs but also scale with your future ambitions.
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">;
Why Choose Us?
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </path>
                  <span className="text-gray-300">Expert team with deep AI and IT expertise
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  <span className="text-gray-300">Proven track record of successful projects
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  <span className="text-gray-300">Cutting-edge technology and methodologies
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  <span className="text-gray-300">24/7 support and maintenance
          {/* Right Content - Stats */}

          <div>
          <div>
              {stats.map((stat), index) => (
                <div>
          <div>
                    {stat.number}

                  <div>
                    {stat.label}

              ))}

            <div>
              <h3 className="text-xl font-bold text-white mb-4">;
Our Expertise
              <div>
                {['Artificial Intelligence', 'Machine Learning', 'Cloud Computing', 'Web Development', 'Mobile Apps', 'Data Analytics'].map((skill), index) => (
                  <div>
                    <span className="text-gray-300">{skill}

                    <div>
          <div>
                ))}

        {/* Values Section */}

        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">;
Our Core Values
          <div>
            {values.map((value), index) => (
              <div>
          <div>
                  {value.icon}

                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {value.title}

                <p className="text-gray-400 leading-relaxed">
                  {value.description}

            ))}

        {/* Team Section */}

        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">;
Meet Our Team
          <p className="text-gray-300 text-center text-lg max-w-3xl mx-auto mb-8">;
Our diverse team of experts brings together decades of experience in AI,;
machine learning, software development, and IT consulting. We're passionate;
about technology and committed to delivering exceptional results.
          </p>
          <div>
          <div>
              <div>
                <span className="text-black font-bold text-2xl">AI
              <h4 className="text-lg font-semibold text-white mb-2">AI Specialists
              <p className="text-gray-400 text-sm">Machine Learning Engineers & Data Scientists
            <div>
          <div>
                <span className="text-black font-bold text-2xl">DEV
              <h4 className="text-lg font-semibold text-white mb-2">Developers
              <p className="text-gray-400 text-sm">Full-Stack & Mobile App Developers
            <div>
          <div>
                <span className="text-black font-bold text-2xl">IT</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">IT Consultants</h4>
              <p className="text-gray-400 text-sm">Cloud & Infrastructure Experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) }

  </h3>
  </h3>
  </h3>
  </h3>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></span></span></span></span></p></p></p></p></p></p></p></p></p></p></p></p></p></h2></h3></h4></h4></h4></ul></li></li></li></li>