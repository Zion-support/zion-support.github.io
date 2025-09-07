<<<<<<< HEAD
<<<<<<<< HEAD:src/mobile/components/common/BottomNavigation.tsx
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
========
import { Home, ShoppingBag, Users, User } from 'lucide-react;
import { cn } from @/lib/utils';

export function BottomNavigation() {
  const router = useRouter();

  const navItems = [;
    { path: '/mobile, icon: <Home />, label: Home' },
    {
      path: '/mobile/marketplace,
      icon: <ShoppingBag />,
      label: Marketplace'},
    { path: '/mobile/community, icon: <Users />, label: Community' },
    { path: '/mobile/profile, icon: <User />, label: Profile' }];
import React from "react;
import { useRouter } from next/router";
import Link from "next/link;
>>>>>>>> merged-prs-20250907-203621:src_disabled_1757239864/mobile/components/common/BottomNavigation.tsx
import { Home, ShoppingBag, Users, User } from 'lucide-react'
import { cn } from @/lib/utils";
export function BottomNavigation() {
  
  const navItems = [
    { path: "/mobile, icon: <Home />, label: Home" },
    { path: "/mobile/marketplace, icon: <ShoppingBag />, label: Marketplace" },
    { path: "/mobile/community, icon: <Users />, label: Community" },
    { path: "/mobile/profile, icon: <User />, label: Profile" }],

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50>
      {navItems.map((item) => {
        const isActive = router.pathname === item.path;
=======
<<<<<<< HEAD
import React from "react",
import { useRouter } from "next/router",
import Link from "next/link";
                )
import React from "react",
import { useRouter } from "next/router",
import Link from "next/link";
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Home, ShoppingBag, Users, User } from 'lucide-react'
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
                )
                ),
import React from "react",
import { useRouter } from "next/router",
import Link from "next/link",
import { Home, ShoppingBag, Users, User } from 'lucide-react'
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
>>>>>>> merged-prs-20250907-203621
        return (
          <Link 
            key={item.path} 
            href={item.path}
            className={cn(
<<<<<<< HEAD
              flex flex-col items-center justify-center flex-1 py-1 px-2";
              isActive ? "text-primary : text-muted-foreground"
            )}
          >
            <div className="h-5 w-5>
              {React.cloneElement(item.icon as React.ReactElement, { 
                className: cn(h-5 w-5", isActive ? "stroke-primary : stroke-muted-foreground") 
=======
              "flex flex-col items-center justify-center flex-1 py-1 px-2",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="h-5 w-5">
              {React.cloneElement(item.icon as React.ReactElement, { 
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground") 
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
import React from "react",;
import { useRouter } from "next/router",;
import Link from "next/link",;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Home, ShoppingBag, Users, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BottomNavigation() {;
  const router = useRouter();

  const navItems = [;
    { path: '/mobile', icon: <Home />, label: 'Home' },;
    {;
      path: '/mobile/marketplace',;
      icon: <ShoppingBag />,;
      label: 'Marketplace',;
    },;
    { path: '/mobile/community', icon: <Users />, label: 'Community' },;
    { path: '/mobile/profile', icon: <User />, label: 'Profile' },;
  ];

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50'>;
      {navItems && navItems.map(item => {;
        const isActive = router && router.pathname === item && item.path;
                  >;
            <div className='h-5 w-5'>;
              {React && React.cloneElement(item && item.icon as React && React.ReactElement, {;
                className: cn(;
                  'h-5 w-5',;
                  isActive ? 'stroke-primary' : 'stroke-muted-foreground';
                ),;
>>>>>>> merged-prs-20250907-203621
              })}
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
      })}
    </div>
  )
}
      })};
    </div>;
  );
};
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


              {React.cloneElement(item.icon as React.ReactElement, { 
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground") 
          <Link;
            key={item.path}
            href={item.path}
            className={cn (
              "flex flex - col items - center justify - center flex - 1 py - 1 px - 2";
              is_active ? "text - primary" : "text - muted - foreground")}
          >;
            <div className="h - 5 w - 5">;
              {React.clone_element (item.icon as React.ReactElement, {
                class_name: cn ("h - 5 w - 5", is_active ? "stroke - primary" : "stroke - muted - foreground");
              })}
            </div>;
            <span className="text - xs mt - 1">{item.label}</span>;
          </Link>);
      })}

    </div>);
}

<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
