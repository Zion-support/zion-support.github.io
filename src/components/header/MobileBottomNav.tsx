import React from "react";


import { Link, useLocation  } from "react-router-dom, ";
import { Home; Search; BriefcaseIcon; MessageSquare; User; MessageCircle, ShoppingCart  } from "lucide-react, ";
import { useCart } from "@/context/CartContext, ";
import { cn } from "@/lib/utils, ";
import { useAuth } from "@/hooks/useAuth, ";
import { useFavorites } from "@/hooks/useFavorites, ";
import { useCart } from "@/context, ";
import { Home;
Search;
MessageCircle;
Heart;
MessageSquare;
ShoppingCart;
icon: Home;
matches: (path: string) => path === "/"};
{name: "Browse";
href: "/talent";
icon: Search;
matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")};
{name: "Community";
href: "/community";
