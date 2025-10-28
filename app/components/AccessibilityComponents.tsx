<<<<<<< HEAD

interface AccessibilityComponentsProps {
  className?: string;
  children?: React.ReactNode;
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc

export default function AccessibilityComponents({ className, children }: AccessibilityComponentsProps) {
  return (
    <div className={`accessibilitycomponents-component ${className || ''}`}>
      {children}
    </div>
  );
}
