import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { safeStorage } from '@/utils/safeStorage';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { getStripe } from '@/utils/getStripe';
import { CheckoutShippingOptions, ShippingRate } from '@/components/CheckoutShippingOptions';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutForm {
  name: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [items, setItems] = useState<CartItem[]>([]);
  const form = useForm<CheckoutForm>({ defaultValues: { name: '', email: '', address: '', city: '', country: '' } });
  const watchAddr = form.watch(['name', 'address', 'city', 'country']);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productParam = params.get('product');
    const stored = localStorage.getItem('cart');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CartItem[];
        if (parsed.length > 0) {
          setItems(parsed);
          return;
        }
      } catch {
        // ignore parsing errors
      }
    }
    if (productParam) {
      setItems([
        { id: productParam, name: 'Test Item', price: 25, quantity: 1 },
      ]);
    } else {
      // Provide mock data if cart empty
      setItems([
        {
          id: 'prod_mock',
          name: 'Test Item',
          price: 25,
          quantity: 1,
        },
      ]);
    }
  }, [location.search]);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const [shippingRate, setShippingRate] = useState<ShippingRate | null>(null);
  const total = subtotal + (shippingRate ? parseFloat(shippingRate.rate) : 0) + (shippingRate?.tax ? parseFloat(shippingRate.tax) : 0);

  const onSubmit = async (data: CheckoutForm) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Failed');
      const stripe = await getStripe();
      if (stripe && result.clientSecret) {
        const payment = await stripe.confirmCardPayment(result.clientSecret, {
          payment_method: {
            card: { token: 'tok_visa' },
            billing_details: { name: data.name, email: data.email },
          },
        });
        if (payment.error) throw payment.error;
        if (user?.id) {
          try {
            await fetch('/api/points/add', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ userId: user.id, amount: subtotal, orderId: result.id }),
            });
          } catch (e) {
            console.error('Failed to add points', e);
          }
        }
        safeStorage.removeItem('guestCart');
        navigate(`/orders/${result.id}`);
        track('new-checkout-v2:conversion');
      }
    } catch (err) {
      console.error('Payment failed', err);
    }
  };

  const handleCheckout = async () => {
    const product = items[0];
    try {
      const response = await apiClient('/api/checkout_sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id }),
      });
      const { sessionId } = await response.json();
      const stripe = await getStripe();
      if (stripe && sessionId) {
        await stripe.redirectToCheckout({ sessionId });
      }

      if (!responseData.url) {
        throw new Error('No checkout URL received from server');
      }

      window.location.href = responseData.url;
    } catch (err) {
      logDevError('Checkout error:', err);
      let message = 'Failed to process checkout. Please try again.';
      if (err && typeof err === 'object' && 'message' in err && typeof (err as { message?: unknown }).message === 'string') {
        message = (err as { message: string }).message;
      }
      fireEvent('checkout_error', { message });
      toast({
        title: 'Checkout failed',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

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
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="address" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="city" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="country" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <CheckoutShippingOptions
              toAddress={{
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

      <Dialog open={showGuest} onOpenChange={setShowGuest}>
        <DialogContent>
          <form onSubmit={handleGuestSubmit} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Checkout as Guest</DialogTitle>
              <DialogDescription>
                Enter your contact email and shipping address
              </DialogDescription>
            </DialogHeader>
            <Input
              required
              value={guestEmail}
              onChange={(e) => setGuestEmail(e.target.value)}
              placeholder="Email"
              aria-label="Email"
            />
            <Input
              required
              value={guestAddress}
              onChange={(e) => setGuestAddress(e.target.value)}
              placeholder="Shipping Address"
              aria-label="Shipping Address"
            />
            <DialogFooter>
              <Button type="submit" className="w-full">Checkout</Button>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </div>
  );
}
