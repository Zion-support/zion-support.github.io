import React, { useEffect, useState } from 'react',
import { useTranslation } from 'react-i18next',
import { useForm } from 'react-hook-form',
import { useNavigate, useSearchParams } from 'react-router-dom',
import { Input } from '@/components/ui/input',
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form',
import { ControllerRenderProps } from 'react-hook-form', // Added import
import { useAuth } from '@/hooks/useAuth',

interface CartItem {
  id: string,
  name: string,
  price: number,
  quantity: number
}

interface CheckoutForm {
  name: string,
  email: string,
  address: string,
  city: string,
  country: string
}

export default function Checkout() {
  const navigate = useNavigate(),
  const { t } = useTranslation(),
  const [searchParams] = useSearchParams(),
  const [items, setItems] = useState<CartItem[]>([]),
  const form = useForm<CheckoutForm>({ defaultValues: { name: '', email: '', address: '', city: '', country: '' } }),
  const watchAddr = form.watch(['nameaddress', 'citycountry']),

  useEffect(() => {
    const sku = searchParams.get('sku'),
    if (sku) {
      setItems([{ id: sku, name: sku, price: 25, quantity: 1 }]),
      return,
    }

    const stored = safeStorage.getItem('cart'),
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CartItem[],
        if (parsed.length > 0) {
          setItems(parsed),
          return,
        }
      } catch {
        // ignore parsing errors
      }
    }
  }, [searchParams]),

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  main

  const onSubmit = async (data: CheckoutForm) => {
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total })
      }),
      const { sessionId } = await response.json(),
      const stripe = await getStripe(),
      if (stripe && result.clientSecret) {
        const payment = await stripe.confirmCardPayment(result.clientSecret, {
          payment_method: {
            card: { token: 'tok_visa' },
            billing_details: { name: data.name, email: data.email }
          }
        }),
        if (payment.error) throw payment.error,
        safeStorage.removeItem('cart'),
        navigate(`/orders/${result.id}`),
      }
    } catch (err) {
      console.error('Checkout error', err),
    }
  },

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0),

  return (
    <div className="container max-w-2xl py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">{t('checkout.title')}</h1>
        <PointsBadge />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField name="name" control={form.control} render={({ field }: { field: ControllerRenderProps<CheckoutFormData, "name"> }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="email" control={form.control} render={({ field }: { field: ControllerRenderProps<CheckoutFormData, "email"> }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input type="email" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="address" control={form.control} render={({ field }: { field: ControllerRenderProps<CheckoutFormData, "address"> }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="city" control={form.control} render={({ field }: { field: ControllerRenderProps<CheckoutFormData, "city"> }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="country" control={form.control} render={({ field }: { field: ControllerRenderProps<CheckoutFormData, "country"> }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          {intent ? (
            <div className="space-y-2 text-center">
              <p className="font-semibold">Payment Successful!</p>
              <p>Confirmation ID: {intent.id}</p>
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
        </DialogContent>
      </Dialog>
    </div>
  ),
}
