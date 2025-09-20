import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ChevronLeft, ChevronRight, Star, Quote, ArrowRight} from 'lucide-react';
,
  {id: 2,
    name: 'Michael Chen',
    role: 'AI Engineer',
    comp: 'Freelance',
    content:'"
      "As a freelancer, Zion Tech Group has opened up incredible opportunities.The marketplace is well-organized and the clients are top-tier.I've doubled my income since joining the platform.",
    avatar: '/avatars/michael.jpg',
    rating: 5,
    category: 'Freelancer',
    project: 'Machine Learning Solutions'},
  {id: 3,
    name: 'Dr.Emily Rodriguez',
    role: 'Research Director',
    comp: 'InnovateLab',
    content:'
      'The AI services we found through Zion Tech Group exceeded our expectations.The team delivered cutting-edge solutions that accelerated our research by months.Highly recommended!',
    avatar: '/avatars/emily.jpg',
    rating: 5,
    category: 'Research',
    project: 'AI Research Platform'},
  {id: 4,
    name: 'David Kim',
    role: 'Startup Founder',
    comp: 'DataFlow',
    content:'
      'Starting a tech comp is challenging, but Zion Tech Group made it so much easier.We found the perfect team and equipment to get our MVP to market in record time.',
    avatar: '/avatars/david.jpg',
    rating: 5,
    category: 'Startup',
    project: 'SaaS Platform'},
  {id: 5,
    name: 'Lisa Thompson',
    role: 'IT Manager',
    comp: 'Global Retail Co.',
    content:'
      'Our digital transformation project was a huge success thanks to Zion Tech Group.The comprehensive services and expert team delivered everything we needed on time and budget.',
    avatar: '/avatars/lisa.jpg',
    rating: 5,
    category: 'Enterprise',
    project: 'Digital Transformation'},
  {id: 6,
    name: 'Alex Patel',
    role: 'DevOps Engineer',
    comp: 'CloudScale',
    content:'"
      "The infrastructure solutions from Zion Tech Group are world-class.We've achieved 99.99% uptime and our performance has improved dramatically.The team is incredibly responsive.",
    avatar: '/avatars/alex.jpg',
    rating: 5,
    category: 'Infrastructure',
    project: 'Cloud Infrastructure'},
];
export function TestimonialCarousel(props: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  useEffect(() => {
  // TODO: Add dependencies if needed

export default TestimonialCarousel.js;
