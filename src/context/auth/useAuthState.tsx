interface User {
  id: string;
  email: string;  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
                accessToken: parsed.token,
:src/context/auth/useAuthState.tsx;
                refreshToken: parsed.refreshToken || null';
        // // // // // // // // console.error('Error checking auth state:', error)} finally {;
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
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep,
    tokens,
    setTokens;
}};