export const metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "Founder & CEO",
      description: "15+ years in enterprise technology, specializing in AI and cloud architecture",
      expertise: ["AI Strategy", "Cloud Architecture", "Business Development"]
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Expert in machine learning and scalable system design",
      expertise: ["Machine Learning", "System Architecture", "DevOps"]
    },
    {
      name: "Michael Chen",
      role: "Lead AI Engineer",
      description: "PhD in Computer Science with focus on deep learning and NLP",
      expertise: ["Deep Learning", "NLP", "Computer Vision"]
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      description: "Product strategist with experience in SaaS and enterprise software",
      expertise: ["Product Strategy", "UX/UI Design", "SaaS Development"]
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new ways to solve complex business challenges.",
      icon: "🚀"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We measure our achievements by the value we deliver to our clients.",
      icon: "🎯"
    },
    {
      title: "Quality & Security",
      description: "We maintain the highest standards of quality and security in everything we build and deliver.",
      icon: "🔒"
    },
    {
      title: "Transparency",
      description: "We believe in open communication, clear processes, and honest feedback throughout our partnership.",
      icon: "💡"
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "99.9%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We are a leading technology company specializing in AI, micro SaaS, and IT solutions 
          that transform businesses and drive measurable results.
        </p>
      </div>

      {/* Company Overview */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2010, Zion Tech Group has been at the forefront of technological innovation, 
              helping businesses across various industries leverage cutting-edge AI, micro SaaS, and IT 
              solutions to achieve their goals. Our team of expert engineers, data scientists, and 
              business strategists work together to deliver solutions that not only meet current needs 
              but also scale for future growth.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Based in Middletown, Delaware, we serve clients globally, from startups to Fortune 500 
              companies. Our comprehensive approach combines deep technical expertise with business 
              acumen to deliver solutions that drive real value.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Our Mission</h3>
              <p className="text-gray-300 text-sm">
                To empower businesses with cutting-edge technology solutions that scale efficiently 
                and deliver measurable value through innovation, quality, and exceptional service.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Our Vision</h3>
              <p className="text-gray-300 text-sm">
                To be the world's leading provider of AI-powered business solutions, helping 
                organizations transform their operations and achieve unprecedented success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {achievements.map((achievement, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
            <div className="text-gray-300">{achievement.label}</div>
          </div>
        ))}
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Team */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-blue-400 text-sm">{member.role}</p>
              </div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.description}</p>
              <div className="space-y-1">
                {member.expertise.map((skill, idx) => (
                  <span key={idx} className="inline-block bg-white/10 text-white text-xs px-2 py-1 rounded-full mr-1 mb-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What We Do */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-semibold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300 leading-relaxed">
              Custom AI models, machine learning pipelines, and intelligent automation 
              solutions that transform how businesses operate and make decisions.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-2xl font-semibold text-white mb-4">Micro SaaS</h3>
            <p className="text-gray-300 leading-relaxed">
              Scalable, focused software solutions that solve specific business problems 
              with minimal complexity and maximum impact.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">☁️</div>
            <h3 className="text-2xl font-semibold text-white mb-4">IT Services</h3>
            <p className="text-gray-300 leading-relaxed">
              Enterprise-grade IT infrastructure, cloud migration, DevOps implementation, 
              and ongoing support to keep your systems running smoothly.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
        <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
          Let's discuss how our expertise in AI, micro SaaS, and IT solutions can help 
          transform your business and drive real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+13024640950" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call Us: +1 302 464 0950
          </a>
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}