import React, { useState } from 'react';';';
export default function ContactSection() {;
const [formData, setFormData] = useState({
  // TODO: Add properties
}
  // TODO: Add properties
}
    name: ',''
    email: ',''
    company: ',''
    service: ',''
    message: '''
  });
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    setFormData({
  // TODO: Add properties
}
  // TODO: Add properties
}
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e: React.FormEvent) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    e.preventDefault(),
    // Handle form submission here
    console.log('Form submitted:', formData)'
  }
  const contactInfo = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: (
  // TODO: Add parameters
)
        <svg className="w-6 h-6" stroke="currentColor"0 0 24 24">"round" strokeLinejoin=" strokeWidth={2} d="M3 8 l7.89 4.26 a2 2 0 002.22 0 L21 8 M5 19 h14 a2 2 0 002-2 V7 a2 2 0 00-2-2 H5 a2 2 0 00-2 2 v10 a2 2 0 002 2 z"
      ),
      title: 'Email Us','
      details: 'info@ziontechgroup.com','
      link: 'mailto:info@ziontechgroup.com''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: (
  // TODO: Add parameters
)
        <svg className="w-6 h-6" stroke="currentColor"0 0 24 24">"round" strokeLinejoin=" strokeWidth={2} d="M3 5 a2 2 0 012-2 h3.28 a1 1 0 01.948.684 l1.498 4.493 a1 1 0 01-.502 1.21 l-2.257 1.13 a11.042 11.042 0 005.516 5.516 l1.13-2.257 a1 1 0 011.21-.502 l4.493 1.498 a1 1 0 01.684.949 V19 a2 2 0 01-2 2 h-1 C9.716 21 3 14.284 3 6 V5 z"
      ),
      title: 'Call Us','
      details: '+1 (555) 123-4567','
      link: 'tel:+15551234567''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: (
  // TODO: Add parameters
)
        <svg className="w-6 h-6" stroke="currentColor"0 0 24 24">"round" strokeLinejoin=" strokeWidth={2} d="M17.657 16.657 L13.414 20.9 a1.998 1.998 0 01-2.827 0 l-4.244-4.243 a8 8 0 1111.314 0 z"
<path strokeLinecap="round"round" strokeWidth={2} d=" />"
      ),
      title: 'Visit Us','
      details: '123 Tech Street, Innovation City, IC 12345','
      link: '#''
    }
  ];
const services = [
  // TODO: Add items
]
  // TODO: Add items
]
    'AI & Machine Learning','
    'Cloud Solutions','
    'Web Development','
    'Mobile Development','
    'Data Analytics','
    'Cybersecurity','
    'IT Consulting','
    'Other''
  ]
  return (
  // TODO: Add parameters
)
    <section id=" className="py-20 relative"max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"
        {/* Section Header */}
        <div className="
<h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6"holographic-text"
          <p className="
            Ready to transform your business with cutting-edge AI and IT solutions?
            Let's discuss your project and create something amazing together.'
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16"space-y-8"
<div className="
<h3 className="text-2 xl font-bold text-white mb-6"text-gray-300 text-lg leading-relaxed mb-8"
                Whether you have a specific project in mind or just want to explore
                how AI and IT solutions can benefit your business, we're here to help. '
                Our team of experts is ready to provide personalized consultation.
              {/* Contact Info Cards */}
              <div className="
                {contactInfo.map((info, index) => (
  // TODO: Add parameters
)
                  <$2 />
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 cyber-card hover:scale-105 transition-all duration-300 group"w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mr-4 text-black group-hover:scale-110 transition-transform duration-300"
                      {info.icon}
                    <div>
<h4 className="
                        {info.title}
                      <p className="text-gray-400"cyber-card-advanced p-8"
<h3 className="
                Why Work With Us?
              <ul className="space-y-4"flex items-start"
<svg className="none" stroke=" viewBox="0 0 24 24"
<path strokeLinecap="round"round" strokeWidth={2} d=" />"
<span className="
                <li className="flex items-start"w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0"none"currentColor" viewBox=">"
<path strokeLinecap=" strokeLinejoin="round"M5 13 l4 4 L19 7" />"text-gray-300"
                <li className="
<svg className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" stroke="currentColor"0 0 24 24">"round" strokeLinejoin=" strokeWidth={2} d="M5 13 l4 4 L19 7"
<span className="text-gray-300"flex items-start"
<svg className="none" stroke=" viewBox="0 0 24 24"
<path strokeLinecap="round"round" strokeWidth={2} d=" />"
<span className="
          {/* Contact Form */}
          <div className="cyber-card-advanced p-8"text-2 xl font-bold text-white mb-6"
              Send Us a Message
            <form onSubmit={handleSubmit} className="
<div className="grid grid-cols-1 md:grid-cols-2 gap-6"name" className="
                    Full Name *
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"Your full name""email" className="
                    Email Address *
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"your@email.com""company" className="
                  Company Name
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"Your company name""service" className="
                  Service Interested In
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"">Select a service"message" className="
                  Message *
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"Tell us about your project...""submit""w-full cyber-button py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                Send Message</span></form>
</div></div>
</div></section>
  ),
}
  </button></textarea>
</label></label>
</h3></h3>
</HTMLInputElement></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</span></span>
</span></span>
</p></p>
</p></p>
</p></p>
</p></p>
</p></p>
</p></h2>
</h3></h4>
</ul></li>
</li></li>
</li>