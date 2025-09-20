import React from "react";
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';

interface FraudTabContentProps {
  tabValue: string;
}

export const FraudTabContent: React.FC<FraudTabContentProps> = ({
  tabValue,
}) => {
  switch (tabValue) {
    case 'pending':
      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-orange-600">
            <AlertTriangle className="h-5 w-5" />
            <h3 className="text-lg font-semibold">Pending Review</h3>
          </div>
          <p className="text-gray-600">
            Transactions that have been flagged and are awaiting review by the fraud detection team.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-sm text-orange-800">
              These transactions require immediate attention and manual review to determine if they are fraudulent.
            </p>
          </div>
        </div>
      );

    case 'reviewed':
      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-blue-600">
            <AlertCircle className="h-5 w-5" />
            <h3 className="text-lg font-semibold">Under Review</h3>
          </div>
          <p className="text-gray-600">
            Transactions currently being investigated by the fraud detection team.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              These transactions are being actively reviewed and will be resolved soon.
            </p>
          </div>
        </div>
      );

    case 'resolved':
      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <h3 className="text-lg font-semibold">Resolved</h3>
          </div>
          <p className="text-gray-600">
            Transactions that have been reviewed and resolved by the fraud detection team.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-800">
              These transactions have been processed and the appropriate action has been taken.
            </p>
          </div>
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