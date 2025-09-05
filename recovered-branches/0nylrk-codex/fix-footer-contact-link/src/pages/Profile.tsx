
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { useNavigate } from "react-router-dom",
import { toast } from "sonner",
=======
import React, { useEffect } from 'react';
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { toast } from &quot;sonner&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function Profile() {
  const { user, isLoading, logout } = useAuth(),
  const navigate = useNavigate(),

  useEffect(() => {
    if (!isLoading && !user) {
<<<<<<< HEAD
      toast.error("Please log in to view your profile"),
      navigate("/login?redirect=/profile")
=======
      toast.error(&quot;Please log in to view your profile&quot;);
      navigate(&quot;/login?redirect=/profile&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  }, [user, isLoading, navigate]),
=======
import React, {_useEffect} from 'react';

export default function Profile() {_const { user, _isLoading, _logout} = useAuth();
  const _navigate = useNavigate();

  useEffect__(() => {_if (!isLoading && !user) {
      toast.error("Please log in to view your profile");
      navigate("/login?redirect=/profile");}
  }, [user, isLoading, navigate]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (isLoading) {_return (
      <>
        <Header />
        <div className=&quot;min-h-screen bg-zion-blue flex items-center justify-center&quot;>
          <div className=&quot;animate-pulse text-white&quot;>Loading profile...</div>
        </div>
        <Footer />
      </>
<<<<<<< HEAD
    )
  }
=======
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!user) {_return (_<>
        <Header />
        <div className=&quot;min-h-screen bg-zion-blue flex items-center justify-center&quot;>
          <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md&quot;>
            <h1 className=&quot;text-xl font-bold text-white mb-4&quot;>Please log in</h1>
            <p className=&quot;text-zion-slate mb-4&quot;>You need to be logged in to view your profile.</p>
            <Button 
<<<<<<< HEAD
              onClick={() => navigate("/login?redirect=/profile")}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white"
=======
              onClick={() => navigate(&quot;/login?redirect=/profile&quot;)}
              className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
      <div className=&quot;min-h-screen bg-zion-blue&quot;>
        <div className=&quot;container mx-auto px-4 py-8&quot;>
          <h1 className=&quot;text-2xl font-bold text-white mb-8&quot;>My Profile</h1>
          <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6&quot;>
            <div className=&quot;flex flex-col md:flex-row gap-6&quot;>
              <div className=&quot;md:w-1/3&quot;>
                <div className=&quot;w-32 h-32 rounded-full bg-zion-purple flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0&quot;>
                  {user.displayName ? user.displayName.split(' ').map(name => name[0]).join('') : user.email?.charAt(0)}
                </div>
              </div>
              <div className=&quot;md:w-2/3&quot;>
                <h2 className=&quot;text-xl font-bold text-white&quot;>{user.displayName || &quot;User&quot;}</h2>
                <p className=&quot;text-zion-slate-light mb-4&quot;>{user.email}</p>
                <Button
                  onClick={() => {
<<<<<<< HEAD
                    logout(),
                    navigate("/")
                  }}
=======
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="w-32 h-32 rounded-full bg-zion-purple flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto md:mx-0">
                  {_user.displayName ? user.displayName.split(' ').map(name => name[0]).join('') : user.email?.charAt(0)}
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-xl font-bold text-white">{_user.displayName || "User"}</h2>
                <p className="text-zion-slate-light mb-4">{_user.email}</p>
                <Button
                  onClick={_() => {
                    logout();
                    navigate("/");}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  variant="outline"
                  className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
=======
                    logout();
                    navigate(&quot;/&quot;);
                  }}
                  variant=&quot;outline&quot;
                  className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
}
