<<<<<<< HEAD:pages-disabled/dashboard/wallet.tsx
=======
<<<<<<< HEAD
export default function WalletPage() {_return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/dashboard/wallet.tsx
import React from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
import dynamic from "next/dynamic";
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false })

<<<<<<< HEAD:pages-disabled/dashboard/wallet.tsx
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/dashboard/wallet.tsx
import React from "react",;
import EnhancedLayout from "../../components/layout/EnhancedLayout",;
import dynamic from "next/dynamic",;
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false }),

<<<<<<< HEAD:pages-disabled/dashboard/wallet.tsx
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/dashboard/wallet.tsx
import React from "react",
import EnhancedLayout from "../../components/layout/EnhancedLayout",
import dynamic from "next/dynamic",
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false }),

<<<<<<< HEAD:pages-disabled/dashboard/wallet.tsx
=======
<<<<<<< HEAD
export default function WalletPage() {
  return (
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/dashboard/wallet.tsx
export default function WalletPage() {
  return (

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

  )

}

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

};
;
import React from './react';,"
import EnhancedLayout from "../../components / layout / EnhancedLayout",';
import dynamic from './next / dynamic';,"
const WalletPanel = dynamic (() => import ("../../components / wallet / WalletPanel"), { ssr: false }),
export default /**;
 * WalletPage - Function description;
 */
function WalletPage() {}
  return ("
    <EnhancedLayout title="Your ZION$ Wallet">;"
      <div className="max - w-2xl mx - auto">;
        <WalletPanel />;
      </div>;

}

'
import React from './react';,"
import EnhancedLayout from "../../components / layout / EnhancedLayout",';
import dynamic from './next / dynamic';,"
const WalletPanel = dynamic (() => import ("../../components / wallet / WalletPanel"), { ssr: false }),
export default /**;
 * WalletPage - Function description;
 */

<<<<<<< HEAD:pages-disabled/dashboard/wallet.tsx
      <div className="max - w-2xl mx - auto">;
        <WalletPanel />;
      </div>;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/dashboard/wallet.tsx
