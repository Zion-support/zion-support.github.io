export function getStripe () : Promise < Stripe | null> {

  let stripePromise: Promise < Stripe | null>;

  if (!stripePromise) {

    stripePromise = loadStripe (key, { advancedFraudSignals: false }) }
  return stripePromise}
