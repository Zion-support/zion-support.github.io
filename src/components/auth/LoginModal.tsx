import React from 'react',
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog',
import LoginForm from './login/LoginForm',
interface LoginModalProps {
  isOpen: boolean,
  onOpenChange: (open: boolean) => void}

export function LoginModal({ isOpen, onOpenChange }: LoginModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm: max-w-md">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
        </DialogHeader>
        <LoginForm />
      </DialogContent>
    </Dialog>
  )}
