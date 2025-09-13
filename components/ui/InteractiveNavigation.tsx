<<<<<<< HEAD
=======

const InteractiveNavigation = () => {};


export default InteractiveNavigation;
>>>>>>> 0019087cc94659218a6a56b7d706ee956e6c4958
import React, { useState } from 'react';

export default function InteractiveNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <button className="md:hidden px-3 py-2 border rounded" onClick={() => setOpen(!open)}>Menu</button>
      {open && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="/talent" className="block">Browse Talent</a>
          <a href="/jobs" className="block">Browse Jobs</a>
        </div>
      )}
    </div>
  );
}
