<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from 'lucide-react';
import { ListingScoreCard } from "@/components/ListingScoreCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useDebounce } from "@/hooks/useDebounce";
import { useIsMounted } from "@/hooks/useIsMounted";

interface ServiceTypeStepProps {
  formData: QuoteFormData;
  onUpdate: (data: Partial<QuoteFormData>) => void;
  onNext: () => void;
}

const ServiceTypeStep: React.FC<ServiceTypeStepProps> = ({ formData, onUpdate, onNext }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [listings, setListings] = useState<ListingItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedListing, setSelectedListing] = useState<ListingItem | null>(null);
  
  const debouncedSearch = useDebounce(searchQuery, 300);
  const isMounted = useIsMounted();

  const handleTypeSelect = (type: ServiceType) => {
    onUpdate({ serviceType: type });
    setSearchQuery("");
    setSelectedListing(null);
  };

  const handleListingSelect = (listing: ListingItem) => {
    setSelectedListing(listing);
    onUpdate({ selectedListing: listing });
  };

  useEffect(() => {
    if (!debouncedSearch || !formData.serviceType) {
      setListings([]);
      return;
    }

    const searchListings = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock data based on service type
        const mockListings: ListingItem[] = [
          {
            id: '1',
            title: `Sample ${formData.serviceType} 1`,
            description: `Description for ${formData.serviceType} 1`,
            price: 100,
            rating: 4.5,
            category: formData.serviceType || 'service',
            tags: ['AI', 'Technology'],
            provider: {
              name: 'Provider 1',
              verified: true
            }
          },
          {
            id: '2',
            title: `Sample ${formData.serviceType} 2`,
            description: `Description for ${formData.serviceType} 2`,
            price: 200,
            rating: 4.8,
            category: formData.serviceType || 'service',
            tags: ['Cloud', 'Security'],
            provider: {
              name: 'Provider 2',
              verified: true
            }
          }
        ];
        
        setListings(mockListings);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    searchListings();
  }, [debouncedSearch, formData.serviceType]);

  if (!isMounted) {
    return <Skeleton className="h-64 w-full" />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">What are you looking for?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "service" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("service")}
          >
            <h4 className="font-medium text-white">Services</h4>
            <p className="text-sm text-zion-slate-light">AI solutions consulting development</p>
          </Card>
          
          <Card
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "talent" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("talent")}
          >
            <h4 className="font-medium text-white">Talent</h4>
            <p className="text-sm text-zion-slate-light">AI specialists developers consultants</p>
          </Card>
          
          <Card
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "equipment" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("equipment")}
          >
            <h4 className="font-medium text-white">Equipment</h4>
            <p className="text-sm text-zion-slate-light">Servers workstations specialized hardware</p>
          </Card>
        </div>
      </div>
      
      {formData.serviceType && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Select a specific {formData.serviceType}</h3>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
            <Input
              placeholder={`Search ${formData.serviceType}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-zion-blue border border-zion-blue-light focus:border-zion-purple"
            />
          </div>

          {isLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-32 w-full" />
              ))}
            </div>
          ) : listings.length > 0 ? (
            <div className="space-y-4">
              {listings.map((listing) => (
                <ListingScoreCard
                  key={listing.id}
                  listing={listing}
                  isSelected={selectedListing?.id === listing.id}
                  onSelect={() => handleListingSelect(listing)}
                />
              ))}
            </div>
          ) : searchQuery && (
            <div className="text-center py-8 text-zion-slate-light">
              No {formData.serviceType} found for "{searchQuery}"
            </div>
          )}
        </div>
      )}
=======
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
}

interface ServiceTypeStepProps {
  onNext: (selectedService: Service) => void;
  onBack?: () => void;
}

const services: Service[] = [
  {
    id: 'ai-consulting',
    name: 'AI Consulting',
    description: 'Expert AI consulting and implementation services',
    price: 150,
    features: ['Strategy Planning', 'Implementation', 'Training', 'Support']
  },
  {
    id: 'cloud-migration',
    name: 'Cloud Migration',
    description: 'Seamless cloud migration and optimization',
    price: 200,
    features: ['Assessment', 'Migration', 'Optimization', 'Monitoring']
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions',
    price: 180,
    features: ['Security Audit', 'Implementation', 'Monitoring', 'Incident Response']
  }
];

const ServiceTypeStep: React.FC<ServiceTypeStepProps> = ({ onNext, onBack }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleNext = () => {
    if (selectedService) {
      onNext(selectedService);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Service Type</h2>
        <p className="text-gray-600">Select the type of service you need</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <Card
            key={service.id}
            className={`cursor-pointer transition-all ${
              selectedService?.id === service.id
                ? 'ring-2 ring-blue-500 bg-blue-50'
                : 'hover:shadow-md'
            }`}
            onClick={() => setSelectedService(service)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{service.name}</CardTitle>
                {selectedService?.id === service.id && (
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                )}
              </div>
              <p className="text-sm text-gray-600">{service.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    ${service.price}
                  </span>
                  <Badge variant="outline">per hour</Badge>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between">
        {onBack && (
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
        )}
        <Button
          onClick={handleNext}
          disabled={!selectedService}
          className="ml-auto"
        >
          Next Step
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
    </div>
  );
};

export default ServiceTypeStep;