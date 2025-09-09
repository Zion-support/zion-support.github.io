import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { fireEvent } from '@/lib/analytics';

const UserProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useAuth(); // Destructure user as well, if needed for display or checks
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const toggleDropdown = () =>
    setIsOpen((o) => {
      const open = !o;
      fireEvent('profile_dropdown_toggle', { open });
      return open;
    });

  const handleLogout = () => {
    logout();
    setIsOpen(false); // Close dropdown after logout
    fireEvent('profile_dropdown_toggle', { open: false });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        fireEvent('profile_dropdown_toggle', { open: false });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement;
      setTimeout(() => {
        menuRef.current?.querySelector<HTMLElement>('a,button')?.focus();
      }, 0);
    } else {
      previouslyFocused.current?.focus();
    }
  }, [isOpen]);

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
            setTimeout(() => menuRef.current?.querySelector<HTMLElement>('a,button')?.focus(), 0);
          }
        }}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="User profile"
      >
        <Avatar className="h-8 w-8">
          {(user && typeof user !== 'boolean' && user.avatarUrl) ? (
            <AvatarImage src={user.avatarUrl} alt={(user && typeof user !== 'boolean' ? (user.displayName) : '') || 'User'} />
          ) : (
            <AvatarFallback>{((user && typeof user !== 'boolean' ? (user.displayName) : '') || 'U').charAt(0)}</AvatarFallback>
          )}
        </Avatar>
      </button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: 1000,
            minWidth: '150px',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: '8px 0' }}>
            <li style={{ padding: '8px 16px', whiteSpace: 'nowrap' }}>
              <Link href="/profile" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                Profile
              </Link>
            </li>
            <li style={{ padding: '8px 16px', whiteSpace: 'nowrap' }}>
              <Link href="/orders" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                Orders
              </Link>
            </li>
            <li style={{ padding: '8px 16px', whiteSpace: 'nowrap' }}>
              <Link href="/wallet" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                Wallet
              </Link>
            </li>
            <li style={{ padding: '8px 0 8px 16px', borderTop: '1px solid #ccc' }} role="none">
              <button
                onClick={handleLogout}
                style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%', padding: 0, cursor: 'pointer', color: 'inherit' }}
                role="menuitem"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
