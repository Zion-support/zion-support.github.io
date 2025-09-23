
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Wallet } from "@/components/icons";
import { toast } from "sonner";

export function Web3Login() {
  const { loginWithWeb3 } = useAuth();
