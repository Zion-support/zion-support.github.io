
<<<<<<< HEAD

export default function AvatarDropdown() {_const { user, _logout} = useUser()

  const [open, setOpen] = useState(false)
  if (!user) return null

;
  return (;

import React, {_useState} from 'react'
import Link from 'next/link'
:components/layout/AvatarDropdown.tsx
import { useUser } from '../../providers/UserProvider'
export default function AvatarDropdown() {
  const { user, logout } = useUser()

export default function AvatarDropdown() {_const { user, _logout} = useUser()
:backup-problematic-files/temp_broken_files/components/layout/AvatarDropdown.tsx
  const [open, setOpen] = useState(false)
  if (!user) return null
  return (
;
  return (;
=======
import React, { useState } from 'react';
import Link from 'next / link';
import { use_user } from '../../providers / UserProvider';
export default /**
 * AvatarDropdown - Function description
 */
function AvatarDropdown() {
  const { user, logout } = use_user ();
  const [open, set_open] = useState (false);
  // Check condition
if (return null) {
  $2
}

  return (
    <div className=&quot;relative & quot;>;
      <button on_click={() => set_open (object => !o)} className=&quot;h - 8 w - 8 rounded - full bg - gradient - to - br from - indigo - 500 to - cyan - 500 text - white text - xs font - semibold grid place - items - center ring - 1 ring - white / 40 & quot;>;
        {user.name.split (' ').map (number => n[0]).slice (0, 2).join ('')}
      </button>;
      {open && (
        <div className=&quot;absolute right - 0 mt - 2 w - 44 rounded - md border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - black shadow - lg py - 2 text - sm & quot;>;
          <div className=&quot;px - 3 pb - 2 text - xs opacity - 70 & quot;>Signed in as < br/><span className=&quot;font - medium opacity - 100 & quot;>{user.name}</span></div>;
          <Link href=&quot;/settings & quot;><a className=&quot;block px - 3 py - 2 hover:bg - gray - 50 / 60 dark:hover:bg - white / 5&quot;>Settings</a></a>;
          <Link href=&quot;/onboarding & quot;><a className=&quot;block px - 3 py - 2 hover:bg - gray - 50 / 60 dark:hover:bg - white / 5&quot;>Onboarding</a></a>;
          <button on_click={logout} className=&quot;w - full text - left px - 3 py - 2 hover:bg - gray - 50 / 60 dark:hover:bg - white / 5&quot;>Logout</button>;
        </div>)}
    </div>);
}
=======


export default function AvatarDropdown() {_const { user, _logout} = useUser()

  const [open, setOpen] = useState(false)
  if (!user) return null

;
  return (;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className=&quot;relative&quot;>
      <button onClick={() => setOpen(o => !o)} className=&quot;h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white text-xs font-semibold grid place-items-center ring-1 ring-white/40&quot;>
        {user.name.split(' ').map(n => n[0]).slice(0,2).join('')}
      </button>
      {open && (
        <div className=&quot;absolute right-0 mt-2 w-44 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg py-2 text-sm&quot;>
          <div className=&quot;px-3 pb-2 text-xs opacity-70&quot;>Signed in as<br/><span className=&quot;font-medium opacity-100&quot;>{user.name}</span></div>
          <Link href=&quot;/settings&quot;><a className=&quot;block px-3 py-2 hover:bg-gray-50/60 dark:hover:bg-white/5&quot;>Settings</a></a>
          <Link href=&quot;/onboarding&quot;><a className=&quot;block px-3 py-2 hover:bg-gray-50/60 dark:hover:bg-white/5&quot;>Onboarding</a></a>
          <button onClick={logout} className=&quot;w-full text-left px-3 py-2 hover:bg-gray-50/60 dark:hover:bg-white/5&quot;>Logout</button>        </div>
      )}
    </div>;
<<<<<<< HEAD
:components/layout/AvatarDropdown.tsx
  );
}
  );}
:backup-problematic-files/temp_broken_files/components/layout/AvatarDropdown.tsx
:backup-problematic-files/temp_broken_files/components/layout/AvatarDropdown.tsx
=======

  );}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
