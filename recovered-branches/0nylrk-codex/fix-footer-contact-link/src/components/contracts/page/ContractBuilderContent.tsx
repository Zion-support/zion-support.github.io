
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
    {
      id: 'contract-1',
      title: 'Website Redesign',
      client: 'Acme Corp',
      talent: 'Alex Chen',
      date: '2025-05-15',
      isSmartContract: true
    },
    {
      title: 'Mobile App Development',
      client: 'TechStart Inc',
      talent: 'Sarah Williams',
      date: '2025-05-10',
      isSmartContract: false
    }
  ]);

  const handleContractGenerated = (content: string) => {
    // Future implementation: View specific contract details
  };

  return (
    <>
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />
      
      <ContractTypeCards 
        onStandardClick={() => setShowBuilderType('standard')}
        onSmartClick={() => setShowBuilderType('smart')}
      />
      
      <RecentContractsTable 
        contracts={recentContracts}
        onViewContract={handleViewContract}
      />
      
      {showBuilderType === 'standard' && (
        <ContractBuilder
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
          talent={mockTalent}
          clientName={user?.displayName || 'Client'}
          onContractGenerated={handleContractGenerated}
        />
      )}
      
      {showBuilderType === 'smart' && (
        <SmartContractBuilder
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
          talent={mockTalent}
          clientName={user?.displayName || 'Client'}
          onContractGenerated={handleContractGenerated}
        />
      )}
    </>
  );
}
