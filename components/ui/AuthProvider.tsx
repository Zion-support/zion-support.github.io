

import React, { createContext, useContext, useEffect, useState } from react';
type UserRole = any;
type UserRole = 'talent | client';
type AuthContextType = {
  role: UserRole;
  setRole: (role: UserRole) => void;
}
const AuthContext = createContext<AuthContextType>({
  role: 'talent
  setRole: () => {}
});  role: UserRole
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  setRole: (role: UserRole) => void
},


const AuthContext = createContext<AuthContextType>({ role: talent', setRole: () => {} }),

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>('talent'),

  useEffect(() => {
    try {


=======
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
