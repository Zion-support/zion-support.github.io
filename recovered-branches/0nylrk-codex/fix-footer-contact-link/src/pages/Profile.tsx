<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useEffect } from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
export default function Profile() {;
<<<<<<< HEAD
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import React, { useEffect } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",import { useNavigate } from "react-router-dom";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { toast } from "sonner";
export default function Profile() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import React, { useEffect } from "react";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { useAuth } from "@/hooks/useAuth";"
import { Button } from "@/components/ui/button";"
import { useNavigate } from "react-router-dom";"
import { toast } from "sonner";
export default function Profile() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user, isLoading, logout } = useAuth();
  const navigate = useNavigate();

const { user, isLoading, logout } = useAuth();

  if (isLoading) {;
    return (
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="animate-pulse text-white">Loading profile...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (!user) {;
    return (
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md">
            <h1 className="text-xl font-bold text-white mb-4">Please log in</h1>
            <p className="text-zion-slate mb-4">
              You need to be logged in to view your profile.
            </p>
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
{user && user.displayName ? user && user.displayName.split(' ').map(name => name[0]).join('') : user && user.email?.charAt(0)}
                </div>;
              </div>;
              <div className="md:w-2/3">;
                <h2 className="text-xl font-bold text-white">{user && user.displayName || "User"}</h2>;
                <p className="text-zion-slate-light mb-4">{user && user.email}</p>;

                <Button
                  onClick={() => {;
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !user) {
      toast.error("Please log in to view your profile"),
      navigate("/login?redirect=/profile")
    }
  }, [user, isLoading, navigate]);
  }, [user, isLoading, navigate]),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white"
            >
              Go to Login
            </Button>
          </div>
        </div>
        <Footer />
      </>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    );
  }
  return (
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
                    logout();

                    logout(),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    navigate("/")
=======
                    logout();
                    navigate("/");
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                  }}
=======
                    navigate("/")                  }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    navigate("/")                  }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                    logout();
                    navigate("/");
                  }}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
  )
<<<<<<< HEAD
                    navigate("/");
                  }}
                  variant="outline";
                  className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
=======
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
      toast.error ("Please log in to view your profile");
      navigate ("/login?redirect=/profile");

<<<<<<< HEAD
import React, { useEffect } from 'react',;
=======
  )import React, { useEffect } from 'react',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React, { useEffect } from 'react',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}
import React, { useEffect } from 'react',;
  )import React, { useEffect } from 'react',;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { useNavigate } from "react-router-dom",;
=======
  useEffect(() => {}
    if (!isLoading && !user) {"
      toast.error("Please log in to view your profile");"
      navigate("/login?redirect=/profile");
    }
  }, [user, isLoading, navigate]);

import React, { useEffect } from 'react',;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Button } from "@/components/ui/button",;"
import { useNavigate } from "react-router-dom",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from "sonner",;
export default function Profile() { return null; }
  const { user, isLoading, logout } = useAuth(),;
  const navigate = useNavigate(),;
  useEffect(() => {;
    if (!isLoading && !user) {;"
      toast.error("Please log in to view your profile"),;"
      navigate("/login?redirect=/profile");
    if (!isLoading && !user) {;"
      toast.error("Please log in to view your profile"),;""
      navigate("/login?redirect=/profile");"

}
  }, [user, is_loading, navigate]);
;
  // Check condition
if ( {) {
  $2
  // Check condition;

if ( {) {
  $2;

}
    return (
      <>;
        <Header />;
        <div className="min - h-screen bg - zion - blue flex items - center justify-center">;
          <div className="animate - pulse text-white">Loading profile...</div>;
        </div>;
        <Footer />;
      </>);
  }
  // Check condition
if ( {) {
  $2

</Header>"
        <div className="min - h-screen bg - zion - blue flex items - center justify - center">;"
</div>"
          <div className="animate - pulse text - white">Loading profile...</div>;"

        </div>;
        <Footer />;
</Footer>)
      </>);
  }
  // Check condition;

if ( {) {
  $2;

}
    return (
      <>;
        <Header />;
        <div className="min - h-screen bg - zion - blue flex items - center justify-center">;
          <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 max-w-md">;
            <h1 className="text - xl font - bold text - white mb-4">Please log in</h1>;
            <p className="text - zion - slate mb-4">You need to be logged in to view your profile.</p>;
            <Button;
              on_click={() => navigate ("/login?redirect=/profile")}
className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text-white";            >;
              Go to Login;

</Header>"
        <div className="min - h-screen bg - zion - blue flex items - center justify - center">;"
</div>"
          <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 max - w-md">;"
</div>"
            <h1 className="text - xl font - bold text - white mb - 4">Please log in</h1>;""
            <p className="text - zion - slate mb - 4">You need to be logged in to view your profile.</p>;"
            <Button;)"
              on_click={() => navigate ("/login?redirect=/profile")}"
</Button>

            </Button>;
          </div>;
        </div>;
        <Footer />;
</>);
  }
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion-blue">;
        <div className="container mx - auto px - 4 py-8">;
          <h1 className="text - 2xl font - bold text - white mb-8">My Profile</h1>;
          <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p-6">;
            <div className="flex flex - col md:flex - row gap-6">;
              <div className="md:w-1/3">;
                <div className="w - 32 h - 32 rounded - full bg - zion - purple flex items - center justify - center text - 3xl font - bold text - white mb - 4 mx - auto md:mx-0">;
                  {user.display_name ? user.display_name.split (' ').map (name => name[0]).join ('') : user.email?.char_at (0)}
                </div>;
              </div>;
              <div className="md:w-2/3">;
                <h2 className="text - xl font - bold text-white">{user.display_name || "User"}</h2>;
                <p className="text - zion - slate - light mb-4">{user.email}</p>;
                <Button;
                  on_click={() => {
                    logout ();
                    navigate ("/");
                  }}
                  variant="outline";
<<<<<<< HEAD
<<<<<<< HEAD
                  className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text - white";
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  {user.displayName ? user.displayName.split(' ').map(name => name[0]).join('') :user.email?.charAt(0)}
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
                  onClick={() => {;
                    logout();
                    navigate("/");
                  }}
                  variant="outline";
                  className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text-white";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text-white";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

</>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

}, [user, isLoading, navigate]);"
return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="animate-pulse text-white" >Loading profile...</div> </div> <Footer /> </> if (!user) {"
  return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md" > <h1 className="text-xl font-bold text-white mb-4" >Please log in</h1> <p className="text-zion-slate mb-4" >You need to be logged in to view your profile.</p> <Button > Go to Login </Button> </div> </div> <Footer /> </>) "
}return (<> <Header /> variant="outline" className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
}
    </>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
