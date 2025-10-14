import { Helmet } from 'react-helmet-async';

  const values = []
    {
      icon: CpuChipIcon,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security measures and compliance standards.',
    },
    {
      icon: UserGroupIcon,
      title: 'Client-Centric',
      description: 'We prioritize our clients\', success, working closely with them to understand their unique needs and deliver tailored solutions.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Results-Driven',
      description: 'We measure our success by the tangible results and value we deliver to our clients\', businesses.'
    }
  ]
  const team = []
    {
      name: 'Dr. Kleber Santos',
      role: 'Founder & CEO',
      description: 'AI and Machine Learning expert with 15+ years of experience in technology leadership.',
      image: '/team/kleber.jpg',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Cloud architecture specialist with expertise in scalable system design and implementation.',
      image: '/team/sarah.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'PhD in Computer Science, leading our AI research and development initiatives.',
      image: '/team/michael.jpg',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Cybersecurity Director',
      description: 'Cybersecurity expert with certifications in ethical hacking and security architecture.',
      image: '/team/emily.jpg',
    }
  ]
  return (
    <>Helmet>
        <title>Pages</title>
        <meta
          name="description"
          content="Professional pages solutions and services"
        />
        <meta name="keywords" content="pages" />
      </Helmet>

      <div className="min-h-screenbg-slate-9 0 0 text-white">
        {/* Hero Section */}
        <section className="relativ e py-2 0 bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900"></section>
          <div className="containermx-auto px-4 text-center">
            <h1 className="text -5 xl md:text-6-xlfont-boldmb-6 bg-gradient-to-rfrom-purple-4 0 0 to-cyan-4 0 0bg-clip-texttext-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xltext-gray-3 0 0 mb-8 max-w-3 xlmx-auto">
              We are a team of passionate AI and IT experts dedicated to transforming businesses 
              through innovative technology solutions.</p>
        </section>

        {/* Mission Section */}
        <section className="py-2 0"></section>
          <div className="containermx-auto px-4">
            <div className="max-w-4 xlmx-autotext-center">
              <h2 className="text-4 xlmd:text-5-xlfont-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xltext-gray-3 0 0 mb-1 2 leading-relaxed">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth. We believe technology should be accessible, secure, and 
                transformative for organizations of all sizes.</p>
              
              <div className="gridmd:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    </div><div className="text-4 xlfont-bold text-purple-4 0 0 mb-2">{stat.number}</div>
                    <div className="text-gray-3 0 0">{stat.label}</div>
                ))}
                </div>

        {/* Values Section */}
        <section className="py-2 0 bg-slate-8 0 0/5 0"></section>
          <div className="containermx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4 xlmd:text-5-xlfont-bold text-whitemb-6">
                Our Values
              </h2>
              <p className="text-xltext-gray-3 0 0 max-w-3 xlmx-auto">
                These core values guide everything we do and shape our approach to client success.</p>
            
            <div className="gridmd:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  </div><div className="w -1 6 h-1 6 bg-gradient-to-r from-purple-5 0 0 to-cyan-5 0 0 rounded-lgflexitems-centerjustify-centermx-automb-6">
                    <value.icon className="w -8 h-8 text-white" />
                    </div>
                  <h3 className="text-xlfont-bold text-whitemb-4">{value.title}</h3>
                  <p className="text-gray-3 0 0">{value.description}</p>
              ))}
              </div>
        </section>

        {/* Team Section */}
        <section className="py-2 0"></section>
          <div className="containermx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4 xlmd:text-5-xlfont-bold text-whitemb-6">
                Meet Our Team
              </h2>
              <p className="text-xltext-gray-3 0 0 max-w-3 xlmx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                cloud computing, cybersecurity, and business transformation.</p>
            
            <div className="gridmd:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-slate -8 00 rounded-xlp-6 text-centerborderborder-slate-7 00 hover:border-purple-5 0 0 transition-allduration-3 0 0">
                  </div><div className="w -2 4 h-2 4 bg-gradient-to-r from-purple-5 0 0 to-cyan-5 0 0 rounded-fullmx-automb-4 flexitems-centerjustify-center">
                    <UserGroupIcon className="w -1 2 h-1 2 text-white" />
                    </div>
                  <h3 className="text-xlfont-bold text-whitemb-2">{member.name}</h3>
                  <div className="text-purple-4 0 0 font-semiboldmb-3">{member.role}</div>
                  <p className="text-gray-3 0 0 text-sm">{member.description}</p>
              ))}
              </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 0 bg-gradient-to-rfrom-purple-9 0 0/3 0 to-cyan-9 0 0/3 0"></section>
          <div className="containermx-auto px-4 text-center">
            <h2 className="text-4 xlmd:text-5-xlfont-bold text-whitemb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xltext-gray-3 0 0 mb-8 max-w-3 xlmx-auto">
              Let&apos;s discuss how our team can help transform your business with 
              cutting-edge AI and IT solutions.</p>
            <div className="flexflex-colsm:flex-rowgap-4 justify-center">
              <button className="bg-gradient-to- r from-purple-6 00 to-cyan-6 00 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-7 00 hover:to-cyan-7 00 transition-allduration-3 0 0 transformhover:scale-1 0 5 flexitems-centerjustify-centergap-2">
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="border -2 border-white text-white px-8 py-4 rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9 0 0 transition-allduration-3 0 0">
                View Our Work
              </button>
            </div>

  )
}
export default AboutPage
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
