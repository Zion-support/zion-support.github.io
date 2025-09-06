<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState  } from 'react';
import { useMessaging  } from '@/context/MessagingContext';
import { MainNavigation  } from './MainNavigation';
import { Logo  } from '@/components/header/Logo';
import { ModeToggle  } from '@/components/ModeToggle';
import { Menu, X  } from 'lucide-react';
import { MobileMenu  } from '@/components/header/MobileMenu';
import { useIsMobile  } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
<<<<<<< HEAD
export function AppHeader() {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from 'react';
import {use_messaging} from '@/context / MessagingContext';
import {MainNavigation} from './MainNavigation';
import {Logo} from '@/components / header / Logo';
import {ModeToggle} from '@/components / ModeToggle';
import {Menu, X} from 'lucide-react';
<<<<<<< HEAD
import {MobileMenu} from '@/components/header/MobileMenu';
import {useIsMobile} from '@/hooks/use-mobile';
import {MobileBottomNav} from '@/components/header/MobileBottomNav';
export function AppHeader() {;
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMobile = useIsMobile();

=======



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

  } catch (error) {
    console.warn ('Messaging context not available');
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  } catch (error) {
    console.warn('Messaging context not available')
<<<<<<< HEAD
  }
=======


<<<<<<< HEAD
=======
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
  } catch (error) {
<<<<<<< HEAD
    console.warn('Messaging context not available')
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    console.warn ('Messaging context not available');
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
<<<<<<< HEAD


<<<<<<< HEAD
=======
=======

  // Try to access the messaging context, but provide a fallback value if it's not available;
  let unreadCount = 0;
  try {}
    const { unreadCount: count } = useMessaging(),
      unreadCount = count;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMobile = useIsMobile();

  // Try to access the messaging context, but provide a fallback value if it's not available
  let unreadCount = 0;
  try {
    const { unreadCount: count } = useMessaging(),
      unreadCount = count;
  } catch (error) {
    console.warn("Messaging context not available");
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


<<<<<<< HEAD
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">;
            <button
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">;
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
=======
          {/* Mobile menu button */}"
          <div className="md:hidden ml-auto mr-4">;
            <button;
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className="inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 focus:outline-none";
              aria-expanded={mobileMenuOpen}"
              aria-label="Toggle mobile menu";
            >;"
              <span className="sr-only">Open main menu</span>;
              {mobileMenuOpen ? (;"
                <X className="block h-6 w-6" aria-hidden="true" />;
<<<<<<< HEAD
              ) : (;
                <Menu className="block h-6 w-6" aria-hidden="true" />;
              )}
            </button>
          </div>

          <ModeToggle />
        </div>
      </header>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && ("
        <div className="md:hidden fixed inset-0 z-40 pt-16">
<<<<<<< HEAD
          <div
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <div"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"

            onClick={() => setMobileMenuOpen(false)}"
            aria-hidden="true"
          />"
          <div className="relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu;
=======
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              unreadCount={unreadCount}
              onClose={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      )}
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      )}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8





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
<<<<<<< HEAD

    <>;"
      <header className="sticky top - 0 z - 50 w - full border - b border - zion - purple / 20 bg - zion - blue - dark / 90 backdrop - blur - md">;"
        <div className="container flex h - 16 items - center px - 4 sm:px - 6">;
<<<<<<< HEAD
=======
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"    <>;
      <header className="sticky top - 0 z - 50 w - full border - b border - zion - purple / 20 bg - zion - blue - dark / 90 backdrop - blur-md">;
        <div className="container flex h - 16 items - center px - 4 sm:px-6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"    <>;
      <header className="sticky top - 0 z - 50 w - full border - b border - zion - purple / 20 bg - zion - blue - dark / 90 backdrop - blur-md">;
        <div className="container flex h - 16 items - center px - 4 sm:px-6">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    <>;
      <header className="sticky top - 0 z - 50 w - full border - b border - zion - purple / 20 bg - zion - blue - dark / 90 backdrop - blur - md">;
        <div className="container flex h - 16 items - center px - 4 sm:px - 6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
                <X className="block h - 6 w-6" aria - hidden="true" />) : (
                <Menu className="block h - 6 w-6" aria - hidden="true" />)}
=======
          <Logo />;"
          <div className="ml - 6 flex - 1 hidden md:block">;
            <MainNavigation unread_count={unread_count} />;
          </div>;
          {/* Mobile menu button */}"
          <div className="md:hidden ml - auto mr - 4">;
            <button;
              on_click={() => setMobileMenuOpen (!mobileMenuOpen)}"
              className="inline - flex items - center justify - center rounded - md p - 2 text - white / 70 hover:text - white hover:bg - zion - purple / 10 focus:outline - none";
              aria - expanded={mobileMenuOpen}"
              aria - label="Toggle mobile menu";
            >;"
              <span className="sr - only">Open main menu</span>;
              {mobileMenuOpen ? ("
                <X className="block h - 6 w - 6" aria - hidden="true" />) : ("
                <Menu className="block h - 6 w - 6" aria - hidden="true" />)}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                <X className="block h - 6 w - 6" aria - hidden="true" />) : (
                <Menu className="block h - 6 w - 6" aria - hidden="true" />)}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </button>;
          </div>;
          <ModeToggle />;
        </div>;
      </header>;
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
<<<<<<< HEAD
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset - 0 z - 40 pt - 16">;
          <div;
            className="absolute inset - 0 bg - black / 50 backdrop - blur - sm";
            on_click={() => setMobileMenuOpen (false)}
            aria - hidden="true";
          />;
<<<<<<< HEAD
          <div className="relative bg - zion - blue - dark border - t border - zion - purple / 20 h - auto max - h-[calc (100vh - 4rem)] overflow-y-auto">;
=======
      {mobileMenuOpen && ("
        <div className="md:hidden fixed inset - 0 z - 40 pt - 16">;
          <div;"
            className="absolute inset - 0 bg - black / 50 backdrop - blur - sm";
            on_click={() => setMobileMenuOpen (false)}"
            aria - hidden="true";
          />;"
          <div className="relative bg - zion - blue - dark border - t border - zion - purple / 20 h - auto max - h-[calc (100vh - 4rem)] overflow - y-auto">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <div className="relative bg - zion - blue - dark border - t border - zion - purple / 20 h - auto max - h-[calc (100vh - 4rem)] overflow - y-auto">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
}

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>
  )
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
