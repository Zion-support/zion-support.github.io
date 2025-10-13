    const animate = (currentTime: number) => {,
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        animationFrame = requestAnimationFrame(animate);}}

    animationFrame = requestAnimationFrame(animate);

    return () => {if (animationFrame) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        cancelAnimationFrame(animationFrame);}}
  }, [end, duration]);

  return(<span className={className)}>{prefix</span>}{count.toLocaleString()}{suffix} </span>
  );
};
;
export default AnimatedCounter;
