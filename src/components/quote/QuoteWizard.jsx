import {useState, useMemo, useEffect} from 'react';
import {useQuoteWizard} from '@/hooks/useQuoteWizard';
import {useDelayedError} from '@/hooks/useDelayedError';
import {Card} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {Alert, AlertTitle, AlertDescription} from '@/components/ui/alert';
import Skeleton from '@/components/ui/skeleton';
import {useToast} from '@/hooks/use-toast';
const WIZARD_STEPS = [1, 2, 3];
function StepIndicator("props": "any) {;
    const progress = (step / WIZARD_STEPS.length) * 100;
    return (
        <div className="space-y-1">
      <div data-testid="step-indicator" className="text-sm text-muted-foreground">