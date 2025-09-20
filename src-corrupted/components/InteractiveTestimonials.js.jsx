<<<<<<< HEAD

export default InteractiveTestimonials.js;
=======
import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Quote, Star, ChevronLeft, ChevronRight, Play, Pause, MessageCircle, ThumbsUp, Share2} from 'lucide-react';
,
  {id: '2',
    name: 'Marcus Rodriguez',
    role: 'Head of Engineering',
    comp: 'InnovateCorp',
    avatar: 'MR',
    rating: 5,
    content:'
      'The talent matching algorithm is incredible.We found our lead AI engineer in just 3 days, and the quality was outstanding.Zion has become our go-to platform for all tech talent needs.',
    category: 'Talent Matching',
    date: '1 month ago',
    likes: 89,
    verified: true},
  {id: '3',
    name: 'Dr.Emily Watson',
    role: 'Research Director',
    comp: 'Quantum Labs',
    avatar: 'EW',
    rating: 5,
    content:'"
      "Working with Zion's AI services has accelerated our research by months.The platform's capabilities and the team's expertise are unmatched in the industry.",
    category: 'Research & Development',
    date: '3 weeks ago',
    likes: 156,
    verified: true},
  {id: '4',
    name: 'Alex Thompson',
    role: 'Product Manager',
    comp: 'StartupXYZ',
    avatar: 'AT',
    rating: 5,
    content:'
      'As a startup, we needed cost-effective AI solutions.Zion delivered enterprise-grade tools at startup prices.The ROI was immediate and substantial.',
    category: 'Startup Solutions',
    date: '1 week ago',
    likes: 73,
    verified: true},
  {id: '5',
    name: 'Lisa Park',
    role: 'VP of Operations',
    comp: 'GlobalTech Inc',
    avatar: 'LP',
    rating: 5,
    content:'"
      "The global network and 24/7 support are game-changers.We operate in multiple time zones, and Zion's support team is always available when we need them.",
    category: 'Global Operations',
    date: '2 months ago',
    likes: 94,
    verified: true},
];
const categories = ['
  'All',AI Infrastructure',Talent Matching',Research & Development',Startup Solutions',Global Operations',
];
export function InteractiveTestimonials(props: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [likedTestimonials, setLikedTestimonials] = useState(new Set());
  const filteredTestimonials ='
    selectedCategory === 'All'
      ? testimonials
      : testimonials.filter()
          testimonial => testimonial.category === selectedCategory
        );
  useEffect(() => {
  // TODO: Add dependencies if needed

export default InteractiveTestimonials.js;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
