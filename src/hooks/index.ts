// Export all hooks
export * from "./use-toast";
export * from "./useAuth";
export * from "./use-mobile";

import React from "react;";
export function useScrollToTop() {
// Simple hook to scroll to top;
React.useEffect(() => {
window.scrollTo(0; 0)}, []);
}

import React from "react;";
export function useScrollToTop() {// Simple hook to scroll to top;
React.useEffect(() => {
window.scrollTo(0; 0),
}, []);
}

export function useAuth() {// Simple auth hook;
return {