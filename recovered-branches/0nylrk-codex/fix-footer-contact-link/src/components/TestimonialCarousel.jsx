<<<<<<< HEAD

export default TestimonialCarousel;
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from 'lucide-react';
const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'CTO at TechCorp',
        company: 'TechCorp Inc.',
        content: 'Zion Tech Group has revolutionized how we find AI talent. The platform is intuitive and the quality of candidates is exceptional. We\'ve reduced our hiring time by 60% while improving candidate quality.',
        avatar: '/avatars/sarah.jpg',
        rating: 5,
        category: 'Enterprise',
        project: 'AI Talent Acquisition'
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'AI Engineer',
        company: 'Freelance',
        content: 'As a freelancer, Zion Tech Group has opened up incredible opportunities. The marketplace is well-organized and the clients are top-tier. I\'ve doubled my income since joining the platform.',
        avatar: '/avatars/michael.jpg',
        rating: 5,
        category: 'Freelancer',
        project: 'Machine Learning Solutions'
    },
    {
        id: 3,
        name: 'Dr. Emily Rodriguez',
        role: 'Research Director',
        company: 'InnovateLab',
        content: 'The AI services we found through Zion Tech Group exceeded our expectations. The team delivered cutting-edge solutions that accelerated our research by months. Highly recommended!',
        avatar: '/avatars/emily.jpg',
        rating: 5,
        category: 'Research',
        project: 'AI Research Platform'
    },
    {
        id: 4,
        name: 'David Kim',
        role: 'Startup Founder',
        company: 'DataFlow',
        content: 'Starting a tech company is challenging, but Zion Tech Group made it so much easier. We found the perfect team and equipment to get our MVP to market in record time.',
        avatar: '/avatars/david.jpg',
        rating: 5,
        category: 'Startup',
        project: 'SaaS Platform'
    },
    {
        id: 5,
        name: 'Lisa Thompson',
        role: 'IT Manager',
        company: 'Global Retail Co.',
        content: 'Our digital transformation project was a huge success thanks to Zion Tech Group. The comprehensive services and expert team delivered everything we needed on time and budget.',
        avatar: '/avatars/lisa.jpg',
        rating: 5,
        category: 'Enterprise',
        project: 'Digital Transformation'
    },
    {
        id: 6,
        name: 'Alex Patel',
        role: 'DevOps Engineer',
        company: 'CloudScale',
        content: 'The infrastructure solutions from Zion Tech Group are world-class. We\'ve achieved 99.99% uptime and our performance has improved dramatically. The team is incredibly responsive.',
        avatar: '/avatars/alex.jpg',
        rating: 5,
        category: 'Infrastructure',
        project: 'Cloud Infrastructure'
    }
];
export function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };
    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    };
    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

export default TestimonialCarousel;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
