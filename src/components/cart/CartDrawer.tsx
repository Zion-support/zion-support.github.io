import React from 'react';
import { useSelector  } from 'react-redux';
import Link from 'next/link',
import type { RootState } from '@/store';
<<<<<<< HEAD
import { ShoppingCart } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
export function CartDrawer() {

  const items = useSelector((s: RootState) => s.cart.items);  const count = items.reduce((sum, i) => sum + i.quantity, 0);  const items = useSelector((s: RootState) => s.cart.items)
  const count = items.reduce((sum, i) => sum + i.quantity, 0)
  const { isAuthenticated } = useAuth()
  const [loginOpen, setLoginOpen] = React.useState(false)
  const handleClick = (e: React.MouseEvent,) => {
    if (!isAuthenticated) {
      e.preventDefault()
      setLoginOpen(true)
    }
  }
=======
import { ShoppingCart } from 'lucide-react';import { useAuth } from '@/hooks/useAuth';import { ShoppingCart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';

export function CartDrawer() {;
  const items = useSelector((s: RootState) => s && s.cart.items);  const count = items && items.reduce((sum, i) => sum + i && i.quantity, 0);  const items = useSelector((s: RootState) => s && s.cart.items),;
  const count = items && items.reduce((sum, i) => sum + i && i.quantity, 0);
  const { isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React && React.useState(false);

  const handleClick = (e: React && React.MouseEvent,) => {;
    if (!isAuthenticated) {;
      e && e.preventDefault();
      setLoginOpen(true);
    }
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
    <>;
      <Link
        href='/cart'
        aria-label='Cart'
        className='relative p-1'
        onClick={handleClick}>;
        <ShoppingCart className='h-5 w-5 text-foreground hover:text-primary' />;
        {count > 0 && (;
          <span className='absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center'>            {count}
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">;
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">;
            {count}
          </span>;
        )}
<<<<<<< HEAD
      </Link>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  )
}
=======
      </Link>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
