import React from 'react';

export default function Component() {
  return (
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
  );
}
<<<<<<< HEAD
=======

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
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
