<<<<<<< HEAD:src-disabled/pages.disabled/ITSupportPage.tsx


import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
=======
<<<<<<< HEAD
import { Phone, ShieldCheck, Clock } from 'lucide-react'
import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import React from 'react'
import { ServiceLandingTemplate } from '@/components/services/ServiceLandingTemplate'
import React from "react",
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/ITSupportPage.tsx
import { Phone, ShieldCheck, Clock } from 'lucide-react'
<<<<<<< HEAD
:src/pages/ITSupportPage.tsx
export default function ITSupportPage() {
  const benefits = [
    {import React from "react"
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate"
import React from "react"
export default function ITSupportPage() {

<<<<<<< HEAD:src-disabled/pages.disabled/ITSupportPage.tsx
=======
<<<<<<< HEAD

import React from "react"
export default function ITSupportPage() {

  const benefits = [
    {
      title: '24/7 Assistance'
      description:
        'Our experts are available around the clock to keep your systems running.'
      icon: <Clock className='h-8 w-8' />
    }
    {
      title: 'Certified Professionals'
      description:
        'Work with seasoned technicians experienced in modern IT infrastructures.'
      icon: <ShieldCheck className='h-8 w-8' />
    }
    {
      title: 'Multi-Channel Support'
      description:
        'Get help via phone, chat, or onsite visits tailored to your needs.'
      icon: <Phone className='h-8 w-8' />
    }
  ]
  const testimonials = [
=======
import React from 'react';
import { ServiceLandingTemplate } from '@/components / services / ServiceLandingTemplate';
import { Phone, ShieldCheck, Clock } from 'lucide-react';
export default /**
 * ITSupportPage - Function description
 */
function ITSupportPage() {
  const benefits = [;
    {import React from './react';
import { ServiceLandingTemplate  } from '@/components / services / ServiceLandingTemplate';
import React from './react';
export default /**
 * ITSupportPage - Function description
 */
function ITSupportPage() {
  const benefits = [;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/ITSupportPage.tsx
    {
      title: '24/7 Assistance'
      description:
        'Our experts are available around the clock to keep your systems running.'
      icon: <Clock className='h-8 w-8' />
    }
    {
      title: 'Certified Professionals'
      description:
        'Work with seasoned technicians experienced in modern IT infrastructures.'
      icon: <ShieldCheck className='h-8 w-8' />
    }
    {
<<<<<<< HEAD:src-disabled/pages.disabled/ITSupportPage.tsx
      title: 'Multi-Channel Support'
      description:
        'Get help via phone, chat, or onsite visits tailored to your needs.'
      icon: <Phone className='h-8 w-8' />
    }
  ]
  const testimonials = [
=======
      title: 'Multi - Channel Support',
      description:;
        'Get help via phone, chat, or onsite visits tailored to your needs.',
      icon: <Phone className='h - 8 w - 8' />,
    },
  ];
  const testimonials = [;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/ITSupportPage.tsx
    {
      name: 'Lisa Wong'
      role: 'Operations Manager'
      text: "Zion's support team resolved our network outage within hours and saved us from a major downtime."
      avatar: '/placeholder.svg'
    }
    {
<<<<<<< HEAD:src-disabled/pages.disabled/ITSupportPage.tsx
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/ITSupportPage.tsx
      name: 'Carlos Diaz'
      role: 'IT Lead'
      text: 'Professional and responsive. Their technicians feel like an extension of our own team.'
      avatar: '/placeholder.svg'
    }
  ]
    return (
<<<<<<< HEAD:src-disabled/pages.disabled/ITSupportPage.tsx
=======
>>>>>>> origin/chore/fix-lint-and-merge

export default function ITSupportPage() {
=======

import React from "react",
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate",
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import { Phone, ShieldCheck, Clock } from 'lucide-react'

export default function ITSupportPage() {
  const benefits = [
    {
      title: "24/7 Assistance",
      description: "Our experts are available around the clock to keep your systems running.",
      icon: <Clock className="h-8 w-8" />},
    {
      title: "Certified Professionals",
      description: "Work with seasoned technicians experienced in modern IT infrastructures.",
      icon: <ShieldCheck className="h-8 w-8" />},
    {
      title: "Multi-Channel Support",
      description: "Get help via phone, chat, or onsite visits tailored to your needs.",
      icon: <Phone className="h-8 w-8" />}],

  const testimonials = [
    {
      name: "Lisa Wong",
      role: "Operations Manager",
      text: "Zion's support team resolved our network outage within hours and saved us from a major downtime.",
      avatar: "/placeholder.svg"},
    {
      name: "Carlos Diaz",
      role: "IT Lead",
      text: "Professional and responsive. Their technicians feel like an extension of our own team.",
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import { ServiceLandingTemplate } from '@/components/services/ServiceLandingTemplate';
import { Phone, ShieldCheck, Clock } from 'lucide-react';
export default function ITSupportPage() {;
  const benefits = [;
    {import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import { Phone, ShieldCheck, Clock } from 'lucide-react';

import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/ITSupportPage.tsx


    <ServiceLandingTemplate
      subtitle="Reliable assistance to keep your business technology operating smoothly."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
<<<<<<< HEAD:src-disabled/pages.disabled/ITSupportPage.tsx
;
}
}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/ITSupportPage.tsx
      benefits={benefits}
      testimonials={testimonials}
      ctaText="Get IT Support"
      ctaLink="/request-quote"
    />
  )
import React from "react",;
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate",;
import { Phone, ShieldCheck, Clock } from 'lucide-react';
export default function ITSupportPage() {;
  const benefits = [;,
    {;
      title: '24/7 Assistance',;
      description:;
        'Our experts are available around the clock to keep your systems running.',;
      icon: <Clock className='h-8 w-8' />,;
    },;
    {;
      title: 'Certified Professionals',;
      description:;
        'Work with seasoned technicians experienced in modern IT infrastructures.',;
      icon: <ShieldCheck className='h-8 w-8' />,;
    },;
    {;
      title: 'Multi-Channel Support',;
      description:;
        'Get help via phone, chat, or onsite visits tailored to your needs.',;
      icon: <Phone className='h-8 w-8' />,;
    },;
  ];,
  const testimonials = [;
    {;
      name: 'Lisa Wong',;
      role: 'Operations Manager',;
      text: "Zion's support team resolved our network outage within hours and saved us from a major downtime.",;
      avatar: '/placeholder && placeholder.svg',;
    },;
  const benefits = [;
    {;
      name: 'Carlos Diaz',;
      role: 'IT Lead',;
      text: 'Professional and responsive. Their technicians feel like an extension of our own team.',;
      avatar: '/placeholder && placeholder.svg',;
    },;
  ];
    return (
<<<<<<< HEAD:src-disabled/pages.disabled/ITSupportPage.tsx
    <ServiceLandingTemplate
      title="IT Support Services""
      subtitle="Reliable assistance to keep your business technology operating smoothly.""
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"",
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
}}}}}}}}}]]]]]
    {;
      title: "24/7 Assistance",;
      description: "Our experts are available around the clock to keep your systems running.",;
      icon: <Clock className="h-8 w-8" />},;
    {;
      title: "Certified Professionals",;
      description: "Work with seasoned technicians experienced in modern IT infrastructures.",;
      icon: <ShieldCheck className="h-8 w-8" />},;
    {;
      title: "Multi-Channel Support",;
      description: "Get help via phone, chat, or onsite visits tailored to your needs.",;
      icon: <Phone className="h-8 w-8" />}],;
    {;
      name: "Lisa Wong",;
      role: "Operations Manager",;
      text: "Zion's support team resolved our network outage within hours and saved us from a major downtime.",;
      avatar: "/placeholder.svg"},;
    {;
      name: "Carlos Diaz",;
      role: "IT Lead",;
      text: "Professional and responsive. Their technicians feel like an extension of our own team.";
      avatar: "/placeholder.svg"}];
  return (;
    <ServiceLandingTemplate;
      title="IT Support Services";
      subtitle="Reliable assistance to keep your business technology operating smoothly.";
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support";
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes.";
      benefits={benefits}
      testimonials={testimonials}

    return (
=======



<<<<<<< HEAD
      avatar: "/placeholder.svg"}],

  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <ServiceLandingTemplate
      title="IT Support Services"
      subtitle="Reliable assistance to keep your business technology operating smoothly."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"
<<<<<<< HEAD
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
      benefits = {benefits,}
      testimonials = {testimonials,};
      ctaText="Get IT Support";
      ctaLink="/request-quote";
    />;
  );      benefits={benefits}
      testimonials={testimonials}
      ctaText="Get IT Support"
      ctaLink="/request-quote"
    />
  )
}
;
}
}
      benefits={benefits}
      testimonials={testimonials}
      ctaText="Get IT Support"
      ctaLink="/request-quote"
    />
  )
