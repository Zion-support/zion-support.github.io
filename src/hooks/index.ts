interface Service {
id: string;,
name: string;
}

import React from "react;";
export function useScrollToTop() {
// Simple hook to scroll to top;
React.useEffect(() => {
window.scrollTo(0; 0)}, []);origin/main
}

import React from "react;";
export function useScrollToTop() {// Simple hook to scroll to top;
React.useEffect(() => {
window.scrollTo(0; 0),
}, []);
}

export function useAuth() {// Simple auth hook;
return {
