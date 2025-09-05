// Emergency stub for react-markdown during build issues;
;
export interface ReactMarkdownProps {;
  children?:string,;
  className?:string,;
  components?:Record<string any>,;
  [key:string]:any;
}
<<<<<<< HEAD
;
// Stub ReactMarkdown component - simple function that returns the children as text;
export const ReactMarkdown = (props:ReactMarkdownProps) => {;
  // Return null for build compatibility, or could return children as plain text;
  return null,;
},;
;
// Export as default;
export default ReactMarkdown,;
;
// Additional exports that might be needed;
export const remarkPlugins = [],;
=======

// Stub ReactMarkdown component - simple function that returns the children as text
export const ReactMarkdown = (props: ReactMarkdownProps) => {
  // Return null for build compatibility, or could return children as plain text
  return null
},
// Export as default
export default ReactMarkdown,

// Additional exports that might be needed
export const remarkPlugins = [],
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export const rehypePlugins = [],