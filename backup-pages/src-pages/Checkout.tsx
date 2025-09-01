import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number}

interface CheckoutForm {
  name: string;
  email: string;
  address: string;
  city: string;
  country: string}

export default function Checkout() {
  
  const [searchParams] = useSearchParams();
  const [items, setItems] = useState<CartItem[]>([]);
  
  
  useEffect(() => {
    
    if (sku) {
      setItems([{ id: sku, name: sku, price: 25, quantity: 1 }]);
      return}

    
    if (stored) {
      try {
        setItems(JSON.parse(stored) as CartItem[])} catch {
        setItems([])}
    }
  }, [searchParams]);

  
  const [shippingRate, setShippingRate] = useState<ShippingRate | null>(null);
  
  
      
      if (!res.ok) throw new Error(result.error || 'Failed');
      
      if (stripe && result.clientSecret) {
        
        if (payment.error) throw payment.error;
        safeStorage.removeItem('cart');
        navigate(`/orders/${result.id}`)}
    } catch (err) {
      console.error('Payment failed', err)}
  };

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="name" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field}  />
                </FormControl>
                <FormMessage  />
              </FormItem>
            )} />
            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field}  />
                </FormControl>
                <FormMessage  />
              </FormItem>
            )} />
            <FormField name="address" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field}  />
                </FormControl>
                <FormMessage  />
              </FormItem>
            )} />
            <FormField name="city" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field}  />
                </FormControl>
                <FormMessage  />
              </FormItem>
            )} />
            <FormField name="country" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field}  />
                </FormControl>
                <FormMessage  />
              </FormItem>
            )} />
            <CheckoutShippingOptions toAddress={{
                name: watchAddr[0],
                address: watchAddr[1],
                city: watchAddr[2],
                country: watchAddr[3],
              }}
              onSelect={setShippingRate}
             />
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold mb-4">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {shippingRate && (
                <div className="flex justify-between font-semibold mb-4">
                  <span>Shipping</span>
                  <span>{parseFloat(shippingRate.rate).toFixed(2)} {shippingRate.currency}</span>
                </div>
              )}
              {shippingRate?.tax && (
                <div className="flex justify-between font-semibold mb-4">
                  <span>Duties &amp; Taxes</span>
                  <span>{parseFloat(shippingRate.tax).toFixed(2)} {shippingRate.currency}</span>
                </div>
              )}
              <div className="flex justify-between font-semibold mb-4">
                <span>Total</span>
                <span>{total.toFixed(2)}</span>
              </div>
              <Button className="w-full" type="submit">
                Pay with Stripe (test)
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )}
