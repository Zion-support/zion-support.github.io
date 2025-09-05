import React from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
import dynamic from "next/dynamic";

const _WalletPanel = dynamic__(() => import("../../components/wallet/WalletPanel"), {_ssr: false});

export default function WalletPage() {_return (
    <EnhancedLayout title="Your ZION$ Wallet">
      <div className="max-w-2xl mx-auto">
        <WalletPanel />
      </div>
    </EnhancedLayout>
  );}