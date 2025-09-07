<<<<<<< HEAD
      if (stored === 'talent' |stored === 'client') {}
        setRoleState(stored);      }        setRoleState(stored)'
      if (stored === 'talent' || stored === 'client') {}
        setRoleState(stored);      }

<<<<<<< HEAD
      if (stored === 'talent' || stored === 'client') {
=======
'
      if (stored === 'talent' || stored === 'client') {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        setRoleState(stored);      }        setRoleState(stored)
        setRoleState(stored);      }
'
      if (stored === 'talent' || stored === 'client') {}
=======
      if (stored === 'talent' |stored === 'client') {
        setRoleState(stored);      }        setRoleState(stored)
      if (stored === 'talent' || stored === 'client') {
        setRoleState(stored);      }


      if (stored === 'talent' || stored === 'client') {

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        setRoleState(stored);      }

import React, { createContext, useContext, useEffect, useState } from 'react';

type UserRole = any;
<<<<<<< HEAD
  setRole: (role: UserRole) => void;
}
const AuthContext = createContext<AuthContextType>({
  role: 'talent',
  setRole: () => {},
});
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>('talent');
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('userRole') as UserRole | null;
      if (stored === 'talent' || stored === 'client') {
setRoleState(stored);
origin/cursor/automate-test-improve-and-merge-code-2533
      }
    } catch {}
  }, []);
  const setRole = (r: UserRole) => {}
    setRoleState(r);
<<<<<<< HEAD
try {
=======
    try {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      window.localStorage.setItem('userRole', r);
      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;    } catch {}
  }
  return (    try {'
      window.localStorage.setItem('userRole', r);`
      document.cookie = `userRole=${r}, path=/, max-age=${60 * 60 * 24 * 365}`
      }
    } catch {}
  }, []);
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  return (
export function useAuth() { return null; }
  return useContext(AuthContext);    <AuthContext && AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext && AuthContext.Provider>;
  );
}
    <AuthContext.Provider value={{ role, set_role }}>;
      {children}
    </AuthContext.Provider>
  );

<<<<<<< HEAD
export function useAuth() {;
=======


export function useAuth() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return useContext(AuthContext);    <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() { return null; }
}
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
) => {
  return $3;}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;

    } catch {}
  }
  return (<AuthContext.Provider value={{ role, setRole }} />;
      {children}

    </AuthContext.Provider>
  );

export function useAuth() {
  return useContext(AuthContext);
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
