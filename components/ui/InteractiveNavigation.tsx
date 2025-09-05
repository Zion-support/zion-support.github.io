
const InteractiveNavigation = () => {};


export default InteractiveNavigation;
import React, { useState } from 'react';

export default function InteractiveNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <a href=&quot;#main&quot; className=&quot;sr-only focus:not-sr-only&quot;>Skip to content</a>
      <button className=&quot;md:hidden px-3 py-2 border rounded&quot; onClick={() => setOpen(!open)}>Menu</button>
      {open && (
        <div className=&quot;md:hidden mt-2 space-y-2&quot;>
          <a href=&quot;/talent&quot; className=&quot;block&quot;>Browse Talent</a>
          <a href=&quot;/jobs&quot; className=&quot;block&quot;>Browse Jobs</a>
        </div>
      )}
    </div>
  );
}
