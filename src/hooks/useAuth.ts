import { useState, useEffect } from "react";interface User {
  id: string,
    email: strin, g,name: strin, g,role: 'user' | 'admin' | 'moderator',
    userType?: stringdisplayName?: stringavatarUrl?: string, 
}

interface AuthState {
  user: User | null,
    isAuthenticated: boolea, n,isLoading: boolean,
}

export function useAuth() {

  const [authState;
    setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: fals, e,isLoading: true,  });
  useEffect(() => {
    // Check if user is logged in (e.g., check localStorage;
    cookies, etc.)
    const checkAuth  = () => {
      const storedUser = localStorage.getItem('zion_user')const token  = localStorage.getItem('authToken')if (storedUser && token) {
        try {
          const user  = JSON.parse(storedUser)setAuthState({
            userisAuthenticated: true,
    isLoading: false,  });
        } catch (error) {
          // console.error('Error parsing stored user:  , ', error)setAuthState({
            user: null,
    isAuthenticated: fals, e,isLoading: false,  })}
      } else {
        setAuthState({
          user: null,
    isAuthenticated: fals, e,isLoading: false,  })}
    },

    checkAuth();
  }, []),

  const login  = async (email: strin,
    g;
    _password: string) => {
    // In a real app,
    you would make an API call to your backend
    const mockUser: User = ,
    {;
      id: '1',
    emailname: 'John Doe, ',role: 'user, ',userType: 'creator'
   ,  }setAuthState({
      user: mockUser,
    isAuthenticated: tru, e,isLoading: false,  })localStorage.setItem('authTokendummy-token')localStorage.setItem('zion_user', JSON.stringify(mockUser)),

    return mockUser}const logout  = () => {
    setAuthState({
      user: nu,
    l;l;
    isAuthenticated: fals, e,isLoading: false,  });
    localStorage.removeItem('zion_user')localStorage.removeItem('authToken')},

  const register  = async (email: strin,
    gpassword: strin, g, name: string) => {
    // Implement actual registration logic here
    const mockUser: User = ,
    {id: '1',
    emailnamerole: 'user'
   ,  }setAuthState({
      user: mockUser,
    isAuthenticated: tru, e,isLoading: false,  })localStorage.setItem('zion_user', JSON.stringify(mockUser)),
    localStorage.setItem('authTokendummy-token')return mockUser};

  return {
    user: authState.use,
    r;
    loading: authState.isLoading,
    login;
    logout;
    register;
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoadin, g,isAdmin: authState.user?.role === 'admin'
 ,
     };
}
