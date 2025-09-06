

import { Footer } from "@/components/Footer";
import { LoginContent } from "@/components/auth/login";
export default function Login() {
  const { isAuthenticated, user } = useAuth();

import { Footer } from "@/components/Footer",
import { LoginContent } from "@/components/auth/login",
export default function Login() {
  const { isAuthenticated, user } = useAuth(),
  


  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />;
  }

  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />

  }


    <>;
      <Header />;
      <LoginContent />;
      <Footer />;



    </>);
}

}

    </>;
  ),; export default function Login () {
  const {
  isAuthenticated, user 
}= useAuth ();
//Redirect if user is already logged in and has completed profile if (isAuthenticated && user?.profileComplete) {
  
}// Redirect to onboarding if user is authenticated but hasn't completed profile if (isAuthenticated && !user?.profileComplete) {
  
}

}
}
    </>;
  );
}
}



