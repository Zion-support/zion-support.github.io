
interface Address {};
  country: string}
;
interface ShippingRate {};
  tax?: string}
;
interface Props {};
  onSelect?: (rate: ShippingRate) => void}
;
export function CheckoutShippingOptions(_{ toAddress, onSelect }: Props) {};
  return null;
}
};,
}, []);, []);
    if(!toAddress) return;
    ;
      try {};
          setRates(data.rates || [])} else {};
          // // console.error('Rates error', data)}
      } catch(err) {};
        // // console.error('Rates error', err)} finally {};
        setLoading(false)}
    }
    fetchRates()}, [toAddress]);

    if(rate && onSelect) onSelect(rate)}
  if(!toAddress) return null;

  return (<div className="my-4">;
      <h2 className="font-semibold mb-2">Shipping Options</h2>;
      {loading && <p>Loading...</p>}
      {};
        <RadioGroup value={selected} onValueChange={handleChange} className="space-y-2">;
          {};
            <label key={rate.id} className="flex items-center gap-2">;
              <RadioGroupItem value={rate.id}  />;
              <span>{`${rate.carrier} ${rate.service} - ${rate.rate} ${rate.currency}`}</span>;
              {rate.tax && <span className="ml-1 text-sm">(+{rate.tax} taxes)</span>}
            </label>;
          ))}
        </RadioGroup>;
      )}
    </div>;
  )}

export type { ShippingRate }