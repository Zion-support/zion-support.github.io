import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: &quot;Innovation First&quot;,
      description: &quot;We push the boundaries of what's possible through cutting-edge technology and creative problem-solving.&quot;,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      icon: Shield,
      title: &quot;Trust & Security&quot;,
      description: &quot;Building secure, reliable solutions that our clients can depend on for their most critical operations.&quot;,
      color: &quot;from-red-500 to-orange-500&quot;
    },
    {
      icon: Users,
      title: &quot;Human-Centric&quot;,
      description: &quot;Technology should serve humanity, enhancing human capabilities and improving quality of life.&quot;,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      icon: Globe,
      title: &quot;Global Impact&quot;,
      description: &quot;Creating solutions that address global challenges and benefit communities worldwide.&quot;,
      color: &quot;from-green-500 to-emerald-500&quot;
    },
    {
      icon: Rocket,
      title: &quot;Excellence&quot;,
      description: &quot;Maintaining the highest standards of quality and performance in everything we deliver.&quot;,
      color: &quot;from-indigo-500 to-purple-500&quot;
    },
    {
      icon: Heart,
      title: &quot;Integrity&quot;,
      description: &quot;Operating with transparency, honesty, and ethical principles in all our business relationships.&quot;,
      color: &quot;from-pink-500 to-rose-500&quot;
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  TrendingUp, BarChart3, Cloud, Network, Lightbulb, Flame, Zap as ZapIcon,
  ArrowRight, ChevronRight, MapPin, Mail, Phone, Globe as GlobeIcon
} from 'lucide-react',
import SmartHeader from '../components/SmartHeader',
import SmartFooter from '../components/SmartFooter',
export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle, color: 'from-blue-500 to-cyan-500' },
    { number: '50+', label: 'Enterprise Clients', icon: Users, color: 'from-purple-500 to-pink-500' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield, color: 'from-green-500 to-emerald-500' },
    { number: '24/7', label: 'Support Available', icon: Clock, color: 'from-orange-500 to-red-500' }
  ],

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creating breakthrough solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
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
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>About | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;About Zion Tech Group: AI, micro SaaS, and enterprise IT innovators.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/about&quot; />
      </Head>

      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white&quot;>
        <div className=&quot;max-w-6xl mx-auto space-y-10&quot;>
          <header className=&quot;text-center&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4&quot;>About Zion Tech Group</h1>
            <p className=&quot;text-gray-300 text-lg&quot;>We build real, outcome-oriented AI, micro SaaS, and enterprise IT solutions.</p>
          </header>

          <section className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
            <div className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60&quot;>
              <div className=&quot;text-sm text-gray-400 mb-2&quot;>What we do</div>
              <div className=&quot;text-gray-200&quot;>200+ production-ready services across AI, DevOps, Security, Cloud, and Data.</div>
            </div>
            <div className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60&quot;>
              <div className=&quot;text-sm text-gray-400 mb-2&quot;>How we deliver</div>
              <div className=&quot;text-gray-200&quot;>Template-driven deployments, SLAs, clear pricing, and measurable ROI.</div>
            </div>
            <div className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60&quot;>
              <div className=&quot;text-sm text-gray-400 mb-2&quot;>Who we serve</div>
              <div className=&quot;text-gray-200&quot;>Startups to enterprises across healthcare, fintech, manufacturing, media, and public sector.</div>
            </div>
          </section>

<<<<<<< HEAD
          <section className="grid grid-cols-1 md: grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <ul className="text-gray-300 space-y-2">
                <li>Mobile: <a className="text-cyan-300" href="tel:+13024640950">+1 302 464 0950</a></li>
                <li>E-mail: <a className="text-purple-300" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>
                <li>Address: <span className="text-gray-200">364 E Main St STE 1008 Middletown DE 19709</span></li>
                <li>Website: <a className="text-cyan-300" href="https://ziontechgroup.com">ziontechgroup.com</a></li>
=======
          <section className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
            <div className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-3&quot;>Contact</h2>
              <ul className=&quot;text-gray-300 space-y-2&quot;>
                <li>Mobile: <a className=&quot;text-cyan-300&quot; href=&quot;tel:+13024640950&quot;>+1 302 464 0950</Link></li>
                <li>E-mail: <a className=&quot;text-purple-300&quot; href=&quot;mailto:kleber@ziontechgroup.com&quot;>kleber@ziontechgroup.com</Link></li>
                <li>Address: <span className=&quot;text-gray-200&quot;>364 E Main St STE 1008 Middletown DE 19709</span></li>
                <li>Website: <a className=&quot;text-cyan-300&quot; href=&quot;https://ziontechgroup.com&quot;>ziontechgroup.com</Link></li>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              </ul>
            </div>
            <div className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-3&quot;>Get Started</h2>
              <p className=&quot;text-gray-300 mb-4&quot;>Book a consultation to map your roadmap to shipped outcomes.</p>
              <div className=&quot;flex gap-3&quot;>
                <Button href=&quot;/contact&quot; className=&quot;bg-gradient-to-r from-cyan-600 to-blue-700 text-white&quot;>Talk to Sales</Button>
                <Button href=&quot;/pricing&quot; variant=&quot;outline&quot; className=&quot;border border-gray-600 text-gray-200&quot;>Pricing</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
},

export default AboutPage,
