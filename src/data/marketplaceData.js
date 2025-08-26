// Marketplace data and utilities
export const MARKETPLACE_LISTINGS = [
    {
        id: 1,
        title: "Full-Stack Web Development",
        description: "Complete web application development with modern technologies",
        type: "service",
        category: "Web Development",
        price: 2500,
        rating: 4.8,
        reviews: 24,
        provider: "TechSolutions Inc",
        location: "San Francisco, CA",
        tags: ["React", "Node.js", "MongoDB", "AWS"],
        image: "/images/web-dev.jpg"
    },
    {
        id: 2,
        title: "Senior React Developer",
        description: "Experienced React developer available for contract work",
        type: "talent",
        category: "Frontend Development",
        price: 85,
        rating: 4.9,
        reviews: 18,
        provider: "John Smith",
        location: "Remote",
        tags: ["React", "TypeScript", "Redux", "Next.js"],
        image: "/images/react-dev.jpg"
    },
    {
        id: 3,
        title: "Cloud Infrastructure Setup",
        description: "AWS/Azure infrastructure design and implementation",
        type: "service",
        category: "DevOps",
        price: 1800,
        rating: 4.7,
        reviews: 31,
        provider: "CloudOps Pro",
        location: "Austin, TX",
        tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
        image: "/images/cloud-infra.jpg"
    },
    {
        id: 4,
        title: "UI/UX Design Package",
        description: "Complete design system and user experience design",
        type: "service",
        category: "Design",
        price: 3200,
        rating: 4.9,
        reviews: 42,
        provider: "Design Studio",
        location: "New York, NY",
        tags: ["Figma", "Adobe XD", "Prototyping", "User Research"],
        image: "/images/ui-ux-design.jpg"
    },
    {
        id: 5,
        title: "Data Science Consultant",
        description: "Expert data analysis and machine learning solutions",
        type: "talent",
        category: "Data Science",
        price: 120,
        rating: 4.8,
        reviews: 29,
        provider: "Dr. Sarah Johnson",
        location: "Boston, MA",
        tags: ["Python", "Machine Learning", "SQL", "Statistics"],
        image: "/images/data-scientist.jpg"
    }
];

export const generateSearchSuggestions = (query = '') => {
    const suggestions = [];
    
    // Add category suggestions
    const categories = ['Web Development', 'Mobile Development', 'Design', 'DevOps', 'Data Science', 'Marketing'];
    categories.forEach(category => {
        if (category.toLowerCase().includes(query.toLowerCase())) {
            suggestions.push({
                id: `cat-${category}`,
                title: category,
                type: 'category',
                description: `Browse ${category} services and talent`
            });
        }
    });

    // Add service/talent suggestions
    MARKETPLACE_LISTINGS.forEach(item => {
        if (item.title.toLowerCase().includes(query.toLowerCase()) || 
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))) {
            suggestions.push({
                id: item.id,
                title: item.title,
                type: item.type,
                description: item.description
            });
        }
    });

    return suggestions.slice(0, 10); // Limit to 10 suggestions
};

export const generateFilterOptions = () => {
    return {
        categories: [...new Set(MARKETPLACE_LISTINGS.map(item => item.category))],
        types: [...new Set(MARKETPLACE_LISTINGS.map(item => item.type))],
        priceRanges: [
            { label: 'Under $100', min: 0, max: 100 },
            { label: '$100 - $500', min: 100, max: 500 },
            { label: '$500 - $1000', min: 500, max: 1000 },
            { label: '$1000 - $2500', min: 1000, max: 2500 },
            { label: 'Over $2500', min: 2500, max: Infinity }
        ],
        locations: [...new Set(MARKETPLACE_LISTINGS.map(item => item.location))],
        ratings: [4.5, 4.0, 3.5, 3.0]
    };
};

export const filterListings = (listings, filters) => {
    return listings.filter(item => {
        if (filters.category && item.category !== filters.category) return false;
        if (filters.type && item.type !== filters.type) return false;
        if (filters.minPrice && item.price < filters.minPrice) return false;
        if (filters.maxPrice && item.price > filters.maxPrice) return false;
        if (filters.location && item.location !== filters.location) return false;
        if (filters.minRating && item.rating < filters.minRating) return false;
        return true;
    });
};