












import React from "react",;
import EnhancedLayout from "../../components/layout/EnhancedLayout",;
import dynamic from "next/dynamic",;
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false }),





import React from "react",
import EnhancedLayout from "../../components/layout/EnhancedLayout",
import dynamic from "next/dynamic",
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false }),





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




>>>>>>> origin/feature/merge-conflicts-and-improvements

export default function WalletPage() {
  return (
    <EnhancedLayout title="Your ZION$ Wallet">
      <div className="max-w-2xl mx-auto">
        <WalletPanel />
      </div>
    </EnhancedLayout>



  )
import React from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
import dynamic from "next/dynamic";
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false });
export default function WalletPage(req, res) {
  try {
  return (;

    <EnhancedLayout title="Your ZION$ Wallet">;
      <div className="max - w-2xl mx - auto">;
        <WalletPanel />;
      </div>;





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

    </EnhancedLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



