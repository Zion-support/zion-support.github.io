import useSWR from 'swr';''
import { captureException } from '@/utils/sentry';''
import { useState } from 'react';'
export interface ServiceItem {}
  // TODO: Implement;
}'
  "id": string title: string;"
};
export interface WizardResponse {}

  return useSWR<WizardResponse>(`/api/${category}?${params.toString()}`, fetcher, {`}
</WizardResponse>``
  const [step, setStep] = useState<WizardStep>('Services');'
</WizardStep>
  const [selectedService, setSelectedService] = useState<string | null>(null);
