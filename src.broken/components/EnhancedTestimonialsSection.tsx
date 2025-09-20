 from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  comp: string;
  compLogo: string;
  content: string;
  rating: number;
  industry: string;
  results: string[];
  avatar: string
}
;
const testimonials: Testimonial[] = [{

    id: '1',
    name: 'Sarah Chen',
    position: 'CTO',
    comp: 'TechFlow Solutions',
    compLogo: '/images/company-logos/techflow.svg',
    content: 'Zion Tech Group transformed our data infrastructure completely.Their AI-powered analytics platform increased our operational efficiency by 300% and provided insights we never had before.The ROI was incredible - we saw a 450% return within the first 6 months.',
    rating: 5,
    industry: 'Technology',
    results['300% efficiency increase',450% ROI in 6 months',Real-time insights'],;
    avatar: '/images/avatars/sarah-chen.jpg'
  },
  {

    id: '2',
    name: 'Marcus Rodriguez',
    position: 'VP of Operations',
    comp: 'Global Manufacturing Corp',
    compLogo: '/images/company-logos/gmc.svg',
    content: 'Implementing Zion\'s quantum optimization suite revolutionized our supply chain.We solved complex logistics problems in minutes that used to take weeks.The cost savings were immediate and substantial - over $2M annually.',
    rating: 5,
    industry: 'Manufacturing',
    results['$2M annual savings',Weeks to minutes',Supply chain optimization'],;
    avatar: '/images/avatars/marcus-rodriguez.jpg'
  },
  {

    id: '3',
    name: 'Dr.Emily Watson',
    position: 'Chief Medical Officer',
    comp: 'HealthTech Innovations',
    compLogo: '/images/company-logos/healthtech.svg',
    content: 'Zion\'s AI-powered healthcare platform has been a game-changer for our diagnostic accuracy.We\'ve seen a 95% improvement in early detection rates and significantly reduced false positives.This technology is saving lives.',
    rating: 5,
    industry: 'Healthcare',
    results['95% detection improvement',Reduced false positives',Lives saved'],;
    avatar: '/images/avatars/emily-watson.jpg'
  },
  {

    id: '4',
    name: 'James Thompson',
    position: 'Head of Security',
    comp: 'FinSecure Bank',
    compLogo: '/images/company-logos/finsecure.svg',
    content: 'The zero-trust security platform from Zion Tech Group has provided us with enterprise-grade protection that adapts to new threats in real-time.Our security incidents dropped by 80% in the first quarter.',
    rating: 5,
    industry: 'Financial Services',
    results['80% fewer incidents',Real-time threat detection',Zero-trust security'],;
    avatar: '/images/avatars/james-thompson.jpg'
  },
  {

    id: '5',
    name: 'Lisa Park',
    position: 'Director of IT',
    comp: 'CloudScale Enterprises',
    compLogo: '/images/company-logos/cloudscale.svg',
    content: 'Zion\'s multi-cloud orchestration platform streamlined our entire infrastructure.We reduced cloud costs by 40% while improving performance by 60%.The unified management interface is intuitive and powerful.',
    rating: 5,
    industry: 'Cloud Services',
    results['40% cost reduction',60% performance boost',Unified management'],;
    avatar: '/images/avatars/lisa-park.jpg'

];

export default function EnhancedTestimonialsSection(...args[]):  {

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if(!isAutoPlaying) return;

      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length) }, 8000) ;