import React from "react",;
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate",;
import { Phone, ShieldCheck, Clock } from 'lucide-react';
export default function ITSupportPage() {;
  const benefits = [;
    {;
      title: "24/7 Assistance",;
      description: "Our experts are available around the clock to keep your systems running.",;
      icon: <Clock className="h-8 w-8" />},;
    {;
      title: "Certified Professionals",;
      description: "Work with seasoned technicians experienced in modern IT infrastructures.",;
      icon: <ShieldCheck className="h-8 w-8" />},;
    {;
      title: "Multi-Channel Support",;
      description: "Get help via phone, chat, or onsite visits tailored to your needs.",;
      icon: <Phone className="h-8 w-8" />}],;
  const testimonials = [;
    {;
      name: "Lisa Wong",;
      role: "Operations Manager",;
      text: "Zion's support team resolved our network outage within hours and saved us from a major downtime.",;
      avatar: "/placeholder.svg"},;
    {;
      name: "Carlos Diaz",;
      role: "IT Lead",;
      text: "Professional and responsive. Their technicians feel like an extension of our own team.";
      avatar: "/placeholder.svg"}];
  return (;
    <ServiceLandingTemplate;
      title="IT Support Services";
      subtitle="Reliable assistance to keep your business technology operating smoothly.";
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support";
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes.";
      benefits={benefits}
      testimonials={testimonials}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/ITSupportPage.tsx
      ctaText="Get IT Support";
      ctaLink="/request-quote";
    />;
  );
}
;
}
<<<<<<< HEAD:src-disabled/pages.disabled/ITSupportPage.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
=======
;
=======
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/ITSupportPage.tsx
