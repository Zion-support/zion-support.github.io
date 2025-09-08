


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

import React from 'react';
export default function GlowCard({ title, children }: { title: string, children: React.ReactNode }) {
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  );
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />
      <div className="relative">
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>
        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>



import React from './react';
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    </div>);
}

}


}

        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
      </div>
    </div>
  );
  return (
    <div className=\"group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover: bg-white/10 transition-colors\"    />"
      <div className=\"absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl\"    />"
      <div className=\"relative\"    />
"
<<<<<<< HEAD

        <h3 className=\"text-lg font-semibold mb-2 tracking-wide\"    />{title}</h3>"
        <div className=\"text-sm text-gray-300 leading-relaxed\"    />{childre}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}</div>
      </div>
  );
}
}
