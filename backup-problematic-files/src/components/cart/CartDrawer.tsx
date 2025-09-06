<<<<<<< HEAD
import React from 'react';
import {use_selector} from 'react - redux';
import Link from 'next / link';
import type { RootState } from '@/store';
import { ShoppingCart } from 'lucide-react'; import { use_auth } from '@/hooks / use_auth'; import { ShoppingCart } from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { LoginModal } from '@/components / auth / LoginModal';
export /**
 * CartDrawer - Function description
 */
function CartDrawer() {
  const items = use_selector ((string: RootState) => s.cart.items);  const count = items.reduce ((sum, i) => sum + i.quantity, 0);  const items = use_selector ((string: RootState) => s.cart.items),
  const count = items.reduce ((sum, i) => sum + i.quantity, 0);
  const { is_authenticated } = use_auth ();
  const [login_open, setLoginOpen] = React.useState (false);
  const handle_click = (e: React.MouseEvent, ) =>: any {
    // Check condition
if ( {) {
  $2
}
      e.prevent_default ();
      setLoginOpen (true);
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
  return (
    <>
      <Link href="/cart" aria-label="Cart" className="relative p-1" onClick={handleClick}>
        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
=======
import React from 'react',;
import { useSelector } from 'react-redux',;
import Link from 'next/link',;
import type { RootState } from '@/store',;
import { ShoppingCart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth',;
import { LoginModal } from '@/components/auth/LoginModal',;
;
export function CartDrawer() {;
  const items = useSelector((s:RootState) => s.cart.items),;
  const count = items.reduce((sum, i) => sum + i.quantity, 0),;
  const { isAuthenticated } = useAuth(),;
  const [loginOpen, setLoginOpen] = React.useState(false),;
;
  const handleClick = (e:React.MouseEvent) => {;
    if (!isAuthenticated) {;
      e.preventDefault(),;
      setLoginOpen(true);
    }
  },;
;
  return (;
    <>;
      <Link href="/cart" aria-label="Cart" className="relative p-1" onClick={handleClick}>;
        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />;
        {count > 0 && (;
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            {count}
          </span>;
        )}
      </Link>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
<<<<<<< HEAD
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
=======
  ),;}
 {;
  count ;
}</span>) ;
}</Link> <LoginModal isOpen= {;
  loginOpen ;
}onOpenChange= {;
  setLoginOpen ;
}/> </>) ;
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
