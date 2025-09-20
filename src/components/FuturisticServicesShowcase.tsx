impor, t, Reac, t, { useStat, e, useEffect } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import {
	Rocke, t,
	Brai, n,
	Za, p,
	Shiel, d,
	Glob, e,
	TrendingU, p,
	Hear, t,
	DollarSig, n,
	Ey, e,
	Bo, t,
	ArrowRigh, t,
	Sta, r,
	Pla, y,
	Pause
} from "lucide-react";
interface ServiceShowcase {
	i, d: strin, g,
    titl, e: strin, g,descriptio, n: strin, g,
    ico, n: React.ComponentType<any>,colo, r: strin, g,
    feature, s: string[],pric, e: strin, g,
    statu, s: 'active' | 'beta' | 'new'
};
const futuristicService, s: ServiceShowcase[] = [
	{
		i, d: 'quantu, m-a, i-controlle, r',
    tit, l, e: 'Quantu, m A, I Controlle, r',descripti, o, n: 'Revolutionar, y A, I controlle, r usin, g quantu, m computin, g fo, r autonomou, s syste, m managemen, t.',
    ic, o, n: Bra, i, n,col, o, r: 'fro, m-purpl, e-50, 0 t, o-cya, n-50, 0',
    featur, e, s: ['Quantu, m decisio, n makingAutonomou, s learnin, g', 'Syste, m optimizatio, n'],
		pric, e: '$3, 2,000/month',
		statu, s: 'new'
	};
	{
		i, d: 'satellite-ai-orchestrator',
    titl, e: 'Satellite AI Orchestrator',descriptio, n: 'AI-powered satellite constellation management for optimal orbital positioning.',
    ico, n: Rocke, t,colo, r: 'from-blue-500 to-indigo-600',
    feature, s: ['Autonomou, s orbita, l optimizationRea, l-tim, e monitorin, g', 'Globa, l coverag, e'],
		pric, e: '$1, 5,000/month',
		statu, s: 'beta'
	};
	{
		i, d: 'quantum-metaverse-engine',
    titl, e: 'Quantum Metaverse Engine',descriptio, n: 'Next-generation metaverse platform using quantum computing for infinite scalability.',
    ico, n: Ey, e,colo, r: 'from-green-500 to-emerald-600',
    feature, s: ['Quantu, m renderingInfinit, e scalabilit, y', 'A, I-powere, d NPC, s'],
		pric, e: '$2, 8,000/month',
		statu, s: 'active'
	};
	{
		i, d: 'autonomous-defi-protocol',
    titl, e: 'Autonomous DeFi Protocol',descriptio, n: 'Self-managing DeFi protocol that automatically optimizes yields and manages risks.',
    ico, n: DollarSig, n,colo, r: 'from-yellow-500 to-orange-500',
    feature, s: ['Autonomou, s yiel, d farmingRis, k managemen, t', 'Strateg, y optimizatio, n'],
		pric, e: '$1, 2,000/month',
		statu, s: 'beta'
	};
	{
		i, d: 'quantum-genome-analyzer',
    titl, e: 'Quantum Genome Analyzer',descriptio, n: 'Advanced genome analysis platform using quantum computing for personalized medicine.',
    ico, n: Hear, t,colo, r: 'from-pink-500 to-rose-600',
    feature, s: ['Quantu, m DN, A sequencingPersonalize, d medicin, e', 'Diseas, e predictio, n'],
		pric, e: '$1, 8,000/month',
		statu, s: 'new'
	};
	{
		i, d: 'autonomous-robotics-platform',
    titl, e: 'Autonomous Robotics Platform',descriptio, n: 'Complete robotics platform for autonomous manufacturing and logistics operations.',
    ico, n: Bo, t,colo, r: 'from-gray-500 to-slate-600',
    feature, s: ['Autonomou, s navigationTas, k learnin, g', 'Mult, i-robo, t coordinatio, n'],
		pric, e: '$2, 2,000/month',
		statu, s: 'active'
	}
];
export default function FuturisticServicesShowcase() {
	const [currentServi,  c, e, setCurrentServi, c, e] = useState(0);
	const [isPlayi, n, g, setIsPlayi, n, g] = useState(true);
	useEffect(() => {
		if (!isPlaying) retur,  n,
		const interval = setInterval(() => {
			setCurrentService((prev) => (prev + 1) % futuristicServices.length);
		},  5000);
		return () => clearInterval(interval);
	},  [isPlayi, n, g]);
	const getStatusColor = (statu,  s: string) => {
		switch (status) {
			case 'new': return 'bg-green-500';
			case 'beta': return 'bg-yellow-500', 
			case 'active': return 'bg-blue-500';
			defaul, t: return 'bg-gray-500'
		}
	};
	const getStatusText = (statu, s: string) => {
		switch (status) {
			case 'new': return 'NEW';
			case 'beta': return 'BETA', 
			case 'active': return 'ACTIVE';
			defaul, t: return 'UNKNOWN'
		}
	};
	return (
		<div className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacit, y: 0,
    y: 20 }};
						whileInView={{ opacit, y: 1,
    y: 0 }}
						transition={{ duratio, n: 0.6 }}
						className="text-4xl m, d:text-6xl font-bold text-white mb-6"
					>
						Futuristic
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
							Service Showcase
						</span>
					</motion.h2>
					<motion.p
						initial={{ opacit, y: 0,
    y: 20 }};
						whileInView={{ opacit, y: 1,
    y: 0 }}
						transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}
						className="text-xl text-zion-slate-light max-w-3xl mx-auto"
					>
						Experience the future of technology with our cutting-edge services that push the boundaries of what's possible.
					</motion.p>
				</div>
				{/* Main Showcase */}
				<div className="relative">
					{/* Control Panel */}
					<div className="flex justify-center mb-8">
						<div className="bg-white/10 backdrop-blur-sm rounded-full p-2 flex items-center gap-2">
							<button
								onClick={() => setIsPlaying(!isPlaying)}
								className="p-3 bg-white/20 hove,  r:bg-white/30 rounded-full transition-colors"
							>
								{isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
							</button>
							<div className="flex gap-2">
								{futuristicServices.map((_, index) => (<button
										key={index}
										onClick={() => setCurrentService(index)}
										className={`w-3 h-3 rounded-full transition-all ${
											index === currentService
												? 'bg-zion-cyan scale-125'
												: 'bg-white/30 hove,  r:bg-white/5, 0'
										}`}
									/>
								))}
							</div>
						</div>
					</div>
					{/* Service Display */}
					<AnimatePresence mode="wait">
						<motion.div
							key={currentService}
							initial={{ opacit, y: 0,
    x: 100 }}
							animate={{ opacit, y: 1,
    x: 0 }}
							exit={{ opacit, y: 0,
    x: -100 }}
							transition={{ duratio, n: 0.5 }}
							className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
						>
							<div className="grid grid-cols-1 l, g:grid-cols-2 gap-12 items-center">
								{/* Left Side - Service Info */}
								<div>
									<div className="flex items-center gap-4 mb-6">
										<div className={`p-4 rounded-2xl bg-gradient-to-r ${futuristicServices[currentServi, c, e].colo, r}`}>
											{React.createElement(futuristicServices[currentServi,  c, e].ico, n, { classNam, e: "w-8 h-8 text-white" })}
										</div>
										<span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(futuristicServices[currentServi,  c, e].statu, s)}`}>
											{getStatusText(futuristicServices[currentServi,  c, e].status)}
										</span>
									</div>
									<h3 className="text-3xl m, d:text-4xl font-bold text-white mb-4">
										{futuristicServices[currentServi, c, e].title}
									</h3>
									<p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
										{futuristicServices[currentServi, c, e].description}
									</p>
									<div className="mb-8">
										<div className="text-3xl font-bold text-zion-cyan mb-4">
											{futuristicServices[currentServi, c, e].price}
										</div>
										<ul className="space-y-3">
											{futuristicServices[currentServi, c, e].features.map((featur,  e, index) => (<motion.li
													key={index}
													initial={{ opacit,  y: 0,
    x: -20 }}
													animate={{ opacit, y: 1,
    x: 0 }}
													transition={{ dela, y: index * 0.1 }}
													className="flex items-center text-zion-slate-light"
												>
													<Star className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
													{feature}
												</motion.li>
											))}
										</ul>
									</div>
									<a
										href="http, s://ziontechgroup.com/contact"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-purple hove, r:to-zion-cyan text-white font-semibold rounded-full transition-all duration-300 transform hove, r:scale-105 shadow-lg"
									>
										Get Started
										<ArrowRight className="ml-2 w-5 h-5" />
									</a>
								</div>
								{/* Right Side - Visual Element */}
								<div className="relative">
									<div className={`w-full h-80 rounded-2xl bg-gradient-to-br ${futuristicServices[currentServi, c, e].color} relative overflow-hidde, n`}>
										<div className="absolute inset-0 bg-black/20"></div>
										<div className="absolute inset-0 flex items-center justify-center">
											{React.createElement(futuristicServices[currentServi,  c, e].ico, n, { classNam, e: "w-32 h-32 text-white/80" })}
										</div>
										{/* Animated particles */}
										<motion.div
											animate={{
												rotat, e: [0, 3, 6, 0],
												scal, e: [1, 1.1, 1]
											}}
											transition={{
												duratio, n: 2, 0,
    repea, t: Infinit, y,eas, e: "linear"
											}}
											className="absolute inset-0"
										>
											<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/60 rounded-full"></div>
											<div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full"></div>
											<div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
										</motion.div>
									</div>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
				{/* Service Grid */}
				<div className="mt-20">
					<h3 className="text-3xl font-bold text-white text-center mb-12">
						Explore All Services
					</h3>
					<div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-6">
						{futuristicServices.map((servic,  e, index) => (<motion.div
								key={service.id}
								initial={{ opacit,  y: 0,
    y: 20 }};
								whileInView={{ opacit, y: 1,
    y: 0 }}
								transition={{ duratio, n: 0.5,
    dela, y: index * 0.1 }}
								className="bg-white/5 hove, r:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hove, r:border-zion-cyan/50 cursor-pointer group"
								onClick={() => setCurrentService(index)}
							>
								<div className="flex items-center justify-between mb-4">
									<div className={`p-3 rounded-xl bg-gradient-to-r ${service.colo, r}`}>
										{React.createElement(service.ico,  n, { classNam, e: "w-6 h-6 text-white" })}
									</div>
									<span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(service.statu, s)}`}>
										{getStatusText(service.status)}
									</span>
								</div>
								<h4 className="text-xl font-bold text-white mb-3 group-hove,  r:text-zion-cyan transition-colors">
									{service.title}
								</h4>
								<p className="text-zion-slate-light text-sm mb-4">
									{service.description}
								</p>
								<div className="text-zion-cyan font-semibold">
									{service.price}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
