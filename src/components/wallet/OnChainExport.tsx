
import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from 'lucide-react'
import {
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger} from "@/components/ui/tooltip"; import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/useAuth"
export function OnChainExport() {
  const [isConnected, setIsConnected] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle')
  const { toast } = useToast()
  const { user } = useAuth()
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
      const ethereum = (window as any).ethereum
      if (!ethereum) {
        toast({
          title: "Wallet not detected",
          description: "Please install MetaMask or another Ethereum wallet to use this feature",
          variant: "destructive"
        })
        return
      }
      
      // Request accounts
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),
      const address = accounts[0]
}
  )
}
