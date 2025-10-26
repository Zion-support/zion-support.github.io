import { Star, Shield, Link } from 'lucide-react;'
import React from 'react;'
import Link from 'next/link'
import { 
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,;
  StarIcon;
} from '@heroicons/react/24/outline';'
export default function; AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven','
      description: 'We are committed to delivering innovative solutions that drive real business value and transformation.''
    },
    {
      icon: Users,
      title: 'Client-Focused','
      description: 'Our success is measured by our clients\' success. We build lasting partnerships based on trust and results.''
    },
    {
      icon: Award,
      title: 'Excellence','
      description: 'We maintain the highest standards of quality and continuously strive for excellence in everything we do.''
    },
    {
      icon: Lightbulb,
      title: 'Innovation','
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex business challenges.''
    },
    {
      icon: Shield,
      title: 'Integrity','
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.''
    },
    {
      icon: Zap,
      title: 'Agility','
      description: 'We adapt quickly to changing market conditions and client needs to deliver optimal solutions.''
    }
  ];
return const values = [{
icon: "Target",title: "Mission-Driven",description: "We are committed to delivering innovative solutions that drive real business value and transformation."""
}
  {
icon: "Users",title: "Client-Focused",description: "Our success is measured by our clients\" success. We build lasting partnerships based on trust and results."}""
  {
icon: "Award",title: "Excellence",description: "We maintain the highest standards of quality and continuously strive for excellence in everything we do."}""
  {
icon: "Lightbulb",title: "Innovation",description: "We embrace cutting-edge technologies and creative approaches to solve complex business challenges."}""
  {
icon: "Shield",title: "Integrity",description: "We conduct business with honesty",transparency, and ethical practices in all our interactions.""
}
  {
icon: "Zap",title: "Agility",description: "We adapt quickly to changing market conditions and client needs to deliver optimal solutions."}""
  ];
const team = [{
name: "Kleber Santos",role: "CEO & Founder",description: "Visionary leader with 15+years in AI and technology innovation."}""
    {
name: "Sarah Johnson",role: "CTO",description: "Technical expert specializing in cloud architecture and AI implementation."}""
    {
name: "Michael Chen",role: "Head of Security",description: "Cybersecurity specialist with expertise in enterprise security solutions."}""
    {
name: "Emily Rodriguez",role: "Lead AI Engineer",description: "Machine learning expert focused on developing cutting-edge AI solutions."}""
  ];
return (<div></div>)
      <Helmet />

        <title>About Us - Zion Tech Group</title>
        
        <meta name="description" content="Learn about Zion Tech Group&apos;s, mission, values, and expertise in AI and IT solutions. Discover our team and company culture." / />""
        <meta name="keywords" content="about, us, company, team, mission, values, AI, solutions, IT services" / />""

      </Helmet>
    </div>
      {/* Hero Section*/} <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /> <div className="[^"]*"></div> <div className="[^"]*"></div> <h1 className="[^"]*">""
About Zion Tech Group</h1>
            </h1> <p className="[^"]*">""
Empowering businesses through innovative technology solutions and cutting-edge AI applications</p>
            </p> <p className="[^"]*">""
Founded, in, 2020,we&apos;ve been at the forefront of, digital, transformation, </p>
helping companies leverage the power of, artificial, intelligence, cybersecurity, </p>
and cloud technologies to achieve unprecedented growth.            </p>

          {/* Company Story*/} <div className="[^"]*"></div>""
    <h1 className="text-3 xl font-bold text-white mb-6">Our Story</h2>""
    <div className="grid md: grid-cols-2 gap-8"></div>""
      <div /></div> <p className="[^"]*">""
Founded, in, 2020,Zion Tech Group emerged from a vision to democratize advanced technology,
and make AI and IT solutions accessible to businesses of all sizes. Our journey began when, our, founder, Kleber, Santos, recognized the growing gap between cutting-edge technology,
and practical business implementation.</p>
</p> <p className="[^"]*">""
                  Today, we&apos;ve grown into a trusted partner for, organizations, worldwide, helping them,
navigate the complex landscape of digital transformation while maintaining focus on </p>
security, scalability, and innovation.</p>
                </p>

              <div /></div> <p className="[^"]*">""
Our team combines deep technical expertise with real-world business understanding,
ensuring that every solution we deliver not only meets technical requirements but</p>
also drives tangible business value.</p>
                <p />We believe in the power of technology to solve complex problems and create opportunities, for, growth, efficiency, and innovation across all industries.</p>
</p>

          {/* Values Section*/} <div className="[^"]*"></div>""
    <h1 className="text-3 xl font-bold text-white text-center mb-12">Our Values</h2>""
    <divclassName="grid md: "grid-cols-2 l",""
g: grid-cols-3 gap-8" /></div>)""
              {values.map((value,index) => {
const Icon = value.icon,
return (<div></div>)
      <divkey={index};className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center" /></div>""
    </div> <div className="[^"]*"></div> <Icon className="w-6 h-6 text-white" />""
    <h1 className="text-xlfont-semiboldtext-whitemb-3">{value.title}</h3> <p className="[^"]*">""
            {value.description}
          </p>
)
  )
              })}

          {/* Team Section*/} <div className="[^"]*"></div>""
    <h1 className="text-3 xl font-bold text-white text-center mb-12">Meet Our Team</h2>""
    <divclassName="grid md: "grid-cols-2 l",""
g: grid-cols-4 gap-8" /></div>""
              {team.map((member,index) => (<divkey = {index};className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center" /></div> <div className="[^"]*"></div> <span className="text-2 xl font-bold text-white" />")"
                      {member.name.split(" ").map(n => n[0,]).join(")}</span>""
                    </span>
    <h1 className="text-lgfont-semiboldtext-whitemb-2">{member.name}</h3> <p className="[^"]*">""
            {member.role}
          </p> <p className="[^"]*">""
            {member.description}
          </p>

          {/* Stats Section*/} <div className="[^"]*"></div>""
    <h1 className="text-3 xl font-bold text-white text-center mb-8">By the Numbers</h2> <div className="[^"]*"></div>,<div className="[^"]*"></div> <div className="[^"]*"></div>500+<div className="[^"]*"></div>Projects, Delivered <div className="[^"]*"></div> <div className="[^"]*"></div>50+<div className="[^"]*"></div>Happy, Clients <div className="[^"]*"></div> <div className="[^"]*"></div>15+<div className="[^"]*"></div>Years, Experience <div className="[^"]*"></div> <div className="[^"]*"></div>99.9% <div className="[^"]*"></div>Client, Satisfaction""

        ,</section>
      {/* Mission & Vision*/} <section className="py-20 bg-slate-900" /> <div className="[^"]*"></div> <div className="[^"]*"></div>,<div className="[^"]*"></div> <div className="[^"]*"></div> <RocketLaunchIcon className="w-8 h-8 text-white" />""
    <h1 className="text-3 xlfont-boldtext-whitemb-4">Our Mission</h2>,<p className="[^"]*">""

To democratize access to advanced AI and, IT, solutions, enabling businesses of all sizes,
to compete in the digital economy through, innovative, technology, exceptional service</p>
and transformative digital strategies.</p>
              </p> <div className="[^"]*"></div> <div className="[^"]*"></div> <LightBulbIcon className="w-8 h-8 text-white" />""
    <h1 className="text-3 xl font-bold text-white mb-4">Our Vision</h2> <p className="[^"]*">""
To be the global leader in AI-powered, business, solutions, creating a world where,
technology seamlessly integrates with human potential to solve complex challenges</p>
and drive sustainable growth.</p>
              </p>
      </section>
      {/* Values*/} <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900" /> <div className="[^"]*"></div> <div className="[^"]*"></div> <h1 className="[^"]*"></h2>""
Our Core Values</h2>
            </h2> <p className="[^"]*">""
The principles that guide everything we do and shape our company culture</p>
            </p>
          </div>,<divclassName="grid md: "grid-cols-2 l",""
g: grid-cols-3 gap-8 max-w-6 xl mx-auto" / /></div>,<div className="[^"]*"></div> <div className="[^"]*"></div> <HeartIcon className="w-10 h-10 text-white" />""
              </div>
    <h1 className="text-2 xl font-bold text-white mb-4">Passion</h3>""
              <p className="text-gray-300">;</p>""
We&apos;re passionate about technology and its potential to transform businesses and improve lives.</p>
              </p>
            </div> <div className="[^"]*"></div> <div className="[^"]*"></div> <ShieldCheckIcon className="w-10 h-10 text-white" />""
              </div>
    <h1 className="text-2 xl font-bold text-white mb-4">Integrity</h3> <p className="[^"]*">""
We maintain the highest ethical standards in all our business practices and client relationships.</p>
              </p>
            </div> <div className="[^"]*"></div> <div className="[^"]*"></div> <LightBulbIcon className="w-10 h-10 text-white" />""
              </div>
    <h1 className="text-2 xl font-bold text-white mb-4">Innovation</h3> <p className="[^"]*">""
                We continuously push the boundaries of what&apos;s possible with cutting-edge technology solutions.</p>
              </p>
            </div> <div className="[^"]*"></div> <div className="[^"]*"></div> <UserGroupIcon className="w-10 h-10 text-white" />""
              </div>
    <h1 className="text-2 xl font-bold text-white mb-4">Collaboration</h3> <p className="[^"]*">""
We believe in the power of teamwork and work closely with our clients as partners.</p>
              </p>
            </div> <div className="[^"]*"></div> <div className="[^"]*"></div> <StarIcon className="w-10 h-10 text-white" />""
              </div>
    <h1 className="text-2 xl font-bold text-white mb-4">Excellence</h3> <p className="[^"]*">""
We strive for excellence in, every, project,delivering solutions that exceed expectations.</p>
              </p>
            </div> <div className="[^"]*"></div> <div className="[^"]*"></div> <RocketLaunchIcon className="w-10 h-10 text-white" />""
              </div>
    <h1 className="text-2 xl font-bold text-white mb-4">Growth</h3> <p className="[^"]*">""
                We&apos;re committed to continuous learning and helping our clients achieve sustainable growth.</p>
              </p>
            </div>
          </div>
        </div></section>
      {/* Team Section */,}<section className = "py-20 bg-slate-900" />,<div className="container mx-auto px-4" /></div>,<div className="text-center mb-16" /></div>,<h1 className="text-4 xl md: text-5 xl font-bold text-white mb-6" /></h2>""
Meet Our Team</h2></h2><p className="text-xl text-gray-300 max-w-3 xl mx-auto" />""
A diverse group of talented professionals passionate about technology and innovation</p></p></div>,<divclassName="grid md: "grid-cols-2 l",""
g: grid-cols-3 gap-8 max-w-6 xl mx-auto" / />,<div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 text-center" />,<div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6" />,<span className="text-white font-bold text-2 xl">K</span></div>,<h1 className="text-2 xlfont-boldtext-whitemb-2">Kleber</h3><p className="text-purple-400 font-semiboldmb-4" />""
CEO & Founder</p><p className="text-gray-300" />""
Visionary leader with over 4 years of experience in AI and technology solutions.</p>
Passionate about digital transformation and business growth.</p></p></div>,<div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 text-center" />,<div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6" />,<span className="text-white font-bold text-2 xl">A</span></div>,<h1 className="text-2 xlfont-boldtext-whitemb-2">AI Team</h3><p className="text-cyan-400 font-semiboldmb-4" />""
Machine Learning Engineers</p>,<p className="text-gray-300" />""
Expert team specializing in, artificial, intelligence, machine learning</p>
and data science solutions for complex business challenges.</p></p></div>,<div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 text-center" />,<div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6" />,<span className="text-white font-bold text-2 xl">D</span></div>,<h1 className="text-2 xlfont-boldtext-whitemb-2">DevOps Team</h3><p className="text-green-400 font-semiboldmb-4" />""
Cloud & Infrastructure</p><p className="text-gray-300" />""
        </div>
      </section>
      {/* Team Section*/} <section className="py-20 bg-slate-900" /> <div className="[^"]*"></div> <div className="[^"]*"></div> <h1 className="[^"]*"></h2>""
Meet Our Team</h2>
            </h2> <p className="[^"]*">""
