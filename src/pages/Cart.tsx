import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Skeleton from '@/components/ui/skeleton';
import { useAuth } from '@/hooks/useAuth';
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
            animate={{ opacity: 1, y: 0 }}><div className="mb-8">
              <ShoppingCart className="mx-auto h-24 w-24 text-zion-slate-light mb-4" />
              <h1 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h1>
              <p className="text-zion-slate-light text-lg">
                Ready to start shopping? Browse our equipment and add items to your cart.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" min={1} value={item.quantity} onChange={e => updateQuantity(item.id, parseInt(e.target.value || '1', 10))} className="w-16 bg-transparent border border-input rounded p-1 text-center"/>
              <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>
                Remove
              </Button>
            </div>
          </li>))}
      </ul>
      <div className="mt-6 flex items-center gap-2">
        <input type="text" value={code} onChange={e => setCode(e.target.value)} placeholder="Apply Coupon / Gift Card" className="flex-1 bg-transparent border border-input rounded p-2"/>
        <Button variant="outline" onClick={applyCode}>
          Apply
        </Button>
      </div>
    )
  }

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}><h1 className="text-4xl font-bold text-white mb-2">Your Cart</h1>
          <p className="text-zion-slate-light">
            {items.length} {items.length === 1 ? 'item' : 'items'} ready for checkout
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <motion.div 
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}>{items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}><Card className="bg-zion-blue-light/80 border-zion-cyan/20 hover:border-zion-cyan/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                        <p className="text-zion-cyan font-medium text-xl">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="h-8 w-8 p-0"
                          >
                            -
                          </Button>
                          <span className="text-white w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            +
                          </Button>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-white font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <div className="flex flex-col items-end gap-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-400 border-red-400 hover:bg-red-400/10"
                            >
                              Remove
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => saveForLater(item.id, item.name)}
                              className="text-zion-cyan hover:bg-zion-cyan/10"
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
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}><Card className="bg-zion-blue-light/80 border-zion-cyan/20 sticky top-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-zion-cyan" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Pricing Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-zion-slate-light">
                    <span>Subtotal ({items.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-zion-slate-light">
                    <span>Estimated Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-zion-slate-light">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  {shipping === 0 && (
                    <div className="text-center">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        Free Shipping Applied!
                      </Badge>
                    </div>
                  )}
                  
                  <div className="border-t border-zion-cyan/20 pt-2">
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Authentication Status */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  {isAuthenticated && (
                    <div className="flex items-center gap-2 text-green-400 mb-4">
                      <User className="h-4 w-4" />
                      <span className="text-sm">Signed in as {user?.email}</span>
                    </div>
                  )}
                  
                  <Button 
                    className="w-full bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue" 
                    onClick={startCheckout} 
                    disabled={loading}
                    size="lg">{loading ? (
                      'Processing...'
                    ) : (
                      <>
                        Proceed to Checkout
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                  
                  {/* Login link removed to streamline guest checkout experience */}
                </div>

                {/* Security Features */}
                <div className="border-t border-zion-cyan/20 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span>SSL Encrypted Checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <Package className="h-4 w-4 text-blue-400" />
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
      <Button className="mt-4 w-full" onClick={() => user ? navigate('/checkout') : navigate('/login?next=/checkout')}>
        {user ? 'Checkout' : 'Login to Checkout'}
      </Button>
    </div>);
}
