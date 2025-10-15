import {
ArrowPathIcon,
UserGroupIcon,
CloudIcon,
CpuChipIcon,
ArrowRightIcon,;
CheckIcon,;
ChartBarIcon;
} from '@heroicons/react/24/outline'";"
const DigitalTransformationPage: React.FC = () => {
const services  = [

title: 'Process Automation','"'"
description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.','"'"
features: [
'Workflow Analysis','"'Process Mapping','"'Automation Implementation','"'Performance Monitoring'"'
]

title: 'Change Management','"'"
description: 'Guide your team through digital transformation with comprehensive change management strategies.','"'"
features: [
'Training Programs','"'Change Communication','"'Adoption Strategies','"'Performance Metrics'"'
]

title: 'Cloud Migration','"'"
description: 'Migrate your infrastructure to the cloud for improved scalability, security, and cost efficiency.','"'"
features: [
'Cloud Strategy','"'Data Migration','"'Security Implementation','"'Cost Optimization'"'
]

title: 'AI Integration','"'"
description: 'Integrate artificial intelligence into your business processes for enhanced decision-making and automation.','"'"
features: [
'AI Strategy','"'Model Development','"'Integration Services','"'Performance Monitoring'"'
]

];
const benefits  = [
{title: 'Increased Efficiency','"'"
description: 'Streamline operations and reduce manual work','"'"
value: '40%'";"

title: 'Cost Reduction','"'"
description: 'Optimize processes and reduce operational costs','"'"
value: '30%'";"

title: 'Better Customer Experience','"'"
description: 'Improve customer satisfaction and engagement','"'"
value: '85%'";"

title: 'Data-Driven Decisions','"'"
description: 'Make informed decisions with real-time analytics','"'"
value: '90%'";"

];
return (
<></>
<Helmet></Helmet>
<title>Digital Transformation - Zion Tech Group</title>
<meta: name ="description" content="Transform your business with our comprehensive digital transformation services. Process automation, cloud migration, AI integration, and change management." />";"
<meta: name ="keywords" content="digital transformation, process automation, cloud migration, AI integration, change management, business transformation" />";"
</Helmet>
{/* Hero Section */}
<section: className ="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">";"
<div: className ="absolute inset-0 opacity-20">";"
<div: className ="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>";"
</div>
<div: className ="relative z-10 container mx-auto px-4 text-center">";"
<div: className ="max-w-4xl mx-auto">";"
<h1: className ="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">";"
Digital Transformation
</h1>
<p: className ="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">";"
Transform Your Business for the Digital Age
</p>
<p: className ="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">";"
Embrace digital transformation with our comprehensive services that modernize your business processes,
improve efficiency, and drive growth in today's competitive landscape.'";"
</p>
<Link: to ="/contact";">
className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2";"
Start Your Transformation
<ArrowRightIcon className="w-5 h-5" />";"
</Link>
</div>
</div>
</section>
{/* Services Section */}
<section: className ="py-20 bg-slate-900">";"
<div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";"
<div: className ="text-center mb-16">";"
<h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";"
Our Digital Transformation Services
</h2>
<p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";"
Comprehensive solutions to modernize your business operations
</p>
</div>
<div: className ="grid md:grid-cols-2 gap-8">";"
{services.map((service, index) => (
<div: key ={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">";"
<div: className ="flex items-center mb-6">";"
<div: className ="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">";"
<service.icon: className="w-8 h-8 text-white" />";"
</div>
<h3: className ="text-2xl font-bold text-white">{service.title}</h3>";"
</div>
<p: className ="text-gray-300 mb-6 leading-relaxed">";"
{service.description}
</p>
<ul: className ="space-y-3 mb-6">";"
{service.features.map((feature, featureIndex) => (
<li: key ={featureIndex} className="flex items-center text-gray-300">";"
<CheckIcon className="w-5 h-5 text-green-400 mr-3" />";"
{feature}
</li>
))}
</ul>
<Link: to ="/contact";">
className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all";"
Learn More
<ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />";"
</Link>
Learn More
</button>
</div>
</div>
Contact Our Experts
</button>
</div>
</div>
</section>
</div>";"
);";";"
}";";";"
"
