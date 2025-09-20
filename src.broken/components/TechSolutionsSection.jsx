import { motion, AnimatePresence  } from 'framer-motion';

export default function Page() {
,
    {

        id: 'iot-solutions',
        title: 'IoT Solutions',
        description: 'Connected devices and smart systems for the modern world',"
        icon: <Cpu className="w-8 h-8"/>,
        color: 'from-zion-cyan to-zion-purple',
        bgColor: 'from-zion-cyan/20 to-zion-purple/20',
        features = ['
            'Device connectivity management',Real-time monitoring',Data collection & analysis',Remote control systems',Predictive maintenance'
        ],
        benefits = ['
            'Monitor assets in real-time',Reduce maintenance costs by 30%',Improve operational efficiency'
        ],
        useCases['Manufacturing',Smart Cities',Agriculture',Healthcare'],
        rating: 4.6,
        projects: 90,
        category: 'Connected Devices'
    },
    {

        id: 'mobile-apps',
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile solutions for all devices',"
        icon: <Smartphone className="w-8 h-8"/>,
        color: 'from-zion-purple to-zion-cyan',
        bgColor: 'from-zion-purple/20 to-zion-cyan/20',
        features = ['
            'iOS & Android development',Cross-platform solutions',UI/UX design',Performance optimization',App store deployment'
        ],
        benefits = ['
            'Reach customers on all devices',Improve user engagement',Increase brand visibility'
        ],
        useCases['Retail',Entertainment',Education',Healthcare'],
        rating: 4.8,
        projects: 250,
        category: 'Mobile'
    }
];
const industries = ['"
    { name: 'Healthcare', icon: <Shield className="w-5 h-5"/>, projects: 80 },"
    { name: 'Finance', icon: <TrendingUp className="w-5 h-5"/>, projects: 120 },"
    { name: 'Retail', icon: <Globe className="w-5 h-5"/>, projects: 95 },"
    { name: 'Manufacturing', icon: <Cpu className="w-5 h-5"/>, projects: 75 },"
    { name: 'Education', icon: <Users className="w-5 h-5"/>, projects: 60 },"
    { name: 'Government', icon: <Lock className="w-5 h-5"/>, projects: 45 }
];
    const [selectedSolution, setSelectedSolution] = useState(null);
    const [hoveredSolution, setHoveredSolution] = useState(null);
    const containerVariants = {

        hidden: { opacity: 0 },
        visible: {

            opacity: 1,
            transition: {

                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };
    const itemVariants = {

  hidden: { y: 30,
  opacity: 0

},
        visible: {

            y: 0,
            opacity: 1,
            transition: {

                duration: 0.6,"
                ease: "easeOut"
            }
        }
    };
    const cardVariants = {

  hidden: { scale: 0.95,
  opacity: 0

},
        visible: {

            scale: 1,
            opacity: 1,
            transition: {

                duration: 0.4,"
                ease: "easeOut"
            }
        }
    };"
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}"
      <div className="absolute inset-0 opacity-5">"
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>"
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>"
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>
"
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}"
        <motion.div className="text-center mb-20" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font - bold text-white mb-6">
            Technology < span className="bg-gradient - to - r from - zion - cyan to - zion - purple bg-clip - text text-transparent">Solutions</span>
          </h2>
          <p className="text-zion - slate - light text-lg md:text-xl max - w-4xl mx - auto leading - relaxed mb-8">
            Discover our comprehensive suite of cutting - edge technology solutions designed to transform your business
  delay: index * 0.1

}} className="text-center p - 3 rounded-xl bg-zion - blue - dark / 40 backdrop - blur - sm border border-zion - blue -light / 20">
                <div className="text-zion - cyan mb-2 flex justify -center">
  stiffness: 300

}} className="relative" onHoverStart={ () => setHoveredSolution(solution.id) } onHoverEnd={ () => setHoveredSolution(null) }>
              <div className="h-full p - 8 rounded-2xl bg-gradient - to - br from - zion - blue - dark / 80 to - zion - blue - dark / 40 backdrop - blur - sm border border-zion - blue - light / 30 hover:border-zion - cyan / 50 transition - all duration - 300 hover:shadow-2xl hover:shadow-zion - cyan / 20 group cursor -pointer" onClick={ () => setSelectedSolution(selectedSolution === solution.id ? null : solution.id) }>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`inline - flex items - center justify - center w-20 h-20 rounded-2xl bg-gradient - to - br ${solution.color} mb-6 shadow-lg group - hover:shadow-xl transition - all duration - 300 group - hover:scale - 110`}>
                    <div className="text-white">
                      {solution.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font - bold text-white mb-3 group - hover:text-zion - cyan transition -colors">
