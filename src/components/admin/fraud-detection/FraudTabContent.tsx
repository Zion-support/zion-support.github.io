import React from "react";
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FraudTabContentProps {
  tabValue: string;
}

export const FraudTabContent: React.FC<FraudTabContentProps> = ({
  tabValue,
}) => {
  const getTabContent = () => {
    switch (tabValue) {
      case 'pending':
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                  Pending Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transactions that require manual review for potential fraud.
                </p>
                <div className="mt-4">
                  <Badge variant="outline" className="text-yellow-600">
                    {Math.floor(Math.random() * 50) + 10} items pending
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'flagged':
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
                  Flagged Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transactions that have been flagged by our fraud detection system.
                </p>
                <div className="mt-4">
                  <Badge variant="outline" className="text-orange-600">
                    {Math.floor(Math.random() * 30) + 5} items flagged
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'resolved':
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Resolved Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fraud cases that have been reviewed and resolved.
                </p>
                <div className="mt-4">
                  <Badge variant="outline" className="text-green-600">
                    {Math.floor(Math.random() * 100) + 50} items resolved
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-500">Select a tab to view content</p>
          </div>
        );
    }
  };

  return (
    <div className="mt-6">
      {getTabContent()}
    </div>
  );
};