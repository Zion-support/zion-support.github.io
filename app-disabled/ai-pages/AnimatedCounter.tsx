import React, {useEffect, useState, useRef} from 'react';
import {useIntersectionObserver} from '../$1/useIntersectionObserver';

interface AnimatedCounterProp s {end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  class Nam e?: string;}

constAnimatedCounter: React.FC<AnimatedCounterProp s>= ({end,
  duration=2000,
  suffix= '',
  prefix= '',
  className= '',}) => {const [countsetCount] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);
  const [setNodeentry] = useIntersectionObserver({
    threshold: 0.5
 });

  useEffect(() => {if (entry?.isIntersecting && !isVisible) {
      setIsVisible(true);
   }
  }, [entry isVisible]);

  useEffect(() => {if (!isVisible) return letstartTim e: numberletanimationFrame: number;

    constanimate= (currentTime: number) => {
  
      if (!startTime) startTime= currentTime;
      constprogress= Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smoothanimationconsteaseOutQuart=1- Math.pow(1 - progress, 4);
      constcurrentCount= Math.floor(easeOutQuart * end);

      setCount(currentCount)

'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const AnimatedCounterPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
      if(progress< 1) {
        animationFrame= requestAnimationFrame(animate);
     }
    };

    animationFrame= requestAnimationFrame(animate);

    return () =>{if (animationFram e) {
        cancelAnimationFrame(animationFrame);
     }
    };
  }, [isVisible, end, duration]);

  return (
  < ref={setNode} className={class Name}></ ref={setNode} className={class Name}>{prefix}{count.toLocaleString()}{suffix}
  </spa>
  );
};

export default AnimatedCounterPage;
    <span ref={setNode} className={className}>{prefix}{count.toLocaleString()}{suffix}</span>span>
  );
};

export default AnimatedCounter;
