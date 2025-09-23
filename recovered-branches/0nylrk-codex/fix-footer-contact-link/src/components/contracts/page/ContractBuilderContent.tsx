
import { useState } from 'react';
import { SmartContractBuilder } from '@/components/contracts/SmartContractBuilder';
import { ContractBuilder } from '@/components/contracts/ContractBuilder';
import { ContractHeader } from './ContractHeader';
import { ContractTypeCards } from './ContractTypeCards';
import { RecentContractsTable } from './RecentContractsTable';
import { TalentProfile } from '@/types/talent';
import { useAuth } from '@/hooks/useAuth';

// Mock data for demo purposes
const mockTalent: TalentProfile = {
  id: 'talent-123',
  user_id: 'user-abc-123',
  full_name: 'Alex Chen',
  professional_title: 'Full Stack Developer',
  hourly_rate: 85,
  profile_picture_url: '',
