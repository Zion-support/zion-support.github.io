
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import Link from "next/link";
import { useTranslation } from "react-i18next";

    id: 'ai-solutions',
    title: 'AI-Powered Business Solutions',
    subtitle:'
      'Transform your business with cutting-edge artificial intelligence',
    description:'
      'Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization.Our solutions are designed to scale with your business needs.',
    image: '/images/hero-ai-solutions.jpg',
    cta: 'Explore AI Solutions',
    path: '/services/ai-business-intelligence',
    features: ['
      'Machine Learning',Predictive Analytics',Process Automation',Real-time Insights',
    ],
    gradient: 'from-zion-cyan via-zion-purple to-zion-blue',
    icon: Brain,
    stats: ['
      { label: 'Accuracy Rate', value: '95%+', icon: Target },
      { label: 'ROI Increase', value: '450%', icon: TrendingUp },
      { label: 'Market Growth', value: '280%', icon: Rocket },
    ]},
  {

    id: 'it-services',
    title: 'Comprehensive IT Services',
    subtitle: 'End-to-end technology solutions for modern businesses',
    description:'
      "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
    image: '/images/hero-it-services.jpg',
    cta: 'View Our Services',
    path: '/services',
    features: ['
      'Cloud Infrastructure',Cybersecurity',DevOps Automation',24/7 Support',
    ],
    gradient: 'from-zion-blue via-zion-cyan to-zion-purple',
    icon: Shield,
    stats: ['
      { label: 'Uptime', value: '99.99%', icon: Target },
      { label: 'Cost Savings', value: '700%', icon: TrendingUp },
      { label: 'Response Time', value: '<5min', icon: Rocket },
    ]},
  {

    id: 'green-it',
    title: 'Green IT Solutions',
    subtitle: 'Sustainable technology for a better future',
    description:'
      'Implement eco-friendly IT solutions that reduce your carbon footprint while maintaining performance and driving business value.',
    image: '/images/hero-green-it.jpg',
    cta: 'Learn More',
    path: '/green-it',
    features: ['
      'Energy Efficiency',Carbon Reduction',Sustainable Practices',Cost Savings',
    ],
    gradient: 'from-zion-cyan via-zion-blue to-zion-purple',
    icon: Globe,
    stats: ['
      { label: 'Energy Savings', value: '60%', icon: Target },
      { label: 'Carbon Reduction', value: '75%', icon: TrendingUp },
      { label: 'Cost Reduction', value: '40%', icon: Rocket },
    ]},
];
};
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Memoize slides to prevent unnecessary re - renders
  
  // Optimized slide navigation with useCallback
  
    setCurrentSlide(prev => (prev + 1) % memoizedSlides.length);
    setIsAutoPlaying(false)}, [memoizedSlides.length]);

    setCurrentSlide()
      prev => (prev - 1 + memoizedSlides.length) % memoizedSlides.length
    );
    setIsAutoPlaying(false)}, [memoizedSlides.length]);

      setCurrentSlide(index);
      setIsAutoPlaying(false)},
    [currentSlide]
  );
  // Auto-play functionality with pause on hover
  useEffect(() => {
    if(!isAutoPlaying) return;

      setCurrentSlide(prev => (prev + 1) % memoizedSlides.length)}, 6000);

    return () => clearInterval(interval) }, [isAutoPlaying, memoizedSlides.length]) ;

  // Handle keyboard navigation
  useEffect(() => {
    
      if(e.key === 'ArrowRight') nextSlide();
      if(e.key === ' ') {
