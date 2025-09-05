import React from 'react';''
import Link from 'next/link';'
export function Logo({ customLogo, customColor }) {'
  const logoColor = customColor || '#22D3EE';'
  return ('
    <Link href="/" className="flex items-center space-x-3 group">"
</Link>
      <div;"
        className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300""
        style={{ )"
          background: customColor ? `linear-gradient(135deg,${customColor},${customColor}dd)` : 'linear-gradient(135deg,#22D3EE,#A855F7)','
        }}
      >
</div>'
        <span className="text-white font-bold text-xl">Z</span>"
      </div>"
      <div className="flex flex-col">"
</div>"
        <span className="text-xl font-bold" style={{ color: logoColor }}>"
</span>
        </span>"
        <span className="text-sm text-zinc-300 font-medium">Tech Group</span>"
      </div>
    </Link>"