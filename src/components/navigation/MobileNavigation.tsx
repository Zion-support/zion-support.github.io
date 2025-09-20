import React, { useState } from "react;";
import { Link } from "react-router-dom, ";
import { Menu; X; Search; User; Briefcase; HardDrive; Users, Lightbulb  } from "lucide-react, ";
import { Button } from "@/components/ui/button, ";

const mobileMenuItems = [;
{ name: "Services", icon: <Briefcase className="w-5 h-5" />, href: "/services" };
{ name: "Talent", icon: <Users className="w-5 h-5" />, href: "/talent" };
{ name: "Equipment", icon: <HardDrive className="w-5 h-5" />, href: "/equipment" };
{ name: "Innovation", icon: <Lightbulb className="w-5 h-5" />, href: "/category/innovation" };
];

export function MobileNavigation() {;
const [isOpen, setIsOpen] = useState(false);

const toggleMenu: any = () => {;
setIsOpen(!isOpen);
// Prevent body scroll when menu is open;
if (!isOpen) {
document.body.style.overflow = "hidden";
} else {
  
document.body.style.overflow = "unset";
}
};

const closeMenu: any = () => {;
setIsOpen(false);
document.body.style.overflow = "unset";
};

return (
<div className="lg:hidden">
{/* Mobile menu button */}
<Button;
variant="ghost"
size="sm";
onClick={toggleMenu}
className="p-2 text-white hover:bg-zion-blue-dark"
aria-label="Toggle mobile menu";
aria-expanded={isOpen}
>;
{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
</Button>

{/* Mobile menu overlay */}
{isOpen && (
<div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
<div className="fixed inset-y-0 right-0 w-full max-w-sm bg-zion-blue-dark shadow-xl">
{/* Header */}
<div className="flex items-center justify-between p-6 border-b border-zion-blue-light">
<h2 className="text-xl font-bold text-white">Menu</h2>
<Button;
variant="ghost"
size="sm";
onClick={closeMenu}
className="p-2 text-white hover:bg-zion-blue"
>;
<X className="w-6 h-6" />;
</Button>;
<span className="font-medium">{item.name}</span>;
</Link>;
</li>;
</Link>;
</Button>;
</div>;

{/* Footer */}
<div className="p-6 border-t border-zion-blue-light">;
<div className="text-center text-zion-slate-light text-sm">;
<p>© 2024 Zion Tech Group</p>;
