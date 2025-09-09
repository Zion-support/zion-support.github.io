import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Sparkles, RefreshCcw } from "lucide-react";

export interface EmptyMatchesCardProps {
  onRefresh: () => void;
  isProcessing: boolean;
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
  return (
    <Card className="text-center py-16">
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">No matches found</h3>
            <p className="text-muted-foreground mb-6">
              We couldn't find any talent that matches your job requirements. 
              Try running AI matching to discover potential candidates.
            </p>
          </div>
          <Button 
            onClick={onRefresh} 
            disabled={isProcessing}
            className="flex items-center gap-2"
          >
            {isProcessing ? (
              <RefreshCcw className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            {isProcessing ? 'Finding matches...' : 'Run AI Matching'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}