<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from "react";
export default function GlowCard(): any ({;
  title,;
  children,;
}: {;
  title: string;
  children: React && React.ReactNode;
}) {;
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">;
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />;
      <div className="relative">;
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>;
        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>;
      </div>;
    </div>;
  );
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">;
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />;
      <div className="relative">;
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>;
        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react';
export default function GlowCard({ title, children }: { title: string, children: React.ReactNode }) {
import React from "react";

import React from "react";
export default function GlowCard({
  title
  children
}: {
  title,
  children,
}: {;
  title: string;
  children: React.ReactNode;
}) {

  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />
      <div className="relative">
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>
<<<<<<< HEAD
        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
      </div>
    </div>

        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>
        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
      </div>
    </div>
  );
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />
      <div className="relative">
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>
        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>


<<<<<<< HEAD
import React from 'react';
export default function GlowCard({ title, children }: { title: string, children: React.ReactNode }) {

export default function GlowCard() {
}
export default function GlowCard() {
}
return (;
    <div className='group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 "hover": bg-white/10 transition-colors'>'
      <div className='absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-"hover":from-cyan-500/20 group-"hover":via-fuchsia-500/20 group-"hover":to-violet-500/20 blur-xl' />'
      <div className='relative'>'
        <h3 className='text-lg font-semibold mb-2 tracking-wide'>{title}</h3>'
        <div className='text-sm text-gray-300 leading-relaxed'>{childre,'
}</div>
      </div>
    </div>
  );
return (;
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 "hover": bg-white/10 transition-colors">"
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-"hover":from-cyan-500/20 group-"hover":via-fuchsia-500/20 group-"hover":to-violet-500/20 blur-xl" />"
      <div className="relative">"

        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>"
        <div className="text-sm text-gray-300 leading-relaxed">{childre,"
}</div>
      </div>
    </div>
  );
return (;
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 "hover": bg-white/10 transition-colors">"
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-"hover":from-cyan-500/20 group-"hover":via-fuchsia-500/20 group-"hover":to-violet-500/20 blur-xl" />"
      <div className="relative">"
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>"
        <div className="text-sm text-gray-300 leading-relaxed">{childre,"
}</div>
      </div>
    </div>
  );
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
  return (<div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">;
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />;
      <div className="relative">;
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>;
        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>;
      </div>;
    </div>;
  )return (<div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">;
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />;
      <div className="relative">;
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>;
        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>;
      </div>;
<<<<<<< HEAD
    </div>;
  )}
>>>>>>> merged-prs-20250907-203621
import React from 'react';
export default function GlowCard({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />
      <div className="relative">
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>
        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
      </div>
    </div>
  )
  return (
    <div className=\"group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover: bg-white/10 transition-colors\"    />"
      <div className=\"absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl\"    />"
      <div className=\"relative\"    />
"
        <h3 className=\"text-lg font-semibold mb-2 tracking-wide\"    />{title}</h3>"
        <div className=\"text-sm text-gray-300 leading-relaxed\"    />{childre}
}</div>
      </div>
    </div>
  );
}
<<<<<<< HEAD

"
=======
=======
    </div>);
      </div>
    </div>
  )

}
<<<<<<< HEAD

}

        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
      </div>
    </div>
  );
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />
      <div className="relative">
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>
        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
import React from 'react';
>>>>>>> origin/chore/fix-lint-and-merge

export default function GlowCard({ title, children }: { title: string, children: React.ReactNode }) {
export default function GlowCard({
  title;}
children}
}: {
  title: string;}
  children: React.ReactNode;}
}) {
  return (
    <div className='group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover: bg-white/10 transition-colors'    />
      <div className='absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl'    />}
      <div className='relative'    />}
        <h3 className='text-lg font-semibold mb-2 tracking-wide'    />{title}</h3>
        <div className='text-sm text-gray-300 leading-relaxed'    />{childre}
}</div>
      </div>
    </div>
  );
  return (
    <div className=\"group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover: bg-white/10 transition-colors\"    />"
      <div className=\"absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl\"    />"
      <div className=\"relative\"    />
"
<<<<<<< HEAD
=======
        <h3 className=\"text-lg font-semibold mb-2 tracking-wide\"    />{title}</h3>"
        <div className=\"text-sm text-gray-300 leading-relaxed\"    />{childre}
}</div>
      </div>
    </div>
  );
  return ("
    <div className=\"group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover: bg-white/10 transition-colors\"    />"
      <div className=\"absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl\"    />"
      <div className=\"relative\"    />"
        <h3 className=\"text-lg font-semibold mb-2 tracking-wide\"    />{title}</h3>"
        <div className=\"text-sm text-gray-300 leading-relaxed\"    />{childre}
}</div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
