import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, Twitter, Globe, Mail, Phone, MapPin, 
  Award, Users, Rocket, Brain, Shield, Cloud, Code,
  Building, Target, TrendingUp, Star, Zap, Heart,
  Crown, Briefcase, GraduationCap, Globe2, Lightbulb
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Leadership = (props: any) => {
  const executiveTeam = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      bio: 'Dr. Sarah Chen is a visionary leader with over 20 years of experience in AI research and technology leadership. Prior to joining Zion Tech Group, she served as AI Research Director at Google, where she led breakthrough research in machine learning and neural networks.',
      image: '/images/leadership/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarahchen',
      education: 'PhD Computer Science, Stanford University',
      experience: 'Google, Microsoft, Stanford University',
      achievements: [
        'Led development of 50+ AI models deployed in production',
        'Published 100+ research papers in top AI conferences',
        'Named "AI Leader of the Year" by TechCrunch in 2023',
        'Advisory board member for AI Ethics Institute'
      ],
      vision: 'To democratize AI technology and make it accessible to businesses of all sizes, driving innovation and growth across industries.'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Technology Officer',
      bio: 'Marcus Rodriguez is a technology architect with 15+ years of experience building scalable cloud infrastructure and enterprise systems. He previously served as Senior Architect at Microsoft Azure, where he designed cloud solutions for Fortune 500 companies.',
      image: '/images/leadership/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      twitter: 'https://twitter.com/marcusrodriguez',
      education: 'MS Computer Science, MIT',
      experience: 'Microsoft, Amazon Web Services, IBM',
      achievements: [
        'Architected cloud solutions for 100+ enterprise clients',
        'Led migration of 50+ legacy systems to cloud',
        'Named "Cloud Architect of the Year" in 2022',
        'Speaker at major tech conferences including AWS re:Invent'
      ],
      vision: 'To build the most scalable, secure, and innovative technology platform that enables businesses to thrive in the digital age.'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Chief AI Officer',
      bio: 'Dr. Emily Watson is a leading AI researcher and former professor at MIT, specializing in machine learning, neural networks, and AI ethics. She has published over 50 peer-reviewed papers and holds multiple patents in AI technology.',
      image: '/images/leadership/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emily-watson',
      twitter: 'https://twitter.com/emilywatson',
      education: 'PhD Artificial Intelligence, MIT',
      experience: 'MIT, Stanford University, DeepMind',
      achievements: [
        'Published 50+ papers in top AI journals',
        'Led research teams of 20+ PhD students',
        'Named "AI Researcher of the Year" in 2023',
        'Member of AI Ethics Advisory Council'
      ],
      vision: 'To advance AI technology responsibly while ensuring it serves humanity and creates positive societal impact.'
    },
    {
      name: 'David Kim',
      title: 'Chief Financial Officer',
      bio: 'David Kim brings 18 years of experience in investment banking and financial technology. He previously served as Managing Director at Goldman Sachs, where he led fintech investments and strategic financial planning.',
      image: '/images/leadership/david-kim.jpg',
      linkedin: 'https://linkedin.com/in/david-kim',
      twitter: 'https://twitter.com/davidkim',
      education: 'MBA Finance, Harvard Business School',
      experience: 'Goldman Sachs, Morgan Stanley, JP Morgan',
      achievements: [
        'Led $2B+ in fintech investments',
        'Managed portfolio of 50+ technology companies',
        'Named "Fintech Leader of the Year" in 2022',
        'Board member of 3 successful fintech startups'
      ],
      vision: 'To build a financially sustainable company that can scale globally while maintaining our commitment to innovation and customer success.'
    }
  ];

  const boardMembers = [
    {
      name: 'Dr. Michael Chang',
      title: 'Board Chairman',
      role: 'Independent Director',
      bio: 'Dr. Chang is a renowned technology investor and former CEO of TechCorp, a Fortune 500 technology company. He brings 30+ years of executive leadership experience.',
      image: '/images/leadership/michael-chang.jpg',
      linkedin: 'https://linkedin.com/in/michael-chang',
      education: 'PhD Engineering, Caltech',
      experience: 'TechCorp, Silicon Valley Ventures, Caltech',
      expertise: ['Technology Investment', 'Corporate Governance', 'Strategic Planning']
    },
    {
      name: 'Lisa Rodriguez',
      title: 'Board Member',
      role: 'Independent Director',
      bio: 'Lisa is a cybersecurity expert and former CISO of a major financial institution. She brings deep expertise in security, compliance, and risk management.',
      image: '/images/leadership/lisa-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/lisa-rodriguez',
      education: 'MS Cybersecurity, Carnegie Mellon',
      experience: 'Bank of America, NSA, Deloitte',
      expertise: ['Cybersecurity', 'Risk Management', 'Compliance']
    },
    {
      name: 'James Wilson',
      title: 'Board Member',
      role: 'Independent Director',
      bio: 'James is a serial entrepreneur and angel investor with 5 successful exits. He brings valuable insights into startup growth and market strategy.',
      image: '/images/leadership/james-wilson.jpg',
      linkedin: 'https://linkedin.com/in/james-wilson',
      education: 'MBA Entrepreneurship, Stanford',
      experience: 'Founder of 3 successful startups, Angel investor',
      expertise: ['Entrepreneurship', 'Startup Growth', 'Market Strategy']
    }
  ];

  const leadershipPrinciples = [
    {
      icon: Crown,
      title: 'Visionary Leadership',
      description: 'We lead with a clear vision of the future and inspire our teams to achieve the extraordinary.'
    },
    {
      icon: Heart,
      title: 'People First',
      description: 'Our people are our greatest asset. We invest in their growth and create an environment where they can thrive.'
    },
    {
      icon: Shield,
      title: 'Integrity & Trust',
      description: 'We operate with the highest ethical standards, building trust with our customers, partners, and team members.'
    },
    {
      icon: Rocket,
      title: 'Innovation & Excellence',
      description: 'We continuously push boundaries, striving for excellence in everything we do.'
    },
    {
      icon: Globe2,
      title: 'Global Impact',
      description: 'We think globally and act locally, creating solutions that benefit businesses and communities worldwide.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'We foster a culture of continuous learning and adaptation to stay ahead of industry changes.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Leadership | Zion Tech Group</title>
        <meta name="description" content="Leadership - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Leadership</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
