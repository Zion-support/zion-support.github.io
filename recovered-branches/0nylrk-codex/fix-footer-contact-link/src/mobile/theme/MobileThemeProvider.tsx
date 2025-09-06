<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import { useTheme } from "@/hooks/useTheme";
interface MobileThemeProviderProps {
  children: React.ReactNode
}
export function MobileThemeProvider({ children }: MobileThemeProviderProps) {

export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;
  const { theme } = useTheme();
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>
import React from "react",
import { useTheme } from "@/hooks/useTheme",
interface MobileThemeProviderProps {
<<<<<<< HEAD
=======
  children: React.ReactNode
}
<<<<<<< HEAD
export function MobileThemeProvider({ children }: MobileThemeProviderProps) {
=======

export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { theme } = useTheme();
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>
=======
import React from "react",
import { useTheme } from "@/hooks/useTheme",
=======
import React from './react';
import { use_theme } from '@/hooks / use_theme';

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
interface MobileThemeProviderProps {
  children: React.ReactNode
import React from "react",;
import { useTheme } from "@/hooks/useTheme",;
interface MobileThemeProviderProps {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  children: React.ReactNode;
}
<<<<<<< HEAD




export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;


  const { theme } = useTheme();
  return (;
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>;
<<<<<<< HEAD
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      {children}
=======
export /**
 * MobileThemeProvider - Function description
 */
function MobileThemeProvider() {
  const { theme } = use_theme ();
;
  return (
    <div className={`mobile - app ${theme === 'dark' ? 'dark' : 'light'}`}>;
      {children}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
