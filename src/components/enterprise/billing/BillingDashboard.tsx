import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Download, Eye, DollarSign, Calendar, TrendingUp, AlertCircle } from 'lucide-react';

export function BillingDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('current');

  const billingData = {
    current: {
      amount: 2499.99,
      status: 'Paid',
      dueDate: '2024-01-15',
      invoiceNumber: 'INV-2024-001'
    },
    previous: {
      amount: 1999.99,
      status: 'Paid',
      dueDate: '2023-12-15',
      invoiceNumber: 'INV-2023-012'
    }
  };

  const usageMetrics = [
    {
      metric: 'API Calls',
      current: '2.4M',
      previous: '2.1M',
      change: '+14%',
      trend: 'up'
    },
    {
      metric: 'Storage Used',
      current: '156GB',
      previous: '142GB',
      change: '+10%',
      trend: 'up'
    },
    {
      metric: 'Active Users',
      current: '1,247',
      previous: '1,189',
      change: '+5%',
      trend: 'up'
    }
  ];

  const recentTransactions = [
    {
      id: 'TXN-001',
      description: 'Enterprise Plan - Monthly',
      amount: 2499.99,
      date: '2024-01-01',
      status: 'Completed'
    },
    {
      id: 'TXN-002',
      description: 'Additional Storage (50GB)',
      amount: 99.99,
      date: '2024-01-05',
      status: 'Completed'
    },
    {
      id: 'TXN-003',
      description: 'Premium Support Upgrade',
      amount: 299.99,
      date: '2024-01-10',
      status: 'Pending'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Billing Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-zion-cyan" />
            Billing Overview
          </CardTitle>
          <CardDescription>
            Current billing status and upcoming charges
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                ${billingData.current.amount.toLocaleString()}
              </div>
              <div className="text-zion-slate-light">Current Month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-white mb-2">
                {billingData.current.status}
              </div>
              <div className="text-zion-slate-light">Status</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-white mb-2">
                {billingData.current.dueDate}
              </div>
              <div className="text-zion-slate-light">Due Date</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-zion-cyan" />
            Usage Metrics
          </CardTitle>
          <CardDescription>
            Resource usage and consumption trends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {usageMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-zion-blue-dark rounded-lg">
                <div>
                  <div className="font-medium text-white">{metric.metric}</div>
                  <div className="text-sm text-zion-slate-light">
                    {metric.previous} → {metric.current}
                  </div>
                </div>
                <Badge variant={metric.trend === 'up' ? 'default' : 'destructive'}>
                  {metric.change}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-zion-cyan" />
            Recent Transactions
          </CardTitle>
          <CardDescription>
            Latest billing transactions and payments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-zion-blue-dark rounded-lg">
                <div>
                  <div className="font-medium text-white">{transaction.description}</div>
                  <div className="text-sm text-zion-slate-light">
                    {transaction.id} • {transaction.date}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-semibold text-white">
                      ${transaction.amount.toLocaleString()}
                    </div>
                    <Badge variant={transaction.status === 'Completed' ? 'default' : 'secondary'}>
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        <Button className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Invoice
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          View Billing History
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <AlertCircle className="h-4 w-4" />
          Report Issue
        </Button>
      </div>
    </div>
  );
}