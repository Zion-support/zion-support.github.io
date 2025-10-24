import Link from 'next/link';
import { import { Shield, Star, ArrowRight, Shield, Users } from 'lucide-react';;

  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon,
  TagIcon,
  UsersIcon,
  TrophyIcon,
  ShieldCheckIcon as ShieldIcon,
  BoltIcon} from '@heroicons/react/24/outline';
export default function AboutPage() {

  const values = [;
    {;
      icon: TagIcon,;
      title: 'Mission-Driven',;
      description: 'We are committed to delivering innovative solutions that drive real business value and transformation.'},
    {;
      icon: UsersIcon,;
      title: 'Client-Focused',;
      description: 'Our success is measured by our clients\' success. We build lasting partnerships based on trust and results.'},
    {;
      icon: TrophyIcon,;
      title: 'Excellence',;
      description: 'We maintain the highest standards of quality and continuously strive for excellence in everything we do.'},
    {;
      icon: LightBulbIcon,;
      title: 'Innovation',;
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex business challenges.'},
    {;
      icon: ShieldIcon,;
      title: 'Integrity',;
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'
    },
    {;
      icon: BoltIcon,;
      title: 'Agility',;
      description: 'We adapt quickly to changing market conditions and client needs to deliver optimal solutions.'}
  ];

  const team = [
    {;
      name: 'Kleber Santos',;
      role: 'CEO & Founder',;
      description: 'Visionary leader with 15+ years in AI and technology innovation.'},
    {;
      name: 'Sarah Johnson',;
      role: 'CTO',;
      description: 'Technical expert specializing in cloud architecture and AI implementation.'},
    {;
      name: 'Michael Chen',;
      role: 'Head of Security',;
      description: 'Cybersecurity specialist with expertise in enterprise security solutions.'},
    {;
      name: 'Emily Rodriguez',;
      role: 'Lead AI Engineer',;
      description: 'Machine learning expert focused on developing cutting-edge AI solutions.'}
  ];

  return (
    
    <>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></section>
        <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">,
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Empowering businesses through innovative technology solutions and cutting-edge AI applications
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Founded in 2020, we&apos;ve been at the forefront of digital transformation, 
              helping companies leverage the power of artificial intelligence, cybersecurity, 
              and cloud technologies to achieve unprecedented growth.            </p>
          </div>

          {/* Company Story */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16"> </div><h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="grid md: grid-cols-2 gap-8">,
              <div> </div><p>Founded in 2020, Zion Tech Group emerged from a vision to democratize advanced technology
                  and make AI and IT solutions accessible to businesses of all sizes. Our journey began when
                  our founder, Kleber Santos, recognized the growing gap between cutting-edge technology
                  and practical business implementation.</p>
                <p>Today, we&apos;ve grown into a trusted partner for organizations worldwide, helping them 
                  navigate the complex landscape of digital transformation while maintaining focus on 
                  security, scalability, and innovation.</p>
              </div>
              <div> </div><p>Our team combines deep technical expertise with real-world business understanding
                  ensuring that every solution we deliver not only meets technical requirements but
                  also drives tangible business value.</p>
                <p>We believe in the power of technology to solve complex problems and create opportunities
                  for growth, efficiency, and innovation across all industries.</p>
              </div>
            </div>
          </div>
          {/* Values Section */}
          <div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {values.map((value, index) => {

                const Icon = value.icon
                return (
    
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"><div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mx-auto mb-4"> </div><Icon className="w-6 h-6 text-white" /> </Icon></div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </div>
    </div>
  )})}
            
          
          {/* Team Section */}
          <div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"><div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center"> </div><span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}
                    </span></span>
                  </div>
                  <h3 className="text-lgfont-semiboldtext-whitemb-2">{member.name}</h3>
                  <p className="text-cyan-400text-smmb-3">
            {member.role;
}
          </p>
                  <p className="text-gray-300text-sm">
            {member.description;
}
          </p>

          {/* Stats Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"> </div><h2 className="text-3xl font-bold text-white text-center mb-8">By the Numbers</h2>
            <div className="grid md: grid-cols-4 gap-8">,
              <div500+</div><div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center"><div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center"><div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center"><div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900"> </section><div className="container mx-auto px-4"><div className="text-center mb-16"> </div><h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
              Our Core Values
            </h2>
            <p>The principles that guide everything we do and shape our company culture</p>
          </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">,
            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"> </div><HeartIcon className="w-10 h-10 text-white" /> </HeartIcon></div>
              <h3 className="text-2xl font-bold text-white mb-4">Passion</h3>
              <p>We&apos;re passionate about technology and its potential to transform businesses and improve lives.</p>
            </div>
            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"> </div><ShieldCheckIcon className="w-10 h-10 text-white" /> </ShieldCheckIcon></div>
              <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
              <p>We maintain the highest ethical standards in all our business practices and client relationships.</p>
            </div>
            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"> </div><LightBulbIcon className="w-10 h-10 text-white" /> </LightBulbIcon></div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p>We continuously push the boundaries of what&apos;s possible with cutting-edge technology solutions.</p>
            </div>
            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"> </div><UserGroupIcon className="w-10 h-10 text-white" /> </UserGroupIcon></div>
              <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
              <p>We believe in the power of teamwork and work closely with our clients as partners.</p>
            </div>
            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6"> </div><StarIcon className="w-10 h-10 text-white" /> </StarIcon></div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p>We strive for excellence in every project, delivering solutions that exceed expectations.</p>
            </div>
            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"> </div><RocketLaunchIcon className="w-10 h-10 text-white" /> </RocketLaunchIcon></div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth</h3>
              <p>We&apos;re committed to continuous learning and helping our clients achieve sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900"></section>
        <div className="container mx-auto px-4"><div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>,
            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <HeartIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Passion</h3>
              <p className="text-gray-300">
                We're passionate about technology and its potential to transform businesses and improve lives.
              </p>
            </div>

            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-gray-300">
                We maintain the highest ethical standards in all our business practices and client relationships.
              </p>
            </div>

            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <LightBulbIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                We continuously push the boundaries of what's possible with cutting-edge technology solutions.
              </p>
            </div>

            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <UserGroupIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of teamwork and work closely with our clients as partners.
              </p>
            </div>

            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <StarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in every project, delivering solutions that exceed expectations.
              </p>
            </div>

            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth</h3>
              <p className="text-gray-300">
                We're committed to continuous learning and helping our clients achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900"> </section><div className="container mx-auto px-4"><div className="text-center mb-16"> </div><h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A diverse group of talented professionals passionate about technology and innovation
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>,
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 text-center"><div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Kleber</h3>
              <p className="text-purple-400 font-semibold mb-4">CEO & Founder</p>
              <p className="text-gray-300">
                Visionary leader with over 4 years of experience in AI and technology solutions. 
                Passionate about digital transformation and business growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 text-center"><div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">AI Team</h3>
              <p className="text-cyan-400 font-semibold mb-4">Machine Learning Engineers</p>
              <p className="text-gray-300">
                Expert team specializing in artificial intelligence, machine learning, 
                and data science solutions for complex business challenges.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 text-center"><div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <span className="text-white font-bold text-2xl">D</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">DevOps Team</h3>
              <p className="text-green-400 font-semibold mb-4">Cloud & Infrastructure</p>
              <p>Specialists in cloud infrastructure, cybersecurity, and DevOps practices
                ensuring scalable and secure technology solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900"> </section><div className="container mx-auto px-4"><div className="text-center mb-16"> </div><h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
              Our Impact
            </h2>
            <p>Numbers that reflect our commitment to excellence and client success</p>
          </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">,
            <div50+</div><div className="text-gray-300 text-lg">Projects Completed</div>
            </div>
            <div25+</div><div className="text-gray-300 text-lg">Happy Clients</div>
            </div>
            <div99%</div><div className="text-gray-300 text-lg">Success Rate</div>
            </div>
            <div4+</div><div className="text-gray-300 text-lg">Years Experience</div>
            </div>
          </div>
        </div>,
      </section>,
      {/* CTA Section */}
      <section className="py-20 bg-slate-900"> </section><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto text-center"> </div><h2 className="text-4xl md: text-5xl font-bold text-white mb-8">,
              Ready to Work With Us?
            </h2>
            <p>Let&apos;s discuss how we can help transform your business with our technology solutions</p>
            
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <Link href="/contact";
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2",
              ></Link>
            Get In Touch
                
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
              <Link href="/services";
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover: bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2",
              ></Link>
            View Our Services
                
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900"></section>
        <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-8">,
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how we can help transform your business with our technology solutions
            </p>
            
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <Link ;
                href="/contact";
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2",
              ></Link>
                Get In Touch
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link ;
                href="/services";
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover: bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2",
              ></Link>
                View Our Services
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )}