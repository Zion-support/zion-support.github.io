
<<<<<<< HEAD
<<<<<<< HEAD
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { ContactSection } from "@/components/ContactSection",
import Link from "next/link",
=======
import { SEO } from &quot;@/components/SEO&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { ContactSection } from &quot;@/components/ContactSection&quot;;
import Link from &quot;next/link&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function About() {
  const team = [
    {
      name: &quot;Alex Johnson&quot;,
      role: &quot;CEO&quot;,
      image:
        &quot;https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80&quot;,
      bio:
        &quot;Alex Johnson leads Zion as CEO, driving the company's vision to democratize AI globally. With over a decade of experience in technology startups, Alex previously built enterprise platforms adopted by Fortune 500 companies. At Zion, he focuses on building partnerships and ensuring that innovation benefits everyone. Alex believes in open collaboration and empowers the team to push boundaries while upholding transparency. Outside work, he mentors young entrepreneurs and enjoys exploring new cultures. He loves hiking, reading science fiction, and cooking.&quot;
    },
    {
      name: &quot;Maria Chen&quot;,
      role: &quot;CTO&quot;,
      image:
        &quot;https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80&quot;,
      bio:
        &quot;Maria Chen, Zion's CTO, oversees the platform's technical strategy and architecture. She has led engineering teams at several AI-focused startups, delivering scalable solutions that power millions of users. At Zion, Maria champions a culture of experimentation and rigorous security, ensuring the marketplace remains reliable and cutting-edge. She collaborates closely with open-source communities and mentors young developers in her spare time. Maria holds a master's in computer science and enjoys painting landscapes when she's not coding. She also loves robotics projects.&quot;
    },
    {
      name: &quot;Sam Lee&quot;,
      role: &quot;Head of Community&quot;,
      image:
        &quot;https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80&quot;,
      bio:
        &quot;Sam Lee serves as Zion's Head of Community, cultivating relationships with developers, partners, and customers worldwide. He previously launched multiple tech communities that grew from small meetups into thriving networks. At Zion, Sam orchestrates events, online forums, and mentorship programs that encourage collaboration and knowledge sharing. His empathetic approach helps newcomers feel welcomed while promoting an inclusive culture. Sam studied communications and has a background in user advocacy. In his downtime, he enjoys photography and traveling with his family, often.&quot;
    }
  ],

  const timeline = [
    {
      year: &quot;2019&quot;,
      text:
        &quot;Company founded to link AI innovators with businesses through a truly open global marketplace worldwide.&quot;
    },
    {
      year: &quot;2020&quot;,
      text:
        &quot;Launched early beta, inviting first users to explore collaborative tools and provide invaluable feedback insights.&quot;
    },
    {
      year: &quot;2021&quot;,
      text:
        &quot;Closed seed round, expanding engineering team to accelerate development and scale infrastructure globally for growth.&quot;
    },
    {
      year: &quot;2022&quot;,
      text:
        &quot;Released ZionGPT core, forging partnerships with industry leaders across multiple high-tech sectors to drive innovation.&quot;
    },
    {
      year: &quot;2023&quot;,
      text:
        &quot;Hosted inaugural Zion Summit showcasing real-world deployments and collaborative community-driven innovation from around the world.&quot;
    },
    {
      year: &quot;2024&quot;,
      text:
        &quot;Expanded into decentralized talent marketplace empowering creators worldwide to launch cutting-edge AI solutions and collaborate.&quot;
    }
  ],
=======
import Link from "next/link";

export default function About() {_const _team = [
    {
      name: "Alex Johnson", _role: "CEO", _image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80", _bio:
        "Alex Johnson leads Zion as CEO, _driving the company's vision to democratize AI globally. With over a decade of experience in technology startups, _Alex previously built enterprise platforms adopted by Fortune 500 companies. At Zion, _he focuses on building partnerships and ensuring that innovation benefits everyone. Alex believes in open collaboration and empowers the team to push boundaries while upholding transparency. Outside work, _he mentors young entrepreneurs and enjoys exploring new cultures. He loves hiking, _reading science fiction, _and cooking."},
    {_name: "Maria Chen", _role: "CTO", _image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80", _bio:
        "Maria Chen, _Zion's CTO, _oversees the platform's technical strategy and architecture. She has led engineering teams at several AI-focused startups, _delivering scalable solutions that power millions of users. At Zion, _Maria champions a culture of experimentation and rigorous security, _ensuring the marketplace remains reliable and cutting-edge. She collaborates closely with open-source communities and mentors young developers in her spare time. Maria holds a master's in computer science and enjoys painting landscapes when she's not coding. She also loves robotics projects."},
    {_name: "Sam Lee", _role: "Head of Community", _image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80", _bio:
        "Sam Lee serves as Zion's Head of Community, _cultivating relationships with developers, _partners, _and customers worldwide. He previously launched multiple tech communities that grew from small meetups into thriving networks. At Zion, _Sam orchestrates events, _online forums, _and mentorship programs that encourage collaboration and knowledge sharing. His empathetic approach helps newcomers feel welcomed while promoting an inclusive culture. Sam studied communications and has a background in user advocacy. In his downtime, _he enjoys photography and traveling with his family, _often."}
  ];

  const _timeline = [
    {_year: "2019", _text:
        "Company founded to link AI innovators with businesses through a truly open global marketplace worldwide."},
    {_year: "2020", _text:
        "Launched early beta, _inviting first users to explore collaborative tools and provide invaluable feedback insights."},
    {_year: "2021", _text:
        "Closed seed round, _expanding engineering team to accelerate development and scale infrastructure globally for growth."},
    {_year: "2022", _text:
        "Released ZionGPT core, _forging partnerships with industry leaders across multiple high-tech sectors to drive innovation."},
    {_year: "2023", _text:
        "Hosted inaugural Zion Summit showcasing real-world deployments and collaborative community-driven innovation from around the world."},
    {_year: "2024", _text:
        "Expanded into decentralized talent marketplace empowering creators worldwide to launch cutting-edge AI solutions and collaborate."}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <SEO 
<<<<<<< HEAD
        title=&quot;About Zion - The Future of AI & Tech Marketplace&quot; 
        description=&quot;Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence.&quot; 
        keywords=&quot;about Zion, AI marketplace, tech platform, mission, vision, team&quot;
        canonical=&quot;https://app.ziontechgroup.com/about&quot;
=======
        title="About Zion - The Future of AI & Tech Marketplace" 
        description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence." 
        keywords="about Zion, _AI marketplace, _tech platform, _mission, _vision, _team"
        canonical="https://app.ziontechgroup.com/about"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
      <main className=&quot;min-h-screen bg-zion-blue pt-24 pb-20&quot;>
        <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8 space-y-24&quot;>
          <div className=&quot;text-center content-section&quot;>
            <GradientHeading>About Zion</GradientHeading>
            <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
              The world's first free marketplace dedicated to high-tech and artificial intelligence
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-center content-section&quot;>
            <div>
<<<<<<< HEAD
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Our Mission</h2>
              <p className=&quot;text-zion-slate-light text-lg mb-6&quot;>
                At Zion, we're on a mission to democratize access to cutting-edge AI and technology solutions. 
                We believe that innovation thrives when barriers are removed and connections are made.
              </p>
              <p className=&quot;text-zion-slate-light text-lg mb-6&quot;>
                Our platform brings together talented AI specialists, innovative companies, and the latest 
                technological solutions in one seamless ecosystem.
              </p>
              <p className=&quot;text-zion-slate-light text-lg&quot;>
                By connecting talent with opportunity and innovation with implementation, we're creating 
=======
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-zion-slate-light text-lg mb-6">
                At Zion, _we're on a mission to democratize access to cutting-edge AI and technology solutions. 
                We believe that innovation thrives when barriers are removed and connections are made.
              </p>
              <p className="text-zion-slate-light text-lg mb-6">
                Our platform brings together talented AI specialists, _innovative companies, _and the latest 
                technological solutions in one seamless ecosystem.
              </p>
              <p className="text-zion-slate-light text-lg">
                By connecting talent with opportunity and innovation with implementation, _we're creating 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                a global community where the future of technology is being built today.
              </p>
            </div>
            <div className=&quot;rounded-lg overflow-hidden relative w-full h-full&quot;>
              <img
                src=&quot;https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600&q=80&quot;
                alt=&quot;Team collaboration&quot;
                className=&quot;object-cover&quot;
              />
            </div>
          </div>
          
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse content-section&quot;>
            <div>
<<<<<<< HEAD
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Our Vision</h2>
              <p className=&quot;text-zion-slate-light text-lg mb-6&quot;>
                We envision a world where AI and technology are accessible to all, regardless of geographical 
                or financial constraints. A world where the best minds can collaborate to solve the most 
                challenging problems.
              </p>
              <p className=&quot;text-zion-slate-light text-lg mb-6&quot;>
                Zion is building that world by creating a transparent, ethical, and inclusive platform 
                that puts people at the center of technological advancement.
              </p>
              <p className=&quot;text-zion-slate-light text-lg&quot;>
                Our goal is to become the premier destination for AI and tech innovation, fostering 
                a community that shapes the future of how we live, work, and interact with technology.
=======
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-zion-slate-light text-lg mb-6">
                We envision a world where AI and technology are accessible to all, _regardless of geographical 
                or financial constraints. A world where the best minds can collaborate to solve the most 
                challenging problems.
              </p>
              <p className="text-zion-slate-light text-lg mb-6">
                Zion is building that world by creating a transparent, _ethical, _and inclusive platform 
                that puts people at the center of technological advancement.
              </p>
              <p className="text-zion-slate-light text-lg">
                Our goal is to become the premier destination for AI and tech innovation, _fostering 
                a community that shapes the future of how we live, _work, _and interact with technology.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
            </div>
            <div className=&quot;rounded-lg overflow-hidden lg:order-first relative w-full h-full&quot;>
              <img
                src=&quot;https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600&q=80&quot;
                alt=&quot;Tech innovation&quot;
                className=&quot;object-cover&quot;
              />
            </div>
          </div>
          
<<<<<<< HEAD
          <div className=&quot;text-center content-section&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-8&quot;>Our Values</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              <div className=&quot;bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light&quot;>
                <div className=&quot;bg-zion-blue inline-flex p-4 rounded-full mb-4&quot;>
                  <svg className=&quot;w-8 h-8 text-zion-cyan&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
=======
          <div className="text-center content-section">
            <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M13 10V3L4 14h7v7l9-11h-7z" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </svg>
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>Innovation</h3>
                <p className=&quot;text-zion-slate-light&quot;>
                  We embrace cutting-edge technologies and creative thinking to push the boundaries of what's possible.
                </p>
              </div>
              
<<<<<<< HEAD
              <div className=&quot;bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light&quot;>
                <div className=&quot;bg-zion-blue inline-flex p-4 rounded-full mb-4&quot;>
                  <svg className=&quot;w-8 h-8 text-zion-purple&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z&quot; />
=======
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </svg>
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>Community</h3>
                <p className=&quot;text-zion-slate-light&quot;>
                  We believe in the power of collaboration and fostering an inclusive ecosystem where everyone can thrive.
                </p>
              </div>
              
<<<<<<< HEAD
              <div className=&quot;bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light&quot;>
                <div className=&quot;bg-zion-blue inline-flex p-4 rounded-full mb-4&quot;>
                  <svg className=&quot;w-8 h-8 text-zion-cyan&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                  </svg>
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>Trust</h3>
              <p className=&quot;text-zion-slate-light&quot;>
                  We maintain the highest standards of integrity, transparency, and ethical practices in everything we do.
=======
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Trust</h3>
              <p className="text-zion-slate-light">
                  We maintain the highest standards of integrity, _transparency, _and ethical practices in everything we do.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </p>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          <div className=&quot;content-section&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-8 text-center&quot;>Company Timeline</h2>
            <ol className=&quot;relative border-l border-zion-blue-light pl-6 max-w-3xl mx-auto&quot;>
              {timeline.map((event) => (
                <li key={event.year} className=&quot;mb-10 ml-4&quot;>
                  <span className=&quot;absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-zion-cyan&quot; />
                  <time className=&quot;font-semibold text-white&quot;>{event.year}</time>
                  <p className=&quot;text-zion-slate-light mt-2&quot;>{event.text}</p>
=======
          <div className="content-section">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Company Timeline</h2>
            <ol className="relative border-l border-zion-blue-light pl-6 max-w-3xl mx-auto">
              {_timeline.map((event) => (
                <li key={event.year} className="mb-10 ml-4">
                  <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-zion-cyan" />
                  <time className="font-semibold text-white">{_event.year}</time>
                  <p className="text-zion-slate-light mt-2">{_event.text}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </li>
              ))}
            </ol>
          </div>

<<<<<<< HEAD
          <div className=&quot;content-section text-center&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-8&quot;>Meet the Team</h2>
            <div className=&quot;grid grid-cols-1 sm:grid-cols-3 gap-8&quot;>
              {team.map((member) => (
                <div key={member.name} className=&quot;text-center space-y-3&quot;>
                  <div className=&quot;relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden&quot;>
                    <img
                      src={member.image}
                      alt={member.name}
                      className=&quot;object-cover rounded-full&quot;
                    />
                  </div>
                  <p className=&quot;text-white font-bold&quot;>{member.name}</p>
                  <p className=&quot;text-zion-slate-light&quot;>{member.role}</p>
                  <p className=&quot;text-zion-slate-light text-sm&quot;>{member.bio}</p>
=======
          <div className="content-section text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {_team.map(_(member) => (
                <div key={member.name} className="text-center space-y-3">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={_member.image}
                      alt={_member.name}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <p className="text-white font-bold">{_member.name}</p>
                  <p className="text-zion-slate-light">{_member.role}</p>
                  <p className="text-zion-slate-light text-sm">{_member.bio}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              ))}
            </div>
          </div>

          <div className=&quot;content-section text-center&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Press Kit</h2>
            <p className=&quot;text-zion-slate-light mb-4&quot;>Download our logos, color palette and press release templates.</p>
            <a
              href=&quot;/toolkit_assets/media_kit.zip&quot;
              download
              className=&quot;text-zion-cyan underline&quot;
            >
              Download Media Kit (.zip)
            </Link>
          </div>
        </div>

<<<<<<< HEAD
        <div className=&quot;content-section text-center&quot;>
          <p className=&quot;text-zion-slate-light text-lg&quot;>
            Ready to work with us? Explore our{' '}
            <Link href=&quot;/services&quot; legacyBehavior>
              <a className=&quot;text-zion-cyan underline&quot;>AI & IT services</Link>
            </Link>{' '}
            or{' '}
            <Link href=&quot;/contact&quot; className=&quot;text-zion-cyan underline&quot;>get in touch</Link>. For the latest updates, visit our{' '}
            <Link href=&quot;/blog&quot; legacyBehavior>
              <a className=&quot;text-zion-cyan underline&quot;>blog</Link>
=======
        <div className="content-section text-center">
          <p className="text-zion-slate-light text-lg">
            Ready to work with us? Explore our{_' '}
            <Link href="/services" legacyBehavior>
              <a className="text-zion-cyan underline">AI & IT services</a>
            </Link>{_' '}
            or{_' '}
            <Link href="/contact" className="text-zion-cyan underline">get in touch</Link>. For the latest updates, visit our{_' '}
            <Link href="/blog" legacyBehavior>
              <a className="text-zion-cyan underline">blog</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Link>
            .
          </p>
        </div>

        <ContactSection />
      </main>
    </>
  )
}
