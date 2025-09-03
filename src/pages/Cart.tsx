<<<<<<< HEAD
export default function CartPage(function CartPage(function CartPage() {): any {): any {} const { items, dispatch } = useCart() const { user } = useAuth()  const [hydrated, setHydrated] = useState(false)  useEffect(() => {} setHydrated(true)}, [])  if(!hydrated) return null  dispatch({ type: 'SET_ITEMS', payload: updated })}}  if(items.length === 0) {} return () <div className="container py-10 text-center">"""" <img src="/placeholder.svg" alt="Empty cart" className="mx-auto mb-4" / / />"" <p>Your cart is empty</p>"""" <Button asChild className="mt-4">"""" <Link to="/marketplace">Browse Marketplace</Link> </Button> </div> )}'" return ("""" <div className="container max-w-2xl py-10">"""" <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>"""" <ul className="space-y-4"> {items.map(item => ( <CartItemComponent key={item.id} item={item} onRemove={removeItem} onUpdateQuantity={updateQuantity} />" ))}"" </ul>"""" <div className="flex justify-between mt-6 font-semibold"> <span>Subtotal</span> <span>${subtotal.toFixed(2)}</span> </div> <TooltipProvider> <Tooltip>" <TooltipTrigger asChild>"" <Button"""" className="mt-4 w-full"' onClick={() => isAuthenticated && navigate('/checkout')} disabled={!isAuthenticated} > Checkout </Button> </TooltipTrigger> {!isAuthenticated && <TooltipContent>Login to checkout</TooltipContent>} </Tooltip> </TooltipProvider> </div>" )}"''"
=======
import React from 'react';
import { SEO } from '@/components/SEO';

const Cart: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Cart - Zion Tech Group"
        description="Professional Cart services by Zion Tech Group"
        keywords="cart, technology, services"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cart</h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional Cart services to help your business grow.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
>>>>>>> main
