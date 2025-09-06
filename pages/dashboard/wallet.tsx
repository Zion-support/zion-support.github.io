<<<<<<< HEAD
import React from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import dynamic from 'next/dynamic';

const WalletPanel = dynamic(
  () => import('../../components/wallet/WalletPanel'),
  { ssr: false }
);

export default function WalletPage() {
  return (
    <EnhancedLayout title='Your ZION$ Wallet'>
      <div className='max-w-2xl mx-auto'>
        <WalletPanel />
      </div>
    </EnhancedLayout>
  );
=======
import React from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
import dynamic from "next/dynamic";
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false }),
export default function WalletPage() {
  return (
    <EnhancedLayout title="Your ZION$ Wallet">
      <div className="max-w-2xl mx-auto">
        <WalletPanel />
      </div>
    </EnhancedLayout>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
