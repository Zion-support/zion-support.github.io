import React from "react";
import { Link } from "react-router-dom";
import { MainNavigation } from "./MainNavigation";

export function AppHeader() {
return (
<header className="bg-white shadow-sm border-b border-gray-200">;
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
<div className="flex justify-between items-center h-16">;
<div className="flex items-center">;
<Link to="/" className="flex-shrink-0">;
<h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group</h1>;
</Link>;
</div>
<MainNavigation />;
</div>
</div>
</header>;
<Search className="h-4 w-4" />;
</button>;
</form>;
</div>

<div className="ml-6 flex-1 hidden lg:block">;
<MainNavigation unreadCount={unreadCount} />;
</button>;
</Link>;
</button>;
</div>

<ModeToggle />;
</div>
</div>
</header>;
<Search className="h-4 w-4" />;
</button>;
</form>;
/>;
                }}
              >
                {t('auth.login')}
              </Link>
              <Link
href="/signup"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"
                aria-label = {t('auth.signup')}
                data-testid="signup-nav-link"
              >
                {t('auth.signup')}
              </Link>
            </div>
          )}
          {/* User avatar menu */}
          {isLoggedIn && (
            <div className="ml-4">
              <UserMenu />
            </div>
          )}
        </div>
      </header>
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (<div className="md:hidden fixed inset-0 z-60 pt-16">
          <div
className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick = {() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
