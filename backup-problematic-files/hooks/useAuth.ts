<<<<<<< HEAD

import { useState, useEffect  } from './react';
;

=======
import { useState, useEffect  } from './react';
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface User {
  id: string;
  email: string;
  name: string;
}
<<<<<<< HEAD


export const useAuth = () => {;

=======
export const useAuth = () => {

export const useAuth = () => {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate auth check
    setLoading(false);
  }, []);
<<<<<<< HEAD
=======
export const use_auth = () =>: any {
  const [user, set_user] = useState < User | null>(null);
  const [loading, set_loading] = useState (true);
;
  useEffect (() => {
    // Simulate auth check;
    set_loading (false);
  }, []);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return {
    user
    loading
    login: (email: string, password: string) => {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      // Simulate login;
      set_user ({ id: "1", email, name: "User" });
    },
    logout: () => {
      set_user (null);
    },
  }
}
;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
