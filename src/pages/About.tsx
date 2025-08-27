import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Lightbulb, 
  Rocket, 
  Globe, 
  Users,
  TrendingUp,
  Shield,
  Award,
  Target
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible, embracing emerging technologies and creative solutions to solve complex challenges.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results for our clients.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships, working closely with clients and stakeholders to achieve shared success.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { value: "500+", label: "Global Clients", description: "Serving businesses worldwide" },
    { value: "25+", label: "Countries", description: "Global presence" },
    { value: "1000+", label: "Projects", description: "Successfully delivered" },
    { value: "99.9%", label: "Uptime", description: "Reliable service" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      description: "Leading our AI and quantum computing initiatives with 15+ years of experience in emerging technologies.",
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Cybersecurity",
      description: "Expert in zero-trust architecture and advanced threat protection with certifications in multiple security frameworks.",
      image: "/images/team/marcus-rodriguez.jpg"
    },
    {
      name: "Dr. Elena Petrov",
      role: "Quantum Research Lead",
      description: "Pioneering quantum algorithms and quantum-classical hybrid systems for enterprise applications.",
      image: "/images/team/elena-petrov.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We are a global technology company dedicated to transforming businesses through cutting-edge AI solutions, 
            quantum computing, and comprehensive IT services. Our mission is to democratize access to advanced 
            technology and drive innovation across industries.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes to 
                leverage AI, quantum computing, and advanced IT services to drive innovation and growth.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the global leader in AI-powered technology solutions, shaping the future of business 
                through innovation, sustainability, and human-centered design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{value.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Zion Tech Group by the Numbers</h2>
            <p className="text-xl text-cyan-100">
              Our impact and growth in the technology industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-cyan-100 mb-1">{stat.label}</div>
                <div className="text-sm text-cyan-200">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the experts driving innovation and leading our technology initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-cyan-400 text-center mb-3">{member.role}</p>
                <p className="text-gray-300 text-center text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
=======
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function About() {
	return (
		<>
			<SEO
				title="About Zion - The Future of AI & Tech Marketplace"
				description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence."
				keywords="about Zion, AI marketplace, tech platform, mission, vision, team"
				canonical="https://ziontechgroup.com/about"
			/>
			<Header />
			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<GradientHeading>About Zion</GradientHeading>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
							The world's first free marketplace dedicated to high-tech and artificial intelligence
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
							<p className="text-zion-slate-light text-lg mb-6">
								At Zion, we're on a mission to democratize access to cutting-edge AI and technology solutions.
								We believe that innovation thrives when barriers are removed and connections are made.
							</p>
							<p className="text-zion-slate-light text-lg mb-6">
								Our platform brings together talented AI specialists, innovative companies, and the latest
								technological solutions in one seamless ecosystem.
							</p>
							<p className="text-zion-slate-light text-lg">
								By connecting talent with opportunity and innovation with implementation, we're creating
								a global community where the future of technology is being built today.
							</p>
						</div>
						<div className="rounded-lg overflow-hidden">
							<img
								src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600"
								alt="Team collaboration"
								className="object-cover w-full h-full"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:flex-row-reverse">
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
							<p className="text-zion-slate-light text-lg mb-6">
								We envision a world where AI and technology are accessible to all, regardless of geographical
								or financial constraints. A world where the best minds can collaborate to solve the most
								challenging problems.
							</p>
							<p className="text-zion-slate-light text-lg mb-6">
								Zion is building that world by creating a transparent, ethical, and inclusive platform
								that puts people at the center of technological advancement.
							</p>
							<p className="text-zion-slate-light text-lg">
								Our goal is to become the premier destination for AI and tech innovation, fostering
								a community that shapes the future of how we live, work, and interact with technology.
							</p>
						</div>
						<div className="rounded-lg overflow-hidden lg:order-first">
							<img
								src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600"
								alt="Tech innovation"
								className="object-cover w-full h-full"
							/>
						</div>
					</div>

					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
								<div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
									<svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
								<p className="text-zion-slate-light">
									We embrace cutting-edge technologies and creative thinking to push the boundaries of what's possible.
								</p>
							</div>

							<div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
								<div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
									<svg className="w-8 h-8 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Community</h3>
								<p className="text-zion-slate-light">
									We believe in the power of collaboration and fostering an inclusive ecosystem where everyone can thrive.
								</p>
							</div>

							<div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
								<div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
									<svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Trust</h3>
								<p className="text-zion-slate-light">
									We maintain the highest standards of integrity, transparency, and ethical practices in everything we do.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
}
