import { Navigate } from "react-router-dom";""
import { useAuth } from "@/hooks/useAuth";""
import { Header } from "@/components/Header";""
import { Footer } from "@/components/Footer";""
import { LoginContent } from "@/components/auth/login";"
export default function Login() {
  const { isAuthenticated, user } = useAuth();

  // Redirect if user is already logged in and has completed profile;
  if (isAuthenticated && user?.profileComplete) {"
    return <Navigate to="/" />;"
</Navigate>"
    return <Navigate to="/onboarding" />;"
</Navigate>"
    return <Navigate to="/onboarding" />;"
</Navigate>"
    return <Navigate to="/" />;"
</Navigate>"
    return <Navigate to="/onboarding" />;"
</Navigate>
    <>;
      <Header />;
</Header>
      <LoginContent />;
</LoginContent>
      <Footer />;
</Footer>

    </>);
}

}
    </>;
  ),; export default function Login () {
  const {
  // TODO: Implement
}
  isAuthenticated, user;
}= useAuth ();
//Redirect if user is already logged in and has completed profile if (isAuthenticated && user?.profileComplete) {
  "
}// Redirect to onboarding if user is authenticated but hasn't completed profile if (isAuthenticated && !user?.profileComplete) {'
}

}
}
    </>;
  );
}
}
'