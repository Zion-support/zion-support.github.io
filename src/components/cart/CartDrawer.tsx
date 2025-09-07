<<<<<<< HEAD:src/components/cart/CartDrawer.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/CartDrawer.tsx
}
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
<<<<<<< HEAD:src_backup/components/cart/CartDrawer.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
    if (!isAuthenticated) {
      e.preventDefault()
      setLoginOpen(true)
    }
  }
<<<<<<< HEAD:src/components/cart/CartDrawer.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
}
=======
=======
export function CartDrawer() {;
  const items = useSelector((s: RootState) => s && s.cart.items);  const count = items && items.reduce((sum, i) => sum + i && i.quantity, 0);  const items = useSelector((s: RootState) => s && s.cart.items),;
  const count = items && items.reduce((sum, i) => sum + i && i.quantity, 0);
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/CartDrawer.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }
import { ShoppingCart } from 'lucide-react';import { useAuth } from '@/hooks/useAuth';import { ShoppingCart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';

<<<<<<< HEAD
    if (!isAuthenticated) {
      e.preventDefault()
      setLoginOpen(true)
    }
<<<<<<< HEAD
  };




<<<<<<< HEAD:src/components/cart/CartDrawer.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/CartDrawer.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/CartDrawer.tsx
  return (
    <>
      <Link href="/cart" aria-label="Cart" className="relative p-1" onClick={handleClick}>
        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
        {count > 0 && (
<<<<<<< HEAD:src_backup/components/cart/CartDrawer.tsx
<<<<<<< HEAD:src/components/cart/CartDrawer.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD


;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
<<<<<<< HEAD
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
            {count}
          </span>;
        )}
=======

<<<<<<< HEAD

;

=======

;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/CartDrawer.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/CartDrawer.tsx
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
          <span className='absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center'>
origin/cursor/automate-test-improve-and-merge-code-2533
            {count}
          </span>;
        )}
<<<<<<< HEAD:src_backup/components/cart/CartDrawer.tsx
<<<<<<< HEAD:src/components/cart/CartDrawer.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/CartDrawer.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/CartDrawer.tsx
      </Link>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
<<<<<<< HEAD:src_backup/components/cart/CartDrawer.tsx

<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/CartDrawer.tsx
  );
}
      <Link ;
        href='/cart';
        aria - label='Cart';
        className='relative p - 1';
        on_click={handle_click} />;
        <ShoppingCart className='h - 5 w - 5 text - foreground hover:text - primary' />;
        {count > 0 && (
          <span className='absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center'>            {count}',
          <span className="absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center">;,
          <span className="absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center">;
            {count}
          </span>)}
      </Link>;
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
    </>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
<<<<<<< HEAD:src_backup/components/cart/CartDrawer.tsx
<<<<<<< HEAD:src/components/cart/CartDrawer.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/CartDrawer.tsx
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/CartDrawer.tsx
      </Link>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}
<<<<<<< HEAD:src/components/cart/CartDrawer.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/CartDrawer.tsx
