<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/cart/CartDrawer.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


}
import { ShoppingCart } from 'lucide-react';import { useAuth } from '@/hooks/useAuth';import { ShoppingCart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';

import React from 'react';

import { useSelector  } from 'react-redux';
import Link from 'next/link',;
import type { RootState } from '@/store';
import { ShoppingCart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
export function CartDrawer() {
  const items = null;
<<<<<<< HEAD



=======
<<<<<<< HEAD
:src_backup/components/cart/CartDrawer.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
origin/cursor/automate-test-improve-and-merge-code-2533
    if (!isAuthenticated) {
      e.preventDefault()
      setLoginOpen(true)
    }
export function CartDrawer() {;
  const items = useSelector((s: RootState) => s && s.cart.items);  const count = items && items.reduce((sum, i) => sum + i && i.quantity, 0);  const items = useSelector((s: RootState) => s && s.cart.items),;
  const count = items && items.reduce((sum, i) => sum + i && i.quantity, 0);

import { ShoppingCart } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';

export function CartDrawer() {
  const items = useSelector((s: RootState) => s.cart.items),
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  const { isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React && React.useState(false);



  const handleClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setLoginOpen(true)
    }
<<<<<<< HEAD
  };
=======
  }
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
import { ShoppingCart } from 'lucide-react';import { useAuth } from '@/hooks/useAuth';import { ShoppingCart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';

  return (
    <>
      <Link href="/cart" aria-label="Cart" className="relative p-1" onClick={handleClick}>
        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
        {count > 0 && (

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/cart/CartDrawer.tsx

          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
          <span className='absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center'>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center>
          <span className='absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center>
=======
>>>>>>> merged-prs-20250907-203621
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
          <span className='absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center'>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
            {count}
          </span>;
        )}

<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/cart/CartDrawer.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


      </Link>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
});
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/cart/CartDrawer.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
      <Link;

;
}}
import { ShoppingCart } from 'lucide-react';import { useAuth } from '@/hooks/useAuth';import { ShoppingCart  } from 'lucide-react';
import { useAuth  } from '@/hooks/useAuth';
import { LoginModal  } from '@/components/auth/LoginModal';
import React from 'react';
import { useSelector   } from 'react-redux';
import Link from 'next/link',import type { RootState } from '@/store';
import { ShoppingCart  } from 'lucide-react';
export function CartDrawer() {const items  = null;if (!isAuthenticated) {e.preventDefault()setLoginOpen(true)}
  }import React from 'react',import { useSelector } from 'react-redux',import type { RootState } from '@/store',import { useAuth } from '@/hooks/useAuth',import { LoginModal } from '@/components/auth/LoginModal',export function CartDrawer() {const items = useSelector((s: RootState) => s.cart.items),const count = items.reduce((sum, i) => sum + i.quantity, 0),const { isAuthenticated } = useAuth(),const [loginOpen, setLoginOpen] = React.useState(false),const handleClick = (e: React.MouseEvent) => {if (!isAuthenticated) {e.preventDefault()setLoginOpen(true)}
  },export function CartDrawer() {const items = useSelector((s: RootState) => s && s.cart.items)const count = items && items.reduce((sum, i) => sum + i && i.quantity, 0)const items = useSelector((s: RootState) => s && s.cart.items),const count  = items && items.reduce((sum, i) => sum + i && i.quantity, 0)export function CartDrawer() {const items = useSelector((s: RootState) => s.cart.items),const count  = items.reduce((sum, i) => sum + i.quantity, 0)const { isAuthenticated } = useAuth()const [loginOpen, setLoginOpen]  = React && React.useState(false)const handleClick = (e: React.MouseEvent) => {if (!isAuthenticated) {e.preventDefault()setLoginOpen(true)}
  }return (<>;
      <Link href="/cart" aria-label="Cart" className="relative p-1" onClick={handleClick}>;
        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />;
        {count > 0 && (;
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">;
          <span className='absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center'>;
            {count}</span>;
        )}</Link>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  )})}<Link;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <Link ;
        href='/cart';
        aria - label='Cart';
        className='relative p - 1';
        on_click={handle_click} />;
        <ShoppingCart className='h - 5 w - 5 text - foreground hover:text - primary' />;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/cart/CartDrawer.tsx
        {count > 0 && (<span className='absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center'>            {count}
          <span className="absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center">;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        {count > 0 && (<span className='absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center'>            {count}
          <span className="absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center">;
        {count > 0 && (<span className=absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center'>            {count}
          <span className="absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {count > 0 && (
          <span className='absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center'>            {count}',
          <span className="absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center">;,
          <span className="absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center">;
            {count}
          </span>)}
      </Link>;
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
<<<<<<< HEAD
:src_backup/components/cart/CartDrawer.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </>);
}

;

      </Link>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/cart/CartDrawer.tsx
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
origin/cursor/automate-test-improve-and-merge-code-2533
    </>)}</Link>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  )}
}
=======
}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
