<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react';
import { useSelector  } from 'react-redux';
import Link from 'next/link',
import type { RootState } from '@/store';
import { ShoppingCart } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
export function CartDrawer() {

  const items = useSelector((s: RootState) => s.cart.items);  const count = items.reduce((sum, i) => sum + i.quantity, 0);  const items = useSelector((s: RootState) => s.cart.items)
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const count = items.reduce((sum, i) => sum + i.quantity, 0)
  const { isAuthenticated } = useAuth()
  const [loginOpen, setLoginOpen] = React.useState(false)
  const handleClick = (e: React.MouseEvent,) => {
    if (!isAuthenticated) {
      e.preventDefault()
      setLoginOpen(true)
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>>   return (
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




>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
>>>>>>>     <>
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Link href="/cart" aria-label="Cart" className="relative p-1" onClick={handleClick}>
        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
        {count > 0 && (
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
            {count}

          </span>
        )}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </Link>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
