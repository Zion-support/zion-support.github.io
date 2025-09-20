import { Link  } from 'react-router-dom',
 from 'react',
import { allEnhancedServices } from '../data/enhanced - 2025 - comprehensive -services',

export default function Page() {
const ComprehensiveServicesOverview2025 = () => {
    const [selectedService, setSelectedService] = useState(null),
    const [selectedCategory, setSelectedCategory] = useState('all'),
    const categories = ['allAI & Business Intelligence',
        'Cybersecurity & Quantum ComputingDevOps & Infrastructure',
        'Blockchain & Supply ChainHealthcare & AI',
        'Quantum Computing & AIFinTech & AI',
        'IoT & Edge ComputingLegal Tech & AI',
        'Marketing & AIEnergy & Sustainability',
        'Logistics & Transportation'
    ],
    const filteredServices = allEnhancedServices.filter(service => selectedCategory === 'all' || service.category === selectedCategory) ,
    const getCategoryIcon = (category) => {
        const icons = {
  'AI & Business Intelligence': '🧠Cybersecurity & Quantum Computing': '🔒DevOps & Infrastructure': '⚙️Blockchain & Supply Chain': '⛓️Healthcare & AI': '🏥Quantum Computing & AI': '🔮FinTech & AI': '💰IoT & Edge Computing': '🌐Legal Tech & AI': '⚖️Marketing & AI': '📢Energy & Sustainability': '⚡',