A diverse group of talented professionals passionate about technology and innovation</p>
            </p>
          </div>,<divclassName="grid md: "grid-cols-2 l",""
g: grid-cols-3 gap-8 max-w-6 xl mx-auto" / /></div>,<div className="[^"]*"></div> <div className="[^"]*"></div>""
    <span className="text-white font-bold text-2 xl">K</span>""
              </div>
    <h1 className="text-2 xlfont-boldtext-whitemb-2">Kleber</h3> <p className="[^"]*">""
CEO & Founder
          </p> <p className="[^"]*">""
Visionary leader with over 4 years of experience in AI and technology solutions.</p>
Passionate about digital transformation and business growth.</p>
              </p>
            </div> <div className="[^"]*"></div> <div className="[^"]*"></div>""
    <span className="text-white font-bold text-2 xl">A</span>""
              </div>
    <h1 className="text-2 xlfont-boldtext-whitemb-2">AI Team</h3> <p className="[^"]*">""
Machine Learning Engineers
          </p>,<p className="[^"]*">""
Expert team specializing in, artificial, intelligence, machine learning</p>
and data science solutions for complex business challenges.</p>
              </p>
            </div> <div className="[^"]*"></div> <div className="[^"]*"></div>""
    <span className="text-white font-bold text-2 xl">D</span>""
              </div>
    <h1 className="text-2 xlfont-boldtext-whitemb-2">DevOps Team</h3> <p className="[^"]*">""
Cloud & Infrastructure
          </p> <p className="[^"]*">""
Specialists in, cloud, infrastructure, cybersecurity, and DevOps practices</p>
ensuring scalable and secure technology solutions.</p>
              </p>
            </div>
          </div>
        </div></section>
      {/* Stats Section */}<section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900" />,<div className="container mx-auto px-4" /></div>,<div className="text-center mb-16" /></div>,<h1 className="text-4 xl md: text-5 xl font-bold text-white mb-6" /></h2>""
Our Impact</h2></h2><p className="text-xl text-gray-300 max-w-3 xl mx-auto" />""
Numbers that reflect our commitment to excellence and client success</p></p></div>,<divclassName="grid md: "grid-cols-2 l",""
g: grid-cols-4 gap-8 max-w-6 xl mx-auto" / />,<div className="text-center" />,<div className="text-5 xl font-bold text-purple-400 mb-2">50+</div>,<div className="text-gray-300 text-lg">Projects Completed</div></div>,<div className="text-center" />,<div className="text-5 xl font-bold text-cyan-400 mb-2">25+</div>,<div className="text-gray-300 text-lg">Happy Clients</div></div>,<div className="text-center" />,<div className="text-5 xl font-bold text-green-400 mb-2">99%</div>,<div className="text-gray-300 text-lg">Success Rate</div></div>,<div className="text-center" />,<div className="text-5 xl font-bold text-yellow-400 mb-2">4+</div>,<div className="text-gray-300 text-lg">Years Experience</div>""
            </div>
          </div></div>,</section>
      {/* CTA Section */}<section className="py-20 bg-slate-900" />,<div className="container mx-auto px-4" /></div>,<div className="max-w-4 xl mx-auto text-center" /></div>,<h1 className="text-4 xl md: text-5 xl font-bold text-white mb-8" /></h2>""
Ready to Work With Us?</h2></h2>;<p className="text-xl text-gray-300 mb-12" />""
Let&apos;s discuss how we can help transform your business with our technology solutions</p></p>,<div className = "flex flex-col sm: flex-row gap-4 justify-center" /></div><Linkhref="/contact""
className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2" />""

Get In Touch</Link></div><ArrowRightIcon className="w-5 h-5" /></Link><Linkhref="/services""
className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover: "bg-purple-400 hove",""
r: text-white transition-all duration-300 flex items-center justify-center gap-2" />""
View Our Services</Link><ArrowRightIcon className="w-5 h-5" />""
        </div>
      </section>
      {/* Stats Section */}<section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900" />,<div className="container mx-auto px-4" / /></div>,<div className="text-center mb-16" / /></div>,<h1 className="text-4 xl md: text-5 xl font-bold text-white mb-6" /></h2>""
