export const AdvancedServiceComparison = (props: any) => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [filters, setFilters] = useState({
        category: 'all',
        complexity: 'all',
        priceRange: 'all',
        technology: 'all'
    }
    );
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    // Mock data - in real app this would come from props or API;
    const mockServices = [;
        {"id": 'ai-crm-basic',;
            "name": 'AI CRM Basic',;
            "category": 'ai',;
            "price": '$5,000/month',;
            "duration": '3-6 months',;
            features['Basic AI insights', 'Customer segmentation', 'Email automation'],;
            benefits['Improved customer retention', 'Automated workflows', 'Basic analytics'],;
            technology['AI/ML', 'CRM', 'Automation'],;
            targetAudience['Small Business', 'Startups'],;
            "rating": "4.2",;
            "complexity": 'Basic',;
            "popularity": 'Medium',;
            "contactInfo": '+1 302 464 0950',;
            "email": 'kleber@ziontechgroup.com',;
            "link": '"https": "//ziontechgroup.com/services/ai-crm-basic'"},;
        {"id": 'ai-crm-enterprise',;
            "name": 'AI CRM Enterprise',;
            "category": 'ai',;
            "price": '$25,000/month',;
            "duration": '12-18 months',;
            features['Advanced AI insights', 'Predictive analytics', 'Multi-channel integration', 'Custom AI models'],;
            benefits['Predictive customer behavior', 'Advanced automation', 'Enterprise scalability'],;
            technology['AI/ML', 'Big Data', 'Predictive Analytics', 'Enterprise Integration'],;
            targetAudience['Enterprise', 'Large Corporations'],;
            "rating": "4.8",;
            "complexity": 'Enterprise',;
            "popularity": 'High',;
            "contactInfo": '+1 302 464 0950',;
            "email": 'kleber@ziontechgroup.com',;
            "link": '"https": "//ziontechgroup.com/services/ai-crm-enterprise'"},;
        {"id": 'quantum-basic',;
            "name": 'Quantum Computing Basic',;
            "category": 'quantum',;
            "price": '$50,000/month',;
            "duration": '6-12 months',;
            features['Basic quantum algorithms', 'Cloud access', 'Documentation'],;
            benefits['Quantum computing access', 'Algorithm development', 'Research capabilities'],;
            technology['Quantum Computing', 'Cloud Platform', 'Basic Algorithms'],;
            targetAudience['Research Institutions', 'Universities'],;
            "rating": "4.5",;
            "complexity": 'Intermediate',;
            "popularity": 'Medium',;
            "contactInfo": '+1 302 464 0950',;
            "email": 'kleber@ziontechgroup.com',;
            "link": '"https": "//ziontechgroup.com/services/quantum-basic'"},;
        {;
            "id": 'quantum-enterprise',;
            "name": 'Quantum Computing Enterprise',;
            "category": 'quantum',;
            "price": '$200,000/month',;
            "duration": '18-24 months',;
            features['Custom quantum algorithms', 'Dedicated processors', '24/7 support', 'Custom development'],;
            benefits['Competitive advantage', 'Custom solutions', 'Priority access', 'Expert support'],;
            technology['Quantum Computing', 'Custom Algorithms', 'Dedicated Hardware', 'Advanced Support'],;
            targetAudience['Large Corporations', 'Government', 'Financial Services'],;
            "rating": "4.9",;
            "complexity": 'Enterprise',;
            "popularity": 'Trending',;
            "contactInfo": '+1 302 464 0950',;
            "email": 'kleber@ziontechgroup.com',;
            "link": '"https": "//ziontechgroup.com/services/quantum-enterprise';