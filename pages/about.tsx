import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  const expertise = [
    {
      category: "Artificial Intelligence & Machine Learning",
      skills: ["Custom AI model development", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI integration consulting"]
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["Multi-cloud architecture", "DevOps automation", "Microservices design", "Serverless computing", "Container orchestration"]
    },
    {
      category: "Web & Mobile Development",
      skills: ["Full-stack development", "Progressive Web Apps", "Cross-platform mobile apps", "UI/UX design", "Performance optimization"]
    },
    {
      category: "Data & Analytics",
      skills: ["Big data processing", "Real-time analytics", "Data visualization", "Business intelligence", "Machine learning pipelines"]
    },
    {
      category: "Security & Compliance",
      skills: ["Cybersecurity assessment", "Penetration testing", "Compliance automation", "Identity management", "Threat detection"]
    },
    {
      category: "Emerging Technologies",
      skills: ["Blockchain development", "IoT platforms", "AR/VR solutions", "Edge computing", "Quantum computing preparation"]
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "AI Innovation Award",
      description: "Recognized for breakthrough AI solutions in business automation"
    },
    {
      year: "2023",
      title: "Cloud Excellence",
      description: "Successfully migrated 50+ enterprise clients to cloud infrastructure"
    },
    {
      year: "2022",
      title: "Security Certification",
      description: "Achieved SOC 2 Type II compliance for enterprise security standards"
    },
    {
      year: "2021",
      title: "Startup Success",
      description: "Launched 3 successful SaaS products with 10,000+ active users"
    }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with technology, staying ahead of industry trends and emerging technologies."
    },
    {
      icon: "💼",
      title: "Business Focused",
      description: "Every solution we create is designed to drive measurable business value, improve efficiency, and generate positive ROI."
    },
    {
      icon: "🔒",
      title: "Security & Trust",
      description: "We maintain the highest security standards and build trust through transparent communication and reliable delivery."
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "We work as an extension of your team, building long-term relationships based on mutual success and growth."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions. Discover our expertise in AI, cloud, cybersecurity, and emerging technologies." />
        <meta name="keywords" content="about Zion Tech Group, technology company, AI experts, cloud specialists, cybersecurity professionals, innovation leaders" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-20">
          <h1 className="text-6xl font-bold mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            We are a leading technology solutions provider, specializing in AI development, 
            cloud architecture, cybersecurity, and emerging technologies. Our mission is to 
            transform businesses through innovative digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Started Today
            </a>
            <a href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Explore Services
            </a>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                To democratize access to enterprise-grade AI and cloud technologies, enabling businesses 
                of all sizes to compete in the digital economy. We believe that every organization 
                deserves access to the same powerful tools that drive innovation at the world's largest tech companies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our goal is to bridge the technology gap between startups and enterprises, providing 
                scalable solutions that grow with your business.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                To be the leading technology partner for businesses seeking digital transformation, 
                known for innovation, reliability, and exceptional client success.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We envision a future where technology is accessible, secure, and empowering for 
                organizations of all sizes, driving innovation across industries.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Areas of Expertise</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{area.category}</h3>
                <div className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{achievement.year}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team & Culture */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Team & Culture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team consists of seasoned professionals with expertise across multiple technology domains. 
                From AI researchers and cloud architects to cybersecurity experts and full-stack developers, 
                we bring together diverse skills to deliver comprehensive solutions. Many of our team members 
                have worked with Fortune 500 companies and have advanced degrees in computer science, 
                engineering, and related fields.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation Culture</h3>
              <p className="text-gray-300 leading-relaxed">
                We foster a culture of continuous learning and innovation. Our team regularly participates 
                in industry conferences, contributes to open-source projects, and stays current with the 
                latest technology trends. We encourage creative problem-solving and provide opportunities 
                for professional growth and development.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-lg mb-8">
              Let's discuss how Zion Tech Group can help transform your business with innovative 
              technology solutions. We offer free consultations and custom solution design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                📞 Call +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                ✉️ Schedule Consultation
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              Address: 364 E Main St STE 1008, Middletown DE 19709<br />
              Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
