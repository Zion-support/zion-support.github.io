
// Mock Supabase client for development;
<<<<<<< HEAD
// In production, this would be the actual Supabase client;
import { createClient } from "@supabase/supabase-js";
import { supabaseStorageAdapter } from "./safeStorageAdapter";

interface SupabaseClient {auth: {
signUp: (credentials: any) => Promise<any> signIn: (credentials: any) => Promise<any>;,
signOut: () => Promise<any> user: () => any;
}
}
onAuthStateChange: (callback: any) => any};
from: (table: string) => any, storage: {
from: (bucket: string) => any};
}

// Mock implementation;
const createMockSupabaseClient: any = (): SupabaseClient => ({
auth: {
signUp: async (credentials: any) => {
;
return { data: { user: { id: "1", email: credentials.email } } error: null };
},
signIn: async (credentials: any) => {

return { data: { user: { id: "1", email: credentials.email } } error: null };
=======
// In production; this would be the actual Supabase client;
import { createClient } from "@supabase/supabase-js";
import { supabaseStorageAdapter } from "./safeStorageAdapter";

interface SupabaseClient {auth: {,
signUp: (credentials: any) => Promise<any>, signIn: (credentials: any) => Promise<any>;,
signOut: () => Promise<any>, user: () => any;
}
}
interface SupabaseClient {
auth: {,
signUp: (credentials: any) => Promise<any>, signIn: (credentials: any) => Promise<any>;,
signOut: () => Promise<any>, user: () => any;,
onAuthStateChange: (callback: any) => any,
};
from: (table: string) => any; storage: {,
from: (bucket: string) => any,
};
}

// Mock implementation;
const createMockSupabaseClient: any = (): SupabaseClient => ({,
auth: {,
signUp: async (credentials: any) => {
;
return { data: { user: { id: "1", email: credentials.email } }, error: null };
},
signIn: async (credentials: any) => {

return { data: { user: { id: "1", email: credentials.email } }, error: null };
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
},
signOut: async () => {

return { error: null };
},
<<<<<<< HEAD
user: () => ({ id: "1", email: "user@example.com" })
onAuthStateChange: (callback: any) => {

return { data: { subscription: { unsubscribe: () => {} } } };
},
},
from: (table: string) => ({
select: (columns: string) => ({
eq: (column: string, value: any) => ({
single: async () => ({ data: null, error: null })
execute: async () => ({ data: [], error: null })
}),
execute: async () => ({ data: [], error: null })
}),
insert: (data: any) => ({
execute: async () => ({ data: null, error: null })
}),
update: (data: any) => ({
eq: (column: string, value: any) => ({
execute: async () => ({ data: null, error: null })
}),
}),
delete: () => ({
eq: (column: string, value: any) => ({
execute: async () => ({ data: null, error: null })
}),
}),
}),
storage: {
from: (bucket: string) => ({
upload: async (path: string, file: File) => ({ data: null, error: null })
download: async (path: string) => ({ data: null, error: null })
remove: async (paths: string[]) => ({ data: null, error: null })
=======
user: () => ({ id: "1", email: "user@example.com" }),
onAuthStateChange: (callback: any) => {

return { data: { subscription: { unsubscribe: () => {} } } };
<<<<<<< HEAD
}},
from: (table: string) => ({
select: (columns: string) => ({
=======
},
},
from: (table: string) => ({,
select: (columns: string) => ({,
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
eq: (column: string; value: any) => ({,
single: async () => ({ data: null; error: null }),
execute: async () => ({ data: [], error: null }),
}),
execute: async () => ({ data: [], error: null }),
}),
insert: (data: any) => ({,
<<<<<<< HEAD
execute: async () => ({ data: null; error: null })}),
update: (data: any) => ({
eq: (column: string; value: any) => ({,
execute: async () => ({ data: null; error: null }),
}),
}),
delete: () => ({,
eq: (column: string; value: any) => ({,
execute: async () => ({ data: null; error: null })})})}),
storage: {
=======
execute: async () => ({ data: null; error: null }),
}),
update: (data: any) => ({,
eq: (column: string; value: any) => ({,
execute: async () => ({ data: null; error: null }),
}),
}),
delete: () => ({,
eq: (column: string; value: any) => ({,
execute: async () => ({ data: null; error: null }),
}),
}),
}),
storage: {,
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
from: (bucket: string) => ({,
upload: async (path: string; file: File) => ({ data: null; error: null }),
download: async (path: string) => ({ data: null; error: null }),
remove: async (paths: string[]) => ({ data: null; error: null }),
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
}),
},
});

export const supabase = createMockSupabaseClient();
