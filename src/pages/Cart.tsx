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
    }
  };

  const _saveForLater = (_id: string, _name: string) => {_const _wasWishlisted = isWishlisted(id);
    toggleWishlist(id);
    toast({
      title: wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist', _description: wasWishlisted
        ? `${name} has been removed from your wishlist`
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
  
  // Only add shipping for physical items
  const _hasPhysicalItems = items.some(item => 
    !item.type || item.type === 'physical' // Default to physical if type not specified
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
          >
            <div className="mb-8">
              <ShoppingCart className="mx-auto h-24 w-24 text-zion-slate-light mb-4" />
              <h1 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h1>
              <p className="text-zion-slate-light text-lg">
                Ready to start shopping? Browse our equipment and add items to your cart.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue">
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
    );
  }

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
          >
            {_items.map((item, _index) => (
              <motion.div
                key={item.id}
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ delay: index * 0.1}}
              >
                <Card className="bg-zion-blue-light/80 border-zion-cyan/20 hover:border-zion-cyan/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{_item.name}</h3>
                        <p className="text-zion-cyan font-medium text-xl">${_item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Button
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
                          >
                            +
                          </Button>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-white font-semibold">
                            ${_(item.price * item.quantity).toFixed(2)}
                          </p>
                          <div className="flex flex-col items-end gap-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={_() => removeItem(item.id)}
                              className="text-red-400 border-red-400 hover:bg-red-400/10"
                            >
                              Remove
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={_() => saveForLater(item.id, _item.name)}
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

          {_/* Order Summary */}
          <motion.div
            className="lg:col-span-1"
            initial={_{ opacity: 0, _x: 20}}
            animate={_{ opacity: 1, _x: 0}}
            transition={_{ delay: 0.4}}
          >
            <Card className="bg-zion-blue-light/80 border-zion-cyan/20 sticky top-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-zion-cyan" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {_/* Pricing Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-zion-slate-light">
                    <span>Subtotal ({_items.length} items)</span>
                    <span>${_subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-zion-slate-light">
                    <span>Estimated Tax</span>
                    <span>${_tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-zion-slate-light">
                    <span>Shipping</span>
                    <span>{_shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  {_shipping === 0 && (
                    <div className="text-center">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        Free Shipping Applied!
                      </Badge>
                    </div>
                  )}
                  
                  <div className="border-t border-zion-cyan/20 pt-2">
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Total</span>
                      <span>${_total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {_/* Authentication Status */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  {_isAuthenticated && (
                    <div className="flex items-center gap-2 text-green-400 mb-4">
                      <User className="h-4 w-4" />
                      <span className="text-sm">Signed in as {user?.email}</span>
                    </div>
                  )}
                  
                  <Button 
                    className="w-full bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue" 
                    onClick={_startCheckout} 
                    disabled={_loading}
                    size="lg"
                  >
                    {_loading ? (
                      'Processing...'
                    ) : (
                      <>
                        Proceed to Checkout
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                  
                  {_/* Login link removed to streamline guest checkout experience */}
                </div>

                {_/* Security Features */}
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

        {_/* Guest Checkout Modal */}
        <GuestCheckoutModal
          open={_guestOpen}
          onOpenChange={_setGuestOpen}
          onSubmit={_(_details) => handleCheckout(details)}
        />
      </div>
    </div>
  );
}
