<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState  } from 'react';
import { useMessaging  } from '@/context/MessagingContext';
import { MainNavigation  } from './MainNavigation';
import { Logo  } from '@/components/header/Logo';
import { ModeToggle  } from '@/components/ModeToggle';
import { Menu, X  } from 'lucide-react';
import { MobileMenu  } from '@/components/header/MobileMenu';
import { useIsMobile  } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
export function AppHeader() {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from 'react';
import {use_messaging} from '@/context / MessagingContext';
import {MainNavigation} from './MainNavigation';
import {Logo} from '@/components / header / Logo';
import {ModeToggle} from '@/components / ModeToggle';
import {Menu, X} from 'lucide-react';
import {MobileMenu} from '@/components/header/MobileMenu';
import {useIsMobile} from '@/hooks/use-mobile';
import {MobileBottomNav} from '@/components/header/MobileBottomNav';
export function AppHeader() {;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMobile = useIsMobile();
import {MobileMenu} from '@/components / header / MobileMenu';
import {useIsMobile} from '@/hooks / use - mobile';
import {MobileBottomNav} from '@/components / header / MobileBottomNav';
export /**
 * AppHeader - Function description
 */
function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState (false);
  const is_mobile = useIsMobile ();
;
  // Try to access the messaging context, but provide a fallback value if it's not available;
  let unread_count = 0;
  try {
    const { unread_count: count } = use_messaging (),
    unread_count = count;
} catch (error) {
    console.warn ('Messaging context not available');
  } catch (error) {
    console.warn('Messaging context not available')
}
import { useState  } from 'react';
import { useMessaging  } from '@/context/MessagingContext';
import { MainNavigation  } from './MainNavigation';
import { Logo  } from '@/components/header/Logo';
import { ModeToggle  } from '@/components/ModeToggle';
import { Menu, X  } from 'lucide-react';
import { MobileMenu  } from '@/components/header/MobileMenu';
import { useIsMobile  } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react";
import { useMessaging } from "@/context/MessagingContext";
import { MainNavigation } from "./MainNavigation";
import { Logo } from "@/components/header/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "@/components/header/MobileMenu";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileBottomNav } from "@/components/header/MobileBottomNav";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export function AppHeader() {
import {useState} from 'react';
import {use_messaging} from '@/context / MessagingContext';
import {MainNavigation} from './MainNavigation';
import {Logo} from '@/components / header / Logo';
import {ModeToggle} from '@/components / ModeToggle';
import {Menu, X} from 'lucide-react';
=======
import { useState } from "react";"
import { useMessaging } from "@/context/MessagingContext";"
import { MainNavigation } from "./MainNavigation";"
import { Logo } from "@/components/header/Logo";"
import { ModeToggle } from "@/components/ModeToggle";"
import { Menu, X } from "lucide-react";"
import { MobileMenu } from "@/components/header/MobileMenu";"
import { useIsMobile } from "@/hooks/use-mobile";"
import { MobileBottomNav } from "@/components/header/MobileBottomNav";
export function AppHeader() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMobile = useIsMobile();
} catch (error) {
<<<<<<< HEAD
    console.warn('Messaging context not available')
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from 'react',;
import { useMessaging } from '@/context/MessagingContext',;
import { MainNavigation } from './MainNavigation',;
import { Logo } from '@/components/header/Logo',;
import { ModeToggle } from '@/components/ModeToggle',;
import { Menu, X } from 'lucide-react',;
import { MobileMenu } from '@/components/header/MobileMenu',;
import { useIsMobile } from '@/hooks/use-mobile',;
import { MobileBottomNav } from '@/components/header/MobileBottomNav',;
export function AppHeader() {;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),;
  const isMobile = useIsMobile(),;
  // Try to access the messaging context, but provide a fallback value if it's not available;
  let unreadCount = 0;
  try {;
    const { unreadCount: count } = useMessaging();
    unreadCount = count;
  } catch (error) {;
    console.warn('Messaging context not available');

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
<<<<<<< HEAD
  } catch (error) {
    console.warn ('Messaging context not available');
import { useState } from 'react',;
import { useMessaging } from '@/context/MessagingContext',;
import { MainNavigation } from './MainNavigation',;
import { Logo } from '@/components/header/Logo',;
import { ModeToggle } from '@/components/ModeToggle',;
import { Menu, X } from 'lucide-react',;
import { MobileMenu } from '@/components/header/MobileMenu',;
import { useIsMobile } from '@/hooks/use-mobile',;
import { MobileBottomNav } from '@/components/header/MobileBottomNav',;
export function AppHeader() {;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),;
  const isMobile = useIsMobile(),;
  // Try to access the messaging context, but provide a fallback value if it's not available;
  let unreadCount = 0;
  try {;
    const { unreadCount: count } = useMessaging();
    unreadCount = count;
  } catch (error) {;
    console.warn('Messaging context not available');  }
=======
  } catch (error) {"
    console.warn("Messaging context not available");
  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function AppHeader() {

  } catch (error) {
    console.warn("Messaging context not available");
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

{/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">;
            <button
;
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">;
            <button;
          {/* Mobile menu button */}
            <button          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">;
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 focus:outline-none";
              aria-expanded={mobileMenuOpen}"
              aria-label="Toggle mobile menu";
            >;"
              <span className="sr-only">Open main menu</span>;
              {mobileMenuOpen ? (;"
                <X className="block h-6 w-6" aria-hidden="true" />;
) : (;
                <Menu className="block h-6 w-6" aria-hidden="true" />;
              )}

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
  // Try to access the messaging context, but provide a fallback value if it's not available;'
  let unreadCount = 0;
  try {
  // TODO: Implement
}
    const { unreadCount: count } = useMessaging(),
      unreadCount = count;
  } catch (error) {'
    console.warn("Messaging context not available");"
  }

  return (
    <>"
      <header className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md">"
</header>"
        <div className="container flex h-16 items-center px-4 sm:px-6">"
</div>
          <Logo />
</Logo>"
          <div className="ml-6 flex-1 hidden md:block">"
</div>
            <MainNavigation unreadCount={unreadCount} />
</MainNavigation>
          </div>"
          <div className="md:hidden ml-auto mr-4">;"
</div>
            <button;
          {/* Mobile menu button */}"
          <div className="md:hidden ml-auto mr-4">;"
</button>
            <button;)
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
</button>"
              <span className="sr-only">Open main menu</span>;""
                <X className="block h-6 w-6" aria-hidden="true" />;"
</X>"
                <Menu className="block h-6 w-6" aria-hidden="true" />;"
</Menu>

            </button>
          </div>
          <ModeToggle />
        </div>
      </header>

=======
</button>;
          </div>;
          <ModeToggle />;
        </div>;
      </header>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && ("
        <div className="md:hidden fixed inset-0 z-40 pt-16">
<div
<<<<<<< HEAD
<<<<<<< HEAD
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"

            onClick={() => setMobileMenuOpen(false)}"
            aria-hidden="true"
          />"
          <div className="relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu;
              unreadCount={unreadCount}
              onClose={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
unreadCount={unreadCount} 
            <MobileMenu ;
              unreadCount={unreadCount} ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              onClose={() => setMobileMenuOpen(false)} ;
            />;
          </div>;
        </div>;
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      )}

              ) : (;"
=======

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>
  );
}

{/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}

      )}
