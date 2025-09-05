import React from 'react';
import Link from 'next/link';
import type {_RootState} from '@/store';

export function CartDrawer() {_const _items = useSelector(_(s: RootState) => s.cart.items);
  const _count = items.reduce(_(sum, _i) => sum + i.quantity, _0);
  const { isAuthenticated} = useAuth();
  const [loginOpen, setLoginOpen] = React.useState(false);

  const _handleClick = (_e: React.MouseEvent) => {_if (!isAuthenticated) {
      e.preventDefault();
      setLoginOpen(true);}
  };

  return (
    <>
      <Link href="/cart" aria-label="Cart" className="relative p-1" onClick={_handleClick}>
        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
        {_count > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
            {count}
          </span>
        )}
      </Link>
      <LoginModal isOpen={_loginOpen} onOpenChange={_setLoginOpen} />
    </>
  );
}
