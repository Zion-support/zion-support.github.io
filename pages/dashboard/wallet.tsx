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

    <EnhancedLayout title="Your ZION$ Wallet">
      <div className="max-w-2xl mx-auto">
        <WalletPanel />
      </div>
    </EnhancedLayout>
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
    </EnhancedLayout>);
}

