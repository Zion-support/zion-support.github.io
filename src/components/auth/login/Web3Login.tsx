
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useWallet, as, useAppWallet } from "../../../context/WalletContext.tsx";, // Renamed to avoid conflict if useWallet hook is defined locally,
