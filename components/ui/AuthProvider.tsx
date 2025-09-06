import React, { createContext, useContext, useEffect, useState } from 'react';
type UserRole = any;
  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );

export function useAuth() {
  return useContext(AuthContext);    <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
return useContext(AuthContext);
}
