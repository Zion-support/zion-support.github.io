 >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Define types for our context //Mock auth functions for now - these would connect to Supabase in a real implementation const signIn = async (email: string, password: string) => {
  //This would be replaced with actual Supabase auth //Mock successful sign-in setUser ({
  id: "mock-user-id";
email;
displayName: "Mock User";
name: "Mock User";
avatarUrl: "";
profileComplete: true;
//Mock successful sign-up setUser ({
  id: " mock-user-id";
email;
displayName: userData?.name || " New User";
name: userData?.name || " New User";
userType: userData?.userType;
profileComplete: false 
});
return {
  error: null 
}
};
const resetPassword = async (email: string) => {
  //Mock implementation if (user) {
  setUser ({
  ...user, ...data 
}) 
}return {
  error: null 
}
};
const loginWithGoogle = async () => {
  //Mock implementation setUser ({
  id: " google-user-id";
email: " google@example.com";
displayName: " Google User";
name: " Google User";
profileComplete: true 
}) 
};
const loginWithFacebook = async () => {
  //Mock implementation setUser ({
  id: " facebook-user-id";
email: " facebook@example.com";
displayName: " Facebook User";
name: " Facebook User";
profileComplete: true 
}) 
};
const loginWithTwitter = async () => {
  //Mock implementation setUser ({
  id: " twitter-user-id";
email: " twitter@example.com";
displayName: " Twitter User";
name: " Twitter User";
profileComplete: true 
}) 
};
const loginWithWeb3 = async () => {
  
}try {
  const accounts = await ethereum.request ({
  method: 'eth requestAccounts' 
});
const address = accounts[0];
await ethereum.request ({
  method: 'personal sign';
params: [address, address] 
});
setUser ({
  id: address;
displayName: address;
profileComplete: true 
}) 
}catch (err) {
  console.error ('Web3 login failed', err) 
}
};
//Check for existing session on mount useEffect ( () => {
  //Mock loading state and then set a null user to simulate no session setIsLoading (true);
setTimeout ( () => {
  setUser (null);
setIsLoading (false) 
}, 100) 
}, []);
const value = {
  user;
isAuthenticated: !!user;
isLoading;
signIn;
signOut;
signUp;
//Add aliases for compatibility login: signIn;
logout: signOut;
signup: signUp;
resetPassword;
updateProfile;
loginWithGoogle;
loginWithFacebook;
loginWithTwitter;
loginWithWeb3 
};
return <AuthContext.Provider value= {
  value 
}> {
  children 
}</AuthContext.Provider> 
}// Custom hook to use the auth context export function useAuth () : AuthContextType {
  const context = useContext (AuthContext);
if (context === undefined) {
  
}return context;
}