;
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>;
              ) : (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <Menu className="block h-6 w-6" aria-hidden="true" />;
              )}
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
<>;"
      <header className="sticky top - 0 z - 50 w - full border - b border - zion - purple / 20 bg - zion - blue - dark / 90 backdrop - blur - md">;"
        <div className="container flex h - 16 items - center px - 4 sm:px - 6">;

=======
    <>;
      <header className="sticky top - 0 z - 50 w - full border - b border - zion - purple / 20 bg - zion - blue - dark / 90 backdrop - blur - md">;
        <div className="container flex h - 16 items - center px - 4 sm:px - 6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Logo />;
          <div className="ml - 6 flex-1 hidden md:block">;
            <MainNavigation unread_count={unread_count} />;
          </div>;
          {/* Mobile menu button */}
          <div className="md:hidden ml - auto mr-4">;
            <button;
              on_click={() => setMobileMenuOpen (!mobileMenuOpen)}
              className="inline - flex items - center justify - center rounded - md p - 2 text - white / 70 hover:text - white hover:bg - zion - purple / 10 focus:outline-none";
              aria - expanded={mobileMenuOpen}
              aria - label="Toggle mobile menu";
            >;
              <span className="sr-only">Open main menu</span>;
              {mobileMenuOpen ? (
<X className="block h - 6 w-6" aria - hidden="true" />) : (
                <Menu className="block h - 6 w-6" aria - hidden="true" />)}
=======
                <X className="block h - 6 w-6" aria - hidden="true" />) : (
                <Menu className="block h - 6 w-6" aria - hidden="true" />)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </button>;
          </div>;
          <ModeToggle />;
        </div>;
      </header>;
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
{mobileMenuOpen && (
        <div className="md:hidden fixed inset - 0 z - 40 pt-16">;
          <div;
            className="absolute inset - 0 bg - black / 50 backdrop - blur-sm";
            on_click={() => setMobileMenuOpen (false)}
            aria - hidden="true";
          />;
<<<<<<< HEAD
          <div className="relative bg - zion - blue - dark border - t border - zion - purple / 20 h - auto max - h-[calc (100vh - 4rem)] overflow-y-auto">;
=======
          <div className="relative bg - zion - blue - dark border - t border - zion - purple / 20 h - auto max - h-[calc (100vh - 4rem)] overflow-y-auto">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
</ModeToggle>
        </div>

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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
pr-12325
}
"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
