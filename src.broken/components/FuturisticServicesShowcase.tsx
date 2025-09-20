 from 'lucide-react';
interface ServiceShowcase {
	id: string;
	title: string;
	description: string;
	icon: React.ComponentType < any>;
	color: string;
	features: string[];
	price: string;
	status: 'active' | 'beta' | 'new'}
const futuristicServices: ServiceShowcase[] = [{

		id: 'quantum-ai-controller',
		title: 'Quantum AI Controller',
		description: 'Revolutionary AI controller using quantum computing for autonomous system management.',
		icon: Brain,
		color: 'from-purple-500 to-cyan-500',
		features['Quantum decision making',Autonomous learning',System optimization'],;
		price: '$32,000/month',
		status: 'new'
	},
	{

		id: 'satellite-ai-orchestrator',
		title: 'Satellite AI Orchestrator',
		description: 'AI-powered satellite constellation management for optimal orbital positioning.',
		icon: Rocket,
		color: 'from-blue-500 to-indigo-600',
		features['Autonomous orbital optimization',Real-time monitoring',Global coverage'],;
		price: '$15,000/month',
		status: 'beta'
	},
	{

		id: 'quantum-metaverse-engine',
		title: 'Quantum Metaverse Engine',
		description: 'Next-generation metaverse platform using quantum computing for infinite scalability.',
		icon: Eye,
		color: 'from-green-500 to-emerald-600',
		features['Quantum rendering',Infinite scalability',AI-powered NPCs'],;
		price: '$28,000/month',
		status: 'active'
	},
	{

		id: 'autonomous-defi-protocol',
		title: 'Autonomous DeFi Protocol',
		description: 'Self-managing DeFi protocol that automatically optimizes yields and manages risks.',
		icon: DollarSign,
		color: 'from-yellow-500 to-orange-500',
		features['Autonomous yield farming',Risk management',Strategy optimization'],;
		price: '$12,000/month',
		status: 'beta'
	},
	{

		id: 'quantum-genome-analyzer',
		title: 'Quantum Genome Analyzer',
		description: 'Advanced genome analysis platform using quantum computing for personalized medicine.',
		icon: Heart,
		color: 'from-pink-500 to-rose-600',
		features['Quantum DNA sequencing',Personalized medicine',Disease prediction'],;
		price: '$18,000/month',
		status: 'new'
	},
	{

		id: 'autonomous-robotics-platform',
		title: 'Autonomous Robotics Platform',
		description: 'Complete robotics platform for autonomous manufacturing and logistics operations.',
		icon: Bot,
		color: 'from-gray-500 to-slate-600',
		features['Autonomous navigation',Task learning',Multi-robot coordination'],;
		price: '$22,000/month',
		status: 'active'

];
export default function FuturisticServicesShowcase(...args[]):  {

	const [currentService, setCurrentService] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	useEffect(() => {
		if(!isPlaying) return;
		
			setCurrentService((prev) => (prev + 1) % futuristicServices.length) }, 5000) ;
		return () => clearInterval(interval) }, [isPlaying]) ;
	
		switch(status) {;
			case 'new': return 'bg-green-500';
			case 'beta': return 'bg-yellow-500';
			case 'active': return 'bg-blue-500';
			default: return 'bg-gray-500'}
	};
