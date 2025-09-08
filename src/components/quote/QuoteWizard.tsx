import { useState } from 'react';
import type { WizardStep } from '@/context/RequestQuoteWizard';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useRequestQuoteWizard } from '@/context';
import { fetchServices, ServiceItem } from '@/api/services';

        {delayedError && (<div className="space-y-2" data-testid="fetch-error-alert">
            <Alert variant="destructive">
              <AlertTitle>Error Fetching {category}</AlertTitle>
              <AlertDescription>
                There was a problem fetching the {category}. Please check your internet connection and try again.
              </AlertDescription>
            </Alert>
            <Button size="sm" onClick={() => mutate()} data-testid="retry-button">
              Retry
            </Button>
          </div>)}

function StepIndicator({ step }: { step: WizardStep }) {
  const index = WIZARD_STEPS.indexOf(step);
  return (
    <div data-testid="step-indicator" className="text-sm text-muted-foreground">
      Step {index + 1} of {WIZARD_STEPS.length}
    </div>
  );
}

export function QuoteWizard() {
  const { step, selectService, submitQuote } = useRequestQuoteWizard();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const query = useQuery({
    queryKey: ['services'],
    queryFn: () => fetchServices(),
    retry: 2,
  });

  const {
    data = [],
    isPending,
    error,
  } = query as {
    data: ServiceItem[] | undefined;
    isPending: boolean;
    error: unknown;
  };

  if (step === 'Services') {
    const loading = isPending;

    return (
      <div className="space-y-6">
        <StepIndicator step={step} />
        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center text-red-500">Service temporarily unavailable</div>
        )}

        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((item) => (
              <Card
                data-testid={`service-card-${item.id}`}
                key={item.id}
                className={`p-4 cursor-pointer border-2 transition-colors ${selectedItem === item.id ? 'border-zion-purple' : 'hover:border-zion-purple/50'}`}
                onClick={() => setSelectedItem(item.id)}
              >
                {item.title}
              </Card>
            ))}
          </div>
        )}

        <Button
          onClick={() => selectedItem && selectService(selectedItem)}
          disabled={!selectedItem || loading || !!error}
        >
          Continue
        </Button>
      </div>);
    }
    if (step === 2) {
        return (<div data-testid="details-step" className="space-y-4">
        <StepIndicator step={step}/>
        {selectedItem && (<div data-testid="selected-item-name" className="text-lg font-semibold text-zion-slate-dark">
            Selected {category === 'services' ? 'Service' : category === 'talent' ? 'Talent' : 'Item'}: {selectedItem.name}
          </div>)}
        {selectedItem && selectedItem.price !== undefined && (<div className="text-md text-muted-foreground">
             Price: ${selectedItem.price.toFixed(2)}
           </div>)}
        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} data-testid="message-input" placeholder={`Any specific details about your request for ${selectedItem?.name || 'the selected item'}?`} rows={4}/>
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
          <Button onClick={handleSubmit} disabled={!selectedItemId}>Submit Quote</Button>
        </div>
      </div>);
    }
    if (step === 3) {
        return (<div data-testid="success-step" className="space-y-4 text-center py-12">
        <StepIndicator step={step}/>
        <div className="text-2xl font-semibold text-green-600">Quote Submitted Successfully!</div>
        <p className="text-muted-foreground">
          Thank you for your request regarding {selectedItem?.name || 'the selected item'}. We will get back to you shortly.
        </p>
        <Button onClick={() => {
                setStep(1);
                setSelectedItemId(null);
                setMessage('');
            }}>
          Request Another Quote
        </Button>
      </div>);
    }
    return null;
}
