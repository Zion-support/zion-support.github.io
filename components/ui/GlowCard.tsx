import React from "react";

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

import React from 'react';
export default function GlowCard({ title, children }: { title: string, children: React.ReactNode }) {
=======
<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import React from "react";
export default function GlowCard({
<<<<<<< HEAD
  title
  children
}: {
=======
  title,
  children,
}: {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  title: string;
  children: React.ReactNode;
}) {
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />
      <div className="relative">
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>
<<<<<<< HEAD
<div className="text-sm text-gray-300 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

=======
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
      </div>
    </div>
  )

}
