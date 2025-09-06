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
}
=======
 export default function WalletPage () {
  return (<EnhancedLayout title="Your ZION$ Wallet" > <div className="max-w-2xl mx-auto" > <WalletPanel /> </div> </EnhancedLayout>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
