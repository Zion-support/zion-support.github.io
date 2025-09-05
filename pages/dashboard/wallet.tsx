import React from &quot;react&quot;;
import EnhancedLayout from &quot;../../components/layout/EnhancedLayout&quot;;
import dynamic from &quot;next/dynamic&quot;;

const WalletPanel = dynamic(() => import(&quot;../../components/wallet/WalletPanel&quot;), { ssr: false });

export default function WalletPage() {
  return (
    <EnhancedLayout title=&quot;Your ZION$ Wallet&quot;>
      <div className=&quot;max-w-2xl mx-auto&quot;>
        <WalletPanel />
      </div>
    </EnhancedLayout>
  );
}