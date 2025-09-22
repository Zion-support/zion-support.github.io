
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState  } from 'react';
import { SmartContractBuilder  } from '@/components/contracts/SmartContractBuilder';
import { ContractBuilder  } from '@/components/contracts/ContractBuilder';
import { ContractHeader  } from './ContractHeader';
import { ContractTypeCards  } from './ContractTypeCards';
import { RecentContractsTable  } from './RecentContractsTable';
import { TalentProfile  } from '@/types/talent';
<<<<<<< HEAD
import { useAuth } from '@/hooks/useAuth';
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useAuth } from '@/hooks/useAuth';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from 'react';
import {SmartContractBuilder} from '@/components/contracts/SmartContractBuilder';
import {ContractBuilder} from '@/components/contracts/ContractBuilder';
import {ContractHeader} from './ContractHeader';
import {ContractTypeCards} from './ContractTypeCards';
import {RecentContractsTable} from './RecentContractsTable';
import {TalentProfile} from '@/types/talent';
import {useAuth} from '@/hooks/useAuth';
// Mock data for demo purposes

export function ContractBuilderContent() {;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Mock data for demo purposes
=======
import { useAuth } from '@/hooks/useAuth';// Mock data for demo purposes
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
// Mock data for demo purposes
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
// Mock data for demo purposes
import { useAuth } from '@/hooks/useAuth';// Mock data for demo purposes
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

const mockTalent: TalentProfile = {
  id: 'talent-123'
  user_id: 'user-abc-123'
  full_name: 'Alex Chen'
=======
import { useState  } from 'react';'
import { SmartContractBuilder  } from '@/components/contracts/SmartContractBuilder';'
import { ContractBuilder  } from '@/components/contracts/ContractBuilder';'
import { ContractHeader  } from './ContractHeader';'
import { ContractTypeCards  } from './ContractTypeCards';'
import { RecentContractsTable  } from './RecentContractsTable';'
import { TalentProfile  } from '@/types/talent';'
import { useAuth } from '@/hooks/useAuth';
'
import {useState} from 'react';'
import {SmartContractBuilder} from '@/components/contracts/SmartContractBuilder';'
import {ContractBuilder} from '@/components/contracts/ContractBuilder';'
import {ContractHeader} from './ContractHeader';'
import {ContractTypeCards} from './ContractTypeCards';'
import {RecentContractsTable} from './RecentContractsTable';'
import {TalentProfile} from '@/types/talent';'
import {useAuth} from '@/hooks/useAuth';

// Mock data for demo purposes;
const mockTalent: TalentProfile = {'
  id: 'talent-123''
  user_id: 'user-abc-123''
  full_name: 'Alex Chen''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  professional_title: 'Full Stack Developer'
  hourly_rate: 85'
  profile_picture_url: '''
  skills: ['ReactNode.jsSmart Contracts']}
export function ContractBuilderContent() {
export function ContractBuilderContent() {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Mock data for demo purposes

export function ContractBuilderContent() {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { user } = useAuth();
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function ContractBuilderContent() {};
export function ContractBuilderContent() { return null; }
  const { user } = useAuth();'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  const { user } = useAuth();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none');
  const [recentContracts, setRecentContracts] = useState([]
    {'
      id: 'contract-1''
      title: 'Website Redesign''
      client: 'Acme Corp''
      talent: 'Alex Chen''
      date: '2025-05-15'
      isSmartContract: true;
    }
    {'
      id: 'contract-2''
      title: 'Mobile App Development''
      client: 'TechStart Inc''
      talent: 'Sarah Williams''
      date: '2025-05-10'
      isSmartContract: false;
    }
<<<<<<< HEAD
<<<<<<< HEAD
  ]);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  ]);

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from 'react',;
import { SmartContractBuilder } from '@/components/contracts/SmartContractBuilder',;
import { ContractBuilder } from '@/components/contracts/ContractBuilder',;
import { ContractHeader } from './ContractHeader',;
import { ContractTypeCards } from './ContractTypeCards',;
import { RecentContractsTable } from './RecentContractsTable',;
import { TalentProfile } from '@/types/talent',;

import { useAuth } from '@/hooks/useAuth',;
// Mock data for demo purposes;
const mockTalent: TalentProfile = {;'
  id: 'talent-123',;'
  user_id: 'user-abc-123',;'
  full_name: 'Alex Chen',;'
  professional_title: 'Full Stack Developer',;
  hourly_rate: 85,;'
  profile_picture_url: '',;'
  skills: ['ReactNode.jsSmart Contracts']},;
export function ContractBuilderContent() { return null; }
  const { user } = useAuth(),;'
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none'),;
  const [recentContracts, setRecentContracts] = useState([;
    {;'
      id: 'contract-1',;'
      title: 'Website Redesign',;'
      client: 'Acme Corp',;'
      talent: 'Alex Chen',;'
      date: '2025-05-15',;
      isSmartContract: true;
    },;
    {;'
      id: 'contract-2',;'
      title: 'Mobile App Development',;'
      client: 'TechStart Inc',;'
      talent: 'Sarah Williams',;'
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      date: '2025-05-10',;
      isSmartContract: false;
    }
  ]),
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  const handleContractGenerated = (content: string) => {'
    // // // console.log('Contract generated:', content.substring(0, 100) + '...')
  },

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const handleViewContract = (contractId: string) => {
    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleViewContract = (contractId: string) => {
    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details

},

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <>'
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  ]),;
  const handleContractGenerated = (content: string) => {;'
    // // // console.log('Contract generated:', content.substring(0, 100) + '...');
  },;
  const handleViewContract = (contractId: string) => {;'
    // // // console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details;
  };
  return (;
    <>;'
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />;
      <ContractTypeCards;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      <ContractTypeCards
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  ]);  const handleViewContract = (contractId: string) => {
=======

  const handleContractGenerated = (content: string) => {
    // // // console.log('Contract generated:', content.substring(0, 100) + '...')
  },

  const handleViewContract = (contractId: string) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  ]);  const handleViewContract = (contractId: string) => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details

      <ContractTypeCards 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        onStandardClick={() => setShowBuilderType('standard')}
=======
'
        onStandardClick={() => setShowBuilderType('standard')}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        onSmartClick={() => setShowBuilderType('smart')}
      />
      <RecentContractsTable;
        contracts={recentContracts}
        onViewContract={handleViewContract}
      />'
      {showBuilderType === 'standard' && (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {useState} from 'react';
import {SmartContractBuilder} from '@/components / contracts / SmartContractBuilder';
import {ContractBuilder} from '@/components / contracts / ContractBuilder';
import {ContractHeader} from './ContractHeader';
import {ContractTypeCards} from './ContractTypeCards';
import {RecentContractsTable} from './RecentContractsTable';
        <ContractBuilder
          isOpen={true}
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}
          clientName={user?.displayName || 'Client'}          isOpen={true}
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}
          clientName={user?.displayName || 'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}
      ;
      {showBuilderType === 'smart' && (;
        <SmartContractBuilder;
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
          talent={mockTalent}
          clientName={user?.displayName |'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}

    </>;
  );
}
return (
    <>)
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />

    <>;
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />;

      <ContractTypeCards;

      <ContractTypeCards 

        onStandardClick={() => setShowBuilderType('standard')}

      <RecentContractsTable;
        contracts={recentContracts}
        onViewContract={handleViewContract}
      />
      {showBuilderType === 'standard' && (
import {useState} from 'react';
import {SmartContractBuilder} from '@/components / contracts / SmartContractBuilder';
import {ContractBuilder} from '@/components / contracts / ContractBuilder';
import {ContractHeader} from './ContractHeader';
import {ContractTypeCards} from './ContractTypeCards';
import {RecentContractsTable} from './RecentContractsTable';

      {showBuilderType === 'smart' && (;

        <SmartContractBuilder
{showBuilderType === 'smart' && (;
        <SmartContractBuilder

import { useState } from 'react',;
import { SmartContractBuilder } from '@/components/contracts/SmartContractBuilder',;
import { ContractBuilder } from '@/components/contracts/ContractBuilder',;
import { ContractHeader } from './ContractHeader',;
import { ContractTypeCards } from './ContractTypeCards',;
import { RecentContractsTable } from './RecentContractsTable',;
import { TalentProfile } from '@/types/talent',;
import { useAuth } from '@/hooks/useAuth',;
;
// Mock data for demo purposes;
const mockTalent:TalentProfile = {;
  id:'talent-123',;
  user_id:'user-abc-123',;
  full_name:'Alex Chen',;
  professional_title:'Full Stack Developer',;
  hourly_rate:85,;
  profile_picture_url:'',;
  skills:['ReactNode.js', 'Smart Contracts']},;
;
export function ContractBuilderContent() {;
  const { user } = useAuth(),;
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none'),;
  const [recentContracts, setRecentContracts] = useState([;
    {;
      id:'contract-1',;
      title:'Website Redesign',;
      client:'Acme Corp',;
      talent:'Alex Chen',;
      date:'2025-05-15',;
      isSmartContract:true;
    },;
    {;
      id:'contract-2', ;
      title:'Mobile App Development',;
      client:'TechStart Inc',;
      talent:'Sarah Williams',;
      date:'2025-05-10',;
      isSmartContract:false;
    }
  ]),;
;
  const handleContractGenerated = (content:string) => {;
    // // // console.log('Contract generated:', content.substring(0, 100) + '...'),;
  },;
;
  const handleViewContract = (contractId:string) => {;
    // // // console.log('Viewing contract:', contractId),;
    // Future implementation:View specific contract details;
  },;
;
  return (;
    <>;
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />;
      ;
      <ContractTypeCards ;
        onStandardClick={() => setShowBuilderType('standard')}
        onSmartClick={() => setShowBuilderType('smart')}
      />;
      ;
      <RecentContractsTable ;
        contracts={recentContracts}
        onViewContract={handleViewContract}
      />;
      ;
      {showBuilderType === 'standard' && (;
        <ContractBuilder;
        <ContractBuilder
          isOpen={true}
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}
          clientName={user?.displayName || 'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}
      ;
      {showBuilderType === 'smart' && (;
        <SmartContractBuilder;
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
          talent={mockTalent}
          clientName={user?.displayName |'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}

        <SmartContractBuilder;
          isOpen={true}
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}

          onClose={() => setShowBuilderType('none')}

    </>;
  );

</>;
import {TalentProfile} from '@/types / talent';
import {use_auth} from '@/hooks / use_auth';
// Mock data for demo purposes;
const mock_talent: TalentProfile = {,
  id: 'talent - 123',
  user_id: 'user - abc - 123',
  full_name: 'Alex Chen',
  professional_title: 'Full Stack Developer',
  hourly_rate: 85,
  profile_picture_url: ,
  skills: ['ReactNode.js_smart Contracts']},
export /**
 * ContractBuilderContent - Function description;
 */
function ContractBuilderContent() {
  const { user } = use_auth ();
  const [recent_contracts, setRecentContracts] = useState ([;
      id: 'contract - 1',
      title: 'Website Redesign',
      client: 'Acme Corp',
      talent: 'Alex Chen',
      date: '2025 - 05 - 15',
      id: 'contract - 2',
      title: 'Mobile App Development',
      client: 'TechStart Inc',
      talent: 'Sarah Williams',
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      date: '2025 - 05 - 10',
;
const handleContractGenerated = (content: string) =>: any {'
    console.log ('Contract generated:', content.substring (0, 100) + '...');
  }
;
  const handleViewContract = (contract_id: string) =>: any {'
    console.log ('Viewing contract:', contract_id);
    // Future implementation: View specific contract details;
  }
;
  return (
<>;'
      <ContractHeader onCreateClick={() => setShowBuilderType ('smart')} />;
      <ContractTypeCards;'
        onStandardClick={() => setShowBuilderType ('standard')}'
      <ContractHeader onCreateClick={() => setShowBuilderType ('smart')} />;

        onStandardClick={() => setShowBuilderType ('standard')}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        onSmartClick={() => setShowBuilderType ('smart')}
      />;
      <RecentContractsTable;
        contracts={recent_contracts}
        onViewContract={handleViewContract}
<<<<<<< HEAD
      />;'
      {showBuilderType === 'standard' && (
        <ContractBuilder;
          is_open={true}'
          on_close={() => setShowBuilderType ('none')}
          talent={mock_talent}'
          client_name={user?.display_name || 'Client'}
          onContractGenerated={handleContractGenerated}
        />)}'
      {showBuilderType === 'smart' && (
        <SmartContractBuilder;
          is_open={true}'
          on_close={() => setShowBuilderType ('none')}
          talent={mock_talent}'
      />;

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          client_name={user?.display_name || 'Client'}
          onContractGenerated={handleContractGenerated}
        />)}
    </>);
}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
