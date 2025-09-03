          </div>
          <span className="font-bold text-lg">Zion Tech</span>
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="p-4 space-y-2">
        {sidebarItems.map(renderSidebarItem)}
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-800 mt-8">
        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">
          Quick Actions
        </h3>
        <div className="space-y-2">
          <Link
            to="/request-quote"
            className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            onClick={onClose}
          >
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium">Get Quote</span>
          </Link>
          <Link
            to="/demo"
            className="flex items-center space-x-3 px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
            onClick={onClose}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Request Demo</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 mt-auto">
        <div className="text-center text-gray-400 text-sm">
          <p>© 2024 Zion Tech Group</p>
          <p className="mt-1">Empowering Innovation</p>
        </div>
      </div>
    </aside>
  );
}
>>>>>>> main
>>>>>>> main
