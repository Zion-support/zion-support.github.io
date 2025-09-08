import { useState } from "react";
import { useMessaging } from "@/context/MessagingContext";
import { MainNavigation } from "./MainNavigation";
import { Logo } from "@/components/header/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "@/components/header/MobileMenu";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileBottomNav } from "@/components/header/MobileBottomNav";
export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMobile = useIsMobile();

  // Try to access the messaging context, but provide a fallback value if it's not available
  let unreadCount = $2;
  try {
    const { unreadCount: count} = useMessaging($2);
    unreadCount = count
  } catch (error) {
    console.warn("Messaging context not available");
  }

<<<<<<< HEAD

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          <div className="ml-6 flex-1 hidden md:block">
            <MainNavigation unreadCount={unreadCount} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">;
            <button
=======
          ;
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">;
            <button;
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
              className="inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 focus:outline-none";
              aria-expanded={mobileMenuOpen}"
              aria-label="Toggle mobile menu";
            >;"
              <span className="sr-only">Open main menu</span>;
              {mobileMenuOpen ? (;"
                <X className="block h-6 w-6" aria-hidden="true" />;


      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && ("
        <div className="md:hidden fixed inset-0 z-40 pt-16">

            className="absolute inset-0 bg-black/50 backdrop-blur-sm"

<<<<<<< HEAD

=======
            </button>;
          </div>;
          <ModeToggle />;
        </div>;
      </header>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 pt-16">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
<<<<<<< HEAD
=======
              ) :(;
                <Menu className="block h-6 w-6" aria-hidden="true" />;              )}
            </button>;
          </div>;
          ;
          <ModeToggle />;
        </div>;
      </header>;
      ;
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (;
        <div className="md:hidden fixed inset-0 z-40 pt-16">;
          <div ;
            className="absolute inset-0 bg-black/50 backdrop-blur-sm";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu
              unreadCount={unreadCount}
              onClose={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}



<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      )}

      )}

              ) : (;"

<<<<<<< HEAD

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}

      )}
;
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>;
    <>;
      <header className="sticky top - 0 z - 50 w - full border - b border - zion - purple / 20 bg - zion - blue - dark / 90 backdrop - blur - md">;
        <div className="container flex h - 16 items - center px - 4 sm:px - 6">;
          <Logo />;
          <div className="ml - 6 flex - 1 hidden md:block">;
            <MainNavigation unread_count={unread_count} />;
          </div>;
          {/* Mobile menu button */}
          <div className="md:hidden ml - auto mr - 4">;
            <button;
              on_click={() => setMobileMenuOpen (!mobileMenuOpen)}
              className="inline - flex items - center justify - center rounded - md p - 2 text - white / 70 hover:text - white hover:bg - zion - purple / 10 focus:outline - none";
              aria - expanded={mobileMenuOpen}
              aria - label="Toggle mobile menu";
            >;
              <span className="sr - only">Open main menu</span>;
              {mobileMenuOpen ? (
                <X className="block h - 6 w - 6" aria - hidden="true" />) : (
                <Menu className="block h - 6 w - 6" aria - hidden="true" />)}

=======

                <Menu className="block h-6 w-6" aria-hidden="true" />;
              )}
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}


>>>>>>> origin/cursor/delete-old-data-records-6bba
            </button>;
          </div>;
          <ModeToggle />;
        </div>;
      </header>;
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}

            <MobileMenu;
              unread_count={unread_count}
              on_close={() => setMobileMenuOpen (false)}
            />;
          </div>;
        </div>)}
      {/* Mobile Bottom Navigation */}
      {is_mobile && <MobileBottomNav unread_count={unread_count} />}
    </>);
}

<<<<<<< HEAD
=======

  ),;}
) : (<Menu className="block h-6 w-6" aria-hidden="true" />) 
}</button> </div> <ModeToggle /> </div> </header> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick= {
  () => setMobileMenuOpen (false) 
}aria-hidden="true" /> <div className="relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenu unreadCount= {
  unreadCount 
}onClose= {
  () => setMobileMenuOpen (false) 
}/> </div> </div>) 
}{
  /* Mobile Bottom Navigation */ 
}{
  isMobile && <MobileBottomNav unreadCount= {
  unreadCount 
}/> 
}</>) 

import { useState } from "react";""
import { useMessaging } from "@/context/MessagingContext";""
import { MainNavigation } from "./MainNavigation";""
import { Logo } from "@/components/header/Logo";""
import { ModeToggle } from "@/components/ModeToggle";""
import { Menu, X } from "lucide-react";""
import { MobileMenu } from "@/components/header/MobileMenu";""
import { useIsMobile } from "@/hooks/use-mobile";""
import { MobileBottomNav } from "@/components/header/MobileBottomNav";"
export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
      </header>"
        <div className="md:hidden fixed inset-0 z-40 pt-16">"
</div>
          <Logo />
          <div className="ml-6 flex-1 hidden md:block">"
            <MainNavigation unreadCount={unreadCount} />

          </div>"
          <div className="md:hidden ml-auto mr-4">;"
            <button;
          {/* Mobile menu button */}"
</button>
            <button;)
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
</button>"
              <span className="sr-only">Open main menu</span>;""
                <X className="block h-6 w-6" aria-hidden="true" />;"
                <Menu className="block h-6 w-6" aria-hidden="true" />;"

          <ModeToggle />

        <div className="md:hidden fixed inset-0 z-40 pt-16">"
          <div;"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm""
            onClick={() => setMobileMenuOpen(false)}
          <div className="relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">"
            <MobileMenu;
              unreadCount={unreadCount}
              onClose={() => setMobileMenuOpen(false)}

      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}

    </>
  );

      {/* Mobile Bottom Navigation */}

    </>;
              ) : (;"

    <>;"
      <header className="sticky top - 0 z - 50 w - full border - b border - zion - purple / 20 bg - zion - blue - dark / 90 backdrop - blur - md">;"
        <div className="container flex h - 16 items - center px - 4 sm:px - 6">;"
          <Logo />;
          <div className="ml - 6 flex - 1 hidden md:block">;"
            <MainNavigation unread_count={unread_count} />;

          </div>;"
          <div className="md:hidden ml - auto mr - 4">;"
              on_click={() => setMobileMenuOpen (!mobileMenuOpen)}
              <span className="sr - only">Open main menu</span>;""
                <X className="block h - 6 w - 6" aria - hidden="true" />) : ("
)"
                <Menu className="block h - 6 w - 6" aria - hidden="true" />)}"
</Menu>

            </button>;
          </div>;
          <ModeToggle />;
</ModeToggle>
        </div>;

      </header>;"
        <div className="md:hidden fixed inset - 0 z - 40 pt - 16">;"
            className="absolute inset - 0 bg - black / 50 backdrop - blur - sm";"
            on_click={() => setMobileMenuOpen (false)}
          <div className="relative bg - zion - blue - dark border - t border - zion - purple / 20 h - auto max - h-[calc (100vh - 4rem)] overflow - y-auto">;"
              unread_count={unread_count}
              on_close={() => setMobileMenuOpen (false)}

</MobileMenu>

          </div>;
        </div>)}
      {is_mobile && <MobileBottomNav unread_count={unread_count} />}

    </>);


}
>>>>>>> origin/cursor/delete-old-data-records-6bba
