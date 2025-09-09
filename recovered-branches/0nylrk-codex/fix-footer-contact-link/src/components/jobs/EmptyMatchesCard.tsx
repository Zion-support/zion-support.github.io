import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from "lucide-react",


export interface EmptyMatchesCardProps {
  onRefresh: () => void,

import { Card } from "@/components/ui/card",

import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from "lucide-react",

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: booleanimport { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from "lucide-react",

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean

export interface EmptyMatchesCardProps {;

  onRefresh: () => void;
  isProcessing: boolean
}

  onRefresh,;
  isProcessing,;
}: EmptyMatchesCardProps) {;

  return (import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Sparkles, RefreshCcw } from "lucide-react";

}


}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
}
  );
};