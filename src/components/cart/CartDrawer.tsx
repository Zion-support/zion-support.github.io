import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import type { RootState } from '@/store';
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
import { LoginModal } from '@/components/auth/LoginModal';
export function CartDrawer() {
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
  const { isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React.useState(false);

<<<<<<< HEAD
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
          </span>
        )}
      </Link>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
