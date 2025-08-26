import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import apiClient from '@/services/apiClient';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const load = async () => {
      if (user) {
        try {
          const res = await fetch('/api/cart');
          if (res.ok) {
            const data = await res.json();
            dispatch(setItemsAction(data.items || []));
            return;
          }
        } catch (err) {
          console.error('Failed to fetch cart', err);
        }
      }
      const stored = safeStorage.getItem('zion_cart');
      if (stored) {
        try {
          dispatch(setItemsAction(JSON.parse(stored) as CartItemType[]));
        } catch {
          dispatch(setItemsAction([]));
        }
      } else {
        dispatch(setItemsAction([]));
      }
    };
    load();
  }, [user, dispatch]);

  const updateQuantity = async (id: string, qty: number) => {
    dispatch(updateQuantityAction({ id, quantity: qty }));
    if (user) {
      try {
        await fetch('/api/cart', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, quantity: qty }),
        });
      } catch (err) {
        console.error('Failed to update cart', err);
      }
    }
  };

  const removeItem = (id: string) => {
    dispatch(removeItemAction(id));
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const applyCode = async () => {
    try {
      const res = await apiClient.post('/coupons/validate', {
        code,
        amount: subtotal,
      });
      setDiscount(res.data.discount || 0);
    } catch (e) {
      setDiscount(0);
    }
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = subtotal - discount;

  if (items.length === 0) {
    return (
      <div className="container py-10 text-center">
        <img src="/placeholder.svg" alt="Empty cart" className="mx-auto mb-4" />
        <p>Your cart is empty</p>
        <Button asChild className="mt-4">
          <Link href="/marketplace">Browse Marketplace</Link>
        </Button>
      </div>
    );
  }

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={e => updateQuantity(item.id, parseInt(e.target.value || '1', 10))}
                className="w-16 bg-transparent border border-input rounded p-1 text-center"
              />
              <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center gap-2">
        <input
          type="text"
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Apply Coupon / Gift Card"
          className="flex-1 bg-transparent border border-input rounded p-2"
        />
        <Button variant="outline" onClick={applyCode}>
          Apply
        </Button>
      </div>
      <div className="flex justify-between mt-6 font-semibold">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      {discount > 0 && (
        <div className="flex justify-between font-semibold text-green-600">
          <span>Discount</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
      )}
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <Button className="mt-4 w-full" onClick={() => navigate('/checkout')}>
        Checkout
      </Button>
    </div>
  );
}
