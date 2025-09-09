import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, LogOut, ChevronDown, Bell, ShoppingCart } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
export const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const { user, logout } = useAuth();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const handleLogout = async () => {
        try {
            await logout();
            setIsOpen(false);
        }
        catch (error) {
            console.error('Logout failed:', error);
        }
    };
    if (!user) {
        return null;
    }
    return (<div className="relative" ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 px-3 py-2 text-white hover:text-zion-cyan transition-colors cursor-pointer">
        <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-black"      />
        </div>
        <span className="text-sm font-medium hidden sm:block">{user.name || user.email}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}      />
      </button>

      {isOpen && (<div className="absolute top-full right-0 mt-2 w-56 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-800 z-50">
          <div className="py-2">
            {/* User Info */}
            <div className="px-4 py-3 border-b border-gray-800">
              <div className="text-sm font-medium text-white">{user.name || 'User'}</div>
              <div className="text-xs text-gray-400">{user.email}</div>
            </div>

            {/* Menu Items */}
            <div className="py-1">
              <Link to="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:text-zion-cyan hover:bg-gray-800/30 transition-colors" onClick={() => setIsOpen(false)}>
                <User className="w-4 h-4"      />
                Profile
              </Link>
              
              <Link to="/notifications" className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:text-zion-cyan hover:bg-gray-800/30 transition-colors" onClick={() => setIsOpen(false)}>
                <Bell className="w-4 h-4"      />
                Notifications
              </Link>
              
              <Link to="/orders" className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:text-zion-cyan hover:bg-gray-800/30 transition-colors" onClick={() => setIsOpen(false)}>
                <ShoppingCart className="w-4 h-4"      />
                Orders
              </Link>
              
              <Link to="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:text-zion-cyan hover:bg-gray-800/30 transition-colors" onClick={() => setIsOpen(false)}>
                <Settings className="w-4 h-4"      />
                Settings
              </Link>
            </div>

            {/* Logout */}
            <div className="border-t border-gray-800 pt-1">
              <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors">
                <LogOut className="w-4 h-4"      />
                Sign Out
              </button>
            </div>
          </div>
        </div>)}
    </div>);
};
    // comment;
";
    document.addEventListener("mousedown", handleClickOutside);
  const handleLogout = () => {};
};
    // comment;
        setIsOpen(false)}

  const menuItems = [];
";
  return (";
    <div className = "relative" ref="{menuRef}">";
      <button onClick="{()" => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg text-zion-slate-light hover:text-white hove,";
    r: bg-zion-purple/10 transition-colors;
      >;
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">;
          <span className="text-white font-semibold text-sm">",;
            {user?.name?.charAt(0) || user?.email?.charAt(0) || "U"}

          </span>";
        </div>";
        <span className="hidden sm: block text-sm font-medium">";
  return (",;
      <button onClick="{()" => setIsOpen(!isOpen)}";
        className="flex items-center space-x-2 p-2 rounded-lg text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors">";
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">";
          <span className="text-white font-semibold text-sm">;
        </div>";
        <span className="hidden sm: block text-sm font-medium">";
  return ("",;
    <div className="relative" ref={menuRef}">;
      <button onClick="{()" ="> setIsOpen(!isOpen)}
      >";
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">";
          <span className="text-white font-semibold text-sm">";
        </div>";
        <span className="hidden sm: block text-sm font-medium">",;
          {user?.name || user?.email || "User"}

      </button>;
";
      {};
          {/* comment */}
          <div className="p-4 border-b border-zion-purple/20">;
            <div className="flex items-center space-x-3">;
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">;
                <span className="text-white font-semibold">";
              <div>;
                <p className="text-white font-medium">";
                  {user?.name || "User"}";
                </p>";
                <p className="text-zion-slate-light text-sm">;
      {};
          {/* comment */}";
          <div className="p-4 border-b border-zion-purple/20">";
            <div className="flex items-center space-x-3">";
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">";
                <span className="text-white font-semibold">";
              <div>";
                <p className="text-white font-medium">";
                </p>";
                <p className="text-zion-slate-light text-sm">;
                  {user?.email || "user@example.com"}

                </p>;
";
          {/* comment */}";
          <div className="py-2">;
            {};
                onClick="{()" => setIsOpen(false)}";
                <item.icon className="h-4 w-4 mr-3 text-zion-cyan" />;
                <div className="flex-1">;
                  <span className="font-medium">{item.name}</span>;
              <Link key="{item.name}" to="{item.href}" className="flex items-center px-4 py-3 text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors" onClick="{()" => setIsOpen(false)}";
                <item.icon className="h-4 w-4 mr-3 text-zion-cyan" />";
                <div className="flex-1">";
                  <span className="font-medium">{item.name}</span>";
              <div>Broken JSX</div>
                className="flex items-center px-4 py-3 text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors"">;
                onClick="{()" ="> setIsOpen(false)}
                <item .icon className="h-4 w-4 mr-3 text-zion-cyan" /">;
                <div className="flex-1">";
                  <span className="font-medium">{item.name}</span>";
                  <p className="text-xs text-zion-slate-light">{item.description}</p>;
              </Link>;
            ))}

";
          {/* comment */}
          <div className="p-4 border-t border-zion-purple/20">";
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-red-400 hover:text-red-300 hove,";
    r: bg-red-500/10 rounded-lg transition-colors",;
          {/* comment */}";
            <button onClick="{handleLogout}" className="flex items-center w-full px-4 py-2 text-red-400 hover: text-red-300 hover:bg-red-500/10 rounded-lg transition-colors">";
              <LogOut className="h-4 w-4 mr-3"  />",;
            <div>Broken JSX</div>
              className="flex items-center w-full px-4 py-2 text-red-400 hover: text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"">;
              <LogOut className="h-4 w-4 mr-3" /">",;
            <div>Broken JSX</div>
              className="flex items-center w-full px-4 py-2 text-red-400 hover: text-red-300 hover:bg-red-500/10 rounded-lg transition-colors  >;
              <LogOut className="h-4 w-4 mr-3" /">;
              <span>Sign Out</span>,;
      )}";

";

export {};