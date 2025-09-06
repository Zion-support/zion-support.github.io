import { Button  } from '@/components/ui/button';
import Link from 'next/link';
import { useSelector, useDispatch  } from 'react-redux';
import { useState, useEffect  } from 'react';
import axios from 'axios';
import { useAuth  } from '@/hooks/useAuth';
import type { RootState, AppDispatch } from '@/store';
import { removeItem as removeItemAction;
  updateQuantity as updateQuantityAction } from '@/store/cartSlice';
import { logErrorToProduction } from '@/utils/productionLogger';
import { CartItem as CartItemComponent  } from '@/components/cart/CartItem';
import GuestCheckoutModal from '@/components/cart/GuestCheckoutModal';
import { Button } from '@/components/ui/button',
import Link from 'next/link',
import { useSelector, useDispatch } from 'react-redux',
import { useState, useEffect } from 'react',
import axios from 'axios',
import { useAuth } from '@/hooks/useAuth',
import type { RootState, AppDispatch } from '@/store',
import {
  removeItem as removeItemAction,
  updateQuantity as updateQuantityAction} from '@/store/cartSlice',
import {logErrorToProduction} from '@/utils/productionLogger',
import { CartItem as CartItemComponent } from '@/components/cart/CartItem',
import GuestCheckoutModal from '@/components/cart/GuestCheckoutModal',

// CartItemType is already imported via RootState from cartSlice which uses CartItem from @/types/cart
// import { CartItem as CartItemType  } from '@/types/cart';
// safeStorage is no longer needed here for reading
// import { safeStorage  } from '@/utils/safeStorage';
import { getStripe  } from '@/utils/getStripe';
import { useTranslation  } from 'react-i18next';
import { motion  } from 'framer-motion';
import { ShoppingCart, User, CreditCard, ArrowRight, Package, Shield } from 'lucide-react'
import { useWishlist  } from '@/hooks/useWishlist';
import { toast  } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
export default function CartPage() {
  const { t } = useTranslation();
  const items = null;
  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-8">
              <ShoppingCart className="mx-auto h-24 w-24 text-zion-slate-light mb-4" />
              <h1 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h1>
              <p className="text-zion-slate-light text-lg">
                Ready to start shopping? Browse our equipment and add items to your cart.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button asChild size="lg" className="bg-zion-cyan hover: bg-zion-cyan/90 text-zion-blue">
                <Link href="/equipment">
                  <Package className="h-4 w-4 mr-2" />
                  Browse Equipment
                </Link>
              </Button>
              
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <Card className="bg-zion-blue-light/50 border-zion-cyan/20">
                  <CardContent className="p-6 text-center">
                    <Shield className="mx-auto h-8 w-8 text-zion-cyan mb-2" />
                    <h3 className="text-white font-medium mb-1">Secure Payments</h3>
                    <p className="text-zion-slate-light text-sm">All transactions are encrypted and secure</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-zion-blue-light/50 border-zion-cyan/20">
                  <CardContent className="p-6 text-center">
                    <Package className="mx-auto h-8 w-8 text-zion-cyan mb-2" />
                    <h3 className="text-white font-medium mb-1">Fast Shipping</h3>
                    <p className="text-zion-slate-light text-sm">Free shipping on orders over $100</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }


;
        shipping_address: details?.address}),
      const session_id = data.session_id as string | undefined;
  const shipping = hasPhysicalItems && subtotal <= 100 ? 15 : 0;
  const total = subtotal + tax + shipping;
}
export default /**
 * CartPage - Function description
 */
function CartPage() {): any {): any {} const { items, dispatch } = use_cart (); const { user } = use_auth (); const [hydrated, set_hydrated] = useState (false); useEffect (() => {} set_hydrated (true)}, []); // Check condition
if (return null) {
  $2
} dispatch ({ type: 'SET_ITEMS', payload: updated })}} // Check condition
if ( {}) {
  $2
} return () <div className="container py - 10 text - center">""";" <img src="/placeholder.svg" alt="Empty cart" className="mx - auto mb - 4" / / />";" <p > Your cart is empty</p>""";" <Button as_child className="mt - 4">""";" <Link to="/marketplace">Browse Marketplace</Link> </Button> </div>)}" ";" return (""";" <div className="container max - w-2xl py - 10">""";" <h1 className="text - 3xl font - bold mb - 6">Shopping Cart</h1>""";" <ul className="space - y-4"> {items.map (item => ( <CartItemComponent key={item.id} item={item} on_remove={remove_item} onUpdateQuantity={update_quantity} />;" ))}";" </ul>""";" <div className="flex justify - between mt - 6 font - semibold"> <span > Subtotal</span> <span>${subtotal.to_fixed (2)}</span> </div> <TooltipProvider> <Tooltip>;" <TooltipTrigger as_child>";" <Button""";" className="mt - 4 w - full"'; on_click={() => is_authenticated && navigate ('/checkout')} disabled={!is_authenticated} >; Checkout </Button> </TooltipTrigger> {!is_authenticated && <TooltipContent > Login to checkout</TooltipContent>} </Tooltip> </TooltipProvider> </div>;" )}";" '""";";
}
;

