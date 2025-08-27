import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Heart, 
  Zap,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead AI initiatives and develop cutting-edge machine learning solutions",
      requirements: [
        "Advanced degree in Computer Science or related field",
        "Experience with TensorFlow, PyTorch, and cloud platforms",
        "Strong background in NLP and computer vision",
        "Experience leading technical teams"
      ]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our clients with advanced cybersecurity solutions",
      requirements: [
        "Certifications in CISSP, CEH, or similar",
        "Experience with penetration testing and security audits",
        "Knowledge of compliance frameworks (SOC 2, ISO 27001)",
        "Strong analytical and problem-solving skills"
      ]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud & Infrastructure",
      location: "Remote / Global",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud solutions for enterprise clients",
      requirements: [
        "Expertise in AWS, Azure, and Google Cloud",
        "Experience with Kubernetes and containerization",
        "Strong understanding of DevOps practices",
        "Excellent communication and client-facing skills"
      ]
    },
    {
      title: "Full Stack Developer",
      department: "Software Development",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Build modern web applications and digital solutions",
      requirements: [
        "Proficiency in React, Node.js, and modern web technologies",
        "Experience with cloud platforms and databases",
        "Understanding of agile development methodologies",
        "Passion for clean code and user experience"
      ]
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Remote First",
      description: "Work from anywhere in the world"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs"
    },
    {
      icon: Zap,
      title: "Learning & Growth",
      description: "Continuous learning opportunities and career development"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborate with talented professionals worldwide"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We push boundaries and embrace new technologies"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships"
    },
    {
      title: "Impact",
      description: "We create solutions that make a real difference"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future with cutting-edge technology and innovative solutions
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join Zion Tech Group and be part of a team that's transforming businesses 
              through AI, cloud computing, and digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of being part of the Zion Tech Group team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team and help us build the future of technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {position.department}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {position.experience}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Send Resume
            </Link>
            <Link 
              to="/about"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
=======
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Job {
	title: string;
	location: string;
	type: string;
	department: string;
	description: string;
}

interface Benefit {
	title: string;
	description: string;
	icon: React.ReactNode;
}

interface JobsByDepartment {
	engineering: Job[];
	product: Job[];
	marketing: Job[];
	operations: Job[];
}

export default function Careers() {
	// Sample job listings
	const jobs: JobsByDepartment = {
		engineering: [
			{
				title: 'Senior Frontend Engineer',
				location: 'Remote',
				type: 'Full-time',
				department: 'Engineering',
				description: 'Join our frontend team to build beautiful, responsive, and accessible user interfaces for our AI-powered marketplace.',
			},
			{
				title: 'AI Research Engineer',
				location: 'San Francisco, CA',
				type: 'Full-time',
				department: 'Engineering',
				description: 'Work on cutting-edge AI technologies to power our matching algorithms and recommendation systems.',
			},
			{
				title: 'Full Stack Developer',
				location: 'Remote',
				type: 'Full-time',
				department: 'Engineering',
				description: 'Develop end-to-end features across our platform, working with modern technologies like React, Node.js, and PostgreSQL.',
			},
		],
		product: [
			{
				title: 'Product Manager',
				location: 'New York, NY',
				type: 'Full-time',
				department: 'Product',
				description: 'Lead product development initiatives to enhance our marketplace experience for both talent and clients.',
			},
			{
				title: 'UX/UI Designer',
				location: 'Remote',
				type: 'Full-time',
				department: 'Product',
				description: 'Create intuitive and engaging user experiences that make complex technology accessible to all users.',
			},
		],
		marketing: [
			{
				title: 'Growth Marketing Manager',
				location: 'Remote',
				type: 'Full-time',
				department: 'Marketing',
				description: 'Drive user acquisition and engagement strategies across multiple channels to grow our marketplace.',
			},
			{
				title: 'Content Strategist',
				location: 'London, UK',
				type: 'Full-time',
				department: 'Marketing',
				description: 'Develop compelling content that educates and inspires our audience about the future of AI and technology.',
			},
		],
		operations: [
			{
				title: 'Community Manager',
				location: 'Remote',
				type: 'Full-time',
				department: 'Operations',
				description: 'Build and nurture our growing community of AI specialists, developers, and tech enthusiasts.',
			},
			{
				title: 'Talent Acquisition Specialist',
				location: 'Remote',
				type: 'Full-time',
				department: 'Operations',
				description: 'Help connect the right talent with the right opportunities on our platform through personalized matching.',
			},
		],
	};

	// Benefits list
	const benefits: Benefit[] = [
		{
			title: 'Flexible Work',
			description: 'Remote-first culture with flexible hours to support your productivity and work-life balance.',
			icon: (
				<svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
			),
		},
		{
			title: 'Health & Wellness',
			description: 'Comprehensive health insurance and wellness programs to keep you at your best.',
			icon: (
				<svg className="w-10 h-10 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
				</svg>
			),
		},
		{
			title: 'Continuous Learning',
			description: 'Education stipends and dedicated learning time to help you grow professionally.',
			icon: (
				<svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
				</svg>
			),
		},
		{
			title: 'Competitive Compensation',
			description: 'Salary packages that recognize your value, plus equity options to share in our success.',
			icon: (
				<svg className="w-10 h-10 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			),
		},
	];

	return (
		<>
			<SEO
				title="Careers at Zion - Join Our Team"
				description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."
				keywords="Zion careers, AI jobs, tech careers, remote work, startup jobs"
				canonical="https://ziontechgroup.com/careers"
			/>
			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<GradientHeading>Join Our Team</GradientHeading>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">Help us build the future of AI and technology</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">Why Work at Zion?</h2>
							<p className="text-zion-slate-light text-lg mb-6">
								At Zion, we're not just building a marketplace; we're creating a new paradigm for how AI and technology are accessed, shared, and implemented globally.
							</p>
							<p className="text-zion-slate-light text-lg mb-6">
								Our team is passionate about democratizing access to cutting-edge technology and connecting talented individuals with meaningful opportunities. We value innovation, collaboration, and impact in everything we do.
							</p>
							<p className="text-zion-slate-light text-lg">
								If you're excited about shaping the future of AI and technology while working in a dynamic, remote-first environment with a mission-driven team, we'd love to meet you.
							</p>
						</div>
						<div className="rounded-lg overflow-hidden">
							<img
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600"
								alt="Team collaboration"
								className="object-cover w-full h-full"
							/>
						</div>
					</div>

					<div className="mb-24">
						<h2 className="text-3xl font-bold text-white mb-12 text-center">Our Benefits</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{benefits.map((benefit, index) => (
								<div key={index} className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
									<div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">{benefit.icon}</div>
									<h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
									<p className="text-zion-slate-light">{benefit.description}</p>
								</div>
							))}
						</div>
					</div>

					<div className="mb-24">
						<h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>

						<Tabs defaultValue="engineering" className="w-full">
							<TabsList className="bg-zion-blue-dark border border-zion-blue-light mb-8 w-full flex flex-wrap justify-center">
								<TabsTrigger value="engineering" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
									Engineering
								</TabsTrigger>
								<TabsTrigger value="product" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
									Product
								</TabsTrigger>
								<TabsTrigger value="marketing" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
									Marketing
								</TabsTrigger>
								<TabsTrigger value="operations" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
									Operations
								</TabsTrigger>
							</TabsList>

							{Object.entries(jobs).map(([department, jobList]) => (
								<TabsContent key={department} value={department} className="space-y-6">
									{jobList.map((job, index) => (
										<Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors">
											<CardContent className="p-6">
												<div className="flex flex-col md:flex-row md:items-center md:justify-between">
													<div>
														<h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
														<div className="flex flex-wrap gap-2 mb-4">
															<span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.location}</span>
															<span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.type}</span>
															<span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.department}</span>
														</div>
														<p className="text-zion-slate-light mb-4">{job.description}</p>
													</div>
													<Button className="w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
														Apply Now
													</Button>
												</div>
											</CardContent>
										</Card>
									))}
								</TabsContent>
							))}
						</Tabs>
					</div>

					<div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
						<h2 className="text-3xl font-bold text-white mb-6">Don't see the right position?</h2>
						<p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
							We're always looking for talented individuals who are passionate about AI and technology. Send us your resume and let's start a conversation.
						</p>
						<Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
							Send General Application
						</Button>
					</div>
				</div>
			</main>
		</>
	);
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
}
