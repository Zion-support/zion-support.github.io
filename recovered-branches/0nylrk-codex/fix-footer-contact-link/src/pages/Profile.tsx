<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx

<<<<<<< HEAD

import React, { useEffect } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !user) {
      toast.error("Please log in to view your profile"),
      navigate("/login?redirect=/profile")
    }

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useEffect } from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
export default function Profile() {;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx

  const { user, isLoading, logout } = useAuth();
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



  }, [user, isLoading, navigate]),



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (isLoading) {
=======
========
  const { user, isLoading, logout } = useAuth();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx
  useEffect(() => {;
    if (!isLoading && !user) {;
      toast && toast.error("Please log in to view your profile");
      navigate("/login?redirect=/profile");
    }
  }, [user, isLoading, navigate]);
  if (isLoading) {;
    return (
=======

import React, { useEffect } from 'react',;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { useNavigate } from "react-router-dom",;
import { toast } from "sonner",;
;
export default function Profile() {;
  const { user, isLoading, logout } = useAuth(),;
  const navigate = useNavigate(),;
;
  useEffect(() => {;
    if (!isLoading && !user) {;
      toast.error("Please log in to view your profile"),;
      navigate("/login?redirect=/profile"),;
    }
  }, [user, isLoading, navigate]),;
;
  if (isLoading) {;
    return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;
          <div className="animate-pulse text-white">Loading profile...</div>;
        </div>;
        <Footer />;
      </>;
<<<<<<< HEAD
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx
  if (!user) {;
    return (
=======
    ),;
  }
;
  if (!user) {;
    return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md">;
            <h1 className="text-xl font-bold text-white mb-4">Please log in</h1>;
            <p className="text-zion-slate mb-4">You need to be logged in to view your profile.</p>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx
            <Button
              onClick={() => navigate("/login?redirect=/profile")}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white";
=======
            <Button ;
              onClick={() => navigate("/login?redirect=/profile")}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            >;
              Go to Login;
            </Button>;
          </div>;
        </div>;
        <Footer />;
      </>;
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx
  return (

========
<<<<<<< HEAD
  return (
=======
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto px-4 py-8">;
          <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
            <div className="flex flex-col md:flex-row gap-6">;
              <div className="md:w-1/3">;
                <div className="w-32 h-32 rounded-full bg-zion-purple flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0">;
<<<<<<< HEAD
                  {user && user.displayName ? user && user.displayName.split(' ').map(name => name[0]).join('') : user && user.email?.charAt(0)}
                </div>;
              </div>;
              <div className="md:w-2/3">;
                <h2 className="text-xl font-bold text-white">{user && user.displayName || "User"}</h2>;
                <p className="text-zion-slate-light mb-4">{user && user.email}</p>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx
                <Button
<<<<<<< HEAD
                  onClick={() => {

=======
                  onClick={() => {;
                    logout();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx

                <Button
                  onClick={() => {

                    logout(),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const { user, isLoading, logout } = useAuth();
  const navigate = useNavigate();
import React, { useEffect } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
export default function Profile() {
  const { user, isLoading, logout } = useAuth();
import { useNavigate } from "react-router-dom",
import { toast } from "sonner",
export default function Profile() {
  const { user, isLoading, logout } = useAuth(),
  const navigate = useNavigate(),

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !user) {
      toast.error("Please log in to view your profile"),
      navigate("/login?redirect=/profile")
    }
  }, [user, isLoading, navigate]);
  }, [user, isLoading, navigate]),

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="animate-pulse text-white">Loading profile...</div>
        </div>
        <Footer />
      </>
    )
  }
  if (!user) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md">
            <h1 className="text-xl font-bold text-white mb-4">Please log in</h1>
            <p className="text-zion-slate mb-4">You need to be logged in to view your profile.</p>
            <Button
              onClick={() => navigate("/login?redirect=/profile")}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white"
            >
              Go to Login
            </Button>
          </div>
        </div>
        <Footer />
      </>
    )
  }
  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="w-32 h-32 rounded-full bg-zion-purple flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0">
                  {user.displayName ? user.displayName.split(' ').map(name => name[0]).join('') : user.email?.charAt(0)}
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-xl font-bold text-white">{user.displayName |"User"}</h2>
                <p className="text-zion-slate-light mb-4">{user.email}</p>
                <Button
                  onClick={() => {
                    logout();

                    logout(),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    navigate("/")
                  }}
                  variant="outline"
                  className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx
                    navigate("/");
                  }}
                  variant="outline";
                  className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
import React, { useEffect } from 'react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { use_auth } from '@/hooks / use_auth';
import { Button } from '@/components / ui / button';
import { use_navigate } from './react-router-dom';
import { toast } from './sonner';
export default /**
 * Profile - Function description
 */
function Profile() {
  const { user, is_loading, logout } = use_auth ();
  const navigate = use_navigate ();
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      toast.error ("Please log in to view your profile");
      navigate ("/login?redirect=/profile");
=======

=======
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useEffect } from 'react',;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { useNavigate } from "react-router-dom",;
import { toast } from "sonner",;
export default function Profile() {;
  const { user, isLoading, logout } = useAuth(),;
  const navigate = useNavigate(),;
  useEffect(() => {;
    if (!isLoading && !user) {;
      toast.error("Please log in to view your profile"),;
      navigate("/login?redirect=/profile");
<<<<<<< HEAD

    }
  }, [user, is_loading, navigate]);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <Header />;
        <div className="min - h-screen bg - zion - blue flex items - center justify - center">;
          <div className="animate - pulse text - white">Loading profile...</div>;
        </div>;
        <Footer />;
      </>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <Header />;
        <div className="min - h-screen bg - zion - blue flex items - center justify - center">;
          <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 max - w-md">;
            <h1 className="text - xl font - bold text - white mb - 4">Please log in</h1>;
            <p className="text - zion - slate mb - 4">You need to be logged in to view your profile.</p>;
            <Button;
              on_click={() => navigate ("/login?redirect=/profile")}
              className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white";
=======
    }
  }, [user, isLoading, navigate]);
  if (isLoading) {;
    return (;
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;
          <div className="animate-pulse text-white">Loading profile...</div>;
        </div>;
        <Footer />;
      </>;
    );
  }
;
  if (!user) {;
    return (;
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md">;
            <h1 className="text-xl font-bold text-white mb-4">Please log in</h1>;
            <p className="text-zion-slate mb-4">You need to be logged in to view your profile.</p>;
            <Button;
              onClick={() => navigate("/login?redirect=/profile")}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >;
              Go to Login;
            </Button>;
          </div>;
        </div>;
        <Footer />;
<<<<<<< HEAD
      </>);
  }
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion - blue">;
        <div className="container mx - auto px - 4 py - 8">;
          <h1 className="text - 2xl font - bold text - white mb - 8">My Profile</h1>;
          <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6">;
            <div className="flex flex - col md:flex - row gap - 6">;
              <div className="md:w - 1/3">;
                <div className="w - 32 h - 32 rounded - full bg - zion - purple flex items - center justify - center text - 3xl font - bold text - white mb - 4 mx - auto md:mx - 0">;
                  {user.display_name ? user.display_name.split (' ').map (name => name[0]).join ('') : user.email?.char_at (0)}
                </div>;
              </div>;
              <div className="md:w - 2/3">;
                <h2 className="text - xl font - bold text - white">{user.display_name || "User"}</h2>;
                <p className="text - zion - slate - light mb - 4">{user.email}</p>;
                <Button;
                  on_click={() => {
                    logout ();
                    navigate ("/");
                  }}
                  variant="outline";
                  className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text - white";
=======
                  {user.displayName ? user.displayName.split(' ').map(name => name[0]).join('') :user.email?.charAt(0)}
=======
      </>;
    );
  }
;
  return (;
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto px-4 py-8">;
          <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
            <div className="flex flex-col md:flex-row gap-6">;
              <div className="md:w-1/3">;
                <div className="w-32 h-32 rounded-full bg-zion-purple flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0">;
                  {user.displayName ? user.displayName.split(' ').map(name => name[0]).join('') : user.email?.charAt(0)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>;
              </div>;
              <div className="md:w-2/3">;
                <h2 className="text-xl font-bold text-white">{user.displayName || "User"}</h2>;
                <p className="text-zion-slate-light mb-4">{user.email}</p>;
                <Button;
                  onClick={() => {;
<<<<<<< HEAD
                    logout(),;
                    navigate("/"),;
                  }}
                  variant="outline";
                  className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                    logout();
                    navigate("/");
                  }}
                  variant="outline";
                  className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                >;
                  Logout;
                </Button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx
    </>);
=======
    </>;
  ); export default function Profile () {
  const {
  user, isLoading, logout 
}= useAuth ();
const navigate = useNavigate ();
useEffect ( () => {
  if (!isLoading && !user) {
  
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}, [user, isLoading, navigate]);
return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="animate-pulse text-white" >Loading profile...</div> </div> <Footer /> </> if (!user) {
  return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md" > <h1 className="text-xl font-bold text-white mb-4" >Please log in</h1> <p className="text-zion-slate mb-4" >You need to be logged in to view your profile.</p> <Button > Go to Login </Button> </div> </div> <Footer /> </>) 
}return (<> <Header /> variant="outline" className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white" 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Profile.tsx
=======
    </>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
