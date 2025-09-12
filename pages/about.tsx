import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
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
=======
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  TrendingUp, BarChart3, Cloud, Network, Lightbulb, Flame, Zap as ZapIcon,
  ArrowRight, ChevronRight, MapPin, Mail, Phone, Globe as GlobeIcon
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About - Zion Tech Solutions</title>
        <meta name="description" content="About page" />
      </Head>
      
      <main>
        <h1>About</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
};

export default AboutPage;
