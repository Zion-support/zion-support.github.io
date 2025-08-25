
interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}

<<<<<<< HEAD
export function GradientHeading({ children, className = '' }: GradientHeadingProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}>
=======
<<<<<<< HEAD
export function GradientHeading({ children, className = "" }: GradientHeadingProps) {
  return (
    <h1 className={`bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent ${className}`}>
=======
export function GradientHeading({ children, className = '' }: GradientHeadingProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}>
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      {children}
    </h2>
  );
}