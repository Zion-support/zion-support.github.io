import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Target, Search, BarChart3, Users, Shield, Cloud, Zap, CheckCircle } from 'lucide-react';

export default function Consulting() {
  const consultingServices = [
    {
      title: "Technology Assessment",
      description: "Comprehensive evaluation of your current technology landscape and capabilities",
      features: ["Infrastructure Review", "Technology Stack Analysis", "Gap Identification", "Recommendations"],
      icon: "🔍"
    },
    {
      title: "Strategic Planning",
      description: "Develop long-term technology strategy aligned with business objectives",
      features: ["Technology Roadmap", "Investment Planning", "Risk Assessment", "Success Metrics"],
      icon: "📋"
    },
    {
      title: "Vendor Selection",
      description: "Expert guidance in selecting the right technology partners and solutions",
      features: ["Requirements Analysis", "Vendor Evaluation", "Contract Negotiation", "Implementation Support"],
      icon: "🤝"
    },
    {
      title: "Project Management",
      description: "Professional project management for successful technology implementations",
      features: ["Project Planning", "Team Coordination", "Timeline Management", "Quality Assurance"],
      icon: "📊"
    }
  ];
=======
import { Target, Users, TrendingUp, Shield, Globe, Zap } from 'lucide-react';

const Consulting = () => {
	const services = [
		{
			icon: Target,
			title: "Technology Assessment",
			description: "Comprehensive evaluation of your current technology landscape and capabilities",
			features: ["Infrastructure Review", "Technology Stack Analysis", "Gap Identification", "Recommendations"]
		},
		{
			icon: TrendingUp,
			title: "Strategic Planning",
			description: "Develop long-term technology strategy aligned with business objectives",
			features: ["Technology Roadmap", "Investment Planning", "Risk Assessment", "Success Metrics"]
		},
		{
			icon: Users,
			title: "Vendor Selection",
			description: "Expert guidance in selecting the right technology partners and solutions",
			features: ["Requirements Analysis", "Vendor Evaluation", "Contract Negotiation", "Implementation Support"]
		},
		{
			icon: Shield,
			title: "Digital Transformation",
			description: "Guide your organization through technology-driven business transformation",
			features: ["Change Management", "Process Optimization", "Technology Implementation", "Training & Support"]
		}
	];

	const industries = [
		{
			name: "Healthcare",
			description: "HIPAA-compliant solutions and healthcare-specific technology consulting",
			icon: "🏥"
		},
		{
			name: "Finance",
			description: "Secure, compliant financial technology solutions and consulting",
			icon: "💼"
		},
		{
			name: "Manufacturing",
			description: "Industry 4.0 and smart manufacturing technology consulting",
			icon: "🏭"
		},
		{
			name: "Retail",
			description: "E-commerce and digital retail transformation consulting",
			icon: "🛍️"
		}
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
			{/* Hero Section */}
			<section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto text-center">
					<div className="mb-8">
						<div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
							<Target className="w-4 h-4 mr-2" />
							Technology Consulting
						</div>
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
							Expert Technology
							<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Consulting</span>
						</h1>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
							Strategic technology consulting to help your business make informed decisions, 
							optimize operations, and achieve digital transformation success.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/contact"
								className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
							>
								Schedule Consultation
							</Link>
							<Link
								to="/request-quote"
								className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
							>
								Request Quote
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Consulting Services</h2>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							Comprehensive technology consulting to address your unique business challenges and opportunities
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{services.map((service, index) => (
							<div
								key={index}
								className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
							>
								<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
									<service.icon className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
								<p className="text-gray-300 mb-4">{service.description}</p>
								<ul className="space-y-2">
									{service.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-center text-sm text-gray-400">
											<div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
											{feature}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Industries Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry Expertise</h2>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							Deep industry knowledge across multiple sectors to deliver relevant, effective solutions
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{industries.map((industry, index) => (
							<div key={index} className="text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
									{industry.icon}
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
								<p className="text-gray-300">{industry.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.step}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Consulting Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology consulting to drive your business forward
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Consulting Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Specialized expertise across key technology domains
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-8 rounded-lg border border-white/10"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{area.area}</h3>
                  <ul className="space-y-2">
                    {area.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Technology?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our expert consultants guide you through your technology transformation journey
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
              >
                Start Your Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
			{/* Process Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Consulting Process</h2>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							A structured approach to delivering actionable insights and recommendations
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{[
							{ step: "Discovery", icon: "🔍", description: "Understand your business, challenges, and objectives" },
							{ step: "Analysis", icon: "📊", description: "Evaluate current state and identify opportunities" },
							{ step: "Strategy", icon: "🎯", description: "Develop comprehensive recommendations and roadmap" },
							{ step: "Implementation", icon: "🚀", description: "Support execution and measure success" }
						].map((phase, index) => (
							<div key={index} className="text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
									{phase.icon}
								</div>
								<h3 className="text-lg font-semibold text-white mb-2">{phase.step}</h3>
								<p className="text-sm text-gray-300">{phase.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our Consulting?</h2>
							<div className="space-y-4">
								<div className="flex items-start space-x-3">
									<div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<Zap className="w-3 h-3 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-1">Expert Team</h3>
										<p className="text-gray-300">Seasoned professionals with deep industry and technology expertise</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<Globe className="w-3 h-3 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-1">Proven Results</h3>
										<p className="text-gray-300">Track record of successful technology transformations and implementations</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<Shield className="w-3 h-3 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-1">Objective Advice</h3>
										<p className="text-gray-300">Unbiased recommendations focused on your business success</p>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
							<div className="text-center">
								<Target className="w-24 h-24 text-blue-400 mx-auto mb-4" />
								<h3 className="text-2xl font-bold text-white mb-2">Strategic Technology Consulting</h3>
								<p className="text-gray-300">Transform your business with technology strategies that drive growth, efficiency, and competitive advantage.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Technology Strategy?</h2>
					<p className="text-xl text-gray-300 mb-8">
						Let's discuss how our consulting expertise can help you achieve your technology and business goals.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="/contact"
							className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
						>
							Schedule Consultation
						</Link>
						<Link
							to="/case-studies"
							className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
						>
							View Case Studies
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Consulting;
=======
}
