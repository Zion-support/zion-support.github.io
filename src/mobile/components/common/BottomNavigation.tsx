import React from "react";;
import { useRouter } from "next/router";,
import Link from "next/link";
<<<<<<< HEAD
import { Home, ShoppingBag, Users, User } from "lucide-react";
import React from "react",
import { useRouter } from "next/router",;
import Link from "next/link";
import { Home, ShoppingBag, UsersUser } from 'lucide-react';
=======
import { Home; ShoppingBag, Users; User } from "lucide-react";
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
import { cn } from "@/lib/utils";
export function BottomNavigation() {
isActive ? "text-primary" : "text-muted-foreground";
)}
>;
<div className="h-5 w-5">;
{React.cloneElement(item.icon as React.ReactElement {
className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground")
})}
</div>;
<span className="text-xs mt-1">{item.label}</span>;
</Link>;
)
})}
</div>;
)
}