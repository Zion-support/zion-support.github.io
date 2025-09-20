import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Wallet, Database, Save } from 'lucide-react';

export default function AccountSettings() {
  return (
    <>
      <SEO title='Account Settings' description='Manage your account' />
      <Header />
      <main className='container mx-auto py-8 px-4'>
        <h1 className='text-3xl font-bold mb-6 text-white'>Account Settings</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Card className='bg-gray-800 text-white'>
            <CardHeader>
              <CardTitle className='text-white'>Profile Information</CardTitle>
              <CardDescription className='text-gray-400'>
                Update your personal details and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div>
                  <Label htmlFor='name' className='text-gray-300'>Name</Label>
                  <Input id='name' defaultValue='John Doe' className='bg-gray-700 border-gray-600 text-white' />
                </div>
                <div>
                  <Label htmlFor='email' className='text-gray-300'>Email</Label>
                  <Input id='email' type='email' defaultValue='john.doe@example.com' className='bg-gray-700 border-gray-600 text-white' />
                </div>
                <Button className='bg-blue-600 hover:bg-blue-700'>
                  <Save className='mr-2 h-4 w-4' /> Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className='bg-gray-800 text-white'>
            <CardHeader>
              <CardTitle className='text-white'>Wallet & Billing</CardTitle>
              <CardDescription className='text-gray-400'>
                Manage your payment methods and view transaction history.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div>
                  <Label htmlFor='wallet' className='text-gray-300'>Wallet Address</Label>
                  <Input id='wallet' defaultValue='0x123...abc' readOnly className='bg-gray-700 border-gray-600 text-white' />
                </div>
                <Button variant='outline' className='border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'>
                  <Wallet className='mr-2 h-4 w-4' /> Connect Wallet
                </Button>
                <Button variant='outline' className='border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'>
                  <Database className='mr-2 h-4 w-4' /> View Transactions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}