import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Users, Award, Globe, Linkedin, Mail, Github, Twitter } from 'lucide-react';
import Link from 'next/link';
const TeamPage: NextPage = () => {;
  const teamMembers = [;
    {;
      name: 'Kleber Silva',
      role: 'Founder & CEO',
      bio: 'Technology visionary with over 15 years of experience in software development and business transformation. Passionate about helping businesses leverage technology for growth.',
      image: '/team/kleber.jpg',
      linkedin: 'https://linkedin.com/in/klebersilva',
      email: 'kleber@ziontechgroup.com',
      expertise: ['Strategic Leadership', 'Technology Innovation', 'Business Development'];
},
    {;
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      bio: 'Expert in cloud architecture and AI/ML solutions with a passion for scalable, innovative technology. Leads our technical strategy and innovation initiatives.',
      image: '/team/sarah.jpg',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      email: 'sarah@ziontechgroup.com',
      expertise: ['Cloud Architecture', 'AI/ML', 'System Design'];
},
    {;
      name: 'Michael Chen',
      role: 'Head of Security',
      bio: 'Cybersecurity expert with extensive experience in enterprise security, compliance, and threat management. Ensures our clients\' data and systems remain secure.',
      image: '/team/michael.jpg',
      linkedin: 'https://linkedin.com/in/michaelchen',
      email: 'michael@ziontechgroup.com',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management'];
},
    {;
      name: 'Emily Rodriguez',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies and microservices architecture. Passionate about building scalable, maintainable solutions.',
      image: '/team/emily.jpg',
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      email: 'emily@ziontechgroup.com',
      expertise: ['Full-Stack Development', 'Microservices', 'DevOps'];
},
    {;
      name: 'David Kim',
      role: 'Data Science Lead',
      bio: 'Data scientist and machine learning engineer with expertise in predictive analytics and business intelligence. Helps clients unlock insights from their data.',
      image: '/team/david.jpg',
      linkedin: 'https://linkedin.com/in/davidkim',
      email: 'david@ziontechgroup.com',
      expertise: ['Data Science', 'Machine Learning', 'Analytics'];
},
    {;
      name: 'Lisa Wang',
      role: 'UX/UI Designer',
      bio: 'Creative designer focused on user experience and interface design. Ensures our solutions are not only functional but also intuitive and engaging.',
      image: '/team/lisa.jpg',
      linkedin: 'https://linkedin.com/in/lisawang',
      email: 'lisa@ziontechgroup.com',
      expertise: ['UX Design', 'UI Design', 'User Research'];
}
  ];
  const values = [;
    {;
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.',
      icon: <Award className="w-8 h-8" />;
},
    {;
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their success.',
      icon: <Users className="w-8 h-8" />;
},
    {;
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do.',
      icon: <Globe className="w-8 h-8" />;
}