
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { SmartContractBuilder  } from '@/components/contracts/SmartContractBuilder';
import { ContractBuilder  } from '@/components/contracts/ContractBuilder';
import { ContractHeader  } from './ContractHeader';
import { ContractTypeCards  } from './ContractTypeCards';
import { RecentContractsTable  } from './RecentContractsTable';
import { TalentProfile  } from '@/types/talent';
import { useAuth } from '@/hooks/useAuth';
=======
=======


>>>>>>> main
import {useState} from 'react';
import {SmartContractBuilder} from '@/components/contracts/SmartContractBuilder';
import {ContractBuilder} from '@/components/contracts/ContractBuilder';
import {ContractHeader} from './ContractHeader';
import {ContractTypeCards} from './ContractTypeCards';
import {RecentContractsTable} from './RecentContractsTable';
import {TalentProfile} from '@/types/talent';
import {useAuth} from '@/hooks/useAuth';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Mock data for demo purposes

<<<<<<< HEAD
const mockTalent: TalentProfile = {
  id: 'talent-123'
  user_id: 'user-abc-123'
  full_name: 'Alex Chen'
  professional_title: 'Full Stack Developer'
  hourly_rate: 85
  profile_picture_url: ''
  skills: ['ReactNode.jsSmart Contracts']}
