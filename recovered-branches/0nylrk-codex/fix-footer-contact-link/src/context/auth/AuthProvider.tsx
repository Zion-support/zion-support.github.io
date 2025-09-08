


import { mapProfileToUser } from "./profileMapper",



export const AuthProvider = ({ children }: { children: React.ReactNode }) => {









              

              // Show welcome toast when user logs in






  const navigate = useNavigate(),;
  const location = useLocation(),;
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep),;
  const {;
    login: loginImpl,;
    signup: signupImpl,;
pr-12325










          }
        }
        setIsLoading(false);
      }



















    onboardingStep;
  };

    <AuthContext && AuthContext.Provider value={authContextValue}>;
      {children}



