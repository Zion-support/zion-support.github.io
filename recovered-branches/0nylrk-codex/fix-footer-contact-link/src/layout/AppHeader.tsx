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

  const isMobile = useIsMobile();
"
  // Try to access the messaging context, but provide a fallback value if it's not available;
  let unreadCount = 0;
  try {
  // TODO: Implement
}
    const { unreadCount: count } = useMessaging(),
      unreadCount = count;
  } catch (error) {
    console.warn("Messaging context not available");"

  return (
    <>"
      <header className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md">"
</header>"
        <div className="container flex h-16 items-center px-4 sm:px-6">"
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

            </button>;
          </div>;
          <ModeToggle />;

      </header>;"
        <div className="md:hidden fixed inset - 0 z - 40 pt - 16">;"
            className="absolute inset - 0 bg - black / 50 backdrop - blur - sm";"
            on_click={() => setMobileMenuOpen (false)}
          <div className="relative bg - zion - blue - dark border - t border - zion - purple / 20 h - auto max - h-[calc (100vh - 4rem)] overflow - y-auto">;"
              unread_count={unread_count}
              on_close={() => setMobileMenuOpen (false)}

        </div>)}
      {is_mobile && <MobileBottomNav unread_count={unread_count} />}

    </>);
  ),;}"
) : (<Menu className="block h-6 w-6" aria-hidden="true" />)"
}</button> </div> <ModeToggle /> </div> </header> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick= {"
}aria-hidden="true" /> <div className="relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenu unreadCount= {"
}/> </div> </div>) 
  isMobile && <MobileBottomNav unreadCount= {
  unreadCount;
}/> 

}</>) 


  )