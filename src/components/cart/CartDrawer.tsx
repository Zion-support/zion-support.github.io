import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import type { RootState } from '@/store';
<<<<<<< HEAD
import { ShoppingCart } from 'lucide-react';import { useAuth } from '@/hooks/useAuth';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { ShoppingCart } from 'lucide-react';
=======
import { ShoppingCart } from 'lucide-react'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { ShoppingCart } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { useAuth } from '@/hooks/useAuth';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { LoginModal } from '@/components/auth/LoginModal';

export function CartDrawer() {
<<<<<<< HEAD
  const items = useSelector((s: RootState) => s.cart.items);  const count = items.reduce((sum, i) => sum + i.quantity, 0);
=======
<<<<<<< HEAD
<<<<<<< HEAD
  const items = useSelector((s: RootState) => s.cart.items);
=======
  const items = useSelector((s: RootState) => s.cart.items),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const items = useSelector((s: RootState) => s.cart.items),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const { isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setLoginOpen(true);
    }
  };

  return (
    <>
      <Link
        href='/cart'
        aria-label='Cart'
        className='relative p-1'
        onClick={handleClick}
      >
        <ShoppingCart className='h-5 w-5 text-foreground hover:text-primary' />
        {count > 0 && (
<<<<<<< HEAD
          <span className='absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center'>            {count}
=======
<<<<<<< HEAD
          <span className='absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center'>
=======

  const handleClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setLoginOpen(true)
    }
  };


  return (
    <>
      <Link href="/cart" aria-label="Cart" className="relative p-1" onClick={handleClick}>
        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {count}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </span>
        )}
      </Link>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
