<<<<<<< HEAD

import { useState, useEffect  } from './react';
;

=======
import { useState, useEffect  } from './react';
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface User {
  id: string;
  email: string;
  name: string;
}
<<<<<<< HEAD


export const useAuth = () => {;

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate auth check
    setLoading(false);
  }, []);
=======
=======
<<<<<<< HEAD:hooks/useAuth.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export const use_auth = () =>: any {
  const [user, set_user] = useState < User | null>(null);
  const [loading, set_loading] = useState (true);
;
  useEffect (() => {
    // Simulate auth check;
    set_loading (false);
<<<<<<< HEAD
  }, []);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
<<<<<<< HEAD
export const useAuth = () => {
=======

export const useAuth = () => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate auth check
    setLoading(false);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/hooks/useAuth.ts
  }, []);
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return {
    user
    loading
    login: (email: string, password: string) => {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Simulate login;
      set_user ({ id: "1", email, name: "User" });
    },
    logout: () => {
      set_user (null);
    },
  }
}
<<<<<<< HEAD
;

=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
