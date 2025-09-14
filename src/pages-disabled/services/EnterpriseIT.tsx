import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Building, 
  Server, 
  Shield, 
  Cloud, 
  Users, 
  Globe, 
  Lock, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function EnterpriseIT() {
  const enterpriseServices = [
    {
      title: "Infrastructure Design",
      description: "Scalable enterprise infrastructure architecture and planning",
      icon: Building,
      features: ["Network architecture", "Server infrastructure", "Storage solutions", "Security framework"]
    },
    {
      title: "Server Management",
      description: "Comprehensive server administration and optimization",
      icon: Server,
      features: ["Performance monitoring", "Capacity planning", "Backup management", "Disaster recovery"]
    },
    {
      title: "Storage Solutions",
      description: "Enterprise storage infrastructure and data management",
      icon: Cloud,
      features: ["SAN/NAS systems", "Cloud storage", "Data archiving", "Backup solutions"]
    },
    {
      title: "Security Infrastructure",
      description: "Multi-layered security and compliance solutions",
      icon: Shield,
      features: ["Firewall management", "Intrusion detection", "Access control", "Compliance monitoring"]
    }
  ];

  const benefits = [
    "Improved operational efficiency and productivity",
    "Enhanced security and compliance",
    "Scalable infrastructure for business growth",
    "Reduced IT costs and complexity",
    "Better disaster recovery and business continuity",
    "24/7 monitoring and proactive support"
  ];

  const industries = [
    {
      title: "Financial Services",
      description: "Secure, compliant IT infrastructure for banks, insurance, and fintech companies",
      icon: TrendingUp
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant systems for hospitals, clinics, and medical research",
      icon: Shield
    },
    {
      title: "Manufacturing",
      description: "Industrial IT solutions for smart factories and supply chain management",
      icon: Building
    },
    {
      title: "Retail",
      description: "E-commerce platforms and retail management systems",
      icon: Users
    },
    {
      title: "Education",
      description: "Learning management systems and campus IT infrastructure",
      icon: Globe
    },
    {
      title: "Government",
      description: "Secure, compliant systems for public sector organizations",
      icon: Lock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Enterprise IT Solutions - Zion Tech Group"
        description="Comprehensive enterprise IT services that provide the foundation for business success, from infrastructure design to ongoing management and support."
        keywords="enterprise IT, infrastructure, server management, storage solutions, security infrastructure"
        canonical="https://ziontechgroup.com/services/enterprise-it"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6"
            >
              <Building className="w-4 h-4 mr-2" />
              Enterprise IT
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Enterprise-Grade
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> IT Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Comprehensive enterprise IT services that provide the foundation for business success, 
              from infrastructure design to ongoing management and support.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Enterprise IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end enterprise IT solutions designed to optimize operations, 
              enhance security, and drive business growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Enterprise IT?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enterprise-grade solutions that deliver measurable business value
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 mr-3" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized solutions for diverse industry requirements
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise IT?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our enterprise IT solutions can optimize your operations and drive growth
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
import { Cog, Server, Shield, Users, Database, Globe, Zap, BarChart3 } from 'lucide-react';

const EnterpriseIT = () => {
	const services = [
		{
			icon: Server,
			title: "Infrastructure Management",
			description: "Comprehensive IT infrastructure design, implementation, and ongoing management",
			features: ["Network Design & Security", "Server Management", "Cloud Migration", "Disaster Recovery"]
		},
		{
			icon: Shield,
			title: "Cybersecurity",
			description: "Enterprise-grade security solutions to protect your business assets and data",
			features: ["Security Audits", "Threat Detection", "Compliance Management", "Incident Response"]
		},
		{
			icon: Users,
			title: "IT Support & Helpdesk",
			description: "24/7 technical support and helpdesk services for your organization",
			features: ["Remote Support", "On-site Assistance", "Knowledge Base", "Training Programs"]
		},
		{
			icon: Database,
			title: "Data Management",
			description: "Strategic data governance, backup, and recovery solutions",
			features: ["Data Backup", "Storage Optimization", "Compliance", "Data Analytics"]
		}
	];

	const solutions = [
		{
			category: "Small Business",
			description: "Scalable IT solutions for growing businesses",
			icon: "🏢"
		},
		{
			category: "Enterprise",
			description: "Complex IT infrastructure for large organizations",
			icon: "🏗️"
		},
		{
			category: "Healthcare",
			description: "HIPAA-compliant IT solutions",
			icon: "🏥"
		},
		{
			category: "Financial Services",
			description: "Secure, compliant financial IT infrastructure",
			icon: "💼"
		}
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
			{/* Hero Section */}
			<section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto text-center">
					<div className="flex justify-center mb-6">
						<div className="p-3 bg-blue-600/20 rounded-full">
							<Cog className="h-12 w-12 text-blue-400"/>
						</div>
					</div>
					<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
						Enterprise IT Solutions
					</h1>
					<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
						Comprehensive IT infrastructure and support services designed to keep your business running smoothly, 
						securely, and efficiently. From network management to cybersecurity, we've got you covered.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							to="/contact" 
							className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
						>
							Get Started
						</Link>
						<Link 
							to="/request-quote" 
							className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-lg"
						>
							Request Quote
						</Link>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							End-to-end IT solutions to support your business operations and growth
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

			{/* Solutions by Business Type */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Solutions for Every Business</h2>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							Tailored IT solutions designed to meet the unique needs of your industry and business size
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{solutions.map((solution, index) => (
							<div key={index} className="text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
									{solution.icon}
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">{solution.category}</h3>
								<p className="text-gray-300">{solution.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
							<div className="space-y-4">
								<div className="flex items-start space-x-3">
									<div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<Zap className="w-3 h-3 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-1">24/7 Support</h3>
										<p className="text-gray-300">Round-the-clock technical support and monitoring</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<Shield className="w-3 h-3 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-1">Enterprise Security</h3>
										<p className="text-gray-300">Industry-leading security practices and compliance</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<Globe className="w-3 h-3 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-1">Scalable Solutions</h3>
										<p className="text-gray-300">IT infrastructure that grows with your business</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<BarChart3 className="w-3 h-3 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-1">Proactive Monitoring</h3>
										<p className="text-gray-300">Prevent issues before they impact your business</p>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
							<div className="text-center">
								<Cog className="w-24 h-24 text-blue-400 mx-auto mb-4" />
								<h3 className="text-2xl font-bold text-white mb-2">Managed IT Services</h3>
								<p className="text-gray-300">Focus on your business while we handle your IT infrastructure, security, and support needs.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Your IT Infrastructure?</h2>
					<p className="text-xl text-gray-300 mb-8">
						Let's discuss how our enterprise IT solutions can improve your business efficiency, security, and productivity.
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

export default EnterpriseIT;
=======
}
