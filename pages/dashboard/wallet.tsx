<<<<<<< HEAD
import React from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
import dynamic from "next/dynamic";
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false })
export default function WalletPage() {
  return (

export default function WalletPage() {
  return (
    <EnhancedLayout title=&quot;Your ZION$ Wallet&quot;>
      <div className=&quot;max-w-2xl mx-auto&quot;>
        <WalletPanel />
      </div>
    </EnhancedLayout>
  )
}
const _WalletPanel = dynamic__(() => import("../../components/wallet/WalletPanel"), {_ssr: false});

export default function WalletPage() {_return (

=======
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
import dynamic from "next/dynamic";
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false })

=======
import React from "react",;
import EnhancedLayout from "../../components/layout/EnhancedLayout",;
import dynamic from "next/dynamic",;
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false }),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from "react",
import EnhancedLayout from "../../components/layout/EnhancedLayout",
import dynamic from "next/dynamic",
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false }),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function WalletPage() {
  return (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <EnhancedLayout title="Your ZION$ Wallet">
      <div className="max-w-2xl mx-auto">
        <WalletPanel />
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
<<<<<<< HEAD
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
    </EnhancedLayout>);
}

=======
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
