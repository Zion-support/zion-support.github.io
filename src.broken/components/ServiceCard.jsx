import React from 'react';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useAppDispatch } from '@/store/hooks';
import { addToWishlist, getApiUrl } from '@/store/wishlistSlice';
}

export default function ServiceCard({ service, onSelect }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (onSelect) {
      onSelect(service.id);
    }
  };

  const handleSave = e => {
    e.stopPropagation();
    if (!user) {
      toast.info('Log in to save favorites');
      navigate(
        `/login?next=${encodeURIComponent(location.pathname + location.search)}`
      );
      return;
    }
    dispatch(addToWishlist({ id: service.id, type: 'service', data: service }));
    fetch(`${getApiUrl()}/wishlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: service.id, type: 'service' }),
    }).catch(() => {});
  };

  
    >
      <button
        onClick={handleSave}
        aria-label='save-to-wishlist'
        className='absolute top-2 right-2 text-zion-slate-light hover:text-zion-cyan'
      >
        <Heart className='w-4 h-4' />
      </button>
      <h3 className='text-white font-medium'>{service.title}</h3>
    </div>
  );

};
const handleSave = (e) => {
  e.stopPropagation ();
toast.info ('Log in to save favorites');
navigate (`/login?next=$ {
  encodeURIComponent (location.pathname + location.search) 
}`);
