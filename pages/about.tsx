import React from 'react'
import { Link } from 'react-router-dom'


const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief AI Officer",
    expertise: "Machine Learning & AI Strategy",
    image: "/team/sarah-chen.jpg"
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Software Architect",
    expertise: "Cloud Computing & DevOps",
    image: "/team/michael-rodriguez.jpg"
  },
  {
    name: "Emily Johnson",
    role: "Head of Product",
    expertise: "User Experience & Product Strategy",
    image: "/team/emily-johnson.jpg"
  },
  {
    name: "David Kim",
    role: "Senior Data Scientist",
    expertise: "Data Analytics & Predictive Modeling",
    image: "/team/david-kim.jpg"
  }
];

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to create cutting-edge solutions that drive real business value.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients to understand their unique challenges and deliver tailored solutions.'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'We prioritize security and compliance in everything we do, ensuring your data and systems are protected.'
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description: 'We focus on delivering solutions that improve efficiency and reduce operational costs for our clients.'
  }
];

<<<<<<< HEAD
const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Zion Tech Group was established with a vision to democratize AI and technology solutions.'
  },
  {
    year: '2021',
    title: 'First AI Project',
    description: 'Successfully delivered our first machine learning solution for a healthcare client.'
  },
  {
    year: '2022',
    title: 'Cloud Migration Services',
    description: 'Launched comprehensive cloud migration and DevOps services.'
  },
  {
    year: '2023',
    title: 'Micro SaaS Platform',
    description: 'Introduced our Micro SaaS solutions for small and medium businesses.'
  },
  {
    year: '2024',
    title: 'AI Automation Suite',
    description: 'Launched advanced AI automation tools and platforms.'
  }
];

export default function About() {
=======
const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Executive Officer',
    image: '/api/placeholder/300/300',
    bio: 'Visionary leader with 20+ years in technology innovation and business strategy.'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: '/api/placeholder/300/300',
    bio: 'AI and quantum computing expert leading our technical innovation initiatives.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of AI Research',
    image: '/api/placeholder/300/300',
    bio: 'Leading researcher in machine learning and artificial intelligence applications.'
  },
  {
    name: 'David Kim',
    role: 'VP of Engineering',
    image: '/api/placeholder/300/300',
    bio: 'Full-stack development expert specializing in scalable cloud architectures.'
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Security',
    image: '/api/placeholder/300/300',
    bio: 'Cybersecurity specialist ensuring enterprise-grade security across all solutions.'
  },
  {
    name: 'James Wilson',
    role: 'Head of Operations',
    image: '/api/placeholder/300/300',
    bio: 'Operations expert managing global delivery and client success initiatives.'
  }
];

const achievements = [
  {
    icon: Award,
    number: '500+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects across various industries'
  },
  {
    icon: Users,
    number: '200+',
    label: 'Happy Clients',
    description: 'Satisfied clients worldwide trust our solutions'
  },
  {
    icon: Globe,
    number: '50+',
    label: 'Countries Served',
    description: 'Global presence with local expertise'
  },
  {
    icon: Star,
    number: '99.9%',
    label: 'Uptime Guarantee',
    description: 'Reliable and consistent service delivery'
  }
];

export default function AboutPage() {
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
  return (
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI, IT, and Micro SaaS solutions."
      keywords="about us, team, company, AI company, technology solutions, mission, values"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI, IT services, and Micro SaaS solutions. 
                Our mission is to empower businesses with cutting-edge technology that drives growth and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-blue-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white">Ready to Work With Us?</h2>
						<p className="mt-6 text-lg text-blue-100">
							Let's discuss how our expertise can help your business thrive in the digital age.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							>
								Get in Touch
							</Link>
							<Link
								to="/services"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
							>
								Explore Our Services <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
		</section>
		</
	)
}
>