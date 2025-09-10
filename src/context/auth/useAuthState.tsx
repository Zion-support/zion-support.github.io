<<<<<<< HEAD:src_backup_temp/context/auth/useAuthState.tsx
: "src/context/auth/useAuthState.tsx;
interface User {;
  "id": string;
  "email": string;
=======
:src/context/auth/useAuthState.tsx;

interface User {
  id: string;
  email: string;
>>>>>>> origin/automation-fixes:src/context/auth/useAuthState.tsx
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
<<<<<<< HEAD:src_backup_temp/context/auth/useAuthState.tsx
"}
;
interface AuthTokens {;
  "accessToken": "string | null;
  "refreshToken": string | null"}
;
  "accessToken": "string | null;
  "refreshToken": string | null;
"}
;
export const useAuthState[, React.Dispatch<React.SetStateAction<any>>] = : "unknown {;
  const [user", setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<typeof true>(true);
  const [onboardingStep, setOnboardingStep] = useState<typeof 0>(0);
  const [tokens, setTokens] = useState<any>({;
    "accessToken": "nul l",;
    "refreshToken": "nul l;
  "});
;
  useEffect(() => {;
  // "TODO": "Add dependencies if needed;
"}, []);
    // Check for existing auth state on mount;
: "src/context/auth/useAuthState.tsx;
    ;    accessToken: nul l,
    refreshToken: nul l
  }
    );
  useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
    // Check for existing auth state on mount
:src/context/auth/useAuthState.tsx
    
        if(typeof window !== 'null') {;
          if(auth) {;
        if(typeof window !== 'null') {;
          if(auth) {;
            if(parsed.user && parsed.token) {;
              setUser(parsed.user);
              setTokens({;
<<<<<<< HEAD:src_backup_temp/context/auth/useAuthState.tsx
                "accessToken": parse d.token",;
: "src/context/auth/useAuthState.tsx;
                "refreshToken": parse d.refreshToken || null';
        // // // // // // // // console.error('Error checking auth "state":'", error)} finally {;
=======

                accessToken: parsed.token,
:src/context/auth/useAuthState.tsx;
                refreshToken: parsed.refreshToken || null';
        // // // // // // // // console.error('Error checking auth state:', error)} finally {;

>>>>>>> origin/automation-fixes:src/context/auth/useAuthState.tsx
        setIsLoading(false)})}
                "refreshToken": "parse d.refreshToken || null;
        // // // // // // // console.error('Error checking auth "state":'", error)} finally {;
        setIsLoading(false)})}
          }
        }
      } catch(error) {;
        // console.error('Error checking auth "state":', error)} finally {;
        setIsLoading(false)}
    };
    checkAuthState()}, []);
  return {;
<<<<<<< HEAD:src_backup_temp/context/auth/useAuthState.tsx
    user,;
    setUser,;
    isLoading,;
    setIsLoading,;
    onboardingStep,;
    setOnboardingStep,;
    tokens,;
    setTokens;
  }};
;
</any>;
</typeof>;
</typeof>;
</any>;
</any>;
</React>
=======

    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep,
    tokens,
    setTokens;
}};
>>>>>>> origin/automation-fixes:src/context/auth/useAuthState.tsx
