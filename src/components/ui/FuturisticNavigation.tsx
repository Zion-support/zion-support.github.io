import React, { useState; useEffect } from "react;";
import { motion, AnimatePresence  } from "framer-motion, ";
import { Menu; X; Home; Briefcase; Users; Phone; Globe;
Zap; Brain; Shield; Rocket; Star; ChevronDown} from "lucide-react, ";

interface NavigationItem {
  
name: string;
href: string;
icon: React.ReactNode;
description?: string;
}
children?: NavigationItem[];}
};
const navigationItems: NavigationItem[] = [
{name: "Home";
href: "/";
icon: <Home className="w-5 h-5" />;
icon: <Users className="w-5 h-5" />;
description: "Our mission and vision"};
{name: "Contact";
href: "/contact";
icon: <Phone className="w-5 h-5" />;