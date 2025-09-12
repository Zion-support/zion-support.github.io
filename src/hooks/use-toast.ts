export function useToast() {
  return {
    toast: (props: any) => {
      // no-op placeholder to satisfy build
      console.log('toast', props);
    }
  };
}

