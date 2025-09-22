<<<<<<<< HEAD:backup-problematic-files/src.disabled/src/components/wallet/RedeemTokensCard.jsx
<<<<<<< HEAD:backup-merge-conflicts/RedeemTokensCard.jsx.backup
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:src.disabled/src/components/wallet/RedeemTokensCard.jsx

const React,{ useState } from "react"; import { useWallet } from "@/hooks/useWallet"; export default function Page() {; from "@/components/ui/card";"; import { Button } from "@/components/ui/button";"; import { Gift,ArrowRight,ExternalLink } from "lucide-react";"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from "@/components/ui/dialog"; </Card>)} ";'"'"

import _React,{ useState } from "react"; import { useWallet } from '@/hooks/useWallet'; export default function Page() {; from '@/components/ui/card';"; import { Button } from '@/components/ui/button';"; import { Gift,ArrowRight,ExternalLink } from 'lucide-react';"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from '@/components/ui/dialog'; </Card>)} ";

import _React,{ useState } from "react"; import { useWallet } from '@/hooks/useWallet'; export default function Page() {; from '@/components/ui/card';"; import { Button } from '@/components/ui/button';"; import { Gift,ArrowRight,ExternalLink } from 'lucide-react';"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from '@/components/ui/dialog'; </Card>)} ";

import _React,{ useState } from "react"; import { useWallet } from '@/hooks/useWallet'; export default function Page() {; from '@/components/ui/card';"; import { Button } from '@/components/ui/button';"; import { Gift,ArrowRight,ExternalLink } from 'lucide-react';"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from '@/components/ui/dialog'; </Card>)} ";
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
:backup-problematic-files/src.disabled/src/components/wallet/RedeemTokensCard.jsx
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/components/wallet/RedeemTokensCard.jsx
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:src.disabled/src/components/wallet/RedeemTokensCard.jsx
========
import _React,{ useState } from "react"; import { useWallet } from '@/hooks/useWallet'; export default function Page() {; from '@/components/ui/card';"; import { Button } from '@/components/ui/button';"; import { Gift,ArrowRight,ExternalLink } from 'lucide-react';"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from '@/components/ui/dialog'; </Card>)} ";=======
>>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:src.disabled/src/components/wallet/RedeemTokensCard.jsx
=======

const React,{ useState } from "react"; import { useWallet } from "@/hooks/useWallet"; export default function Page() {; from "@/components/ui/card";"; import { Button } from "@/components/ui/button";"; import { Gift,ArrowRight,ExternalLink } from "lucide-react";"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from "@/components/ui/dialog"; </Card>)} ";'"'"

import _React,{ useState } from "react"; import { useWallet } from '@/hooks/useWallet'; export default function Page() {; from '@/components/ui/card';"; import { Button } from '@/components/ui/button';"; import { Gift,ArrowRight,ExternalLink } from 'lucide-react';"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from '@/components/ui/dialog'; </Card>)} ";

import _React,{ useState } from "react"; import { useWallet } from '@/hooks/useWallet'; export default function Page() {; from '@/components/ui/card';"; import { Button } from '@/components/ui/button';"; import { Gift,ArrowRight,ExternalLink } from 'lucide-react';"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from '@/components/ui/dialog'; </Card>)} ";

import _React,{ useState } from "react"; import { useWallet } from '@/hooks/useWallet'; export default function Page() {; from '@/components/ui/card';"; import { Button } from '@/components/ui/button';"; import { Gift,ArrowRight,ExternalLink } from 'lucide-react';"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from '@/components/ui/dialog'; </Card>)} ";
import _React,{ useState } from "react"; import { useWallet } from '@/hooks/useWallet'; export default function Page() {; from '@/components/ui/card';"; import { Button } from '@/components/ui/button';"; import { Gift,ArrowRight,ExternalLink } from 'lucide-react';"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from '@/components/ui/dialog'; </Card>)} ";
import React,{ useState } from \"react\"; import { useWallet } from \'@/hooks/useWallet\'; export default function Page() {; from \'@/components/ui/card\';\"; import { Button } from \'@/components/ui/button\';\"; import { Gift,ArrowRight,ExternalLink } from \'lucide-react\';\"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from \'@/components/ui/dialog\'; </Card>)} \";
const React,{ useState } from "react"; import { useWallet } from "@/hooks/useWallet"; export default function Page() {; from "@/components/ui/card";"; import { Button } from "@/components/ui/button";"; import { Gift,ArrowRight,ExternalLink } from "lucide-react";"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from "@/components/ui/dialog"; </Card>)} ";'"'"
import _React,{ useState } from "react"; import { useWallet } from '@/hooks/useWallet'; export default function Page() {; from '@/components/ui/card';"; import { Button } from '@/components/ui/button';"; import { Gift,ArrowRight,ExternalLink } from 'lucide-react';"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from '@/components/ui/dialog'; </Card>)} ";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}
import React,{ useState } from \"react\"; import { useWallet } from \'@/hooks/useWallet\'; export default function Page() {; from \'@/components/ui/card\';\"; import { Button } from \'@/components/ui/button\';\"; import { Gift,ArrowRight,ExternalLink } from \'lucide-react\';\"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from \'@/components/ui/dialog\'; </Card>)} \";
const React,{ useState } from "react"; import { useWallet } from "@/hooks/useWallet"; export default function Page() {; from "@/components/ui/card";"; import { Button } from "@/components/ui/button";"; import { Gift,ArrowRight,ExternalLink } from "lucide-react";"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from "@/components/ui/dialog"; </Card>)} ";'"'"
import _React,{ useState } from "react"; import { useWallet } from '@/hooks/useWallet'; export default function Page() {; from '@/components/ui/card';"; import { Button } from '@/components/ui/button';"; import { Gift,ArrowRight,ExternalLink } from 'lucide-react';"; import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from '@/components/ui/dialog'; </Card>)} ";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
