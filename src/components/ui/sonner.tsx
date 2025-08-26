<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======

>>>>>>> origin/cursor/build-and-fix-errors-c9ef

interface ToasterProps {
  position?: string;
}

export function Toaster({ position = 'top-right' }: ToasterProps) {
  return <div id="sonner-toaster" data-position={position} />;
}
