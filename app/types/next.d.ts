<<<<<<< HEAD
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}
=======
// Next.js type definitions
declare module 'next' {
  interface NextPageProps {
    params: Record<string, string>;
    searchParams: Record<string, string | string[] | undefined>;
  }
}

export {};
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
