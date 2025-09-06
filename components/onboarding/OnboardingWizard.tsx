import React, { useMemo, useState } from 'react';
import { useUser } from '../../providers/UserProvider';
import { useToast } from '../ui/ToastProvider';
import Link from 'next/link';

export default function OnboardingWizard() {
  const { user, completeOnboarding, setUser } = useUser();
  const { addToast } = useToast();
  const [step, setStep] = useState(0);

  const isClient = user?.role === 'client';
  const steps = useMemo(() => {
    if (isClient) {
      return [

  const steps = useMemo(() => {
    if (isClient) {
      return [

        )}
      </div>
    </div>
  );