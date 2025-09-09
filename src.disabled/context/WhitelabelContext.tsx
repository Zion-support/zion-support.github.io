import: React { createContext, useContext, useState, ReactNode } from;
  'react'  interface: WhitelabelContextType {';
   isWhitelabeled: boolean;
   brandName: string;
   brandLogo: string;
   primaryColor: string;
   secondaryColor: string;
   setBrandName: (name: string) => void;

