import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { ContactSection } from '@/components/ContactSection';
import Link from 'next/link';


export default function About() {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80',
      bio: "Alex Johnson leads Zion as CEO, driving the company's vision to democratize AI globally. With over a decade of experience in technology startups, Alex previously built enterprise platforms adopted by Fortune 500 companies. At Zion, he focuses on building partnerships and ensuring that innovation benefits everyone. Alex believes in open collaboration and empowers the team to push boundaries while upholding transparency. Outside work, he mentors young entrepreneurs and enjoys exploring new cultures. He loves hiking, reading science fiction, and cooking."
    },
    {
      name: 'Maria Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80',
      bio: "Maria Chen, Zion's CTO, oversees the platform's technical strategy and architecture. She has led engineering teams at several AI-focused startups, delivering scalable solutions that power millions of users. At Zion, Maria champions a culture of experimentation and rigorous security, ensuring the marketplace remains reliable and cutting-edge. She collaborates closely with open-source communities and mentors young developers in her spare time. Maria holds a master's in computer science and enjoys painting landscapes when she's not coding. She also loves robotics projects."
    },
    {
      name: 'Sam Lee',
      role: 'Head of Community',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      bio: "Sam Lee serves as Zion's Head of Community, cultivating relationships with developers, partners, and customers worldwide. He previously launched multiple tech communities that grew from small meetups into thriving networks. At Zion, Sam orchestrates events, online forums, and mentorship programs that encourage collaboration and knowledge sharing. His empathetic approach helps newcomers feel welcomed while promoting an inclusive culture. Sam studied communications and has a background in user advocacy. In his downtime, he enjoys photography and traveling with his family."
    }
  ];

  return (
    <>
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions."
      />
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
          <p className="text-lg text-gray-600 mb-6">
            Zion Tech Group is a leading technology solutions provider dedicated to helping 
            organizations transform their digital infrastructure and achieve their business goals.
          </p>
          <p className="text-lg text-gray-600">
            Our team of experts specializes in AI, cybersecurity, cloud infrastructure,
            and digital transformation services.
          </p>
        </div>
      </div>
    </>
);
}
