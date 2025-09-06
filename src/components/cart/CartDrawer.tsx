<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { useSelector  } from 'react-redux';
import Link from 'next/link',
import type { RootState } from '@/store';
import { ShoppingCart } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
export function CartDrawer() {

  const items = useSelector((s: RootState) => s.cart.items);  const count = items.reduce((sum, i) => sum + i.quantity, 0);  const items = useSelector((s: RootState) => s.cart.items)
=======
import React from 'react'
import {useSelector} from 'react-redux'
import Link from 'next/link';
import type { RootState } from '@/store';
import { ShoppingCart } from 'lucide-react'; import { useAuth } from '@/hooks/useAuth'; import { ShoppingCart } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { LoginModal } from '@/components/auth/LoginModal';
export function CartDrawer() {;
  const items = useSelector((s: RootState) => s.cart.items);  const count = items.reduce((sum, i) => sum + i.quantity, 0);  const items = useSelector((s: RootState) => s.cart.items),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const count = items.reduce((sum, i) => sum + i.quantity, 0)
  const { isAuthenticated } = useAuth()
  const [loginOpen, setLoginOpen] = React.useState(false)
  const handleClick = (e: React.MouseEvent,) => {
    if (!isAuthenticated) {
      e.preventDefault()
      setLoginOpen(true)
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    }
  }
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import { ShoppingCart } from 'lucide-react';import { useAuth } from '@/hooks/useAuth';import { ShoppingCart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';

export function CartDrawer() {;
  const items = useSelector((s: RootState) => s && s.cart.items);  const count = items && items.reduce((sum, i) => sum + i && i.quantity, 0);  const items = useSelector((s: RootState) => s && s.cart.items),;
  const count = items && items.reduce((sum, i) => sum + i && i.quantity, 0);

<<<<<<< HEAD
=======
import { ShoppingCart } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';

export function CartDrawer() {
  const items = useSelector((s: RootState) => s.cart.items),
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  const { isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React && React.useState(false);


=======

  const handleClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setLoginOpen(true)
    }
  };


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (
    <>
      <Link href="/cart" aria-label="Cart" className="relative p-1" onClick={handleClick}>
        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
        {count > 0 && (
<<<<<<< HEAD

=======
<<<<<<< HEAD
          <span className='absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center'>            {count}
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
            {count}
          </span>
        )}
      </Link>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
            {count}

          </span>
        )}

      </Link>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
<<<<<<< HEAD

  );
}

=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
      <Link;
        href='/cart';
        aria - label='Cart';
        className='relative p - 1';
        on_click={handle_click}
      >;
        <ShoppingCart className='h - 5 w - 5 text - foreground hover:text - primary' />;
        {count > 0 && (
          <span className='absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center'>            {count}
          <span className="absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center">;
          <span className="absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center">;
            {count}
          </span>)}
      </Link>;
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
