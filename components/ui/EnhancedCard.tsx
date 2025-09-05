<<<<<<< HEAD
import React from 'react',;
;
export default function EnhancedCard({ children, className = '' } { children:React.ReactNode, className?:string }) {;
  return (;
    <div className={["card-base p-4", className].join(' ')}>;
      {children}
    </div>;
  ),;
=======
import React from 'react',
export default function EnhancedCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={[&quot;card-base p-4&quot;, className].join(' ')}>
      {children}    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}