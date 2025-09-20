 from 'lucide-react';

interface Stat {
  id: string;
  icon: React.ComponentType < any>;
  value: string;
  label: string;
  description: string;
  color: string;
  gradient: string
}
;
const stats: Stat[] = [{

    id: 'clients',
    icon: Users,
    value: '500+',
    label: 'Global Clients',
    description: 'Serving businesses across 50+ countries',
    color: 'zion-cyan',
    gradient: 'from-zion-cyan to-zion-blue'
  },
  {

    id: 'uptime',
    icon: Shield,
    value: '99.99%',
    label: 'Uptime Guarantee',
    description: 'Enterprise-grade reliability and performance',
    color: 'zion-purple',
    gradient: 'from-zion-purple to-zion-cyan'
  },
  {

    id: 'roi',
    icon: TrendingUp,
    value: '600%',
    label: 'Average ROI',
    description: 'Proven business impact and cost savings',
    color: 'zion-blue',
    gradient: 'from-zion-blue to-zion-purple'
  },
  {

    id: 'satisfaction',
    icon: Star,
    value: '4.9/5',
    label: 'Client Satisfaction',
    description: 'Consistently exceeding expectations',
    color: 'zion-cyan',
    gradient: 'from-zion-cyan to-zion-purple'
  },
  {

    id: 'innovation',
    icon: Zap,
    value: '50+',
    label: 'Patents & Innovations',
    description: 'Leading edge technology development',
    color: 'zion-purple',
    gradient: 'from-zion-purple to-zion-blue'
  },
  {

    id: 'growth',
    icon: Rocket,
    value: '300%',
    label: 'Annual Growth',
    description: 'Rapidly expanding global presence',
    color: 'zion-blue',
    gradient: 'from-zion-blue to-zion-cyan'

];

export default function EnhancedStatsSection(...args[]):  {

  const [countedValues, setCountedValues] = useState<any>({});
  
  const [ref, inView] = useInView({

    threshold: 0.3,
    triggerOnce: true
  }) ;

