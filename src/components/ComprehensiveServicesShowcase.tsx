import {  import { EMERGING_TECH_SERVICES_2025 } from '../data/emergingTechServices2025';
export default function Page(props: any) {';
const ComprehensiveServicesShowcase: Reac t.FC = () => {;';';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');';';
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');';';
  const [searchTerm, setSearchTerm] = useState<string>('');  // Combine all services
  const allServices: Servic e[] = [...EXPANDED_INNOVATIVE_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025';
  ];';';
  // Get unique categories';
export default function Page("props": "any) {;
const "ComprehensiveServicesShowcase": React.FC = () => {;
  const [selectedCategory", setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');  // Combine all services;
  const "allServices": "Servic e[] = [...EXPANDED_INNOVATIVE_SERVICES_2025",;
    ...EMERGING_TECH_SERVICES_2025;
export default function Page(props: any) {
const ComprehensiveServicesShowcase: React.FC = () => {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');  // Combine all services
  const allServices: Servic e[] = [...EXPANDED_INNOVATIVE_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025
  ];
  // Get unique categories';
  // Get unique categories'    return cats}, [allServices]) ;