export default function ServicesSection() {;
const services = [;
    {
}
title: 'AI & Machine Learning'},;,
description: 'Custom AI solutions including predictive analytics, natural language processing, and computer vision.',;,
icon: (
      ),;,
features: ['Predictive Analytics', 'NLP Solutions', 'Computer Vision', 'Deep Learning']
    },
    {
title: 'Cloud Solutions',;,
description: 'Scalable cloud infrastructure, migration services, and cloud-native application development.',;,
icon: (
      ),;,
features: ['AWS/Azure/GCP', 'Migration Services', 'DevOps', 'Containerization']
    },
    {
title: 'Web Development',;,
description: 'Modern, responsive web applications using cutting-edge technologies and frameworks.',;,
icon: (
      ),;,
features: ['React/Next.js', 'Node.js', 'TypeScript', 'Progressive Web Apps']
    },
    {
title: 'Data Analytics',;,
description: 'Transform your data into actionable insights with advanced analytics and visualization.',;,
icon: (
      ),;,
features: ['Business Intelligence', 'Data Visualization', 'ETL Processes', 'Real-time Analytics']
    },
    {
title: 'Cybersecurity',;,
description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',;,
icon: (
      ),;,
features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
title: 'Mobile Development',;,
description: 'Native and cross-platform mobile applications for iOS and Android platforms.',;,
icon: (
      ),;,
features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    }
  ];
return (;
        {/* Section Header */}
            <span className="holographic-text">Our Services
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
Comprehensive technology solutions designed to accelerate your business growth;
and digital transformation journey.
        {/* Services Grid */}
          {services.map((service), index) => (
            <$2 />;
key={index}
              className="cyber-card-advanced p-8 group hover:scale-105 transition-all duration-300">
              {/* Icon */}
                {service.icon}
              {/* Content */}
                {service.title}
                {service.description}
              {/* Features */}
                {service.features.map((feature), featureIndex) => (
                    {feature}
                ))}
              {/* Learn More Button */}
                <$2 />;
href="#contact";
className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300">;
Learn More
          ))}
        {/* CTA Section */}
            <h3 className="text-2xl font-bold text-white mb-4">;
Ready to Transform Your Business?
            <p className="text-gray-300 mb-8 text-lg">;
Let's discuss how our AI and IT solutions can drive your success.
              <$2 />;
href="#contact";
className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">;
Get Free Consultation
  
              <$2 />;
href="tel:+1234567890";
className="px-8 py-4 text-lg font-semibold text-cyan-400 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 neon-glow">;
Call Now
  
  ),
}
</div></div></div></div></span></p></p></p></p></p></p></p></p></p></p></h2></h3></h3></ul></li>