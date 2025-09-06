<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Unauthorized.tsx

<<<<<<< HEAD

import { Link } from "react-router-dom",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Unauthorized.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {ShieldAlert} from "lucide-react";
=======
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Link } from "react-router-dom",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
<<<<<<< HEAD
import { Footer } from "@/components/Footer";
import { ShieldAlert } from "lucide-react";
=======
import { Footer } from "@/components/Footer",
import { ShieldAlert } from "lucide-react",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function Unauthorized() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center px-4 py-12">
        <div className="bg-zion-blue-dark rounded-xl p-8 max-w-md w-full text-center shadow-lg border border-zion-blue-light">
          <div className="flex justify-center mb-6">
            <div className="bg-zion-purple/20 p-4 rounded-full">
              <ShieldAlert className="h-12 w-12 text-zion-purple" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Access Denied</h1>
          <p className="text-zion-slate-light mb-6">
            You don't have permission to access this page. This could be because your account doesn't have the required permissions or you need to complete your profile.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"
            >
              Return to Home
            </Link>
            <Link
              to="/login"
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center"
            >
              Login with Different Account
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Link } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { ShieldAlert } from "lucide-react";
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function Unauthorized() {;
  return (
=======

import { Link } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { ShieldAlert } from "lucide-react",;
;
export default function Unauthorized() {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
export default function Unauthorized() {;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center px-4 py-12">;
        <div className="bg-zion-blue-dark rounded-xl p-8 max-w-md w-full text-center shadow-lg border border-zion-blue-light">;
          <div className="flex justify-center mb-6">;
            <div className="bg-zion-purple/20 p-4 rounded-full">;
              <ShieldAlert className="h-12 w-12 text-zion-purple" />;
            </div>;
          </div>;
          <h1 className="text-3xl font-bold text-white mb-3">Access Denied</h1>;
          <p className="text-zion-slate-light mb-6">;
            You don't have permission to access this page. This could be because your account doesn't have the required permissions or you need to complete your profile.;
          </p>;
          <div className="flex flex-col gap-3">;
<<<<<<< HEAD
<<<<<<< HEAD
            <Link
              to="/"
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center">;
              Return to Home;
            </Link>;
            <Link
              to="/login"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Unauthorized.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Unauthorized.tsx
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center">;
import { Link } from './react-router-dom';
import { Button } from '@/components / ui / button';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { ShieldAlert } from './lucide-react';
export default /**
 * Unauthorized - Function description
 */
function Unauthorized() {
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion - blue flex flex - col items - center justify - center px - 4 py - 12">;
        <div className="bg - zion - blue - dark rounded - xl p - 8 max - w-md w - full text - center shadow - lg border border - zion - blue - light">;
          <div className="flex justify - center mb - 6">;
            <div className="bg - zion - purple / 20 p - 4 rounded - full">;
              <ShieldAlert className="h - 12 w - 12 text - zion - purple" />;
            </div>;
          </div>;
          <h1 className="text - 3xl font - bold text - white mb - 3">Access Denied</h1>;
          <p className="text - zion - slate - light mb - 6">;
            You don't have permission to access this page. This could be because your account doesn't have the required permissions or you need to complete your profile.;
          </p>;
          <div className="flex flex - col gap - 3">;
            <Link;
              to="/";
              className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white px - 4 py - 2 rounded inline - flex items - center justify - center";
=======
            <Link;
              to="/";
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            <Link;
              to="/";
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >;
              Return to Home;
            </Link>;
            <Link;
              to="/login";
<<<<<<< HEAD
<<<<<<< HEAD
              className="w - full border border - zion - blue - light text - zion - slate - light hover:bg - zion - blue hover:text - white px - 4 py - 2 rounded inline - flex items - center justify - center";
=======
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            >;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Unauthorized.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Unauthorized.tsx
=======
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center";
            >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Login with Different Account;
            </Link>;
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Unauthorized.tsx
    </>;
  );

}
;

=======

    </>);
}

=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </>);
}
=======
    </>;
  );
} export default function Unauthorized () {
  return (min-h-screen bg-zion-blue flex flex-col items-center justify-center px-4 py-12"> <div className=" bg-zion-blue-dark rounded-xl p-8 max-w-md w-full text-center shadow-lg border border-zion-blue-light"> <div className=" flex justify-center mb-6"> <div className=" bg-zion-purple/20 p-4 rounded-full"> <ShieldAlert className=" h-12 w-12 text-zion-purple"/> </div> </div> <h1 className=" text-3xl font-bold text-white mb-3">Access Denied</h1> <p className=" text-zion-slate-light mb-6"> You don't have permission to access this page. This could be because your account doesn't have the required permissions or you need to complete your profile. </p> <div className=" flex flex-col gap-3"> <Link > Return to Home </Link> <Link to=" /login"className=" w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center" > Login with Different Account </Link> </div> </div> </div> <Footer /> </> 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Unauthorized.tsx
=======
    </>;
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
