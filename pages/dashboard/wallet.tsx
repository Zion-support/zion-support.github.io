

<<<<<<< HEAD
=======
import React from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
import dynamic from "next/dynamic";
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false })

=======

import React from "react",;
import EnhancedLayout from "../../components/layout/EnhancedLayout",;
import dynamic from "next/dynamic",;
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false }),


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",
import EnhancedLayout from "../../components/layout/EnhancedLayout",
import dynamic from "next/dynamic",
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false }),

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function WalletPage() {
  return (
    <EnhancedLayout title="Your ZION$ Wallet">
      <div className="max-w-2xl mx-auto">
        <WalletPanel />
      </div>
    </EnhancedLayout>

<<<<<<< HEAD
  )
import React from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
import dynamic from "next/dynamic";
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false });
export default function WalletPage(req, res) {
  try {
  return (;
=======
=======
}

=======
import React from './react';,
import EnhancedLayout from "../../components / layout / EnhancedLayout",
import dynamic from './next / dynamic';,
const WalletPanel = dynamic (() => import ("../../components / wallet / WalletPanel"), { ssr: false }),
export default /**
 * WalletPage - Function description
 */
function WalletPage() {
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <EnhancedLayout title="Your ZION$ Wallet">;
      <div className="max - w-2xl mx - auto">;
        <WalletPanel />;
      </div>;
<<<<<<< HEAD
    </EnhancedLayout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
    </EnhancedLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
