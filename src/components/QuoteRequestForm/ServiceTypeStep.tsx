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
    </div>
  );
};

export default ServiceTypeStep;