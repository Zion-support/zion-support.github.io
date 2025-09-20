
<<<<<<< HEAD
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { useWallet, asuseAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally,
import { Wallet } from 'lucide-react';
=======
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useWallet, as, useAppWallet } from "../../../context/WalletContext.tsx";, // Renamed to avoid conflict if useWallet hook is defined locally,
import { Wallet } from "lucide-react";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
import { toast } from "sonner";
import { logErrorToProduction } from '@/utils/productionLogger';
export function Web3Login() {
)
}