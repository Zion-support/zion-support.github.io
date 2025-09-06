
// "createContext" may be untyped if React type definitions are missing.;
// To avoid TS2347 when the definitions are unavailable, we cast the default;
// value instead of passing a generic type parameter directly.;
const MessagingContext = createContext(;
  defaultContext as MessagingContextType;

}