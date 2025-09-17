
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
        const data = await res.json();
        if (res.ok) {
          setRates(data.rates || []);
        } else {
      } finally {
        setLoading(false);
      }
    };
    fetchRates();

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
