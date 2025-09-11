import { useState, useEffect } from 'react'
import { useQuoteWizard } from '@/hooks/useQuoteWizard'
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
  const [step, setStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [message, setMessage] = useState('')
  const [selectionError, setSelectionError] = useState('')

  const [category, setCategory] = useState<'services' | 'talent' | 'equipment'>('services')
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const { data, error, mutate } = useQuoteWizard(category, page, search)

  useEffect(() => {
    setPage(1)
  }, [category, search])

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

        {data && (
          <>
            <div className="flex gap-2">
              {['services', 'talent', 'equipment'].map((cat) => (
                <Button
                  key={cat}
                  size="sm"
                  variant={cat === category ? 'secondary' : 'outline'}
                  onClick={() => setCategory(cat as any)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Button>
              ))}
            </div>
            <div className="mt-4">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search ${category}...`}
                className="w-full px-3 py-2 rounded-md border bg-background text-sm"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {data.items.map((item) => (
                <Card
                  data-testid={`service-card-${item.id}`}
                  key={item.id}
                className={`p-4 space-y-2 cursor-pointer border-2 transition-colors ${selectedItem === item.id ? 'border-zion-purple' : 'hover:border-zion-purple/50'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple`}
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
            <div className="flex justify-between mt-4">
              <Button
                size="sm"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <Button
                size="sm"
                onClick={() => setPage((p) => p + 1)}
                disabled={data && data.items.length === 0}
              >
                Next
              </Button>
            </div>
          </>
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
