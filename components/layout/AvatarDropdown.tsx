import React, {_useState} from 'react'
import Link from 'next/link'

export default function AvatarDropdown() {_const { user, _logout} = useUser()
  const [open, setOpen] = useState(false)

  if (!user) return null

<<<<<<< HEAD
  return (
    <div className=&quot;relative&quot;>
      <button onClick={() => setOpen(o => !o)} className=&quot;h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white text-xs font-semibold grid place-items-center ring-1 ring-white/40&quot;>
        {user.name.split(' ').map(n => n[0]).slice(0,2).join('')}
      </button>
      {open && (
        <div className=&quot;absolute right-0 mt-2 w-44 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg py-2 text-sm&quot;>
          <div className=&quot;px-3 pb-2 text-xs opacity-70&quot;>Signed in as<br/><span className=&quot;font-medium opacity-100&quot;>{user.name}</span></div>
          <Link href=&quot;/settings&quot;><a className=&quot;block px-3 py-2 hover:bg-gray-50/60 dark:hover:bg-white/5&quot;>Settings</a></a>
          <Link href=&quot;/onboarding&quot;><a className=&quot;block px-3 py-2 hover:bg-gray-50/60 dark:hover:bg-white/5&quot;>Onboarding</a></a>
          <button onClick={logout} className=&quot;w-full text-left px-3 py-2 hover:bg-gray-50/60 dark:hover:bg-white/5&quot;>Logout</button>
=======
  return (_<div className="relative">
      <button onClick={_() => setOpen(o => !o)} className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white text-xs font-semibold grid place-items-center ring-1 ring-white/40">
        {_user.name.split(' ').map(n => n[0]).slice(0, _2).join('')}
      </button>
      {_open && (
        <div className="absolute right-0 mt-2 w-44 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg py-2 text-sm">
          <div className="px-3 pb-2 text-xs opacity-70">Signed in as<br/><span className="font-medium opacity-100">{user.name}</span></div>
          <Link href="/settings"><a className="block px-3 py-2 hover:bg-gray-50/60 dark:hover:bg-white/5">Settings</a></Link>
          <Link href="/onboarding"><a className="block px-3 py-2 hover:bg-gray-50/60 dark:hover:bg-white/5">Onboarding</a></Link>
          <button onClick={_logout} className="w-full text-left px-3 py-2 hover:bg-gray-50/60 dark:hover:bg-white/5">Logout</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      )}
    </div>
  )
}