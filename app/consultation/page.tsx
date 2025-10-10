'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star } from 'lucide-react';
interface ConsultationType {
}
}
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular?: boolean;
};
const ConsultationPage: React.FC = () => {
};
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consultationType: ''
  });
  const consultationTypes: ConsultationType[] = [
    {
      id: 1,
  const consultationTypes: ConsultationType[] = [
    {
      id: '1',
      name: 'Discovery Call',
      description: 'Initial consultation to understand your business needs and challenges',
      duration: '30 minutes',
      price: 'Free',
      features: [
        'Business needs assessment',
        'Technology evaluation',
        'Initial recommendations',
        'Next steps planning'
      ]
    },
    {
      id: 2,
      name: 'Strategic Planning',
      description: 'Comprehensive analysis and strategic roadmap for your AI transformation',
      duration: '2 hours',
      price: '$500',
      features: [
        'Deep dive into current systems',
        'AI readiness assessment',
        'Strategic roadmap creation',
        'Implementation timeline',
        'ROI projections',
        'Follow-up support'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Technical Deep Dive',
      description: 'Detailed technical analysis and architecture recommendations',
      duration: '4 hours',
      price: '$1,200',
      features: [
      ],
      popular: true});;)
},
    {
      id: '3',
      name: 'Technical Deep Dive',
      description: 'In-depth technical analysis and solution architecture design',
      duration: '4-8 hours',
      price: '$1,200',
      features: [
        'Technical architecture review',
        'Security assessment',
        'Performance optimization',
        'Integration planning',
        'Scalability analysis',
        'Detailed technical documentation'
      ]
    },
    {
      id: 4,
      name: 'Executive Briefing',
      description: 'High-level overview for C-level executives and decision makers',
      duration: '1 hour',
      price: '$300',
      features: [
        'Executive summary',
        'Business impact analysis',
        'Investment recommendations',
        'Risk assessment',
        'Competitive advantages'
      ]
      ],
      popular: false});;)
};
  ];
  const experts = [
[
        {
      name: 'Dr. Sarah Chen',
      role: 'AI & Machine Learning Consultant',
      experience: '15+ years',
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science'],
      image: '/images/experts/sarah-chen.jpg'});;)
},
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Architecture Specialist',
      experience: '12+ years',
      expertise: ['Cloud Migration', 'AWS', 'Azure', 'DevOps'],
      image: '/images/experts/michael-rodriguez.jpg'
    },
    {
      name: 'Alex Thompson',
      role: 'Cybersecurity Consultant',
      experience: '10+ years',
      expertise: ['Security Audits', 'Compliance', 'Risk Management'],
      image: '/images/experts/alex-thompson.jpg'});;)
};
  ];
  const handleBooking = (typeId: string) => {
    setSelectedType(typeId);
    console.log(`Booking consultation: ${typeId}`);
    };
  ];
  );
};
export default PagePage;
