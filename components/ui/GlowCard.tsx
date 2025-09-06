<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";

=======
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

import React from "react";
export default function GlowCard({

  title: string;
  children: React.ReactNode;
}) {

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import React from 'react';
export default function GlowCard({ title, children }: { title: string, children: React.ReactNode }) {
export default function GlowCard({
  title
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className='group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors'>
      <div className='absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl' />
      <div className='relative'>
        <h3 className='text-lg font-semibold mb-2 tracking-wide'>{title}</h3>
        <div className='text-sm text-gray-300 leading-relaxed'>{children}</div>
      </div>
    </div>
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />
      <div className="relative">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
      </div>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
