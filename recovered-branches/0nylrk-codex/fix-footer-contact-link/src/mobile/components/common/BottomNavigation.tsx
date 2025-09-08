
const navItems = [

    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],

import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Home, Search, Briefcase, MessageSquare, User} from "lucide-react";
import {cn} from "@/lib/utils";
export function BottomNavigation() {;
  const location = useLocation();

  const navItems = [;
    { path: "/mobile", icon: <Home />, label: "Home" },;
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },;
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },;
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },;
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],;import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";
export function BottomNavigation() {
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react",
import { cn } from "@/lib/utils",
export function BottomNavigation() {
  const location = useLocation(),
  
  const navItems = [
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],