export function ContractBuilderContent() {
=======
export function ContractBuilderContent() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

// Mock data for demo purposes


export function ContractBuilderContent() {;


>>>>>>> main
  const { user } = useAuth();
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none');
  const [recentContracts, setRecentContracts] = useState([
    {
      id: 'contract-1'
      title: 'Website Redesign'
      client: 'Acme Corp'
      talent: 'Alex Chen'
      date: '2025-05-15'
      isSmartContract: true
    }
    {
      id: 'contract-2'
      title: 'Mobile App Development'
      client: 'TechStart Inc'
      talent: 'Sarah Williams'
      date: '2025-05-10'
      isSmartContract: false
    }
  ]);
<<<<<<< HEAD
<<<<<<< HEAD
  const handleContractGenerated = (content: string) => {
    console.log('Contract generated:', content.substring(0, 100) + '...')
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main
=======
import { useState } from 'react',;
import { SmartContractBuilder } from '@/components/contracts/SmartContractBuilder',;
import { ContractBuilder } from '@/components/contracts/ContractBuilder',;
import { ContractHeader } from './ContractHeader',;
import { ContractTypeCards } from './ContractTypeCards',;
import { RecentContractsTable } from './RecentContractsTable',;
import { TalentProfile } from '@/types/talent',;
import { useAuth } from '@/hooks/useAuth',;
// Mock data for demo purposes;
const mockTalent: TalentProfile = {;
  id: 'talent-123',;
  user_id: 'user-abc-123',;
  full_name: 'Alex Chen',;
  professional_title: 'Full Stack Developer',;
  hourly_rate: 85,;
  profile_picture_url: '',;
  skills: ['ReactNode.jsSmart Contracts']},;
export function ContractBuilderContent() {;
  const { user } = useAuth(),;
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none'),;
  const [recentContracts, setRecentContracts] = useState([;
    {;
      id: 'contract-1',;
      title: 'Website Redesign',;
      client: 'Acme Corp',;
      talent: 'Alex Chen',;
      date: '2025-05-15',;
      isSmartContract: true;
    },;
    {;
      id: 'contract-2',;
      title: 'Mobile App Development',;
      client: 'TechStart Inc',;
      talent: 'Sarah Williams',;
      date: '2025-05-10',;
      isSmartContract: false;
    }
  ]),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main

  const handleContractGenerated = (content: string) => {
    // // // console.log('Contract generated:', content.substring(0, 100) + '...')
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
  const handleViewContract = (contractId: string) => {
    // // // console.log('Viewing contract:', contractId),
    // Future implementation: View specific contract details
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const handleViewContract = (contractId: string) => {
    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details


  },


>>>>>>> main

  return (
    <>
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />
<<<<<<< HEAD
<<<<<<< HEAD
      <ContractTypeCards
=======
      
      <ContractTypeCards 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  ]),;
  const handleContractGenerated = (content: string) => {;
    // // // console.log('Contract generated:', content.substring(0, 100) + '...');
  },;
  const handleViewContract = (contractId: string) => {;
    // // // console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details;
  };
  return (;
    <>;
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />;
      <ContractTypeCards;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


      
      <ContractTypeCards 


>>>>>>> main
        onStandardClick={() => setShowBuilderType('standard')}
        onSmartClick={() => setShowBuilderType('smart')}
      />
      <RecentContractsTable
        contracts={recentContracts}
        onViewContract={handleViewContract}
      />
      {showBuilderType === 'standard' && (
<<<<<<< HEAD
        <ContractBuilder
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
          talent={mockTalent}
          clientName={user?.displayName |'Client'}
          onContractGenerated={handleContractGenerated}
        />
      )}
      {showBuilderType === 'smart' && (
=======
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
import {useState} from 'react';
import {SmartContractBuilder} from '@/components / contracts / SmartContractBuilder';
import {ContractBuilder} from '@/components / contracts / ContractBuilder';
import {ContractHeader} from './ContractHeader';
import {ContractTypeCards} from './ContractTypeCards';
import {RecentContractsTable} from './RecentContractsTable';


      {showBuilderType === 'smart' && (;

>>>>>>> main
        <SmartContractBuilder
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
          talent={mockTalent}
          clientName={user?.displayName |'Client'}
          onContractGenerated={handleContractGenerated}
<<<<<<< HEAD
        />
      )}
    </>
  )
}
=======
        />;
      )}

    </>;
  );
}

=======
import {TalentProfile} from '@/types / talent';
import {use_auth} from '@/hooks / use_auth';
// Mock data for demo purposes;
const mock_talent: TalentProfile = {
  id: 'talent - 123',
  user_id: 'user - abc - 123',
  full_name: 'Alex Chen',
  professional_title: 'Full Stack Developer',
  hourly_rate: 85,
  profile_picture_url: '',
  skills: ['ReactNode.js_smart Contracts']},
export /**
 * ContractBuilderContent - Function description
 */
function ContractBuilderContent() {
  const { user } = use_auth ();
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none');
  const [recent_contracts, setRecentContracts] = useState ([;
    {
      id: 'contract - 1',
      title: 'Website Redesign',
      client: 'Acme Corp',
      talent: 'Alex Chen',
      date: '2025 - 05 - 15',
      isSmartContract: true;
    }
    {
      id: 'contract - 2',
      title: 'Mobile App Development',
      client: 'TechStart Inc',
      talent: 'Sarah Williams',
      date: '2025 - 05 - 10',
      isSmartContract: false;
    }
  ]);
;
  const handleContractGenerated = (content: string) =>: any {
    console.log ('Contract generated:', content.substring (0, 100) + '...');
  }
;
  const handleViewContract = (contract_id: string) =>: any {
    console.log ('Viewing contract:', contract_id);
    // Future implementation: View specific contract details;
  }
;
  return (
    <>;
      <ContractHeader onCreateClick={() => setShowBuilderType ('smart')} />;
      <ContractTypeCards;
        onStandardClick={() => setShowBuilderType ('standard')}
        onSmartClick={() => setShowBuilderType ('smart')}
      />;
      <RecentContractsTable;
        contracts={recent_contracts}
        onViewContract={handleViewContract}
      />;
      {showBuilderType === 'standard' && (
        <ContractBuilder;
          is_open={true}
          on_close={() => setShowBuilderType ('none')}
          talent={mock_talent}
          client_name={user?.display_name || 'Client'}
          onContractGenerated={handleContractGenerated}
        />)}
      {showBuilderType === 'smart' && (
        <SmartContractBuilder;
          is_open={true}
          on_close={() => setShowBuilderType ('none')}
          talent={mock_talent}
          client_name={user?.display_name || 'Client'}
          onContractGenerated={handleContractGenerated}
        />)}
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
