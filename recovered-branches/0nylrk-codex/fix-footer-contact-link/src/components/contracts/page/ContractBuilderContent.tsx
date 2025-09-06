
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState  } from 'react';
import { SmartContractBuilder  } from '@/components/contracts/SmartContractBuilder';
import { ContractBuilder  } from '@/components/contracts/ContractBuilder';
import { ContractHeader  } from './ContractHeader';
import { ContractTypeCards  } from './ContractTypeCards';
import { RecentContractsTable  } from './RecentContractsTable';
import { TalentProfile  } from '@/types/talent';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useAuth } from '@/hooks/useAuth';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

// Mock data for demo purposes


export function ContractBuilderContent() {;


<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Mock data for demo purposes
=======
import { useAuth } from '@/hooks/useAuth';// Mock data for demo purposes
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { useAuth } from '@/hooks/useAuth';// Mock data for demo purposes
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
// Mock data for demo purposes
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
<<<<<<< HEAD
export function ContractBuilderContent() {
export function ContractBuilderContent() {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

// Mock data for demo purposes


export function ContractBuilderContent() {;


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { user } = useAuth();
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
  ]);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD


<<<<<<< HEAD

=======
=======
  const handleContractGenerated = (content: string) => {
    console.log('Contract generated:', content.substring(0, 100) + '...')
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======


'
import { useState } from 'react',;'
import { SmartContractBuilder } from '@/components/contracts/SmartContractBuilder',;'
import { ContractBuilder } from '@/components/contracts/ContractBuilder',;'
import { ContractHeader } from './ContractHeader',;'
import { ContractTypeCards } from './ContractTypeCards',;'
import { RecentContractsTable } from './RecentContractsTable',;'
import { TalentProfile } from '@/types/talent',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  const handleContractGenerated = (content: string) => {'
    // // // console.log('Contract generated:', content.substring(0, 100) + '...')
  },

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const handleViewContract = (contractId: string) => {
    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleViewContract = (contractId: string) => {
    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details

<<<<<<< HEAD

  },


<<<<<<< HEAD
=======
  const handleViewContract = (contractId: string) => {
    // // // console.log('Viewing contract:', contractId),
    // Future implementation: View specific contract details
  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======



  const handleViewContract = (contractId: string) => {'
    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <>'
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
      <ContractTypeCards
      
      <ContractTypeCards 
=======
  return (
    <>
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      
      <ContractTypeCards 


=======
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  ]);  const handleViewContract = (contractId: string) => {
=======




  const handleContractGenerated = (content: string) => {
    // // // console.log('Contract generated:', content.substring(0, 100) + '...')
  },

  const handleViewContract = (contractId: string) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details


  },



  return (
    <>
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />

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

      
      <ContractTypeCards 

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  ]);  const handleViewContract = (contractId: string) => {
    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details

      
      <ContractTypeCards 

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


      {showBuilderType === 'smart' && (;

        <SmartContractBuilder
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

    </>;
  );
}
<<<<<<< HEAD
=======


'
import {useState} from 'react';'
import {SmartContractBuilder} from '@/components / contracts / SmartContractBuilder';'
import {ContractBuilder} from '@/components / contracts / ContractBuilder';'
import {ContractHeader} from './ContractHeader';'
import {ContractTypeCards} from './ContractTypeCards';'
import {RecentContractsTable} from './RecentContractsTable';

          isOpen={true}'
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}'
          clientName={user?.displayName || 'Client'}
          onContractGenerated={handleContractGenerated}
        />;


'
import {TalentProfile} from '@/types / talent';'
import {use_auth} from '@/hooks / use_auth';
// Mock data for demo purposes;
const mock_talent: TalentProfile = {'
  id: 'talent - 123','
  user_id: 'user - abc - 123','
  full_name: 'Alex Chen','
  professional_title: 'Full Stack Developer',
  hourly_rate: 85,'
  profile_picture_url: '','
  skills: ['ReactNode.js_smart Contracts']},
export /**;
 * ContractBuilderContent - Function description;
 */
function ContractBuilderContent() {}
  const { user } = use_auth ();'
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none');
  const [recent_contracts, setRecentContracts] = useState ([;
    {'
      id: 'contract - 1','
      title: 'Website Redesign','
      client: 'Acme Corp','
      talent: 'Alex Chen','
      date: '2025 - 05 - 15',
      isSmartContract: true;
    }
    {'
      id: 'contract - 2','
      title: 'Mobile App Development','
      client: 'TechStart Inc','
      talent: 'Sarah Williams','
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      date: '2025 - 05 - 10',
      isSmartContract: false;
    }
  ]);
;
<<<<<<< HEAD
  const handleContractGenerated = (content: string) =>: any {'
    console.log ('Contract generated:', content.substring (0, 100) + '...');
  }
;
  const handleViewContract = (contract_id: string) =>: any {'
=======
  const handleContractGenerated = (content: string) =>: any {
    console.log ('Contract generated:', content.substring (0, 100) + '...');
  }
;
  const handleViewContract = (contract_id: string) =>: any {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    console.log ('Viewing contract:', contract_id);
    // Future implementation: View specific contract details;
  }
;
  return (
<<<<<<< HEAD
    <>;'
      <ContractHeader onCreateClick={() => setShowBuilderType ('smart')} />;
      <ContractTypeCards;'
        onStandardClick={() => setShowBuilderType ('standard')}'
=======
    <>;
      <ContractHeader onCreateClick={() => setShowBuilderType ('smart')} />;
      <ContractTypeCards;
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          client_name={user?.display_name || 'Client'}
          onContractGenerated={handleContractGenerated}
        />)}
    </>);
}
<<<<<<< HEAD



'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  ),;}
 //Future implementation: View specific contract details 
};
() => setShowBuilderType ('smart') 
}/> <ContractTypeCards onStandardClick= {
  () => setShowBuilderType ('standard') 
}onSmartClick= {
  () => setShowBuilderType ('smart') 
}/> <RecentContractsTable contracts= {
  recentContracts 
}onViewContract= {
  handleViewContract 
}/> {
  showBuilderType === 'standard' && (<ContractBuilder isOpen= {
  true 
}onClose= {
  () => setShowBuilderType ('none') 
}talent= {
  mockTalent 
}clientName= {
  user?.displayName || 'Client' 
}onContractGenerated= {
  handleContractGenerated 
}/>) 
}{
  showBuilderType === 'smart' && (<SmartContractBuilder isOpen= {
  true 
}onClose= {
  () => setShowBuilderType ('none') 
}talent= {
  mockTalent 
}clientName= {
  user?.displayName || 'Client' 
}onContractGenerated= {
  handleContractGenerated 
}/>) 
}</>) 
}
        <ContractBuilder
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
          talent={mockTalent}
          clientName={user?.displayName |'Client'}
          onContractGenerated={handleContractGenerated}
        />
      )}
      {showBuilderType === 'smart' && (
        <SmartContractBuilder
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
          talent={mockTalent}
          clientName={user?.displayName |'Client'}
          onContractGenerated={handleContractGenerated}
        />
      )}
    </>
  )
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
