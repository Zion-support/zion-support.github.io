<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
=======
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import React, { useState } from 'react';
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
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
<<<<<<< HEAD
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
=======
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cybersecurity architecture',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with zero-trust security models',
        'Knowledge of compliance frameworks (SOC 2, ISO 27001)'
      ],
      responsibilities: [
        'Design security architectures for client systems',
        'Implement zero-trust security frameworks',
        'Conduct security assessments and penetration testing',
        'Develop security policies and procedures',
        'Lead incident response and threat hunting'
      ]
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100K - $140K',
      description: 'Build scalable web applications and microservices using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of microservices architecture'
      ],
      responsibilities: [
        'Develop frontend and backend components',
        'Design and implement RESTful APIs',
        'Optimize application performance and scalability',
        'Collaborate with design and product teams',
        'Participate in code reviews and technical discussions'
      ]
    },
    {
      id: 5,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$90K - $130K',
      description: 'Create intuitive and beautiful user experiences for our AI-powered applications.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '4+ years experience in UX/UI design',
        'Proficiency in Figma, Sketch, or similar tools',
        'Experience with design systems and component libraries',
        'Portfolio demonstrating complex application design'
      ],
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Create user experience flows and wireframes',
        'Develop and maintain design systems',
        'Conduct user research and usability testing',
        'Collaborate with development teams on implementation'
      ]
    },
    {
      id: 6,
      title: 'Product Manager',
      department: 'Business',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$110K - $160K',
      description: 'Lead product strategy and development for our AI and technology solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '5+ years experience in product management',
        'Experience with AI/ML products and services',
        'Strong analytical and strategic thinking skills',
        'Excellent communication and leadership abilities'
      ],
      responsibilities: [
        'Define product vision and strategy',
        'Gather and prioritize product requirements',
        'Work with engineering teams on product development',
        'Analyze market trends and competitive landscape',
        'Drive product launches and go-to-market strategies'
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
      ]
    }
  ];

  const benefits = [
    {
<<<<<<< HEAD
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
=======
      icon: Rocket,
      title: 'Innovation First',
      description: 'Work on cutting-edge technologies that are shaping the future'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Your work will impact businesses and users worldwide'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Join a team of brilliant minds working together'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options'
    },
    {
      icon: Zap,
      title: 'Fast Growth',
      description: 'Rapid career advancement in a growing company'
    },
    {
      icon: Shield,
      title: 'Comprehensive Benefits',
      description: 'Health, dental, vision, and retirement plans'
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Careers at Zion Tech Group - Join Our Team"
        description="Explore exciting career opportunities at Zion Tech Group. Join our team of innovators in AI, cybersecurity, cloud solutions, and emerging technologies."
        keywords="careers, jobs, employment, Zion Tech Group, AI, cybersecurity, cloud, technology jobs"
      />

>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
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
<<<<<<< HEAD
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
=======
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-zion-cyan" />,
                title: 'Cutting-Edge Technology',
                description: 'Work with the latest AI, quantum computing, and emerging technologies that define the future.'
              },
              {
                icon: <Users className="w-12 h-12 text-zion-cyan" />,
                title: 'Collaborative Culture',
                description: 'Join a diverse team of experts who value innovation, creativity, and mutual support.'
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-zion-cyan" />,
                title: 'Career Growth',
                description: 'Continuous learning opportunities, mentorship programs, and clear career progression paths.'
              },
              {
                icon: <Shield className="w-12 h-12 text-zion-cyan" />,
                title: 'Work-Life Balance',
                description: 'Flexible remote work options, competitive benefits, and a healthy work environment.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
                viewport={{ once: true }}
              >
<<<<<<< HEAD
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
=======
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Open Positions Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
=======
      {/* Open Positions */}
      <section id="positions" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Open <span className="text-zion-cyan">Positions</span>
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team and help us build the future of technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
<<<<<<< HEAD
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
=======
                key={position.id}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
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
<<<<<<< HEAD
                
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
=======

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
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
=======
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Send Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-dark transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </motion.div>
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
=======
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20
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
<<<<<<< HEAD
=======
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
=======
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20
}
