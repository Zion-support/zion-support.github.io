<<<<<<< HEAD
<<<<<<< HEAD

import {createClient} from '@supabase/supabase-js';
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
if (!supabaseUrl |!supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
=======




import {createClient} from '@supabase/supabase-js';


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
<<<<<<< HEAD
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
// Utility to detect network connectivity. navigator.onLine is not reliable in
// all environments, so we also try a small request with a short timeout.
export const checkOnline = async (): Promise<boolean> => {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return false
  }
<<<<<<< HEAD
  try {
  try {;
=======


  try {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 3000);
    await fetch('https://clients3.google.com/generate_204', {
      mode: 'no-cors'
      signal: controller.signal});
    clearTimeout(id);
    return true
  } catch {
    return false
  }
}
// Custom fetch wrapper to provide clearer errors when network requests fail
export const safeFetch: typeof fetch = async (input, init) => {
  if (!(await checkOnline())) {
    throw new Error('No internet connection')
  }
  try {
    return await fetch(input, init)
  } catch (err) {
    // Log the original error for debugging;
    console.error('Supabase fetch failed:', err);
    throw new Error('Failed to connect to Supabase')
  }
}
<<<<<<< HEAD
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: { fetch: safeFetch };
});
// Helper function to get profiles table
export const getFromProfiles = () => supabase.from('profiles');
=======

;
// Custom fetch wrapper to provide clearer errors when network requests fail;
export const safe_fetch: typeof fetch = async (input, init) => {
  if ()) {) {
  $2
}
    throw new Error ('No internet connection');

  }
  try {
    return await fetch (input, init);
  } catch (err) {

export const getFromProfiles = () => supabase && supabase.from('profiles');

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
}
;
// Utility to detect network connectivity. navigator.onLine is not reliable in;
// all environments, so we also try a small request with a short timeout.;
export const checkOnline = async (): Promise<boolean> => {;
  if (typeof navigator !== 'undefined' && !navigator.onLine) {;
    return false;
  }
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  try {;
    const controller = new AbortController(),;
    const id = setTimeout(() => controller.abort(), 3000),;
    await fetch('https://clients3.google.com/generate_204', {;
      mode: 'no-cors',;
      signal: controller.signal}),;
    clearTimeout(id),;
    return true;
  } catch {;
    return false;
  }
},;
// Custom fetch wrapper to provide clearer errors when network requests fail;
export const safeFetch: typeof fetch = async (input, init) => {;
  if (!(await checkOnline())) {;
    throw new Error('No internet connection');
  }
  try {;
    return await fetch(input, init);
  } catch (err) {;
    // Log the original error for debugging;
    console.error('Supabase fetch failed:', err),;
    throw new Error('Failed to connect to Supabase');
  }
},;
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {;
  global: { fetch: safeFetch }

});
;
// Helper function to get profiles table;
<<<<<<< HEAD
=======




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export const getFromProfiles = () => supabase.from('profiles');
