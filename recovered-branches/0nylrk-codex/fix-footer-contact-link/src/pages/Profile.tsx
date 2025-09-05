
import React, { useEffect } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { useNavigate } from "react-router-dom",
import { toast } from "sonner",export default function Profile() {
  const { user, isLoading, logout } = useAuth(),
  const navigate = useNavigate(),

  useEffect(() => {
    if (!isLoading && !user) {
      toast.error("Please log in to view your profile"),
      navigate("/login?redirect=/profile")    }
  }, [user, isLoading, navigate]),
import React, {useEffect} from 'react';

export default function Profile() {const { user, isLoading, logout} = useAuth();
  const navigate = useNavigate();

  useEffect_(() => {if (!isLoading && !user) {
      toast.error("Please log in to view your profile");
      navigate("/login?redirect=/profile")}
  }, [user, isLoading, navigate]);

  if (isLoading) {return (
      <>
        <Header />
        <div className=&quot;min-h-screen bg-zion-blue flex items-center justify-center&quot;>
          <div className=&quot;animate-pulse text-white&quot;>Loading profile...</div>
        </div>
        <Footer />
      </>
    )
  }
  if (!user) {return (_<>
        <Header />
        <div className=&quot;min-h-screen bg-zion-blue flex items-center justify-center&quot;>
          <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md&quot;>
            <h1 className=&quot;text-xl font-bold text-white mb-4&quot;>Please log in</h1>
            <p className=&quot;text-zion-slate mb-4&quot;>You need to be logged in to view your profile.</p>
            <Button,
onClick={() => navigate("/login?redirect=/profile")}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white"            >
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
                <h2 className=&quot;text-xl font-bold text-white&quot;>{user.displayName || &quot;User&quot}</h2>
                <p className=&quot;text-zion-slate-light mb-4&quot;>{user.email}</p>
                <Button,
onClick={() => {
                    logout(),
                    navigate("/")
                  }}                  variant="outline"
                  className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
                    logout();
                    navigate(&quot;/&quot;)
                  }}
                  variant=&quot;outline&quot;
                  className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
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
