import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Home, ShoppingBag, Users, User } from 'lucide-react'
import { cn } from "@/lib/utils";
export function BottomNavigation() {
  const router = useRouter($2);
  const navItems = [
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/marketplace", icon: <ShoppingBag />, label: "Marketplace" },
    { path: "/mobile/community", icon: <Users />, label: "Community" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],

  return (
    <div className = $2;
        return (
          <Link 
            key = $2;
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

