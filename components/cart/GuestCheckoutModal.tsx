import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../../src/components/ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface GuestCheckoutModalProps {
  isOpen: boolean,
  onClose: () => void,
  onCheckout: (email: string) => void}

export function GuestCheckoutModal({ isOpen, onClose, onCheckout }: GuestCheckoutModalProps) {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onCheckout(email);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Guest Checkout</CardTitle>
          <CardDescription>
            Enter your email to proceed with checkout
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-70o0 mb-1">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className="flex space-x-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={!email}>
                Continue Checkout
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}