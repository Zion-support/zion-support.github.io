import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Briefcase, Star, Clock, MapPin, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductListing {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
  deliveryTime: string;
  category: string;
  tags: string[];
  image: string;
  provider: {
    name: string;
    avatar: string;
    rating: number;
  };
}

const AUTO_SERVICE_TITLES = [
  "AI-Powered Customer Support",
  "Cloud Infrastructure Management",
  "Predictive Analytics Consulting",
  "Cybersecurity Automation Suite",
  "Robotic Process Automation",
  "Machine Learning Model Tuning",
  "IoT Device Integration Service",
  "Blockchain Data Solutions"
];

function generateInnovationListing(index: number): ProductListing {
  const title = AUTO_SERVICE_TITLES[index % AUTO_SERVICE_TITLES.length] || 'AI Service';
  const price = Math.floor(Math.random() * 9500) + 500; // $500 - $10,000
  const rating = Math.floor(Math.random() * 2) + 4; // 4-5 stars
  
  return {
    id: `service-${index}`,
    title,
    description: `Professional ${title.toLowerCase()} service with cutting-edge technology and expert implementation.`,
    price,
    rating,
    reviewCount: Math.floor(Math.random() * 100) + 10,
    location: ['New York', 'San Francisco', 'London', 'Tokyo', 'Berlin'][Math.floor(Math.random() * 5)],
    deliveryTime: ['1-3 days', '1 week', '2 weeks', '1 month'][Math.floor(Math.random() * 4)],
    category: 'AI Services',
    tags: ['AI', 'Automation', 'Machine Learning', 'Cloud'],
    image: '/api/placeholder/300/200',
    provider: {
      name: `Provider ${index + 1}`,
      avatar: '/api/placeholder/40/40',
      rating: 4.5 + Math.random() * 0.5
    }
  };
}

export default function CategoryDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [listings, setListings] = useState<ProductListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    // Generate mock data
    const mockListings = Array.from({ length: 20 }, (_, index) => 
      generateInnovationListing(index)
    );
    setListings(mockListings);
    setLoading(false);
  }, []);

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = listing.price >= priceRange[0] && listing.price <= priceRange[1];
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => listing.tags.includes(tag));
    
    return matchesSearch && matchesPrice && matchesTags;
  });

  const categoryInfo = {
    'ai-services': {
      title: 'AI Services',
      description: 'Artificial Intelligence solutions and services'
    },
    'cloud-computing': {
      title: 'Cloud Computing',
      description: 'Cloud infrastructure and migration services'
    },
    'cybersecurity': {
      title: 'Cybersecurity',
      description: 'Security solutions and threat protection'
    },
    'software-development': {
      title: 'Software Development',
      description: 'Custom software and application development'
    }
  };

  const currentCategory = categoryInfo[slug as keyof typeof categoryInfo] || {
    title: 'Services',
    description: 'Professional technology services'
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
            <div className="grid md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-8 bg-gray-300 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {currentCategory.title}
          </h1>
          <p className="text-gray-600">
            {currentCategory.description}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <div className="flex space-x-2">
                <Input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                />
                <Input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Cloud', 'Security', 'Development'].map(tag => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => {
                      if (selectedTags.includes(tag)) {
                        setSelectedTags(selectedTags.filter(t => t !== tag));
                      } else {
                        setSelectedTags([...selectedTags, tag]);
                      }
                    }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            {filteredListings.length} services found
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <Card key={listing.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{listing.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 mb-3">
                      {listing.description}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      ${listing.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(listing.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {listing.rating} ({listing.reviewCount} reviews)
                  </span>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {listing.location}
                  <Clock className="h-4 w-4 ml-4 mr-1" />
                  {listing.deliveryTime}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {listing.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={listing.provider.avatar}
                      alt={listing.provider.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm font-medium">{listing.provider.name}</span>
                  </div>
                  <Button asChild>
                    <Link href={`/services/${listing.id}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or browse all services.
            </p>
            <Button asChild>
              <Link href="/services">Browse All Services</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}