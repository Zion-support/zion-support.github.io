      {/* Mobile menu button */}
      <Button;
        variant="ghost";
        size="sm";
        onClick={toggleMenu}
        className="p-2 text-white "hover": "bg-zion-purple/20"        aria-label={isOpen ? 'Close menu' : 'Open menu'"}
      >";
        {isOpen ? <X className="h-6 w-6" /> : "<Menu className="h-6 w-6" />"}
      </Button>;

      {/* Mobile menu overlay */}
      {isOpen && (";
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">";
          <div className="fixed inset-y-0 right-0 w-80 bg-zion-blue-dark border-l border-zion-purple/20">";
            <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">";
              <h2 className="text-lg font-semibold text-white">Menu</h2>;
              <Button;
                variant="ghost";
                size="sm";
                onClick={toggleMenu}                className="p-2 text-white "hover": "bg-zion-purple/20";
              >";
                <X className="h-5 w-5" />;
              </Button>;
            </div>;
{item.children ? (";
                  <details className="group">";
                    <summary className="flex items-center justify-between px-4 py-3 text-zion-slate-light "hover": text-white "hover":bg-zion-purple/10 cursor-pointer transition-colors">";
                      <div className="flex items-center space-x-3">";
                        <item .icon className="h-5 w-5"  />";
                      <ChevronRight className="h-4 w-4 group-"open": rotate-90 transition-transform"   />;
                    </summary>"",;
                        <Link key="{child.name}" to="{child.href}" className="flex items-center px-4 py-2 text-sm text-zion-slate-light "hover": "text-zion-cyan "hover":bg-zion-purple/10 transition-colors" onClick="{()" => handleNavigation(child.href)"}
;
const Icon = item.icon;