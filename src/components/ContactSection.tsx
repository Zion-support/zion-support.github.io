import React;, { useState } from 'react';
export default function ContactSection() {;
const [formData, setFormData] = useState({
name: '',;,
email: '',;,
company: '',;,
service: '',;,
message: ''
}
  });
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;;
setFormData({
}
      ...formData},
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e: React.FormEvent) => {;;
e.preventDefault(),
    // Handle form submission here;
console.log('Form submitted:', formData)
}
  }
  const contactInfo = [;
    {
icon: (
      ),;,
title: 'Email Us',;,
details: 'info@ziontechgroup.com',;,
link: 'mailto:info@ziontechgroup.com'
    },
    {
icon: (
      ),;,
title: 'Call Us',;,
details: '+1 (555) 123-4567',;,
link: 'tel:+15551234567'
    },
    {
icon: (
      ),;,
title: 'Visit Us',;,
details: '123 Tech Street, Innovation City, IC 12345',;,
link: '#'
    }
  ];
const services = [;
    'AI & Machine Learning',
    'Cloud Solutions',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    'Cybersecurity',
    'IT Consulting',
    'Other'
  ];
return (;
        {/* Section Header */}
            <span className="holographic-text">Get In Touch
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
Ready to transform your business with cutting-edge AI and IT solutions?;
Let's discuss your project and create something amazing together.
          {/* Contact Information */}
              <h3 className="text-2xl font-bold text-white mb-6">;
Let's Start a Conversation
              <p className="text-gray-300 text-lg leading-relaxed mb-8">;
Whether you have a specific project in mind or just want to explore;
how AI and IT solutions can benefit your business, we're here to help.;
Our team of experts is ready to provide personalized consultation.
              {/* Contact Info Cards */}
                {contactInfo.map((info), index) => (
                  <$2 />;
key={index}
                    href={info.link}
                    className="flex items-center p-4 cyber-card hover:scale-105 transition-all duration-300 group">
                      {info.icon}
                        {info.title}
                      <p className="text-gray-400">{info.details}
                ))}
            {/* Why Choose Us */}
              <h3 className="text-xl font-bold text-white mb-6">;
Why Work With Us?
                  <span className="text-gray-300">Free initial consultation and project assessment
                  <span className="text-gray-300">Transparent pricing with no hidden costs
                  <span className="text-gray-300">Agile development methodology
                  <span className="text-gray-300">Ongoing support and maintenance
          {/* Contact Form */}
            <h3 className="text-2xl font-bold text-white mb-6">;
Send Us a Message
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">;
Full Name *
type="text";
id="name";
name="name";
value={formData.name}
                    onChange={handleChange}
                    required;
className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300";
placeholder="Your full name"
                  />
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">;
Email Address *
type="email";
id="email";
name="email";
value={formData.email}
                    onChange={handleChange}
                    required;
className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300";
placeholder="your@email.com"
                  />
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">;
Company Name
type="text";
id="company";
name="company";
value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300";
placeholder="Your company name"
                />
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">;
Service Interested In
id="service";
name="service";
value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300">
                  <option value="">Select a service
                  {services.map((service), index) => (
                      {service}
                  ))}
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">;
Message *
id="message";
name="message";
value={formData.message}
                  onChange={handleChange}
                  required;
rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none";
placeholder="Tell us about your project..."
                />
              <$2 />;
type="submit";
className="w-full cyber-button py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">;
Send Message</span>
  ),
}
</div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></p></p></p></p></p></p></p></p></p></p></p></h2></h3></h4></ul></li></li></li></li>