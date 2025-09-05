<<<<<<< HEAD
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
// import { CartItem as CartItemType } from '@/types/cart',
// safeStorage is no longer needed here for reading
// import { safeStorage } from '@/utils/safeStorage',
import { getStripe } from '@/utils/getStripe',
import { useTranslation } from 'react-i18next',
import { motion } from 'framer-motion',
import { ShoppingCart, User, CreditCard, ArrowRight, Package, Shield } from 'lucide-react'
import { useWishlist } from '@/hooks/useWishlist',
import { toast } from '@/hooks/use-toast',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import { Badge } from '@/components/ui/badge',
export default function CartPage() {
  const { t } = useTranslation(),
  const items = useSelector((s: RootState) => s.cart.items),
  const dispatch = useDispatch<AppDispatch>(),
  const { user, isAuthenticated } = useAuth(),
  const [loading, setLoading] = useState(false),
  const [guestOpen, setGuestOpen] = useState(false),
  const { toggle: toggleWishlist, isWishlisted } = useWishlist(),

  const updateQuantity = (id: string, qty: number) => {
    dispatch(updateQuantityAction({ id, quantity: qty }))
  },

  const removeItem = (id: string) => {
    const item = items.find(i => i.id === id),
    dispatch(removeItemAction(id)),
    
    if (item) {
      toast({
<<<<<<< HEAD
        title: "Item removed",
        description: `${item.name} has been removed from your cart`})
=======
        title: &quot;Item removed&quot;,
        description: `${item.name} has been removed from your cart`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import Link from 'next/link';
import axios from 'axios';
import type {_RootState, _AppDispatch} from '@/store';
import {_removeItem as removeItemAction, _updateQuantity as updateQuantityAction} from '@/store/cartSlice';
import GuestCheckoutModal from '@/components/cart/GuestCheckoutModal';
// CartItemType is already imported via RootState from cartSlice which uses CartItem from @/types/cart
// import {_CartItem as CartItemType} from '@/types/cart';
// safeStorage is no longer needed here for reading
// import {_safeStorage} from '@/utils/safeStorage';

export default function CartPage() {_const { t} = useTranslation();
  const _items = useSelector(_(s: RootState) => s.cart.items);
  const _dispatch = useDispatch<AppDispatch>();
  const {_user, _isAuthenticated} = useAuth();
  const [loading, setLoading] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);
  const {_toggle: toggleWishlist, _isWishlisted} = useWishlist();

  const _updateQuantity = (_id: string, _qty: number) => {_dispatch(updateQuantityAction({ id, _quantity: qty}));
  };

  const _removeItem = (_id: string) => {_const _item = items.find(i => i.id === id);
    dispatch(removeItemAction(id));
    
    if (item) {
      toast({
        title: "Item removed", _description: `${item.name} has been removed from your cart`});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const saveForLater = (id: string, name: string) => {
    const wasWishlisted = isWishlisted(id),
    toggleWishlist(id),
=======
  const _saveForLater = (_id: string, _name: string) => {_const _wasWishlisted = isWishlisted(id);
    toggleWishlist(id);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    toast({
      title: wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist', _description: wasWishlisted
        ? `${name} has been removed from your wishlist`
<<<<<<< HEAD
        : `${name} has been added to your wishlist`})
  },

  const handleCheckout = async (details?: { email?: string, address?: string }) => {
    setLoading(true),
    try {
      const stripe = await getStripe(),
      if (!stripe) throw new Error('Stripe.js failed to load'),

      const { data } = await axios.post('/api/checkout-session', {
        cartItems: items,
        customer_email: details?.email || user?.email,
        shipping_address: details?.address}),

      const sessionId = data.sessionId as string | undefined,
      if (!sessionId) throw new Error('Session ID missing in response'),

      const { error } = await stripe.redirectToCheckout({ sessionId }),
      if (error) logErrorToProduction('Stripe redirect error:', { data: error.message })
    } catch (err: any) {
      logErrorToProduction('Checkout error:', { data: err }),
      alert(err.message || 'Checkout failed')
    } finally {
      setLoading(false)
    }
  }, 

  const startCheckout = () => {
    if (!isAuthenticated) {
      setGuestOpen(true)
    } else {
      handleCheckout()
    }
  },

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  const tax = subtotal * 0.08, // 8% tax estimate
=======
        : `${_name} has been added to your wishlist`});
  };

  const _handleCheckout = async (_details?: {_email?: string; address?: string}) => {_setLoading(true);
    try {
      const _stripe = await getStripe();
      if (!stripe) throw new Error('Stripe.js failed to load');

      const { data} = await axios.post('/api/checkout-session', {_cartItems: items, _customer_email: details?.email || user?.email, _shipping_address: details?.address});

      const _sessionId = data.sessionId as string | undefined;
      if (!sessionId) throw new Error('Session ID missing in response');

      const {_error} = await stripe.redirectToCheckout({_sessionId});
      if (error) logErrorToProduction('Stripe redirect error:', {_data: error.message});
    } catch (err: unknown) {_logErrorToProduction('Checkout error:', _{ data: err});
      alert(err.message || 'Checkout failed');
    } finally {_setLoading(false);}
  }; 

  const _startCheckout = () => {_if (!isAuthenticated) {
      setGuestOpen(true);} else {_handleCheckout();}
  };

  const _subtotal = items.reduce(_(sum, _i) => sum + i.price * i.quantity, 0);
  const _tax = subtotal * 0.08; // 8% tax estimate
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Only add shipping for physical items
  const _hasPhysicalItems = items.some(item => 
    !item.type || item.type === 'physical' // Default to physical if type not specified
<<<<<<< HEAD
  ),
  const shipping = hasPhysicalItems && subtotal <= 100 ? 15 : 0,
  const total = subtotal + tax + shipping,

  // Empty cart state
  if (items.length === 0) {
    return (
      <div className=&quot;min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-12 px-4&quot;>
        <div className=&quot;container mx-auto max-w-2xl&quot;>
          <motion.div 
            className=&quot;text-center py-20&quot;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
=======
  );
  const _shipping = hasPhysicalItems && subtotal <= 100 ? 15 : 0;
  const _total = subtotal + tax + shipping;

  // Empty cart state
  if (items.length === 0) {_return (
      <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <div className=&quot;mb-8&quot;>
              <ShoppingCart className=&quot;mx-auto h-24 w-24 text-zion-slate-light mb-4&quot; />
              <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>Your Cart is Empty</h1>
              <p className=&quot;text-zion-slate-light text-lg&quot;>
                Ready to start shopping? Browse our equipment and add items to your cart.
              </p>
            </div>
            
<<<<<<< HEAD
            <div className="space-y-4">
              <Button asChild size="lg" className="bg-zion-cyan hover: bg-zion-cyan/90 text-zion-blue">
                <Link href="/equipment">
                  <Package className="h-4 w-4 mr-2" />
=======
            <div className=&quot;space-y-4&quot;>
              <Button asChild size=&quot;lg&quot; className=&quot;bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue&quot;>
                <Link href=&quot;/equipment&quot;>
                  <Package className=&quot;h-4 w-4 mr-2&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  Browse Equipment
                </Link>
              </Button>
              
              <div className=&quot;grid md:grid-cols-2 gap-4 mt-8&quot;>
                <Card className=&quot;bg-zion-blue-light/50 border-zion-cyan/20&quot;>
                  <CardContent className=&quot;p-6 text-center&quot;>
                    <Shield className=&quot;mx-auto h-8 w-8 text-zion-cyan mb-2&quot; />
                    <h3 className=&quot;text-white font-medium mb-1&quot;>Secure Payments</h3>
                    <p className=&quot;text-zion-slate-light text-sm&quot;>All transactions are encrypted and secure</p>
                  </CardContent>
                </Card>
                
                <Card className=&quot;bg-zion-blue-light/50 border-zion-cyan/20&quot;>
                  <CardContent className=&quot;p-6 text-center&quot;>
                    <Package className=&quot;mx-auto h-8 w-8 text-zion-cyan mb-2&quot; />
                    <h3 className=&quot;text-white font-medium mb-1&quot;>Fast Shipping</h3>
                    <p className=&quot;text-zion-slate-light text-sm&quot;>Free shipping on orders over $100</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

<<<<<<< HEAD
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-8 px-4&quot;>
      <div className=&quot;container mx-auto max-w-6xl&quot;>
        {/* Header */}
        <motion.div 
          className=&quot;text-center mb-8&quot;
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className=&quot;text-4xl font-bold text-white mb-2&quot;>Your Cart</h1>
          <p className=&quot;text-zion-slate-light&quot;>
            {items.length} {items.length === 1 ? 'item' : 'items'} ready for checkout
          </p>
        </motion.div>

        <div className=&quot;grid lg:grid-cols-3 gap-8&quot;>
          {/* Cart Items */}
          <motion.div 
            className=&quot;lg:col-span-2 space-y-4&quot;
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
=======
  return (_<div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {_/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={_{ opacity: 0, _y: -20}}
          animate={_{ opacity: 1, _y: 0}}
        >
          <h1 className="text-4xl font-bold text-white mb-2">Your Cart</h1>
          <p className="text-zion-slate-light">
            {_items.length} {_items.length === 1 ? 'item' : 'items'} ready for checkout
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {_/* Cart Items */}
          <motion.div 
            className="lg:col-span-2 space-y-4"
            initial={_{ opacity: 0, _x: -20}}
            animate={_{ opacity: 1, _x: 0}}
            transition={_{ delay: 0.2}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_items.map((item, _index) => (
              <motion.div
                key={item.id}
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ delay: index * 0.1}}
              >
<<<<<<< HEAD
                <Card className=&quot;bg-zion-blue-light/80 border-zion-cyan/20 hover:border-zion-cyan/40 transition-colors&quot;>
                  <CardContent className=&quot;p-6&quot;>
                    <div className=&quot;flex items-center justify-between&quot;>
                      <div className=&quot;flex-1&quot;>
                        <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>{item.name}</h3>
                        <p className=&quot;text-zion-cyan font-medium text-xl&quot;>${item.price.toFixed(2)}</p>
=======
                <Card className="bg-zion-blue-light/80 border-zion-cyan/20 hover:border-zion-cyan/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{_item.name}</h3>
                        <p className="text-zion-cyan font-medium text-xl">${_item.price.toFixed(2)}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                      
                      <div className=&quot;flex items-center gap-4&quot;>
                        <div className=&quot;flex items-center gap-2&quot;>
                          <Button
<<<<<<< HEAD
                            variant=&quot;outline&quot;
                            size=&quot;sm&quot;
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className=&quot;h-8 w-8 p-0&quot;
                          >
                            -
                          </Button>
                          <span className=&quot;text-white w-8 text-center font-medium&quot;>{item.quantity}</span>
                          <Button
                            variant=&quot;outline&quot;
                            size=&quot;sm&quot;
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className=&quot;h-8 w-8 p-0&quot;
=======
                            variant="outline"
                            size="sm"
                            onClick={_() => updateQuantity(item.id, _Math.max(1, _item.quantity - 1))}
                            className="h-8 w-8 p-0"
                          >
                            -
                          </Button>
                          <span className="text-white w-8 text-center font-medium">{_item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={_() => updateQuantity(item.id, _item.quantity + 1)}
                            className="h-8 w-8 p-0"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          >
                            +
                          </Button>
                        </div>
                        
<<<<<<< HEAD
                        <div className=&quot;text-right&quot;>
                          <p className=&quot;text-white font-semibold&quot;>
                            ${(item.price * item.quantity).toFixed(2)}
=======
                        <div className="text-right">
                          <p className="text-white font-semibold">
                            ${_(item.price * item.quantity).toFixed(2)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </p>
                          <div className=&quot;flex flex-col items-end gap-1&quot;>
                            <Button
<<<<<<< HEAD
                              variant=&quot;outline&quot;
                              size=&quot;sm&quot;
                              onClick={() => removeItem(item.id)}
                              className=&quot;text-red-400 border-red-400 hover:bg-red-400/10&quot;
=======
                              variant="outline"
                              size="sm"
                              onClick={_() => removeItem(item.id)}
                              className="text-red-400 border-red-400 hover:bg-red-400/10"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            >
                              Remove
                            </Button>
                            <Button
<<<<<<< HEAD
                              variant=&quot;ghost&quot;
                              size=&quot;sm&quot;
                              onClick={() => saveForLater(item.id, item.name)}
                              className=&quot;text-zion-cyan hover:bg-zion-cyan/10&quot;
=======
                              variant="ghost"
                              size="sm"
                              onClick={_() => saveForLater(item.id, _item.name)}
                              className="text-zion-cyan hover:bg-zion-cyan/10"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            >
                              Add to Wishlist
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {_/* Order Summary */}
          <motion.div
<<<<<<< HEAD
            className=&quot;lg:col-span-1&quot;
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
=======
            className="lg:col-span-1"
            initial={_{ opacity: 0, _x: 20}}
            animate={_{ opacity: 1, _x: 0}}
            transition={_{ delay: 0.4}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <Card className=&quot;bg-zion-blue-light/80 border-zion-cyan/20 sticky top-8&quot;>
              <CardHeader>
                <CardTitle className=&quot;text-white flex items-center gap-2&quot;>
                  <CreditCard className=&quot;h-5 w-5 text-zion-cyan&quot; />
                  Order Summary
                </CardTitle>
              </CardHeader>
              
<<<<<<< HEAD
              <CardContent className=&quot;space-y-4&quot;>
                {/* Pricing Breakdown */}
                <div className=&quot;space-y-2&quot;>
                  <div className=&quot;flex justify-between text-zion-slate-light&quot;>
                    <span>Subtotal ({items.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
=======
              <CardContent className="space-y-4">
                {_/* Pricing Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-zion-slate-light">
                    <span>Subtotal ({_items.length} items)</span>
                    <span>${_subtotal.toFixed(2)}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                  
                  <div className=&quot;flex justify-between text-zion-slate-light&quot;>
                    <span>Estimated Tax</span>
                    <span>${_tax.toFixed(2)}</span>
                  </div>
                  
                  <div className=&quot;flex justify-between text-zion-slate-light&quot;>
                    <span>Shipping</span>
                    <span>{_shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
<<<<<<< HEAD
                  {shipping === 0 && (
                    <div className=&quot;text-center&quot;>
                      <Badge variant=&quot;secondary&quot; className=&quot;bg-green-500/20 text-green-400 border-green-500/30&quot;>
=======
                  {_shipping === 0 && (
                    <div className="text-center">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Free Shipping Applied!
                      </Badge>
                    </div>
                  )}
                  
                  <div className=&quot;border-t border-zion-cyan/20 pt-2&quot;>
                    <div className=&quot;flex justify-between text-white font-bold text-lg&quot;>
                      <span>Total</span>
                      <span>${_total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

<<<<<<< HEAD
                {/* Authentication Status */}
                <div className=&quot;border-t border-zion-cyan/20 pt-4&quot;>
                  {isAuthenticated && (
                    <div className=&quot;flex items-center gap-2 text-green-400 mb-4&quot;>
                      <User className=&quot;h-4 w-4&quot; />
                      <span className=&quot;text-sm&quot;>Signed in as {user?.email}</span>
=======
                {_/* Authentication Status */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  {_isAuthenticated && (
                    <div className="flex items-center gap-2 text-green-400 mb-4">
                      <User className="h-4 w-4" />
                      <span className="text-sm">Signed in as {user?.email}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  )}
                  
                  <Button 
<<<<<<< HEAD
                    className=&quot;w-full bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue&quot; 
                    onClick={startCheckout} 
                    disabled={loading}
                    size=&quot;lg&quot;
=======
                    className="w-full bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue" 
                    onClick={_startCheckout} 
                    disabled={_loading}
                    size="lg"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_loading ? (
                      'Processing...'
                    ) : (
                      <>
                        Proceed to Checkout
                        <ArrowRight className=&quot;h-4 w-4 ml-2&quot; />
                      </>
                    )}
                  </Button>
                  
                  {_/* Login link removed to streamline guest checkout experience */}
                </div>

<<<<<<< HEAD
                {/* Security Features */}
                <div className=&quot;border-t border-zion-cyan/20 pt-4 space-y-2&quot;>
                  <div className=&quot;flex items-center gap-2 text-zion-slate-light text-sm&quot;>
                    <Shield className=&quot;h-4 w-4 text-green-400&quot; />
=======
                {_/* Security Features */}
                <div className="border-t border-zion-cyan/20 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <Shield className="h-4 w-4 text-green-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span>SSL Encrypted Checkout</span>
                  </div>
                  <div className=&quot;flex items-center gap-2 text-zion-slate-light text-sm&quot;>
                    <Package className=&quot;h-4 w-4 text-blue-400&quot; />
                    <span>30-Day Return Policy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {_/* Guest Checkout Modal */}
        <GuestCheckoutModal
          open={_guestOpen}
          onOpenChange={_setGuestOpen}
          onSubmit={_(_details) => handleCheckout(details)}
        />
      </div>
    </div>
  )
}
