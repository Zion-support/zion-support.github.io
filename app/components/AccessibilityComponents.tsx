

interface AccessibilityComponentsProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className, children }) => {
  return (
    <div className={className} role="main" aria-label="Accessibility Components">
      {children || <p>Accessibility Components</p>}
    </div>
  );
};

export default AccessibilityComponents;