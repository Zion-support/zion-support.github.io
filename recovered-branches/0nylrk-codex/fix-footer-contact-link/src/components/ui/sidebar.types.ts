

// This file fixes the ref type issues in sidebar components
// Export a placeholder to ensure the file is recognized as a module

// Safe ref casting helper type - this is the key to fixing our issues
// We need to use a type that is compatible with both Slot's ref and React's ref handling
export type SafeRef<T> = React.Ref<T>,

// Sidebar specific types
export type SidebarState = "expanded" | "collapsed",

};
