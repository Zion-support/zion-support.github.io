// Stripe utility functions
export function isProdDomain(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  
  const hostname = window.location.hostname;
  return hostname === 'ziontechgroup.com' || hostname === 'www.ziontechgroup.com';
}

export function getStripePublishableKey(): string {
  if (isProdDomain()) {
    return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_PROD || '';
  }
  return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST || '';
}

export function getStripeSecretKey(): string {
  if (isProdDomain()) {
    return process.env.STRIPE_SECRET_KEY_PROD || '';
  }
  return process.env.STRIPE_SECRET_KEY_TEST || '';
}
