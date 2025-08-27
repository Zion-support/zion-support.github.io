import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Target, Eye, Award, TrendingUp, Globe, Zap, Shield } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function About() {
	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							About Zion Tech Group
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We're a team of innovators, engineers, and strategists building the future of business technology.
						</p>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-2">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Our Mission</h2>
							<p className="text-lg text-gray-600 mb-6">
								To democratize access to enterprise-grade AI and cloud technologies, enabling businesses of all sizes to compete and thrive in the digital economy.
							</p>
							<div className="flex items-center gap-x-3 mb-4">
								<Target className="h-6 w-6 text-blue-600" />
								<span className="text-gray-700 font-medium">Transform business operations</span>
							</div>
							<div className="flex items-center gap-x-3 mb-4">
								<Zap className="h-6 w-6 text-blue-600" />
								<span className="text-gray-700 font-medium">Accelerate innovation</span>
							</div>
							<div className="flex items-center gap-x-3">
								<Shield className="h-6 w-6 text-blue-600" />
								<span className="text-gray-700 font-medium">Ensure security & compliance</span>
							</div>
						</div>
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Our Vision</h2>
							<p className="text-lg text-gray-600 mb-6">
								A world where every business can leverage cutting-edge AI and cloud technologies to create value, solve complex problems, and drive sustainable growth.
							</p>
							<div className="flex items-center gap-x-3 mb-4">
								<Globe className="h-6 w-6 text-green-600" />
								<span className="text-gray-700 font-medium">Global accessibility</span>
							</div>
							<div className="flex items-center gap-x-3 mb-4">
								<TrendingUp className="h-6 w-6 text-green-600" />
								<span className="text-gray-700 font-medium">Continuous innovation</span>
							</div>
							<div className="flex items-center gap-x-3">
								<Users className="h-6 w-6 text-green-600" />
								<span className="text-gray-700 font-medium">Human-centered design</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Values</h2>
						<p className="mt-6 text-lg text-gray-600">
							The principles that guide everything we do
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
								<Zap className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation First</h3>
							<p className="text-gray-600">
								We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
								<Users className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Success</h3>
							<p className="text-gray-600">
								Your success is our success. We're committed to delivering measurable business outcomes.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-6">
								<Shield className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Trust & Security</h3>
							<p className="text-gray-600">
								We prioritize security, privacy, and compliance in everything we build and deliver.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Team */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Team</h2>
						<p className="mt-6 text-lg text-gray-600">
							Meet the experts behind our innovative solutions
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						<div className="text-center">
							<div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6 flex items-center justify-center">
								<Users className="h-16 w-16 text-white" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">AI & ML Engineers</h3>
							<p className="text-gray-600">
								Experts in machine learning, neural networks, and autonomous systems
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-r from-green-600 to-blue-600 mb-6 flex items-center justify-center">
								<Globe className="h-16 w-16 text-white" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Architects</h3>
							<p className="text-gray-600">
								Specialists in scalable cloud infrastructure and DevOps practices
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-6 flex items-center justify-center">
								<Shield className="h-16 w-16 text-white" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">Security Experts</h3>
							<p className="text-gray-600">
								Cybersecurity professionals ensuring your systems remain protected
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white mb-6">
						Ready to Transform Your Business?
					</h2>
					<p className="text-xl text-blue-100 mb-8">
						Let's discuss how our AI and cloud solutions can drive your success
					</p>
					<div className="flex items-center justify-center gap-x-6">
						<Link
							to="/contact"
							className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
						>
							Get Started
						</Link>
						<Link
							to="/services"
							className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
						>
							Learn more <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</section>
		</PageTransition>
	)


      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark text-white py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About Zion Tech Group
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
            >
              Pioneering the future of technology with autonomous AI systems, 
              cloud-native platforms, and zero-trust cybersecurity solutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <div className="flex items-center gap-3 text-zion-cyan">
                <Brain className="w-6 h-6" />
                <span className="text-lg">AI Innovation</span>
              </div>
              <div className="flex items-center gap-3 text-zion-purple-light">
                <Cloud className="w-6 h-6" />
                <span className="text-lg">Cloud Native</span>
              </div>
              <div className="flex items-center gap-3 text-zion-cyan-light">
                <Shield className="w-6 h-6" />
                <span className="text-lg">Zero Trust</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                To democratize access to enterprise-grade technology solutions, 
                enabling businesses of all sizes to leverage the power of AI, 
                cloud computing, and advanced cybersecurity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Transforming Business Through Technology
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We believe that every organization deserves access to cutting-edge technology 
                  that can drive growth, improve efficiency, and protect against evolving threats. 
                  Our solutions are designed to be accessible, scalable, and future-proof.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From startups to Fortune 500 companies, we partner with organizations 
                  to build intelligent, secure, and scalable technology foundations that 
                  enable them to focus on what they do best.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-zion-blue to-zion-purple rounded-2xl p-8 text-white">
                  <div className="text-center">
                    <Target className="w-16 h-16 mx-auto mb-4 text-zion-cyan-light" />
                    <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
                    <p className="text-zion-slate-light">
                      To be the leading provider of autonomous technology solutions 
                      that empower businesses to thrive in the digital age.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and every solution we build.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Areas of Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in the technologies that are shaping the future of business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((area, index) => (
                <motion.div 
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                By The Numbers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our track record of delivering exceptional results for our clients.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-zion-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI, cloud, and cybersecurity solutions 
                can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
