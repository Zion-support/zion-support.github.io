import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { safeStorage } from '@/utils/safeStorage';
import { Button } from '@/components/ui/button';
import { getStripe } from '@/utils/getStripe';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage} from '@/components/ui/form',
import { useFeatureFlags } from '@/context/FeatureFlagContext';
interface CartItem {
  id: string,
  name: string,
  price: number,
  quantity: number}

interface CheckoutForm {
  name: string,
  email: string,
  address: string,
  city: string,
  country: string}

export default function CheckoutV2() {
  const navigate = useNavigate($2);
  const [searchParams] = useSearchParams($2);
  const [items, setItems] = useState<CartItem[]>([]),
  const form = useForm<CheckoutForm>({
    defaultValues: { name: '', email: '', address: '', city: '', country: '' }),
  const { track } = useFeatureFlags($2);
  useEffect(() => {
    const sku = searchParams.get($2);
    if (sku) {
      setItems($2);
      return
    }
    const stored = safeStorage.getItem($2);
    if (stored) {
      try {
        setItems(JSON.parse(stored) as CartItem[])
      } catch {
        setItems([])
      }
    }
  }, [searchParams]),

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0),

  const onSubmit = async (data: CheckoutForm) => {
    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: subtotal})}),
      const result = await res.json($2);
      if (!res.ok) throw new Error($2);
      const stripe = await getStripe($2);
      if (stripe && result.clientSecret) {
        const payment = await stripe.confirmCardPayment($2);
        if (payment.error) throw payment.error,
        safeStorage.removeItem($2);
        navigate($2);
        track('new-checkout-v2: conversion')
      }
    } catch (err) {
      console.error('Payment failed', err)
    }
  },

  return (
    <div className='container max-w-2xl py-10 border-2 border-dashed rounded-md'>
      <h1 className='text-3xl font-bold mb-6'>Checkout v2</h1>
      <div className='grid gap-6'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField name='name' control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name='email' control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name='address' control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name='city' control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name='country' control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <div className='border-t pt-4'>
              <div className='flex justify-between font-semibold mb-4'>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <Button className='w-full' type='submit'>
                Pay with Stripe (test)
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
}, [searchParams]);
<FormItem> <FormLabel>Name</FormLabel> <FormControl> <Input {
  ...field 
}/> </FormControl> <FormMessage /> </FormItem>) 
}/> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormItem> <FormLabel>Address</FormLabel> <FormControl> <Input {
  ...field 
}/> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormItem> <FormLabel>City</FormLabel> <FormControl> <Input {
  ...field 
}/> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormItem> <FormLabel>Country</FormLabel> <FormControl> <Input {
  ...field 
}/> </FormControl> <FormMessage /> </FormItem>) 
}/> <div className='border-t pt-4' > <div className='flex justify-between font-semibold mb-4' > <span>Subtotal</span> <span>$ {
  subtotal.toFixed (2) 
}</span> </div> <Button className='w-full' type='submit' > Pay with Stripe (test) </Button> </div> </form> </Form> </div> </div>) 
