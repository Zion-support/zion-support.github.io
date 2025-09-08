interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  const [isHighContrast, setIsHighContrast] = useState(false);








