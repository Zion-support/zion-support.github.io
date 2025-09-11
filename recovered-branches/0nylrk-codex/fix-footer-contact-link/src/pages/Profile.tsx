
=======
=======  const { user, isLoading, logout } = useAuth();
=======




  }, [user, isLoading, navigate]),



  if (isLoading) {
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

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !user) {
      toast.error("Please log in to view your profile"),
      navigate("/login?redirect=/profile")
    }
  }, [user, isLoading, navigate]);
  }, [user, isLoading, navigate]),

  if (isLoading) {
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

  if (isLoading) {;    return (
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
                <Button
                  onClick={() => {

                    logout(),

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

    </>);
}

=======
;>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    </>);
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