Our Impact</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto" /  />""
Numbers that reflect our commitment to excellence and client success</p>
            </p>
          </div>,<div className="grid md: "grid-cols-2 l",""
g: grid-cols-4 gap-8 max-w-6 xl mx-auto" / />,<div className="text-center" / />,<div className="text-5 xl font-bold text-purple-400 mb-2">50+</><div className="text-gray-300 text-lg">Projects Completed</div>""
            </><div className="text-center" / />,<div className="text-5 xl font-bold text-cyan-400 mb-2">25+</><div className="text-gray-300 text-lg">Happy Clients</div>""
            </><div className="text-center" / />,<div className="text-5 xl font-bold text-green-400 mb-2">99%</><div className="text-gray-300 text-lg">Success Rate</div>""
            </><div className="text-center" / />,<div className="text-5 xl font-bold text-yellow-400 mb-2">4+</><div className="text-gray-300 text-lg">Years Experience</div>""
            </div>
          </div>
        </div>,</section>
      {/* CTA Section */}<section className="py-20 bg-slate-900" />,<div className="container mx-auto px-4" / /></div>,<div className="max-w-4 xl mx-auto text-center" / /></div>,<h1 className="text-4 xl md: text-5 xl font-bold text-white mb-8" /></h2>""
Ready to Work With Us?</h2>
            </><p className="text-xl text-gray-300 mb-12" / />""
Let&apos;s discuss how we can help transform your business with our technology solutions</p>
            </p>,<div className="flex flex-col sm: flex-row gap-4 justify-center" /></div><Link href="/contact""
className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"  />""
Get In Touch
      </Link>
    </div>
                <ArrowRightIcon className="w-5 h-5" /  />;</Link>""
              <Link href="/services""
className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover: "bg-purple-400 hove",""
r: text-white transition-all duration-300 flex items-center justify-center gap-2"  />""
View Our Services</Link>
                <ArrowRightIcon className="w-5 h-5" /  />""
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section*/} <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900" /> <div className="[^"]*"></div> <div className="[^"]*"></div> <h1 className="[^"]*"></h2>""
Our Impact</h2>
            </h2> <p className="[^"]*">""
Numbers that reflect our commitment to excellence and client success</p>
            </p>
          </div>,<divclassName="grid md: "grid-cols-2 l",""
g: grid-cols-4 gap-8 max-w-6 xl mx-auto" / /></div>,<div className="[^"]*"></div>""
    <div className="text-5 xl font-bold text-purple-400 mb-2">50+</div>""
    <div className="text-gray-300 text-lg">Projects Completed</div>""
            </div> <div className="[^"]*"></div>""
    <div className="text-5 xl font-bold text-cyan-400 mb-2">25+</div>""
    <div className="text-gray-300 text-lg">Happy Clients</div>""
            </div> <div className="[^"]*"></div>""
    <div className="text-5 xl font-bold text-green-400 mb-2">99%</div>""
    <div className="text-gray-300 text-lg">Success Rate</div>""
            </div> <div className="[^"]*"></div>""
    <div className="text-5 xl font-bold text-yellow-400 mb-2">4+</div>""
    <div className="text-gray-300 text-lg">Years Experience</div>""
            </div>
          </div>
        </div>,</section>
      {/* CTA Section*/} <section className="py-20 bg-slate-900" /> <div className="[^"]*"></div> <div className="[^"]*"></div> <h1 className="[^"]*"></h2>""
Ready to Work With Us?</h2>
            </h2> <p className="[^"]*">""
Let&apos;s discuss how we can help transform your business with our technology solutions</p>
            </p>,<div className="[^"]*"></div>""
      <Linkhref="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2" />""

Get In Touch
      </Link>
    </div> <ArrowRightIcon className="w-5 h-5" />""
              </Link>
              <Linkhref="/services" className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover: "bg-purple-400 hove",""
r: text-white transition-all duration-300 flex items-center justify-center gap-2" />""
View Our Services</Link> <ArrowRightIcon className="w-5 h-5" />""
              </Link>
            </div>
          </div>
        </div>
      </section>
</div>
    </>
  )
}
