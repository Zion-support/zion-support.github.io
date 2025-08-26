import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserMenu } from '@/components/header/UserMenu';

export default function PrimaryNav() {
  const [isLoggedIn] = useState(false);

  return (
    <nav className="w-full border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold">Zion</Link>
        <div className="flex items-center gap-3">
          {!isLoggedIn && (
            <>
              <Link to="/login" className="text-sm hover:text-primary" data-testid="login-link">
                Login
              </Link>
              <Link to="/signup" className="text-sm hover:text-primary">
                Sign up
              </Link>
            </>
          )}
          {isLoggedIn && <UserMenu />}
        </div>
      </div>
    </nav>
  );
}
