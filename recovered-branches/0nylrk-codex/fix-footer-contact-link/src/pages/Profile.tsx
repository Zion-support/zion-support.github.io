
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect } from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
export default function Profile() {;

<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { user, isLoading, logout } = useAuth();
=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



  }, [user, isLoading, navigate]),



  if (isLoading) {
<<<<<<< HEAD
  const { user, isLoading, logout } = useAuth();
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  useEffect(() => {;
    if (!isLoading && !user) {;
      toast && toast.error("Please log in to view your profile");
      navigate("/login?redirect=/profile");
    }
  }, [user, isLoading, navigate]);
<<<<<<< HEAD
  if (isLoading) {;
    return (

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
=======

  if (isLoading) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;
          <div className="animate-pulse text-white">Loading profile...</div>;
        </div>;
        <Footer />;
      </>;
<<<<<<< HEAD
  if (!user) {;
    return (
    ),;
  }
;
  if (!user) {;
    return (;
=======
    );
  }


  if (!user) {;
    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md">;
            <h1 className="text-xl font-bold text-white mb-4">Please log in</h1>;
            <p className="text-zion-slate mb-4">You need to be logged in to view your profile.</p>;
<<<<<<< HEAD
            <Button ;
              onClick={() => navigate("/login?redirect=/profile")}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
=======

            <Button
              onClick={() => navigate("/login?redirect=/profile")}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >;
              Go to Login;
            </Button>;
          </div>;
        </div>;
        <Footer />;
      </>;
    );
  }
<<<<<<< HEAD
;
  return (;
=======
  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                <Button
                  onClick={() => {;
                    logout();
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

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !user) {
      toast.error("Please log in to view your profile"),
      navigate("/login?redirect=/profile")
    }
  }, [user, isLoading, navigate]);
  }, [user, isLoading, navigate]),

  if (isLoading) {
<<<<<<< HEAD
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
=======
=======
=======
  useEffect(() => {;
    if (!isLoading && !user) {;
      toast && toast.error("Please log in to view your profile");
      navigate("/login?redirect=/profile");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;
          <div className="animate-pulse text-white">Loading profile...</div>;
        </div>;
        <Footer />;
      </>;
    );
  }


  if (!user) {;
    return (
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md">;
            <h1 className="text-xl font-bold text-white mb-4">Please log in</h1>;
            <p className="text-zion-slate mb-4">You need to be logged in to view your profile.</p>;

            <Button
              onClick={() => navigate("/login?redirect=/profile")}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white";
            >;
              Go to Login;
            </Button>;
          </div>;
        </div>;
        <Footer />;
      </>;
    );
  }
  return (

    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto px-4 py-8">;
          <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
            <div className="flex flex-col md:flex-row gap-6">;
              <div className="md:w-1/3">;
                <div className="w-32 h-32 rounded-full bg-zion-purple flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {user && user.displayName ? user && user.displayName.split(' ').map(name => name[0]).join('') : user && user.email?.charAt(0)}
                </div>;
              </div>;
              <div className="md:w-2/3">;
                <h2 className="text-xl font-bold text-white">{user && user.displayName || "User"}</h2>;
                <p className="text-zion-slate-light mb-4">{user && user.email}</p>;

                <Button
<<<<<<< HEAD
                  onClick={() => {;
                    logout();

                <Button
                  onClick={() => {

                    logout(),


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  onClick={() => {
                    logout();

                    logout(),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >;
              Go to Login;
            </Button>;
          </div>;
        </div>;
        <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD
                  {user.displayName ? user.displayName.split(' ').map(name => name[0]).join('') :user.email?.charAt(0)}
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
                </div>;
              </div>;
              <div className="md:w-2/3">;
                <h2 className="text-xl font-bold text-white">{user.displayName || "User"}</h2>;
                <p className="text-zion-slate-light mb-4">{user.email}</p>;
                <Button;
                  onClick={() => {;
                    logout();
                    navigate("/");
                  }}
                  variant="outline";
                  className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    </>;
  ); export default function Profile () {
  const {
  user, isLoading, logout 
}= useAuth ();
const navigate = useNavigate ();
useEffect ( () => {
  if (!isLoading && !user) {
  
}
;

}, [user, isLoading, navigate]);
return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="animate-pulse text-white" >Loading profile...</div> </div> <Footer /> </> if (!user) {
  return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md" > <h1 className="text-xl font-bold text-white mb-4" >Please log in</h1> <p className="text-zion-slate mb-4" >You need to be logged in to view your profile.</p> <Button > Go to Login </Button> </div> </div> <Footer /> </>) 
}return (<> <Header /> variant="outline" className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white" 
}
    </>;
  );
}
;
=======

    </>);
}

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    </>);
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
