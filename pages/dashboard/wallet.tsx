import React from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import dynamic from 'next/dynamic';

const WalletPanel = dynamic(
  () => import('../../components/wallet/WalletPanel'),
  { ssr: false }
);

<<<<<<< HEAD
=======
import React from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
import dynamic from "next/dynamic";
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false }),
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function WalletPage() {
  return (
    <EnhancedLayout title='Your ZION$ Wallet'>
      <div className='max-w-2xl mx-auto'>
        <WalletPanel />
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
  );
=======
  );
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
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
