import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceItem {
  id: string;
  title: string;
}

export function QuoteWizard() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [step, setStep] = useState<'Services' | 'Details'>('Services');

  // Mock data instead of using SWR
  const mockServices: ServiceItem[] = [
    { id: 'ai-solutions', title: 'AI Solutions' },
    { id: 'cybersecurity', title: 'Cybersecurity' },
    { id: 'cloud-devops', title: 'Cloud & DevOps' },
    { id: 'digital-transformation', title: 'Digital Transformation' }
  ];

  const selectService = (serviceId: string) => {
    setStep('Details');
  };

  if (step === 'Services') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockServices.map((item) => (
            <div
              data-testid={`service-card-${item.id}`}
              key={item.id}
              className={`p-4 cursor-pointer border-2 transition-colors rounded-lg ${
                selectedItem === item.id ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:border-purple-300'
              }`}
              onClick={() => setSelectedItem(item.id)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <Button onClick={() => selectedItem && selectService(selectedItem)} disabled={!selectedItem}>
          Continue
        </Button>
      </div>
    );
  }

  if (step === 'Details') {
    return (
      <div data-testid="details-step" className="space-y-4">
        <h3 className="text-lg font-semibold">Service Details</h3>
        <p>Selected service: {selectedItem}</p>
        <Button onClick={() => setStep('Services')}>
          Back to Services
        </Button>
      </div>
    );
  }

  return null;
}
