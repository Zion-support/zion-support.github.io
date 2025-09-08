import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain,
  Lightbulb,
  Target,
  Users,
  Zap,
  Shield
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible through cutting-edge technology and creative problem-solving.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable solutions that our clients can depend on for their most critical operations.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Human-Centric",
      description: "Technology should serve humanity, enhancing human capabilities and improving quality of life.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that address global challenges and benefit communities worldwide.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "Maintaining the highest standards of quality and performance in everything we deliver.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical principles in all our business relationships.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <>
      <Head>
        <title>About Us | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to innovation in technology." />
      </Head>
      <SmartHeader />
      
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading technology company dedicated to innovation, excellence, and delivering cutting-edge solutions that transform businesses.
            </p>
          </div>
        </div>
      </main>
      
      <SmartFooter />
    </>
  );
}
      title: 'Trust & Security',
      description: 'Security is at the core of everything we do. We build solutions that protect your business and data with quantum-resistant technology.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive measurable business value.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to understand your needs and deliver solutions that transform your business.',
      color: 'from-emerald-500 to-teal-500'
    }
  ],

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, description: 'Advanced AI and machine learning solutions', color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Computing', icon: Atom, description: 'Quantum-powered computing and cryptography', color: 'from-blue-500 to-cyan-500' },
    { name: 'Cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions', color: 'from-red-500 to-orange-500' },
    { name: 'Edge Computing', icon: Network, description: 'Intelligent edge orchestration platforms', color: 'from-yellow-500 to-orange-500' },
    { name: 'Space Technology', icon: Rocket, description: 'AI-powered space exploration solutions', color: 'from-indigo-500 to-purple-500' },
    { name: 'Biotechnology', icon: ZapIcon, description: 'Neural interfaces and biomedical innovations', color: 'from-pink-500 to-rose-500' }
  ],

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader driving innovation in AI and quantum technologies',
      image: '/api/placeholder/150/150',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'AI Team',
      role: 'AI Research & Development',
      description: 'Expert engineers and researchers pushing the boundaries of artificial intelligence',
      image: '/api/placeholder/150/150',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Quantum Team',
      role: 'Quantum Computing',
      description: 'Specialists in quantum algorithms and quantum-resistant cryptography',
      image: '/api/placeholder/150/150',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity',
      description: 'Experts in threat detection and zero-trust security architectures',
      image: '/api/placeholder/150/150',
      color: 'from-red-500 to-orange-500'
    }
  ],

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize technology through AI and quantum computing.'
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Launched our first AI-powered business intelligence and automation solutions.'
    },
    {
      year: '2022',
      title: 'Quantum Breakthrough',
      description: 'Developed quantum-resistant cybersecurity solutions and quantum neural networks.'
    },
    {
      year: '2023',
      title: 'Space Technology',
      description: 'Expanded into space technology with AI-powered satellite management systems.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Reached 50+ enterprise clients and expanded our service portfolio to 100+ solutions.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to push boundaries with autonomous AI systems and consciousness technology.'
    }
  ],

import React from 'react',
import Head from 'next/head',
import Button from '../components/ui/Button',
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
		</>
  {/* Removed stray closing parenthesis */}
  {/* Removed stray closing brace */}
