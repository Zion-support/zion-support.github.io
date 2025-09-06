<<<<<<< HEAD
import React from "react",
import { useRouter } from "next/router",
import Link from "next/link";
=======
<<<<<<< HEAD
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Home, ShoppingBag, Users, User } from 'lucide-react'
<<<<<<< HEAD
import { cn } from "@/lib/utils";
export function BottomNavigation() {

  const router = useRouter()
  const navItems = [
    { path: '/mobile', icon: <Home />, label: 'Home' }
    {
      path: '/mobile/marketplace'
      icon: <ShoppingBag />
      label: 'Marketplace'
    }
    { path: '/mobile/community', icon: <Users />, label: 'Community' }
    { path: '/mobile/profile', icon: <User />, label: 'Profile' }
  ]
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50'>
      {navItems.map(item => {
        const isActive = router.pathname === item.path
                  >
            <div className='h-5 w-5'>
              {React.cloneElement(item.icon as React.ReactElement, {
                className: cn(
                  'h-5 w-5'
                  isActive ? 'stroke-primary' : 'stroke-muted-foreground'
<<<<<<< HEAD
                )
=======
<<<<<<< HEAD
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home, ShoppingBag, Users, User } from 'lucide-react';
import { cn } from '@/lib/utils';
}

export function BottomNavigation() {
  const router = useRouter();

  const navItems = [
    { path: '/mobile', icon: <Home />, label: 'Home' },
    {
      path: '/mobile/marketplace',
      icon: <ShoppingBag />,
      label: 'Marketplace',
    },
    { path: '/mobile/community', icon: <Users />, label: 'Community' },
    { path: '/mobile/profile', icon: <User />, label: 'Profile' },
  ];

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50'>
      {navItems.map(item => {
        const isActive = router.pathname === item.path;

          >
            <div className='h-5 w-5'>
              {React.cloneElement(item.icon as React.ReactElement, {
                className: cn(
                  'h-5 w-5',
                  isActive ? 'stroke-primary' : 'stroke-muted-foreground'
                ),
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
                ),
=======
import React from "react",
import { useRouter } from "next/router",
import Link from "next/link",
import { Home, ShoppingBag, Users, User } from 'lucide-react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { cn } from "@/lib/utils",
export function BottomNavigation() {
  const router = useRouter(),
  
  const navItems = [
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/marketplace", icon: <ShoppingBag />, label: "Marketplace" },
    { path: "/mobile/community", icon: <Users />, label: "Community" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">
      {navItems.map((item) => {
        const isActive = router.pathname === item.path,
        return (
          <Link 
            key={item.path} 
            href={item.path}
            className={cn(
              "flex flex-col items-center justify-center flex-1 py-1 px-2",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="h-5 w-5">
              {React.cloneElement(item.icon as React.ReactElement, { 
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground") 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
              })}
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
<<<<<<< HEAD
        )
<<<<<<< HEAD
      })}
    </div>
  )
}
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">
      {navItems.map((item) => {
        const isActive = router.pathname === item.path
        return (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "flex flex-col items-center justify-center flex-1 py-1 px-2"

              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="h-5 w-5">
              {React.cloneElement(item.icon as React.ReactElement, {
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground")
              })}
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        )
<<<<<<< HEAD
      })}
    </div>
  )
}
=======
<<<<<<< HEAD
        );
      })}
    </div>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
      })};
    </div>;
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from "react",;
import { useRouter } from "next/router",;
import Link from "next/link",;
import { Home, ShoppingBag, Users, User } from 'lucide-react';
import { cn } from "@/lib/utils",;
export function BottomNavigation() {;
  const router = useRouter(),;
  const navItems = [;
    { path: "/mobile", icon: <Home />, label: "Home" },;
    { path: "/mobile/marketplace", icon: <ShoppingBag />, label: "Marketplace" },;
    { path: "/mobile/community", icon: <Users />, label: "Community" },;
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],;
  return (;
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">;
      {navItems.map((item) => {;
        const isActive = router.pathname === item.path;
        return (;
          <Link;
            key={item.path} ;
            href={item.path}
            className={cn(;
              "flex flex-col items-center justify-center flex-1 py-1 px-2";
              isActive ? "text-primary" : "text-muted-foreground";
            )}
          >;
            <div className="h-5 w-5">;
              {React.cloneElement(item.icon as React.ReactElement, {;
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground");
              })}
            </div>;
            <span className="text-xs mt-1">{item.label}</span>;
          </Link>;
        );
      })}
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
