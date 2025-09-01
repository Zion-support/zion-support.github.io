import { useState } from 'react';
import useSWR from 'swr';
import { Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRequestQuoteWizard } from '@/context';

const WIZARD_STEPS: WizardStep[] = ['Services', 'Details', 'Success'];

function StepIndicator({ step }: { step: WizardStep }) {
  
  return (<div data-testid="step-indicator" className="text-sm text-muted-foreground">
      Step {index + 1} of {WIZARD_STEPS.length}
    </div>
  )}

export function QuoteWizard() {
  const { step, selectService } = useRequestQuoteWizard();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const { data, error } = useSWR<ServiceItem[]>('/api/services', fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (retryCount >= 5) return;
      const timeout = Math.min(1000 * 2 ** retryCount, 30000);
      setTimeout(() => revalidate({ retryCount: retryCount + 1 }), timeout);
    },
  });

  if(step === 'Services') {
    
    return (<div className="space-y-6">
        <StepIndicator step={step}  />
        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        )}

        {error && (
          <Alert variant="destructive" data-testid="service-fetch-error-alert">
            <AlertTitle>Network Error</AlertTitle>
            <AlertDescription>
              There was a problem fetching the services.Please check your internet connection and try again.</AlertDescription>
          </Alert>
        )}

        {services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((item) => (
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
      </div>
    )}

  if (step === 'Details') {
    return <div data-testid="details-step">Step 2 Form</div>;
  }

  return null}
