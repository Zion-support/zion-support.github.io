import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { CheckCircleIcon;
  UserGroupIcon
  LightBulbIcon
  ShieldCheckIcon
  RocketLaunchIcon
  HeartIcon
  ArrowRightIcon
  StarIcon
} from '@heroicons/react/24/outline'  );

export default function AboutPage() {
  const values = [
    {
      icon: Target,
    title: 'Mission-Driven',
      description: 'We are committed to delivering innovative solutions that drive real business value and transformation.'},
  {
    icon: Users,
    title: 'Client-Focused',
      description: 'Our success is measured by our clients\' success. We build lasting partnerships based on trust and results.'},
  {
    icon: Award,
    title: 'Excellence',
      description: 'We maintain the highest standards of quality and continuously strive for excellence in everything we do.'},
  {
    icon: Lightbulb,
    title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex business challenges.'},
  {
    icon: Shield,
    title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'
},
  {
    icon: Zap,
    title: 'Agility',
    description: 'We adapt quickly to changing market conditions and client needs to deliver optimal solutions.'}
  ]
  const team = [
    {
      name: 'Kleber Santos',
    role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.'}
    {
      name: 'Sarah Johnson',
    role: 'CTO',
      description: 'Technical expert specializing in cloud architecture and AI implementation.'}
    {
      name: 'Michael Chen',
    role: 'Head of Security',
      description: 'Cybersecurity specialist with expertise in enterprise security solutions.'}
    {
      name: 'Emily Rodriguez',
    role: 'Lead AI Engineer',
    description: 'Machine learning expert focused on developing cutting-edge AI solutions.'}
  ]
  return (
    <div>


      <Helmet></Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group&apos;s mission, values, and expertise in AI and IT solutions. Discover our team and company culture." /></meta>
        <meta name="keywords" content="about us, company, team, mission, values, AI solutions, IT services" /></meta>
      </Helmet>
      {/* Hero Section */}
    </div>
      <section className="relative py-20 bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></section>
        <div className="containermx-autopx-4">
        <div className="max-w-4xlmx-autotext-center">
            <h1 className="text-5xl md: text-6xlfont-boldtext-whitemb-6">
            About Zion Tech Group
            </h1>
            <p className="text-xltext-gray-300mb-8leading-relaxed">
            Empowering businesses through innovative technology solutions and cutting-edge AI applications
            </p>,
            <p className="text-lgtext-gray-400max-w-3xlmx-auto">
            ,
              Founded in 2020, we&apos;ve been at the forefront of digital transformation, 
              helping companies leverage the power of artificial intelligence, cybersecurity, 
              and cloud technologies to achieve unprecedented growth.            
          </p>
          </div>
          {/* Company Story */}
        </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8borderborder-white/20mb-16"></div>
            <h2 className="text-3xlfont-boldtext-whitemb-6">Our Story</h2>
            <div className="gridmd:grid-cols-2gap-8"></div>
              <div></div>,
                <p className="text-gray-300mb-4">
            ,
                  Founded in 2020, Zion Tech Group emerged from a vision to democratize advanced technology
                  and make AI and IT solutions accessible to businesses of all sizes. Our journey began when
                  our founder, Kleber Santos, recognized the growing gap between cutting-edge technology
                  and practical business implementation.
                
          </p>
                <p className="text-gray-300mb-4">
            Today, we&apos;ve grown into a trusted partner for organizations worldwide, helping them 
                  navigate the complex landscape of digital transformation while maintaining focus on 
                  security, scalability, and innovation.
                </p>
              </div>
              <div></div>
                <p className="text-gray-300mb-4">
            Our team combines deep technical expertise with real-world business understanding
                  ensuring that every solution we deliver not only meets technical requirements but
                  also drives tangible business value.
                </p>
                <p className="text-gray-300">
            We believe in the power of technology to solve complex problems and create opportunities
                  for growth, efficiency, and innovation across all industries.
                </p>
              </div>
            </div>
          </div>
          {/* Values Section */}
          <div className="mb-16"></div>
            <h2 className="text-3xl font-boldtext-whitetext-centermb-12">Our Values</h2>
            <div className="grid md:grid-cols-2lg:grid-cols-3gap-8">,
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6borderborder-white/20text-center"></div>
        </div>
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lgw-fitmx-automb-4"></div>
                      <Icon className="w-6h-6text-white" /></Icon>
                    </div>
                    <h3 className="text-xlfont-semiboldtext-whitemb-3">{value.title}</h3>
                    <p className="text-gray-300text-sm">
            {value.description}
          </p>
                  </div>
    </div>
    </div>
  );
                )
              })}
            </div>
          </div>
          {/* Team Section */}
          <div className="mb-16"></div>
            <h2 className="text-3xl font-boldtext-whitetext-centermb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2lg:grid-cols-4gap-8">,
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6borderborder-white/20text-center"></div>
        </div>
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4flex items-center justify-center"></div>
                    <span className="text-2xlfont-boldtext-white"></span>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lgfont-semiboldtext-whitemb-2">{member.name}</h3>
                  <p className="text-cyan-400text-smmb-3">
            {member.role}
          </p>
                  <p className="text-gray-300text-sm">
            {member.description}
          </p>
                </div>
              ))}
            </div>
          </div>
          {/* Stats Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xlp-8borderborder-white/20"></div>
            <h2 className="text-3xl font-boldtext-whitetext-centermb-8">By the Numbers</h2>
            <div className="gridmd:grid-cols-4gap-8">
        <div className="text-center">
                <div className="text-4xlfont-boldtext-whitemb-2">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center"></div>
                <div className="text-4xlfont-boldtext-whitemb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center"></div>
                <div className="text-4xlfont-boldtext-whitemb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center"></div>
                <div className="text-4xlfont-boldtext-whitemb-2">99.9%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>,
      </section>,
      {/* Mission & Vision */}
      <section className="py-20bg-slate-900"></section>
        <div className="containermx-autopx-4">
        <div className="grid md: grid-cols-2gap-12max-w-6xlmx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8rounded-xlborderborder-slate-600">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-centermb-6">
                <RocketLaunchIcon className="w-8h-8text-white" /></RocketLaunchIcon>
              </div>
              <h2 className="text-3xlfont-boldtext-whitemb-4">Our Mission</h2>,
              <p className="text-gray-300text-lgleading-relaxed">
            ,
                To democratize access to advanced AI and IT solutions, enabling businesses of all sizes
                to compete in the digital economy through innovative technology, exceptional service
                and transformative digital strategies.
              
          </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8rounded-xlborderborder-slate-600">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-centermb-6">
                <LightBulbIcon className="w-8h-8text-white" /></LightBulbIcon>
              </div>
              <h2 className="text-3xlfont-boldtext-whitemb-4">Our Vision</h2>
              <p className="text-gray-300text-lgleading-relaxed">
            To be the global leader in AI-powered business solutions, creating a world where
                technology seamlessly integrates with human potential to solve complex challenges
                and drive sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="py-20bg-gradient-to-rfrom-slate-900to-purple-900"></section>
        <div className="containermx-autopx-4">
        <div className="text-centermb-16">
            <h2 className="text-4xl md: text-5xlfont-boldtext-whitemb-6"></h2>
              Our Core Values
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
            The principles that guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-3gap-8max-w-6xlmx-auto">
        <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-centerjustify-centermx-automb-6"></div>
                <HeartIcon className="w-10h-10text-white" /></HeartIcon>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-4">Passion</h3>
              <p className="text-gray-300">
            We&apos;re passionate about technology and its potential to transform businesses and improve lives.
              </p>
            </div>
            <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-centerjustify-centermx-automb-6">
                <ShieldCheckIcon className="w-10h-10text-white" /></ShieldCheckIcon>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-4">Integrity</h3>
              <p className="text-gray-300">
            We maintain the highest ethical standards in all our business practices and client relationships.
              </p>
            </div>
            <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-centerjustify-centermx-automb-6">
                <LightBulbIcon className="w-10h-10text-white" /></LightBulbIcon>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-4">Innovation</h3>
              <p className="text-gray-300">
            We continuously push the boundaries of what&apos;s possible with cutting-edge technology solutions.
              </p>
            </div>
            <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-centerjustify-centermx-automb-6">
                <UserGroupIcon className="w-10h-10text-white" /></UserGroupIcon>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-4">Collaboration</h3>
              <p className="text-gray-300">
            We believe in the power of teamwork and work closely with our clients as partners.
              </p>
            </div>
            <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-centerjustify-centermx-automb-6">
                <StarIcon className="w-10h-10text-white" /></StarIcon>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-4">Excellence</h3>,
              <p className="text-gray-300">
            ,
                We strive for excellence in every project, delivering solutions that exceed expectations.
              
          </p>
            </div>
            <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-centerjustify-centermx-automb-6">
                <RocketLaunchIcon className="w-10h-10text-white" /></RocketLaunchIcon>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-4">Growth</h3>
              <p className="text-gray-300">
            We&apos;re committed to continuous learning and helping our clients achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20bg-slate-900"></section>
        <div className="containermx-autopx-4">
        <div className="text-centermb-16">
            <h2 className="text-4xl md: text-5xlfont-boldtext-whitemb-6"></h2>
              Meet Our Team
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
            A diverse group of talented professionals passionate about technology and innovation
            </p>
          </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-3gap-8max-w-6xlmx-auto">
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xlborderborder-slate-600text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-centerjustify-centermx-automb-6"></div>
                <span className="text-whitefont-boldtext-2xl">K</span>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-2">Kleber</h3>
              <p className="text-purple-400font-semiboldmb-4">
            CEO & Founder
          </p>
              <p className="text-gray-300">
            Visionary leader with over 4 years of experience in AI and technology solutions.
                Passionate about digital transformation and business growth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xlborderborder-slate-600text-center">
        <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-centerjustify-centermx-automb-6">
                <span className="text-whitefont-boldtext-2xl">A</span>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-2">AI Team</h3>
              <p className="text-cyan-400font-semiboldmb-4">
            Machine Learning Engineers
          </p>,
              <p className="text-gray-300">
            ,
                Expert team specializing in artificial intelligence, machine learning
                and data science solutions for complex business challenges.
              
          </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xlborderborder-slate-600text-center">
        <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-centerjustify-centermx-automb-6">
                <span className="text-whitefont-boldtext-2xl">D</span>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-2">DevOps Team</h3>
              <p className="text-green-400font-semiboldmb-4">
            Cloud & Infrastructure
          </p>
              <p className="text-gray-300">
            Specialists in cloud infrastructure, cybersecurity, and DevOps practices
                ensuring scalable and secure technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20bg-gradient-to-rfrom-slate-900to-purple-900"></section>
        <div className="containermx-autopx-4">
        <div className="text-centermb-16">
            <h2 className="text-4xl md: text-5xlfont-boldtext-whitemb-6"></h2>
              Our Impact
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
            Numbers that reflect our commitment to excellence and client success
            </p>
          </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-4gap-8max-w-6xlmx-auto">
        <div className="text-center">
              <div className="text-5xlfont-boldtext-purple-400mb-2">50+</div>
              <div className="text-gray-300text-lg">Projects Completed</div>
            </div>
            <div className="text-center"></div>
              <div className="text-5xlfont-boldtext-cyan-400mb-2">25+</div>
              <div className="text-gray-300text-lg">Happy Clients</div>
            </div>
            <div className="text-center"></div>
              <div className="text-5xlfont-boldtext-green-400mb-2">99%</div>
              <div className="text-gray-300text-lg">Success Rate</div>
            </div>
            <div className="text-center"></div>
              <div className="text-5xlfont-boldtext-yellow-400mb-2">4+</div>
              <div className="text-gray-300text-lg">Years Experience</div>
            </div>
          </div>
        </div>,
      </section>,
      {/* CTA Section */}
      <section className="py-20bg-slate-900"></section>
        <div className="containermx-autopx-4">
        <div className="max-w-4xlmx-autotext-center">
            <h2 className="text-4xl md: text-5xlfont-boldtext-whitemb-8"></h2>
              Ready to Work With Us?
            </h2>
            <p className="text-xltext-gray-300mb-12">
            Let&apos;s discuss how we can help transform your business with our technology solutions
            </p>
            
            <div className="flex flex-colsm:flex-rowgap-4justify-center"></div>
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-centergap-2"
              ></Link>
                Get In Touch
                <ArrowRightIcon className="w-5h-5" /></ArrowRightIcon>
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-centergap-2"
              ></Link>
                View Our Services
                <ArrowRightIcon className="w-5h-5" /></ArrowRightIcon>
              </Link>
            </div>
          </div>
        </div>
      </section>
</div>,
  );,
}