import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, Twitter, Globe, Mail, Phone, MapPin, 
  Award, Users, Rocket, Brain, Shield, Cloud, Code,
  Building, Target, TrendingUp, Star, Zap, Heart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Team = (props: any) => {
  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      bio: 'Former AI Research Director at Google, PhD in Computer Science from Stanford. Leading Zion Tech Group\'s mission to democratize AI technology.',
      image: '/images/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarahchen',
      expertise: ['AI Strategy', 'Business Development', 'Technology Vision']
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Technology Officer',
      bio: 'Ex-Microsoft Azure architect with 15+ years in cloud infrastructure. Expert in scalable systems and emerging technologies.',
      image: '/images/team/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      twitter: 'https://twitter.com/marcusrodriguez',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design']
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Chief AI Officer',
      bio: 'Leading AI researcher with 50+ published papers. Former professor at MIT specializing in machine learning and neural networks.',
      image: '/images/team/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emily-watson',
      twitter: 'https://twitter.com/emilywatson',
      expertise: ['Machine Learning', 'AI Ethics', 'Research & Development']
    },
    {
      name: 'David Kim',
      title: 'Chief Financial Officer',
      bio: 'Former investment banker with Goldman Sachs. Expert in fintech, fundraising, and strategic financial planning.',
      image: '/images/team/david-kim.jpg',
      linkedin: 'https://linkedin.com/in/david-kim',
      twitter: 'https://twitter.com/davidkim',
      expertise: ['Financial Strategy', 'Investor Relations', 'Risk Management']
    }
  ];

  const departmentHeads = [
    {
      name: 'Alex Thompson',
      title: 'VP of Engineering',
      department: 'Engineering',
      bio: 'Leading our engineering teams with 12+ years of experience in software development and team leadership.',
      image: '/images/team/alex-thompson.jpg',
      linkedin: 'https://linkedin.com/in/alex-thompson',
      expertise: ['Software Engineering', 'Team Leadership', 'Agile Development']
    },
    {
      name: 'Lisa Park',
      title: 'VP of Product',
      department: 'Product',
      bio: 'Product strategist with experience at Amazon and Netflix. Expert in user experience and product-market fit.',
      image: '/images/team/lisa-park.jpg',
      linkedin: 'https://linkedin.com/in/lisa-park',
      twitter: 'https://twitter.com/lisapark',
      expertise: ['Product Strategy', 'UX Design', 'Market Research']
    },
    {
      name: 'James Wilson',
      title: 'VP of Sales',
      department: 'Sales',
      bio: 'Sales leader with proven track record in B2B technology sales. Expert in enterprise sales and customer success.',
      image: '/images/team/james-wilson.jpg',
      linkedin: 'https://linkedin.com/in/james-wilson',
      expertise: ['Enterprise Sales', 'Customer Success', 'Business Development']
    },
    {
      name: 'Dr. Rachel Green',
      title: 'VP of Research',
      department: 'Research',
      bio: 'Leading our R&D efforts with focus on quantum computing and emerging technologies.',
      image: '/images/team/rachel-green.jpg',
      linkedin: 'https://linkedin.com/in/rachel-green',
      expertise: ['Quantum Computing', 'Emerging Tech', 'Academic Research']
    }
  ];

  const teamStats = [
    { number: '150+', label: 'Team Members', icon: Users, color: 'text-blue-400' },
    { number: '25+', label: 'Countries', icon: Globe, color: 'text-green-400' },
    { number: '15+', label: 'Years Experience', icon: Award, color: 'text-yellow-400' },
    { number: '50+', label: 'AI Models Deployed', icon: Brain, color: 'text-purple-400' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and emerging technologies.'
    },
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'Technology should serve humanity, not replace it. We build with people in mind.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Security and privacy are fundamental to everything we build and deploy.'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in every project, product, and interaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Team | Zion Tech Group</title>
        <meta name="description" content="Team - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Team</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
