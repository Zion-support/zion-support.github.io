import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ 
  texts = [], 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = "",
  loop = true,
  startDelay = 0
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentFullText = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        return;
      }

      if (!isDeleting && currentText === currentFullText) {
        // Text is complete, pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, pauseTime);
      } else if (isDeleting && currentText === '') {
        // Text is deleted, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else if (isDeleting) {
        // Delete character
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
      } else {
        // Add character
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, speed, deleteSpeed, pauseTime]);

  // Reset on texts change
  useEffect(() => {
    setCurrentTextIndex(0);
    setCurrentText('');
    setIsDeleting(false);
    setIsPaused(false);
  }, [texts]);

  // Start delay
  useEffect(() => {
    if (startDelay > 0) {
      const delayTimeout = setTimeout(() => {
        setIsPaused(false);
      }, startDelay);
      return () => clearTimeout(delayTimeout);
    }
  }, [startDelay]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterEffect;