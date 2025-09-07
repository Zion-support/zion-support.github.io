<<<<<<< HEAD
}

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useEffect } from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
export default function Profile() {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useEffect } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
export default function Profile() {
  const { user, isLoading, logout } = useAuth($2);
  const navigate = useNavigate($2);
  useEffect(() => {
    if (!isLoading && !user) {
      toast.error($2);
      navigate("/login?redirect=/profile")
    }
  }, [user, isLoading, navigate]),

  if (isLoading) {
    return (
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Button } from "@/components/ui/button",import { useNavigate } from "react-router-dom";

import { toast } from "sonner";
export default function Profile() {

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { user, isLoading, logout } = useAuth();
<<<<<<< HEAD
import { useNavigate } from "react-router-dom","
import { toast } from "sonner","
export default function Profile() {
}
const { user, isLoading, logout } = useAuth(),;
const navigate = useNavigate(),;
return (;
=======
<<<<<<< HEAD
  const navigate = useNavigate();

  if (isLoading) {;
    return (
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  const navigate = useNavigate();
=======


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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  if (isLoading) {;
    return (
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="animate-pulse text-white">Loading profile...</div>
        </div>
        <Footer />
      </>
<<<<<<< HEAD
    );
  }

  if (!user) {;
    return (
=======
<<<<<<< HEAD
    )
  }
  if (!user) {
    return (
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    );
  }

  if (!user) {;
    return (
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md">
            <h1 className="text-xl font-bold text-white mb-4">Please log in</h1>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <p className="text-zion-slate mb-4">
              You need to be logged in to view your profile.
            </p>
            <Button
              onClick={() => navigate("/login?redirect=/profile")}

<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            >;
              Go to Login;
            </Button>;
          </div>;
        </div>;
        <Footer />;
      </>;
    );
<<<<<<< HEAD
  }

    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto px-4 py-8">;
          <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
            <div className="flex flex-col md:flex-row gap-6">;
              <div className="md:w-1/3">;
                <div className="w-32 h-32 rounded-full bg-zion-purple flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0">;
=======
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
  return (;
=======
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
=======
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
                    logout($2);
                    navigate("/")
                  }}
=======
                    logout();

                    logout(),
=======
                  {user && user.displayName ? user && user.displayName.split(' ').map(name => name[0]).join('') : user && user.email?.charAt(0)}
                </div>;
              </div>;
              <div className="md:w-2/3">;
                <h2 className="text-xl font-bold text-white">{user && user.displayName || "User"}</h2>;
                <p className="text-zion-slate-light mb-4">{user && user.email}</p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="w-32 h-32 rounded-full bg-zion-purple flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0">
                  {user.displayName
                    ? user.displayName
                        .split(" ")
                        .map((name) => name[0])
                        .join("")
                    : user.email?.charAt(0)}
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-xl font-bold text-white">
                  {user.displayName || "User"}
                </h2>
                <p className="text-zion-slate-light mb-4">{user.email}</p>
                <Button
                  onClick={() => {

                    logout();

                    logout(),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    navigate("/")

                  }}

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  )
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )import React, { useEffect } from 'react';'
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Button } from "@/components/ui/button",;"
import { useNavigate } from "react-router-dom",;"
import { toast } from "sonner",;"
export default function Profile() {;
  }
=======
<<<<<<< HEAD

=======
  )
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    navigate("/");
                  }}
                  variant="outline";
                  className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
<<<<<<< HEAD

}
      toast.error ("Please log in to view your profile");
      navigate ("/login?redirect=/profile");

import React, { useEffect } from 'react',;

import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { useNavigate } from "react-router-dom",;

import { toast } from "sonner",;

  const { user, isLoading, logout } = useAuth(),;
  const navigate = useNavigate(),;
