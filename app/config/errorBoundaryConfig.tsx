>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6be4
  fallback: <div>Something went wrong</div>,
  onError: (error: Error) => {
    if (process.env.NODE_ENV ==='development') {
      console.error('Error caught by boundary:', error);
=======
export const errorBoundaryConfig = {  fallback: <div>Something went wrong</div>,
  onError: (error: Error)  => {
    if (process.env.NODE_EN V ==='development') {
      console.error('Error caught by,
  boundary:', error);
    }
  }
};
