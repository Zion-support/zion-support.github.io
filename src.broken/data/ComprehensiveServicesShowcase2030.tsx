
const ComprehensiveServicesShowcase2030: React.FC = () => {;
  const [activeTab, setActiveTab] = useState<'microsaas' | 'it' | 'ai'>('microsaas');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getFilteredServices = () => {;
    let services: any[] = [];


    if(selectedCategory !== 'all') {
  const getCategories = () => {;
    let services: any[] = [];

