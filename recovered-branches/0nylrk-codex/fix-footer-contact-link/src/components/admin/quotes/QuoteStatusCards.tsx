

import React from "react",

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface QuoteStatusCardsProps {
  statusCounts: {
    new: number;
    in_review: number;
    responded: number;
    accepted: number;

    closed: number
  }

}

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({
  statusCounts,
}) => {
  return (

    <div className;

