<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'
import { Users, Target, Award, Globe, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'
export default function About() {
	const values = [
		{
			icon: Target,
			title: 'Innovation First',
			description: 'We push the boundaries of what\'s possible with cutting-edge AI and cloud technologies.'
		},
		{
			icon: Shield,
			title: 'Security & Trust',
			description: 'Your data and systems are protected with enterprise-grade security and compliance standards.'
		},
		{
			icon: Users,
			title: 'Client Success',
			description: 'We measure our success by the success of our clients and their digital transformation journey.'
		},
		{
			icon: Zap,
			title: 'Agile Delivery',
			description: 'Fast, iterative development that delivers value quickly and adapts to changing requirements.'
		}
	]
	const milestones = [
		{ year: '2020', title: 'Company Founded', description: 'Zion Tech Group established with a vision for AI-powered business transformation' },
		{ year: '2021', title: 'First AI System', description: 'Successfully deployed our first autonomous AI system for enterprise client' },
		{ year: '2022', title: 'Cloud Platform Launch', description: 'Launched our flagship cloud-native platform for scalable infrastructure' },
		{ year: '2023', title: '100+ Clients', description: 'Reached milestone of serving 100+ clients across various industries' },
		{ year: '2024', title: 'Quantum Integration', description: 'Began integrating quantum computing solutions into our AI platforms' },
		{ year: '2025', title: 'Global Expansion', description: 'Expanded operations to serve clients across North America and Europe' }
	]
	const team = [
		{
			name: 'Kleber Santos',
			role: 'Founder & CEO',
			description: 'Visionary leader with 15+ years in AI and cloud technologies',
			image: '/api/placeholder/150/150'
		},
		{
			name: 'Dr. Sarah Chen',
			role: 'Chief AI Officer',
			description: 'PhD in Machine Learning, leading our AI research and development',
			image: '/api/placeholder/150/150'
		},
		{
			name: 'Michael Rodriguez',
			role: 'CTO',
			description: 'Cloud architecture expert with experience at major tech companies',
			image: '/api/placeholder/150/150'
		},
		{
			name: 'Jennifer Park',
			role: 'VP of Engineering',
			description: 'Full-stack development leader specializing in scalable systems',
			image: '/api/placeholder/150/150'
		}
	]
	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							About{' '}
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Zion Tech Group
							</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We're a team of innovators, engineers, and visionaries dedicated to transforming businesses through cutting-edge AI, cloud, and cybersecurity solutions.
						</p>
					</div>
				</div>
			</section>
			{/* Mission Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-2 items-center">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
								Our Mission
							</h2>
							<p className="text-lg leading-8 text-gray-600 mb-6">
								To democratize access to enterprise-grade AI and cloud technologies, enabling businesses of all sizes to compete in the digital economy.
							</p>
							<p className="text-lg leading-8 text-gray-600 mb-8">
								We believe that every organization deserves access to the same powerful tools that drive innovation at the world's largest tech companies.
							</p>
							<div className="flex items-center space-x-4">
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-5 w-5 text-green-600" />
									<span className="text-sm text-gray-600">AI-Powered Solutions</span>
								</div>
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-5 w-5 text-green-600" />
									<span className="text-sm text-gray-600">Cloud-Native Architecture</span>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 flex items-center justify-center">
								<Globe className="h-32 w-32 text-white" />
							</div>
							<div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
								<div className="text-2xl font-bold text-gray-900">200+</div>
								<div className="text-sm text-gray-600">Happy Clients</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Values Section */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Core Values
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							These principles guide everything we do, from product development to client relationships.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
							{values.map((value, index) => (
								<div key={index} className="flex flex-col group">
									<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
											<value.icon className="h-6 w-6 text-white" />
										</div>
										{value.title}
									</dt>
									<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
										<p className="flex-auto">{value.description}</p>
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</section>
			{/* Timeline Section */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Journey
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							From startup to industry leader, here's how we've grown and evolved over the years.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
						<div className="relative">
							{/* Timeline line */}
							<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
							
							<div className="space-y-12">
								{milestones.map((milestone, index) => (
									<div key={index} className="relative flex items-start space-x-6">
										{/* Timeline dot */}
										<div className="absolute left-6 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
										
										<div className="ml-16">
											<div className="text-sm font-semibold text-blue-600">{milestone.year}</div>
											<h3 className="text-lg font-semibold text-gray-900 mt-1">{milestone.title}</h3>
											<p className="text-gray-600 mt-2">{milestone.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Team Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Meet Our Team
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							The brilliant minds behind our innovative solutions and client success stories.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
							{team.map((member, index) => (
								<div key={index} className="text-center group">
									<div className="relative mx-auto w-32 h-32 mb-6">
										<div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
											{member.name.split(' ').map(n => n[0]).join('')}
										</div>
									</div>
									<h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
									<p className="text-blue-600 font-medium">{member.role}</p>
									<p className="text-sm text-gray-600 mt-2">{member.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* CTA Section */}
			<section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to work with us?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Let's discuss how our team can help transform your business with cutting-edge technology solutions.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-1"
							>
								Get Started
								<TrendingUp className="ml-2 h-4 w-4 inline group-hover:scale-110 transition-transform" />
							</Link>
							<Link
								to="/services"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group"
							>
								View Services <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
=======
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  const expertise = [
    {
      category: "Artificial Intelligence & Machine Learning",
      skills: ["Custom AI model development", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI integration consulting"]
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["Multi-cloud architecture", "DevOps automation", "Microservices design", "Serverless computing", "Container orchestration"]
    },
    {
      category: "Web & Mobile Development",
      skills: ["Full-stack development", "Progressive Web Apps", "Cross-platform mobile apps", "UI/UX design", "Performance optimization"]
    },
    {
      category: "Data & Analytics",
      skills: ["Big data processing", "Real-time analytics", "Data visualization", "Business intelligence", "Machine learning pipelines"]
    },
    {
      category: "Security & Compliance",
      skills: ["Cybersecurity assessment", "Penetration testing", "Compliance automation", "Identity management", "Threat detection"]
    },
    {
      category: "Emerging Technologies",
      skills: ["Blockchain development", "IoT platforms", "AR/VR solutions", "Edge computing", "Quantum computing preparation"]
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "AI Innovation Award",
      description: "Recognized for breakthrough AI solutions in business automation"
    },
    {
      year: "2023",
      title: "Cloud Excellence",
      description: "Successfully migrated 50+ enterprise clients to cloud infrastructure"
    },
    {
      year: "2022",
      title: "Security Certification",
      description: "Achieved SOC 2 Type II compliance for enterprise security standards"
    },
    {
      year: "2021",
      title: "Startup Success",
      description: "Launched 3 successful SaaS products with 10,000+ active users"
    }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with technology, staying ahead of industry trends and emerging technologies."
    },
    {
      icon: "💼",
      title: "Business Focused",
      description: "Every solution we create is designed to drive measurable business value, improve efficiency, and generate positive ROI."
    },
    {
      icon: "🔒",
      title: "Security & Trust",
      description: "We maintain the highest security standards and build trust through transparent communication and reliable delivery."
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "We work as an extension of your team, building long-term relationships based on mutual success and growth."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions. Discover our expertise in AI, cloud, cybersecurity, and emerging technologies." />
        <meta name="keywords" content="about Zion Tech Group, technology company, AI experts, cloud specialists, cybersecurity professionals, innovation leaders" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-20">
          <h1 className="text-6xl font-bold mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            We are a forward-thinking technology company dedicated to transforming businesses 
            through innovative solutions, cutting-edge AI, and world-class expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get In Touch
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </Link>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
              to leverage the power of AI, cloud computing, and emerging technologies to drive innovation, 
              efficiency, and sustainable growth in an increasingly digital world.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the global leader in innovative technology solutions, recognized for our ability to 
              transform businesses through cutting-edge AI, secure cloud infrastructure, and forward-thinking 
              digital strategies that shape the future of technology.
            </p>
          </div>
        </div>

        {/* Company Overview */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Company Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Who We Are</h3>
              <p className="text-gray-300 leading-relaxed">
                Zion Tech Group is a dynamic technology company founded by passionate innovators and industry 
                experts. We specialize in delivering cutting-edge technology solutions that address real-world 
                business challenges. Our team combines deep technical expertise with business acumen to create 
                solutions that not only work technically but drive measurable business outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">What We Do</h3>
              <p className="text-gray-300 leading-relaxed">
                We provide end-to-end technology services including AI development, cloud migration, 
                cybersecurity, web and mobile development, and emerging technology solutions. Our approach 
                combines strategic consulting with hands-on implementation, ensuring our clients achieve 
                their technology goals efficiently and effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Areas of Expertise</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{area.category}</h3>
                <div className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{achievement.year}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team & Culture */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Team & Culture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team consists of seasoned professionals with expertise across multiple technology domains. 
                From AI researchers and cloud architects to cybersecurity experts and full-stack developers, 
                we bring together diverse skills to deliver comprehensive solutions. Many of our team members 
                have worked with Fortune 500 companies and have advanced degrees in computer science, 
                engineering, and related fields.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation Culture</h3>
              <p className="text-gray-300 leading-relaxed">
                We foster a culture of continuous learning and innovation. Our team regularly participates 
                in industry conferences, contributes to open-source projects, and stays current with the 
                latest technology trends. We encourage creative problem-solving and provide opportunities 
                for professional growth and development.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-lg mb-8">
              Let's discuss how Zion Tech Group can help transform your business with innovative 
              technology solutions. We offer free consultations and custom solution design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                📞 Call +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                ✉️ Schedule Consultation
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              Address: 364 E Main St STE 1008, Middletown DE 19709<br />
              Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
