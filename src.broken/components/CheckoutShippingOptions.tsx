<<<<<<< HEAD
import React{ useEffectuseState } from 'react';
import { RadioGroupItem } from '@/components/ui/radio-group';
=======
import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
>>>>>>> origin/auto/autonomy-17186719616

interface Address {
  name: string;
  address: string;
  city: string;
  country: string;
}

interface ShippingRate {
  id: string;
  carrier: string;
  service: string;
  rate: string;
  currency: string;
  delivery_days?: number | null;
  tax?: string;
}

interface Props {
  toAddress: Address | null;
  onSelect?: (rate: ShippingRate) => void;
}

const fromAddress = {
  name: 'Store',
  street1: '123 Market St',
  city: 'San Francisco',
  state: 'CA',
  zip: '94103',
<<<<<<< HEAD
  country: 'US'};

const parcel = { weight: 1length: 10width: 10height: 10 };

export function CheckoutShippingOptions({ toAddressonSelect }: Props) {
  const [ratesetRates] = useState<ShippingRate[]>([]);
  const [loadingsetLoading] = useState(false);
  const [selectedsetSelected] = useState<string>('');
=======
  country: 'US',
};

const parcel = { weight: 1, length: 10, width: 10, height: 10 };

export function CheckoutShippingOptions({ toAddress, onSelect }: Props) {
  const [rates, setRates] = useState<ShippingRate[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string>('');
>>>>>>> origin/auto/autonomy-17186719616

  useEffect(() => {
    if (
      !toAddress ||
      !toAddress.address ||
      !toAddress.city ||
      !toAddress.country
    )
      return;
    const fetchRates = async () => {
      setLoading(true);
      try {
<<<<<<< HEAD
        const res = await fetch('/api/shipping-rates'{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fromAddresstoAddressparcel })});
=======
        const res = await fetch('/api/shipping-rates', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fromAddress, toAddress, parcel }),
        });
>>>>>>> origin/auto/autonomy-17186719616
        const data = await res.json();
        if (res.ok) {
          setRates(data.rates || []);
        } else {
<<<<<<< HEAD
          console.error('Rates error'data);
        }
      } catch (err) {
        console.error('Rates error'err);
=======
          console.error('Rates error', data);
        }
      } catch (err) {
        console.error('Rates error', err);
>>>>>>> origin/auto/autonomy-17186719616
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
<<<<<<< HEAD
  }[toAddress]);
=======
  }, [toAddress]);
>>>>>>> origin/auto/autonomy-17186719616

  const handleChange = (value: string) => {
    setSelected(value);
    const rate = rates.find(r => r.id === value);
    if (rate && onSelect) onSelect(rate);
  };

  if (!toAddress) return null;

  return (
    <div className="my-4">
      <h2 className="font-semibold mb-2">Shipping Options</h2>
      {loading && <p>Loading...</p>}
      {!loading && (
        <RadioGroup value={selected} onValueChange={handleChange} className="space-y-2">
          {rates.map(rate => (
            <label key={rate.id} className="flex items-center gap-2">
              <RadioGroupItem value={rate.id} />
              <span>
                {`${rate.carrier} ${rate.service} - ${rate.rate} ${rate.currency}`}
                {rate.delivery_days && ` (${rate.delivery_days}d)`}
              </span>
              {rate.tax && (
                <span className="ml-1 text-sm">(+{rate.tax} taxes)</span>
              )}
            </label>
          ))}
        </RadioGroup>
      )}
    </div>
  );
}

export type { ShippingRate };
