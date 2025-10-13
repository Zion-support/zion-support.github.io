'use client';
import React from 'react';

<<<<<<< HEAD
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);

        if (entry.isIntersecting && freezeOnceVisible) {
          observer.disconnect();
        }
      },
          observer.disconnect()}},
      {threshold,;
        root,;
        rootMargin,}} )
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
observer.observe(element);
const Component = () => {
  
  return () => {observer.disconnect()}}
  }, [threshold, root, rootMargin, freezeOnceVisible]);
return {ref, isIntersecting, entry}}}
export default useIntersectionObserver;
=======
export default function HooksPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Hooks</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