>>>>>>> origin/chore/fix-lint-and-merge
  useEffect(() => {;
    if (!isLoading && !user) {;"
      toast.error("Please log in to view your profile"),;"
      navigate("/login?redirect=/profile");
    if (!isLoading && !user) {;"
      toast.error("Please log in to view your profile"),;""
      navigate("/login?redirect=/profile");"

      </>;
    );
  }
;
  return (;
    <>;
      <Header />;
</Header>"
      <div className="min-h-screen bg-zion-blue">;"
</div>"
        <div className="container mx-auto px-4 py-8">;"
</div>"
          <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>;""
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;"
</div>"
            <div className="flex flex-col md:flex-row gap-6">;"
</div>"
              <div className="md:w-1/3">;"
</div>"
                <div className="w-32 h-32 rounded-full bg-zion-purple flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0">;"
</div>
                </div>;
              </div>;"
              <div className="md:w-2/3">;"
</div>"
                <h2 className="text-xl font-bold text-white">{user.displayName || "User"}</h2>;""
                <p className="text-zion-slate-light mb-4">{user.email}</p>;"
                <Button;)
=======
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
      toast.error ("Please log in to view your profile");
      navigate ("/login?redirect=/profile");

<<<<<<< HEAD
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useEffect } from 'react',;

import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { useNavigate } from "react-router-dom",;

import { toast } from "sonner",;

  const { user, isLoading, logout } = useAuth(),;
  const navigate = useNavigate(),;
>>>>>>> origin/chore/fix-lint-and-merge
  useEffect(() => {;
    if (!isLoading && !user) {;"
      toast.error("Please log in to view your profile"),;"
      navigate("/login?redirect=/profile");
<<<<<<< HEAD
    if (!isLoading && !user) {;"
      toast.error("Please log in to view your profile"),;""
      navigate("/login?redirect=/profile");"
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      </>;
    );
  }
;
<<<<<<< HEAD
  return (;
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >;
              Go to Login;
            </Button>;
          </div>;
        </div>;
        <Footer />;
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  onClick={() => {;
                    logout();
                    navigate("/");
                  }}
                  variant="outline";
                  className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
<<<<<<< HEAD

=======
=======
      </>);
  }
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <>;
      <Header />;
</Header>"
      <div className="min-h-screen bg-zion-blue">;"
</div>"
        <div className="container mx-auto px-4 py-8">;"
</div>"
          <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>;""
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;"
</div>"
            <div className="flex flex-col md:flex-row gap-6">;"
</div>"
              <div className="md:w-1/3">;"
</div>"
                <div className="w-32 h-32 rounded-full bg-zion-purple flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0">;"
</div>
                </div>;
              </div>;"
              <div className="md:w-2/3">;"
</div>"
                <h2 className="text-xl font-bold text-white">{user.displayName || "User"}</h2>;""
                <p className="text-zion-slate-light mb-4">{user.email}</p>;"
                <Button;)
                  onClick={() => {;
                    logout();
                    navigate("/");
                  }}
                  variant="outline";
<<<<<<< HEAD
                  className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";

=======
                  className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text - white";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                >;
                  Logout;
</Button>

                </Button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
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

<<<<<<< HEAD
=======
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

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </>;
  ); export default function Profile () {}
  const {};
  user, isLoading, logout;
}= useAuth ();
const navigate = useNavigate ();
useEffect ( () => {}
  if (!isLoading && !user) {}
}
;

<<<<<<< HEAD
}, [user, isLoading, navigate]);"
return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="animate-pulse text-white" >Loading profile...</div> </div> <Footer /> </> if (!user) {"
  return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md" > <h1 className="text-xl font-bold text-white mb-4" >Please log in</h1> <p className="text-zion-slate mb-4" >You need to be logged in to view your profile.</p> <Button > Go to Login </Button> </div> </div> <Footer /> </>) "
=======
<<<<<<< HEAD
}, [user, isLoading, navigate]);"
return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="animate-pulse text-white" >Loading profile...</div> </div> <Footer /> </> if (!user) {"
  return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md" > <h1 className="text-xl font-bold text-white mb-4" >Please log in</h1> <p className="text-zion-slate mb-4" >You need to be logged in to view your profile.</p> <Button > Go to Login </Button> </div> </div> <Footer /> </>) "
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
