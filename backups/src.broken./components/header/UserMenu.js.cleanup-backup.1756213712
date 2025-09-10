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
                <User className="w-4 h-4"/>
                Profile
              </Link>
              
              <Link to="/notifications" className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:text-zion-cyan hover:bg-gray-800/30 transition-colors" onClick={() => setIsOpen(false)}>
                <Bell className="w-4 h-4"/>
                Notifications
              </Link>
              
              <Link to="/orders" className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:text-zion-cyan hover:bg-gray-800/30 transition-colors" onClick={() => setIsOpen(false)}>
                <ShoppingCart className="w-4 h-4"/>
                Orders
              </Link>
              
              <Link to="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:text-zion-cyan hover:bg-gray-800/30 transition-colors" onClick={() => setIsOpen(false)}>
                <Settings className="w-4 h-4"/>
                Settings
              </Link>
            </div>

            {/* Logout */}
            <div className="border-t border-gray-800 pt-1">
              <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors">
                <LogOut className="w-4 h-4"/>
                Sign Out
              </button>
            </div>
          </div>
        </div>)}
    </div>);
};