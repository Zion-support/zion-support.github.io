// Emergency stub for react-markdown during build issues

export interface ReactMarkdownProps {_children?: string;
  className?: string;
  components?: Record<string, _any>;
  [key: string]: unknown;}

// Stub ReactMarkdown component - simple function that returns the children as text
export const _ReactMarkdown = (_props: ReactMarkdownProps) => {_// Return null for build compatibility, _or could return children as plain text
  return null;};

// Export as default
export default ReactMarkdown;

// Additional exports that might be needed
export const _remarkPlugins = [];
export const _rehypePlugins = [];