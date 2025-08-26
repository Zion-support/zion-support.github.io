import { useState } from 'react';
import useSWR from 'swr';
import { Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { captureException } from '@/utils/sentry';
import { SAMPLE_SERVICES } from '@/data/sampleServices';

interface ServiceItem {
  id: string;
  title: string;
}

const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) throw new Error('Failed');
  return res.json();
});

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

  const loading = !data && !error;
  const services = data && data.length > 0 ? data : error ? SAMPLE_SERVICES : [];

  const handleSelect = (id: string) => {
    setSelectedItem(id);
    setStep((prev) => prev + 1);
  };

  const handleSubmit = async () => {
    if (!selectedItem) return;
    await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service_id: selectedItem, user_message: message })
    });
    setStep(3);
  };

  if (step === 1) {

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

        {services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((item) => (
              <Card
                data-testid={`service-card-${item.id}`}
                key={item.id}
                className={`p-4 space-y-2 cursor-pointer border-2 transition-colors ${selectedItem === item.id ? 'border-zion-purple' : 'hover:border-zion-purple/50'}`}
                onClick={() => setSelectedItem(item.id)}
              >
                <div>{item.title}</div>
                <Button
                  size="sm"
                  data-testid={`request-quote-${item.id}`}
                  onClick={(e) => { e.stopPropagation(); handleSelect(item.id); }}
                  className="w-full"
                >
                  Request Quote
                </Button>
              </Card>
            ))}
          </div>
        )}

        <Button
          onClick={() => selectedItem && handleSelect(selectedItem)}
          disabled={!selectedItem || loading || !!error}
        >
          Continue
        </Button>
      </div>
    );
  }

  if (step === 'Details') {
    return <div data-testid="details-step">Step 2 Form</div>;
  }

  return null;
}
