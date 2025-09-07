<<<<<<< HEAD
import { useState, useEffect } from "react";
interface User {
  id: string;
  email: string;
  name: string;
}
export const useAuth = () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useState, useEffect  } from './react';
;
=======

import { useState, useEffect  } from './react';
;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface User {
  // TODO: Implement
}
  id: string;,
  email: string;
  name: string;
<<<<<<< HEAD
=======
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export const useAuth = () => {

export const useAuth = () => {;
  const [user, setUser] = useState<User | null>(null);

;
<<<<<<< HEAD
=======
  useEffect (() => {
    // Simulate auth check;
    set_loading (false);
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const useAuth = () => {

export const useAuth = () => {;
>>>>>>> merged-prs-20250907-203621
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate auth check
    setLoading(false);
  }, []);
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return {
    user
    loading
    login: (email: string, password: string) => {
<<<<<<< HEAD
      // Simulate login
      setUser({ id: "1", email, name: "User" });
    }
    logout: () => {
      setUser(null);
    }
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Simulate login;
      set_user ({ id: "1", email, name: "User" });
    },
    logout: () => {
      set_user (null);
    },
>>>>>>> merged-prs-20250907-203621
  }
}
<<<<<<< HEAD
;
=======
;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
