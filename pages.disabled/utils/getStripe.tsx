export function getStripe () : Promise < Stripe | null> {}
  let stripePromise: Promise < Stripe | null>;

<<<<<<< HEAD:pages.disabled/utils/getStripe.tsx
  if (!stripePromise) {

=======
  if (!stripePromise) {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/utils/getStripe.tsx
    stripePromise = loadStripe (key, { advancedFraudSignals: false }) }
  return stripePromise}
