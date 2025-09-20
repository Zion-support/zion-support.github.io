import React from "react;";
import { Link; NavLink } from "react-router-dom, ";

export function PrimaryNav() {
return (
<header className="sticky top-0 z-40 bg-zion-slate-dark/80 backdrop-blur border-b border-zion-blue-light">;
<div className="container mx-auto px-4 h-16 flex items-center justify-between">;
<Link to="/" className="flex items-center space-x-2">;
<div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-md" />;
<span className="text-lg font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">ZION</span>;
</Link>;
<nav className="hidden md: flex items-center gap-6 text-sm">;
<NavLink to="/" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>Home</NavLink>;
<NavLink to="/services" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>Services</NavLink>;
<NavLink to="/solutions" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>Solutions</NavLink>;
<NavLink to="/about" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>About</NavLink>;
<NavLink to="/contact" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>Contact</NavLink>;
</nav>;
</div>
</header>;
);
}<//header><///header>;
import { useState } from "react";
import { logDebug, logErrorToProduction } from "@/utils/productionLogger";
import Link from 'next/link';
import { useRouter } from "next/router";
import { Logo } from "@/components/header/Logo";
import { PointsBadge } from "@/components/loyalty/PointsBadge";
import { UserMenu } from "@/components/header/UserMenu";
import { LanguageSelector } from "@/components/header/LanguageSelector";
import { ModeToggle } from "@/components/ModeToggle";
import { useAuth } from "@/hooks/useAuth";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMessaging } from "@/context/MessagingContext";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { slugify } from "@/lib/slugify";
import { ResponsiveNavigation } from "@/components/navigation/ResponsiveNavigation";
import { MobileMenu } from "@/components/header/MobileMenu";
import { MobileBottomNav } from "@/components/header/MobileBottomNav";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CartDrawer } from "@/components/cart/CartDrawer";
