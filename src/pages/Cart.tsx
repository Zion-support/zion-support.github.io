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
    }
  },

  const saveForLater = (id: string, name: string) => {
    const wasWishlisted = isWishlisted(id),
    toggleWishlist(id),
    toast({
      title: wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist',
      description: wasWishlisted
        ? `${name} has been removed from your wishlist`
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
  
  // Only add shipping for physical items
  const hasPhysicalItems = items.some(item => 
    !item.type || item.type === 'physical' // Default to physical if type not specified
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
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className=&quot;bg-zion-blue-light/80 border-zion-cyan/20 hover:border-zion-cyan/40 transition-colors&quot;>
                  <CardContent className=&quot;p-6&quot;>
                    <div className=&quot;flex items-center justify-between&quot;>
                      <div className=&quot;flex-1&quot;>
                        <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>{item.name}</h3>
                        <p className=&quot;text-zion-cyan font-medium text-xl&quot;>${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className=&quot;flex items-center gap-4&quot;>
                        <div className=&quot;flex items-center gap-2&quot;>
                          <Button
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
                          >
                            +
                          </Button>
                        </div>
                        
                        <div className=&quot;text-right&quot;>
                          <p className=&quot;text-white font-semibold&quot;>
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <div className=&quot;flex flex-col items-end gap-1&quot;>
                            <Button
                              variant=&quot;outline&quot;
                              size=&quot;sm&quot;
                              onClick={() => removeItem(item.id)}
                              className=&quot;text-red-400 border-red-400 hover:bg-red-400/10&quot;
                            >
                              Remove
                            </Button>
                            <Button
                              variant=&quot;ghost&quot;
                              size=&quot;sm&quot;
                              onClick={() => saveForLater(item.id, item.name)}
                              className=&quot;text-zion-cyan hover:bg-zion-cyan/10&quot;
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

          {/* Order Summary */}
          <motion.div
            className=&quot;lg:col-span-1&quot;
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className=&quot;bg-zion-blue-light/80 border-zion-cyan/20 sticky top-8&quot;>
              <CardHeader>
                <CardTitle className=&quot;text-white flex items-center gap-2&quot;>
                  <CreditCard className=&quot;h-5 w-5 text-zion-cyan&quot; />
                  Order Summary
                </CardTitle>
              </CardHeader>
              
              <CardContent className=&quot;space-y-4&quot;>
                {/* Pricing Breakdown */}
                <div className=&quot;space-y-2&quot;>
                  <div className=&quot;flex justify-between text-zion-slate-light&quot;>
                    <span>Subtotal ({items.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className=&quot;flex justify-between text-zion-slate-light&quot;>
                    <span>Estimated Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className=&quot;flex justify-between text-zion-slate-light&quot;>
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  {shipping === 0 && (
                    <div className=&quot;text-center&quot;>
                      <Badge variant=&quot;secondary&quot; className=&quot;bg-green-500/20 text-green-400 border-green-500/30&quot;>
                        Free Shipping Applied!
                      </Badge>
                    </div>
                  )}
                  
                  <div className=&quot;border-t border-zion-cyan/20 pt-2&quot;>
                    <div className=&quot;flex justify-between text-white font-bold text-lg&quot;>
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Authentication Status */}
                <div className=&quot;border-t border-zion-cyan/20 pt-4&quot;>
                  {isAuthenticated && (
                    <div className=&quot;flex items-center gap-2 text-green-400 mb-4&quot;>
                      <User className=&quot;h-4 w-4&quot; />
                      <span className=&quot;text-sm&quot;>Signed in as {user?.email}</span>
                    </div>
                  )}
                  
                  <Button 
                    className=&quot;w-full bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue&quot; 
                    onClick={startCheckout} 
                    disabled={loading}
                    size=&quot;lg&quot;
                  >
                    {loading ? (
                      'Processing...'
                    ) : (
                      <>
                        Proceed to Checkout
                        <ArrowRight className=&quot;h-4 w-4 ml-2&quot; />
                      </>
                    )}
                  </Button>
                  
                  {/* Login link removed to streamline guest checkout experience */}
                </div>

                {/* Security Features */}
                <div className=&quot;border-t border-zion-cyan/20 pt-4 space-y-2&quot;>
                  <div className=&quot;flex items-center gap-2 text-zion-slate-light text-sm&quot;>
                    <Shield className=&quot;h-4 w-4 text-green-400&quot; />
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

        {/* Guest Checkout Modal */}
        <GuestCheckoutModal
          open={guestOpen}
          onOpenChange={setGuestOpen}
          onSubmit={(details) => handleCheckout(details)}
        />
      </div>
    </div>
  )
}
