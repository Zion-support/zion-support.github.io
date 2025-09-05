
<<<<<<< HEAD
import React from "react",
=======
import React from &quot;react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TalentDirectoryHeaderProps {
  title: string,
  description: string
}

export function TalentDirectoryHeader({ title, description }: TalentDirectoryHeaderProps) {
  return (
    <div className=&quot;bg-zion-blue-dark border-b border-zion-blue-light&quot;>
      <div className=&quot;container mx-auto px-4 py-8 md:py-12&quot;>
        <h1 className=&quot;text-3xl md:text-4xl font-bold text-white mb-2&quot;>
          {title}
        </h1>
        <p className=&quot;text-zion-slate-light max-w-2xl&quot;>
          {description}
        </p>
      </div>
    </div>
  )
}
