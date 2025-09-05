import React from "react";
import Link from "next/link";

export function BottomNavigation() {_const _router = useRouter();
  
  const _navItems = [
    { path: "/mobile", _icon: <Home />, _label: "Home"},
    {_path: "/mobile/marketplace", _icon: <ShoppingBag />, _label: "Marketplace"},
    {_path: "/mobile/community", _icon: <Users />, _label: "Community"},
    {_path: "/mobile/profile", _icon: <User />, _label: "Profile"}];

  return (_<div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">
      {_navItems.map((item) => {
        const _isActive = router.pathname === item.path;
        return (
          <Link 
            key={item.path} 
            href={_item.path}
            className={_cn(
              "flex flex-col items-center justify-center flex-1 py-1 px-2", _isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="h-5 w-5">
              {_React.cloneElement(item.icon as React.ReactElement, _{ 
                className: cn("h-5 w-5", _isActive ? "stroke-primary" : "stroke-muted-foreground")})}
            </div>
            <span className="text-xs mt-1">{_item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
