<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { useSelector  } from 'react-redux';
import Link from 'next/link',
import type { RootState } from '@/store';
=======
}
  }
import { ShoppingCart } from 'lucide-react';import { useAuth } from '@/hooks/useAuth';import { ShoppingCart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';

export function CartDrawer() {;
  const items = useSelector((s: RootState) => s && s.cart.items);  const count = items && items.reduce((sum, i) => sum + i && i.quantity, 0);  const items = useSelector((s: RootState) => s && s.cart.items),;
  const count = items && items.reduce((sum, i) => sum + i && i.quantity, 0);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { ShoppingCart } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
export function CartDrawer() {

<<<<<<< HEAD
  const items = useSelector((s: RootState) => s.cart.items);  const count = items.reduce((sum, i) => sum + i.quantity, 0);  const items = useSelector((s: RootState) => s.cart.items)
import React from 'react'
import {useSelector} from 'react-redux'
import Link from 'next/link';
import type { RootState } from '@/store';
import { ShoppingCart } from 'lucide-react'; import { useAuth } from '@/hooks/useAuth'; import { ShoppingCart } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { LoginModal } from '@/components/auth/LoginModal';
export function CartDrawer() {;
  const items = useSelector((s: RootState) => s.cart.items);  const count = items.reduce((sum, i) => sum + i.quantity, 0);  const items = useSelector((s: RootState) => s.cart.items),
  const count = items.reduce((sum, i) => sum + i.quantity, 0)
  const { isAuthenticated } = useAuth()
  const [loginOpen, setLoginOpen] = React.useState(false)
  const handleClick = (e: React.MouseEvent,) => {
=======
  const { isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React && React.useState(false);



  const handleClick = (e: React.MouseEvent) => {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!isAuthenticated) {
      e.preventDefault()
      setLoginOpen(true)
    }
  }
import React from 'react',;
import { useSelector } from 'react-redux',;
import Link from 'next/link',;
import type { RootState } from '@/store',;
import { ShoppingCart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth',;
import { LoginModal } from '@/components/auth/LoginModal',;
export function CartDrawer() {;
  const items = useSelector((s: RootState) => s.cart.items),;
  const count = items.reduce((sum, i) => sum + i.quantity, 0),;
  const { isAuthenticated } = useAuth(),;
  const [loginOpen, setLoginOpen] = React.useState(false),;
  const handleClick = (e: React.MouseEvent) => {;
    if (!isAuthenticated) {;
      e.preventDefault();
      setLoginOpen(true);
    }
  },
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
  }
import { ShoppingCart } from 'lucide-react';import { useAuth } from '@/hooks/useAuth';import { ShoppingCart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';

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
  };
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>
      <Link href="/cart" aria-label="Cart" className="relative p-1" onClick={handleClick}>
        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
        {count > 0 && (
<<<<<<< HEAD
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
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

;

          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
            {count}

          </span>
        )}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </Link>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}

  );
}

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
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
