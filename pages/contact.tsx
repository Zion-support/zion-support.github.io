import React from 'react';
import Head from 'next/head';
  Mail, Phone, MapPin, Clock, MessageSquare, Send, 
  Globe, Building, Users, Award, Shield, Rocket
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

const ContactPage: React.FC = () => {
=======
  Mail, Phone, MapPin, Clock, Globe, Send, CheckCircle,
  ArrowRight, MessageSquare, Calendar, Building, Users
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';
=======
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Zap as ZapIcon2, Shield as ShieldIcon, Users as UsersIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon2, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Palette as PaletteIcon, Search as SearchIcon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, Calendar as CalendarIcon, CreditCard as CreditCardIcon, BarChart3 as BarChart3Icon, Settings as SettingsIcon, Zap as ZapIcon3, Code as CodeIcon, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon3, Play as PlayIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Filter as FilterIcon, Grid as GridIcon, List as ListIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight as ChevronRightIcon, Send, User, Building2, MessageCircle, Clock as ClockIcon, Globe as GlobeIcon2, Shield as ShieldIcon2, Zap as ZapIcon4, Users as UsersIcon2, Rocket as RocketIcon2, Award as AwardIcon2, TrendingUp as TrendingUpIcon2, CheckCircle, AlertCircle, Info } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (302) 464-0950',
      description: 'Available 24/7 for urgent inquiries',
      color: 'from-blue-500 to-cyan-500',
      action: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'kleber@ziontechgroup.com',
      description: 'Response within 2 hours guaranteed',
      color: 'from-green-500 to-emerald-500',
      action: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Middletown, DE',
      description: 'Global headquarters and innovation center',
      color: 'from-purple-500 to-pink-500',
      action: 'https://maps.google.com/?q=Middletown,DE'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: '24/7 Support',
      description: 'Always here when you need us',
      color: 'from-orange-500 to-red-500',
      action: '#'
    }
  ];

      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your business. Contact us today for a free consultation 
              and discover how our revolutionary micro SaaS services can accelerate your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                href="/services" 
                variant="primary" 
                size="lg"
                className="group relative overflow-hidden"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                href="/pricing" 
                variant="secondary" 
                size="lg"
                className="group relative overflow-hidden"
              >
                View Pricing
                <DollarSign className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <div className="text-sm text-gray-400 space-y-2">
              <p>✓ Free consultation and ROI analysis</p>
              <p>✓ 30-day free trial on all services</p>
              <p>✓ 24/7 AI support and emergency hotline</p>
              <p>✓ Custom implementation and training</p>
=======
  const services = [
    'AI Business Intelligence',
    'Quantum Cybersecurity',
    'Edge Computing Orchestration',
    'Space Technology Innovation',
    'Neural Interface Development',
    'Autonomous DevOps',
    'AI Customer Experience',
    'Quantum Neural Networks',
    'Other (Please specify)'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+',
    'To be discussed'
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Extended (6+ months)',
    'Flexible timeline',
    'To be discussed'
  ];

=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Mail, Phone, MapPin, ArrowRight, MessageSquare,
  Clock, Globe, Building, Users, Award, Shield, Home, ChevronRight, Brain
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact - Zion Tech Solutions</title>
        <meta name="description" content="Contact page" />
      </Head>
      
      <main>
        <h1>Contact</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
};

export default ContactPage;
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709'
	};
	return (
		<Layout>
=======
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Contact | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/contact" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Talk to Us</h1>
				<p className="text-gray-300 mb-10 max-w-2xl">We ship outcomes in weeks. Call, email, or visit to get a tailored plan and pricing.</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<a href={`tel:${contact.mobile}`} className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50">
						<Phone className="w-5 h-5 text-cyan-400" />
						<div className="mt-3 font-semibold">Call</div>
						<div className="text-gray-300">{contact.mobile}</div>
					</a>
					<a href={`mailto:${contact.email}`} className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-purple-500/50">
						<Mail className="w-5 h-5 text-purple-400" />
						<div className="mt-3 font-semibold">Email</div>
						<div className="text-gray-300">{contact.email}</div>
					</a>
					<a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-pink-500/50">
						<MapPin className="w-5 h-5 text-pink-400" />
						<div className="mt-3 font-semibold">Visit</div>
						<div className="text-gray-300 text-sm">{contact.address}</div>
					</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}
