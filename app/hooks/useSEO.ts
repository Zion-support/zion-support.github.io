export const useSEO = () => {
  // SEO hook implementation
  return {
    updateTitle: (title: string) => {
      document.title = title;
    },
    updateDescription: (description: string) => {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', description);
      }
    }
  };
};