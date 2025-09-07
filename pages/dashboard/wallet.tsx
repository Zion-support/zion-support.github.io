<<<<<<< HEAD
export default function WalletPage() {_return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import React from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
import dynamic from "next/dynamic";
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false })

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",;
import EnhancedLayout from "../../components/layout/EnhancedLayout",;
import dynamic from "next/dynamic",;
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false }),

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",
import EnhancedLayout from "../../components/layout/EnhancedLayout",
import dynamic from "next/dynamic",
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false }),

<<<<<<< HEAD
export default function WalletPage() {
  return (
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function WalletPage() {
  return (
    <EnhancedLayout title="Your ZION$ Wallet">
      <div className="max-w-2xl mx-auto">
        <WalletPanel />
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
}

  );
};
  )
    </EnhancedLayout>);
}



import React from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
import dynamic from "next/dynamic";
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false });
export default function WalletPage(req, res) {
  try {
  return (;
    <EnhancedLayout title="Your ZION$ Wallet">;
      <div className="max-w-2xl mx-auto">;
        <WalletPanel />;
      </div>;
    </EnhancedLayout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
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
    <EnhancedLayout title="Your ZION$ Wallet">;
      <div className="max - w-2xl mx - auto">;
        <WalletPanel />;
      </div>;
    </EnhancedLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
