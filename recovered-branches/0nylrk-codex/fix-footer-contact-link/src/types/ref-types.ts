
import { LegacyRef, Ref } from &quot;react&quot;;

// A type that safely handles all possible reference types
export type SafeRef<T> = LegacyRef<T> | Ref<T>;
