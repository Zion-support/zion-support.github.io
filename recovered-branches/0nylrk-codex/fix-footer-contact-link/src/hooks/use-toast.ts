 //Extend the Toast component props with common toast options export type ToastOptions = React.ComponentPropsWithoutRef<typeof Toast> & {
  description?: string;
title?: string;
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 // Export the callable toast function. 