import React from "react";

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">;
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />;
      <div className="relative">;
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>;
        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>;
      </div>;
    </div>;
  );
}
import React from 'react';
export default function GlowCard({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />
      <div className="relative">
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>
      </div>
    </div>
  );
}
import React from './react';
;
export default /**
 * GlowCard - Function description
 */
function GlowCard() {
  return (
    <div className="group relative rounded - xl border border - white / 10 bg - white / 5 backdrop - blur - md p - 5 hover:bg - white / 10 transition - colors">;
      <div className="absolute -inset - px rounded - xl bg - gradient - to - r from - cyan - 500 / 0 via - fuchsia - 500 / 0 to - violet - 500 / 0 group - hover:from - cyan - 500 / 20 group - hover:via - fuchsia - 500 / 20 group - hover:to - violet - 500 / 20 blur - xl" />;
      <div className="relative">;
        <h3 className="text - lg font - semibold mb - 2 tracking - wide">{title}</h3>;
        <div className="text - sm text - gray - 300 leading - relaxed">{children}</div>;
      </div>;
    </div>);
  return (
    <div className="group relative rounded - xl border border - white / 10 bg - white / 5 backdrop - blur - md p - 5 hover:bg - white / 10 transition - colors">;
      <div className="absolute -inset - px rounded - xl bg - gradient - to - r from - cyan - 500 / 0 via - fuchsia - 500 / 0 to - violet - 500 / 0 group - hover:from - cyan - 500 / 20 group - hover:via - fuchsia - 500 / 20 group - hover:to - violet - 500 / 20 blur - xl" />;
      <div className="relative">;
        <h3 className="text - lg font - semibold mb - 2 tracking - wide">{title}</h3>;
        <div className="text - sm text - gray - 300 leading - relaxed">{children}</div>;
      </div>;
    </div>);
<<<<<<< HEAD
      </div>
    </div>
  )

}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
