<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import EnhancedLayout from "../../components/layout/EnhancedLayout",
import dynamic from "next/dynamic",
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false }),
=======
import React from &quot;react&quot;;
import EnhancedLayout from &quot;../../components/layout/EnhancedLayout&quot;;
import dynamic from &quot;next/dynamic&quot;;

const WalletPanel = dynamic(() => import(&quot;../../components/wallet/WalletPanel&quot;), { ssr: false });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export default function WalletPage() {
  return (
    <EnhancedLayout title=&quot;Your ZION$ Wallet&quot;>
      <div className=&quot;max-w-2xl mx-auto&quot;>
        <WalletPanel />
      </div>
    </EnhancedLayout>
  )
=======
import React from "react",;
import EnhancedLayout from "../../components/layout/EnhancedLayout",;
import dynamic from "next/dynamic",;
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false });
export default function WalletPage() {;
  return (;
    <EnhancedLayout title="Your ZION$ Wallet">;
      <div className="max-w-2xl mx-auto">;
        <WalletPanel />;
      </div>;
    </EnhancedLayout>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}