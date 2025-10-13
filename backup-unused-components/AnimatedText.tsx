import React from 'react';

interface AnimatedTextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AnimatedText({ className = '', children }: AnimatedTextProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
  );
}
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
//   text,
  className = "",
  delay = 0,
  speed = 100,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay + speed);

      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [currentIndex, text, delay, speed]);

  return <span className={className}>{displayedText}</span>;
};

export default AnimatedText;
  );
