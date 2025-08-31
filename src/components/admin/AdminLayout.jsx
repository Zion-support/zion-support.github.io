import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
=======
import { Link } from 'react-router-dom';
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
const navItems = [
    { title: 'Products', href: '/admin/products' },
    { title: 'Services', href: '/admin/services' },
    { title: 'Users', href: '/admin/users' },
    { title: 'Reports', href: '/admin/reports' },
];
export function AdminLayout({ children }) {
    return (<div className="flex min-h-screen">
      <aside className="w-64 border-r p-6 space-y-2 bg-muted/50">
        <h2 className="font-semibold text-lg mb-4">Back Office</h2>
        <nav className="space-y-1">
          {navItems.map((item) => (<Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm hover:bg-accent">
              {item.title}
            </Link>))}
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
<<<<<<< HEAD
    </div>);

export default AdminLayout;
}
=======
    </div>)}
export default AdminLayout;

export default AdminLayout;
export default AdminLayout;
export default AdminLayout;
export default AdminLayout;
export default AdminLayout;
export default AdminLayout;
export default AdminLayout;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
