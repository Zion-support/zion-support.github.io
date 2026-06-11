// Stub: stripe package not installed
// Install with: npm install stripe

import { NextResponse } from 'next/server';

export async function createCustomer(_email: string, _name?: string) {
  return { id: 'stub-customer' };
}

export async function createCheckoutSession(_params: {
  priceId: string;
  customerId?: string;
  successUrl: string;
  cancelUrl: string;
  metadata?: Record<string, string>;
}) {
  return { id: 'stub-session', url: '#' };
}

export async function createSubscriptionSession(_params: {
  priceId: string;
  customerId?: string;
  successUrl: string;
  cancelUrl: string;
  metadata?: Record<string, string>;
}) {
  return { id: 'stub-subscription', url: '#' };
}

export async function handleWebhook(request: Request) {
  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}
