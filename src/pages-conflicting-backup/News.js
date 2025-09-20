const News = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };
    const categories = [
        Calendar,
        User,
        Tag,
        ArrowRight,
        Search,
        Filter,
        Clock,
        Eye,
        ExternalLink,
        TrendingUp,
        Award,
        Globe
    ];
}, from;
'lucide-react';
export default function News() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = [
        'All',
        'Company News',
        'Product Updates',
        'Industry Insights',
        'Awards & Recognition',
        'Partnerships',
        'Research & Development',
        'Market Trends'
    ];
    const sources = [
        'All Sources',
        'Company Press Releases',
        'Industry Reports',
        'Technology News',
        'Research Papers',
        'Partner Updates',
        'Customer Success Stories'
    ];
    const timeframes = [
        'All Time',
        'Last 24 Hours',
        'Last Week',
        'Last Month',
        'Last 3 Months',
        'Last Year'
    ];
}
