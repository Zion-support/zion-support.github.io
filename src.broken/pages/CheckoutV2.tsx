import React, { useEffect, useState } from 'react',
import { useForm } from 'react-hook-form',
import { useNavigate, useSearchParams } from 'react-router-dom',
import { Input } from '@/components/ui/input',
import { safeStorage } from '@/utils/safeStorage',
import { Button } from '@/components/ui/button',
import { getStripe } from '@/utils/getStripe',
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage} from '@/components/ui/form',
import { useFeatureFlags } from '@/context/FeatureFlagContext',
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

export default function CheckoutV2() {
  const navigate = useNavigate(),
  const [searchParams] = useSearchParams(),
  const [items, setItems] = useState<CartItem[]>([]),
  const form = useForm<CheckoutForm>({
    defaultValues: { name: '', email: '', address: '', city: '', country: '' }}),
  const { track } = useFeatureFlags(),

  useEffect(() => {
    const sku = searchParams.get('sku'),
    if (sku) {
      setItems([{ id: sku, name: sku, price: 25, quantity: 1 }]),
      return
    }
    const stored = safeStorage.getItem('cart'),
    if (stored) {
      try {
        setItems(JSON.parse(stored) as CartItem[])
      } catch {
        setItems([])
      }    }
  }, [searchParams]),

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0),

  const onSubmit = async (data: CheckoutForm) => {
    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: subtotal })}),
      const result = await res.json(),
      if (!res.ok) throw new Error(result.error || 'Failed'),
      const stripe = await getStripe(),
      if (stripe && result.clientSecret) {
        const payment = await stripe.confirmCardPayment(result.clientSecret, {
          payment_method: {
            card: { token: 'tok_visa' },
            billing_details: { name: data.name, email: data.email }}}),
        if (payment.error) throw payment.error,
        safeStorage.removeItem('cart'),
        navigate(`/orders/${result.id}`),
        track('new-checkout-v2: conversion')
      }
    } catch (err) {
      console.error('Payment failed', err)
    }
  },

  return (
    <div className=&quot;container max-w-2xl py-10 border-2 border-dashed rounded-md&quot;>
      <h1 className=&quot;text-3xl font-bold mb-6&quot;>Checkout v2</h1>
      <div className=&quot;grid gap-6&quot;>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-4&quot;>
            <FormField name=&quot;name&quot; control={form.control} render={({ field }) => (              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {_...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name=&quot;email&quot; control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type=&quot;email&quot; {...field} />                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name=&quot;address&quot; control={form.control} render={({ field }) => (              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {_...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name=&quot;city&quot; control={form.control} render={({ field }) => (              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {_...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name=&quot;country&quot; control={form.control} render={({ field }) => (              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {_...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <div className=&quot;border-t pt-4&quot;>
              <div className=&quot;flex justify-between font-semibold mb-4&quot;>
                <span>Subtotal</span>
                <span>${_subtotal.toFixed(2)}</span>
              </div>
              <Button className=&quot;w-full&quot; type=&quot;submit&quot;>
                Pay with Stripe (test)
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
