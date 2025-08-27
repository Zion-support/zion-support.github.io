import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
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
				description: 'Help us find and attract the best talent in AI and technology to join our platform.',
			},
		],
	};

	const benefits = [
		{
			title: 'Remote-First Culture',
			description: 'Work from anywhere in the world with our distributed team.',
			icon: '🌍',
		},
		{
			title: 'Competitive Compensation',
			description: 'Attractive salary packages with equity options and performance bonuses.',
			icon: '💰',
		},
		{
			title: 'Professional Growth',
			description: 'Continuous learning opportunities, conferences, and career development.',
			icon: '📈',
		},
		{
			title: 'Health & Wellness',
			description: 'Comprehensive health coverage and wellness programs.',
			icon: '🏥',
		},
		{
			title: 'Flexible Hours',
			description: 'Work when you\'re most productive with flexible scheduling.',
			icon: '⏰',
		},
		{
			title: 'Innovation Focus',
			description: 'Work on cutting-edge AI and technology solutions.',
			icon: '🚀',
		},
	];

	return (
		<>
			<SEO 
				title="Careers - Join Zion Tech Group" 
				description="Join our mission to democratize AI and technology. Explore career opportunities at Zion Tech Group." 
				keywords="careers, jobs, employment, Zion Tech Group, AI jobs, tech careers" 
				canonical="https://ziontechgroup.com/careers" 
			/>
			<Header />
			<main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					{/* Header */}
					<div className="text-center mb-16">
						<GradientHeading>Join Our Team</GradientHeading>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
							Help us build the future of AI and technology. Join a team that's passionate about innovation, 
							growth, and making a difference in the world.
						</p>
					</div>

					{/* Benefits Section */}
					<div className="mb-20">
						<h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{benefits.map((benefit, index) => (
								<Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-zion-cyan/30 transition-all duration-300">
									<CardContent className="p-6 text-center">
										<div className="text-4xl mb-4">{benefit.icon}</div>
										<h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
										<p className="text-slate-300 text-sm">{benefit.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>

					{/* Job Listings */}
					<div className="mb-20">
						<h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
						<Tabs defaultValue="engineering" className="w-full">
							<TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border-slate-700">
								<TabsTrigger value="engineering" className="text-white data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
									Engineering
								</TabsTrigger>
								<TabsTrigger value="product" className="text-white data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
									Product
								</TabsTrigger>
								<TabsTrigger value="marketing" className="text-white data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
									Marketing
								</TabsTrigger>
								<TabsTrigger value="operations" className="text-white data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
									Operations
								</TabsTrigger>
							</TabsList>
							
							{Object.entries(jobs).map(([department, departmentJobs]) => (
								<TabsContent key={department} value={department} className="mt-6">
									<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
										{departmentJobs.map((job, index) => (
											<Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-zion-cyan/30 transition-all duration-300">
												<CardContent className="p-6">
													<h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
													<div className="flex items-center text-slate-400 text-sm mb-3 space-x-4">
														<span>{job.location}</span>
														<span>•</span>
														<span>{job.type}</span>
													</div>
													<p className="text-slate-300 text-sm mb-4">{job.description}</p>
													<Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90">
														Apply Now
													</Button>
												</CardContent>
											</Card>
										))}
									</div>
								</TabsContent>
							))}
						</Tabs>
					</div>

					{/* CTA Section */}
					<div className="text-center">
						<Card className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border-zion-cyan/30">
							<CardContent className="p-8">
								<h2 className="text-3xl font-bold text-white mb-4">
									Don't See the Right Role?
								</h2>
								<p className="text-slate-300 mb-6 max-w-2xl mx-auto">
									We're always looking for talented individuals to join our team. 
									Send us your resume and let us know how you can contribute to our mission.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90">
										Send Resume
									</Button>
									<Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
										Contact HR
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
