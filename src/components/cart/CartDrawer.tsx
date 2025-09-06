import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import type { RootState } from '@/store';
import { ShoppingCart } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
export function CartDrawer() {
  const items = $2;
  const count = items.reduce((sum, i) => sum + i.quantity, 0),
  const { isAuthenticated } = useAuth($2);
  const [loginOpen, setLoginOpen] = React.useState($2);
  const handleClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault($2);
      setLoginOpen(true)
    }
  },

  return (
    <>
      <Link href="/cart" aria-label="Cart" className="relative p-1" onClick={handleClick}>
        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
            {count}
          </span>
        )}
      </Link>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  )
}
