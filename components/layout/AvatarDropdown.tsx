import React, { useState } from 'react;
import Link from next/link';
import { useUser  } from '../../providers/UserProvider;
export default function AvatarDropdown() {const { user, logout } = useUser()const [open, setOpen] = useState(false)if (!user) return null;
  return (<div className=\"relative\ />;
      <button onClick={() = /> setOpen(o => !o)} className=\"h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white text-xs font-semibold grid place-items-center ring-1 ring-white/40\">;
        {user.name.split( ').map(n => n[0]).slice(0,2).join('')}

    </div>
  )
}
=======
    </div>
  )}"
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
