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
    {
title: 'Innovation First',;,
description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions.',;,
icon: (
      )
    },
    {
title: 'Client Success',;,
description: 'Your success is our mission. We build long-term partnerships based on trust and results.',;,
icon: (
      )
    },
    {
title: 'Quality Excellence',;,
description: 'We deliver exceptional quality in every project, ensuring robust and scalable solutions.',;,
icon: (
      )
    }
  ];
return (;
        {/* Section Header */}
            <span className="holographic-text">About Zion Tech Group
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
We are a leading technology company specializing in AI and IT solutions;
that transform businesses and drive digital innovation.
        {/* Main Content */}
          {/* Left Content */}
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
              <h3 className="text-2xl font-bold text-white mb-6">;
Why Choose Us?
                  <span className="text-gray-300">Expert team with deep AI and IT expertise
                  <span className="text-gray-300">Proven track record of successful projects
                  <span className="text-gray-300">Cutting-edge technology and methodologies
                  <span className="text-gray-300">24/7 support and maintenance
          {/* Right Content - Stats */}
              {stats.map((stat), index) => (
                    {stat.number}
                    {stat.label}
              ))}
              <h3 className="text-xl font-bold text-white mb-4">;
Our Expertise
                {['Artificial Intelligence', 'Machine Learning', 'Cloud Computing', 'Web Development', 'Mobile Apps', 'Data Analytics'].map((skill), index) => (
                    <span className="text-gray-300">{skill}
                ))}
        {/* Values Section */}
          <h3 className="text-3xl font-bold text-white text-center mb-12">;
Our Core Values
            {values.map((value), index) => (
                  {value.icon}
                  {value.title}
                  {value.description}
            ))}
        {/* Team Section */}
          <h3 className="text-2xl font-bold text-white text-center mb-8">;
Meet Our Team
          <p className="text-gray-300 text-center text-lg max-w-3xl mx-auto mb-8">;
Our diverse team of experts brings together decades of experience in AI,;
machine learning, software development, and IT consulting. We're passionate;
about technology and committed to delivering exceptional results.
                <span className="text-black font-bold text-2xl">AI
              <h4 className="text-lg font-semibold text-white mb-2">AI Specialists
              <p className="text-gray-400 text-sm">Machine Learning Engineers & Data Scientists
                <span className="text-black font-bold text-2xl">DEV
              <h4 className="text-lg font-semibold text-white mb-2">Developers
              <p className="text-gray-400 text-sm">Full-Stack & Mobile App Developers
                <span className="text-black font-bold text-2xl">IT</span>
              <h4 className="text-lg font-semibold text-white mb-2">IT Consultants</h4>
              <p className="text-gray-400 text-sm">Cloud & Infrastructure Experts</p>
  ),
}
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></span></span></span></span></p></p></p></p></p></p></p></p></p></p></p></p></p></h2></h3></h4></h4></h4></ul></li></li></li></li>