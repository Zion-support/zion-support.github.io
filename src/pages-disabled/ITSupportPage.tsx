import React from 'react',
import { ServiceLandingTemplate } from '@/components/services/ServiceLandingTemplate',
import { Phone, ShieldCheck, Clock } from 'lucide-react',
export default function ITSupportPage() {
  const benefits = [
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance',
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: 'Secure Solutions',
      description: 'Enterprise-grade security protocols',
      icon: <ShieldCheck className="h-6 w-6" />
    },
    {
      title: 'Direct Contact',
      description: 'Direct access to our support team',
      icon: <Phone className="h-6 w-6" />
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'IT Manager',
      text: 'Excellent support and quick response times.',
      avatar: '/images/avatars/john.jpg'
    }
  ];

  return (
    <ServiceLandingTemplate
      title="IT Support Services"
      subtitle="Professional IT Support for Your Business"
      description="Comprehensive IT support services to keep your business running smoothly with 24/7 assistance and enterprise-grade security."
      benefits={benefits}
      testimonials={testimonials}
      ctaText="Get Support"
      ctaLink="/contact"
    />
  );
}