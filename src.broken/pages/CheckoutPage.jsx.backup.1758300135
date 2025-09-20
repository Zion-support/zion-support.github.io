import { Elements } from '@stripe / react - stripe -js';
export default function Page() {
 from '@/utils / getStripe';
 finally {
        setIsLoading(false) ;
      }
    };
    fetchProduct () ;
  }, [id]) ;
  if(isLoading) {
    return < div className="p - 6 text-white">Loading...</div>;
  }
  if(error && !product) {
    return < div className="p - 6 text-white">Failed to load product.</div>;
  }
  if(!product) {
    return < div className="p - 6 text-white">Loading...</div>;
  }
  return (<div className="container max - w-2xl py-10 space - y-6">
      <h1 className="text-3xl font -bold">Checkout</h1>
      <CheckoutProgress currentStep={1} className="mb-6" />
      <div>
        <p className="font -semibold">{product.title}</p>
        <p className="text-sm text-zion - slate -light">
          {product.description}
        </p>
        <p className="font - semibold mt-2">
          Price: ${product.price?.toFixed (2) }
        </p>
      </div>
      {intent ? (<div className="space - y-2 text-center">
          <p className="font -semibold">Payment Successful!</p>
          <p > Confirmation ID: {intent.id}</p>
        </div>) : (<Elements stripe={getStripe () }>
          <CardForm amount={product.price ?? 0} onSuccess={setIntent} />
        </Elements>) }
      {!intent && (<p className="text-xs text-zion - slate - light text-center">
          Use test card 4242 - 4242 - 4242 - 4242 with future date and CVC.</p>) }
    </div>) ;
}
