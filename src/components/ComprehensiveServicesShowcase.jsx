import { motion } from 'framer-motion';
import { comprehensiveMicroSaasServices2025 } from "../../data/2025-comprehensive-micro-saas-services";
import { innovativeITAIServices2025 } from "../../data/2025-innovative-it-ai-services";
import { expandedInnovativeServices2025 } from "../../data/2025-expanded-innovative-services";
import { emergingTechInnovationServices2025 } from "../../data/2025-emerging-tech-innovations";
import { enterpriseITInnovationServices2025 } from "../../data/2025-enterprise-it-innovations";
const ComprehensiveServicesShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedService, setSelectedService] = useState(null);
    const allServices = [
        ...comprehensiveMicroSaasServices2025,
        ...innovativeITAIServices2025,
        ...expandedInnovativeServices2025,
        ...emergingTechInnovationServices2025,
        ...enterpriseITInnovationServices2025
    ];
    const categories = [
        { id: 'all', name: 'All Services', count: allServices.length },
        { id: 'ai-content-marketing', name: 'AI Content & Marketing', count: allServices.filter(s => s.category.includes('Content') || s.category.includes('Marketing')).length },
        { id: 'ai-customer-service', name: 'AI Customer Service', count: allServices.filter(s => s.category.includes('Customer Service')).length },
        { id: 'data-analytics-bi', name: 'Data Analytics & BI', count: allServices.filter(s => s.category.includes('Analytics') || s.category.includes('BI')).length },
        { id: 'ai-sales-crm', name: 'AI Sales & CRM', count: allServices.filter(s => s.category.includes('Sales') || s.category.includes('CRM')).length },
        { id: 'ai-social-media', name: 'AI Social Media', count: allServices.filter(s => s.category.includes('Social Media')).length },
        { id: 'ai-supply-chain', name: 'AI Supply Chain', count: allServices.filter(s => s.category.includes('Supply Chain')).length },
        { id: 'ai-hr-recruitment', name: 'AI HR & Recruitment', count: allServices.filter(s => s.category.includes('HR') || s.category.includes('Recruitment')).length },
        { id: 'ai-finance-accounting', name: 'AI Finance & Accounting', count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Accounting')).length },
        { id: 'quantum-computing-ai', name: 'Quantum Computing & AI', count: allServices.filter(s => s.category.includes('Quantum')).length },
        { id: 'autonomous-ai-ml', name: 'Autonomous AI & ML', count: allServices.filter(s => s.category.includes('Autonomous')).length },
        { id: 'edge-computing-ai', name: 'Edge Computing & AI', count: allServices.filter(s => s.category.includes('Edge')).length },
        { id: 'ai-cybersecurity', name: 'AI Cybersecurity', count: allServices.filter(s => s.category.includes('Cybersecurity')).length },
        { id: 'blockchain-ai', name: 'Blockchain & AI', count: allServices.filter(s => s.category.includes('Blockchain')).length },
        { id: 'autonomous-devops', name: 'Autonomous DevOps', count: allServices.filter(s => s.category.includes('DevOps')).length },
        { id: 'ai-data-governance', name: 'AI Data Governance', count: allServices.filter(s => s.category.includes('Data Governance')).length },
        { id: 'ai-api-management', name: 'AI API Management', count: allServices.filter(s => s.category.includes('API Management')).length },
        { id: 'autonomous-cloud-migration', name: 'Autonomous Cloud Migration', count: allServices.filter(s => s.category.includes('Cloud Migration')).length },
        { id: 'ai-legal-compliance', name: 'AI Legal & Compliance', count: allServices.filter(s => s.category.includes('Legal') || s.category.includes('Compliance')).length },
        { id: 'quantum-security-communication', name: 'Quantum Security & Communication', count: allServices.filter(s => s.category.includes('Quantum') && (s.category.includes('Security') || s.category.includes('Communication'))).length },
        { id: 'ai-healthcare-diagnostics', name: 'AI Healthcare & Diagnostics', count: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Diagnostics')).length },
        { id: 'autonomous-supply-chain-logistics', name: 'Autonomous Supply Chain & Logistics', count: allServices.filter(s => s.category.includes('Supply Chain') || s.category.includes('Logistics')).length },
        { id: 'blockchain-digital-identity', name: 'Blockchain & Digital Identity', count: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('Digital Identity')).length },
        { id: 'ai-finance-trading', name: 'AI Finance & Trading', count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Trading')).length },
        { id: 'space-technology-innovation', name: 'Space Technology & Innovation', count: allServices.filter(s => s.category.includes('Space') || s.category.includes('Innovation')).length },
        { id: 'metaverse-virtual-reality', name: 'Metaverse & Virtual Reality', count: allServices.filter(s => s.category.includes('Metaverse') || s.category.includes('Virtual Reality')).length },
        { id: 'sustainable-energy-green-tech', name: 'Sustainable Energy & Green Tech', count: allServices.filter(s => s.category.includes('Energy') || s.category.includes('Green Tech')).length },
        { id: 'advanced-robotics-automation', name: 'Advanced Robotics & Automation', count: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')).length },
        { id: 'quantum-internet-networking', name: 'Quantum Internet & Networking', count: allServices.filter(s => s.category.includes('Quantum') && (s.category.includes('Internet') || s.category.includes('Networking'))).length },
        { id: 'climate-tech-sustainability', name: 'Climate Tech & Sustainability', count: allServices.filter(s => s.category.includes('Climate') || s.category.includes('Sustainability')).length },
        { id: 'autonomous-vehicles-transportation', name: 'Autonomous Vehicles & Transportation', count: allServices.filter(s => s.category.includes('Vehicle') || s.category.includes('Transportation')).length },
        { id: 'brain-computer-interface-neuroscience', name: 'Brain-Computer Interface & Neuroscience', count: allServices.filter(s => s.category.includes('Brain-Computer') || s.category.includes('Neuroscience')).length },
        { id: 'synthetic-biology-biotechnology', name: 'Synthetic Biology & Biotechnology', count: allServices.filter(s => s.category.includes('Biology') || s.category.includes('Biotechnology')).length },
        { id: 'enterprise-data-analytics', name: 'Enterprise Data & Analytics', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Data') || s.category.includes('Analytics'))).length },
        { id: 'multi-cloud-infrastructure', name: 'Multi-Cloud & Infrastructure', count: allServices.filter(s => s.category.includes('Multi-Cloud') || s.category.includes('Infrastructure')).length },
        { id: 'enterprise-api-integration', name: 'Enterprise API & Integration', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('API') || s.category.includes('Integration'))).length },
        { id: 'enterprise-itsm', name: 'Enterprise IT Service Management', count: allServices.filter(s => s.category.includes('Enterprise') && s.category.includes('IT Service Management')).length },
        { id: 'enterprise-security-soc', name: 'Enterprise Security & SOC', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Security') || s.category.includes('SOC'))).length },
        { id: 'enterprise-governance', name: 'Enterprise Data Governance', count: allServices.filter(s => s.category.includes('Enterprise') && s.category.includes('Data Governance')).length },
        { id: 'enterprise-workflow-automation', name: 'Enterprise Workflow & Automation', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Workflow') || s.category.includes('Automation'))).length },
        { id: 'enterprise-digital-twin-iot', name: 'Enterprise Digital Twin & IoT', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Digital Twin') || s.category.includes('IoT'))).length }
    ];
    const filteredServices = selectedCategory === 'all'
        ? allServices
        : allServices.filter(service => {
            const category = categories.find(c => c.id === selectedCategory);
            if (!category)
                return true;
            // Handle special category mappings
            const categoryMappings = {


export default ComprehensiveServicesShowcase;