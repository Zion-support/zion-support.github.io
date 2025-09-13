export const supabase = {
  functions: {
    invoke: async (_name: string, { body }: any) => {
      return { data: { generated: { description: '', tags: [], suggestedPrice: { min: 0, max: 0 }, keyPoints: [] } }, error: null };
    }
  }
};

