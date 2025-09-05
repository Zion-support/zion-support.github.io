import React from 'react';
import Head from 'next/head';
import {_const AboutPage: React.FC = () => {
  const _values = [
    {
      icon: Brain, _title: "Innovation First", _description: "We push the boundaries of what's possible through cutting-edge technology and creative problem-solving.", _color: "from-purple-500 to-pink-500"},
    {_icon: Shield, _title: "Trust & Security", _description: "Building secure, _reliable solutions that our clients can depend on for their most critical operations.", _color: "from-red-500 to-orange-500"},
    {_icon: Users, _title: "Human-Centric", _description: "Technology should serve humanity, _enhancing human capabilities and improving quality of life.", _color: "from-blue-500 to-cyan-500"},
    {_icon: Globe, _title: "Global Impact", _description: "Creating solutions that address global challenges and benefit communities worldwide.", _color: "from-green-500 to-emerald-500"},
    {_icon: Rocket, _title: "Excellence", _description: "Maintaining the highest standards of quality and performance in everything we deliver.", _color: "from-indigo-500 to-purple-500"},
    {_icon: Heart, _title: "Integrity", _description: "Operating with transparency, _honesty, _and ethical principles in all our business relationships.", _color: "from-pink-500 to-rose-500"
  Brain, _Shield, _Rocket, _Cpu, _Database, _Atom, _Target, _Star, _Sparkles, _Zap, _Users, _Award, _Clock, _CheckCircle, _Globe, _Code, _Server, _TrendingUp, _BarChart3, _Cloud, _Network, _Lightbulb, _Flame, _Zap as ZapIcon, _ArrowRight, _ChevronRight, _MapPin, _Mail, _Phone, _Globe as GlobeIcon} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function AboutPage() {_const _stats = [
    { number: '500+', _label: 'Projects Delivered', _icon: CheckCircle, _color: 'from-blue-500 to-cyan-500'},
    {_number: '50+', _label: 'Enterprise Clients', _icon: Users, _color: 'from-purple-500 to-pink-500'},
    {_number: '99.9%', _label: 'Uptime Guarantee', _icon: Shield, _color: 'from-green-500 to-emerald-500'},
    {_number: '24/7', _label: 'Support Available', _icon: Clock, _color: 'from-orange-500 to-red-500'}
  ];

  const _values = [
    {_icon: Brain, _title: 'Innovation First', _description: 'We push the boundaries of what\'s possible, _constantly exploring emerging technologies and creating breakthrough solutions.', _color: 'from-purple-500 to-pink-500'},
    {_icon: Shield, _title: 'Trust & Security', _description: 'Security is at the core of everything we do. We build solutions that protect your business and data with quantum-resistant technology.', _color: 'from-red-500 to-orange-500'},
    {_icon: Rocket, _title: 'Excellence', _description: 'We strive for excellence in every project, _delivering solutions that exceed expectations and drive measurable business value.', _color: 'from-indigo-500 to-purple-500'},
    {_icon: Users, _title: 'Client Success', _description: 'Your success is our success. We partner with you to understand your needs and deliver solutions that transform your business.', _color: 'from-emerald-500 to-teal-500'}
  ];

  const _technologies = [
    {_name: 'Artificial Intelligence', _icon: Brain, _description: 'Advanced AI and machine learning solutions', _color: 'from-purple-500 to-pink-500'},
    {_name: 'Quantum Computing', _icon: Atom, _description: 'Quantum-powered computing and cryptography', _color: 'from-blue-500 to-cyan-500'},
    {_name: 'Cybersecurity', _icon: Shield, _description: 'Quantum-resistant security solutions', _color: 'from-red-500 to-orange-500'},
    {_name: 'Edge Computing', _icon: Network, _description: 'Intelligent edge orchestration platforms', _color: 'from-yellow-500 to-orange-500'},
    {_name: 'Space Technology', _icon: Rocket, _description: 'AI-powered space exploration solutions', _color: 'from-indigo-500 to-purple-500'},
    {_name: 'Biotechnology', _icon: ZapIcon, _description: 'Neural interfaces and biomedical innovations', _color: 'from-pink-500 to-rose-500'}
  ];

  const _team = [
    {_name: 'Kleber', _role: 'Founder & CEO', _description: 'Visionary leader driving innovation in AI and quantum technologies', _image: '/api/placeholder/150/150', _color: 'from-cyan-500 to-blue-500'},
    {_name: 'AI Team', _role: 'AI Research & Development', _description: 'Expert engineers and researchers pushing the boundaries of artificial intelligence', _image: '/api/placeholder/150/150', _color: 'from-purple-500 to-pink-500'},
    {_name: 'Quantum Team', _role: 'Quantum Computing', _description: 'Specialists in quantum algorithms and quantum-resistant cryptography', _image: '/api/placeholder/150/150', _color: 'from-blue-500 to-cyan-500'},
    {_name: 'Security Team', _role: 'Cybersecurity', _description: 'Experts in threat detection and zero-trust security architectures', _image: '/api/placeholder/150/150', _color: 'from-red-500 to-orange-500'}
  ];

  const _milestones = [
    {_year: '2020', _title: 'Company Founded', _description: 'Zion Tech Group was established with a vision to revolutionize technology through AI and quantum computing.'},
    {_year: '2021', _title: 'First AI Solutions', _description: 'Launched our first AI-powered business intelligence and automation solutions.'},
    {_year: '2022', _title: 'Quantum Breakthrough', _description: 'Developed quantum-resistant cybersecurity solutions and quantum neural networks.'},
    {_year: '2023', _title: 'Space Technology', _description: 'Expanded into space technology with AI-powered satellite management systems.'},
    {_year: '2024', _title: 'Global Expansion', _description: 'Reached 50+ enterprise clients and expanded our service portfolio to 100+ solutions.'},
    {_year: '2025', _title: 'Future Vision', _description: 'Continuing to push boundaries with autonomous AI systems and consciousness technology.'}
  ];

import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';

export default function AboutPage() {_return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>About | Zion Tech Group</title>
        <meta name="description" content="About Zion Tech Group: AI, _micro SaaS, _and enterprise IT innovators." />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">About Zion Tech Group</h1>
            <p className="text-gray-300 text-lg">We build real, _outcome-oriented AI, _micro SaaS, _and enterprise IT solutions.</p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400 mb-2">What we do</div>
              <div className="text-gray-200">200+ production-ready services across AI, _DevOps, _Security, _Cloud, _and Data.</div>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400 mb-2">How we deliver</div>
              <div className="text-gray-200">Template-driven deployments, _SLAs, _clear pricing, _and measurable ROI.</div>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400 mb-2">Who we serve</div>
              <div className="text-gray-200">Startups to enterprises across healthcare, _fintech, _manufacturing, _media, _and public sector.</div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <ul className="text-gray-300 space-y-2">
                <li>Mobile: <a className="text-cyan-300" href="tel:+13024640950">+1 302 464 0950</a></li>
                <li>E-mail: <a className="text-purple-300" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>
                <li>Address: <span className="text-gray-200">364 E Main St STE 1008 Middletown DE 19709</span></li>
                <li>Website: <a className="text-cyan-300" href="https://ziontechgroup.com">ziontechgroup.com</a></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <h2 className="text-2xl font-semibold mb-3">Get Started</h2>
              <p className="text-gray-300 mb-4">Book a consultation to map your roadmap to shipped outcomes.</p>
              <div className="flex gap-3">
                <Button href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Talk to Sales</Button>
                <Button href="/pricing" variant="outline" className="border border-gray-600 text-gray-200">Pricing</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );};

export default AboutPage;
