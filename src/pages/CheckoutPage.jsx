import { useRouter } from 'next/router'; // Changed from useParams
import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { getStripe } from '@/utils/getStripe';
import CardForm from '@/components/checkout/CardForm';
import CheckoutProgress from '@/components/checkout/CheckoutProgress';
import { NEW_PRODUCTS } from '@/data/newProductsData';
export default function CheckoutPage() {
    const router = useRouter();
    const { id: rawId } = router.query;
    const id = typeof rawId === 'string' ? rawId : null;
    const [product, setProduct] = useState(null);
    const [intent, setIntent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProduct = async () => {
            if (!id)
                return;
            setIsLoading(true);
            setError(null);
            try {
                const res = await fetch(`/api/products/${id}`);
                if (!res.ok)
                    throw new Error('Failed to fetch product');
                const data = await res.json();
<<<<<<< HEAD
                setProduct(data);

=======
                setProduct(data)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            catch (err) {
<<<<<<< HEAD
                // // // console.error('Failed to load product', err);
=======
                // // // // // // // console.error('Failed to load product', err);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
                setError(err.message);
                const fallback = NEW_PRODUCTS.find(p => p.id === id) || null;
<<<<<<< HEAD
                setProduct(fallback);

            finally {
                setIsLoading(false);

=======
                setProduct(fallback)}
            finally {
                setIsLoading(false)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        };
        fetchProduct()}, [id]);
    if (isLoading) {
<<<<<<< HEAD
        return <div className="p-6 text-white">Loading...</div>;

    if (error && !product) {
        return <div className="p-6 text-white">Failed to load product.</div>;

    if (!product) {
        return <div className="p-6 text-white">Loading...</div>;

=======
        return <div className="p-6 text-white">Loading...</div>}
    if (error && !product) {
        return <div className="p-6 text-white">Failed to load product.</div>}
    if (!product) {
        return <div className="p-6 text-white">Loading...</div>}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    return (<div className="container max-w-2xl py-10 space-y-6">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <CheckoutProgress currentStep={1} className="mb-6"/>
      <div>
        <p className="font-semibold">{product.title}</p>
        <p className="text-sm text-zion-slate-light">{product.description}</p>
        <p className="font-semibold mt-2">Price: ${product.price?.toFixed(2)}</p>
      </div>
      {intent ? (<div className="space-y-2 text-center">
          <p className="font-semibold">Payment Successful!</p>
          <p>Confirmation ID: {intent.id}</p>
        </div>) : (<Elements stripe={getStripe()}>
          <CardForm amount={product.price ?? 0} onSuccess={setIntent}/>
        </Elements>)}
      {!intent && (<p className="text-xs text-zion-slate-light text-center">
          Use test card 4242-4242-4242-4242 with  future date and CVC.
        </p>)}
<<<<<<< HEAD
    </div>);
</Card>}}}}}}}
=======
    </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
