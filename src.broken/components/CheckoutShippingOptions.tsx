<<<<<<< HEAD
import React, { useEffect, useState } from 'react',
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group',

interface Address {
  name: string,
  address: string,
  city: string,
  country: string
}

interface ShippingRate {
  id: string,
  carrier: string,
  service: string,
  rate: string,
  currency: string,
  delivery_days?: number | null,
  tax?: string
}

interface Props {
  toAddress: Address | null,
  onSelect?: (rate: ShippingRate) => void
}

const fromAddress = {
  name: 'Store',
  street1: '123 Market St',
  city: 'San Francisco',
  state: 'CA',
  zip: '94103',
  country: 'US'},

const parcel = { weight: 1, length: 10, width: 10, height: 10 },

export function CheckoutShippingOptions({ toAddress, onSelect }: Props) {
  const [rates, setRates] = useState<ShippingRate[]>([]),
  const [loading, setLoading] = useState(false),
  const [selected, setSelected] = useState<string>(''),
=======
import React, {_useEffect, _useState} from 'react';

interface Address {_name: string;
  address: string;
  city: string;
  country: string;}

interface ShippingRate {_id: string;
  carrier: string;
  service: string;
  rate: string;
  currency: string;
  delivery_days?: number | null;
  tax?: string;}

interface Props {_toAddress: Address | null;
  onSelect?: (_rate: ShippingRate) => void;}

const _fromAddress = {_name: 'Store', _street1: '123 Market St', _city: 'San Francisco', _state: 'CA', _zip: '94103', _country: 'US'};

const _parcel = {_weight: 1, _length: 10, _width: 10, _height: 10};

export function CheckoutShippingOptions(_{_toAddress, _onSelect}: Props) {_const [rates, _setRates] = useState<ShippingRate[]>([]);
  const [loading, _setLoading] = useState(false);
  const [selected, _setSelected] = useState<string>('');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    if (
      !toAddress ||
      !toAddress.address ||
      !toAddress.city ||
      !toAddress.country
    )
<<<<<<< HEAD
      return,
    const fetchRates = async () => {
      setLoading(true),
      try {
        const res = await fetch('/api/shipping-rates', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fromAddress, toAddress, parcel })}),
        const data = await res.json(),
        if (res.ok) {
          setRates(data.rates || [])
        } else {
          console.error('Rates error', data)
        }
      } catch (err) {
        console.error('Rates error', err)
      } finally {
        setLoading(false)
      }
    },
    fetchRates()
  }, [toAddress]),

  const handleChange = (value: string) => {
    setSelected(value),
    const rate = rates.find(r => r.id === value),
    if (rate && onSelect) onSelect(rate)
  },
=======
      return;
    const _fetchRates = async () => {
      setLoading(true);
      try {
        const _res = await fetch('/api/shipping-rates', _{
          method: 'POST', _headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({_fromAddress, _toAddress, _parcel})});
        const _data = await res.json();
        if (res.ok) {_setRates(data.rates || []);} else {}
      } catch (err) {} finally {_setLoading(false);}
    };
    fetchRates();
  }, [toAddress]);

  const _handleChange = (_value: string) => {_setSelected(value);
    const _rate = rates.find(r => r.id === value);
    if (rate && onSelect) onSelect(rate);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!toAddress) return null,

  return (
<<<<<<< HEAD
    <div className=&quot;my-4&quot;>
      <h2 className=&quot;font-semibold mb-2&quot;>Shipping Options</h2>
      {loading && <p>Loading...</p>}
      {!loading && (
        <RadioGroup value={selected} onValueChange={handleChange} className=&quot;space-y-2&quot;>
          {rates.map(rate => (
            <label key={rate.id} className=&quot;flex items-center gap-2&quot;>
              <RadioGroupItem value={rate.id} />
=======
    <div className="my-4">
      <h2 className="font-semibold mb-2">Shipping Options</h2>
      {_loading && <p>Loading...</p>}
      {_!loading && (
        <RadioGroup value={selected} onValueChange={_handleChange} className="space-y-2">
          {_rates.map(rate => (
            <label key={rate.id} className="flex items-center gap-2">
              <RadioGroupItem value={_rate.id} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <span>
                {_`${rate.carrier} ${_rate.service} - ${_rate.rate} ${_rate.currency}`}
                {_rate.delivery_days && ` (${rate.delivery_days}d)`}
              </span>
<<<<<<< HEAD
              {rate.tax && (
                <span className=&quot;ml-1 text-sm&quot;>(+{rate.tax} taxes)</span>
=======
              {_rate.tax && (
                <span className="ml-1 text-sm">(+{rate.tax} taxes)</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              )}
            </label>
          ))}
        </RadioGroup>
      )}
    </div>
  )
}

<<<<<<< HEAD
export type { ShippingRate },
=======
export type {_ShippingRate};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
