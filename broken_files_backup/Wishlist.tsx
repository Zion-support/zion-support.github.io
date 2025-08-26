import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToWishlist, loadWishlistFromDB, removeFromWishlist } from '@/store/wishlistSlice';
import { useAuth } from '@/hooks/useAuth';
<<<<<<< HEAD:src/pages/Wishlist.tsx
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

export default function Wishlist() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.wishlist.items);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

=======
import { useRouter } from 'next/router'; // Changed from useNavigate
import { useEffect } from 'react'; // Added useEffect
export default function WishlistPage() {
  const { favorites, loading } = useFavorites();
  const { user, isLoading: isAuthLoading } = useAuth(); // Added isAuthLoading
  const router = useRouter(); // Changed from navigate
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/Wishlist.tsx
  useEffect(() => {
    if (!user) {
      navigate(`/login?next=${encodeURIComponent(location.pathname)}`);
      return;
    }
<<<<<<< HEAD:src/pages/Wishlist.tsx
    dispatch(loadWishlistFromDB(user.id!));
  }, [user, dispatch, navigate, location]);

  const handleRemove = (id: string) => {
    dispatch(removeFromWishlist({ id }));
  };

  const pathForItem = (item: { id: string; type: string }) => {
    switch (item.type) {
      case 'product':
        return `/marketplace/listing/${item.id}`;
      case 'service':
        return `/services/${item.id}`;
      case 'talent':
        return `/talent/${item.id}`;
      default:
        return '#';
    }
  };

=======
  }, [user, isAuthLoading, router]);
  if (isAuthLoading || !user) { // Show loading or null while auth check or redirect happens
    return null; // Or a loading spinner
  }
  const { items, dispatch } = useCart();
  const addToCart = (item: { id: string; title?: string; price?: number }) => {
    if (items.some(i => i.id === item.id)) return;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.title || 'Item',
        price: item.price || 0,
        quantity: 1
      }
    });
    toast.success(`1× ${item.title || 'Item'} added`);
  };
  const productMap = MARKETPLACE_LISTINGS.reduce<Record<string, any>>((acc, p) => {
    acc[p.id] = p;
    return acc;
  }, {});
  const talentMap = TALENT_PROFILES.reduce<Record<string, any>>((acc, t) => {
    acc[t.id] = t;
    return acc;
  }, {});
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/Wishlist.tsx
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Wishlist</h1>
      {items.length === 0 ? (
        <p>No items saved.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={`${item.type}-${item.id}`} className="border border-zion-blue-light p-4 rounded-lg flex justify-between items-center">
              <div>{item.data?.title || item.data?.full_name || item.id}</div>
              <div className="flex gap-2">
                <Link to={pathForItem(item)} className="text-zion-cyan underline">
                  Go to item
                </Link>
                <Button size="sm" variant="outline" onClick={() => handleRemove(item.id)}>
                  Remove
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
